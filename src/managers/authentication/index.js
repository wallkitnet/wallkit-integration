import Modal from '../modal';
import Firebase from "./firebase/Firebase";
import {
    WALLKIT_FIREBASE_UI_PLACEHOLDER_ID,
    WALLKIT_FIREBASE_WK_FORM_PLACEHOLDER_ID,
    WALLKIT_TOKEN_NAME,
    FIREBASE_TOKEN_NAME
} from "../../configs/constants";
import EventsNames, { FIREBASE_INIT, FIREBASE_LOADED, FIREBASE_UI_SHOWN } from "../events/events-name";
import Events from "../events";
import Frame from "../frame";
import SDK from "../sdk";
import Token from "./Token";
import ReCaptcha from "./ReCaptcha";
import { AuthForm } from "../form/forms/AuthForm";

export default class Authentication {
    #options;

    constructor(options) {
        if (!!Authentication.instance) {
            return Authentication.instance;
        }

        Authentication.instance = this;

        this.#options = options;

        this.token = new Token(WALLKIT_TOKEN_NAME);
        this.firebaseToken = new Token(FIREBASE_TOKEN_NAME);

        this.frame = new Frame();
        this.sdk = new SDK();

        if (!!options?.firebase) {
            let config = {
                mode: options.mode,
                onAuthStateChanged: this.updateFirebaseToken.bind(this),
                onSuccessAuth: this.onSuccessAuth.bind(this),
                uiShown: this.onFirebaseInit.bind(this),
                onAuthFail: this.onFirebaseAuthFail.bind(this)
            }

            if (typeof options.firebase === "object") {
                config = {
                    ...config,
                    ...options.firebase
                }
            }

            this.firebase = new Firebase(config);

            if (options.firebase.genuineForm === false) {
                this.initAuthForm();
            }
        }

        this.reCaptcha = new ReCaptcha(this, options?.reCaptcha);
        this.reCaptcha.events.subscribe(EventsNames.local.RECAPTCHA_VALIDATION_FAILED, () => {
            this.#setAuthorizationError('ReCaptcha Validation Failed! Please try again!');
        });
        this.reCaptcha.events.subscribe(EventsNames.local.RECAPTCHA_VALIDATION_SUCCESS, () => {
            this.#resetAuthorizationError();
        });

        if (this.reCaptcha.enabled) {
            if (!this.isAuthenticated()) {
                this.reCaptcha.init();
            }
        }

        this.events = new Events();
    }

    isAuthenticated() {
        if (this.sdk) {
            return this.sdk.methods.isAuthenticated();
        } else {
            return !!this.token.get();
        }
    }

    toggleFormLoader(state) {
        if (this.modal) {
            this.modal.toggleLoader(state);
        }
    }

    initAuthForm () {
        this.authForm = new AuthForm(`#${WALLKIT_FIREBASE_WK_FORM_PLACEHOLDER_ID}`, {
            signUp: this.#options.auth.signUp ?? true,
            onLogin: (data) => {
                this.firebase.signIn(data.email, data.password).then(() => {
                    this.authForm.hide();
                }).catch((error) => {
                    if (error.message) {
                        this.authForm.loginForm.setFormError(error.message);
                    }
                });
            },
            onSignUp: (data) => {
                this.firebase.signUp(data.email, data.password).then(() => {
                    this.authForm.hide();
                }).catch((error) => {
                    if (error.message) {
                        this.authForm.signUpForm.setFormError(error.message);
                    }
                });
            },
            onPasswordReset: (data) => {
                this.firebase.sendPasswordResetEmail(data.email).then(() => {
                    this.authForm.showSuccessPasswordReset();
                }).catch((error) => {
                    if (error.message) {
                        this.authForm.forgotPasswordForm.setFormError(error.message);
                    }
                });
            },
            onAuthFormShow: () => {
                this.firebase.hideAuthForm();
            },
            onCancel: () => {
                this.firebase.showAuthForm();
                this.authForm.toggle();
            }
        });
    }

    onSuccessAuth(data) {
        this.toggleFormLoader(true);

        const handleAuthError = (error) => {
            this.firebase.reset();
            this.toggleFormLoader(false);
            this.#setAuthorizationError(error?.message || 'Something went wrong!');
        }

        this.updateFirebaseToken(data.token);
        this.events.notify(EventsNames.local.SUCCESS_FIREBASE_AUTH, data);
        this.authInWallkit(data.token)
            .then((status) => {
                console.log('status', status);
                if (status) {
                    this.modal.hide();
                } else {
                    this.firebase.reset();
                }

                this.toggleFormLoader(false);
            }).catch((error) => handleAuthError(error));
    }

    authInWallkit(firebaseToken = null) {
        this.#resetAuthorizationError();
        return new Promise((resolve) => {
            if (firebaseToken) {
                this.sdk.methods.authenticateWithFirebase(firebaseToken).then(({ token, existed }) => {
                    this.setToken(token);

                    const userGetTimeout = setTimeout(() => {
                        resolve(false);
                    }, 10000);

                    const userEventCallback = () => {
                        clearTimeout(userGetTimeout);
                        this.sdk.methods.unsubscribeLocalEvent('user', userEventCallback);
                        this.events.notify(EventsNames.local.SUCCESS_AUTH, { register: !existed });
                        resolve(true);
                    };

                    this.sdk.methods.subscribeLocalEvent('user', userEventCallback);
                }).catch((error) => {
                    console.log('error', error);
                    this.#setAuthorizationError(error?.response?.error_description);
                    this.removeTokens();
                    resolve(false);
                });
            } else {
                resolve(false);
            }
        });
    }

    getDefaultAuthenticationFormContent () {
        return `<div>
                    <div id="authorization-error"></div>
                    <h2 class="wallkit-auth-modal__title">${this.#options?.modalTitle ?? 'Sign In'}</h2>
                    <div id="${WALLKIT_FIREBASE_WK_FORM_PLACEHOLDER_ID}"></div>
                    <div id="${WALLKIT_FIREBASE_UI_PLACEHOLDER_ID}"></div>
                </div>`;
    }

    render () {
        if (this.#options.auth.renderType === 'selector') {
            const placeholder = document.querySelector(this.#options.auth.selector);

            if (placeholder) {
                placeholder.insertAdjacentHTML('beforeend', this.#options?.content || this.getDefaultAuthenticationFormContent());
            }
        } else {
            this.modal = this.#createModal();
            this.modal.init();
        }
    }

    #createModal() {
        return new Modal({
            modalName: 'auth-modal',
            content: this.#options?.content || this.getDefaultAuthenticationFormContent(),
            className: 'wallkit-auth-modal',
            initialLoader: true
        });
    }

    async show() {
        this.modal.show();

        if (!this.firebase.isUiShown) {
            this.checkFirebaseInit();
        }
    }

    checkFirebaseInit() {
        if (!this.firebase.loaded) {
            this.firebase.events.subscribe(FIREBASE_LOADED, () => this.checkFirebaseInit(), { once: true });
        } else {
            if (!this.firebase.initialized) {
                this.firebase.events.subscribe(FIREBASE_INIT, () => this.checkFirebaseInit(), { once: true });
            } else {
                let shownTimeout = null;
                if (!this.firebase.isUiShown) {
                    shownTimeout = setTimeout(() => {
                        this.firebase.startFirebaseUi();
                        this.checkFirebaseInit();
                    }, 2000);

                    this.firebase.events.subscribe(FIREBASE_UI_SHOWN, () => {
                        if (shownTimeout) {
                            clearTimeout(shownTimeout);
                        }
                    });
                }
            }
        }
    }

    updateFirebaseToken(token) {
        this.firebaseToken.set(token);
        this.frame.sendEvent(EventsNames.wallkit.WALLKIT_EVENT_FIREBASE_TOKEN, token);
        this.sdk.methods.setFirebaseToken(token);
    }

    onFirebaseInit() {
        if (this.reCaptcha.enabled && this.reCaptcha.loaded) {
            this.reCaptcha.initCaptchaProcess();
        } else if (!this.reCaptcha.loaded) {
            this.events.subscribe(EventsNames.local.RECAPTCHA_LOADED, () => {
                this.reCaptcha.initCaptchaProcess();
            }, { once: true });
        }

        this.toggleFormLoader(false);
    }

    removeToken() {
        this.token.remove();
    }

    removeFirebaseToken() {
        this.firebaseToken.remove();
    }

    removeTokens() {
        this.removeToken();
        this.removeFirebaseToken();
    }

    setToken(token) {
      this.token.set(token);
      this.sdk.methods.setToken(token);
    }

    #initListeners() {

        this.events.subscribe(EventsNames.local.FRAME_MESSAGE, ({ name, value }) => {
            switch (name) {
                case EventsNames.wallkit.WALLKIT_EVENT_TOKEN:
                    if (value) {
                        this.setToken(value);
                    }
                    break;
                case EventsNames.wallkit.WALLKIT_EVENT_AUTH:
                case EventsNames.wallkit.WALLKIT_EVENT_REGISTRATION:
                case EventsNames.wallkit.WALLKIT_EVENT_GET_TOKEN:
                    if (value) {
                        let token = value.token;
                        this.setToken(token);
                    }
                    break;
                case EventsNames.wallkit.WALLKIT_FIREBASE_TOKEN:
                    this.firebaseToken.set(value);
                    if (this.sdk) {
                        this.sdk.methods.setFirebaseToken(value);
                    }
                    break;
                case EventsNames.wallkit.WALLKIT_EVENT_FIREBASE_CUSTOM_TOKEN:
                    if (value) {
                        this.firebase.authWithCustomToken(value);
                    }
                    break;
                case EventsNames.wallkit.WALLKIT_LOGOUT:
                    this.logout();
                    break;
            }
        });
    }

    logout() {
        this.removeToken()
        this.firebase.logout().then((success) => {
            if (success) {
                this.removeFirebaseToken();

                if (this.reCaptcha.enabled && !this.reCaptcha.loaded) {
                    this.reCaptcha.init().then(() => {
                        this.firebase.reset();
                    }).catch((error) => {
                        console.error(error);
                        this.firebase.reset();
                    });
                } else if (this.reCaptcha.loaded) {
                    this.firebase.reset();
                    this.reCaptcha.grecaptcha.reset();
                    this.reCaptcha.initCaptchaProcess();
                } else {
                    this.firebase.reset();
                }
            }
        });
    }

    dispatchTokens() {
        if (this.isAuthenticated()) {
           this.dispatchWallkitToken();
           this.dispatchFirebaseToken();
        }
    }

    dispatchWallkitToken() {
        const token = this.token.get();
        if (token) {
            this.frame.sendEvent(EventsNames.wallkit.WALLKIT_EVENT_TOKEN, token);
        }
    }

    dispatchFirebaseToken() {
        const token = this.firebaseToken.get();
        if (token) {
            this.frame.sendEvent(EventsNames.wallkit.WALLKIT_EVENT_FIREBASE_TOKEN, token);
        }
    }

    async handleTicketsToken(ticketPassAuthToken) {
        try {
            const response = await this.sdk.methods.getAuthTokensByTicketPassToken(ticketPassAuthToken);

            if (response) {
                const userCredential = await this.firebase.authWithCustomToken(response.firebase_custom_token);
                const firebaseToken = await userCredential.user.getIdToken();

                this.updateFirebaseToken(firebaseToken);
                this.setToken(response.token);

                await this.sdk.methods.getUser();
                this.dispatchTokens();

                this.events.notify(EventsNames.local.SUCCESS_AUTH, true);
                this.events.notify(EventsNames.local.TICKETS_TOKEN_AUTH_SUCCESS, true);

                return true;
            }

            return false;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    #setAuthorizationError(error) {
        const errorPlaceholder = document.getElementById('authorization-error');
        if (errorPlaceholder) {
            if (error === null) {
                errorPlaceholder.innerHTML = '';
            } else {
                errorPlaceholder.innerHTML = error || 'Something went wrong!';
            }
        }
    }

    #resetAuthorizationError() {
        this.#setAuthorizationError(null);
    }

    onFirebaseAuthFail(error) {
        this.toggleFormLoader(false);
    }

    handleOneTapResponse({ credential }) {
        this.frame.sendEvent(EventsNames.wallkit.WALLKIT_EVENT_ONE_TAP_SIGN_IN, credential);
    }

    init() {
        if (!!this.#options?.firebase) {
            this.render();
            this.firebase.init();
            this.authForm.render();
        }
        this.#initListeners();
    }
}
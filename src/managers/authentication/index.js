import Modal from '../modal';
import Firebase from "./Firebase";
import { WALLKIT_FIREBASE_UI_PLACEHOLDER_ID, WALLKIT_TOKEN_NAME, FIREBASE_TOKEN_NAME } from "../../configs/constants";
import EventsNames from "../events/events-name";
import Events from "../events";
import Frame from "../frame";
import SDK from "../sdk";
import Token from "./Token";
import ReCaptcha from "./ReCaptcha";

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
            this.modal = this.#createModal();
            this.modal.init();

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
            this.firebase.init();
        }

        this.reCaptcha = new ReCaptcha(this, options?.reCaptcha);
        this.reCaptcha.events.subscribe(EventsNames.local.RECAPTCHA_VALIDATION_FAILED, () => {
            this.#setAuthorizationError('ReCaptcha Validation Failed! Please try again!');
        });

        if (!!options?.reCaptcha) {
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

    onSuccessAuth(data) {
        this.modal.toggleLoader(true);

        const handleAuthError = (error) => {
            this.firebase.reset();
            this.modal.toggleLoader(false);
            this.#setAuthorizationError(error?.message || 'Something went wrong!');
        }

        this.updateFirebaseToken(data.token);
        this.events.notify(EventsNames.local.SUCCESS_FIREBASE_AUTH, data);
        this.authInWallkit(data.token).then((status) => {
            if (status) {
                this.modal.hide();
            } else {
                this.firebase.reset();
            }

            this.modal.toggleLoader(false);
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
                    this.#setAuthorizationError(error?.response?.error_description);
                    this.removeTokens();
                    resolve(false);
                });
            } else {
                resolve(false);
            }
        });
    }

    #createModal() {
        const defaultContentModal = `<div>
                                        <h2 class="wallkit-auth-modal__title">${this.#options?.modalTitle ?? 'Sign In'}</h2>
                                        <div id="${WALLKIT_FIREBASE_UI_PLACEHOLDER_ID}"></div>
                                     </div>`;

        return new Modal({
            modalName: 'auth-modal',
            content: this.#options?.content || defaultContentModal,
            className: 'wallkit-auth-modal',
            initialLoader: true
        });
    }

    async show() {
        this.modal.show();
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

        this.modal.toggleLoader(false);
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
                case EventsNames.wallkit.WALLKIT_EVENT_AUTH:
                case EventsNames.wallkit.WALLKIT_EVENT_REGISTRATION:
                case EventsNames.wallkit.WALLKIT_EVENT_GET_TOKEN:
                case EventsNames.wallkit.WALLKIT_EVENT_TOKEN:
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

                if (this.reCaptcha.enabled) {
                    this.reCaptcha.init().then(() => {
                        this.firebase.reset();
                    }).catch((error) => {
                        console.error(error);
                        this.firebase.reset();
                    });
                }
            }
        });
    }

    dispatchTokens() {
        if (this.isAuthenticated()) {
            if (this.token.get()) {
                this.frame.sendEvent(EventsNames.wallkit.WALLKIT_EVENT_TOKEN, this.token.get());
            }

            if (this.firebaseToken.get()) {
                this.frame.sendEvent(EventsNames.wallkit.WALLKIT_EVENT_FIREBASE_TOKEN, this.firebaseToken.get());
            }
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
            errorPlaceholder.innerHTML = error || '';
        }
    }

    #resetAuthorizationError() {
        this.#setAuthorizationError(null);
    }

    onFirebaseAuthFail(error) {
        this.modal.toggleLoader(false);
    }

    handleOneTapResponse({ credential }) {
        this.frame.sendEvent(EventsNames.wallkit.WALLKIT_EVENT_ONE_TAP_SIGN_IN, credential);
    }

    init() {
        this.#initListeners();
    }
}
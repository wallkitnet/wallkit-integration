import Modal from '../modal';
import Firebase from "./firebase/Firebase";
import {
  WALLKIT_FIREBASE_UI_PLACEHOLDER_ID,
  WALLKIT_FIREBASE_WK_FORM_PLACEHOLDER_ID,
  WALLKIT_TOKEN_NAME,
  FIREBASE_TOKEN_NAME,
  WALLKIT_AUTH_FORM_PLACEHOLDER_ID, WALLKIT_POPUP_DEV_URL
} from "../../configs/constants";
import EventsNames, { FIREBASE_INIT, FIREBASE_LOADED, FIREBASE_UI_SHOWN, PRE_SIGN_IN } from "../events/events-name";
import Events from "../events";
import Frame from "../frame";
import SDK from "../sdk";
import Token from "./Token";
import ReCaptcha from "./ReCaptcha";
import { AuthForm, RESET_PASSWORD_FORM_SLUG } from "../form/forms/AuthForm";
import { normalizeSelector } from "../../utils/DOM";
import { parseResetPasswordOobCodeHash, resetHash } from "../../utils/url";
import { Confirmation } from "./Confirmation";

export default class Authentication {
    #options;
    #oobCode='';

    constructor(options) {
        if (!!Authentication.instance) {
            return Authentication.instance;
        }

        Authentication.instance = this;

        this.#options = options;

        this.token = new Token(WALLKIT_TOKEN_NAME, null, options.public_key, !!options?.cookies?.subDomain);
        this.firebaseToken = new Token(FIREBASE_TOKEN_NAME, null, options.public_key, !!options?.cookies?.subDomain);

        this.frame = new Frame();
        this.sdk = new SDK();

        if (!!options?.firebase) {
            let config = {
                lang: options.lang || 'en',
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

                if (options.firebase.genuineForm === false) {
                    config.tosURL = '';
                    config.privacyPolicyURL = '';
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

        this.events = new Events();
        this.confirmation = new Confirmation();
    }

    get #authPlaceholderElementSelector() {
        let selector = this.#options?.auth?.firebase?.elementSelector ?? `#${WALLKIT_AUTH_FORM_PLACEHOLDER_ID}`;
        return normalizeSelector(selector);
    }

    get #authPlaceholderElementSelectorType() {
        switch (this.#authPlaceholderElementSelector.charAt(0)) {
            case '#':
                return 'id'
            case '.':
                return 'class'
        }
        return 'id';
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

    handleLogin (data) {
      this.firebase.signIn(data.email, data.password)
        .then(() => {})
        .catch((error) => {
          if (error.message) {
            this.authForm.loginForm.setFormError(error.message);
          }
          this.reCaptcha.grecaptcha.reset();
        });
    }

    handleSignUp (data) {
      this.firebase.signUp(data.email, data.password)
        .then(() => {
          this.firebase.updateName(data.name);
        })
        .catch((error) => {
          if (error.message) {
            this.authForm.signUpForm.setFormError(error.message);
          }
          this.reCaptcha.grecaptcha.reset();
        });
    }

    executeRecaptcha () {
      this.reCaptcha.grecaptcha.ready(() => {
        this.reCaptcha.grecaptcha.execute().then(() => {
          this.modal.toggleLoader(true);
        }).catch((error) => {
          console.log('EXECUTE RECAPTCHA ERROR:', error);
        });
      })
    }

    initAuthForm () {
        const { tosURL, privacyPolicyURL, termsOfService } = this.#options.firebase;

        this.authForm = new AuthForm(`#${WALLKIT_FIREBASE_WK_FORM_PLACEHOLDER_ID}`, {
            triggerButton: this.firebase.providers.length > 1,
            signUp: this.#options.auth.signUp ?? true,
            termsOfService: { tosURL, privacyPolicyURL, termsOfService },
            defaultForm: this.#options.auth.defaultForm || false,
            onLogin: async (data) => {
              const proceed = await this.events.preventiveEvent(PRE_SIGN_IN, data);

              if (!proceed) {
                return;
              }

              if (this.reCaptcha.enabled) {
                this.executeRecaptcha();

                this.reCaptcha.events.subscribe(
                  EventsNames.local.RECAPTCHA_VALIDATION_SUCCESS,
                  this.handleLogin.bind(this, data),
                  { once: true }
                );
              } else {
                this.handleLogin(data);
              }
            },
            onSignUp: (data) => {
              if (this.reCaptcha.enabled) {
                this.executeRecaptcha();

                this.reCaptcha.events.subscribe(
                  EventsNames.local.RECAPTCHA_VALIDATION_SUCCESS,
                  this.handleSignUp.bind(this, data),
                  { once: true }
                );
              } else {
                this.handleSignUp(data);
              }
            },
            onPasswordForgot: async (data) => {
              try {
                this.toggleFormLoader(true);

                let success;
                if (this.#options.firebase.genuinePasswordReset === false) {
                  const { result } = await this.sdk.methods.firebasePasswordReset(data.email);
                  success = result;
                } else {
                  await this.firebase.sendPasswordResetEmail(data.email);
                  success = true;
                }

                if (success) {
                  this.authForm.showSuccessPasswordForgot();
                } else {
                  throw new Error('Something went wrong');
                }

                this.toggleFormLoader(false);
              } catch (error) {
                if (error.message) {
                    this.authForm.forgotPasswordForm.setFormError(error.message);
                }
                this.toggleFormLoader(false);
              }
            },
            onPasswordReset: async (data) => {
                try {
                    this.toggleFormLoader(true);

                    let success;

                    success = await this.firebase.sendNewPasswordResetPassword(data.new_password, this.#oobCode)

                    if (success) {
                        this.authForm.showSuccessPasswordReset();
                    } else {
                        this.authForm.resetPasswordForm.setFormError("Something went wrong");
                    }

                    this.toggleFormLoader(false);
                } catch (error) {
                    if (error.message) {
                        this.authForm.resetPasswordForm.setFormError(error.message);
                    }
                    this.toggleFormLoader(false);
                }
            },
            onAuthFormShow: () => {
                this.firebase.hideAuthForm();
            },
            onCancel: () => {
                this.firebase.showAuthForm();
                this.authForm.reset();
            }
        });
    }

    onSuccessAuth(data) {
        this.toggleFormLoader(true);

        const handleAuthError = (error) => {
            this.resetAuthProcess(false);
            this.toggleFormLoader(false);
            this.#setAuthorizationError(error?.message || 'Something went wrong!');
        }

        this.updateFirebaseToken(data.token);
        this.events.notify(EventsNames.local.SUCCESS_FIREBASE_AUTH, data);
        this.authInWallkit(data.token)
            .then((status) => {
                if (status) {
                    this.modal.hide();
                    if (this.authForm) {
                        this.authForm.hide();
                    }
                } else {
                    handleAuthError();
                }

                this.toggleFormLoader(false);
            }).catch((error) => handleAuthError(error));
    }

    async authInWallkit(firebaseToken = null) {
        this.#resetAuthorizationError();
        if (!firebaseToken) {
            throw new Error('Your authorization is broken. Please login again.');
        }
        try {
            const response = await this.sdk.methods.authenticateWithFirebase(firebaseToken);
            this.setToken(response.token);
            return await new Promise((resolve, reject) => {
                const userGetTimeout = setTimeout(() => {
                    resolve(false);
                }, 10000);
                const userEventCallback = () => {
                    clearTimeout(userGetTimeout);
                    this.sdk.methods.unsubscribeLocalEvent('user', userEventCallback);
                    this.events.notify(EventsNames.local.SUCCESS_AUTH, {register: !response.existed});
                    resolve(true);
                };
                this.sdk.methods.subscribeLocalEvent('user', userEventCallback);
            });
        } catch (error) {
            console.log('error', error);
            this.removeTokens();
            throw error;
        }
    }

    getDefaultAuthenticationFormContent () {
        return `<div>
                    <div id="authorization-error"></div>
                    <h2 class="wallkit-auth-modal__title">${this.#options?.modalTitle ?? 'Sign In'}</h2>
                    <div ${this.#authPlaceholderElementSelectorType}="${this.#authPlaceholderElementSelector.substring(1)}"></div>
                </div>`;
    }

    attachFormPlaceholders (selector = this.#authPlaceholderElementSelector) {
      const placeholders = `<div id="${WALLKIT_FIREBASE_WK_FORM_PLACEHOLDER_ID}"></div>
                            <div id="${WALLKIT_FIREBASE_UI_PLACEHOLDER_ID}"></div>`

      const targetElement = document.querySelector(selector);

      if (targetElement) {
        targetElement.innerHTML = placeholders;
      }
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

        this.attachFormPlaceholders();
    }

    #createModal() {
        return new Modal({
            modalName: 'auth-modal',
            content: this.#options?.content || this.getDefaultAuthenticationFormContent(),
            className: 'wallkit-auth-modal',
            initialLoader: true
        });
    }

    async show(authFormSlug) {
        if (this.#options.firebase.genuineForm === false) {
            if (this.authForm) {
                this.authForm.defaultForm = authFormSlug;
                if (!this.authForm.triggerButton || !this.authForm.triggerButton.isVisible) {
                    this.authForm.showDefaultForm();
                }
            }
        }
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
        try {
          if (this.#options.firebase.genuineForm !== false) {
            if (this.reCaptcha.enabled && this.reCaptcha.loaded) {
              this.reCaptcha.initCaptchaProcess();
            } else if (!this.reCaptcha.loaded) {
              this.events.subscribe(EventsNames.local.RECAPTCHA_LOADED, () => {
                this.reCaptcha.initCaptchaProcess();
              }, {once: true});
            }
          }

          this.toggleFormLoader(false);
        } catch (e) {
          this.toggleFormLoader(false);
        }
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

    resetAuthProcess (reset = true) {
      this.firebase.reset();
      this.firebase.showAuthForm();

      if (this.firebase.genuineForm === false && reset) {
        this.authForm.reset();
      }

      if (this.reCaptcha.enabled) {
        this.reCaptcha.grecaptcha.reset();
      }
    }

    async logout() {
      try {
        this.removeToken()
        const success = await this.firebase.logout();

        if (success) {
          this.removeFirebaseToken();

          if (this.reCaptcha.enabled && !this.reCaptcha.loaded) {
            await this.reCaptcha.init();
          } else if (this.reCaptcha.loaded) {
            this.resetAuthProcess();
            this.reCaptcha.grecaptcha.reset();

            if (this.#options.firebase.genuineForm !== false) {
              this.reCaptcha.initCaptchaProcess();
            }
          }

          if (this.isAuthenticated()) {
            await this.sdk.methods.logout();
          } else {
            this.frame.sendEvent('wk-event-logout', true);
          }

          this.events.notify(EventsNames.local.LOGOUT, true);
        }

        this.resetAuthProcess();
      } catch (e) {
        console.log('ERROR:', e);
        this.resetAuthProcess();
      }
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

    async handleExternalAuthProvider(externalUserId) {
        try {
            if (!externalUserId) {
                return false;
            }

            const response = await this.sdk.methods.getAuthTokensByExternalUserId(externalUserId);
            if (!response) {
                return false;
            }

            const userCredential = await this.firebase.authWithCustomToken(response.firebase_custom_token);
            const firebaseToken = await userCredential.user.getIdToken();

            if (!response.token || !firebaseToken) {
                return false;
            }

            this.updateFirebaseToken(firebaseToken);
            this.setToken(response.token);

            await this.sdk.methods.getUser();
            this.dispatchTokens();

            this.events.notify(EventsNames.local.SUCCESS_AUTH, true);
            this.events.notify(EventsNames.local.EXTERNAL_PROVIDER_TOKEN_AUTH_SUCCESS, true);

            return true;

        } catch (error) {
            console.error(error);
            return error;
        }
    }

    #setAuthorizationError(error) {
        if (this.authForm) {
            this.authForm.handleError(error);
        } else {
            const errorPlaceholder = document.getElementById('authorization-error');
            if (errorPlaceholder) {
                if (error === null) {
                    errorPlaceholder.innerHTML = '';
                } else {
                    errorPlaceholder.innerHTML = error || 'Something went wrong!';
                }
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

    #checkIfResetPasswordURL() {
        const oobCode = parseResetPasswordOobCodeHash();
        if (oobCode) {
            this.#oobCode = oobCode;
            if (this.authForm.triggerButton) {
                this.authForm.triggerButton.hide();
            }
            this.firebase.hideAuthForm();
            this.authForm.showForm(RESET_PASSWORD_FORM_SLUG);
            this.modal.show();
            resetHash();
        }
    }

    init() {
        if (!!this.#options?.firebase) {
            // Render recaptcha before the firebase init if not custom FB form
            if (this.#options.firebase.genuineForm !== false) {
              if (this.reCaptcha.enabled) {
                if (!this.isAuthenticated()) {
                  this.reCaptcha.init();
                }
              }
            }

            this.render();
            this.firebase.init();

            if (this.authForm) {
              this.authForm.render();
              this.reCaptcha.init();
            }
        }
        this.#initListeners();
        this.#checkIfResetPasswordURL();
    }
}

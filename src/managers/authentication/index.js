import Modal from '../modal';
import Firebase from "./firebase/Firebase";
import {
  WALLKIT_FIREBASE_UI_PLACEHOLDER_ID,
  WALLKIT_FIREBASE_WK_FORM_PLACEHOLDER_ID,
  WALLKIT_TOKEN_NAME,
  FIREBASE_TOKEN_NAME,
  WALLKIT_AUTH_FORM_PLACEHOLDER_ID
} from "../../configs/constants";
import EventsNames, {
    FIREBASE_INIT,
    FIREBASE_LOADED,
    FIREBASE_UI_SHOWN,
    MODAL_OPEN,
    PRE_SIGN_IN
} from "../events/events-name";
import Events from "../events";
import Frame from "../frame";
import SDK from "../sdk";
import Token from "./Token";
import ReCaptcha from "./ReCaptcha";
import {AuthForm, RESET_PASSWORD_FORM_SLUG} from "../form/forms/AuthForm";
import {normalizeSelector} from "../../utils/DOM";
import {
    parseResetPasswordOobCodeHash,
    resetHash,
    parseAuthEmailLinkOobCodeHash,
    parseCustomTokenHash, getUrlParamByKey
} from "../../utils/url";
import isEmpty from "lodash.isempty";
import debug from "../../utils/debug";

export default class Authentication {
    #options;
    #oobCode = '';
    #showAuthFormSlug = '';

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

            if (options.firebase.genuineForm === false && this.#isEmailProvider) {
                this.initAuthForm();
            }
        }

        this.reCaptcha = new ReCaptcha(this, options?.reCaptcha);
        this.reCaptcha.events.subscribe(EventsNames.local.RECAPTCHA_VALIDATION_FAILED, () => {
            this.#setAuthorizationError('ReCaptcha Validation Failed! Please try again!', 'recaptcha/validation-failed');
        });
        this.reCaptcha.events.subscribe(EventsNames.local.RECAPTCHA_VALIDATION_SUCCESS, () => {
            this.#resetAuthorizationError();
        });

        this.events = new Events();
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
            if(!!this.#options?.firebase){
                return !!(this.sdk.methods.isAuthenticated() && this.token.get() && this.firebaseToken.get());
            } else {
                return !!(this.sdk.methods.isAuthenticated() || this.token.get());
            }
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
          if (!isEmpty(error.message)) {
            this.authForm.loginForm.setFormError(error.message, error.code || error?.response?.error || false);
          }
          if (!isEmpty(this.reCaptcha) && this.reCaptcha.enabled && !isEmpty(this.reCaptcha.grecaptcha)) {
              this.reCaptcha.grecaptcha.reset();
          }
        });
    }

    handleSignUp (data) {
      this.firebase.signUp(data.email, data.password)
        .then(() => {
          this.firebase.updateName(data.name);
        })
        .catch((error) => {
          if (!isEmpty(error.message)) {
            this.authForm.signUpForm.setFormError(error.message, error.code || error?.response?.error || false);
          }
          if (!isEmpty(this.reCaptcha) && this.reCaptcha.enabled && !isEmpty(this.reCaptcha.grecaptcha)) {
            this.reCaptcha.grecaptcha.reset();
          }
        });
    }

    executeRecaptcha () {
      this.reCaptcha.grecaptcha.ready(() => {
        this.reCaptcha.grecaptcha.execute().then(() => {
          this.modal.toggleLoader(true);
        }).catch((error) => {
          debug.log('EXECUTE RECAPTCHA ERROR:', error);
        });
      })
    }

    get #isEmailProvider () {
        const { providers } = this.#options.firebase;
        if (isEmpty(providers)) return false;
        if(!Array.isArray(providers)) return false;
        for (const provider of providers) {
            if (typeof provider === "string" && provider.toLowerCase() === 'email') return true;
            if (typeof provider !== "string" && !isEmpty(provider.provider) && provider.provider.toLowerCase() === 'email') return true;
        }
        return false;
    }

    initAuthForm () {
        const { tosURL, privacyPolicyURL, termsOfService, providers, passwordSignInIgnoreValidation, authOnPasswordReset } = this.#options.firebase || {};
        const { signUp, defaultForm, forms } = this.#options.auth || {};
        this.authForm = new AuthForm(`#${WALLKIT_FIREBASE_WK_FORM_PLACEHOLDER_ID}`, {
            triggerButton: this.firebase.providers.length > 1,
            signUp: signUp ?? true,
            termsOfService: { tosURL, privacyPolicyURL, termsOfService },
            defaultForm: defaultForm || false,
            authProviders: providers || false,
            customizeAuthForms: forms || false,
            passwordSignInIgnoreValidation: passwordSignInIgnoreValidation || false,
            authOnPasswordReset: authOnPasswordReset || false,
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
            onGetEmailLink: async (data) => {
                try {
                    this.toggleFormLoader(true);

                    await this.sdk.client.post({
                        path: '/firebase/email-auth-link',
                        data: {
                            email: data.email
                        }
                    }).then((res)=>{
                        if (res.result){
                            this.authForm.showSuccessEmailLink();
                        } else {
                            this.authForm.emailLinkForm.setFormError("Something went wrong", 'auth-email-link/unknown-error');
                        }
                    }).catch(error => {
                        if (!isEmpty(error.message)) {
                            this.authForm.emailLinkForm.setFormError(error.message, error.code || error?.response?.error || false);
                        }
                        this.toggleFormLoader(false);
                    });

                    this.toggleFormLoader(false);
                } catch (error) {
                    if (!isEmpty(error.message)) {
                        this.authForm.emailLinkForm.setFormError(error.message, error.code || error?.response?.error || false);
                    }
                    this.toggleFormLoader(false);
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
                if (!isEmpty(error.message)) {
                    this.authForm.forgotPasswordForm.setFormError(error.message, error.code || error?.response?.error || false);
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
                        const { authOnPasswordReset } = this.#options.firebase;
                        this.authForm.showSuccessPasswordReset();
                        if (authOnPasswordReset) {
                            this.handleLogin({email: success.email, password: data.new_password})
                        }
                    } else {
                        this.authForm.resetPasswordForm.setFormError("Something went wrong", 'reset-password/unknown-error');
                    }

                    this.toggleFormLoader(false);
                } catch (error) {
                    if (!isEmpty(error.message)) {
                        this.authForm.resetPasswordForm.setFormError(error.message, error.code || error?.response?.error || false);
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
            },
            getShowAuthFormSlug: () => {
                return this.#showAuthFormSlug;
            }
        });
    }

    onSuccessAuth(data) {
        this.toggleFormLoader(true);

        const handleAuthError = (error) => {
            this.resetAuthProcess(false);
            this.toggleFormLoader(false);
            this.#setAuthorizationError(error?.message || 'Something went wrong!', error?.code || error?.response?.error || 'unknown-error');
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
            debug.log('error', error);
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
            initialLoader: true,
            ui: this.#options?.ui,
        });
    }

    async show(authFormSlug) {
        this.#showAuthFormSlug = authFormSlug ?? '';

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

              this.reCaptcha.initCaptchaProcess().then(() => {
                this.events.notify(EventsNames.local.FIREBASE_READY, true);
              });

            } else if (!this.reCaptcha.loaded && this.reCaptcha.enabled) {

              if (this.isAuthenticated()) {
                this.events.notify(EventsNames.local.FIREBASE_READY, true);
              }

              this.events.subscribe(EventsNames.local.RECAPTCHA_LOADED, () => {
                this.reCaptcha.initCaptchaProcess().then(() => {
                    this.events.notify(EventsNames.local.FIREBASE_READY, true);
                });
              }, {once: true});

            } else if (!this.reCaptcha.enabled) {
                this.events.notify(EventsNames.local.FIREBASE_READY, true);
            }
          } else if (this.authForm?.triggerButton){
              this.authForm.triggerButton.events.notify(FIREBASE_UI_SHOWN, true);
              this.events.notify(EventsNames.local.FIREBASE_READY, true);
          } else {
              this.events.notify(EventsNames.local.FIREBASE_READY, true);
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
                    if (this.isAuthenticated()) {
                      this.logout();
                    }
                    break;
            }
        });
    }

    resetAuthProcess (reset = true) {
      this.firebase.isGoogleOneTapShow = !this.isAuthenticated();
      this.firebase.reset();
      this.firebase.showAuthForm();

      if (this.firebase.genuineForm === false && reset) {
        this.authForm.reset();
      }

      if (!isEmpty(this.reCaptcha) && this.reCaptcha.enabled && !isEmpty(this.reCaptcha.grecaptcha)) {
        this.reCaptcha.grecaptcha.reset();
      }
    }

    async logout() {
      try {
        this.removeToken();
        const success = await this.firebase.logout();

        if (success) {
          this.removeFirebaseToken();

          if (this.reCaptcha.enabled && !this.reCaptcha.loaded) {
            await this.reCaptcha.init();
          } else if (this.reCaptcha.loaded) {
            this.resetAuthProcess();
            if (!isEmpty(this.reCaptcha) && this.reCaptcha.enabled && !isEmpty(this.reCaptcha.grecaptcha)) {
              this.reCaptcha.grecaptcha.reset();
            }

            if (this.#options.firebase.genuineForm !== false) {
              this.reCaptcha.initCaptchaProcess();
            }
          }

          if (this.sdk.methods.isAuthenticated()) {
            await this.sdk.methods.logout();
          } else if (this.token.get() || this.firebaseToken.get()) {
            this.frame.sendEvent(EventsNames.wallkit.WALLKIT_LOGOUT, true);
          }

          this.events.notify(EventsNames.local.LOGOUT, true);
        }

        this.resetAuthProcess();
      } catch (e) {
        debug.log('ERROR:', e);
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
                return await this.authWithCustomToken(response.firebase_custom_token);
            }

            return false;
        } catch (error) {
            debug.log(error);
            return error;
        }
    }

    async authWithCustomToken(customFirebaseToken = null, wallkitToken = null) {

        if (!customFirebaseToken || !wallkitToken) {
            return false;
        }

        try {

            const userCredential = await this.firebase.authWithCustomToken(customFirebaseToken);

            debug.log('authWithCustomToken -> userCredential', userCredential);

            if (!userCredential) {
                return false;
            }

            const firebaseToken = await userCredential.user.getIdToken();

            debug.log('authWithCustomToken -> firebaseToken', firebaseToken);

            this.updateFirebaseToken(firebaseToken);
            this.setToken(wallkitToken);

            await this.sdk.methods.getUser();
            this.dispatchTokens();

            this.events.notify(EventsNames.local.SUCCESS_AUTH, true);

            return true;

        } catch (error) {
            debug.log('authWithCustomToken -> error', error)
            debug.log(error);
            return false;
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
            debug.log(error);
            return error;
        }
    }

    #setAuthorizationError(errorMessage, errorCode) {
        if (this.authForm) {
            this.authForm.handleError(errorMessage, errorCode);
        } else {
            const errorPlaceholder = document.getElementById('authorization-error');
            if (errorPlaceholder) {
                if (errorMessage === null) {
                    errorPlaceholder.innerHTML = '';
                } else {
                    errorPlaceholder.innerHTML = errorMessage || 'Something went wrong!';
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

    handleOneTapResponse({credential}) {
        this.frame.sendEvent(EventsNames.wallkit.WALLKIT_EVENT_ONE_TAP_SIGN_IN, credential);
    }

    #checkIfResetPasswordURL() {
        const oobCode = parseResetPasswordOobCodeHash();
        if (oobCode) {
            this.showResetPassword(oobCode);
            resetHash();
            return true;
        }
        return false;
    }

    showResetPassword(oobCode) {
        if (!isEmpty(oobCode)) {
            this.#oobCode = oobCode;
            if (this.authForm.triggerButton) {
                this.authForm.triggerButton.hide();
            }
            this.firebase.hideAuthForm();
            this.authForm.showForm(RESET_PASSWORD_FORM_SLUG);
            this.modal.show();
        }
    }

    async #checkIfAuthEmailLinkURL() {
        const authData = parseAuthEmailLinkOobCodeHash();
        const {oobcode, email} = authData || {}
        if (!isEmpty(oobcode) && !isEmpty(email)) {
            resetHash();
            const resJson = await this.firebase.authEmailLink(oobcode, email);
            this.onSuccessAuth({
                operationType: "signIn",
                token: resJson.idToken,
            });
            return true;
        }
        return false;
    }

    async #checkCustomToken() {

        // this.firebase.events.subscribe(FIREBASE_INIT, async () => {
            this.checkFirebaseInit();

            const customFirebaseToken = getUrlParamByKey('custom-firebase-token');
            const wallkitToken = getUrlParamByKey('wallkit-token');
            const popupSlug = getUrlParamByKey('popup-slug');

            if (customFirebaseToken && wallkitToken) {

                window.history.replaceState({}, document.title, window.location.pathname);

                await this.authWithCustomToken(customFirebaseToken, wallkitToken);
                if (popupSlug) {
                    this.events.notify(MODAL_OPEN, popupSlug);
                    return true;
                }
            }
            return false;

        // }, {once: true});
    }

    async handleAuthRouting() {
        const isOpenResetPassword = this.#checkIfResetPasswordURL();
        const isOpenAuthWithLink =  await this.#checkIfAuthEmailLinkURL();
        const isOpenModalAfterAuthWithCustomToken =  await this.#checkCustomToken();

        return isOpenResetPassword || isOpenAuthWithLink || isOpenModalAfterAuthWithCustomToken;
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
            this.firebase.isGoogleOneTapShow = !this.isAuthenticated();
            this.firebase.init();

            if (this.authForm) {
              this.authForm.render();
              this.reCaptcha.init();
            }
        }
        this.#initListeners();

    }
}

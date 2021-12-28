import EventsNames from "../events/events-name";
import { createElement, injectInBody, injectInHead } from "../../utils/DOM";
import { loadScripts } from "../../utils/loaders";
import SDK from "../sdk";
import Events from "../events";

export default class ReCaptcha {
    #sdk;

    constructor(authenticationInstance, options) {
        if (!authenticationInstance) {
            throw Error('Authentication Instance is not provided');
        }

        this.enabled = !!options;
        this.authentication = authenticationInstance;
        this.options = options;
        this.loaded = false;
        this.valid = false;
        this.siteKey = options?.sitekey;
        this.grecaptcha = null;

        this.#sdk = new SDK();
        this.events = new Events();
    }

    setOptions(options) {
        if (options) {
            this.options = options;
            this.enabled = true;
        }


        return this;
    }

    async load() {
        try {
            if (!this.options) {
                return false;
            }

            if (this.loaded) {
                return true;
            }

            const recaptchaScripts = [
                {
                    url: `https://www.google.com/recaptcha/api.js`,
                    id: 'recaptcha-script',
                    defer: true,
                    onload: () => {
                        this.loaded = true;
                        this.grecaptcha = window.grecaptcha;
                        this.events.notify(EventsNames.RECAPTCHA_LOADED, true);

                        Promise.resolve(true);
                    }
                },
            ];

            window.onRecaptchaAuth = this.#onRecaptchaAuth.bind(this);
            this.#initReCaptchaPlaceholder();
            this.hideBadge();

            loadScripts(recaptchaScripts);
        } catch (e) {
            console.error(e);
            return false;
        }
    }

    #initReCaptchaPlaceholder() {
        const reCaptchaPlaceholder = createElement('div');
        reCaptchaPlaceholder.classList.add('g-recaptcha');
        reCaptchaPlaceholder.dataset.sitekey = this.siteKey;
        reCaptchaPlaceholder.dataset.size = 'invisible';
        reCaptchaPlaceholder.dataset.callback = 'onRecaptchaAuth';
        this.authentication.modal.modalContent.appendChild(reCaptchaPlaceholder);
        // injectInBody(reCaptchaPlaceholder);
    }

    #onRecaptchaAuth(token) {
        return this.#sdk.methods.validateReCaptchaToken(token).then(() => {
            this.valid = true;
            this.authentication.modal.toggleLoader(false);
        }).catch(() => {
            this.valid = false;
        }).finally(() => {
            this.authentication.modal.toggleLoader(false);
        })
    }

    hideBadge() {
        const style = createElement('style');
        style.innerText = `.grecaptcha-badge {
                    visibility: hidden;
                };`;
        injectInHead(style);
    }

    async initCaptchaProcess() {
        try {
            this.valid = false;

            const handleCaptchaState = () => {
                if (!this.valid) {
                    this.events.notify(EventsNames.local.RECAPTCHA_VALIDATION_FAILED);
                    this.authentication.firebase.reset();
                    this.authentication.modal.toggleLoader(true);
                }
            }

            const emailBtn = document.querySelector('.firebaseui-idp-button[data-provider-id="password"]');

            if (emailBtn) {
                emailBtn.addEventListener('click', () => {
                    this.authentication.modal.toggleLoader(true);

                    this.grecaptcha.ready(() => {
                        this.grecaptcha.execute();

                        setTimeout(() => {
                            this.authentication.modal.toggleLoader(false);
                        }, 300);
                    });

                    const emailField = document.querySelector('.firebaseui-id-email');
                    const submitBtn = document.querySelector('.firebaseui-id-page-sign-in .firebaseui-id-submit');
                    const cancelBtn = document.querySelector('.firebaseui-id-page-sign-in .firebaseui-id-secondary-link');

                    if (emailField) {
                        emailField.addEventListener('input', () => {
                            handleCaptchaState();
                        });

                        emailField.addEventListener('keydown', (event) => {
                            if (event.code && event.code === 'Enter') {
                                handleCaptchaState();
                            }
                        });
                    }

                    if (cancelBtn) {
                        cancelBtn.onclick = () => {
                            handleCaptchaState();
                        }
                    }

                    if (submitBtn) {
                        submitBtn.onclick = () => {
                            handleCaptchaState();
                        }
                    }
                });
            }
        } catch (error) {
            this.authentication.firebase.reset();
            console.error('error', error);
        }
    }


    async init () {
        try {
            if (!this.options || this.loaded) {
                return false;
            }

            if (this.options === true) {
                const response = await this.#sdk.methods.getReCaptchaSettings()

                if (response && response.active) {
                    this.siteKey = response.recaptcha_public_key;

                    return this.load();
                }

            } else {
                return this.load();
            }

            return false;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}
import { createElement } from "../../../utils/DOM";
import Events from "../../events";
import {FIREBASE_UI_SHOWN, DEFAULT_AUTH_FORM_SLUG_UPDATED} from "../../events/events-name";
import {
    SIGN_IN_FORM_SLUG,
    SIGN_UP_FORM_SLUG
} from "../forms/AuthForm";
import {
    TRIGGER_EMAIL_BUTTON_TITLE_SELECTOR,
    TRIGGER_GOOGLE_BUTTON_TITLE_SELECTOR,
    TRIGGER_EMAIL_BUTTON_CLASS_NAME
} from "../../../configs/constants";

export class TriggerButton {
    #fullLabel = {
        email: 'Sign in with email',
    };
    #emailButonIconUrl = 'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg';
    #className = TRIGGER_EMAIL_BUTTON_CLASS_NAME;
    #buttonsTitleSelector = {
        email: TRIGGER_EMAIL_BUTTON_TITLE_SELECTOR,
        google: TRIGGER_GOOGLE_BUTTON_TITLE_SELECTOR
    }
    #options;
    constructor(selector, options) {
        this.#options = this.checkOptions(options);
        this.events = new Events();
        this.selector = selector;
        this.element = this.createElement();
        this.subscribeEventForChanges();

        if (options.onClick) {
            this.element.addEventListener('click', options.onClick.bind(this));
        }
    }

    checkOptions(options) {
        if (options.authProviders && options.authProviders.length) {
            Object.keys(options.authProviders).forEach(key => {
                let authProvider = options.authProviders[key];
                if (typeof authProvider.provider !== "undefined" && authProvider.provider !== '') {
                    let buttonKey = authProvider.provider.toLowerCase();
                    options[buttonKey] = {
                        fullLabel: '',
                        signInLabel: '',
                        signUpLabel: '',
                        label: '',
                        backgroundColor: '',
                        textColor: '',
                        textColorStyle: '',
                        iconUrl: '',
                        styles: {}
                    };
                    if (buttonKey === 'email') {
                        if (typeof this.#fullLabel[buttonKey] !== "undefined") {
                            options[buttonKey].fullLabel = this.#fullLabel[buttonKey];
                            options[buttonKey].label = this.#fullLabel[buttonKey];
                        }
                        options[buttonKey].iconUrl = this.#emailButonIconUrl;
                    }
                    if (typeof authProvider.fullLabel !== "undefined"
                        && authProvider.fullLabel.trim() !== "") {
                        options[buttonKey].fullLabel = authProvider.fullLabel;
                        options[buttonKey].label = authProvider.fullLabel;
                    }
                    if (typeof authProvider.signInLabel !== "undefined"
                        && authProvider.signInLabel.trim() !== "") {
                        options[buttonKey].signInLabel = authProvider.signInLabel;
                        if (options.defaultFormSlug === SIGN_IN_FORM_SLUG) {
                            options[buttonKey].label = options[buttonKey].signInLabel;
                        }
                    }
                    if (typeof authProvider.signUpLabel !== "undefined"
                        && authProvider.signUpLabel.trim() !== "") {
                        options[buttonKey].signUpLabel = authProvider.signUpLabel;
                        if (options.defaultFormSlug === SIGN_UP_FORM_SLUG) {
                            options[buttonKey].label = options[buttonKey].signUpLabel;
                        }
                    }
                    if (typeof authProvider.buttonColor !== "undefined"
                        && authProvider.buttonColor.trim() !== "") {
                        options[buttonKey].backgroundColor = authProvider.buttonColor;
                        options[buttonKey].styles.backgroundColor = authProvider.buttonColor;
                    }
                    if (typeof authProvider.buttonTextColor !== "undefined"
                        && authProvider.buttonTextColor.trim() !== "") {
                        if (!authProvider.buttonTextColor.trim().startsWith('#')) {
                            authProvider.buttonTextColor = '#'+authProvider.buttonTextColor.trim();
                        }
                        options[buttonKey].textColor = `${authProvider.buttonTextColor}`;
                        options[buttonKey].textColorStyle = ` style="color:${authProvider.buttonTextColor}"`;
                    }
                    if (typeof authProvider.iconUrl !== "undefined"
                        && authProvider.iconUrl.trim() !== "") {
                        options[buttonKey].iconUrl = authProvider.iconUrl;
                    }
                }
            });
        }
        return options;
    }

    subscribeEventForChanges() {
        /** change Firebase button titles on load */
        this.events.subscribe(FIREBASE_UI_SHOWN, () => {
            this.#changeAuthButtonsTitle(this.#options.defaultFormSlug, false);
            this.#changeAuthButtonsTitleColor();
        }, {once: true});
        /** change titles on auth form change */
        this.events.subscribe(DEFAULT_AUTH_FORM_SLUG_UPDATED, (value) => {
            if (value && value.new && value.new !== value.old) {
                this.#changeAuthButtonsTitle(value.new, value.old);
            }
        });
    }

    #changeAuthButtonsTitleColor() {
        Object.keys(this.#options.authProviders).forEach(key => {
            let authProvider = this.#options.authProviders[key];
            if (typeof authProvider.provider !== "undefined" && authProvider.provider !== '') {
                let buttonKey = authProvider.provider.toLowerCase();
                if (buttonKey !== 'email' && typeof this.#options[buttonKey] !== "undefined" && this.#options[buttonKey].textColor !== '') {
                    let buttonsTitle = document.querySelectorAll(this.#buttonsTitleSelector[buttonKey]);
                    let color = this.#options[buttonKey].textColor;
                    if (buttonsTitle && !!color) {
                        buttonsTitle.forEach(function (item) {
                            if (item.style.color !== color) {
                                item.style.color = color;
                            }
                        });
                    }
                }
            }
        });
    }

    #changeAuthButtonsTitle(authNew, authOld) {
        if ( authNew
            && authNew !== authOld
            && [SIGN_UP_FORM_SLUG, SIGN_IN_FORM_SLUG].includes(authNew) )
        {
            Object.keys(this.#options.authProviders).forEach(key => {
                let authProvider = this.#options.authProviders[key];
                if (typeof authProvider.provider !== "undefined" && authProvider.provider !== '') {
                    let buttonKey = authProvider.provider.toLowerCase();
                    if (typeof this.#options[buttonKey] !== "undefined" && (this.#options[buttonKey].signInLabel !== '' || this.#options[buttonKey].signUpLabel !== '')) {
                        if (authNew === SIGN_UP_FORM_SLUG) {
                            this.#options[buttonKey].label = (this.#options[buttonKey].signUpLabel !== '') ? this.#options[buttonKey].signUpLabel : this.#options[buttonKey].fullLabel;
                        } else if (authNew === SIGN_IN_FORM_SLUG) {
                            this.#options[buttonKey].label = (this.#options[buttonKey].signInLabel !== '') ? this.#options[buttonKey].signInLabel : this.#options[buttonKey].fullLabel;
                        }
                        let buttonsTitle = document.querySelectorAll(this.#buttonsTitleSelector[buttonKey]);
                        let title = this.#options[buttonKey].label;
                        if (buttonsTitle && !!title) {
                            buttonsTitle.forEach(function (item) {
                                item.innerHTML = title;
                            });
                        }
                    }
                }
            });
        }
    }

    createElement () {
        let elementKey = 'email';
        return createElement('div', {
            className: this.#className,
            innerHTML: `
                <span class="firebaseui-idp-icon-wrapper">
                    <img class="firebaseui-idp-icon" alt="" src="${this.#options[elementKey].iconUrl}">
                </span>
                <span class="wk-auth-form-button-email-title firebaseui-idp-text firebaseui-idp-text-long"${this.#options[elementKey].textColorStyle}>${this.#options[elementKey].label}</span>`,
            styles: this.#options[elementKey].styles
        });
    }

    hide () {
        this.element.style.display = 'none';
    }

    show () {
        this.element.style.display = 'block';
    }

    render() {
        const targetElement = document.querySelector(this.selector);

        if (targetElement) {
            targetElement.appendChild(this.element);
        }
    }

    get isVisible () {
        if (window.getComputedStyle(this.element)){
            return window.getComputedStyle(this.element).getPropertyValue('display') === 'block';
        }
        return false;
    }
}

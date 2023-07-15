import { createElement } from "../../../utils/DOM";
import Events from "../../events";
import {FIREBASE_UI_SHOWN, DEFAULT_AUTH_FORM_SLUG_UPDATED} from "../../events/events-name";
import {
    SIGN_IN_FORM_SLUG,
    SIGN_UP_FORM_SLUG
} from "../forms/AuthForm";
import {
    TRIGGER_EMAIL_BUTTON_TITLE_SELECTOR,
    TRIGGER_EMAILLINK_BUTTON_TITLE_SELECTOR,
    TRIGGER_GOOGLE_BUTTON_TITLE_SELECTOR,
    TRIGGER_EMAIL_BUTTON_CLASS_NAME,
    TRIGGER_EMAILLINK_BUTTON_CLASS_NAME,
    TRIGGER_BUTTON_CLASS_NAME
} from "../../../configs/constants";
import isEmpty from 'lodash.isempty';
import get from 'lodash.get';

export class TriggerButton {
    #fullLabel = {
        email: 'Sign in with email',
        emaillink: 'Sign by email link'
    };
    #emailButonIconUrl = 'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg';
    #classNames = {
        email: TRIGGER_EMAIL_BUTTON_CLASS_NAME,
        emaillink: TRIGGER_EMAILLINK_BUTTON_CLASS_NAME,
    };
    #buttonsTitleSelector = {
        email: TRIGGER_EMAIL_BUTTON_TITLE_SELECTOR,
        emaillink: TRIGGER_EMAILLINK_BUTTON_TITLE_SELECTOR,
        google: TRIGGER_GOOGLE_BUTTON_TITLE_SELECTOR
    }
    #options;

    constructor(selector, options) {
        this.#options = this.checkOptions(options);
        this.events = new Events();
        this.selector = selector;

        this.elements = {};
        const {email, emaillink} = this.#options || {};
        if (!isEmpty(email)) {
            this.elements.email = this.createElement('email');
            if (options.emailOnClick) {
                this.elements.email.addEventListener('click', options.emailOnClick.bind(this));
            }
        }
        if (!isEmpty(emaillink)) {
            this.elements.emaillink = this.createElement('emaillink');
            if (options.emaillinkOnClick) {
                this.elements.emaillink.addEventListener('click', options.emaillinkOnClick.bind(this));
            }
        }

        this.subscribeEventForChanges();
    }

    checkOptions(options) {
        if(!Array.isArray(options.authProviders)) return options;
        for (const authProvider of options.authProviders) {
            if (typeof authProvider !== "string" && isEmpty(authProvider.provider)) continue;

            const aProvider = typeof authProvider === "string" ? authProvider : authProvider.provider.toLowerCase();
            options[aProvider] = {
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
            const { fullLabel, signInLabel, signUpLabel, buttonColor, buttonTextColor, iconUrl } = authProvider;
            if (aProvider === 'email') {
                options[aProvider].fullLabel = this.#fullLabel[aProvider];
                options[aProvider].label = this.#fullLabel[aProvider];
                options[aProvider].iconUrl = this.#emailButonIconUrl;
            }
            if (!isEmpty(fullLabel)) {
                options[aProvider].fullLabel = fullLabel;
                options[aProvider].label = fullLabel;
            }
            if (!isEmpty(signInLabel)) {
                options[aProvider].signInLabel = signInLabel;
                if (options.defaultFormSlug === SIGN_IN_FORM_SLUG) {
                    options[aProvider].label = signInLabel;
                }
            }
            if (!isEmpty(signUpLabel)) {
                options[aProvider].signUpLabel = signUpLabel;
                if (options.defaultFormSlug === SIGN_UP_FORM_SLUG) {
                    options[aProvider].label = signUpLabel;
                }
            }
            if (!isEmpty(buttonColor)) {
                options[aProvider].backgroundColor = buttonColor;
                options[aProvider].styles.backgroundColor = buttonColor;
            }
            if (!isEmpty(buttonTextColor )) {
                options[aProvider].textColor = buttonTextColor;
                options[aProvider].textColorStyle = ` style="color:${buttonTextColor}"`;
            }
            if (!isEmpty(iconUrl)) {
                options[aProvider].iconUrl = iconUrl;
            }
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
            const newValue = get(value, 'new', false);
            const oldValue = get(value, 'old', false);
            if (newValue && newValue !== oldValue) {
                this.#changeAuthButtonsTitle(newValue, oldValue);
            }
        });
    }

    #changeAuthButtonsTitleColor() {
        if(!Array.isArray(this.#options.authProviders)) return;
        for (const authProvider of this.#options.authProviders) {
            if (isEmpty(authProvider.provider)) continue;

            const aProvider = authProvider.provider.toLowerCase();
            if (aProvider !== 'email') {
                const textColor = get(this.#options[aProvider], 'textColor', false);
                if (!textColor) continue;

                const buttonsTitle = document.querySelectorAll(this.#buttonsTitleSelector[aProvider]);
                if (buttonsTitle) {
                    buttonsTitle.forEach( (item) => {
                        item.style.color = textColor;
                    });
                }
            }
        }
    }

    #changeAuthButtonsTitle(authNew, authOld) {
        if(!Array.isArray(this.#options.authProviders)) return;
        if ( authNew && authNew !== authOld && [SIGN_UP_FORM_SLUG, SIGN_IN_FORM_SLUG].includes(authNew) ) {
            for (const authProvider of this.#options.authProviders) {
                if (isEmpty(authProvider.provider)) continue;

                const aProvider = authProvider.provider.toLowerCase();
                const {signInLabel, signUpLabel, fullLabel} = this.#options[aProvider];
                if (!isEmpty(this.#options[aProvider]) && (!isEmpty(signInLabel) || !isEmpty(signUpLabel))) {
                    const buttonsTitle = document.querySelectorAll(this.#buttonsTitleSelector[aProvider]);
                    const title = (authNew === SIGN_UP_FORM_SLUG) ? signUpLabel || fullLabel : signInLabel || fullLabel;
                    if (buttonsTitle && title) {
                        buttonsTitle.forEach((item) => {
                            item.innerHTML = title;
                        });
                    }
                }
            }
        }
    }

    createElement (key) {
        const elementKey = key || 'email';
        const className = this.#classNames[elementKey] ?? TRIGGER_BUTTON_CLASS_NAME
        const buttonTitleSelector = `wk-auth-form-button-${elementKey}-title`;
        const { iconUrl, textColorStyle, label, styles } = this.#options[elementKey];
        return createElement('div', {
            className,
            innerHTML: `
                <span class="firebaseui-idp-icon-wrapper">
                    <img class="firebaseui-idp-icon" alt="" src="${iconUrl}">
                </span>
                <span class="${buttonTitleSelector} firebaseui-idp-text firebaseui-idp-text-long"${textColorStyle}>${label}</span>`,
            styles
        });
    }

    hide () {
        if (!isEmpty(this.elements) && Object.keys(this.elements).length){
            Object.keys(this.elements).forEach(key => {
                this.elements[key].style.display = 'none';
            });
        }
    }

    show () {
        if (!isEmpty(this.elements) && Object.keys(this.elements).length){
            Object.keys(this.elements).forEach(key => {
                this.elements[key].style.display = 'block';
            });
        }
    }

    render() {
        const targetElement = document.querySelector(this.selector);

        if (targetElement) {
            if (!isEmpty(this.elements) && Object.keys(this.elements).length){
                Object.keys(this.elements).forEach(key => {
                    targetElement.appendChild(this.elements[key]);
                });
            }
        }
    }

    get isVisible () {
        let isVisible = false;
        if (isEmpty(this.elements)) {
            return false;
        }
        if (Object.keys(this.elements).length) {
            Object.keys(this.elements).forEach(key => {
                if (window.getComputedStyle(this.elements[key])){
                    isVisible = window.getComputedStyle(this.elements[key]).getPropertyValue('display') === 'block';
                    return isVisible
                }
            });
        }
        return isVisible;
    }
}

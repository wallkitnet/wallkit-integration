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
import isEmpty from 'lodash.isempty';
import get from 'lodash.get';

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
        if(!Array.isArray(options.authProviders)) return options;
        for (const authProvider of options.authProviders) {
            if (isEmpty(authProvider.provider)) continue;

            const aProvider = authProvider.provider.toLowerCase();
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

    createElement () {
        const elementKey = 'email';
        const { iconUrl, textColorStyle, label, styles } = this.#options[elementKey];
        return createElement('div', {
            className: this.#className,
            innerHTML: `
                <span class="firebaseui-idp-icon-wrapper">
                    <img class="firebaseui-idp-icon" alt="" src="${iconUrl}">
                </span>
                <span class="wk-auth-form-button-email-title firebaseui-idp-text firebaseui-idp-text-long"${textColorStyle}>${label}</span>`,
            styles
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

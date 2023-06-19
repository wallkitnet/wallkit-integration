import { createElement } from "../../../utils/DOM";
import { Form } from "../index";

import { FormField } from "../field";
import { PasswordField } from "../field/PasswordField.js";

export class LoginForm extends Form {
    constructor(targetElementSelector, options) {
        super(targetElementSelector, options);

        this.options = options;
        this.options.title = options.title || 'Sign in with email';
        this.options.footer = this.getFormFooter() || options.footer;

        this.emailField = new FormField({
            dataSlug: 'email',
            name: 'wk-fb-email',
            label: 'Email',
            type: 'email',
            onEnter: () => {
              this.passwordField.focus();
            }
        });

        this.passwordField = new PasswordField({
            dataSlug: 'password',
            name: 'wk-fb-password',
            testStrength: false,
            label: 'Password',
            type: 'password',
            onEnter: () => {
              this.submitForm();
            }
        });

        this.fields = [
            this.emailField,
            this.passwordField
        ];

        this.init();

        if (options.onCancel) {
            this.cancelBtn.addEventListener('click', options.onCancel.bind(this));
        }
    }

    getFormFooter() {
        const footerWrapper = createElement('div');

        const subFooter = createElement('div', {
            className: 'wk-form__sub-footer',
        });

        if (this.options.signUp === true) {
            subFooter.appendChild(createElement('a', {
                id: 'auth-signup-link',
                className: 'wk-form__link',
                innerText: this.options.signUpLinkTitle || 'Sign Up',
                attributes: {
                    href: '#'
                }
            }));
        }

        subFooter.appendChild(createElement('a', {
            className: 'wk-form__link wk-form__reset-password',
            innerText: 'Forgot password',
            id: 'auth-password-link',
            attributes: {
                href: '#'
            }
        }));

        const formFooter = createElement('div', {
            className: 'wk-form__footer wk-form__footer--right'
        });

        footerWrapper.appendChild(subFooter);

        if (this.options.cancelBtn !== false) {
          formFooter.appendChild(this.cancelBtn);
        }
        formFooter.appendChild(this.submitBtn);

        footerWrapper.appendChild(formFooter);

        return footerWrapper;
    }
}

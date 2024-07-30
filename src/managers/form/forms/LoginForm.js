import { createElement } from "../../../utils/DOM";
import { Form } from "../index";

import { FormField } from "../field";
import { PasswordField } from "../field/PasswordField.js";

export class LoginForm extends Form {
    constructor(targetElementSelector, options) {
        super(targetElementSelector, options);

        this.options = options;
        const { title, footer, messages, passwordSignInIgnoreValidation, onCancel, fieldLabels } = options;
        const { email: fieldLabelEmail, password: fieldLabelPassword } = fieldLabels;
        this.options.title = title || 'Sign in with email';
        this.options.footer = this.getFormFooter() || footer;

        this.emailField = new FormField({
            dataSlug: 'email',
            name: 'wk-fb-email',
            label: fieldLabelEmail || 'Email',
            type: 'email',
            messages: messages || {},
            onEnter: () => {
              this.passwordField.focus();
            }
        });

        this.passwordField = new PasswordField({
            dataSlug: 'password',
            name: 'wk-fb-password',
            ignoreValidation: passwordSignInIgnoreValidation || false,
            testStrength: false,
            label: fieldLabelPassword || 'Password',
            type: 'password',
            messages: messages || {},
            onEnter: () => {
              this.submitForm();
            }
        });

        this.fields = [
            this.emailField,
            this.passwordField
        ];

        this.init();

        if (onCancel) {
            this.cancelBtn.addEventListener('click', onCancel.bind(this));
        }
    }

    getFormFooter() {
        const footerWrapper = createElement('div');

        const subFooter = createElement('div', {
            className: 'wk-form__sub-footer',
        });

        const signUpWrapper = createElement( 'div', {
            className: 'wk-form__footer-sign-up',
            innerText: this.options.signUpPreLinkTitle || '',
        });

        if (this.options.signUp === true) {
            signUpWrapper.appendChild(createElement('a', {
                id: 'auth-signup-link',
                className: 'wk-form__link',
                innerText: this.options.signUpLinkTitle || 'Sign Up',
                attributes: {
                    href: '#'
                }
            }));
        }
        subFooter.appendChild(signUpWrapper);

        subFooter.appendChild(createElement('a', {
            className: 'wk-form__link wk-form__reset-password',
            innerText: this.options.forgotPasswordLinkTitle || 'Forgot password',
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

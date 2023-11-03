import { createElement } from "../../../utils/DOM";
import { Form } from "../index";

import { FormField } from "../field";
import { PasswordField } from "../field/PasswordField.js";
import { CheckBoxField } from "../field/CheckBoxField.js";

export class SignupForm extends Form {
    constructor(targetElementSelector, options) {
        super(targetElementSelector, options);

        this.options = options;
        const { title, footer, termsOfService, messages, onCancel, fieldLabels } = options;
        const { email: fieldLabelEmail, name: fieldLabelName, password: fieldLabelPassword } = fieldLabels;
        this.options.title = title || 'Sign Up';
        this.options.footer = this.getFormFooter() || footer;

        this.emailField = new FormField({
            dataSlug: 'email',
            name: 'wk-fb-email',
            label: fieldLabelEmail || 'Email',
            type: 'email',
            messages: messages || {},
            onEnter: () => {
                this.nameField.focus();
            }
        });
        this.nameField = new FormField({
            dataSlug: 'name',
            name: 'wk-fb-name',
            label: fieldLabelName || 'Name',
            type: 'text',
            messages: messages || {},
            onEnter: () => {
                this.passwordField.focus();
            }
        });
        this.passwordField = new PasswordField({
            dataSlug: 'password',
            name: 'wk-fb-password',
            ignoreValidation: false,
            testStrength: true,
            passwordHint: true,
            label: fieldLabelPassword || 'Password',
            type: 'password',
            messages: messages || {},
            onEnter: () => {
                this.submitForm();
            }
        });
        const {tosRequired, required} = messages || {};
        if (this.#isTosEnabled(termsOfService)) {
            this.tosField = new CheckBoxField({
                dataSlug: 'agreement',
                name: 'wk-fb-agreement',
                id: 'wk-fb-agreement',
                required: true,
                label: this.getTosAcceptLabel(termsOfService),
                type: 'checkbox',
                messages: {
                    ...(messages || {}),
                    ...{required: tosRequired || required || false}
                },
            });
        }

        this.fields = [
            this.emailField,
            this.nameField,
            this.passwordField,
        ];

        if (this.tosField) {
            this.fields.push(this.tosField);
        }

        this.init();

        if (onCancel) {
            this.cancelBtn.addEventListener('click', onCancel.bind(this));
        }
    }

    getFormFooter () {
        const formFooter = createElement('div', {
            className: 'wk-form__footer'
        });
        const signInWrapper = createElement( 'div', {
            className: 'wk-form__footer-sign-in',
            innerText: this.options.signInPreLinkTitle || 'Already have an account? ',
        });
        signInWrapper.appendChild(createElement('a', {
            className: 'wk-form__link',
            innerText: this.options.signInLinkTitle || 'Sign-in',
            id: 'auth-signin-link',
            attributes: {
                href: '#'
            }
        }));
        formFooter.appendChild(signInWrapper);

        if (this.options.cancelBtn !== false) {
            formFooter.appendChild(this.cancelBtn);
        }

        formFooter.appendChild(this.submitBtn);

        return formFooter;
    }

    #isTosEnabled (termsOptions) {
      if (!termsOptions.termsOfService) {
        return false;
      }

      return (!!termsOptions.termsOfService && typeof termsOptions.termsOfService === "string") ||
        !!termsOptions.tosURL ||
        !!termsOptions.privacyPolicyURL;
    }

    getTosAcceptLabel (termsOptions) {
      if (!termsOptions || !termsOptions.termsOfService) {
        return '';
      }

      if (typeof termsOptions.termsOfService === "string") {
        return termsOptions.termsOfService;
      }

      let defaultLabel = `By signing up I agree with the`;

      if (termsOptions.tosURL) {
        defaultLabel += ` <a href="${termsOptions.tosURL}" target="_blank">Terms & Conditions</a>`
      }

      if (termsOptions.tosURL && termsOptions.privacyPolicyURL) {
        defaultLabel += ` and `
      }

      if (termsOptions.privacyPolicyURL) {
        defaultLabel += ` <a href="${termsOptions.privacyPolicyURL}" target="_blank">Privacy Policy</a>`
      }

      return defaultLabel;
    }
}

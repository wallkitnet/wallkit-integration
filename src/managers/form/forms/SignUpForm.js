import { createElement } from "../../../utils/DOM";
import { Form } from "../index";

import { FormField } from "../field";
import { PasswordField } from "../field/PasswordField.js";
import { CheckBoxField } from "../field/CheckBoxField.js";

export class SignupForm extends Form {
    constructor(targetElementSelector, options) {
        super(targetElementSelector, options);

        this.options = options;
        this.options.title = 'Sign Up' || options.title;
        this.options.footer = this.getFormFooter() || options.footer;

        this.emailField = new FormField({
            dataSlug: 'email',
            name: 'wk-fb-email',
            label: 'Email',
            type: 'email',
            onEnter: () => {
              this.nameField.focus();
            }
        });
        this.nameField = new FormField({
            dataSlug: 'name',
            name: 'wk-fb-name',
            label: 'Name',
            type: 'text',
            onEnter: () => {
              this.passwordField.focus();
            }
        });
        this.passwordField = new PasswordField({
            dataSlug: 'password',
            name: 'wk-fb-password',
            testStrength: true,
            passwordHint: true,
            label: 'Password',
            type: 'password',
            onEnter: () => {
              this.submitForm();
            }
        });

        if (this.#isTosEnabled(options)) {
          this.tosField = new CheckBoxField({
            dataSlug: 'agreement',
            name: 'wk-fb-agreement',
            required: true,
            label: this.getTosAcceptLabel(options.termsOfService),
            type: 'checkbox',
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

        if (options.onCancel) {
            this.cancelBtn.addEventListener('click', options.onCancel.bind(this));
        }
    }

    getFormFooter () {
        const formFooter = createElement('div', {
            className: 'wk-form__footer'
        });
        formFooter.appendChild(createElement('a', {
            className: 'wk-form__link',
            innerText: 'Already have an account? Login',
            id: 'auth-signin-link',
            attributes: {
                href: '#'
            }
        }));

        if (this.options.cancelBtn !== false) {
            formFooter.appendChild(this.cancelBtn);
        }

        formFooter.appendChild(this.submitBtn);

        return formFooter;
    }

    #isTosEnabled (options) {
      if (!options.termsOfService) {
        return false;
      }

      return !!options.termsOfService ||
        !!options.termsOfService.tosURL ||
        !!options.termsOfService.privacyPolicyURL;
    }

    getTosAcceptLabel (termsOptions) {
      if (!termsOptions) {
        return '';
      }

      if (typeof termsOptions !== "object") {
        return termsOptions;
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

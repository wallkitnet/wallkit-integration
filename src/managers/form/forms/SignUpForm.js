import { createElement } from "../../../utils/DOM";
import { Form } from "../index";

import { FormField } from "../field";
import { PasswordField } from "../field/PasswordField.js";

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

        this.fields = [
            this.emailField,
            this.nameField,
            this.passwordField
        ];

        this.init();
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
        formFooter.appendChild(this.submitBtn);

        return formFooter;
    }
}

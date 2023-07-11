import { createElement } from "../../../utils/DOM";
import { Form } from "../index";

import {PasswordField} from "../field/PasswordField";

export class ResetPasswordForm extends Form {
    constructor(targetElementSelector, options) {
        super(targetElementSelector, options);

        this.options = options;
        this.options.title = options.title || 'Reset Password';
        this.options.footer = this.getFormFooter() || options.footer;

        this.newPasswordField = new PasswordField({
            dataSlug: 'new_password',
            name: 'wk-new-password',
            testStrength: true,
            passwordHint: true,
            label: 'New Password',
            type: 'password',
            messages: options.messages || {},
            onEnter: () => {
                this.submitForm();
            },
        });

        this.fields = [
            this.newPasswordField
        ];

        this.init();
    }

    getFormFooter () {
        const formFooter = createElement('div', {
            className: 'wk-form__footer'
        });
        formFooter.appendChild(this.cancelBtn);
        this.cancelBtn.id = 'back-to-login';

        formFooter.appendChild(this.submitBtn);

        return formFooter;
    }

}

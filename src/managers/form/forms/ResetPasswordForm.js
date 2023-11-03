import { createElement } from "../../../utils/DOM";
import { Form } from "../index";

import {PasswordField} from "../field/PasswordField";

export class ResetPasswordForm extends Form {
    constructor(targetElementSelector, options) {
        super(targetElementSelector, options);

        this.options = options;
        const { title, footer, messages, fieldLabels } = options;
        const { password: fieldLabelPassword } = fieldLabels;
        this.options.title = title || 'Reset Password';
        this.options.footer = this.getFormFooter() || footer;

        this.newPasswordField = new PasswordField({
            dataSlug: 'new_password',
            name: 'wk-new-password',
            ignoreValidation: false,
            testStrength: true,
            passwordHint: true,
            label: fieldLabelPassword || 'New Password',
            type: 'password',
            messages: messages || {},
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

import { createElement } from "../../../utils/DOM";
import { Form } from "../index";

import { FormField } from "../field";

export class ForgotPasswordForm extends Form {
    constructor(targetElementSelector, options) {
        super(targetElementSelector, options);

        this.options = options;
        const { title, footer, messages, fieldLabels } = options;
        const { email: fieldLabelEmail } = fieldLabels;
        this.options.title = title || 'Reset Password';
        this.options.footer = this.getFormFooter() || footer;

        this.emailField = new FormField({
            name: 'wk-fb-email',
            dataSlug: 'email',
            label: fieldLabelEmail || 'Email',
            type: 'email',
            messages: messages || {},
            onEnter: () => {
              this.submitForm();
            }
        });

        this.fields = [
            this.emailField
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

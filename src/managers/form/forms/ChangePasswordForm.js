import { createElement } from "../../../utils/DOM";
import { Form } from "../index";

import { PasswordField } from "../field/PasswordField.js";

export class ChangePasswordForm extends Form {
    constructor(targetElementSelector, options) {
        super(targetElementSelector, options);

        this.onCancel = options.onCancel || false;
        this.options = options;
        this.options.title = 'Change Password' || options.title;
        this.options.footer = this.getFormFooter() || options.footer;

        this.oldPasswordField = new PasswordField({
            dataSlug: 'old_password',
            name: 'wk-old-password',
            testStrength: false,
            passwordHint: false,
            label: 'Old Password',
            type: 'password',
            onEnter: () => {
                this.submitForm();
            },
            onValidate: (field) => {
                const value = field.getValue();
                if (!value) {
                    field.setError(`<div>
                            <span>Password cannot be empty.</span>
                        </div>`);
                    return false;
                }
                return true;
            }
        });
        this.newPasswordField = new PasswordField({
            dataSlug: 'new_password',
            name: 'wk-new-password',
            testStrength: true,
            passwordHint: true,
            label: 'New Password',
            type: 'password',
            relatedData: {
                oldPassword: this.oldPasswordField
            },
            onEnter: () => {
              this.submitForm();
            },
            onValidate: (field) => {
                const oldPasswordValue = field.relatedData.oldPassword.getValue();
                const value = field.getValue();
                if (oldPasswordValue === value) {
                    field.setError(`<div>
                            <span>The new password must not match the old one.</span>
                        </div>`);
                    return false;
                }
                return true;
            }
        });
        this.newPasswordConfirmField = new PasswordField({
            dataSlug: 'new_password_confirm',
            name: 'wk-new-password-confirm',
            testStrength: true,
            passwordHint: false,
            label: 'New Password Confirmation',
            type: 'password',
            relatedData: {
                newPassword: this.newPasswordField
            },
            onEnter: () => {
                this.submitForm();
            },
            onValidate: (field) => {
                const newPasswordValue = field.relatedData.newPassword.getValue();
                const value = field.getValue();
                if (newPasswordValue !== value) {
                    field.setError(`<div>
                            <span>The password confirmation must be the same as the new password.</span>
                        </div>`);
                    return false;
                }
                return true;
            }
        });

        this.fields = [
            this.oldPasswordField,
            this.newPasswordField,
            this.newPasswordConfirmField,
        ];

        this.init();

    }

    cancelForm() {
        if (typeof this.onCancel === "function") {
            this.onCancel();
        }
    }

    getFormFooter () {
        const formFooter = createElement('div', {
            className: 'wk-form__footer'
        });
        formFooter.appendChild(createElement('a', {
            className: 'wk-form__link account-settings-link',
            innerText: 'Cancel',
            attributes: {
                href: '#'
            }
        }));
        formFooter.appendChild(this.submitBtn);

        return formFooter;
    }
}

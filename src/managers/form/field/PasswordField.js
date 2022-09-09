import { FormField } from "./index";

export class PasswordField extends FormField {
    constructor(options) {
        super(options);

        this.insertAffix(`<div id="show-password-toggle" class="wk-eye-toggle"></div>`, this.togglePasswordVisibility.bind(this))

        if (options.passwordHint) {
            this.insertDescription(`<div>
            <span>Password should match requirements:</span>
            <ul class="wk-field-list">
                <li>at least 1 uppercase character (A-Z)</li>
                <li>at least 1 lowercase character (a-z)</li>
                <li>at least 1 digit (0-9)</li>
                <li>at least 1 special character (punctuation)</li>
                <li>at least 8 characters length</li>
            </ul>
        </div>`);
        }

        this.testStrength = options.testStrength ?? false;
    }

    togglePasswordVisibility () {
        const targetElement = this.wrapper.querySelector('#show-password-toggle');
        const TOGGLE_CLASSNAME = 'wk-eye-toggled';

        if (targetElement) {
            if (targetElement.classList.contains(TOGGLE_CLASSNAME)) {
                targetElement.classList.remove(TOGGLE_CLASSNAME);
                this.switchPasswordInputType('password');
            } else {
                targetElement.classList.add(TOGGLE_CLASSNAME);
                this.switchPasswordInputType('text');
            }
        }
    }

    switchPasswordInputType (type) {
        if (this.input) {
            this.input.type = type || 'password';
        }
    }

    #testPassword (password) {
        const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        return passwordRegex.test(password);
    }

    validate () {
        const value = this.getValue();

        if (!value) {
            this.setError('Enter your password to continue!');

            return false;
        } else if (this.testStrength && !this.#testPassword(value)) {
            this.setError(`<div>
                    <span>Password doesn't match requirements!</span>
                </div>`);

            return false;
        }

        this.resetValidation();
        this.setFieldValidationState(true);

        return true;
    }

}
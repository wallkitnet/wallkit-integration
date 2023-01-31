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

    #testPasswordRule (value, regex, errorMessage) {
      const uppercaseRegex = new RegExp(regex);
      const uppercaseValid = uppercaseRegex.test(value);

      if (!uppercaseValid) {
        return {
          message: errorMessage,
          valid: false
        };
      }

      return {
        valid: true
      }
    }

    #testPassword (password) {
        if (!this.testStrength) {
          return {
            valid: true
          };
        }

        const rules = [
          {
            regex: "^(?=.{8,})",
            message: "At least 8 characters length"
          },
          {
            regex: "^(?=.*[A-Z])",
            message: "At least 1 uppercase character (A-Z)"
          },
          {
            regex: "^(?=.*[a-z])",
            message: "At least 1 lowercase character (a-z)"
          },
          {
            regex: "^(?=.*[0-9])",
            message: "At least 1 digit (0-9)"
          },
          {
            regex: "^(?=.*[`~!@#$%^&*()+={}\/|:;'<>,.?_-])",
            message: "At least 1 special character (punctuation)"
          },
        ];

        for (let rule of rules) {
          const validateRule = this.#testPasswordRule(password, rule.regex, rule.message);

          if (!validateRule.valid) {
            return validateRule;
          }
        }

        return {
          valid: true
        };
    }

    validate () {
      const value = this.getValue();
      const passwordValidation = this.#testPassword(value);

      if (!passwordValidation.valid) {
        this.setError(`<div>
                <span>Password should be: ${passwordValidation.message}</span>
            </div>`);

        return false;
      }
      return super.validate();
    }

}

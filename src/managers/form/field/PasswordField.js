import { FormField } from "./index";

export class PasswordField extends FormField {
    #options;
    #hintDescription = `<div>
            <span>Password should match requirements:</span>
            <ul class="wk-field-list">
                <li>at least 1 uppercase character (A-Z)</li>
                <li>at least 1 lowercase character (a-z)</li>
                <li>at least 1 digit (0-9)</li>
                <li>at least 1 special character (punctuation)</li>
                <li>at least 8 characters length</li>
            </ul>
        </div>`;
    #passwordRuleLength = "At least 8 characters length";
    #passwordRuleUppercase = "At least 1 uppercase character (A-Z)";
    #passwordRuleLowercase = "At least 1 lowercase character (a-z)";
    #passwordRuleDigit = "At least 1 digit (0-9)";
    #passwordRuleSpecial = "At least 1 special character (punctuation)";
    #passwordPrefix = "Password should be: ";
    #passwordPostfix = "";

    constructor(options) {
        super(options);
        this.#options = options;
        const { passwordHintDescription } = options.messages || {};

        this.insertAffix(`<div id="show-password-toggle" class="wk-eye-toggle"></div>`, this.togglePasswordVisibility.bind(this))

        if (options.passwordHint) {
            this.insertDescription(passwordHintDescription || this.#hintDescription);
        }

        this.ignoreValidation = options.ignoreValidation ?? false;
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
        if (this.ignoreValidation) {
          return {
            valid: true
          };
        }
        if (!this.testStrength) {
            return {
                valid: true
            };
        }
        const { passwordRuleLength, passwordRuleUppercase, passwordRuleLowercase, passwordRuleDigit , passwordRuleSpecial } = this.#options.messages || {};
        const rules = [
          {
            regex: "^(?=.{8,})",
            message: passwordRuleLength || this.#passwordRuleLength
          },
          {
            regex: "^(?=.*[A-Z])",
            message: passwordRuleUppercase || this.#passwordRuleUppercase
          },
          {
            regex: "^(?=.*[a-z])",
            message: passwordRuleLowercase || this.#passwordRuleLowercase
          },
          {
            regex: "^(?=.*[0-9])",
            message: passwordRuleDigit || this.#passwordRuleDigit
          },
          {
            regex: "^(?=.*[`~!@#$%^&*()+={}\/|:;'<>,.?_-])",
            message: passwordRuleSpecial || this.#passwordRuleSpecial
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
      const { passwordPrefix, passwordPostfix } = this.#options.messages || {};
      if (!passwordValidation.valid) {
        this.setError(`<div>
                <span>${passwordPrefix || this.#passwordPrefix}${passwordValidation.message}${passwordPostfix || this.#passwordPostfix}</span>
            </div>`);

        return false;
      }
      return super.validate();
    }

}

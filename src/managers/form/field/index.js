import {createElement, insertAfter} from "../../../utils/DOM";
import isEmpty from "lodash.isempty";

export class FormField {
    #errorMessageRequired = 'This field is required.'
    #errorMessageEmptyEmail = 'Enter your email address to continue.'
    #errorMessageIncorrectEmail = 'This email address isn\'t correct.'
    #errorMessageEmptyPassword = 'Enter your password to continue.'

    constructor(options) {
        if (isEmpty(options)) {
            throw new Error('No Options Provided');
        }
        const { messages } = options || {};
        this.wrapper = this.createWrapper(options);
        this.input = this.createInput(options);
        this.type = options.type || 'text';
        this.message = null;
        this.isValid = false;
        this.required = options.required || false;
        this.slug = options.dataSlug;

        this.render(options);

        if (options.affix) {
            this.insertAffix(options.affix.content, options.affix.onClick);
        }

        if (options.description) {
            this.insertDescription(options.description);
        }

        if (options.onChange) {
            this.input.addEventListener('change', options.onChange.bind(this));
        }

        if (options.onInput) {
            this.input.addEventListener('input', options.onInput.bind(this));
        }
        if (!isEmpty(messages)) {
            const { required, emptyEmail, incorrectEmail, emptyPassword } = messages || {};
            this.#errorMessageRequired = required || this.#errorMessageRequired;
            this.#errorMessageEmptyEmail = emptyEmail || this.#errorMessageEmptyEmail;
            this.#errorMessageIncorrectEmail = incorrectEmail || this.#errorMessageIncorrectEmail;
            this.#errorMessageEmptyPassword = emptyPassword || this.#errorMessageEmptyPassword;
        }
        this.ignoreValidation = options.ignoreValidation ?? false;

        this.input.addEventListener('blur', this.validate.bind(this));

        if (options.onEnter) {
          this.input.addEventListener('keydown', (event) => {
            if (event.keyCode === 13) {
              options.onEnter();
            }
          });
        }

        if (options.onValidate && typeof options.onValidate === "function") {
            this.onValidate = options.onValidate;
        }

        if (options.relatedData) {
            this.relatedData = options.relatedData;
        }
    }

    getElement () {
        return this.wrapper;
    }

    getValue () {
        return this.input.value;
    }

    validate () {
        if (this.ignoreValidation) {
            return true;
        }
        const value = this.getValue();

        if (this.required && !value) {
            this.setError(this.#errorMessageRequired);

            return false;
        }

        if (this.type === 'email') {
            if (!value) {
                this.setError(this.#errorMessageEmptyEmail);

                return false;
            } else if (!value.length > 4 || !value.includes('@') || !value.includes('.')) {
                this.setError(this.#errorMessageIncorrectEmail);

                return false;
            }
        } else if (this.type === 'password') {
            if (!value) {
                this.setError(this.#errorMessageEmptyPassword);

                return false;
            }
        }

        if (this.onValidate) {
            if (!this.onValidate(this)) {
                return false;
            }
        }

        this.resetValidation();
        this.setFieldValidationState(true);

        return true;
    }

    createWrapper () {
        return createElement('div', {
            className: 'wk-form-field'
        });
    }

    createInputWrapper () {
        return createElement('div', {
            className: 'wk-form-field__input-wrapper',
        });
    }

    insertAffix (content, onClick) {
        const affixElement = createElement('div', {
            className: 'wk-form-field__field-affix',
            innerHTML: content
        });

        affixElement.addEventListener('click', onClick);
        this.inputWrapper.appendChild(affixElement);
    }

    insertDescription (description) {
        const descriptionElement = createElement('div', {
            className: 'wk-form-field__field-description',
            innerHTML: description
        });

        this.wrapper.appendChild(descriptionElement);
    }

    createInput (options) {
        return createElement('input', {
            className: options.className || `wk-form-field__input ${options.name || ''}`,
            id: options.id || false,
            attributes: {
                name: options.name,
                type: options.type || 'text',
                placeholder: options.placeholder || ''
            }
        });
    }

    createLabel (text, forRef) {
        return createElement('label', {
            className: 'wk-form-field__label',
            attributes: {
                for: forRef
            },
            innerHTML: text
        });
    }

    createMessage (message, valid) {
        const messageElement = createElement('span', {
            className: `wk-form-field__message`,
        });

        messageElement.innerHTML = message;

        return messageElement;
    }

    setError (message) {
        if (!this.message) {
            this.setFieldValidationState(false);
            this.message = this.createMessage(message, false);
            insertAfter(this.message, this.inputWrapper);
        } else if (this.message) {
            this.message.innerHTML = message;
        }
    }

    removeMessage () {
        if (this.message) {
            this.message.remove();
            this.message = null;
        }
    }

    setFieldValidationState (valid) {
        this.isValid = valid;
        if (!valid) {
            this.wrapper.classList.add('wk-form-field--invalid');
            this.wrapper.classList.remove('wk-form-field--valid');
        } else {
            this.wrapper.classList.add('wk-form-field--valid');
            this.wrapper.classList.remove('wk-form-field--invalid');
        }
    }

    resetValidation () {
        this.removeMessage();
        this.wrapper.classList.remove('wk-form-field--valid', 'wk-form-field--invalid');
    }

    resetField () {
        this.input.value = '';
        this.resetValidation()
    }

    focus () {
      this.input.focus();
    }

    render (options) {
      this.inputWrapper = this.createInputWrapper();
      this.wrapper.appendChild(this.createLabel(options.label, options.name));
      this.inputWrapper.appendChild(this.input);
      this.wrapper.appendChild(this.inputWrapper);
    }
}

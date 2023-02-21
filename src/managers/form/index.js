import { createElement } from "../../utils/DOM";

export class Form {
    constructor(targetElementSelector, options) {
        this.targetElementSelector = targetElementSelector;

        this.formWrapper = createElement('div', {
            className: 'wk-form'
        });

        this.submitBtn = createElement('button', {
            className: 'wk-form-button',
            innerText: 'Submit'
        });

        this.cancelBtn = createElement('button', {
            className: 'wk-form-button wk-form-button--cancel',
            innerText: 'Cancel'
        });

        this.loading = false;

        this.options = options;
        this.fields = [];
    }

    render (selector) {
        try {
            const placeholderElement = document.querySelector(selector || this.targetElementSelector);
            if (placeholderElement) {
                placeholderElement.appendChild(this.getFormElement());
            }
        } catch (e) {
            console.log('FORM RENDER ERROR:', e);
        }
    }

    getFormElement () {
        return this.formWrapper;
    }

    setFormError (error) {
        this.formErrorPlaceholder.innerText = error;
        this.formErrorPlaceholder.classList.add('wk-form__error--show');
    }

    resetFormError () {
        this.formErrorPlaceholder.innerText = '';
        this.formErrorPlaceholder.classList.remove('wk-form__error--show');
    }

    resetFields () {
        this.fields.forEach((field) => field.resetField());
    }

    resetForm () {
        this.resetFields();
        this.resetFormError();
    }

    showFormResult (markup) {
        if (markup) {
            this.formWrapper.innerHTML = '';
            this.formWrapper.appendChild(createElement('div', {
                className: 'wk-form-result',
                innerHTML: markup || ''
            }));
        }
    }

    insertFields () {
        this.formWrapperFields = createElement('div', {
            className: 'wk-form-fields'
        });

        this.fields.forEach((field) => {
            this.formWrapperFields.appendChild(field.getElement());
        });

        this.formWrapper.appendChild(this.formWrapperFields);

        return this;
    }

    insertHeader () {
        this.formWrapperHeader = createElement('div', {
            className: 'wk-form-header'
        });

        if (this.options.title) {
            this.formWrapperHeader.appendChild(createElement('h2', {
                className: 'wk-form-header__title',
                innerText: this.options.title
            }));
        }

        if (this.options.description) {
            this.formWrapperHeader.appendChild(createElement('h2', {
                className: 'wk-form-header__description',
                innerText: this.options.description
            }));
        }

        this.formErrorPlaceholder = createElement('div', {
            className: 'wk-form__error'
        });

        this.formWrapperHeader.appendChild(this.formErrorPlaceholder);
        this.formWrapper.appendChild(this.formWrapperHeader);

        return this;
    }

    insertFooter () {
        const formWrapperFooter = createElement('div', {
            className: 'wk-form-footer'
        });

        if (!this.options.footer) {
            formWrapperFooter.appendChild(this.submitBtn);
        } else {
            formWrapperFooter.appendChild(this.options.footer);
        }

        this.formWrapper.appendChild(formWrapperFooter);

        return this;
    }

    validateForm () {
        let isValid = null;

        this.fields.forEach((field) => {
            const isFieldValid = field.validate();

            if (isValid !== false) {
                isValid = isFieldValid;
            }
        });

        return isValid;
    }

    show () {
        this.formWrapper.style.display = 'block';

        return this;
    }

    hide () {
        this.formWrapper.style.display = 'none';

        return this;
    }

    get isVisible () {
        if (window.getComputedStyle(this.formWrapper)){
            return window.getComputedStyle(this.formWrapper).getPropertyValue('display') === 'block';
        }
        return false;
    }

    submitForm () {
        if (this.validateForm()) {
            if (this.options.onSubmit) {
                const data = {};

                this.fields.forEach((field) => {
                    data[field.slug] = field.getValue();
                });

                this.resetFormError();

                this.options.onSubmit(data);
            }
        }
    }

    reRender () {
        this.formWrapper.innerHTML = '';
        this.insertFormElements();
    }

    insertFormElements () {
        this.insertHeader();
        this.insertFields();
        this.insertFooter();
    }

    init () {
        this.insertFormElements();

        this.submitBtn.addEventListener('click', this.submitForm.bind(this));

        return this;
    }
}
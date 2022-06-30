import {createElement, insertAfter} from "../../utils/DOM";

export class Form {
    constructor(options) {
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
            const placeholderElement = document.querySelector(selector);
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

export class AuthForm {
    constructor(selector, options) {
        this.wrapper = createElement('div', {
            id: 'wk-auth-form'
        });

        this.loginForm = new LoginForm(selector, {
            onSubmit: (data) => {
                if (options.onLogin) {
                    options.onLogin(data);
                }
            },
            onCancel: () => {
                if (options.onCancel) {
                    options.onCancel();
                    this.loginForm.resetForm();
                }
            }
        });

        this.loginForm.formWrapper.addEventListener('click', (event) => {
            if (event.target.id === 'auth-signup-link') {
                event.preventDefault();

                this.loginForm.hide();
                this.signUpForm.show();
                this.loginForm.resetForm();
            } else if (event.target.id === 'auth-password-link') {
                event.preventDefault();

                this.loginForm.hide();
                this.loginForm.resetForm();
                this.forgotPasswordForm.show();
            }
        });

        this.loginForm.hide();

        this.signUpForm = new SignupForm(selector, {
            onSubmit: (data) => {
                if (options.onSignUp) {
                    options.onSignUp(data);
                }
            }
        });
        this.signUpForm.formWrapper.addEventListener('click', (event) => {
            if (event.target.id === 'auth-signin-link') {
                this.loginForm.show();
                this.signUpForm.hide();
                this.signUpForm.resetForm();
            }
        });

        this.signUpForm.hide();

        this.forgotPasswordForm = new ForgotPasswordForm(selector, {
            onSubmit: (data) => {
                if (options.onPasswordReset) {
                    options.onPasswordReset(data);
                }
            }
        });

        this.forgotPasswordForm.formWrapper.addEventListener('click', (event) => {
            if (event.target.id === 'back-to-login') {
                event.preventDefault();

                this.forgotPasswordForm.hide();
                this.forgotPasswordForm.resetForm();
                this.loginForm.show();
                this.forgotPasswordForm.reRender();
            }
        });

        this.forgotPasswordForm.hide();

        this.authButton = new AuthButton(selector, {
            onClick: () => {
                this.loginForm.show();
                this.authButton.hide();
                if (options.onAuthFormShow) {
                    options.onAuthFormShow();
                }
            }
        });
        this.authButton.render();
    }

    toggle () {
        this.hide();
        this.authButton.show();
    }

    hide () {
        this.loginForm.hide();
        this.loginForm.resetForm();

        this.signUpForm.hide();
        this.signUpForm.resetForm();

        this.forgotPasswordForm.hide();
        this.forgotPasswordForm.resetForm();
    }

    showSuccessLogin () {
    }

    showSuccessSignUp () {
    }

    showSuccessPasswordReset () {
        const email = this.forgotPasswordForm.emailField.getValue();

        this.forgotPasswordForm.showFormResult(`
            <div class="wk-password-reset-success">
                <h2>Check your email!</h2>
                <p>Follow the instructions sent to ${email} to recover your password</p>
                <button id="back-to-login" class="wk-form-button wk-form-button--cancel">Back to login</button>
            </div>
        `);
    }
}

export class ForgotPasswordForm extends Form {
    constructor(targetElementSelector, options) {
        super({});

        this.options = options;
        this.options.title = 'Reset Password' || options.title;
        this.options.footer = this.getFormFooter() || options.footer;

        this.emailField = new FormField({
            name: 'wk-fb-email',
            dataSlug: 'email',
            label: 'Email',
            type: 'email',
            onChange: () => {},
            onInput: () => {}
        });

        this.fields = [
            this.emailField
        ];

        this.init();
        this.render(targetElementSelector);
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

export class LoginForm extends Form {
    constructor(targetElementSelector, options) {
        super({});

        this.options = options;

        this.options.title = 'Sign in with email' || options.title;
        this.options.footer = this.getFormFooter() || options.footer;

        this.emailField = new FormField({
            dataSlug: 'email',
            name: 'wk-fb-email',
            label: 'Email',
            type: 'email',
            onChange: () => {},
            onInput: () => {}
        });
        this.passwordField = new PasswordField({
            dataSlug: 'password',
            name: 'wk-fb-password',
            testStrength: false,
            label: 'Password',
            type: 'password',
            onChange: () => {},
            onInput: () => {}
        });

        this.fields = [
            this.emailField,
            this.passwordField
        ];

        this.init();
        this.render(targetElementSelector);

        if (options.onCancel) {
            this.cancelBtn.addEventListener('click', options.onCancel.bind(this));
        }
    }

    getFormFooter() {
        const footerWrapper = createElement('div');

        const subFooter = createElement('div', {
            className: 'wk-form__sub-footer',
        });

        subFooter.appendChild(createElement('a', {
            id: 'auth-signup-link',
            className: 'wk-form__link',
            innerText: 'Sign Up',
            attributes: {
                href: '#'
            }
        }));

        subFooter.appendChild(createElement('a', {
            className: 'wk-form__link wk-form__reset-password',
            innerText: 'Forgot password',
            id: 'auth-password-link',
            attributes: {
                href: '#'
            }
        }));

        const formFooter = createElement('div', {
            className: 'wk-form__footer'
        });

        footerWrapper.appendChild(subFooter);

        formFooter.appendChild(this.cancelBtn);
        formFooter.appendChild(this.submitBtn);

        footerWrapper.appendChild(formFooter);

        return footerWrapper;
    }
}

export class SignupForm extends Form {
    constructor(targetElementSelector, options) {
        super();

        this.options = options;
        this.options.title = 'Sign Up' || options.title;
        this.options.footer = this.getFormFooter() || options.footer;

        this.emailField = new FormField({
            dataSlug: 'email',
            name: 'wk-fb-email',
            label: 'Email',
            type: 'email',
            onChange: () => {},
            onInput: () => {}
        });
        this.nameField = new FormField({
            dataSlug: 'name',
            name: 'wk-fb-name',
            label: 'Name',
            type: 'text',
            onChange: () => {},
            onInput: () => {}
        });
        this.passwordField = new PasswordField({
            dataSlug: 'password',
            name: 'wk-fb-password',
            testStrength: true,
            passwordHint: true,
            label: 'Password',
            type: 'password',
            onChange: () => {},
            onInput: () => {}
        });

        this.fields = [
            this.emailField,
            this.nameField,
            this.passwordField
        ];

        this.init();
        this.render(targetElementSelector);
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

export class FormField {
    constructor(options) {
        if (!options) {
            throw new Error('No Options Provided');
        }

        this.wrapper = this.createWrapper();
        this.input = this.createInput(options);
        this.type = options.type || 'text';
        this.message = null;
        this.isValid = false;
        this.required = options.required || false;
        this.slug = options.dataSlug;

        this.inputWrapper = this.createInputWrapper();
        this.wrapper.appendChild(this.createLabel(options.label, options.name));
        this.inputWrapper.appendChild(this.input);
        this.wrapper.appendChild(this.inputWrapper);

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
    }

    getElement () {
        return this.wrapper;
    }

    getValue () {
        return this.input.value;
    }

    validate () {
        const value = this.getValue();

        if (this.required && !value) {
            this.setError('This field is required!');

            return false;
        }

        if (this.type === 'email') {
            if (!value) {
                this.setError('Enter your email address to continue!');

                return false;
            } else if (!value.length > 4 || !value.includes('@') || !value.includes('.')) {
                this.setError('This email address isn\'t correct!');

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
            className: 'wk-form-field__input',
            id: options.id || options.name,
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
            innerText: text
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
}

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
        const targetElement = document.querySelector('#show-password-toggle');
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

export class AuthButton {
    constructor(selector, options) {
        this.selector = selector;
        this.element = this.createElement(options);

        if (options.onClick) {
            this.element.addEventListener('click', options.onClick.bind(this));
        }
    }

    createElement (options) {
        let className = 'wk-auth-form-button';
        if (options) {
            if (options.className) {
                className += ` ${options.className}`;
            }
        }

        return createElement('div', {
            className,
            innerHTML: `
                <span class="firebaseui-idp-icon-wrapper">
                    <img class="firebaseui-idp-icon" alt="" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg">
                </span>
                <span class="firebaseui-idp-text firebaseui-idp-text-long">Sign in with email</span>`
        });
    }

    hide () {
        this.element.style.display = 'none';
    }

    show () {
        this.element.style.display = 'block';
    }

    render() {
        const targetElement = document.querySelector(this.selector);

        if (targetElement) {
            targetElement.appendChild(this.element);
        }
    }
}
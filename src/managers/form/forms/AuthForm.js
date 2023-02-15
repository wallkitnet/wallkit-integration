import { createElement } from "../../../utils/DOM";

import { TriggerButton } from "../buttons/TriggerButton";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignUpForm";
import { ForgotPasswordForm } from "./ForgotPasswordForm";

export const SIGN_UP_FORM_SLUG = 'sign-up';
export const SIGN_IN_FORM_SLUG = 'sign-in';
export const RESET_PASSWORD_FORM_SLUG = 'reset-password';

export class AuthForm {
    constructor(selector, options) {
        this.defaultFormSlug = options?.defaultForm || SIGN_UP_FORM_SLUG;

        this.wrapper = createElement('div', {
            id: 'wk-auth-form'
        });

        this.loginForm = new LoginForm(selector, {
            cancelBtn: options.triggerButton !== false,
            signUp: options.signUp ?? true,
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

                this.showForm(SIGN_UP_FORM_SLUG);
            } else if (event.target.id === 'auth-password-link') {
                event.preventDefault();

                this.showForm(RESET_PASSWORD_FORM_SLUG);
            }
        });
        this.loginForm.hide();

        if (options.signUp === true) {
            this.signUpForm = new SignupForm(selector, {
                termsOfService: options.termsOfService,
                onSubmit: (data) => {
                    if (options.onSignUp) {
                        options.onSignUp(data);
                    }
                }
            });
            this.signUpForm.formWrapper.addEventListener('click', (event) => {
                if (event.target.id === 'auth-signin-link') {
                    event.preventDefault();

                    this.showForm(SIGN_IN_FORM_SLUG);
                }
            });
            this.signUpForm.hide();
        }

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

                this.showForm(SIGN_IN_FORM_SLUG);
                this.forgotPasswordForm.reRender();
            }
        });
        this.forgotPasswordForm.hide();

        if (options.triggerButton !== false) {
            this.triggerButton = new TriggerButton(selector, {
                onClick: () => {
                    this.loginForm.show();
                    this.triggerButton.hide();
                    if (options.onAuthFormShow) {
                        options.onAuthFormShow();
                    }
                }
            });
        }

        this.forms = {
            [RESET_PASSWORD_FORM_SLUG]: this.forgotPasswordForm,
            [SIGN_IN_FORM_SLUG]: this.loginForm,
            [SIGN_UP_FORM_SLUG]: this.signUpForm
        };
    }

    get defaultForm () {
        return this.forms[this.defaultFormSlug];
    }

    get activeForm () {
        let form = false;
        if (!!this.forms && Object.keys(this.forms).length){
            Object.keys(this.forms).forEach(key => {
                if (this.forms[key].isVisible()) {
                    form = this.forms[key];
                }
            });
        }
        return form;
    }

    showForm (authFormSlug) {
        if (authFormSlug && this.forms[authFormSlug]) {
            this.hide();
            this.forms[authFormSlug].show();
        }
    }

    showDefaultForm () {
        const form = this.defaultForm;

        if (form) {
            form.show();
        }
    }

    reset () {
        this.hide();

        if (this.triggerButton) {
            this.triggerButton.show();
        } else {
            this.showDefaultForm();
        }
    }

    hide () {
        if (!!this.forms) {
            for (let formKey in this.forms) {
                const form = this.forms[formKey];

                if (form) {
                    form.hide();
                    form.resetForm();
                }
            }
        }
    }

    handleError(error) {
        if (this.activeForm) {
            if (error === null) {
                this.activeForm.resetFormError(error);
            } else {
                this.activeForm.setFormError(error);
            }
        }
    }

    showSuccessPasswordReset () {
        const email = this.forgotPasswordForm.emailField.getValue();

        this.forgotPasswordForm.showFormResult(`
            <div class="wk-success-message wk-password-reset-success">
                <h2 class="wk-success-message__title">Check your email!</h2>
                <p class="wk-success-message__description">Follow the instructions sent to <b>${email}</b> to recover your password</p>
                <button id="back-to-login" class="wk-form-button wk-form-button--cancel">Back to login</button>
            </div>
        `);
    }

    render () {
        if (this.loginForm) {
            this.loginForm.render();
        }

        if (this.signUpForm) {
            this.signUpForm.render();
        }

        if (this.forgotPasswordForm) {
            this.forgotPasswordForm.render();
        }

        if (this.triggerButton) {
            this.triggerButton.render()
        } else {
            this.showDefaultForm();
        }
    }
}

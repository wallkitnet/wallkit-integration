import { createElement } from "../../../utils/DOM";

import { TriggerButton } from "../buttons/TriggerButton";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignUpForm";
import { ForgotPasswordForm } from "./ForgotPasswordForm";
import { ResetPasswordForm } from "./ResetPasswordForm";
import {DEFAULT_AUTH_FORM_SLUG_UPDATED} from "../../events/events-name";

export const SIGN_UP_FORM_SLUG = 'sign-up';
export const SIGN_IN_FORM_SLUG = 'sign-in';
export const FORGOT_PASSWORD_FORM_SLUG = 'forgot-password';
export const RESET_PASSWORD_FORM_SLUG = 'reset-password';

export class AuthForm {
    #options;

    constructor(selector, options) {
        this.#options = options;
        this.defaultForm = options?.defaultForm || false;

        // this.wrapper = createElement('div', {
        //     id: 'wk-auth-form'
        // });

        this.loginForm = new LoginForm(selector, {
            cancelBtn: options.triggerButton !== false,
            signUp: options.signUp ?? true,
            ...(options.customizeAuthForms?.signIn || {}),
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

                this.showForm(FORGOT_PASSWORD_FORM_SLUG);
            }
        });
        this.loginForm.hide();

        if (options.signUp === true) {
            this.signUpForm = new SignupForm(selector, {
                ...(options.customizeAuthForms?.signUp || {}),
                cancelBtn: options.triggerButton !== false,
                termsOfService: options.termsOfService,
                onSubmit: (data) => {
                    if (options.onSignUp) {
                        options.onSignUp(data);
                    }
                },
                onCancel: () => {
                    if (options.onCancel) {
                        options.onCancel();
                        this.signUpForm.resetForm();
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
            ...(options.customizeAuthForms?.forgotPassword || {}),
            onSubmit: (data) => {
                if (options.onPasswordForgot) {
                    options.onPasswordForgot(data);
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

        this.resetPasswordForm = new ResetPasswordForm(selector, {
            ...(options.customizeAuthForms?.resetPassword || {}),
            onSubmit: (data) => {
                if (options.onPasswordReset) {
                    options.onPasswordReset(data);
                }
            }
        });

        this.resetPasswordForm.formWrapper.addEventListener('click', (event) => {
            if (event.target.id === 'back-to-login') {
                event.preventDefault();

                this.showForm(SIGN_IN_FORM_SLUG);
                this.resetPasswordForm.reRender();
            }
        });
        this.resetPasswordForm.hide();

        if (options.triggerButton !== false) {
            this.triggerButton = new TriggerButton(selector, {
                authProviders: options.authProviders,
                defaultFormSlug: this.defaultFormSlug,
                onClick: () => {
                    this.defaultForm.show();
                    this.triggerButton.hide();
                    if (options.onAuthFormShow) {
                        options.onAuthFormShow();
                    }
                }
            });
        }

        this.forms = {
            [FORGOT_PASSWORD_FORM_SLUG]: this.forgotPasswordForm,
            [RESET_PASSWORD_FORM_SLUG]: this.resetPasswordForm,
            [SIGN_IN_FORM_SLUG]: this.loginForm,
            [SIGN_UP_FORM_SLUG]: this.signUpForm
        };
    }

    get defaultForm () {
        return this.forms[this.defaultFormSlug];
    }

    set defaultForm (formSlug) {
        const oldSlug = this.defaultFormSlug;
        if (formSlug && [SIGN_UP_FORM_SLUG, SIGN_IN_FORM_SLUG, FORGOT_PASSWORD_FORM_SLUG, RESET_PASSWORD_FORM_SLUG].includes(formSlug)) {
            this.defaultFormSlug = formSlug;
        } else {
            this.defaultFormSlug = this.#options.defaultForm || SIGN_UP_FORM_SLUG;
        }
        if (this.#options.triggerButton !== false && this.triggerButton) {
            this.triggerButton.events.notify(DEFAULT_AUTH_FORM_SLUG_UPDATED, {
                "new": this.defaultFormSlug,
                "old": oldSlug
            });
        }
    }

    get activeForm () {
        let form = false;
        if (!!this.forms && Object.keys(this.forms).length){
            Object.keys(this.forms).forEach(key => {
                if (this.forms[key].isVisible) {
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
        this.showForm(this.defaultFormSlug)
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

    showSuccessPasswordForgot () {
        const email = this.forgotPasswordForm.emailField.getValue();

        this.forgotPasswordForm.showFormResult(`
            <div class="wk-success-message wk-password-reset-success wk-password-forgot-message">
                <p class="wk-success-message__description">Please follow the instructions sent to <b>${email}</b> to set a new password.</p>
                <button id="back-to-login" class="wk-form-button wk-form-button--cancel">Back to login</button>
            </div>
        `);
    }

    showSuccessPasswordReset () {
        this.resetPasswordForm.showFormResult(`
            <div class="wk-success-message wk-password-reset-success wk-password-reset-message">
                <h2 class="wk-success-message__title">Your password had been saved successfully!</h2>
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

        if (this.resetPasswordForm) {
            this.resetPasswordForm.render();
        }

        if (this.triggerButton) {
            this.triggerButton.render()
        } else {
            this.showDefaultForm();
        }
    }
}

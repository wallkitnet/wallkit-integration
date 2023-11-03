import { createElement } from "../../../utils/DOM";

import { TriggerButton } from "../buttons/TriggerButton";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignUpForm";
import { ForgotPasswordForm } from "./ForgotPasswordForm";
import { ResetPasswordForm } from "./ResetPasswordForm";
import { EmailLinkForm } from "./EmailLinkForm";
import {DEFAULT_AUTH_FORM_SLUG_UPDATED} from "../../events/events-name";

export const SIGN_UP_FORM_SLUG = 'sign-up';
export const SIGN_IN_FORM_SLUG = 'sign-in';
export const FORGOT_PASSWORD_FORM_SLUG = 'forgot-password';
export const RESET_PASSWORD_FORM_SLUG = 'reset-password';
export const EMAIL_LINK_FORM_SLUG = 'email-link';
import isEmpty from "lodash.isempty";

export class AuthForm {
    #options;

    constructor(selector, options) {
        this.#options = options;
        this.defaultForm = options?.defaultForm || false;

        // this.wrapper = createElement('div', {
        //     id: 'wk-auth-form'
        // });
        const { messages, fieldLabels, signIn, signUp, emailLink, forgotPassword, resetPassword } = options.customizeAuthForms || {};

        /** LoginForm */
        let signInMessages = {};
        if (!isEmpty(signIn) && !isEmpty(signIn.messages)) {
            signInMessages = signIn.messages;
        }
        let signInFieldLabels = {};
        if (!isEmpty(signIn) && !isEmpty(signIn.fieldLabels)) {
            signInFieldLabels = signIn.fieldLabels;
        }
        this.loginForm = new LoginForm(selector, {
            className: 'wk-form-login',
            cancelBtn: options.triggerButton !== false,
            signUp: options.signUp ?? true,
            passwordSignInIgnoreValidation: options.passwordSignInIgnoreValidation || false,
            ...(signIn || {}),
            messages: {
                ...(messages || {}),
                ...signInMessages
            },
            fieldLabels: {
                ...(fieldLabels || {}),
                ...signInFieldLabels
            },
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

        /** SignupForm */
        let signUpMessages = {};
        if (!isEmpty(signUp) && !isEmpty(signUp.messages)) {
            signUpMessages = signUp.messages;
        }
        let signUpFieldLabels = {};
        if (!isEmpty(signUp) && !isEmpty(signUp.fieldLabels)) {
            signUpFieldLabels = signUp.fieldLabels;
        }
        if (options.signUp === true) {
            this.signUpForm = new SignupForm(selector, {
                className: 'wk-form-signup',
                cancelBtn: options.triggerButton !== false,
                termsOfService: options.termsOfService,
                ...(signUp || {}),
                messages: {
                    ...(messages || {}),
                    ...signUpMessages
                },
                fieldLabels: {
                    ...(fieldLabels || {}),
                    ...signUpFieldLabels
                },
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

        /** EmailLinkForm */
        let emailLinkMessages = {};
        if (!isEmpty(emailLink) && !isEmpty(emailLink.messages)) {
            emailLinkMessages = emailLink.messages;
        }
        let emailLinkFieldLabels = {};
        if (!isEmpty(emailLink) && !isEmpty(emailLink.fieldLabels)) {
            emailLinkFieldLabels = emailLink.fieldLabels;
        }
        this.emailLinkForm = new EmailLinkForm(selector, {
            className: 'wk-form-email-link',
            cancelBtn: options.triggerButton !== false,
            signUp: options.signUp ?? true,
            ...(emailLink || {}),
            messages: {
                ...(messages || {}),
                ...emailLinkMessages
            },
            fieldLabels: {
                ...(fieldLabels || {}),
                ...emailLinkFieldLabels
            },
            onSubmit: (data) => {
                if (options.onGetEmailLink) {
                    options.onGetEmailLink(data);
                }
            },
            onCancel: () => {
                if (options.onCancel) {
                    options.onCancel();
                    this.emailLinkForm.resetForm();
                }
            }
        });
        this.emailLinkForm.formWrapper.addEventListener('click', (event) => {
            if (event.target.id === 'auth-signup-link') {
                event.preventDefault();

                this.showForm(SIGN_UP_FORM_SLUG);
            } else if (event.target.id === 'auth-password-link') {
                event.preventDefault();

                this.showForm(FORGOT_PASSWORD_FORM_SLUG);
            }
        });
        this.emailLinkForm.formWrapper.addEventListener('click', (event) => {
            if (event.target.id === 'back-to-login') {
                event.preventDefault();
                if (options.onCancel) {
                    options.onCancel();
                    this.loginForm.resetForm();
                }
            }
        });
        this.emailLinkForm.hide();

        /** ForgotPasswordForm */
        let forgotPasswordMessages = {};
        if (!isEmpty(forgotPassword) && !isEmpty(forgotPassword.messages)) {
            forgotPasswordMessages = forgotPassword.messages;
        }
        let forgotPasswordFieldLabels = {};
        if (!isEmpty(forgotPassword) && !isEmpty(forgotPassword.fieldLabels)) {
            forgotPasswordFieldLabels = forgotPassword.fieldLabels;
        }
        this.forgotPasswordForm = new ForgotPasswordForm(selector, {
            className: 'wk-form-forgot-password',
            ...(forgotPassword || {}),
            messages: {
                ...(messages || {}),
                ...forgotPasswordMessages
            },
            fieldLabels: {
                ...(fieldLabels || {}),
                ...forgotPasswordFieldLabels
            },
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

        /** ResetPasswordForm */
        let resetPasswordMessages = {};
        if (!isEmpty(resetPassword) && !isEmpty(resetPassword.messages)) {
            resetPasswordMessages = resetPassword.messages;
        }
        let resetPasswordFieldLabels = {};
        if (!isEmpty(resetPassword) && !isEmpty(resetPassword.fieldLabels)) {
            resetPasswordFieldLabels = resetPassword.fieldLabels;
        }
        this.resetPasswordForm = new ResetPasswordForm(selector, {
            className: 'wk-form-reset-password',
            ...(resetPassword || {}),
            messages: {
                ...(messages || {}),
                ...resetPasswordMessages
            },
            fieldLabels: {
                ...(fieldLabels || {}),
                ...resetPasswordFieldLabels
            },
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

        /** TriggerButton */
        if (options.triggerButton !== false) {
            this.triggerButton = new TriggerButton(selector, {
                authProviders: options.authProviders,
                defaultFormSlug: this.defaultFormSlug,
                emailOnClick: () => {
                    let authFormSlug = options.defaultForm || SIGN_IN_FORM_SLUG;
                    if (options.getShowAuthFormSlug) {
                        const showAuthFormSlug = options.getShowAuthFormSlug();
                        authFormSlug = showAuthFormSlug || authFormSlug;
                    }
                    this.defaultForm = authFormSlug;
                    this.defaultForm.show();
                    this.triggerButton.hide();
                    if (options.onAuthFormShow) {
                        options.onAuthFormShow();
                    }
                },
                emaillinkOnClick: () => {
                    this.defaultForm = EMAIL_LINK_FORM_SLUG;
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
            [SIGN_UP_FORM_SLUG]: this.signUpForm,
            [EMAIL_LINK_FORM_SLUG]: this.emailLinkForm
        };
    }

    get defaultForm () {
        return this.forms[this.defaultFormSlug];
    }

    set defaultForm (formSlug) {
        const oldSlug = this.defaultFormSlug;
        if (formSlug && [SIGN_UP_FORM_SLUG, SIGN_IN_FORM_SLUG, FORGOT_PASSWORD_FORM_SLUG, RESET_PASSWORD_FORM_SLUG, EMAIL_LINK_FORM_SLUG].includes(formSlug)) {
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

    handleError(errorMessage, errorCode) {
        if (this.activeForm) {
            if (errorMessage === null) {
                this.activeForm.resetFormError(errorMessage);
            } else {
                this.activeForm.setFormError(errorMessage, errorCode);
            }
        }
    }

    showSuccessEmailLink () {
        const email = this.emailLinkForm.emailField.getValue();
        const { successEmailLink } = this.#options.customizeAuthForms || {};
        const { descriptionPrefix, descriptionPostfix, backLinkTitle } = successEmailLink || {};
        this.emailLinkForm.showFormResult(`
            <div class="wk-success-message wk-email-link-success wk-email-link-message">
                <p class="wk-success-message__description">${descriptionPrefix || 'Please follow the instructions sent to '}<b>${email}</b>${descriptionPostfix || ' to sign in.'}</p>
                <button id="back-to-login" class="wk-form-button wk-form-button--cancel">${backLinkTitle || 'Back to login'}</button>
            </div>
        `);
    }

    showSuccessPasswordForgot () {
        const email = this.forgotPasswordForm.emailField.getValue();
        const { successPasswordForgot } = this.#options.customizeAuthForms || {};
        const { descriptionPrefix, descriptionPostfix, backLinkTitle } = successPasswordForgot || {};
        this.forgotPasswordForm.showFormResult(`
            <div class="wk-success-message wk-password-reset-success wk-password-forgot-message">
                <p class="wk-success-message__description">${descriptionPrefix || 'Please follow the instructions sent to '}<b>${email}</b>${descriptionPostfix || ' to set a new password.'}</p>
                <button id="back-to-login" class="wk-form-button wk-form-button--cancel">${backLinkTitle || 'Back to login'}</button>
            </div>
        `);
    }

    showSuccessPasswordReset () {
        const { authOnPasswordReset } = this.#options || {};
        const { successPasswordReset } = this.#options.customizeAuthForms || {};
        const { description, backLinkTitle } = successPasswordReset || {};
        this.resetPasswordForm.showFormResult(`
            <div class="wk-success-message wk-password-reset-success wk-password-reset-message">
                <h2 class="wk-success-message__title">${description || 'Your password had been saved successfully!'}</h2>
                ${ authOnPasswordReset ? '' : '<button id="back-to-login" class="wk-form-button wk-form-button--cancel">' + ( backLinkTitle || 'Back to login' ) + '</button>' }
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

        if (this.emailLinkForm) {
            this.emailLinkForm.render();
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

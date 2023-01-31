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
                    this.loginForm.show();
                    this.signUpForm.hide();
                    this.signUpForm.resetForm();
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

                this.forgotPasswordForm.hide();
                this.forgotPasswordForm.resetForm();
                this.loginForm.show();
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

    get visibleFormName () {
        if (this.signUpForm.isVisible()) {
            return 'signUpForm';
        } else if (this.loginForm.isVisible()) {
            return 'loginForm';
        } else if (this.forgotPasswordForm.isVisible()) {
            return 'forgotPasswordForm';
        } else {
            return false;
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
        if (this.visibleFormName) {
            if (error === null) {
                this[this.visibleFormName].resetFormError(error);
            } else {
                this[this.visibleFormName].setFormError(error);
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

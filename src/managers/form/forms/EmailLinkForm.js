import { createElement } from "../../../utils/DOM";
import { Form } from "../index";

import { FormField } from "../field";

export class EmailLinkForm extends Form {
    constructor(targetElementSelector, options) {
        super(targetElementSelector, options);

        this.options = options;
        this.options.title = options.title || 'Sign in with email';
        this.options.footer = this.getFormFooter() || options.footer;

        this.emailField = new FormField({
            name: 'wk-fb-email',
            dataSlug: 'email',
            label: 'Email',
            type: 'email',
            messages: options.messages || {},
            onEnter: () => {
              this.submitForm();
            }
        });

        this.fields = [
            this.emailField
        ];

        this.init();

        if (options.onCancel) {
            this.cancelBtn.addEventListener('click', options.onCancel.bind(this));
        }
    }

    getFormFooter() {
        const footerWrapper = createElement('div');

        const subFooter = createElement('div', {
            className: 'wk-form__sub-footer',
        });

        const signUpWrapper = createElement( 'div', {
            className: 'wk-form__footer-sign-up',
            innerText: this.options.signUpPreLinkTitle || '',
        });

        if (this.options.signUp === true) {
            signUpWrapper.appendChild(createElement('a', {
                id: 'auth-signup-link',
                className: 'wk-form__link',
                innerText: this.options.signUpLinkTitle || 'Sign Up',
                attributes: {
                    href: '#'
                }
            }));
        }
        subFooter.appendChild(signUpWrapper);

        const formFooter = createElement('div', {
            className: 'wk-form__footer wk-form__footer--right'
        });

        footerWrapper.appendChild(subFooter);

        if (this.options.cancelBtn !== false) {
            formFooter.appendChild(this.cancelBtn);
        }
        formFooter.appendChild(this.submitBtn);

        footerWrapper.appendChild(formFooter);

        return footerWrapper;
    }

}

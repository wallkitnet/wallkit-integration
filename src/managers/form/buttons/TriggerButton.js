import { createElement } from "../../../utils/DOM";

export class TriggerButton {
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

    get isVisible () {
        if (window.getComputedStyle(this.element)){
            return window.getComputedStyle(this.element).getPropertyValue('display') === 'block';
        }
        return false;
    }
}

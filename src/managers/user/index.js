import Modal from "../modal";
import { ChangePasswordForm } from "../form/forms/ChangePasswordForm"
import {WALLKIT_USER_MANAGER_MODAL_FORM_PLACEHOLDER_ID} from "../../configs/constants";
import isEmpty from "lodash.isempty";

export default class UserManager {
    #options;

    constructor(options) {
        this.#options = options;
        this.popup = options.popup;
        this.authentication = options.authentication;
        this.#initModal(options);
    }

    #initModal(options) {
        this.modal = new Modal({
            modalName: options.name || 'user-manager-modal',
            content: options.content || this.getDefaultUserManagerModalContent(),
            className: options.className || 'wallkit-auth-modal',
            initialLoader: options.loader || false,
            ui: options?.ui,
        });
        this.modal.init();
        this.modal.modalWrapper.addEventListener('click', (event) => {
            if (this.changePasswordForm && event.target.classList.contains('account-settings-link')) {
                event.preventDefault();
                this.changePasswordForm.cancelForm();
            }
        });
    }

    #initChangePasswordForm () {
        if (!this.changePasswordForm) {
            const { messages, changePassword } = this.#options.customizeForms || {};
            let changePasswordMessages = {};
            if (!isEmpty(changePassword) && !isEmpty(changePassword.messages)) {
                changePasswordMessages = changePassword.messages;
            }
            let changePasswordFieldLabels = {};
            if (!isEmpty(changePassword) && !isEmpty(changePassword.fieldLabels)) {
                changePasswordFieldLabels = changePassword.fieldLabels;
            }

            this.changePasswordForm = new ChangePasswordForm(
                `#${WALLKIT_USER_MANAGER_MODAL_FORM_PLACEHOLDER_ID}`, {
                    ...(changePassword || {}),
                    messages: {
                        ...(messages || {}),
                        ...changePasswordMessages
                    },
                    fieldLabels: {
                        ...changePasswordFieldLabels
                    },
                    onCancel: () => {
                        this.cancelModalForm({
                            openPopupName: 'account-settings'
                        });
                    },
                    onSubmit: (data) => {
                        this.#onSubmitChangePasswordForm(data);
                    }
                });
            this.changePasswordForm.render();
        } else {
            this.changePasswordForm.resetForm();
            this.changePasswordForm.reRender();
        }
    }

    async #onSubmitChangePasswordForm({old_password, new_password}) {
        try {
            if (this.modal) {
                this.modal.toggleLoader(true);
            }
            await this.authentication.firebase.reauthenticateWithCredential(old_password);
            await this.authentication.firebase.updatePassword(new_password);
            this.#successChangePasswordForm();
        } catch (error) {
            this.#setErrorMessageChangePasswordForm(error);
        }
    }

    #setErrorMessageChangePasswordForm (error) {
        if (this.changePasswordForm) {
            if (!isEmpty(error.message)) {
                this.changePasswordForm.setFormError(error.message, error.code || error?.response?.error || false);
            }
            if (this.modal) {
                this.modal.toggleLoader(false);
            }
        }
    }

    #successChangePasswordForm () {
        if (this.changePasswordForm) {
            const { successPasswordChange } = this.#options.customizeForms || {};
            const { description, backLinkTitle } = successPasswordChange || {};
            this.changePasswordForm.showFormResult(`
            <div class="wk-success-message wk-password-reset-success">
                <h2 class="wk-success-message__title">${description || 'Your password has been successfully changed!'}</h2>
                <a href="#" class="wk-form__link account-settings-link">${backLinkTitle || 'Back to account settings'}</a>
            </div>
        `);
            if (this.modal) {
                this.modal.toggleLoader(false);
            }
        }
    }

    cancelModalForm(options) {
        this.modal.hide();
        if (options.openPopupName) {
            this.popup.open(options.openPopupName);
        }
    }

    showChangePassword() {
        this.modal.show();
        this.#initChangePasswordForm();
    }

    getDefaultUserManagerModalContent () {
        return `<div>
                    <div id="user-manager-modal-error"></div>
                    <div id="${WALLKIT_USER_MANAGER_MODAL_FORM_PLACEHOLDER_ID}"></div>
                </div>`;
    }
}

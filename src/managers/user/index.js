import Modal from "../modal";
import { ChangePasswordForm } from "../form/forms/ChangePasswordForm"
import {WALLKIT_USER_MANAGER_MODAL_FORM_PLACEHOLDER_ID} from "../../configs/constants";

export default class UserManager {

    constructor(options) {
        this.popup = options.popup;
        this.authentication = options.authentication;
        this.#initModal({});
    }

    #initModal(options) {
        this.modal = new Modal({
            modalName: options.name || 'user-manager-modal',
            content: options.content || this.getDefaultUserManagerModalContent(),
            className: options.className || 'wallkit-auth-modal',
            initialLoader: options.loader || false
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
            this.changePasswordForm = new ChangePasswordForm(
                `#${WALLKIT_USER_MANAGER_MODAL_FORM_PLACEHOLDER_ID}`, {
                    onCancel: () => {
                        this.cancelModalForm({
                            openPopupName: 'account-settings'
                        });
                    },
                    onSubmit: (data) => {
                        if (this.modal) {
                            this.modal.toggleLoader(true);
                        }
                        this.authentication.firebase.reauthenticateWithCredential(data.old_password).then(() => {
                            this.authentication.firebase.updatePassword(data.new_password).then(() => {
                                this.#successChangePasswordForm();
                            }).catch((error) => {
                                this.#setErrorMessageChangePasswordForm(error);
                            })
                        }).catch((error) => {
                            this.#setErrorMessageChangePasswordForm(error);
                        });
                    }
                });
            this.changePasswordForm.render();
        } else {
            this.changePasswordForm.resetForm();
            this.changePasswordForm.reRender();
        }
    }

    #setErrorMessageChangePasswordForm (error) {
        if (this.changePasswordForm) {
            if (error.message) {
                this.changePasswordForm.setFormError(error.message);
            }
            if (this.modal) {
                this.modal.toggleLoader(false);
            }
        }
    }

    #successChangePasswordForm () {
        if (this.changePasswordForm) {
            this.changePasswordForm.showFormResult(`
            <div class="wk-success-message wk-password-reset-success">
                <h2 class="wk-success-message__title">Password updated.</h2>
                <a href="#" class="wk-form__link account-settings-link">Back to account settings</a>
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
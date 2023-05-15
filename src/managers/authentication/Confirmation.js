import Modal from "../modal";
import SDK from "../sdk";

export class Confirmation {
  constructor() {
    this.sdk = new SDK();
  }

  getEmailConfirmationModalContent() {
    return `<div class="wallkit-email-confirmation-modal">
                <div id="confirm-email-error"></div>
                <h2 class="wallkit-auth-modal__title">Please confirm your email address</h2>
                <a href="#" id="wallkit-resend-confirmation">Resend confirmation</a>
              </div>`;
  }

  #createEmailConfirmationModal() {
    return new Modal({
      modalName: 'email-confirmation-modal',
      content: this.getEmailConfirmationModalContent(),
      className: 'wallkit-auth-modal',
      initialLoader: false
    });
  }

  #createEmailConfirmedModal() {
    return new Modal({
      modalName: 'email-confirmed-modal',
      content: `<div>
                    <div id="confirmed-email-error"></div>
                    <div id="confirmed-modal-content"></div>
              </div>`,
      className: 'wallkit-auth-modal',
      initialLoader: true
    });
  }

  showEmailConfirmationModal() {
    const modal = this.#createEmailConfirmationModal();

    modal.init();
    modal.show();

    const confirmation = document.getElementById('wallkit-resend-confirmation');
    confirmation.addEventListener('click', (event) => {
      event.preventDefault();

      modal.toggleLoader(true);

      this.sdk.methods.resendConfirmUserEmail()
        .then(({ result }) => {
          if (result) {
            const confirmationText = document.createElement('p');
            confirmationText.innerText = 'Confirmation sent!';
            confirmation.replaceWith(confirmationText);
          }
        })
        .catch((error) => {
          if (error.message) {
            modal.setError(error);
          }
        })
        .finally(() => modal.toggleLoader(false));
    });
  }

  confirmUserEmail(code) {
    const modal = this.#createEmailConfirmedModal();

    modal.init();
    modal.show();

    this.sdk.methods.confirmUserEmail(code)
      .then(() => {
        const contentElement = document.getElementById('confirmed-modal-content');

        if (contentElement) {
          contentElement.innerHTML = `<h2 class="wallkit-auth-modal__title">Thank you! Email confirmed!</h2>`;
        }
      })
      .catch((error) => {
        if (error.message) {
          modal.setError(error);
        }
      })
      .finally(() => {
        modal.toggleLoader(false)
      });
  }
}

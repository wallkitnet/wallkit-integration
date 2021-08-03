import Modal from '../modal';
import Firebase from "./Firebase";
import { WALLKIT_FIREBASE_UI_PLACEHOLDER_ID } from "../../configs/constants";

export default class Authentication {
    constructor(options) {
        this.modal = null;

        if (options?.firebase) {
            this.firebase = new Firebase();
            this.firebase.init();
        }

        this.init();
    }

    #createModal() {
        return new Modal({
            modalName: 'auth-modal',
            content: `<div id="${ WALLKIT_FIREBASE_UI_PLACEHOLDER_ID }"></div>`
        });
    }

    show() {
        this.modal.show();
    }

    init() {
        this.modal = this.#createModal();
    }
}
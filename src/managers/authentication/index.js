import Modal from '../modal';
import Firebase from "./Firebase";
import { WALLKIT_FIREBASE_UI_PLACEHOLDER_ID } from "../../configs/constants";
import { SUCCESS_AUTH } from "../events/events-name";
import Events from "../events";

export default class Authentication {
    constructor(options) {
        this.onAuth = options?.onAuth;
        this.frame = options?.frame

        if (options?.firebase) {
            this.modal = this.#createModal();
            this.firebase = new Firebase({
                onAuthStateChanged: this.updateFirebaseToken.bind(this),
                onSuccessAuth: this.onSuccessAuth.bind(this),
                onInit: this.onFirebaseInit.bind(this)
            });
            this.firebase.init();
        }

        this.events = new Events();

        this.init();
    }

    onSuccessAuth(data) {
        if (this.onAuth) {
            this.onAuth(data.token);
        }
        this.updateFirebaseToken(data.token);
        this.events.notify(SUCCESS_AUTH, data);
        this.modal.hide();
    }

    #createModal() {
        return new Modal({
            modalName: 'auth-modal',
            content: `<div>
                        <h2 class="wallkit-auth-modal__title">Sign In</h2>
                        <div id="${WALLKIT_FIREBASE_UI_PLACEHOLDER_ID}"></div>
                      </div>`,
            className: 'wallkit-auth-modal'
        });
    }

    show() {
        this.modal.show();
    }

    updateFirebaseToken(token) {
        this.frame.sendEvent('wk-event-firebase-token', token);
    }

    onFirebaseInit() {

    }

    init() {
    }
}
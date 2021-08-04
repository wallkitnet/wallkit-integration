import Modal from '../modal';
import Firebase from "./Firebase";
import { WALLKIT_FIREBASE_UI_PLACEHOLDER_ID, WALLKIT_TOKEN_NAME } from "../../configs/constants";
import EventsNames from "../events/events-name";
import Events from "../events";
import Frame from "../frame";
import { removeCookie, setCookie } from "../../utils/cookie";
import SDK from "../sdk";

export default class Authentication {
    constructor(options) {
        this.token = null;
        this.firebaseToken = null;
        this.onAuth = options?.onAuth;
        this.frame = new Frame();
        this.sdk = new SDK();

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

    isAuthenticated() {
        return this.sdk.methods.isAuthenticated();
    }

    onSuccessAuth(data) {
        if (this.onAuth) {
            this.onAuth(data.token);
        }
        this.updateFirebaseToken(data.token);
        this.events.notify(EventsNames.local.SUCCESS_FIREBASE_AUTH, data);
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

    removeToken() {
        this.token = null;
        removeCookie(WALLKIT_TOKEN_NAME)
    }

    setToken(token) {
      this.token = token;
      setCookie(WALLKIT_TOKEN_NAME, token, {
        expires: 'Fri, 31 Dec 9999 23:59:59 GMT',
        path: "/",
      });
    }

    initListeners() {
        this.events.subscribe(EventsNames.wallkit.WALLKIT_LOGOUT, () => this.removeToken());
        this.events.subscribe(EventsNames.wallkit.WALLKIT_FIREBASE_TOKEN, (value) => this.sdk.methods.setFirebaseToken(value));
        this.events.subscribe(EventsNames.wallkit.WALLKIT_EVENT_TOKEN, (value) => {
            if (value) {
                let token = value.token;
                this.setToken(token);
            }
        });
    }

    dispatchTokens() {
        if (this.isAuthenticated()) {
            if (this.sdk.methods.token) {
                this.frame.sendEvent(EventsNames.wallkit.WALLKIT_EVENT_TOKEN, this.sdk.methods.getToken());
            }

            if (this.sdk.methods.firebase) {
                this.frame.sendEvent(EventsNames.wallkit.WALLKIT_EVENT_FIREBASE_TOKEN, this.sdk.methods.firebase.getToken);
            }
        }
    }

    init() {
        this.initListeners();
    }
}
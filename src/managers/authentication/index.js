import Modal from '../modal';
import Firebase from "./Firebase";
import { WALLKIT_FIREBASE_UI_PLACEHOLDER_ID, WALLKIT_TOKEN_NAME, FIREBASE_TOKEN_NAME } from "../../configs/constants";
import EventsNames from "../events/events-name";
import Events from "../events";
import Frame from "../frame";
import SDK from "../sdk";
import Token from "./Token";

export default class Authentication {
    #options;

    constructor(options) {
        if (!!Authentication.instance) {
            return Authentication.instance;
        }

        Authentication.instance = this;

        this.#options = options;

        this.token = new Token(WALLKIT_TOKEN_NAME);
        this.firebaseToken = new Token(FIREBASE_TOKEN_NAME);

        this.frame = new Frame();
        this.sdk = new SDK();

        if (options?.firebase) {
            this.modal = this.#createModal();
            this.modal.init();
            this.firebase = new Firebase({
                onAuthStateChanged: this.updateFirebaseToken.bind(this),
                onSuccessAuth: this.onSuccessAuth.bind(this),
                uiShown: this.onFirebaseInit.bind(this),
                onAuthFail: this.onFirebaseAuthFail.bind(this)
            });
            this.firebase.init();
        }

        this.events = new Events();
    }

    isAuthenticated() {
        if (this.sdk) {
            return this.sdk.methods.isAuthenticated();
        } else {
            return !!this.token.get();
        }
    }

    onSuccessAuth(data) {
        this.modal.toggleLoader(true);
        this.updateFirebaseToken(data.token);
        this.events.notify(EventsNames.local.SUCCESS_FIREBASE_AUTH, data);
        this.authInWallkit(data.token).then((status) => {
            if (status) {
                this.modal.hide();
                this.modal.toggleLoader(false);
            }
        });
    }

    authInWallkit(firebaseToken = null) {
        return new Promise((resolve) => {
            if (firebaseToken) {
                this.sdk.methods.authenticateWithFirebase(firebaseToken).then(({ token }) => {
                    this.setToken(token);
                    this.events.notify(EventsNames.local.SUCCESS_AUTH, true);
                    resolve(true);
                });
            } else {
                resolve(false);
            }
        });
    }

    #createModal() {
        return new Modal({
            modalName: 'auth-modal',
            content: `<div>
                        <h2 class="wallkit-auth-modal__title">${this.#options?.modalTitle ?? 'Sign In'}</h2>
                        <div id="${WALLKIT_FIREBASE_UI_PLACEHOLDER_ID}"></div>
                      </div>`,
            className: 'wallkit-auth-modal',
            initialLoader: true
        });
    }

    show() {
        this.modal.show();
    }

    updateFirebaseToken(token) {
        this.firebaseToken.set(token);
        this.frame.sendEvent(EventsNames.wallkit.WALLKIT_EVENT_FIREBASE_TOKEN, token);
    }

    onFirebaseInit() {
        this.modal.toggleLoader(false);
    }

    removeToken() {
        this.token.remove();
    }

    removeFirebaseToken() {
        this.firebaseToken.remove();
    }

    setToken(token) {
      this.token.set(token);
    }

    initListeners() {
        this.events.subscribe(EventsNames.wallkit.WALLKIT_LOGOUT, () => this.logout());
        this.events.subscribe(EventsNames.wallkit.WALLKIT_FIREBASE_TOKEN, (value) => {
            this.firebaseToken.set(value);
            this.sdk.methods.setFirebaseToken(value);
        });

        this.events.subscribe(EventsNames.local.FRAME_MESSAGE, ({ name, value }) => {
            switch (name) {
                case EventsNames.wallkit.WALLKIT_EVENT_AUTH:
                case EventsNames.wallkit.WALLKIT_EVENT_REGISTRATION:
                case EventsNames.wallkit.WALLKIT_EVENT_GET_TOKEN:
                case EventsNames.wallkit.WALLKIT_EVENT_TOKEN:
                    if (value) {
                        let token = value.token;
                        this.setToken(token);
                    }
                    break;
            }
        });
    }

    logout() {
        this.removeToken()
        this.firebase.logout().then((success) => {
            if (success) {
                this.removeFirebaseToken();
            }
        });
    }

    dispatchTokens() {
        if (this.isAuthenticated()) {
            if (this.token.get()) {
                this.frame.sendEvent(EventsNames.wallkit.WALLKIT_EVENT_TOKEN, this.token.get());
            }

            if (this.firebaseToken.get()) {
                this.frame.sendEvent(EventsNames.wallkit.WALLKIT_EVENT_FIREBASE_TOKEN, this.firebaseToken.get());
            }
        }
    }

    onFirebaseAuthFail(error) {
        this.modal.toggleLoader(false);
        console.log('error', error);
    }

    handleOneTapResponse({ credential }) {
        this.frame.sendEvent(EventsNames.wallkit.WALLKIT_EVENT_ONE_TAP_SIGN_IN, credential);
    }

    init() {
        this.initListeners();
    }
}
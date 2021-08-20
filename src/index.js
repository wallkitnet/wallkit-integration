import Authentication from './managers/authentication';
import Modal from './managers/modal';
import Frame from './managers/frame';
import SDK from './managers/sdk';
import Events from "./managers/events";
import Analytics from "./managers/analytics";

import { LIBRARY_STYLES } from './assets/styles';

import { createElement, injectInHead } from "./utils/DOM";
import { isApplePayAvailable } from './utils/payments';

import { ALLOWED_ORIGINS } from './configs/constants';
import { SUCCESS_AUTH, FRAME_MESSAGE, FRAME_MODAL_CLOSED } from "./managers/events/events-name";

window.WallkitIntegration = class WallkitIntegration {
    constructor(options) {
        this.config = options;
        this.events = new Events();

        this.frame = new Frame({
            ...options,
            onReady: () => this.popup.toggleLoader(false)
        });

        this.popup = new Modal({
            resourceFrame: this.frame,
            initialLoader: true,
            onReady: (modal) => {
                modal.openByHash();
            },
            onClose: () => {
                this.events.notify(FRAME_MODAL_CLOSED, { name: this.frame.currentFrameName });
            }
        });

        this.sdk = new SDK({
            ...options,
            onLoaded: () => {
                this.authentication = new Authentication({
                    firebase: options?.auth?.firebase,
                    modalTitle: options.auth?.modal?.title,
                    content: options.auth?.modal?.content
                });

                this.analytics = new Analytics(options?.analytics);

                this.init();
            }
        });
    }

    modal(name, params) {
        this.popup.open(name, params);
    }

    #eventsListener() {
        window.addEventListener('message', (event) => {
            const { data: { value, name }, origin } = event;

            this.events.notify(name, value);
            this.events.notify(FRAME_MESSAGE, { name, value });

            try {
                if (ALLOWED_ORIGINS.includes(origin) && name) {
                    switch (name) {
                        case "wk-event-modals-ready" :
                            if (this.authentication.isAuthenticated()) {
                                this.frame.sendEvent("wk-event-applepay-ready", isApplePayAvailable());
                            } else {
                                this.frame.sendEvent("wk-event-get-token", this.config.public_key);
                            }

                            break;

                        case "wk-event-resize" :
                            if (value.width !== 0 && value.height !== 0) {
                                this.popup.resize(value.width, value.height);
                            }

                            break;

                        case "show-firebase-auth":
                            const redirect = value;
                            this.authentication.show();
                            this.events.subscribe(SUCCESS_AUTH, () => {
                                console.log('redirect', redirect);
                                if (redirect) {
                                    this.popup.open(redirect);
                                } else {
                                    this.popup.hide();
                                }
                            }, { once: true });
                            break;

                        case "wk-event-close-modal" :
                            this.popup.hide();

                            break;

                        case "wk-event-reload-page" :
                            this.popup.hide();
                            location.reload();

                            break;

                        case "wk-event-storage-available":
                            if (!value) {
                                this.authentication.dispatchTokens();
                            }

                            break;

                        case "wk-event-close-on-wrapper":
                            this.popup.closeOutside = value;
                            break;
                    }
                }
            } catch (error) {
                console.log('ERROR', error);
            }
        });
    }

    #insertStyles () {
        const styles = createElement('style');
        styles.innerHTML = LIBRARY_STYLES;

        injectInHead(styles);
    }

    init() {
        this.#insertStyles();
        this.popup.init();
        this.authentication.init();
        this.analytics.init();
        this.#eventsListener();
    }
}

export default WallkitIntegration;
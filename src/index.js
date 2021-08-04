import Authentication from './managers/authentication';
import Modal from './managers/modal';
import Frame from './managers/frame';
import SDK from './managers/sdk';
import Events from "./managers/events";
import Analytics from "./managers/analytics";

import { isApplePayAvailable } from './utils/payments';

import { ALLOWED_ORIGINS } from './configs/constants';
import { SUCCESS_AUTH, FRAME_MESSAGE } from "./managers/events/events-name";

window.WallkitIntegration = class WallkitIntegration {
    constructor(options) {
        this.config = options;
        if (options.sdk !== false) {
            this.sdk = new SDK({
                ...options,
                onLoaded: () => this.init()
            });
        }

        this.frame = new Frame({
            ...options,
            onReady: () => this.modal.toggleLoader(false)
        });

        this.modal = new Modal({
            resourceFrame: this.frame,
            initialLoader: true,
            onReady: (modal) => {
                modal.openByHash();
            }
        });

        this.authentication = new Authentication({
            firebase: options?.auth?.firebase,
            modalTitle: options.auth?.modal?.title
        });

        this.analytics = new Analytics(options);
        this.events = new Events();
    }

    #eventsListener() {
        window.addEventListener('message', (event) => {
            const { data: { value, name }, origin } = event;

            this.events.notify(name, value);
            this.events.notify(FRAME_MESSAGE, { name, value });

            try {
                if (ALLOWED_ORIGINS.includes(origin) && value !== undefined && name) {
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
                                this.modal.resize(value.width, value.height);
                            }

                            break;

                        case "show-firebase-auth":
                            const redirect = value;
                            this.authentication.show();
                            this.events.subscribe(SUCCESS_AUTH, () => {
                                this.modal.open(redirect);
                            }, { once: true });
                            break;

                        case "wk-event-close-modal" :
                            this.modal.hide();

                            break;

                        case "wk-event-reload-page" :
                            this.modal.hide();
                            location.reload();

                            break;

                        case "wk-event-storage-available":
                            if (!value) {
                                this.authentication.dispatchTokens();
                            }

                            break;

                        case "wk-event-close-on-wrapper" :
                            this.modal.closeOutside = value;
                            break;
                    }
                }
            } catch (error) {
                console.log('ERROR', error);
            }
        });
    }

    init() {
        this.modal.init();
        this.authentication.init();
        this.analytics.init();
        this.#eventsListener();
    }
}

export default WallkitIntegration;

import Authentication from './managers/authentication';
import Modal from './managers/modal';
import Frame from './managers/frame';
import SDK from './managers/sdk';
import Events from "./managers/events";
import Analytics from "./managers/analytics";

import { parseModalHashURL } from './utils/url';
import { isApplePayAvailable } from './utils/payments';

import { ALLOWED_ORIGINS } from './configs/constants';
import { SUCCESS_AUTH } from "./managers/events/events-name";

window.WallkitIntegration = class WallkitIntegration {
    constructor(options) {
        this.config = options;
        if (options.sdk !== false) {
            this.sdk = new SDK(options);
        }

        this.frame = new Frame(options);
        this.modal = new Modal({
            resourceFrame: this.frame
        });

        if (options?.auth?.firebase) {
            this.authentication = new Authentication({
                firebase: true,
                onAuth: (token) => {
                    this.sdk.methods.authenticateWithFirebase(token).then(() => {
                       this.events.notify(SUCCESS_AUTH, true);
                    });
                }
            });
        }

        if (options?.analytics) {
            this.analytics = new Analytics();

            if (options.analytics?.parseUTM) {
                this.analytics.parseUTMTags();

                if (this.analytics.hasUTMTags) {
                    this.sdk.awaitLoad().then(() => {
                        if (this.authentication.isAuthenticated()) {
                            this.sdk.methods.updateUser({
                                extra: this.analytics.utmTags
                            })
                        }
                    });
                }
            }
        }

        this.events = new Events();

        this.init();
    }

    #eventsListener() {
        window.addEventListener('message', (event) => {
            const { data: { value, name }, origin } = event;

            console.log('name, value', name, value);

            this.events.notify(name, value);

            try {
                if (ALLOWED_ORIGINS.includes(origin) && value !== undefined && name) {
                    switch (name) {
                        case "wk-event-modals-ready" :
                            if (this.authentication.isAuthenticated()) {
                                this.frame.sendEvent("wk-event-applepay-ready", isApplePayAvailable());
                            }

                            if (!this.authentication.isAuthenticated()) {
                                this.frame.sendEvent("wk-event-get-token", this.config.public_key);
                            }

                            this.modal.openByHash();

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
                            });
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
                    }
                }
            } catch (error) {
                console.log('ERROR', error);
            }
        });
    }

    init() {
        this.#eventsListener();
    }
}

export default WallkitIntegration;
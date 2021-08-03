
import Authentication from './managers/authentication';
import Modal from './managers/modal';
import Frame from './managers/frame';
import SDK from './managers/sdk';
import Events from "./managers/events";

import { ALLOWED_ORIGINS } from './configs/constants';

import { SUCCESS_AUTH } from "./managers/events/events-name";

window.WallkitIntegration = class WallkitIntegration {
    constructor(options) {
        this.sdk = new SDK(options);
        this.frame = new Frame(options);
        this.modal = new Modal({
            resourceFrame: this.frame
        });
        this.authentication = new Authentication({
            frame: this.frame,
            firebase: true,
            onAuth: (token) => {
                this.sdk.methods.authenticateWithFirebase(token);
            }
        });
        this.events = new Events();

        this.init();
    }

    eventsListener() {
        window.addEventListener('message', (event) => {
            const { data: { value, name }, origin } = event;

            this.events.notify(name, value);

            try {
                if (ALLOWED_ORIGINS.includes(origin) && value !== undefined && name) {
                    switch (name) {
                        case "wk-event-resize" :
                            if (value.width !== 0 && value.height !== 0) {
                                this.modal.resize(value.width, value.height);
                            }

                            break;

                        case "show-firebase-auth":
                            const redirect = value;
                            this.authentication.show();
                            this.events.subscribe(SUCCESS_AUTH, (data) => {
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
                    }
                }
            } catch (error) {
                console.log('ERROR', error);
            }
        });
    }

    init() {
        this.eventsListener();
    }
}

export default WallkitIntegration;
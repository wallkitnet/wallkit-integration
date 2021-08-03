
import Authentication from './managers/authentication';
import Modal from './managers/modal';
import Frame from './managers/frame';

import { ALLOWED_ORIGINS } from './configs/constants';

window.WallkitIntegration = class WallkitIntegration {
    constructor(options) {
        this.authentication = new Authentication({
            firebase: true
        });

        this.modal = new Modal({
            resourceFrame: new Frame(options)
        });

        this.init();
    }

    eventsListener() {
        window.addEventListener('message', (event) => {
            const { data: { value, name }, origin } = event;

            try {
                if (ALLOWED_ORIGINS.includes(origin) && value !== undefined && name) {
                    switch (name) {
                        case "wk-event-resize" :
                            if (value.width !== 0 && value.height !== 0) {
                                this.modal.resize(value.width, value.height);
                            }

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
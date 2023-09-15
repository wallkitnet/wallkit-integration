import Authentication from './managers/authentication';
import Modal from './managers/modal';
import Frame from './managers/frame';
import SDK from './managers/sdk';
import Events from "./managers/events";
import Analytics from "./managers/analytics";
import Content from "./managers/content";
import Call from "./managers/call";
import UserManager from "./managers/user"

import { LIBRARY_STYLES } from './assets/styles';

import { createElement, injectInHead } from "./utils/DOM";
import { isApplePayAvailable } from './utils/payments';
import { isCrawler } from './utils/crawlers';

import { ALLOWED_ORIGINS } from './configs/constants';
import {SUCCESS_AUTH, FRAME_MESSAGE, FRAME_MODAL_CLOSED, MODAL_OPEN} from "./managers/events/events-name";
import { parseAuthTokenHash, resetHash} from "./utils/url";

window.WallkitIntegration = class WallkitIntegration {
    constructor(options) {
        this.config = options;
        this.events = new Events();
        this.content = Content;

        const preventExecutionForCrawlers = options?.prevent_execution_for_crawlers ?? true;
        if (preventExecutionForCrawlers && isCrawler()) {
            return;
        }

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
                const { firebase, modal, content, reCaptcha, forms } = options.auth || {};

                this.authentication = new Authentication({
                    ...options,
                    firebase: firebase,
                    modalTitle: modal?.title,
                    content: content || modal?.content,
                    reCaptcha: reCaptcha,
                });

                this.analytics = new Analytics(options?.analytics);
                this.call = new Call(this.popup, this.config);

                this.init();
                this.userManager = new UserManager({
                    customizeForms: forms || false,
                    popup: this.popup,
                    authentication: this.authentication
                });
            }
        });
    }

    modal (name, params) {
        this.popup.open(name, params);
    }

    on (eventName, callback, options) {
        this.events.subscribe(eventName, callback, options);
    }

    off (eventName, callback, options) {
        this.events.unsubscribe(eventName, callback, options);
    }

    sendEvent (name, value, params) {
        this.frame.sendEvent(name, value, params);
    }

    #eventsListener() {

        this.events.subscribe(MODAL_OPEN, (name) => {
            this.modal(name);
        });

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
                            this.popup.hide();
                            this.events.subscribe(SUCCESS_AUTH, () => {
                                if (typeof redirect === "string") {
                                    this.popup.open(redirect);
                                }
                            }, { once: true });
                            this.authentication.show();
                            this.frame.openFrame('');
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

                        case "wk-firebase-change-password" :
                            this.popup.hide();
                            this.userManager.showChangePassword();
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

    #recogniseURLIncomeParams () {
        const ticketPassAuthToken = parseAuthTokenHash();
        if (ticketPassAuthToken) {
            this.authentication.handleTicketsToken(ticketPassAuthToken);
            resetHash();
        }
    }

    init() {
        this.#insertStyles();
        this.popup.init();

        if (this.config.auth.defaultInit !== false) {
            this.authentication.init();
        }

        this.analytics.init();
        this.#eventsListener();
        this.#recogniseURLIncomeParams();

        if (this.config.onInit) {
            this.config.onInit(this);
        }

        if(this.config?.call?.use){
            this.call.init();
        }

    }
}

export * from './managers/events/events-name';
export * from './configs/constants';

export default WallkitIntegration;

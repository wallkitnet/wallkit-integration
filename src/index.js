import Authentication from './managers/authentication';
import Modal from './managers/modal';
import Frame from './managers/frame';
import SDK from './managers/sdk';
import Events from "./managers/events";
import Analytics from "./managers/analytics";
import Content from "./managers/content";
import Call from "./managers/call";
import UserManager from "./managers/user"

import { POPUP_UI_LIBRARY_STYLES, INLINE_UI_LIBRARY_STYLES } from './assets/styles';

import { createElement, injectInHead } from "./utils/DOM";
import { isApplePayAvailable } from './utils/payments';
import { isCrawler } from './utils/crawlers';

import { ALLOWED_ORIGINS } from './configs/constants';
import { SUCCESS_AUTH, FRAME_MESSAGE, FRAME_MODAL_CLOSED, MODAL_OPEN, READY, FIREBASE_READY } from "./managers/events/events-name";
import { parseAuthTokenHash, parseModalHashURL, resetHash, parseConfirmTokenHash } from "./utils/url";
import debug  from "./utils/debug";

window.WallkitIntegration = class WallkitIntegration {
    constructor(options) {
        debug.setDebugMode(options?.debug)

        this.managersStatuses = {
            analytics: {
                isEnabled: options?.analytics?.parseUTM ?? false,
                isReady: false,
            },
            authentication: {
                isEnabled: true,
                isReady: false,
            },
            call: {
                isEnabled: options?.call?.use ?? false,
                isReady: false,
            },
            content: {
                isEnabled: true,
                isReady: false,
            },
            events: {
                isEnabled: true,
                isReady: false,
            },
            frame: {
                isEnabled: true,
                isReady: false,
            },
            localization: {
                isEnabled: false,
                isReady: false,
            },
            modal: {
                isEnabled: true,
                isReady: false,
            },
            sdk: {
                isEnabled: true,
                isReady: false,
            },
            user: {
                isEnabled: true,
                isReady: false,
            }
        };

        this.events = new Events();
        this.managersStatuses.events.isReady = true;

        this.config = options;

        this.uiType = options?.ui?.type ?? 'popup';

        this.content = Content;
        this.managersStatuses.content.isReady = true;

        const preventExecutionForCrawlers = options?.prevent_execution_for_crawlers ?? true;
        if (preventExecutionForCrawlers && isCrawler()) {
            return;
        }

        this.frame = new Frame({
            ...options,
            onReady: () => {
                this.popup.toggleLoader(false);
                this.managersStatuses.frame.isReady = true;
            }
        });

        this.popup = new Modal({
            resourceFrame: this.frame,
            initialLoader: true,
            onReady: (modal) => {
                this.managersStatuses.modal.isReady = true;
            },
            onClose: () => {
                this.events.notify(FRAME_MODAL_CLOSED, {name: this.frame.currentFrameName});
            },
            ui: options?.ui
        });

        this.sdk = new SDK({
            ...options,
            onLoaded: () => {
                const {firebase, modal, content, reCaptcha, forms} = options.auth || {};

                this.authentication = new Authentication({
                    ...options,
                    firebase: firebase,
                    modalTitle: modal?.title,
                    content: content || modal?.content,
                    reCaptcha: reCaptcha,
                });

                this.analytics = new Analytics(options?.analytics);
                this.managersStatuses.analytics.isReady = true;

                this.call = new Call(this.popup, this.config, () => {
                    this.managersStatuses.call.isReady = true;
                });

                this.init();
                this.userManager = new UserManager({
                    customizeForms: forms || false,
                    popup: this.popup,
                    authentication: this.authentication,
                    ui: options?.ui,
                });
                this.managersStatuses.user.isReady = true;
                this.managersStatuses.sdk.isReady = true;
            }
        });

        this.checkAlreadyDefinedCallbacks();
    }

    checkAlreadyDefinedCallbacks() {
        if (Array.isArray(window.wk) && window.wk.length > 0) {
            window.wk.forEach(([event, callback, options]) => {
                if (typeof event !== 'string' || typeof callback !== 'function') {
                    return;
                }

                this.on(event, callback, options);
            });
        }
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

                        case "show-firebase-sign-in":
                            this.authSlug = 'sign-in';
                        case "show-firebase-sign-up":
                            if (typeof this.authSlug === "undefined") {
                                this.authSlug = 'sign-up';
                            }
                        case "show-firebase-auth":
                            if (typeof this.authSlug === "undefined") {
                                this.authSlug = '';
                            }
                            const redirect = value;
                            this.popup.hide();
                            this.events.subscribe(SUCCESS_AUTH, () => {
                                if (typeof redirect === "string") {
                                    this.popup.open(redirect);
                                }
                            }, { once: true });
                            this.authentication.show(this.authSlug);
                            this.frame.openFrame('');
                            this.authSlug = undefined;
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

                        case "wk-event-confirmation-required":
                            if (value.popup === 'plans') {
                              this.frame.openFrame('account-settings');
                              this.authentication.confirmation.showEmailConfirmationModal();
                              this.popup.hide();
                            }

                            break;
                    }
                }
            } catch (error) {
                debug.log('ERROR', error);
            }
        });

        this.events.subscribe(FIREBASE_READY, (params) => {
            this.managersStatuses.authentication.isReady = true;
        });

        let loadingInPercent = 0;
        let wkReady = setInterval(() => {

            const dif = [];
            for (const manager in this.managersStatuses) {
                if (this.managersStatuses[manager].isEnabled && !this.managersStatuses[manager].isReady) {
                    dif.push({manager, ...this.managersStatuses[manager]});
                }
            }

            const currentLoadingInPercent = Math.round((Object.keys(this.managersStatuses).length - dif.length) / Object.keys(this.managersStatuses).length * 100);
            if (currentLoadingInPercent !== loadingInPercent) {
                debug.log(`WIL is loading... ${currentLoadingInPercent}%`, dif);
                loadingInPercent = currentLoadingInPercent;
            }

            if (dif.length === 0) {
                debug.log('WIL is ready...')
                clearInterval(wkReady);
                this.events.notify('ready', true);
            }

        }, 100);


        this.on(READY, async () => {

            const isOpenAuthRouting = await this.authentication.handleAuthRouting();

            if (isOpenAuthRouting) {
                return;
            }

            if (this.uiType === 'popup') {
                this.popup.openByHash();
            } else {
                const modal = parseModalHashURL();
                if (modal) {
                    this.popup.open(modal.name, modal.params);
                } else {
                    if (this.authentication.isAuthenticated()) {
                        this.popup.open('account-settings');
                    } else {
                        this.popup.open('sign-in');
                    }
                }
            }
        }, {once: true});

    }

    #insertStyles() {
        const styles = createElement('style');
        styles.innerHTML = this.uiType === 'popup' ? POPUP_UI_LIBRARY_STYLES : INLINE_UI_LIBRARY_STYLES;

        injectInHead(styles);
    }

    #recogniseURLIncomeParams() {
        const ticketPassAuthToken = parseAuthTokenHash();
        if (ticketPassAuthToken) {
            this.authentication.handleTicketsToken(ticketPassAuthToken);
            resetHash();
        }

        const confirmToken = parseConfirmTokenHash();
        if (confirmToken) {
          this.authentication.confirmation.confirmUserEmail(confirmToken);
          resetHash();
        }
    }

    async init() {
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

        if (this.config?.call?.use) {
            await this.call.init();
        }

    }

    push ([event, callback, options]) {
        if (typeof event !== 'string' || typeof callback !== 'function') {
            return;
        }

        this.events.subscribe(event, callback, options);
    }
}

export * from './managers/events/events-name';
export * from './configs/constants';

export default WallkitIntegration;

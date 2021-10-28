import SDK from '../sdk';
import Authentication from "../authentication";
import Events from "../events";
import { SUCCESS_AUTH } from "../events/events-name";

export default class Analytics {
    #config;
    #sdk;
    #authentication;
    #events;

    constructor(options) {
        this.#config = {
            parseUTM: options?.parseUTM !== undefined ? options.parseUTM : true
        };
        this.#authentication = new Authentication();
        this.#sdk = new SDK();
        this.#events = new Events();

        this.utmTags = {};
    }

    parseUTMTags() {
        if (!window.location.search.includes('utm')) return {};

        const queryParams = new URLSearchParams(window.location.search);
        const utmParams = ['utm_source', 'utm_medium', 'utm_campaign'];

        let foundedUTMParams = {};

        utmParams.forEach((param) => {
            if (queryParams.get(param)) {
                foundedUTMParams[param] = queryParams.get(param);
            }
        });

        this.utmTags = foundedUTMParams;

        if (this.#authentication.isAuthenticated()) {
            this.#sdk.methods.updateUser({
                extra: this.utmTags
            });
        } else if (this.hasUTMTags) {
            this.#events.subscribe(SUCCESS_AUTH, () => {
                this.#sdk.methods.updateUser({
                    extra: this.utmTags
                });
            }, {once: true});
        }

        return foundedUTMParams;
    }

    get hasUTMTags() {
        return !!Object.keys(this.utmTags).length;
    }

    init() {
        if (this.#config.parseUTM !== false) {
            this.parseUTMTags();
        }
    }
}
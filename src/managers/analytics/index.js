import SDK from '../sdk';
import Authentication from "../authentication";

export default class Analytics {
    #options;
    #sdk;
    #authentication;

    constructor(options) {
        this.#options = options;
        this.#authentication = new Authentication();
        this.#sdk = new SDK();

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
            })
        }

        return foundedUTMParams;
    }

    get hasUTMTags() {
        return !!Object.keys(this.utmTags).length;
    }

    init() {
        this.parseUTMTags();
    }
}
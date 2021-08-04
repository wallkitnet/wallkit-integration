export default class Analytics {
    constructor() {
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

        return foundedUTMParams;
    }

    get hasUTMTags() {
        return !!Object.keys(this.utmTags).length;
    }
}
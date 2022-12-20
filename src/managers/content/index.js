import SDK from "../sdk";
import Events from "../events";
import {CHECK_USER_ACCESS} from "../events/events-name";

export default class Content {
    #options;
    #events;

    constructor(content, options) {
        this.content = content;
        this.#options = options;
        this.sdk = new SDK();
        this.#events = new Events();

        this.accessCount = 0;
        this.accessCountLimit = 0;
    }

    #encodeQueryData(data) {
        const ret = [];

        for (const d in data) {
            if (data[d] !== undefined) {
                ret.push(`${encodeURIComponent(d)}=${encodeURIComponent(data[d])}`);
            }
        }

        return ret.join('&');
    }

    #formatCheckAccessRequestPath(id, params) {
        const query = this.#encodeQueryData(params);

        return `/user/content-sync-and-check/${id}?${query}`;
    }

    formatTaxonomies(taxonomies) {
        const formatted = {};

        const taxonimiesTitles = [];
        const taxonimiesKeys = [];

        for (const taxKey in taxonomies) {
            taxonimiesKeys.push(taxKey);
            taxonimiesTitles.push(taxonomies[taxKey].label);

            let termKeysKey = `term_keys[${taxKey}]`;
            let termTitleKey = `term_titles[${taxKey}]`;

            let targetTermKeys = formatted[termKeysKey];
            let targetTermTitles = formatted[termTitleKey];

            if (taxonomies[taxKey]?.items) {
                taxonomies[taxKey].items.forEach((item) => {
                    if (targetTermKeys) {
                        targetTermKeys.push(item.slug);
                    } else {
                        formatted[termKeysKey] = [item.slug];
                    }

                    if (targetTermTitles) {
                        targetTermTitles.push(item.slug);
                    } else {
                        formatted[termTitleKey] = [item.name];
                    }
                });
            }

            formatted[termKeysKey] = formatted[termKeysKey].join(',');
            formatted[termTitleKey] = formatted[termTitleKey].join(',');
        }

        formatted.taxonomy_titles = taxonimiesTitles.join(',');
        formatted.taxonomy_keys = taxonimiesKeys.join(',');

        return formatted;
    }

    checkContentAccessAndSync(content) {
        const queryParams = {
            type: content.type,
            title: content.title,
            link: content.link || window.location.href,
            image: content.image || null,
        };

        Object.assign(queryParams, this.formatTaxonomies(content.taxonomies));

        return this.sdk.client.get({ path: this.#formatCheckAccessRequestPath(content.id, queryParams) }).then((response) => {
            if (this.sdk.methods.isAuthenticated()) {
                this.getAccessDetails(content.id);
            }

            this.#events.notify(CHECK_USER_ACCESS, true);
            return { allowed: response.allow, data: response };
        }).catch((error) => {

            this.#events.notify(CHECK_USER_ACCESS, false);
            return { allowed: false, error: error };
        })
    }

    checkAccess() {
        return this.sdk.methods.checkAccess(this.content.id).then((response) => {
            if (this.sdk.methods.isAuthenticated()) {
                this.getAccessDetails(this.content.id);
            }

            this.#events.notify(CHECK_USER_ACCESS, true);
            return { allowed: response.allow, data: response };
        }).catch((error) => {
            if (error.error === 'incorrect_content_key') {
                return this.checkContentAccessAndSync(this.content);
            }

            this.#events.notify(CHECK_USER_ACCESS, false);
            return { allowed: false, error: error };
        });
    }

    getAccessDetails(contentId) {
        return this.sdk.client.get({ path: `/user/content-access-details/${contentId}` }).then((response) => {
            if (response) {
                const terms = response.content_terms;

                this.accessCount = terms.usedLimitInPeriod;
                this.accessCountLimit = terms.accessLimit;

                return {
                    accessCount: this.accessCount,
                    accessCountLimit: this.accessCountLimit
                }
            }

            return {
                accessCount: 0,
                accessCountLimit: 0
            }
        }).catch((error) => {
            return error;
        });
    }
}
import {insertScript} from "../../utils/DOM";
import {WALLKIT_CDN_URL} from "../../configs/constants";
import {WALLKIT_SDK_LOADED} from '../events/events-name';
import Events from "../events";

export default class SDK {
    #options;
    #events;
    #apiUrl;

    constructor(options) {
        if (!!SDK.instance) {
            return SDK.instance;
        }

        if (!options) {
            return new Error('No Options Provided');
        }

        SDK.instance = this;

        this.methods = null;
        this.client = null;

        this.#options = options;
        this.#events = new Events();

        switch (options.mode) {
            case 'prod':
                this.#apiUrl = 'https://api.wallkit.net/api/v1';
                break;

            case 'dev':
                this.#apiUrl = 'https://api.dev.wallkit.net/api/v1';
                break;

            case 'demo':
                this.#apiUrl = 'https://api.demo.wallkit.net/api/v1';
                break;

            default:
                this.#apiUrl = 'https://api.wallkit.net/api/v1';
        }

        if (window.Wallkit) {
            this.onLoad();
        } else {
            this.load();
        }
    }

    onLoad() {
        if (window.Wallkit) {
            window.Wallkit.init({
                resource: this.#options.public_key,
                api_url: this.#apiUrl,
                subDomainCookie: this.#options.cookies?.subDomain ?? false,
                debug: this.#options?.debug ?? false
            });
            this.methods = window.Wallkit;
            this.client = window.Wallkit.client;
            this.#events.notify(WALLKIT_SDK_LOADED, window.Wallkit);

            if (this.#options?.onLoaded) {
                this.#options?.onLoaded();
            }
        }
    }

    awaitLoad() {
        return new Promise((resolve) => {
            if (!this.methods) {
                this.#events.subscribe(WALLKIT_SDK_LOADED, () => resolve(this));
            } else {
                resolve(this);
            }
        });
    }

    load() {
        insertScript(`${WALLKIT_CDN_URL}/js/sdk/latest/wallkit.umd.min.js`, 'wallkit-js-sdk', this.onLoad.bind(this));
    }
}

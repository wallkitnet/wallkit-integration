import { insertScript } from "../../utils/DOM";
import { WALLKIT_CDN_URL } from "../../configs/constants";

export default class SDK {
    constructor(options) {
        this.methods = null;
        this.options = options;
        this.load();
    }

    onLoad() {
        if (window.Wallkit) {
            window.Wallkit.init({resource: this.options.public_key});
            this.methods = window.Wallkit;
        }
    }

    load() {
        insertScript(`${WALLKIT_CDN_URL}/js/sdk/0.0.41/wallkit.umd.min.js`, 'wallkit-js-sdk', this.onLoad.bind(this));
    }
}
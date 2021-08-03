import { loadCSS, insertScript } from "./DOM";
import { WALLKIT_CDN_ASSETS_URL } from "../configs/constants";

export const loadWallkitAsset = (type, version, name, min = true) => {
    switch (type) {
        case 'css':
            let assetName = name;

            if (min) {
                assetName += '.min.css';
            } else {
                assetName += '.css';
            }

            loadCSS(`${WALLKIT_CDN_ASSETS_URL}/css/${version}/${assetName}`, `wk-css-${name}`);
            return;
        default:
           return;
    }
}

export const loadScripts = (scripts) => {
    if (Array.isArray(scripts)) {
        scripts.forEach((script) => {
            insertScript(script.url, script.id, script.onload);
        });
    }
}

export default {
    loadWallkitAsset,
    loadScripts
}
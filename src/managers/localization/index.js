import { FB_AVAILABLE_LANGUAGES } from "../../configs/languages";
import {WALLKIT_EVENT_CHANGE_LANGUAGE} from "../events/events-name";
import Events from "../events";

export class Localization {
    #events;
    constructor() {
        this.#events = new Events();
    }

    static assembleLanguage (language = 'en') {
        if (typeof language === "string") {
            if (FB_AVAILABLE_LANGUAGES.includes(language.toLowerCase())) {
                return language;
            }
        }

        return 'en';
    }
    static changeLanguage (language = 'en') {
        if (typeof language === "string") {
            this.#events.notify(WALLKIT_EVENT_CHANGE_LANGUAGE, language);
        }
    }
}

import { FB_AVAILABLE_LANGUAGES } from "../../configs/languages";

export class Localization {
    constructor() {
    }

    static assembleLanguage (language = 'en') {
        if (typeof language === "string") {
            if (FB_AVAILABLE_LANGUAGES.includes(language.toLowerCase())) {
                return language;
            }
        }

        return 'en';
    }
}
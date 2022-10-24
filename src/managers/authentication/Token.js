import LocalStorage from '../../utils/local-storage';
import { removeCookie, setCookie } from "../../utils/cookie";
import localStorage from "../../utils/local-storage";

export default class Token {
    #slug;
    #resource;

    constructor(slug, value, resource) {
        if (slug && resource) {
            this.#resource = resource;
            this.#slug = this.createTokenSlug(slug, resource);

            if (value) {
                this.set(value);
            } else {
                this.token = this.getStoredTokenValue() || null;
            }
        }
    }

    createTokenSlug (slug, resource) {
        return `${slug}_${resource}`;
    }

    get() {
        return this.token;
    }

    getStoredTokenValue() {
        return LocalStorage.getItem(this.#slug) || null;
    }

    remove() {
        this.token = null;
        removeCookie(this.#slug);
        localStorage.removeItem(this.#slug);
    }

    set(value) {
        this.token = value;
        setCookie(this.#slug, value, {
            expires: 'Fri, 31 Dec 9999 23:59:59 GMT',
            path: "/",
        });
        localStorage.setItem(this.#slug, value);
    }
}
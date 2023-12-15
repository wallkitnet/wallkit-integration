import { createElement } from "../../utils/DOM";
import { WALLKIT_MODAL_MIN_WIDTH, WALLKIT_MODAL_MIN_HEIGHT, WALLKIT_POPUP_URL, WALLKIT_POPUP_DEV_URL, WALLKIT_FRAME_ID } from "../../configs/constants";
import { FRAME_CREATED, WALLKIT_CHANGE_FRAME, WALLKIT_FRAME_READY, WALLKIT_FRAME_ROUTE_CHANGE } from "../events/events-name";
import Events from "../events";

const ADDITIONAL_FRAME_CLASSNAMES = 'intrinsic-ignore';

export default class Frame {
    constructor(options) {
        if (!!Frame.instance) {
            return Frame.instance;
        }

        Frame.instance = this;

        this.currentFrameName = '';
        this.options = options;
        this.frameElement = null;
        this.ready = false;

        this.events = new Events();
    }

    get element() {
        return this.frameElement;
    }

    get getFrameURL() {
        const host = this.options.mode === 'dev' ? WALLKIT_POPUP_DEV_URL : WALLKIT_POPUP_URL;
        const lang = this.options.lang ?? 'en';
        return `${ host }?PUBLIC_KEY=${ this.options.public_key }&version=${ this.options.version }&lang=${lang}`;
    }

    createFrame() {
        this.frameElement = createElement('iframe', {
            id: WALLKIT_FRAME_ID,
            className: `${WALLKIT_FRAME_ID} ${ADDITIONAL_FRAME_CLASSNAMES}`,
            attributes: {
                scrolling: 'no',
                allowtransparency: 'true',
                frameborder: '0',
                width: WALLKIT_MODAL_MIN_WIDTH,
                height: WALLKIT_MODAL_MIN_HEIGHT,
                allow: 'payment *'
            }
        });
        this.frameElement.setAttribute("src", this.getFrameURL);

        this.events.notify(FRAME_CREATED, true);

        return this.frameElement;
    }

    resize(width, height) {
        width = width >= WALLKIT_MODAL_MIN_WIDTH ? width : WALLKIT_MODAL_MIN_WIDTH;
        height = height >= WALLKIT_MODAL_MIN_HEIGHT ? height : WALLKIT_MODAL_MIN_HEIGHT;

        if (this.frameElement) {
            this.frameElement.width = width;
            this.frameElement.height = height;
        }
    }

    sendEvent(name, value, params) {
        const event = () => {
            if (this.frameElement && this.frameElement.contentWindow) {
                const frameWindow = this.frameElement.contentWindow;

                this.events.notify(name, value);

                frameWindow.postMessage({
                    name: name,
                    value: value,
                    params: params
                }, '*');
            }
        }

        if (this.ready) {
            event();
        } else {
            this.events.subscribe(WALLKIT_FRAME_READY, event.bind(this));
        }
    }

    openFrame(name, params) {
        this.currentFrameName = name;
        if (this.ready) {
            this.sendEvent(WALLKIT_CHANGE_FRAME, name, params);
        } else {
            this.events.subscribe(WALLKIT_FRAME_READY, () => {
                this.sendEvent(WALLKIT_CHANGE_FRAME, name, params);
            }, { once: true});
        }
    }

    #listeners() {
        this.events.subscribe(WALLKIT_FRAME_ROUTE_CHANGE, (value) => {
           this.currentFrameName = value;
        });

        this.events.subscribe(WALLKIT_FRAME_READY, (value) => {
            if (value === true) {
                this.onFrameReady();
            }
        });
    }

    onFrameReady() {
        this.ready = true;
        if (this.options?.onReady) {
            this.options?.onReady();
        }
    }

    init() {
        this.#listeners();

        return this.createFrame();
    }

}

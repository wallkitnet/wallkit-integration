import { createElement } from "../../utils/DOM";
import { WALLKIT_MODAL_MIN_WIDTH, WALLKIT_MODAL_MIN_HEIGHT, WALLKIT_POPUP_URL, WALLKIT_FRAME_ID } from "../../configs/constants";
import { FRAME_CREATED, WALLKIT_CHANGE_FRAME } from "../events/events-name";
import Events from "../events";

export default class Frame {
    constructor(options) {
        if (!!Frame.instance) {
            return Frame.instance;
        }

        Frame.instance = this;

        this.options = options;
        this.frameElement = null;

        this.events = new Events();
    }

    get element() {
        return this.frameElement;
    }

    get getFrameURL() {
        return `${ WALLKIT_POPUP_URL }?PUBLIC_KEY=${ this.options.public_key }&version=${ this.options.version }`;
    }

    createFrame() {
        this.frameElement = createElement('iframe', {
            id: WALLKIT_FRAME_ID,
            className: WALLKIT_FRAME_ID,
            attributes: {
                scrolling: 'no',
                allowtransparency: 'true',
                frameborder: '0',
                width: WALLKIT_MODAL_MIN_WIDTH,
                height: WALLKIT_MODAL_MIN_HEIGHT
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

    openFrame(name, params) {
        this.sendEvent(WALLKIT_CHANGE_FRAME, name, params);
    }

    init() {
        return this.createFrame();
    }

}
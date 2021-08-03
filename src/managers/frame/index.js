import { createElement } from "../../utils/DOM";
import { WALLKIT_MODAL_MIN_WIDTH, WALLKIT_MODAL_MIN_HEIGHT } from "../../configs/constants";

export default class Frame {
    constructor(options) {
        this.options = options;
        this.frameElement = null;
    }

    get element() {
        return this.frameElement;
    }

    get getFrameURL() {
        return `https://wallkit.net/popups?PUBLIC_KEY=${this.options.public_key}&version=${this.options.version}`;
    }

    createFrame() {
        this.frameElement = createElement('iframe', {
            id: 'wk-frame',
            className: 'wk-frame',
            attributes: {
                scrolling: 'no',
                allowtransparency: 'true',
                frameborder: '0',
                width: WALLKIT_MODAL_MIN_WIDTH,
                height: WALLKIT_MODAL_MIN_HEIGHT
            }
        });
        this.frameElement.setAttribute("src", this.getFrameURL);

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

            frameWindow.postMessage({
                name: name,
                value: value,
                params: params
            }, '*');
        }
    }

    openFrame(name, params) {
        this.sendEvent('wk-event-modal', name, params);
    }

    init() {
        return this.createFrame();
    }

}
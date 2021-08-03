import { WALLKIT_MODAL_WRAPPER_CLASSNAME,
         WALLKIT_MODAL_CLOSE_BTN_CLASSNAME,
         WALLKIT_MODAL_CONTENT_CLASSNAME,
         WALLKIT_MODAL_MIN_WIDTH,
         WALLKIT_MODAL_MIN_HEIGHT } from "../../configs/constants";
import DOM from '../../utils/DOM';
import { loadWallkitAsset } from "../../utils/loaders";

export default class Modal {
    constructor(options) {
        this.options = options;
        this.modalFrame = options ? options.resourceFrame : null;
        this.content = options ? options.content : null;
        this.modalWrapper = null;
        this.modalContent = null;

        this.init();
    }

    #getModalName() {
        return this.options?.modalName ?? 'wk-modal';
    }

    #createElement(elementTag, elementName, options) {
        let elementIdName = this.#getModalName() + '-' + elementName;

        let elementIndex = 0;
        let elementId = elementIdName;
        while (DOM.checkIfElementExists('#' + elementId)) {
            ++elementIndex;
            elementId = elementIdName + '-' + elementIndex;
        }

        return DOM.createElement(elementTag, { id: elementId, ...options });
    }

    #createCloseBtn() {
        const closeBtn = this.#createElement('div', 'close-btn', {
            className: WALLKIT_MODAL_CLOSE_BTN_CLASSNAME
        });
        closeBtn.innerHTML = '&#xd7;'; // Plus Symbol

        this.bindCloseEvent(closeBtn);

        return closeBtn;
    }

    bindCloseEvent(element) {
        return element.addEventListener('click', this.hide.bind(this));
    }


    #createWrapper() {
        this.modalWrapper = this.#createElement('div', 'wrapper', {
            styles: {
                display: 'none',
            },
            className: WALLKIT_MODAL_WRAPPER_CLASSNAME
        });

        this.modalWrapper.addEventListener('click', (event) => {
            if (event.target.id === this.modalWrapper.id) {
                this.hide();
            }
        });

        return this.modalWrapper;
    }

    #createContent() {
        this.modalContent = this.#createElement('div', 'content', {
            className: WALLKIT_MODAL_CONTENT_CLASSNAME
        });

        this.modalContent.style.minWidth = WALLKIT_MODAL_MIN_WIDTH + 'px';
        this.modalContent.style.minHeight = WALLKIT_MODAL_MIN_HEIGHT + 'px';

        return this.modalContent;
    }

    insertContent(element) {
       if (this.modalContent && element) {
           if (typeof element === "string") {
               this.modalContent.insertAdjacentHTML('beforeend', element);
           } else if (element instanceof HTMLElement) {
               this.modalContent.appendChild(element);
           }
       }
    }

    #completeModal() {
        this.#loadAssets();
        this.modalWrapper.appendChild(this.#createCloseBtn());
        this.modalWrapper.appendChild(this.modalContent);

        if (this.modalFrame) {
            this.insertContent(this.modalFrame.init());
        } else if (this.modalContent) {
            this.insertContent(this.content);
        }

        return DOM.injectInBody(this.modalWrapper);
    }

    open(name, params) {
        if (this.modalFrame) {
            this.modalFrame.openFrame(name, params);
            this.show();
        }
    }

    destroy() {

    }

    show() {
        this.modalWrapper.style.display = 'flex';
    }

    hide() {
        this.modalWrapper.style.display = 'none';
    }

    resize(width, height) {
        if (this.modalFrame) {
            this.modalFrame.resize(width, height);
        }
    }

    #loadAssets() {
        loadWallkitAsset('css', '1.0', 'spinner');
    }

    init() {
        this.#createWrapper();
        this.#createContent();
        this.#completeModal();
    }
}
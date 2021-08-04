import { WALLKIT_MODAL_WRAPPER_CLASSNAME,
         WALLKIT_MODAL_CLOSE_BTN_CLASSNAME,
         WALLKIT_MODAL_CONTENT_CLASSNAME,
         WALLKIT_MODAL_MIN_WIDTH,
         WALLKIT_MODAL_MIN_HEIGHT } from "../../configs/constants";
import DOM from '../../utils/DOM';
import { loadWallkitAsset } from "../../utils/loaders";
import { parseModalHashURL } from "../../utils/url";

export default class Modal {
    constructor(options) {
        this.options = options;
        this.modalFrame = options ? options.resourceFrame : null;
        this.content = options ? options.content : null;
        this.modalWrapper = null;
        this.modalContent = null;
        this.loaderElement = null;
        this.isLoading = false;
        this.closeOutside = true;
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
        let modalClassName = WALLKIT_MODAL_WRAPPER_CLASSNAME;

        if (this.options?.className) {
            modalClassName += ' ' + this.options?.className;
        }

        this.modalWrapper = this.#createElement('div', 'wrapper', {
            styles: {
                display: 'none',
            },
            className: modalClassName
        });

        this.modalWrapper.addEventListener('click', (event) => {
            if (event.target.id === this.modalWrapper.id) {
                if (this.closeOutside) {
                    this.hide();
                }
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

    toggleLoader(state) {
        this.isLoading = state;
        this.loaderElement.style.display = state ? 'flex' : 'none';
    }

    #createLoader() {
        this.loaderElement = this.#createElement('div', 'wallkit-modal-spinner', {
            className: 'wallkit-spinner',
            styles: {
                display: this.options?.initialLoader ? 'flex' : 'none',
            },
        });

        this.loaderElement.insertAdjacentHTML('beforeend', '<div class="wallkit-spinner__container">' +
            '<div class="cube1"></div>' +
            '<div class="cube2"></div>' +
            '</div>');
    }

    #completeModal() {
        this.#loadAssets();
        this.modalWrapper.appendChild(this.#createCloseBtn());
        this.modalWrapper.appendChild(this.modalContent);
        this.modalContent.appendChild(this.loaderElement);

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

    sendEvent(name, value, params) {
        if (this.modalFrame) {
            this.modalFrame.sendEvent(name, value, params);
        }
    }

    openByHash() {
        const modal = parseModalHashURL();

        if (modal) {
            this.open(modal.name, modal.params);
        }
    }

    #loadAssets() {
        loadWallkitAsset('css', '1.0', 'spinner');
    }

    onReady() {
        if (this.options?.onReady) {
            this.options.onReady(this);
        }
    }

    init() {
        this.#createWrapper();
        this.#createContent();
        this.#createLoader();
        this.#completeModal();
        this.onReady();
    }
}
import Error, { ERRORS_TYPES } from '../handlers/Error.js';

export const isDocumentAvailable = () => {
    return !!document;
}

export const checkIfElementExists = (elementSelector) => {
    if (!isDocumentAvailable()) return Error.handleError('Document is not available', ERRORS_TYPES.DOM_ERROR);

    return !!document.querySelector(elementSelector);
}

export const createElement = (tag, options) => {
    if (!isDocumentAvailable()) return Error.handleError('Document is not available', ERRORS_TYPES.DOM_ERROR);

    if (!tag) return Error.checkRequiredArgument(tag);

    const element = document.createElement(tag);

    const { id, className, styles, attributes } = options ?? {}; // Options Arguments

    if (id) {
        element.id = id;
    }

    if (className) {
        element.classList.add(className);
    }

    if (styles && Object.keys(styles) && Object.keys(styles).length) {
        for (let prop in styles) {
            if (styles.hasOwnProperty(prop)) {
                element.style[prop] = styles[prop];
            }
        }
    }

    if (attributes && Object.keys(attributes) && Object.keys(attributes).length) {
        for (let prop in attributes) {
            if (attributes.hasOwnProperty(prop)) {
                element[prop] = attributes[prop];
            }
        }
    }

    return element;
}

export const injectInBody = (element) => {
    if (!isDocumentAvailable()) return Error.handleError('Document is not available', ERRORS_TYPES.DOM_ERROR);
    if (!element) return Error.checkRequiredArgument(element, 'element');

    return document.body.appendChild(element);
}

export const loadCSS = (url, id) => {
    if (!isDocumentAvailable()) return Error.handleError('Document is not available', ERRORS_TYPES.DOM_ERROR);
    if (checkIfElementExists('#' + id)) return;

    const head = document.querySelector('head');
    const link = document.createElement('link');

    if (id) {
        link.id = id;
    }

    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    link.media = 'all';

    return head.appendChild(link);
}

export const insertScript = (url, id, onload) => {
    if (!isDocumentAvailable()) return Error.handleError('Document is not available', ERRORS_TYPES.DOM_ERROR);
    if (checkIfElementExists('#' + id)) return;

    const scriptElement = createElement('script', {
        id,
        attributes: {
            src: url
        }
    });

    if (onload) {
        scriptElement.addEventListener('load', onload, { once: true });
    }

    return injectInBody(scriptElement);
}

export default {
    createElement,
    injectInBody,
    checkIfElementExists,
    loadCSS,
    insertScript
}
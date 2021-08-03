// ASSETS
export const WALLKIT_CDN_URL = 'https://cdn.wallkit.net';
export const WALLKIT_CDN_ASSETS_URL = WALLKIT_CDN_URL + '/assets';

// Safety
export const ALLOWED_ORIGINS = [
    document.location.origin,
    'http://127.0.0.1:8000',
    'https://wallkit.net',
    'https://dev.wallkit.net',
    'https://demo.wallkit.net'
];

// Markup
export const WALLKIT_MODAL_WRAPPER_CLASSNAME = 'wallkit-modal-wrapper';
export const WALLKIT_MODAL_CLOSE_BTN_CLASSNAME = 'wallkit-modal-wrapper__close-btn';
export const WALLKIT_MODAL_CONTENT_CLASSNAME = 'wallkit-modal-wrapper__content';
export const WALLKIT_MODAL_MIN_WIDTH = '500';
export const WALLKIT_MODAL_MIN_HEIGHT = '250';
export const WALLKIT_FIREBASE_UI_PLACEHOLDER_ID = 'firebase-ui-placeholder';

// Authentication
export const WALLKIT_FIREBASE_CONFIG = {
    apiKey: "AIzaSyDOCAbC123dEf456GhI789jKl01-MnO",
    authDomain: "myapp-project-123.firebaseapp.com",
    databaseURL: "https://myapp-project-123.firebaseio.com",
    projectId: "myapp-project-123",
    storageBucket: "myapp-project-123.appspot.com",
    messagingSenderId: "65211879809",
    appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
    measurementId: "G-8GSGZQ44ST"
};

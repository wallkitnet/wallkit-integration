// Popups
export const WALLKIT_POPUP_URL = 'https://wallkit.net/popups';
export const WALLKIT_POPUP_DEV_URL = 'https://dev.wallkit.net/popups';

// Assets
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
export const WALLKIT_FRAME_ID = 'wk-frame';

// Authentication
export const WALLKIT_FIREBASE_CONFIG = {
    apiKey: "AIzaSyAoRdxZIlUE0HInqtzDid6rNxluhs5nCqg",
    authDomain: "wallkit-production.firebaseapp.com",
    databaseURL: "https://wallkit-production.firebaseio.com",
    projectId: "wallkit-production",
    storageBucket: "wallkit-production.appspot.com",
    messagingSenderId: "779443518820",
    appId: "1:779443518820:web:ffc6660647590674e20e71",
    measurementId: "G-GWJ1GC5B30"
};
export const WALLKIT_DEV_FIREBASE_CONFIG = {
    apiKey: "AIzaSyCmIluc9x63JOu7I5UMZ8q5M4AbluBeC8o",
    authDomain: "wallkit-258413.firebaseapp.com",
    databaseURL: "https://wallkit-258413.firebaseio.com",
    projectId: "wallkit-258413",
    storageBucket: "wallkit-258413.appspot.com",
    messagingSenderId: "767802802956",
    appId: "1:767802802956:web:e8fc363619c47f7fff7f29",
    measurementId: "G-ER6R7Z47R3"
};
export const WALLKIT_TOKEN_NAME = 'wk-token';
export const FIREBASE_TOKEN_NAME = 'firebase-token';

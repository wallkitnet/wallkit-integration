// Popups
export const WALLKIT_POPUP_URL = 'https://popups.wallkit.net';
// export const WALLKIT_POPUP_URL = 'http://127.0.0.1:8000/popups';
export const WALLKIT_POPUP_DEV_URL = 'https://popups.dev.wallkit.net';
// export const WALLKIT_POPUP_DEV_URL = 'http://127.0.0.1:8000/popups';

// Assets
export const WALLKIT_CDN_URL = 'https://cdn1.wallkit.net';
export const WALLKIT_CDN_ASSETS_URL = WALLKIT_CDN_URL + '/assets';

// Safety
export const ALLOWED_ORIGINS = [
    document.location.origin,
    'http://127.0.0.1:8000',
    'https://popups.wallkit.net',
    'https://popups.dev.wallkit.net'
];

// Markup
export const WALLKIT_MODAL_WRAPPER_CLASSNAME = 'wallkit-modal-wrapper';
export const WALLKIT_MODAL_CLOSE_BTN_CLASSNAME = 'wallkit-modal-wrapper__close-btn';
export const WALLKIT_MODAL_CONTENT_CLASSNAME = 'wallkit-modal-wrapper__content';
export const WALLKIT_MODAL_MIN_WIDTH = '500';
export const WALLKIT_MODAL_MAX_WIDTH = '500';
export const WALLKIT_MODAL_MIN_HEIGHT = '250';
export const WALLKIT_FIREBASE_UI_PLACEHOLDER_ID = 'firebase-ui-placeholder';
export const WALLKIT_FIREBASE_WK_FORM_PLACEHOLDER_ID = 'wk-email-auth-form';
export const WALLKIT_AUTH_FORM_PLACEHOLDER_ID = 'wk-auth-form';
export const WALLKIT_USER_MANAGER_MODAL_FORM_PLACEHOLDER_ID = 'wk-user-manager-modal-form';
export const WALLKIT_FRAME_ID = 'wk-frame';
export const TRIGGER_EMAIL_BUTTON_TITLE_SELECTOR = 'span.wk-auth-form-button-email-title';
export const TRIGGER_EMAILLINK_BUTTON_TITLE_SELECTOR = 'span.wk-auth-form-button-emaillink-title';
export const TRIGGER_GOOGLE_BUTTON_TITLE_SELECTOR = '#firebase-ui-placeholder .firebaseui-container .firebaseui-idp-google span.firebaseui-idp-text-long';
export const TRIGGER_EMAIL_BUTTON_CLASS_NAME = 'wk-auth-form-button wk-auth-form-button-email';
export const TRIGGER_EMAILLINK_BUTTON_CLASS_NAME = 'wk-auth-form-button wk-auth-form-button-emaillink';
export const TRIGGER_BUTTON_CLASS_NAME = 'wk-auth-form-button';
export const AUTH_DEFAULT_ERROR_MESSAGE = 'Something went wrong';
export const AUTH_DEFAULT_ERROR_CODE = 'something_went_wrong';

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

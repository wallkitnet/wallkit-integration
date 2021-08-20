// Local Events Names
export const FRAME_CREATED = 'frame-created';
export const FRAME_MOUNTED = 'frame-mounted';
export const MODAL_CREATED = 'modal-created';
export const SUCCESS_AUTH = 'success-auth';
export const SUCCESS_FIREBASE_AUTH = 'success-firebase-auth';
export const WALLKIT_SDK_LOADED = 'wallkit-js-sdk-loaded';
export const FRAME_MESSAGE = 'frame-message';
export const AUTH_MODAL_CLOSED = 'auth-modal-closed';
export const FRAME_MODAL_CLOSED = 'frame-modal-closed';
export const MODAL_CLOSED = 'modal-closed';

// Wallkit Events Names
export const WALLKIT_CHANGE_FRAME = 'wk-event-modal';
export const WALLKIT_LOGOUT = 'wk-event-logout';
export const WALLKIT_FIREBASE_TOKEN = 'wk-firebase-token';
export const WALLKIT_EVENT_FIREBASE_TOKEN = 'wk-event-firebase-token';
export const WALLKIT_EVENT_TOKEN = 'wk-event-token';
export const WALLKIT_FRAME_READY = 'wk-event-modals-ready';
export const WALLKIT_EVENT_GET_TOKEN = 'wk-event-get-token';
export const WALLKIT_EVENT_AUTH = 'wk-event-auth';
export const WALLKIT_EVENT_USER = 'wk-event-user';
export const WALLKIT_EVENT_REGISTRATION = 'wk-event-registration';
export const WALLKIT_EVENT_ONE_TAP_SIGN_IN = 'wk-event-one-tap-sign-in';
export const WALLKIT_FRAME_ROUTE_CHANGE = 'wk-event-route-change';
export const WALLKIT_EVENT_FIREBASE_CUSTOM_TOKEN = 'wk-event-firebase-custom-token';

export default {
    local: {
        FRAME_CREATED,
        FRAME_MOUNTED,
        MODAL_CREATED,
        SUCCESS_AUTH,
        SUCCESS_FIREBASE_AUTH,
        FRAME_MESSAGE,
        AUTH_MODAL_CLOSED,
        FRAME_MODAL_CLOSED,
        MODAL_CLOSED
    },
    wallkit: {
        FRAME_CREATED,
        WALLKIT_LOGOUT,
        WALLKIT_FIREBASE_TOKEN,
        WALLKIT_EVENT_FIREBASE_TOKEN,
        WALLKIT_EVENT_TOKEN,
        WALLKIT_FRAME_READY,
        WALLKIT_EVENT_GET_TOKEN,
        WALLKIT_EVENT_AUTH,
        WALLKIT_EVENT_USER,
        WALLKIT_EVENT_REGISTRATION,
        WALLKIT_EVENT_ONE_TAP_SIGN_IN,
        WALLKIT_FRAME_ROUTE_CHANGE,
        WALLKIT_EVENT_FIREBASE_CUSTOM_TOKEN
    }
}
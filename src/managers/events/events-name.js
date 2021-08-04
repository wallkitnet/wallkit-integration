// Local Events Names
export const FRAME_CREATED = 'frame-created';
export const FRAME_MOUNTED = 'frame-mounted';
export const MODAL_CREATED = 'modal-created';
export const SUCCESS_AUTH = 'success-auth';
export const SUCCESS_FIREBASE_AUTH = 'success-firebase-auth';
export const WALLKIT_SDK_LOADED = 'wallkit-js-sdk-loaded';

// Wallkit Events Names
export const WALLKIT_CHANGE_FRAME = 'wk-event-modal';
export const WALLKIT_LOGOUT = 'wk-event-logout';
export const WALLKIT_FIREBASE_TOKEN = 'wk-firebase-token';
export const WALLKIT_EVENT_FIREBASE_TOKEN = 'wk-event-firebase-token';
export const WALLKIT_EVENT_TOKEN = 'wk-event-token';
export const WALLKIT_FRAME_READY = 'wk-event-modals-ready';

export default {
    local: {
        FRAME_CREATED,
        FRAME_MOUNTED,
        MODAL_CREATED,
        SUCCESS_AUTH,
        SUCCESS_FIREBASE_AUTH
    },
    wallkit: {
        FRAME_CREATED,
        WALLKIT_LOGOUT,
        WALLKIT_FIREBASE_TOKEN,
        WALLKIT_EVENT_FIREBASE_TOKEN,
        WALLKIT_EVENT_TOKEN,
        WALLKIT_FRAME_READY
    }
}
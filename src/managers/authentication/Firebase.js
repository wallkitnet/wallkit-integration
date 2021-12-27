import { loadScripts } from "../../utils/loaders";
import { insertScript, loadCSS } from "../../utils/DOM";
import {
    WALLKIT_FIREBASE_CONFIG,
    WALLKIT_DEV_FIREBASE_CONFIG,
    WALLKIT_FIREBASE_UI_PLACEHOLDER_ID,
} from "../../configs/constants";

export default class Firebase {
    #mode;

    constructor(options) {
        this.#mode = options?.mode;
        this.config = options?.config;
        this.providers = options?.providers;
        this.tosURL = options?.tosURL;
        this.privacyPolicyURL = options?.privacyPolicyURL;
        this.captchaKey = options?.captchaKey ?? '6LeNZrwbAAAAAKXPTmJj5KMdUwI2GE6XAUbCU6DM';

        this.firebase = null;
        this.firebaseui = null;
        this.elementPlaceholder = options?.elementSelector ?? `#${WALLKIT_FIREBASE_UI_PLACEHOLDER_ID}`;
        this.onSuccessAuth = options?.onSuccessAuth ?? null;
        this.onAuthStateChanged = options?.onAuthStateChanged ?? null;
        this.uiShown = options?.uiShown ?? null
    }

    get allowedProviders() {
        return {
            'google': this.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            'email': this.firebase.auth.EmailAuthProvider.PROVIDER_ID,
            'facebook': this.firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            'apple': 'apple.com',
            'microsoft': 'microsoft.com'
        }
    };

    #loadFirebase() {
        return new Promise((resolve, reject) => {
            const onFirebaseAppLoaded = () => {
                const scripts = [
                    {
                        url: 'https://www.gstatic.com/firebasejs/8.7.0/firebase-analytics.js',
                        id: 'firebase-analytics',
                        defer: true,
                        onload: () => onScriptLoaded()
                    },
                    {
                        url: 'https://www.gstatic.com/firebasejs/8.7.0/firebase-auth.js',
                        id: 'firebase-auth',
                        defer: true,
                        onload: () => onScriptLoaded()
                    },
                    {
                        url: 'https://www.gstatic.com/firebasejs/8.7.0/firebase-firestore.js',
                        id: 'firebase-firestore',
                        defer: true,
                        onload: () => onScriptLoaded()
                    },
                    {
                        url: 'https://www.gstatic.com/firebasejs/ui/4.8.0/firebase-ui-auth.js',
                        id: 'firebase-ui',
                        defer: true,
                        onload: () => onScriptLoaded()
                    },
                    {
                        url: 'https://www.gstatic.com/firebasejs/8.7.0/firebase-app-check.js',
                        id: 'firebase-app-check',
                        defer: true,
                        onload: () => onScriptLoaded()
                    },
                ];

                let loadedCounter = 0;
                const onScriptLoaded = () => {
                    loadedCounter++;

                    if (loadedCounter === scripts.length) {
                        this.firebase = window.firebase;
                        this.firebaseui = window.firebaseui;

                        resolve({ firebase: window.firebase, firebaseui: window.firebaseui } )
                    }
                };

                loadScripts(scripts);

                loadCSS('https://www.gstatic.com/firebasejs/ui/4.8.0/firebase-ui-auth.css','firebase-ui-styles');
            };

            insertScript('https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js','firebase-app', onFirebaseAppLoaded);
        });
    }

    formatSelectedProviders(providers) {
        let selectedProviders = [];
        if (Array.isArray(providers)) {
            selectedProviders = providers.map((item) => {
                if (typeof item === "object") {
                    if (this.allowedProviders[item.provider]) {
                        return {
                            ...item,
                            provider: this.allowedProviders[item.provider]
                        }
                    }
                } else {
                    if (this.allowedProviders[item]) {
                        return this.allowedProviders[item];
                    }
                }
            }).filter((item) => !!item);
        }

        return selectedProviders;
    }

    #authStateChanged(user) {
        if (user) {
            user.getIdToken().then((token) => {
                if (this.onAuthStateChanged) {
                    this.onAuthStateChanged(token);
                }
            });
        }
    }

    initFirebase({ config,
                   providers = ['email', 'google'],
                   tosUrl = 'https://wallkit.net',
                   privacyPolicyUrl = 'https://wallkit.net' }) {

        const defaultConfig = this.#mode === 'dev' ? WALLKIT_DEV_FIREBASE_CONFIG : WALLKIT_FIREBASE_CONFIG;
        this.firebase.initializeApp(config ?? defaultConfig);

        // if (this.captchaKey) {
        //     const appCheck = this.firebase.appCheck();
        //     appCheck.activate(this.captchaKey, true);
        // }

        const firebaseuiInstance = new this.firebaseui.auth.AuthUI(this.firebase.auth());
        firebaseuiInstance.disableAutoSignIn();

        const firebaseUiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: (result) => {
                    result.user.getIdToken().then((token) => {
                        const formattedResult = {
                            user: result.user,
                            userId: result.user.uid,
                            token: token
                        }

                        if (this.onSuccessAuth) {
                            this.onSuccessAuth(formattedResult, result);
                        }
                    });
                },
                uiShown: () => {
                    if (this.uiShown) {
                        this.uiShown();
                    }
                }
            },
            signInFlow: 'popup',
            signInOptions: this.formatSelectedProviders(providers),
            credentialHelper: this.firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
            tosUrl,
            privacyPolicyUrl
        };

        firebaseuiInstance.start(this.elementPlaceholder, firebaseUiConfig);
        this.firebaseui = firebaseuiInstance;

        this.firebase.auth().onAuthStateChanged(this.#authStateChanged.bind(this));
    }

    reset() {
        if (this.firebaseui) {
            this.firebaseui.reset();
            this.firebaseui.start(this.elementPlaceholder);
        }
    }

    logout() {
        return new Promise((resolve) => {
            if (this.firebase && this.firebase.auth) {
                this.firebase.auth().signOut().then(() => resolve(true));
            } else {
                resolve(false);
            }
        });
    }

    async authWithCustomToken(token) {
        try {
            if (this.firebase && this.firebase.auth) {
                return await this.firebase.auth().signInWithCustomToken(token);
            }

            return false;
        } catch (error) {
            console.error('Custom Token Auth Fail');
            return false;
        }
    }


    init() {
        this.#loadFirebase().then(() => {
            this.initFirebase({
                config: this.config,
                providers: this.providers,
                tosUrl: this.tosURL,
                privacyPolicyUrl: this.privacyPolicyURL
            });
        });
    }
}
import { loadScripts } from "../../../utils/loaders";
import { insertScript, loadCSS } from "../../../utils/DOM";
import {
    WALLKIT_FIREBASE_CONFIG,
    WALLKIT_DEV_FIREBASE_CONFIG,
    WALLKIT_FIREBASE_UI_PLACEHOLDER_ID,
} from "../../configs/constants";
import { Localization } from "../localization";
import Events from "../events";
import {
    FIREBASE_INIT,
    FIREBASE_LOADED,
    FIREBASE_UI_SHOWN
} from "../../events/events-name";

export default class Firebase {
    #mode;

    constructor(options) {
        this.events = new Events();

        this.firebaseUiConfig = null;
        this.#mode = options?.mode;
        this.lang = Localization.assembleLanguage(options.lang || 'en');
        this.config = options?.config;
        this.providers = options?.providers;
        this.tosURL = options?.tosURL;
        this.privacyPolicyURL = options?.privacyPolicyURL;
        this.captchaKey = options?.captchaKey ?? '6LeNZrwbAAAAAKXPTmJj5KMdUwI2GE6XAUbCU6DM';
        this.genuineForm = options?.genuineForm ?? true;

        this.firebase = null;
        this.firebaseui = null;
        this.elementPlaceholder = options?.elementSelector ?? `#${WALLKIT_FIREBASE_UI_PLACEHOLDER_ID}`;
        this.onSuccessAuth = options?.onSuccessAuth ?? null;
        this.onAuthStateChanged = options?.onAuthStateChanged ?? null;
        this.uiShown = options?.uiShown ?? null;

        this.isUiShown = false;
        this.initialized = false;
        this.loaded = false;
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

    hideAuthForm () {
        const element = document.querySelector(this.elementPlaceholder);

        if (element) {
            element.style.display = 'none';
        }
    }

    showAuthForm () {
        const element = document.querySelector(this.elementPlaceholder);

        if (element) {
            element.style.display = 'block';
        }
    }

    #loadFirebase() {
        return new Promise((resolve, reject) => {
            this.loading = true;
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
                        url: `https://www.gstatic.com/firebasejs/ui/4.8.0/firebase-ui-auth__${this.lang}.js`,
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

                        this.loaded = true;
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
                if ((item === 'email' || item.provider === 'email') && this.genuineForm === false) {
                    return false;
                }

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

    #firebaseInitApp(config) {
        if (this.firebase.apps.length === 0) {
            const defaultConfig = this.#mode === 'dev' ? WALLKIT_DEV_FIREBASE_CONFIG : WALLKIT_FIREBASE_CONFIG;
            this.firebase.initializeApp(config ?? defaultConfig);
        }

        return this.firebase;
    }

    async initFirebase({ config,
                   providers = ['email', 'google'],
                   tosUrl = 'https://wallkit.net',
                   privacyPolicyUrl = 'https://wallkit.net' }) {

        this.#firebaseInitApp(config);

        const firebaseuiInstance = new this.firebaseui.auth.AuthUI(this.firebase.auth());
        firebaseuiInstance.disableAutoSignIn();

        this.firebaseUiConfig = {
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
                    this.events.notify(FIREBASE_UI_SHOWN, true);
                    this.isUiShown = true;
                }
            },
            signInFlow: 'popup',
            signInOptions: this.formatSelectedProviders(providers),
            credentialHelper: this.firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
            tosUrl,
            privacyPolicyUrl
        };

        this.firebaseui = firebaseuiInstance;
        this.startFirebaseUi(this.elementPlaceholder, this.firebaseUiConfig);

        this.firebase.auth().onAuthStateChanged(this.#authStateChanged.bind(this));

        return true;
    }

    reset() {
        if (this.firebaseui) {
            this.firebaseui.reset();
            this.firebaseui.start(this.elementPlaceholder);
        }
    }

    startFirebaseUi(elementPlaceholder, uiConfig) {
        this.firebaseui.start(elementPlaceholder || this.elementPlaceholder, uiConfig || this.firebaseUiConfig);
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

    signIn (email, password) {
        return this.firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => this.handleSuccessAuth(result));
    }

    signUp (email, password) {
        return this.firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => this.handleSuccessAuth(result));
    }

    async handleSuccessAuth (result) {
        try {
            if (result) {
                const token = await result.user.getIdToken();

                const formattedResult = {
                    operationType: result.operationType,
                    user: result.user,
                    userId: result.user.uid,
                    token: token
                }

                if (this.onSuccessAuth) {
                    this.onSuccessAuth(formattedResult, result);
                }
            }
        } catch (e) {
            console.log('ERROR:', e);
        }
    }

    sendPasswordResetEmail(email) {
        return this.firebase.auth().sendPasswordResetEmail(email);
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

    attachEmailListener (callback) {
        const emailBtn = document.querySelector('.firebaseui-idp-button[data-provider-id="password"]');

        const attachListener = () => {
            console.log('attach');
            const emailField = document.querySelector('.firebaseui-id-email');

            if (emailField) {
                emailField.addEventListener('blur', (event) => {
                    callback(event);
                });
            }
        }

        console.log('emailBtn', emailBtn);
        if (emailBtn) {
            emailBtn.addEventListener('click', () => {
                console.log('lclick');
                setTimeout(() => {
                    attachListener();
                });
            })
        } else {
            attachListener();
        }
    }

    init() {
        this.#loadFirebase().then(() => {
            this.events.notify(FIREBASE_LOADED, true)

            this.initFirebase({
                config: this.config,
                providers: this.providers,
                tosUrl: this.tosURL,
                privacyPolicyUrl: this.privacyPolicyURL
            }).then(() => {
                this.initialized = true;
                this.events.notify(FIREBASE_INIT, true)
            });
        });
    }
}

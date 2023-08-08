/*!
 * Package name: wallkit-integration-lib.
 * Package description: Wallkit Integration Library. Library to manipulate with Wallkit System: Paywall, Modals, Authentication, SDK..
 * Package version: 3.0.23.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 2350:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LIBRARY_STYLES = void 0;
var LIBRARY_STYLES = "\n        .wallkit-modal-wrapper {\n            z-index: 100;\n            position: fixed;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: rgba(18, 18, 20, 0.9);\n            display: flex;\n            align-items: center;\n            justify-content: flex-start;\n            flex-direction: column;\n            overflow-y: auto;\n            padding: 70px 15px 20px;\n        }\n\n        .wallkit-modal-wrapper__content {\n            background-color: #fff;\n            flex-shrink: 0;\n            position: relative;\n            box-sizing: border-box;\n            overflow: hidden;\n            font-family: Roboto, sans-serif;\n        }\n        \n        @media screen and (max-width: 500px) {\n            .wallkit-modal-wrapper__content {\n                width: 100%;\n                min-width: auto!important;\n            }\n        }\n\n        .wallkit-modal-wrapper__close-btn {\n            position: absolute;\n            right: 10px;\n            top: 10px;\n            cursor: pointer;\n            color: #000;\n            font-size: 37px;\n            width: 37px;\n            height: 37px;\n            text-align: center;\n            line-height: 34px;\n        }\n\n        .wallkit-modal-wrapper .wk-frame {\n            transition: all 0.3s linear 0s;\n            max-width: 100%;\n            border: none;\n        }\n\n        .wallkit-auth-modal {\n            z-index: 999;\n        }\n\n        .wallkit-auth-modal .wallkit-modal-wrapper__content {\n            padding: 20px;\n        }\n\n        .wallkit-auth-modal .wallkit-auth-modal__title {\n            font-family: Roboto, sans-serif;\n            text-align: center;\n        }\n        \n        .wk-auth-form {\n            display: flex;\n            flex-direction: column;\n        }\n\n        .wk-form-field {\n            display: flex;\n            flex-direction: column;\n            font-family: Oxygen, sans-serif;\n            margin-bottom: 10px;\n        }\n\n        .wk-form-field .wk-form-field__label {\n            font-weight: 500;\n            color: #333;\n            margin-bottom: 5px;\n        }\n\n        .wk-form-field .wk-form-field__input-wrapper {\n            margin-bottom: 5px;\n            position: relative;\n        }\n        \n        .wk-eye-toggle {\n            background: url(https://www.gstatic.com/images/icons/material/system/1x/visibility_black_24dp.png);\n            width: 24px;\n            height: 24px;\n        }\n        \n        .wk-form-field__field-description {\n            font-size: 11px;\n            color: #989898;\n        }\n        \n        .wk-eye-toggle.wk-eye-toggled {\n            background: url(https://www.gstatic.com/images/icons/material/system/1x/visibility_off_black_24dp.png);\n        }\n        \n        .wk-form-field__field-affix {\n            position: absolute;\n            right: 5px;\n            top: 0;\n            bottom: 0;\n        }\n        \n        .wk-form-field .wk-form-field__input {\n            border-radius: 0;\n            border: 0;\n            border-bottom: 1px solid #ccc;\n            padding: 5px;\n            box-sizing: border-box;\n            width: 100%;\n        }\n        \n        .wk-field-list {\n            list-style-type: circle;\n            padding-left: 12px;\n            margin-top: 1px;\n        }\n\n        .wk-form-field .wk-form-field__input:focus {\n            border-bottom: 1px solid #3f51b5;\n            outline: none;\n        }\n\n        .wk-form-field .wk-form-field__message {\n            font-size: 12px;\n        }\n\n        .wk-auth-form-button {\n            background-color: #db4437;\n            direction: ltr;\n            font-weight: 500;\n            height: auto;\n            line-height: normal;\n            max-width: 220px;\n            min-height: 40px;\n            padding: 8px 16px;\n            text-align: left;\n            width: 100%;\n            box-sizing: border-box;\n            box-shadow: 0 2px 2px 0 rgba(0,0,0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.20), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n            border-radius: 2px;\n            font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n            margin: 0 auto 15px;\n            cursor: pointer;\n        }\n        \n        .wk-auth-form-button:focus,\n        .wk-auth-form-button:active,{\n            background-color: #5b6abe;\n        }\n\n        .wk-form-field.wk-form-field--invalid .wk-form-field__input {\n            border-bottom: 1px solid #dd2c00;\n        }\n        \n        .wk-form-field.wk-form-field--checkbox.wk-form-field--invalid .wk-form-field__checkmark {\n            border-color: #dd2c00;\n        }\n\n        .wk-form-field.wk-form-field--valid .wk-form-field__input {\n            border-bottom: 1px solid green;\n        }\n\n        .wk-form-field.wk-form-field--invalid .wk-form-field__message {\n            color: #dd2c00;\n        }\n\n        .wk-form-field.wk-form-field--valid .wk-form-field__message {\n            color: green;\n        }\n\n        .wk-form .wk-form__link {\n            font-size: 14px;\n            color: #3170f3;\n            text-decoration: underline;\n        }\n\n        .wk-form {\n            font-family: Oxygen, sans-serif;\n        }\n        \n        .wk-form-header {\n            margin-bottom: 10px;\n        }\n\n        .wk-form .wk-form__footer {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n        \n        .wk-form .wk-form__footer.wk-form__footer--right {\n            justify-content: flex-end;\n        }\n\n        .wk-form .wk-form__sub-footer {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin-bottom: 20px;\n        }\n\n        .wk-form__reset-password {\n            text-align: right;\n        }\n\n        .wk-form-result {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n        }\n\n        .wk-form-button {\n            border: none;\n            border-radius: 2px;\n            background-color: #3f51b5;\n            color: #fff;\n            position: relative;\n            height: 36px;\n            margin: 0;\n            min-width: 64px;\n            padding: 0 16px;\n            display: inline-block;\n            font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n            font-size: 14px;\n            font-weight: 500;\n            text-transform: uppercase;\n            letter-spacing: 0;\n            overflow: hidden;\n            will-change: box-shadow;\n            transition: box-shadow .2s cubic-bezier(0.4, 0, 1, 1),background-color .2s cubic-bezier(0.4, 0, 0.2, 1),color .2s cubic-bezier(0.4, 0, 0.2, 1);\n            outline: none;\n            cursor: pointer;\n            text-decoration: none;\n            text-align: center;\n            line-height: 36px;\n            vertical-align: middle;\n        }\n\n        .wk-form__error {\n            display: none;\n            margin: 10px 0;\n            border: 1px solid #f5c6cb;\n            border-radius: 5px;\n            color: #721c24;\n            background-color: #f8d7da;\n            line-height: 21px;\n            padding: 10px;\n        }\n\n        .wk-form__error.wk-form__error--show {\n            display: block;\n        }\n\n        .wk-form-button.wk-form-button--cancel {\n            margin-left: auto;\n            margin-right: 10px;\n            color: #3f51b5;\n            background: none;\n        }\n        \n        .wk-success-message {\n        }\n        \n        .wk-success-message__title {\n            font-weight: 500;\n            margin-bottom: 10px;\n        }\n        \n        .wk-success-message__description {\n            margin-bottom: 10px;\n        }\n        \n        .wk-success-message__description b {\n            font-weight: 500;\n        }\n\n        .wk-form-button.wk-form-button--cancel:hover {\n            background-color: hsla(0,0%,62%,.2);\n        }\n        \n        .wk-success-message.wk-password-reset-success {\n            min-height: 205px;\n            display: flex;\n            justify-content: center;\n            flex-direction: column;\n        }\n        \n       \n        \n        .wk-form-field.wk-form-field--checkbox .wk-form-field__label {\n            position: relative;\n            padding-left: 30px;     \n            line-height: 20px;\n            font-size: 14px;     \n        } \n        \n        .wk-form-field.wk-form-field--checkbox input {\n            position: absolute;\n            opacity: 0;\n            cursor: pointer;\n            height: 0;\n            width: 0;\n        }\n        \n        .wk-form-field .wk-form-field__checkmark {\n            position: absolute;\n            top: 0;\n            left: 0;\n            height: 18px;\n            width: 18px;\n            background-color: none;\n            border: 2px solid #333;\n            box-sizing: border-box;\n            border-radius: 2px;\n        }\n        \n        .wk-form-field.wk-form-field--checkbox input:checked ~ .wk-form-field__checkmark {\n            background-color: #3f51b5;\n            border-color: #3f51b5;\n        }\n        \n        .wk-form-field__checkmark:after {\n            content: \"\";\n            position: absolute;\n            display: none;\n        }\n        \n        .wk-form-field input:checked ~ .wk-form-field__checkmark:after {\n            display: block;\n        }\n        \n        .wk-form-field .wk-form-field__checkmark:after {\n            left: 5px;\n            top: 2px;\n            width: 3px;\n            height: 7px;\n            border: solid white;\n            border-width: 0 2px 2px 0;\n            -webkit-transform: rotate(45deg);\n            -ms-transform: rotate(45deg);\n            transform: rotate(45deg);\n        }\n        \n        .wallkit-modal-error {\n            border: 1px solid #f1aeb5;\n            border-radius: 5px;\n            padding: 10px;\n            width: calc(100% - 50px);\n            background-color: #f8d7da;\n            color: #58151c;\n            font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n        }\n        \n        .wallkit-modal-success {\n            border: 1px solid #a3cfbb;\n            border-radius: 5px;\n            padding: 10px;\n            width: 100%;\n            background-color: #d1e7dd;\n            color: #0a3622;\n            font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n        }\n        \n        .wallkit-email-confirmation-modal {\n          text-align: center;\n        }\n";
exports.LIBRARY_STYLES = LIBRARY_STYLES;

/***/ }),

/***/ 9066:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WALLKIT_USER_MANAGER_MODAL_FORM_PLACEHOLDER_ID = exports.WALLKIT_TOKEN_NAME = exports.WALLKIT_POPUP_URL = exports.WALLKIT_POPUP_DEV_URL = exports.WALLKIT_MODAL_WRAPPER_CLASSNAME = exports.WALLKIT_MODAL_MIN_WIDTH = exports.WALLKIT_MODAL_MIN_HEIGHT = exports.WALLKIT_MODAL_MAX_WIDTH = exports.WALLKIT_MODAL_CONTENT_CLASSNAME = exports.WALLKIT_MODAL_CLOSE_BTN_CLASSNAME = exports.WALLKIT_FRAME_ID = exports.WALLKIT_FIREBASE_WK_FORM_PLACEHOLDER_ID = exports.WALLKIT_FIREBASE_UI_PLACEHOLDER_ID = exports.WALLKIT_FIREBASE_CONFIG = exports.WALLKIT_DEV_FIREBASE_CONFIG = exports.WALLKIT_CDN_URL = exports.WALLKIT_CDN_ASSETS_URL = exports.WALLKIT_AUTH_FORM_PLACEHOLDER_ID = exports.TRIGGER_GOOGLE_BUTTON_TITLE_SELECTOR = exports.TRIGGER_EMAIL_BUTTON_TITLE_SELECTOR = exports.TRIGGER_EMAIL_BUTTON_CLASS_NAME = exports.TRIGGER_EMAILLINK_BUTTON_TITLE_SELECTOR = exports.TRIGGER_EMAILLINK_BUTTON_CLASS_NAME = exports.TRIGGER_BUTTON_CLASS_NAME = exports.FIREBASE_TOKEN_NAME = exports.ALLOWED_ORIGINS = void 0;
// Popups
// export const WALLKIT_POPUP_URL = 'https://wallkit.net/popups';
var WALLKIT_POPUP_URL = 'https://popups.wallkit.net';
// export const WALLKIT_POPUP_URL = 'http://127.0.0.1:8000/popups';
// export const WALLKIT_POPUP_DEV_URL = 'https://dev.wallkit.net/popups';
exports.WALLKIT_POPUP_URL = WALLKIT_POPUP_URL;
var WALLKIT_POPUP_DEV_URL = 'https://popups.dev.wallkit.net';
// export const WALLKIT_POPUP_DEV_URL = 'https://wallkit-landing.com/popups';
// export const WALLKIT_POPUP_DEV_URL = 'http://127.0.0.1:8000/popups';

// Assets
exports.WALLKIT_POPUP_DEV_URL = WALLKIT_POPUP_DEV_URL;
var WALLKIT_CDN_URL = 'https://cdn.wallkit.net';
exports.WALLKIT_CDN_URL = WALLKIT_CDN_URL;
var WALLKIT_CDN_ASSETS_URL = WALLKIT_CDN_URL + '/assets';

// Safety
exports.WALLKIT_CDN_ASSETS_URL = WALLKIT_CDN_ASSETS_URL;
var ALLOWED_ORIGINS = [document.location.origin, 'http://127.0.0.1:8000', 'https://wallkit.net', 'https://dev.wallkit.net', 'https://demo.wallkit.net', 'https://wallkit-landing.com', 'https://popups.wallkit.net', 'https://popups.dev.wallkit.net'];

// Markup
exports.ALLOWED_ORIGINS = ALLOWED_ORIGINS;
var WALLKIT_MODAL_WRAPPER_CLASSNAME = 'wallkit-modal-wrapper';
exports.WALLKIT_MODAL_WRAPPER_CLASSNAME = WALLKIT_MODAL_WRAPPER_CLASSNAME;
var WALLKIT_MODAL_CLOSE_BTN_CLASSNAME = 'wallkit-modal-wrapper__close-btn';
exports.WALLKIT_MODAL_CLOSE_BTN_CLASSNAME = WALLKIT_MODAL_CLOSE_BTN_CLASSNAME;
var WALLKIT_MODAL_CONTENT_CLASSNAME = 'wallkit-modal-wrapper__content';
exports.WALLKIT_MODAL_CONTENT_CLASSNAME = WALLKIT_MODAL_CONTENT_CLASSNAME;
var WALLKIT_MODAL_MIN_WIDTH = '500';
exports.WALLKIT_MODAL_MIN_WIDTH = WALLKIT_MODAL_MIN_WIDTH;
var WALLKIT_MODAL_MAX_WIDTH = '500';
exports.WALLKIT_MODAL_MAX_WIDTH = WALLKIT_MODAL_MAX_WIDTH;
var WALLKIT_MODAL_MIN_HEIGHT = '250';
exports.WALLKIT_MODAL_MIN_HEIGHT = WALLKIT_MODAL_MIN_HEIGHT;
var WALLKIT_FIREBASE_UI_PLACEHOLDER_ID = 'firebase-ui-placeholder';
exports.WALLKIT_FIREBASE_UI_PLACEHOLDER_ID = WALLKIT_FIREBASE_UI_PLACEHOLDER_ID;
var WALLKIT_FIREBASE_WK_FORM_PLACEHOLDER_ID = 'wk-email-auth-form';
exports.WALLKIT_FIREBASE_WK_FORM_PLACEHOLDER_ID = WALLKIT_FIREBASE_WK_FORM_PLACEHOLDER_ID;
var WALLKIT_AUTH_FORM_PLACEHOLDER_ID = 'wk-auth-form';
exports.WALLKIT_AUTH_FORM_PLACEHOLDER_ID = WALLKIT_AUTH_FORM_PLACEHOLDER_ID;
var WALLKIT_USER_MANAGER_MODAL_FORM_PLACEHOLDER_ID = 'wk-user-manager-modal-form';
exports.WALLKIT_USER_MANAGER_MODAL_FORM_PLACEHOLDER_ID = WALLKIT_USER_MANAGER_MODAL_FORM_PLACEHOLDER_ID;
var WALLKIT_FRAME_ID = 'wk-frame';
exports.WALLKIT_FRAME_ID = WALLKIT_FRAME_ID;
var TRIGGER_EMAIL_BUTTON_TITLE_SELECTOR = 'span.wk-auth-form-button-email-title';
exports.TRIGGER_EMAIL_BUTTON_TITLE_SELECTOR = TRIGGER_EMAIL_BUTTON_TITLE_SELECTOR;
var TRIGGER_EMAILLINK_BUTTON_TITLE_SELECTOR = 'span.wk-auth-form-button-emaillink-title';
exports.TRIGGER_EMAILLINK_BUTTON_TITLE_SELECTOR = TRIGGER_EMAILLINK_BUTTON_TITLE_SELECTOR;
var TRIGGER_GOOGLE_BUTTON_TITLE_SELECTOR = '#firebase-ui-placeholder .firebaseui-container .firebaseui-idp-google span.firebaseui-idp-text-long';
exports.TRIGGER_GOOGLE_BUTTON_TITLE_SELECTOR = TRIGGER_GOOGLE_BUTTON_TITLE_SELECTOR;
var TRIGGER_EMAIL_BUTTON_CLASS_NAME = 'wk-auth-form-button wk-auth-form-button-email';
exports.TRIGGER_EMAIL_BUTTON_CLASS_NAME = TRIGGER_EMAIL_BUTTON_CLASS_NAME;
var TRIGGER_EMAILLINK_BUTTON_CLASS_NAME = 'wk-auth-form-button wk-auth-form-button-emaillink';
exports.TRIGGER_EMAILLINK_BUTTON_CLASS_NAME = TRIGGER_EMAILLINK_BUTTON_CLASS_NAME;
var TRIGGER_BUTTON_CLASS_NAME = 'wk-auth-form-button';

// Authentication
exports.TRIGGER_BUTTON_CLASS_NAME = TRIGGER_BUTTON_CLASS_NAME;
var WALLKIT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyAoRdxZIlUE0HInqtzDid6rNxluhs5nCqg",
  authDomain: "wallkit-production.firebaseapp.com",
  databaseURL: "https://wallkit-production.firebaseio.com",
  projectId: "wallkit-production",
  storageBucket: "wallkit-production.appspot.com",
  messagingSenderId: "779443518820",
  appId: "1:779443518820:web:ffc6660647590674e20e71",
  measurementId: "G-GWJ1GC5B30"
};
exports.WALLKIT_FIREBASE_CONFIG = WALLKIT_FIREBASE_CONFIG;
var WALLKIT_DEV_FIREBASE_CONFIG = {
  apiKey: "AIzaSyCmIluc9x63JOu7I5UMZ8q5M4AbluBeC8o",
  authDomain: "wallkit-258413.firebaseapp.com",
  databaseURL: "https://wallkit-258413.firebaseio.com",
  projectId: "wallkit-258413",
  storageBucket: "wallkit-258413.appspot.com",
  messagingSenderId: "767802802956",
  appId: "1:767802802956:web:e8fc363619c47f7fff7f29",
  measurementId: "G-ER6R7Z47R3"
};
exports.WALLKIT_DEV_FIREBASE_CONFIG = WALLKIT_DEV_FIREBASE_CONFIG;
var WALLKIT_TOKEN_NAME = 'wk-token';
exports.WALLKIT_TOKEN_NAME = WALLKIT_TOKEN_NAME;
var FIREBASE_TOKEN_NAME = 'firebase-token';
exports.FIREBASE_TOKEN_NAME = FIREBASE_TOKEN_NAME;

/***/ }),

/***/ 8006:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FB_AVAILABLE_LANGUAGES = void 0;
var FB_AVAILABLE_LANGUAGES = ['ar', 'bg', 'ca', 'zh_cn', 'zh_tw', 'hr', 'cs', 'da', 'nl', 'en', 'en_gb', 'fa', 'fil', 'fi', 'fr', 'de', 'el', 'iw', 'hi', 'hu', 'id', 'it', 'ja', 'ko', 'lv', 'lt', 'no', 'pl', 'pt_pt', 'ro', 'ru', 'sr', 'sk', 'sl', 'es', 'sv', 'th', 'tr', 'uk', 'vi'];
exports.FB_AVAILABLE_LANGUAGES = FB_AVAILABLE_LANGUAGES;

/***/ }),

/***/ 542:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.ERRORS_TYPES = exports.DEFAULT_ERROR_MESSAGES = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var ERRORS_TYPES = {
  DOM_ERROR: 'DOM_ERROR',
  ARGUMENT_ERROR: 'ARGUMENT_ERROR'
};
exports.ERRORS_TYPES = ERRORS_TYPES;
var DEFAULT_ERROR_MESSAGES = {
  DOM_ERROR: 'DOM Manipulation gone wrong',
  ARGUMENT_ERROR: 'One of the argument were not provided'
};
exports.DEFAULT_ERROR_MESSAGES = DEFAULT_ERROR_MESSAGES;
var Error = /*#__PURE__*/function () {
  function Error() {
    (0, _classCallCheck2["default"])(this, Error);
  }
  (0, _createClass2["default"])(Error, null, [{
    key: "isErrorRecognisable",
    value: function isErrorRecognisable(error_type) {
      return !!ERRORS_TYPES[error_type];
    }
  }, {
    key: "getErrorTypeMessage",
    value: function getErrorTypeMessage(error_type) {
      var _DEFAULT_ERROR_MESSAG;
      return (_DEFAULT_ERROR_MESSAG = DEFAULT_ERROR_MESSAGES[error_type]) !== null && _DEFAULT_ERROR_MESSAG !== void 0 ? _DEFAULT_ERROR_MESSAG : 'Unrecognised Error';
    }
  }, {
    key: "handleError",
    value: function handleError(error, error_type) {
      if (error_type && this.isErrorRecognisable(error_type)) {
        var message = error !== null && error !== void 0 ? error : Error.getErrorTypeMessage(error_type);
        var errorMessage = "ERROR::".concat(error_type, "; ").concat(message, ";");
        console.log(errorMessage);
        throw new Error(errorMessage);
      } else {
        var _errorMessage = "ERROR::".concat(error_type, ";");
        console.log(_errorMessage);
        throw new Error(_errorMessage);
      }
    }
  }, {
    key: "checkRequiredArgument",
    value: function checkRequiredArgument(argument, key) {
      if (argument === undefined) {
        this.handleError("Argument ".concat(key, " is not provided"), ERRORS_TYPES.ARGUMENT_ERROR);
      }
    }
  }]);
  return Error;
}();
exports["default"] = Error;

/***/ }),

/***/ 6004:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(366));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _authentication = _interopRequireDefault(__webpack_require__(7484));
var _modal = _interopRequireDefault(__webpack_require__(9269));
var _frame = _interopRequireDefault(__webpack_require__(8967));
var _sdk = _interopRequireDefault(__webpack_require__(4753));
var _events = _interopRequireDefault(__webpack_require__(9889));
var _analytics = _interopRequireDefault(__webpack_require__(7343));
var _content = _interopRequireDefault(__webpack_require__(8390));
var _call = _interopRequireDefault(__webpack_require__(5613));
var _user = _interopRequireDefault(__webpack_require__(4442));
var _styles = __webpack_require__(2350);
var _DOM = __webpack_require__(2909);
var _payments = __webpack_require__(8672);
var _crawlers = __webpack_require__(7857);
var _constants = __webpack_require__(9066);
Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _constants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _constants[key];
    }
  });
});
var _eventsName = __webpack_require__(6073);
Object.keys(_eventsName).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _eventsName[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _eventsName[key];
    }
  });
});
var _url = __webpack_require__(5234);
var _eventsListener, _insertStyles, _recogniseURLIncomeParams;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
window.WallkitIntegration = (_eventsListener = /*#__PURE__*/new WeakSet(), _insertStyles = /*#__PURE__*/new WeakSet(), _recogniseURLIncomeParams = /*#__PURE__*/new WeakSet(), /*#__PURE__*/function () {
  function WallkitIntegration(options) {
    var _options$prevent_exec,
      _this = this;
    (0, _classCallCheck2["default"])(this, WallkitIntegration);
    _classPrivateMethodInitSpec(this, _recogniseURLIncomeParams);
    _classPrivateMethodInitSpec(this, _insertStyles);
    _classPrivateMethodInitSpec(this, _eventsListener);
    this.config = options;
    this.events = new _events["default"]();
    this.content = _content["default"];
    var preventExecutionForCrawlers = (_options$prevent_exec = options === null || options === void 0 ? void 0 : options.prevent_execution_for_crawlers) !== null && _options$prevent_exec !== void 0 ? _options$prevent_exec : true;
    if (preventExecutionForCrawlers && (0, _crawlers.isCrawler)()) {
      return;
    }
    this.frame = new _frame["default"](_objectSpread(_objectSpread({}, options), {}, {
      onReady: function onReady() {
        return _this.popup.toggleLoader(false);
      }
    }));
    this.popup = new _modal["default"]({
      resourceFrame: this.frame,
      initialLoader: true,
      onReady: function onReady(modal) {
        modal.openByHash();
      },
      onClose: function onClose() {
        _this.events.notify(_eventsName.FRAME_MODAL_CLOSED, {
          name: _this.frame.currentFrameName
        });
      }
    });
    this.sdk = new _sdk["default"](_objectSpread(_objectSpread({}, options), {}, {
      onLoaded: function onLoaded() {
        var _ref = options.auth || {},
          firebase = _ref.firebase,
          modal = _ref.modal,
          content = _ref.content,
          reCaptcha = _ref.reCaptcha,
          forms = _ref.forms;
        _this.authentication = new _authentication["default"](_objectSpread(_objectSpread({}, options), {}, {
          firebase: firebase,
          modalTitle: modal === null || modal === void 0 ? void 0 : modal.title,
          content: content || (modal === null || modal === void 0 ? void 0 : modal.content),
          reCaptcha: reCaptcha
        }));
        _this.analytics = new _analytics["default"](options === null || options === void 0 ? void 0 : options.analytics);
        _this.call = new _call["default"](_this.popup, _this.config);
        _this.init();
        _this.userManager = new _user["default"]({
          customizeForms: forms || false,
          popup: _this.popup,
          authentication: _this.authentication
        });
      }
    }));
  }
  (0, _createClass2["default"])(WallkitIntegration, [{
    key: "modal",
    value: function modal(name, params) {
      this.popup.open(name, params);
    }
  }, {
    key: "on",
    value: function on(eventName, callback, options) {
      this.events.subscribe(eventName, callback, options);
    }
  }, {
    key: "off",
    value: function off(eventName, callback, options) {
      this.events.unsubscribe(eventName, callback, options);
    }
  }, {
    key: "sendEvent",
    value: function sendEvent(name, value, params) {
      this.frame.sendEvent(name, value, params);
    }
  }, {
    key: "init",
    value: function init() {
      var _this$config, _this$config$call;
      _classPrivateMethodGet(this, _insertStyles, _insertStyles2).call(this);
      this.popup.init();
      if (this.config.auth.defaultInit !== false) {
        this.authentication.init();
      }
      this.analytics.init();
      _classPrivateMethodGet(this, _eventsListener, _eventsListener2).call(this);
      _classPrivateMethodGet(this, _recogniseURLIncomeParams, _recogniseURLIncomeParams2).call(this);
      if (this.config.onInit) {
        this.config.onInit(this);
      }
      if ((_this$config = this.config) !== null && _this$config !== void 0 && (_this$config$call = _this$config.call) !== null && _this$config$call !== void 0 && _this$config$call.use) {
        this.call.init();
      }
    }
  }]);
  return WallkitIntegration;
}());
function _eventsListener2() {
  var _this2 = this;
  window.addEventListener('message', function (event) {
    var _event$data = event.data,
      value = _event$data.value,
      name = _event$data.name,
      origin = event.origin;
    _this2.events.notify(name, value);
    _this2.events.notify(_eventsName.FRAME_MESSAGE, {
      name: name,
      value: value
    });
    try {
      if (_constants.ALLOWED_ORIGINS.includes(origin) && name) {
        switch (name) {
          case "wk-event-modals-ready":
            if (_this2.authentication.isAuthenticated()) {
              _this2.frame.sendEvent("wk-event-applepay-ready", (0, _payments.isApplePayAvailable)());
            } else {
              _this2.frame.sendEvent("wk-event-get-token", _this2.config.public_key);
            }
            break;
          case "wk-event-resize":
            if (value.width !== 0 && value.height !== 0) {
              _this2.popup.resize(value.width, value.height);
            }
            break;
          case "show-firebase-auth":
            var redirect = value;
            _this2.popup.hide();
            _this2.events.subscribe(_eventsName.SUCCESS_AUTH, function () {
              if (typeof redirect === "string") {
                _this2.popup.open(redirect);
              }
            }, {
              once: true
            });
            _this2.authentication.show();
            _this2.frame.openFrame('');
            break;
          case "wk-event-close-modal":
            _this2.popup.hide();
            break;
          case "wk-event-reload-page":
            _this2.popup.hide();
            location.reload();
            break;
          case "wk-event-storage-available":
            if (!value) {
              _this2.authentication.dispatchTokens();
            }
            break;
          case "wk-event-close-on-wrapper":
            _this2.popup.closeOutside = value;
            break;
          case "wk-firebase-change-password":
            _this2.popup.hide();
            _this2.userManager.showChangePassword();
            break;
          case "wk-event-confirmation-required":
            if (value.popup === 'plans') {
              _this2.frame.openFrame('account-settings');
              _this2.authentication.confirmation.showEmailConfirmationModal();
              _this2.popup.hide();
            }
            break;
        }
      }
    } catch (error) {
      console.log('ERROR', error);
    }
  });
}
function _insertStyles2() {
  var styles = (0, _DOM.createElement)('style');
  styles.innerHTML = _styles.LIBRARY_STYLES;
  (0, _DOM.injectInHead)(styles);
}
function _recogniseURLIncomeParams2() {
  var ticketPassAuthToken = (0, _url.parseAuthTokenHash)();
  if (ticketPassAuthToken) {
    this.authentication.handleTicketsToken(ticketPassAuthToken);
    (0, _url.resetHash)();
  }
  var confirmToken = (0, _url.parseConfirmTokenHash)();
  if (confirmToken) {
    this.authentication.confirmation.confirmUserEmail(confirmToken);
    (0, _url.resetHash)();
  }
}
var _default = WallkitIntegration;
exports["default"] = _default;

/***/ }),

/***/ 7343:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _classPrivateFieldGet2 = _interopRequireDefault(__webpack_require__(5194));
var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(8478));
var _sdk2 = _interopRequireDefault(__webpack_require__(4753));
var _authentication2 = _interopRequireDefault(__webpack_require__(7484));
var _events2 = _interopRequireDefault(__webpack_require__(9889));
var _eventsName = __webpack_require__(6073);
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
var _config = /*#__PURE__*/new WeakMap();
var _sdk = /*#__PURE__*/new WeakMap();
var _authentication = /*#__PURE__*/new WeakMap();
var _events = /*#__PURE__*/new WeakMap();
var Analytics = /*#__PURE__*/function () {
  function Analytics(options) {
    (0, _classCallCheck2["default"])(this, Analytics);
    _classPrivateFieldInitSpec(this, _config, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _sdk, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _authentication, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _events, {
      writable: true,
      value: void 0
    });
    (0, _classPrivateFieldSet2["default"])(this, _config, {
      parseUTM: (options === null || options === void 0 ? void 0 : options.parseUTM) !== undefined ? options.parseUTM : true
    });
    (0, _classPrivateFieldSet2["default"])(this, _authentication, new _authentication2["default"]());
    (0, _classPrivateFieldSet2["default"])(this, _sdk, new _sdk2["default"]());
    (0, _classPrivateFieldSet2["default"])(this, _events, new _events2["default"]());
    this.utmTags = {};
  }
  (0, _createClass2["default"])(Analytics, [{
    key: "parseUTMTags",
    value: function parseUTMTags() {
      var _this = this;
      if (!window.location.search.includes('utm')) return {};
      var queryParams = new URLSearchParams(window.location.search);
      var utmParams = ['utm_source', 'utm_medium', 'utm_campaign'];
      var foundedUTMParams = {};
      utmParams.forEach(function (param) {
        if (queryParams.get(param)) {
          foundedUTMParams[param] = queryParams.get(param);
        }
      });
      this.utmTags = foundedUTMParams;
      if ((0, _classPrivateFieldGet2["default"])(this, _authentication).isAuthenticated()) {
        (0, _classPrivateFieldGet2["default"])(this, _sdk).methods.updateUser({
          extra: this.utmTags
        });
      } else if (this.hasUTMTags) {
        (0, _classPrivateFieldGet2["default"])(this, _events).subscribe(_eventsName.SUCCESS_AUTH, function () {
          (0, _classPrivateFieldGet2["default"])(_this, _sdk).methods.updateUser({
            extra: _this.utmTags
          });
        }, {
          once: true
        });
      }
      return foundedUTMParams;
    }
  }, {
    key: "hasUTMTags",
    get: function get() {
      return !!Object.keys(this.utmTags).length;
    }
  }, {
    key: "init",
    value: function init() {
      if ((0, _classPrivateFieldGet2["default"])(this, _config).parseUTM !== false) {
        this.parseUTMTags();
      }
    }
  }]);
  return Analytics;
}();
exports["default"] = Analytics;

/***/ }),

/***/ 407:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Confirmation = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _modal = _interopRequireDefault(__webpack_require__(9269));
var _sdk = _interopRequireDefault(__webpack_require__(4753));
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _createEmailConfirmationModal = /*#__PURE__*/new WeakSet();
var _createEmailConfirmedModal = /*#__PURE__*/new WeakSet();
var Confirmation = /*#__PURE__*/function () {
  function Confirmation() {
    (0, _classCallCheck2["default"])(this, Confirmation);
    _classPrivateMethodInitSpec(this, _createEmailConfirmedModal);
    _classPrivateMethodInitSpec(this, _createEmailConfirmationModal);
    this.sdk = new _sdk["default"]();
  }
  (0, _createClass2["default"])(Confirmation, [{
    key: "getEmailConfirmationModalContent",
    value: function getEmailConfirmationModalContent() {
      return "<div class=\"wallkit-email-confirmation-modal\">\n                <div id=\"confirm-email-error\"></div>\n                <h2 class=\"wallkit-auth-modal__title\">Please confirm your email address</h2>\n                <a href=\"#\" id=\"wallkit-resend-confirmation\">Resend confirmation</a>\n              </div>";
    }
  }, {
    key: "showEmailConfirmationModal",
    value: function showEmailConfirmationModal() {
      var _this = this;
      var modal = _classPrivateMethodGet(this, _createEmailConfirmationModal, _createEmailConfirmationModal2).call(this);
      modal.init();
      modal.show();
      var confirmation = document.getElementById('wallkit-resend-confirmation');
      confirmation.addEventListener('click', function (event) {
        event.preventDefault();
        modal.toggleLoader(true);
        _this.sdk.methods.resendConfirmUserEmail().then(function (_ref) {
          var result = _ref.result;
          if (result) {
            var confirmationText = document.createElement('p');
            confirmationText.innerText = 'Confirmation sent!';
            confirmation.replaceWith(confirmationText);
          }
        })["catch"](function (error) {
          if (error.message) {
            modal.setError(error);
          }
        })["finally"](function () {
          return modal.toggleLoader(false);
        });
      });
    }
  }, {
    key: "confirmUserEmail",
    value: function confirmUserEmail(code) {
      var modal = _classPrivateMethodGet(this, _createEmailConfirmedModal, _createEmailConfirmedModal2).call(this);
      modal.init();
      modal.show();
      this.sdk.methods.confirmUserEmail(code).then(function () {
        var contentElement = document.getElementById('confirmed-modal-content');
        if (contentElement) {
          contentElement.innerHTML = "<h2 class=\"wallkit-auth-modal__title\">Thank you! Email confirmed!</h2>";
        }
      })["catch"](function (error) {
        if (error.message) {
          modal.setError(error);
        }
      })["finally"](function () {
        modal.toggleLoader(false);
      });
    }
  }]);
  return Confirmation;
}();
exports.Confirmation = Confirmation;
function _createEmailConfirmationModal2() {
  return new _modal["default"]({
    modalName: 'email-confirmation-modal',
    content: this.getEmailConfirmationModalContent(),
    className: 'wallkit-auth-modal',
    initialLoader: false
  });
}
function _createEmailConfirmedModal2() {
  return new _modal["default"]({
    modalName: 'email-confirmed-modal',
    content: "<div>\n                    <div id=\"confirmed-email-error\"></div>\n                    <div id=\"confirmed-modal-content\"></div>\n              </div>",
    className: 'wallkit-auth-modal',
    initialLoader: true
  });
}

/***/ }),

/***/ 3378:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(8047));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7240));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _classPrivateFieldGet2 = _interopRequireDefault(__webpack_require__(5194));
var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(8478));
var _eventsName = _interopRequireDefault(__webpack_require__(6073));
var _DOM = __webpack_require__(2909);
var _loaders = __webpack_require__(1758);
var _sdk2 = _interopRequireDefault(__webpack_require__(4753));
var _events = _interopRequireDefault(__webpack_require__(9889));
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _sdk = /*#__PURE__*/new WeakMap();
var _initReCaptchaPlaceholder = /*#__PURE__*/new WeakSet();
var _onRecaptchaAuth = /*#__PURE__*/new WeakSet();
var ReCaptchaFirebase = /*#__PURE__*/function () {
  function ReCaptchaFirebase(authenticationInstance, options) {
    (0, _classCallCheck2["default"])(this, ReCaptchaFirebase);
    _classPrivateMethodInitSpec(this, _onRecaptchaAuth);
    _classPrivateMethodInitSpec(this, _initReCaptchaPlaceholder);
    _classPrivateFieldInitSpec(this, _sdk, {
      writable: true,
      value: void 0
    });
    if (!authenticationInstance) {
      throw Error('Authentication Instance is not provided');
    }
    this.enabled = this.isEnabled(options);
    this.authentication = authenticationInstance;
    this.options = options;
    this.loaded = false;
    this.valid = false;
    this.siteKey = options === null || options === void 0 ? void 0 : options.siteKey;
    this.grecaptcha = null;
    (0, _classPrivateFieldSet2["default"])(this, _sdk, new _sdk2["default"]());
    this.events = new _events["default"]();
  }
  (0, _createClass2["default"])(ReCaptchaFirebase, [{
    key: "isEnabled",
    value: function isEnabled(options) {
      if ((0, _DOM.isMobile)()) {
        return !!options && (options === null || options === void 0 ? void 0 : options.mobile) !== false;
      } else {
        return !!options;
      }
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      if (options) {
        this.options = options;
        this.enabled = true;
      }
      return this;
    }
  }, {
    key: "load",
    value: function () {
      var _load = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _this = this;
        var recaptchaScripts;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              if (this.options) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return", false);
            case 3:
              if (!this.loaded) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", true);
            case 5:
              recaptchaScripts = [{
                url: "https://www.google.com/recaptcha/api.js",
                id: 'recaptcha-script',
                defer: true,
                onload: function onload() {
                  _this.loaded = true;
                  _this.grecaptcha = window.grecaptcha;
                  _this.events.notify(_eventsName["default"].RECAPTCHA_LOADED, true);
                  Promise.resolve(true);
                }
              }];
              window.onRecaptchaAuth = _classPrivateMethodGet(this, _onRecaptchaAuth, _onRecaptchaAuth2).bind(this);
              _classPrivateMethodGet(this, _initReCaptchaPlaceholder, _initReCaptchaPlaceholder2).call(this);
              this.hideBadge();
              (0, _loaders.loadScripts)(recaptchaScripts);
              _context.next = 16;
              break;
            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);
              return _context.abrupt("return", false);
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 12]]);
      }));
      function load() {
        return _load.apply(this, arguments);
      }
      return load;
    }()
  }, {
    key: "hideBadge",
    value: function hideBadge() {
      var style = (0, _DOM.createElement)('style');
      style.innerText = ".grecaptcha-badge {\n                    visibility: hidden;\n                };";
      (0, _DOM.injectInHead)(style);
    }
  }, {
    key: "resetProcess",
    value: function resetProcess() {
      if (this.grecaptcha) {
        this.grecaptcha.reset();
      }
      this.authentication.firebase.reset();
      this.authentication.modal.toggleLoader(false);
    }
  }, {
    key: "initCaptchaProcess",
    value: function () {
      var _initCaptchaProcess = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _this2 = this;
        var handleCaptchaState, executeReCaptcha, initTriggers, emailBtn, emailField, submitBtn;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              try {
                this.valid = false;
                if (this.grecaptcha) {
                  this.grecaptcha.reset();
                }
                handleCaptchaState = function handleCaptchaState() {
                  if (!_this2.valid) {
                    _this2.events.notify(_eventsName["default"].local.RECAPTCHA_VALIDATION_FAILED);
                    _this2.authentication.firebase.reset();
                    _this2.authentication.modal.toggleLoader(true);
                  }
                };
                executeReCaptcha = function executeReCaptcha() {
                  _this2.authentication.modal.toggleLoader(true);
                  _this2.grecaptcha.ready(function () {
                    _this2.grecaptcha.execute().then(function () {
                      _this2.events.subscribe(_eventsName["default"].local.MODAL_CLOSED, function () {
                        return _this2.resetProcess();
                      }, {
                        once: true
                      });
                    })["catch"](function () {
                      return _this2.resetProcess();
                    });
                  });
                };
                initTriggers = function initTriggers() {
                  executeReCaptcha();
                  var emailField = document.querySelector('.firebaseui-id-email');
                  var submitBtn = document.querySelector('.firebaseui-id-page-sign-in .firebaseui-id-submit');
                  var cancelBtn = document.querySelector('.firebaseui-id-page-sign-in .firebaseui-id-secondary-link');
                  if (emailField) {
                    emailField.addEventListener('input', function () {
                      handleCaptchaState();
                    });
                    emailField.addEventListener('keydown', function (event) {
                      if (event.code && event.code === 'Enter') {
                        handleCaptchaState();
                      }
                    });
                  }
                  if (cancelBtn) {
                    cancelBtn.onclick = function () {
                      handleCaptchaState();
                    };
                  }
                  if (submitBtn) {
                    submitBtn.onclick = function () {
                      handleCaptchaState();
                    };
                  }
                };
                emailBtn = document.querySelector('.firebaseui-idp-button[data-provider-id="password"]');
                emailField = document.querySelector('.firebaseui-id-email');
                if (emailBtn) {
                  emailBtn.addEventListener('click', initTriggers.bind(this));
                } else if (emailField) {
                  submitBtn = document.querySelector('.firebaseui-id-page-sign-in .firebaseui-id-submit');
                  if (submitBtn) {
                    submitBtn.onclick = function () {
                      handleCaptchaState();
                    };
                  }
                  emailField.addEventListener('input', function () {
                    if (!_this2.valid) {
                      emailField.blur();
                      executeReCaptcha();
                    }
                  });
                }
              } catch (error) {
                this.authentication.firebase.reset();
                console.error('error', error);
              }
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function initCaptchaProcess() {
        return _initCaptchaProcess.apply(this, arguments);
      }
      return initCaptchaProcess;
    }()
  }, {
    key: "init",
    value: function () {
      var _init = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var response;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              if (!(!this.options || this.loaded)) {
                _context3.next = 3;
                break;
              }
              return _context3.abrupt("return", false);
            case 3:
              if (!(this.options === true)) {
                _context3.next = 12;
                break;
              }
              _context3.next = 6;
              return (0, _classPrivateFieldGet2["default"])(this, _sdk).methods.getReCaptchaSettings();
            case 6:
              response = _context3.sent;
              if (!(response && response.active)) {
                _context3.next = 10;
                break;
              }
              this.siteKey = response.recaptcha_public_key;
              return _context3.abrupt("return", this.load());
            case 10:
              _context3.next = 13;
              break;
            case 12:
              return _context3.abrupt("return", this.load());
            case 13:
              return _context3.abrupt("return", false);
            case 16:
              _context3.prev = 16;
              _context3.t0 = _context3["catch"](0);
              console.error(_context3.t0);
              return _context3.abrupt("return", false);
            case 20:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[0, 16]]);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }]);
  return ReCaptchaFirebase;
}();
exports["default"] = ReCaptchaFirebase;
function _initReCaptchaPlaceholder2() {
  var reCaptchaPlaceholder = (0, _DOM.createElement)('div');
  reCaptchaPlaceholder.classList.add('g-recaptcha');
  reCaptchaPlaceholder.dataset.sitekey = this.siteKey;
  reCaptchaPlaceholder.dataset.size = 'invisible';
  reCaptchaPlaceholder.dataset.callback = 'onRecaptchaAuth';
  if (this.authentication.modal) {
    this.authentication.modal.modalContent.appendChild(reCaptchaPlaceholder);
  }
}
function _onRecaptchaAuth2(token) {
  var _this3 = this;
  return (0, _classPrivateFieldGet2["default"])(this, _sdk).methods.validateReCaptchaToken(token).then(function () {
    _this3.events.notify(_eventsName["default"].local.RECAPTCHA_VALIDATION_SUCCESS);
    _this3.valid = true;
    _this3.authentication.modal.toggleLoader(false);
  })["catch"](function () {
    _this3.valid = false;
  })["finally"](function () {
    _this3.authentication.modal.toggleLoader(false);
  });
}

/***/ }),

/***/ 526:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _classPrivateFieldGet2 = _interopRequireDefault(__webpack_require__(5194));
var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(8478));
var _localStorage = _interopRequireDefault(__webpack_require__(347));
var _cookie = __webpack_require__(5048);
var _url = __webpack_require__(5234);
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
var _slug = /*#__PURE__*/new WeakMap();
var _resource = /*#__PURE__*/new WeakMap();
var _domain = /*#__PURE__*/new WeakMap();
var Token = /*#__PURE__*/function () {
  function Token(slug, value, resource, subDomain) {
    (0, _classCallCheck2["default"])(this, Token);
    _classPrivateFieldInitSpec(this, _slug, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _resource, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _domain, {
      writable: true,
      value: void 0
    });
    if (slug && resource) {
      (0, _classPrivateFieldSet2["default"])(this, _resource, resource);
      (0, _classPrivateFieldSet2["default"])(this, _domain, subDomain === true ? (0, _url.getParentDomain)() : '');
      (0, _classPrivateFieldSet2["default"])(this, _slug, this.createTokenSlug(slug, resource));
      if (value) {
        this.set(value);
      } else {
        this.token = this.getStoredTokenValue() || null;
      }
    }
  }
  (0, _createClass2["default"])(Token, [{
    key: "createTokenSlug",
    value: function createTokenSlug(slug, resource) {
      return "".concat(slug, "_").concat(resource);
    }
  }, {
    key: "get",
    value: function get() {
      return this.token;
    }
  }, {
    key: "getStoredTokenValue",
    value: function getStoredTokenValue() {
      return _localStorage["default"].getItem((0, _classPrivateFieldGet2["default"])(this, _slug)) || null;
    }
  }, {
    key: "remove",
    value: function remove() {
      this.token = null;
      (0, _cookie.removeCookie)((0, _classPrivateFieldGet2["default"])(this, _slug), (0, _classPrivateFieldGet2["default"])(this, _domain));
      _localStorage["default"].removeItem((0, _classPrivateFieldGet2["default"])(this, _slug));
    }
  }, {
    key: "set",
    value: function set(value) {
      this.token = value;
      (0, _cookie.setCookie)((0, _classPrivateFieldGet2["default"])(this, _slug), value, {
        expires: 'Fri, 31 Dec 9999 23:59:59 GMT',
        path: "/",
        domain: (0, _classPrivateFieldGet2["default"])(this, _domain)
      });
      _localStorage["default"].setItem((0, _classPrivateFieldGet2["default"])(this, _slug), value);
    }
  }]);
  return Token;
}();
exports["default"] = Token;

/***/ }),

/***/ 5298:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(8047));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7240));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(366));
var _typeof2 = _interopRequireDefault(__webpack_require__(2125));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _classPrivateFieldGet2 = _interopRequireDefault(__webpack_require__(5194));
var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(8478));
var _loaders = __webpack_require__(1758);
var _DOM = __webpack_require__(2909);
var _constants = __webpack_require__(9066);
var _localization = __webpack_require__(7761);
var _events = _interopRequireDefault(__webpack_require__(9889));
var _eventsName = __webpack_require__(6073);
var _lodash = _interopRequireDefault(__webpack_require__(5828));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _mode = /*#__PURE__*/new WeakMap();
var _getElementPlaceholder = /*#__PURE__*/new WeakSet();
var _loadFirebase = /*#__PURE__*/new WeakSet();
var _authStateChanged = /*#__PURE__*/new WeakSet();
var _firebaseInitApp = /*#__PURE__*/new WeakSet();
var Firebase = /*#__PURE__*/function () {
  function Firebase(_options) {
    var _options$captchaKey, _options$genuineForm, _options$onSuccessAut, _options$onAuthStateC, _options$uiShown;
    (0, _classCallCheck2["default"])(this, Firebase);
    _classPrivateMethodInitSpec(this, _firebaseInitApp);
    _classPrivateMethodInitSpec(this, _authStateChanged);
    _classPrivateMethodInitSpec(this, _loadFirebase);
    _classPrivateMethodInitSpec(this, _getElementPlaceholder);
    _classPrivateFieldInitSpec(this, _mode, {
      writable: true,
      value: void 0
    });
    this.events = new _events["default"]();
    this.firebaseUiConfig = null;
    (0, _classPrivateFieldSet2["default"])(this, _mode, _options === null || _options === void 0 ? void 0 : _options.mode);
    this.lang = _localization.Localization.assembleLanguage(_options.lang || 'en');
    this.config = _options === null || _options === void 0 ? void 0 : _options.config;
    this.providers = _options === null || _options === void 0 ? void 0 : _options.providers;
    this.tosURL = _options === null || _options === void 0 ? void 0 : _options.tosURL;
    this.privacyPolicyURL = _options === null || _options === void 0 ? void 0 : _options.privacyPolicyURL;
    this.captchaKey = (_options$captchaKey = _options === null || _options === void 0 ? void 0 : _options.captchaKey) !== null && _options$captchaKey !== void 0 ? _options$captchaKey : '6LeNZrwbAAAAAKXPTmJj5KMdUwI2GE6XAUbCU6DM';
    this.genuineForm = (_options$genuineForm = _options === null || _options === void 0 ? void 0 : _options.genuineForm) !== null && _options$genuineForm !== void 0 ? _options$genuineForm : true;
    this.firebase = null;
    this.firebaseui = null;
    this.elementPlaceholder = _classPrivateMethodGet(this, _getElementPlaceholder, _getElementPlaceholder2).call(this, _options);
    this.onSuccessAuth = (_options$onSuccessAut = _options === null || _options === void 0 ? void 0 : _options.onSuccessAuth) !== null && _options$onSuccessAut !== void 0 ? _options$onSuccessAut : null;
    this.onAuthStateChanged = (_options$onAuthStateC = _options === null || _options === void 0 ? void 0 : _options.onAuthStateChanged) !== null && _options$onAuthStateC !== void 0 ? _options$onAuthStateC : null;
    this.uiShown = (_options$uiShown = _options === null || _options === void 0 ? void 0 : _options.uiShown) !== null && _options$uiShown !== void 0 ? _options$uiShown : null;
    this.isUiShown = false;
    this.initialized = false;
    this.loaded = false;
  }
  (0, _createClass2["default"])(Firebase, [{
    key: "allowedProviders",
    get: function get() {
      return {
        'google': this.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        'email': this.firebase.auth.EmailAuthProvider.PROVIDER_ID,
        'facebook': this.firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        'apple': 'apple.com',
        'microsoft': 'microsoft.com'
      };
    }
  }, {
    key: "hideAuthForm",
    value: function hideAuthForm() {
      var element = document.querySelector(this.elementPlaceholder);
      if (element) {
        element.style.display = 'none';
      }
    }
  }, {
    key: "showAuthForm",
    value: function showAuthForm() {
      var element = document.querySelector(this.elementPlaceholder);
      if (element) {
        element.style.display = 'block';
      }
    }
  }, {
    key: "formatSelectedProviders",
    value: function formatSelectedProviders(providers) {
      var _this = this;
      var selectedProviders = [];
      if (Array.isArray(providers)) {
        selectedProviders = providers.map(function (item) {
          if ((item === 'email' || item.provider === 'email') && _this.genuineForm === false) {
            return false;
          }
          if ((0, _typeof2["default"])(item) === "object") {
            if (_this.allowedProviders[item.provider]) {
              return _objectSpread(_objectSpread({}, item), {}, {
                provider: _this.allowedProviders[item.provider]
              });
            }
          } else {
            if (_this.allowedProviders[item]) {
              return _this.allowedProviders[item];
            }
          }
        }).filter(function (item) {
          return !!item;
        });
      }
      return selectedProviders;
    }
  }, {
    key: "initFirebase",
    value: function () {
      var _initFirebase = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
        var _this2 = this;
        var config, _ref$providers, providers, _ref$tosUrl, tosUrl, _ref$privacyPolicyUrl, privacyPolicyUrl, firebaseuiInstance;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              config = _ref.config, _ref$providers = _ref.providers, providers = _ref$providers === void 0 ? ['email', 'google'] : _ref$providers, _ref$tosUrl = _ref.tosUrl, tosUrl = _ref$tosUrl === void 0 ? 'https://wallkit.net' : _ref$tosUrl, _ref$privacyPolicyUrl = _ref.privacyPolicyUrl, privacyPolicyUrl = _ref$privacyPolicyUrl === void 0 ? 'https://wallkit.net' : _ref$privacyPolicyUrl;
              _classPrivateMethodGet(this, _firebaseInitApp, _firebaseInitApp2).call(this, config);
              firebaseuiInstance = new this.firebaseui.auth.AuthUI(this.firebase.auth());
              firebaseuiInstance.disableAutoSignIn();
              this.firebaseUiConfig = {
                callbacks: {
                  signInSuccessWithAuthResult: function signInSuccessWithAuthResult(result) {
                    result.user.getIdToken().then(function (token) {
                      var formattedResult = {
                        user: result.user,
                        userId: result.user.uid,
                        token: token
                      };
                      if (_this2.onSuccessAuth) {
                        _this2.onSuccessAuth(formattedResult, result);
                      }
                    });
                  },
                  uiShown: function uiShown() {
                    if (_this2.uiShown) {
                      _this2.uiShown();
                    }
                    _this2.events.notify(_eventsName.FIREBASE_UI_SHOWN, true);
                    _this2.isUiShown = true;
                  }
                },
                signInFlow: 'popup',
                signInOptions: this.formatSelectedProviders(providers),
                credentialHelper: this.firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
                tosUrl: tosUrl,
                privacyPolicyUrl: privacyPolicyUrl
              };
              this.firebaseui = firebaseuiInstance;
              this.startFirebaseUi(this.elementPlaceholder, this.firebaseUiConfig);
              this.firebase.auth().onAuthStateChanged(_classPrivateMethodGet(this, _authStateChanged, _authStateChanged2).bind(this));
              return _context.abrupt("return", true);
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function initFirebase(_x) {
        return _initFirebase.apply(this, arguments);
      }
      return initFirebase;
    }()
  }, {
    key: "reset",
    value: function reset() {
      if (this.firebaseui) {
        this.firebaseui.reset();
        this.firebaseui.start(this.elementPlaceholder);
      }
    }
  }, {
    key: "startFirebaseUi",
    value: function startFirebaseUi(elementPlaceholder, uiConfig) {
      this.firebaseui.start(elementPlaceholder || this.elementPlaceholder, uiConfig || this.firebaseUiConfig);
    }
  }, {
    key: "logout",
    value: function logout() {
      var _this3 = this;
      return new Promise(function (resolve) {
        if (_this3.firebase && _this3.firebase.auth) {
          _this3.firebase.auth().signOut().then(function () {
            return resolve(true);
          });
        } else {
          resolve(false);
        }
      });
    }
  }, {
    key: "signIn",
    value: function signIn(email, password) {
      var _this4 = this;
      return this.firebase.auth().signInWithEmailAndPassword(email, password).then(function (result) {
        return _this4.handleSuccessAuth(result);
      });
    }
  }, {
    key: "signUp",
    value: function signUp(email, password) {
      var _this5 = this;
      return this.firebase.auth().createUserWithEmailAndPassword(email, password).then(function (result) {
        return _this5.handleSuccessAuth(result);
      });
    }
  }, {
    key: "updateName",
    value: function updateName(name) {
      if (name) {
        var user = this.firebase.auth().currentUser;
        if (user) {
          user.updateProfile({
            displayName: name
          });
        }
      }
    }
  }, {
    key: "handleSuccessAuth",
    value: function () {
      var _handleSuccessAuth = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(result) {
        var token, formattedResult;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              if (!result) {
                _context2.next = 7;
                break;
              }
              _context2.next = 4;
              return result.user.getIdToken();
            case 4:
              token = _context2.sent;
              formattedResult = {
                operationType: result.operationType,
                user: result.user,
                userId: result.user.uid,
                token: token
              };
              if (this.onSuccessAuth) {
                this.onSuccessAuth(formattedResult, result);
              }
            case 7:
              _context2.next = 12;
              break;
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              console.log('ERROR:', _context2.t0);
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[0, 9]]);
      }));
      function handleSuccessAuth(_x2) {
        return _handleSuccessAuth.apply(this, arguments);
      }
      return handleSuccessAuth;
    }()
  }, {
    key: "sendPasswordResetEmail",
    value: function sendPasswordResetEmail(email) {
      return this.firebase.auth().sendPasswordResetEmail(email);
    }
  }, {
    key: "sendNewPasswordResetPassword",
    value: function () {
      var _sendNewPasswordResetPassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(password, oobCode) {
        var passResetUrl;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (password) {
                _context4.next = 2;
                break;
              }
              throw new Error("The password cannot be empty of false.");
            case 2:
              if (oobCode) {
                _context4.next = 4;
                break;
              }
              throw new Error("Invalid values in the password reset url.");
            case 4:
              passResetUrl = "https://identitytoolkit.googleapis.com/v1/accounts:resetPassword?key=".concat(this.config.apiKey);
              _context4.next = 7;
              return fetch(passResetUrl, {
                method: 'POST',
                body: JSON.stringify({
                  oobCode: oobCode,
                  newPassword: password
                }),
                headers: {
                  "Content-Type": "application/json"
                }
              }).then( /*#__PURE__*/function () {
                var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(res) {
                  var resJson;
                  return _regenerator["default"].wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return res.json();
                      case 2:
                        resJson = _context3.sent;
                        if (!(!!resJson.error && !!resJson.error.message)) {
                          _context3.next = 14;
                          break;
                        }
                        _context3.t0 = resJson.error.message;
                        _context3.next = _context3.t0 === 'OPERATION_NOT_ALLOWED' ? 7 : _context3.t0 === 'EXPIRED_OOB_CODE' ? 8 : _context3.t0 === 'INVALID_OOB_CODE' ? 9 : _context3.t0 === 'USER_DISABLED' ? 10 : 11;
                        break;
                      case 7:
                        throw new Error("Password sign-in is disabled for this project.");
                      case 8:
                        throw new Error("The password reset link has expired.");
                      case 9:
                        throw new Error("The password reset link is invalid. This can happen if the code is malformed, expired, or has already been used. Please generate a new one using the Forgot password form.");
                      case 10:
                        throw new Error("The user account has been disabled by an administrator.");
                      case 11:
                        throw new Error(resJson.error.message);
                      case 12:
                        _context3.next = 15;
                        break;
                      case 14:
                        return _context3.abrupt("return", resJson);
                      case 15:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function (_x5) {
                  return _ref2.apply(this, arguments);
                };
              }())["catch"](function (error) {
                throw error;
              });
            case 7:
              return _context4.abrupt("return", _context4.sent);
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function sendNewPasswordResetPassword(_x3, _x4) {
        return _sendNewPasswordResetPassword.apply(this, arguments);
      }
      return sendNewPasswordResetPassword;
    }()
  }, {
    key: "authEmailLink",
    value: function () {
      var _authEmailLink = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(oobcode, email) {
        var signInWithEmailLinkUrl;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!((0, _lodash["default"])(oobcode) || (0, _lodash["default"])(email))) {
                _context6.next = 2;
                break;
              }
              throw new Error("Invalid values in the auth email link.");
            case 2:
              signInWithEmailLinkUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithEmailLink?key=".concat(this.config.apiKey);
              _context6.next = 5;
              return fetch(signInWithEmailLinkUrl, {
                method: 'POST',
                body: JSON.stringify({
                  oobCode: oobcode,
                  email: email
                }),
                headers: {
                  "Content-Type": "application/json"
                }
              }).then( /*#__PURE__*/function () {
                var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(res) {
                  var resJson;
                  return _regenerator["default"].wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return res.json();
                      case 2:
                        resJson = _context5.sent;
                        if (!(!!resJson.error && !!resJson.error.message)) {
                          _context5.next = 7;
                          break;
                        }
                        throw new Error(resJson.error.message);
                      case 7:
                        return _context5.abrupt("return", resJson);
                      case 8:
                      case "end":
                        return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function (_x8) {
                  return _ref3.apply(this, arguments);
                };
              }())["catch"](function (error) {
                throw error;
              });
            case 5:
              return _context6.abrupt("return", _context6.sent);
            case 6:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function authEmailLink(_x6, _x7) {
        return _authEmailLink.apply(this, arguments);
      }
      return authEmailLink;
    }()
  }, {
    key: "reauthenticateWithCredential",
    value: function () {
      var _reauthenticateWithCredential = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(oldPassword) {
        var user, credential;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (!oldPassword) {
                _context7.next = 12;
                break;
              }
              user = this.firebase.auth().currentUser;
              if (!user) {
                _context7.next = 9;
                break;
              }
              credential = this.firebase.auth.EmailAuthProvider.credential(user.email, oldPassword);
              _context7.next = 6;
              return user.reauthenticateWithCredential(credential);
            case 6:
              return _context7.abrupt("return", _context7.sent);
            case 9:
              throw new Error('Your authorization is broken. Please login again.');
            case 10:
              _context7.next = 13;
              break;
            case 12:
              throw new Error('Old Password is empty');
            case 13:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function reauthenticateWithCredential(_x9) {
        return _reauthenticateWithCredential.apply(this, arguments);
      }
      return reauthenticateWithCredential;
    }()
  }, {
    key: "updatePassword",
    value: function () {
      var _updatePassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(newPassword) {
        var user;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              if (!newPassword) {
                _context8.next = 10;
                break;
              }
              user = this.firebase.auth().currentUser;
              if (!user) {
                _context8.next = 7;
                break;
              }
              _context8.next = 5;
              return user.updatePassword(newPassword);
            case 5:
              _context8.next = 8;
              break;
            case 7:
              throw new Error('Your authorization is broken. Please login again.');
            case 8:
              _context8.next = 11;
              break;
            case 10:
              throw new Error('New Password is empty');
            case 11:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function updatePassword(_x10) {
        return _updatePassword.apply(this, arguments);
      }
      return updatePassword;
    }()
  }, {
    key: "authWithCustomToken",
    value: function () {
      var _authWithCustomToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(token) {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              if (!(this.firebase && this.firebase.auth)) {
                _context9.next = 5;
                break;
              }
              _context9.next = 4;
              return this.firebase.auth().signInWithCustomToken(token);
            case 4:
              return _context9.abrupt("return", _context9.sent);
            case 5:
              return _context9.abrupt("return", false);
            case 8:
              _context9.prev = 8;
              _context9.t0 = _context9["catch"](0);
              console.error('Custom Token Auth Fail');
              return _context9.abrupt("return", false);
            case 12:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[0, 8]]);
      }));
      function authWithCustomToken(_x11) {
        return _authWithCustomToken.apply(this, arguments);
      }
      return authWithCustomToken;
    }()
  }, {
    key: "attachEmailListener",
    value: function attachEmailListener(callback) {
      var emailBtn = document.querySelector('.firebaseui-idp-button[data-provider-id="password"]');
      var attachListener = function attachListener() {
        var emailField = document.querySelector('.firebaseui-id-email');
        if (emailField) {
          emailField.addEventListener('blur', function (event) {
            callback(event);
          });
        }
      };
      if (emailBtn) {
        emailBtn.addEventListener('click', function () {
          setTimeout(function () {
            attachListener();
          });
        });
      } else {
        attachListener();
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this6 = this;
      _classPrivateMethodGet(this, _loadFirebase, _loadFirebase2).call(this).then(function () {
        _this6.events.notify(_eventsName.FIREBASE_LOADED, true);
        _this6.initFirebase({
          config: _this6.config,
          providers: _this6.providers,
          tosUrl: _this6.tosURL,
          privacyPolicyUrl: _this6.privacyPolicyURL
        }).then(function () {
          _this6.initialized = true;
          _this6.events.notify(_eventsName.FIREBASE_INIT, true);
        });
      });
    }
  }]);
  return Firebase;
}();
exports["default"] = Firebase;
function _getElementPlaceholder2(options) {
  var defaultPlaceholder = "#".concat(_constants.WALLKIT_FIREBASE_UI_PLACEHOLDER_ID);
  if (this.genuineForm) {
    var _options$elementSelec;
    var selector = (_options$elementSelec = options === null || options === void 0 ? void 0 : options.elementSelector) !== null && _options$elementSelec !== void 0 ? _options$elementSelec : defaultPlaceholder;
    return (0, _DOM.normalizeSelector)(selector);
  }
  return defaultPlaceholder;
}
function _loadFirebase2() {
  var _this7 = this;
  return new Promise(function (resolve, reject) {
    _this7.loading = true;
    var onFirebaseAppLoaded = function onFirebaseAppLoaded() {
      var scripts = [{
        url: 'https://www.gstatic.com/firebasejs/8.7.0/firebase-analytics.js',
        id: 'firebase-analytics',
        defer: true,
        onload: function onload() {
          return onScriptLoaded();
        }
      }, {
        url: 'https://www.gstatic.com/firebasejs/8.7.0/firebase-auth.js',
        id: 'firebase-auth',
        defer: true,
        onload: function onload() {
          return onScriptLoaded();
        }
      }, {
        url: 'https://www.gstatic.com/firebasejs/8.7.0/firebase-firestore.js',
        id: 'firebase-firestore',
        defer: true,
        onload: function onload() {
          return onScriptLoaded();
        }
      }, {
        url: "https://www.gstatic.com/firebasejs/ui/4.8.0/firebase-ui-auth__".concat(_this7.lang, ".js"),
        id: 'firebase-ui',
        defer: true,
        onload: function onload() {
          return onScriptLoaded();
        }
      }, {
        url: 'https://www.gstatic.com/firebasejs/8.7.0/firebase-app-check.js',
        id: 'firebase-app-check',
        defer: true,
        onload: function onload() {
          return onScriptLoaded();
        }
      }];
      var loadedCounter = 0;
      var onScriptLoaded = function onScriptLoaded() {
        loadedCounter++;
        if (loadedCounter === scripts.length) {
          _this7.firebase = window.firebase;
          _this7.firebaseui = window.firebaseui;
          _this7.loaded = true;
          resolve({
            firebase: window.firebase,
            firebaseui: window.firebaseui
          });
        }
      };
      (0, _loaders.loadScripts)(scripts);
      (0, _DOM.loadCSS)('https://www.gstatic.com/firebasejs/ui/4.8.0/firebase-ui-auth.css', 'firebase-ui-styles');
    };
    (0, _DOM.insertScript)('https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js', 'firebase-app', onFirebaseAppLoaded);
  });
}
function _authStateChanged2(user) {
  var _this8 = this;
  if (user) {
    user.getIdToken().then(function (token) {
      if (_this8.onAuthStateChanged) {
        _this8.onAuthStateChanged(token);
      }
    });
  }
}
function _firebaseInitApp2(config) {
  if (this.firebase.apps.length === 0) {
    var defaultConfig = (0, _classPrivateFieldGet2["default"])(this, _mode) === 'dev' ? _constants.WALLKIT_DEV_FIREBASE_CONFIG : _constants.WALLKIT_FIREBASE_CONFIG;
    this.firebase.initializeApp(config !== null && config !== void 0 ? config : defaultConfig);
  }
  return this.firebase;
}

/***/ }),

/***/ 7484:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
var _typeof3 = __webpack_require__(2125);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(8047));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7240));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(366));
var _typeof2 = _interopRequireDefault(__webpack_require__(2125));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _classPrivateFieldGet11 = _interopRequireDefault(__webpack_require__(5194));
var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(8478));
var _modal = _interopRequireDefault(__webpack_require__(9269));
var _Firebase = _interopRequireDefault(__webpack_require__(5298));
var _constants = __webpack_require__(9066);
var _eventsName = _interopRequireWildcard(__webpack_require__(6073));
var _events = _interopRequireDefault(__webpack_require__(9889));
var _frame = _interopRequireDefault(__webpack_require__(8967));
var _sdk = _interopRequireDefault(__webpack_require__(4753));
var _Token = _interopRequireDefault(__webpack_require__(526));
var _ReCaptcha = _interopRequireDefault(__webpack_require__(3378));
var _AuthForm = __webpack_require__(8031);
var _DOM = __webpack_require__(2909);
var _url = __webpack_require__(5234);
var _Confirmation = __webpack_require__(407);
var _lodash = _interopRequireDefault(__webpack_require__(5828));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _options = /*#__PURE__*/new WeakMap();
var _oobCode = /*#__PURE__*/new WeakMap();
var _showAuthFormSlug = /*#__PURE__*/new WeakMap();
var _authPlaceholderElementSelector = /*#__PURE__*/new WeakMap();
var _authPlaceholderElementSelectorType = /*#__PURE__*/new WeakMap();
var _isEmailProvider = /*#__PURE__*/new WeakMap();
var _createModal = /*#__PURE__*/new WeakSet();
var _initListeners = /*#__PURE__*/new WeakSet();
var _setAuthorizationError = /*#__PURE__*/new WeakSet();
var _resetAuthorizationError = /*#__PURE__*/new WeakSet();
var _checkIfResetPasswordURL = /*#__PURE__*/new WeakSet();
var _checkIfAuthEmailLinkURL = /*#__PURE__*/new WeakSet();
var Authentication = /*#__PURE__*/function () {
  function Authentication(options) {
    var _options$cookies,
      _options$cookies2,
      _this = this;
    (0, _classCallCheck2["default"])(this, Authentication);
    _classPrivateMethodInitSpec(this, _checkIfAuthEmailLinkURL);
    _classPrivateMethodInitSpec(this, _checkIfResetPasswordURL);
    _classPrivateMethodInitSpec(this, _resetAuthorizationError);
    _classPrivateMethodInitSpec(this, _setAuthorizationError);
    _classPrivateMethodInitSpec(this, _initListeners);
    _classPrivateMethodInitSpec(this, _createModal);
    _classPrivateFieldInitSpec(this, _isEmailProvider, {
      get: _get_isEmailProvider,
      set: void 0
    });
    _classPrivateFieldInitSpec(this, _authPlaceholderElementSelectorType, {
      get: _get_authPlaceholderElementSelectorType,
      set: void 0
    });
    _classPrivateFieldInitSpec(this, _authPlaceholderElementSelector, {
      get: _get_authPlaceholderElementSelector,
      set: void 0
    });
    _classPrivateFieldInitSpec(this, _options, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _oobCode, {
      writable: true,
      value: ''
    });
    _classPrivateFieldInitSpec(this, _showAuthFormSlug, {
      writable: true,
      value: ''
    });
    if (!!Authentication.instance) {
      return Authentication.instance;
    }
    Authentication.instance = this;
    (0, _classPrivateFieldSet2["default"])(this, _options, options);
    this.token = new _Token["default"](_constants.WALLKIT_TOKEN_NAME, null, options.public_key, !!(options !== null && options !== void 0 && (_options$cookies = options.cookies) !== null && _options$cookies !== void 0 && _options$cookies.subDomain));
    this.firebaseToken = new _Token["default"](_constants.FIREBASE_TOKEN_NAME, null, options.public_key, !!(options !== null && options !== void 0 && (_options$cookies2 = options.cookies) !== null && _options$cookies2 !== void 0 && _options$cookies2.subDomain));
    this.frame = new _frame["default"]();
    this.sdk = new _sdk["default"]();
    if (!!(options !== null && options !== void 0 && options.firebase)) {
      var config = {
        lang: options.lang || 'en',
        mode: options.mode,
        onAuthStateChanged: this.updateFirebaseToken.bind(this),
        onSuccessAuth: this.onSuccessAuth.bind(this),
        uiShown: this.onFirebaseInit.bind(this),
        onAuthFail: this.onFirebaseAuthFail.bind(this)
      };
      if ((0, _typeof2["default"])(options.firebase) === "object") {
        config = _objectSpread(_objectSpread({}, config), options.firebase);
        if (options.firebase.genuineForm === false) {
          config.tosURL = '';
          config.privacyPolicyURL = '';
        }
      }
      this.firebase = new _Firebase["default"](config);
      if (options.firebase.genuineForm === false && (0, _classPrivateFieldGet11["default"])(this, _isEmailProvider)) {
        this.initAuthForm();
      }
    }
    this.reCaptcha = new _ReCaptcha["default"](this, options === null || options === void 0 ? void 0 : options.reCaptcha);
    this.reCaptcha.events.subscribe(_eventsName["default"].local.RECAPTCHA_VALIDATION_FAILED, function () {
      _classPrivateMethodGet(_this, _setAuthorizationError, _setAuthorizationError2).call(_this, 'ReCaptcha Validation Failed! Please try again!', 'recaptcha/validation-failed');
    });
    this.reCaptcha.events.subscribe(_eventsName["default"].local.RECAPTCHA_VALIDATION_SUCCESS, function () {
      _classPrivateMethodGet(_this, _resetAuthorizationError, _resetAuthorizationError2).call(_this);
    });
    this.events = new _events["default"]();
    this.confirmation = new _Confirmation.Confirmation();
  }
  (0, _createClass2["default"])(Authentication, [{
    key: "isAuthenticated",
    value: function isAuthenticated() {
      if (this.sdk) {
        return this.sdk.methods.isAuthenticated() || this.token.get() || this.firebaseToken.get();
      } else {
        return !!this.token.get();
      }
    }
  }, {
    key: "toggleFormLoader",
    value: function toggleFormLoader(state) {
      if (this.modal) {
        this.modal.toggleLoader(state);
      }
    }
  }, {
    key: "handleLogin",
    value: function handleLogin(data) {
      var _this2 = this;
      this.firebase.signIn(data.email, data.password).then(function () {})["catch"](function (error) {
        if (!(0, _lodash["default"])(error.message)) {
          _this2.authForm.loginForm.setFormError(error.message, error.code || false);
        }
        if (!(0, _lodash["default"])(_this2.reCaptcha) && _this2.reCaptcha.enabled && !(0, _lodash["default"])(_this2.reCaptcha.grecaptcha)) {
          _this2.reCaptcha.grecaptcha.reset();
        }
      });
    }
  }, {
    key: "handleSignUp",
    value: function handleSignUp(data) {
      var _this3 = this;
      this.firebase.signUp(data.email, data.password).then(function () {
        _this3.firebase.updateName(data.name);
      })["catch"](function (error) {
        if (!(0, _lodash["default"])(error.message)) {
          _this3.authForm.signUpForm.setFormError(error.message, error.code || false);
        }
        if (!(0, _lodash["default"])(_this3.reCaptcha) && _this3.reCaptcha.enabled && !(0, _lodash["default"])(_this3.reCaptcha.grecaptcha)) {
          _this3.reCaptcha.grecaptcha.reset();
        }
      });
    }
  }, {
    key: "executeRecaptcha",
    value: function executeRecaptcha() {
      var _this4 = this;
      this.reCaptcha.grecaptcha.ready(function () {
        _this4.reCaptcha.grecaptcha.execute().then(function () {
          _this4.modal.toggleLoader(true);
        })["catch"](function (error) {
          console.log('EXECUTE RECAPTCHA ERROR:', error);
        });
      });
    }
  }, {
    key: "initAuthForm",
    value: function initAuthForm() {
      var _this5 = this;
      var _ref = (0, _classPrivateFieldGet11["default"])(this, _options).firebase || {},
        tosURL = _ref.tosURL,
        privacyPolicyURL = _ref.privacyPolicyURL,
        termsOfService = _ref.termsOfService,
        providers = _ref.providers,
        passwordSignInIgnoreValidation = _ref.passwordSignInIgnoreValidation,
        authOnPasswordReset = _ref.authOnPasswordReset;
      var _ref2 = (0, _classPrivateFieldGet11["default"])(this, _options).auth || {},
        signUp = _ref2.signUp,
        defaultForm = _ref2.defaultForm,
        forms = _ref2.forms;
      this.authForm = new _AuthForm.AuthForm("#".concat(_constants.WALLKIT_FIREBASE_WK_FORM_PLACEHOLDER_ID), {
        triggerButton: this.firebase.providers.length > 1,
        signUp: signUp !== null && signUp !== void 0 ? signUp : true,
        termsOfService: {
          tosURL: tosURL,
          privacyPolicyURL: privacyPolicyURL,
          termsOfService: termsOfService
        },
        defaultForm: defaultForm || false,
        authProviders: providers || false,
        customizeAuthForms: forms || false,
        passwordSignInIgnoreValidation: passwordSignInIgnoreValidation || false,
        authOnPasswordReset: authOnPasswordReset || false,
        onLogin: function () {
          var _onLogin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
            var proceed;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this5.events.preventiveEvent(_eventsName.PRE_SIGN_IN, data);
                case 2:
                  proceed = _context.sent;
                  if (proceed) {
                    _context.next = 5;
                    break;
                  }
                  return _context.abrupt("return");
                case 5:
                  if (_this5.reCaptcha.enabled) {
                    _this5.executeRecaptcha();
                    _this5.reCaptcha.events.subscribe(_eventsName["default"].local.RECAPTCHA_VALIDATION_SUCCESS, _this5.handleLogin.bind(_this5, data), {
                      once: true
                    });
                  } else {
                    _this5.handleLogin(data);
                  }
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function onLogin(_x) {
            return _onLogin.apply(this, arguments);
          }
          return onLogin;
        }(),
        onSignUp: function onSignUp(data) {
          if (_this5.reCaptcha.enabled) {
            _this5.executeRecaptcha();
            _this5.reCaptcha.events.subscribe(_eventsName["default"].local.RECAPTCHA_VALIDATION_SUCCESS, _this5.handleSignUp.bind(_this5, data), {
              once: true
            });
          } else {
            _this5.handleSignUp(data);
          }
        },
        onGetEmailLink: function () {
          var _onGetEmailLink = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
            return _regenerator["default"].wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _this5.toggleFormLoader(true);
                  _context2.next = 4;
                  return _this5.sdk.client.post({
                    path: '/firebase/email-auth-link',
                    data: {
                      email: data.email
                    }
                  }).then(function (res) {
                    if (res.result) {
                      _this5.authForm.showSuccessEmailLink();
                    } else {
                      _this5.authForm.emailLinkForm.setFormError("Something went wrong", 'auth-email-link/unknown-error');
                    }
                  })["catch"](function (error) {
                    if (!(0, _lodash["default"])(error.message)) {
                      _this5.authForm.emailLinkForm.setFormError(error.message, error.code || false);
                    }
                    _this5.toggleFormLoader(false);
                  });
                case 4:
                  _this5.toggleFormLoader(false);
                  _context2.next = 11;
                  break;
                case 7:
                  _context2.prev = 7;
                  _context2.t0 = _context2["catch"](0);
                  if (!(0, _lodash["default"])(_context2.t0.message)) {
                    _this5.authForm.emailLinkForm.setFormError(_context2.t0.message, _context2.t0.code || false);
                  }
                  _this5.toggleFormLoader(false);
                case 11:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, null, [[0, 7]]);
          }));
          function onGetEmailLink(_x2) {
            return _onGetEmailLink.apply(this, arguments);
          }
          return onGetEmailLink;
        }(),
        onPasswordForgot: function () {
          var _onPasswordForgot = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(data) {
            var success, _yield$_this5$sdk$met, result;
            return _regenerator["default"].wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _this5.toggleFormLoader(true);
                  if (!((0, _classPrivateFieldGet11["default"])(_this5, _options).firebase.genuinePasswordReset === false)) {
                    _context3.next = 10;
                    break;
                  }
                  _context3.next = 5;
                  return _this5.sdk.methods.firebasePasswordReset(data.email);
                case 5:
                  _yield$_this5$sdk$met = _context3.sent;
                  result = _yield$_this5$sdk$met.result;
                  success = result;
                  _context3.next = 13;
                  break;
                case 10:
                  _context3.next = 12;
                  return _this5.firebase.sendPasswordResetEmail(data.email);
                case 12:
                  success = true;
                case 13:
                  if (!success) {
                    _context3.next = 17;
                    break;
                  }
                  _this5.authForm.showSuccessPasswordForgot();
                  _context3.next = 18;
                  break;
                case 17:
                  throw new Error('Something went wrong');
                case 18:
                  _this5.toggleFormLoader(false);
                  _context3.next = 25;
                  break;
                case 21:
                  _context3.prev = 21;
                  _context3.t0 = _context3["catch"](0);
                  if (!(0, _lodash["default"])(_context3.t0.message)) {
                    _this5.authForm.forgotPasswordForm.setFormError(_context3.t0.message, _context3.t0.code || false);
                  }
                  _this5.toggleFormLoader(false);
                case 25:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, null, [[0, 21]]);
          }));
          function onPasswordForgot(_x3) {
            return _onPasswordForgot.apply(this, arguments);
          }
          return onPasswordForgot;
        }(),
        onPasswordReset: function () {
          var _onPasswordReset = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(data) {
            var success, _authOnPasswordReset;
            return _regenerator["default"].wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  _this5.toggleFormLoader(true);
                  _context4.next = 4;
                  return _this5.firebase.sendNewPasswordResetPassword(data.new_password, (0, _classPrivateFieldGet11["default"])(_this5, _oobCode));
                case 4:
                  success = _context4.sent;
                  if (success) {
                    _authOnPasswordReset = (0, _classPrivateFieldGet11["default"])(_this5, _options).firebase.authOnPasswordReset;
                    _this5.authForm.showSuccessPasswordReset();
                    if (_authOnPasswordReset) {
                      _this5.handleLogin({
                        email: success.email,
                        password: data.new_password
                      });
                    }
                  } else {
                    _this5.authForm.resetPasswordForm.setFormError("Something went wrong", 'reset-password/unknown-error');
                  }
                  _this5.toggleFormLoader(false);
                  _context4.next = 13;
                  break;
                case 9:
                  _context4.prev = 9;
                  _context4.t0 = _context4["catch"](0);
                  if (!(0, _lodash["default"])(_context4.t0.message)) {
                    _this5.authForm.resetPasswordForm.setFormError(_context4.t0.message, _context4.t0.code || false);
                  }
                  _this5.toggleFormLoader(false);
                case 13:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, null, [[0, 9]]);
          }));
          function onPasswordReset(_x4) {
            return _onPasswordReset.apply(this, arguments);
          }
          return onPasswordReset;
        }(),
        onAuthFormShow: function onAuthFormShow() {
          _this5.firebase.hideAuthForm();
        },
        onCancel: function onCancel() {
          _this5.firebase.showAuthForm();
          _this5.authForm.reset();
        },
        getShowAuthFormSlug: function getShowAuthFormSlug() {
          return (0, _classPrivateFieldGet11["default"])(_this5, _showAuthFormSlug);
        }
      });
    }
  }, {
    key: "onSuccessAuth",
    value: function onSuccessAuth(data) {
      var _this6 = this;
      this.toggleFormLoader(true);
      var handleAuthError = function handleAuthError(error) {
        _this6.resetAuthProcess(false);
        _this6.toggleFormLoader(false);
        _classPrivateMethodGet(_this6, _setAuthorizationError, _setAuthorizationError2).call(_this6, (error === null || error === void 0 ? void 0 : error.message) || 'Something went wrong!', (error === null || error === void 0 ? void 0 : error.code) || 'unknown-error');
      };
      this.updateFirebaseToken(data.token);
      this.events.notify(_eventsName["default"].local.SUCCESS_FIREBASE_AUTH, data);
      this.authInWallkit(data.token).then(function (status) {
        if (status) {
          _this6.modal.hide();
          if (_this6.authForm) {
            _this6.authForm.hide();
          }
        } else {
          handleAuthError();
        }
        _this6.toggleFormLoader(false);
      })["catch"](function (error) {
        return handleAuthError(error);
      });
    }
  }, {
    key: "authInWallkit",
    value: function () {
      var _authInWallkit = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var _this7 = this;
        var firebaseToken,
          response,
          _args5 = arguments;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              firebaseToken = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : null;
              _classPrivateMethodGet(this, _resetAuthorizationError, _resetAuthorizationError2).call(this);
              if (firebaseToken) {
                _context5.next = 4;
                break;
              }
              throw new Error('Your authorization is broken. Please login again.');
            case 4:
              _context5.prev = 4;
              _context5.next = 7;
              return this.sdk.methods.authenticateWithFirebase(firebaseToken);
            case 7:
              response = _context5.sent;
              this.setToken(response.token);
              _context5.next = 11;
              return new Promise(function (resolve, reject) {
                var userGetTimeout = setTimeout(function () {
                  resolve(false);
                }, 10000);
                var userEventCallback = function userEventCallback() {
                  clearTimeout(userGetTimeout);
                  _this7.sdk.methods.unsubscribeLocalEvent('user', userEventCallback);
                  _this7.events.notify(_eventsName["default"].local.SUCCESS_AUTH, {
                    register: !response.existed
                  });
                  resolve(true);
                };
                _this7.sdk.methods.subscribeLocalEvent('user', userEventCallback);
              });
            case 11:
              return _context5.abrupt("return", _context5.sent);
            case 14:
              _context5.prev = 14;
              _context5.t0 = _context5["catch"](4);
              console.log('error', _context5.t0);
              this.removeTokens();
              throw _context5.t0;
            case 19:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[4, 14]]);
      }));
      function authInWallkit() {
        return _authInWallkit.apply(this, arguments);
      }
      return authInWallkit;
    }()
  }, {
    key: "getDefaultAuthenticationFormContent",
    value: function getDefaultAuthenticationFormContent() {
      var _classPrivateFieldGet2, _classPrivateFieldGet3;
      return "<div>\n                    <div id=\"authorization-error\"></div>\n                    <h2 class=\"wallkit-auth-modal__title\">".concat((_classPrivateFieldGet2 = (_classPrivateFieldGet3 = (0, _classPrivateFieldGet11["default"])(this, _options)) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.modalTitle) !== null && _classPrivateFieldGet2 !== void 0 ? _classPrivateFieldGet2 : 'Sign In', "</h2>\n                    <div ").concat((0, _classPrivateFieldGet11["default"])(this, _authPlaceholderElementSelectorType), "=\"").concat((0, _classPrivateFieldGet11["default"])(this, _authPlaceholderElementSelector).substring(1), "\"></div>\n                </div>");
    }
  }, {
    key: "attachFormPlaceholders",
    value: function attachFormPlaceholders() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _classPrivateFieldGet11["default"])(this, _authPlaceholderElementSelector);
      var placeholders = "<div id=\"".concat(_constants.WALLKIT_FIREBASE_WK_FORM_PLACEHOLDER_ID, "\"></div>\n                            <div id=\"").concat(_constants.WALLKIT_FIREBASE_UI_PLACEHOLDER_ID, "\"></div>");
      var targetElement = document.querySelector(selector);
      if (targetElement) {
        targetElement.innerHTML = placeholders;
      }
    }
  }, {
    key: "render",
    value: function render() {
      if ((0, _classPrivateFieldGet11["default"])(this, _options).auth.renderType === 'selector') {
        var placeholder = document.querySelector((0, _classPrivateFieldGet11["default"])(this, _options).auth.selector);
        if (placeholder) {
          var _classPrivateFieldGet4;
          placeholder.insertAdjacentHTML('beforeend', ((_classPrivateFieldGet4 = (0, _classPrivateFieldGet11["default"])(this, _options)) === null || _classPrivateFieldGet4 === void 0 ? void 0 : _classPrivateFieldGet4.content) || this.getDefaultAuthenticationFormContent());
        }
      } else {
        this.modal = _classPrivateMethodGet(this, _createModal, _createModal2).call(this);
        this.modal.init();
      }
      this.attachFormPlaceholders();
    }
  }, {
    key: "show",
    value: function () {
      var _show = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(authFormSlug) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              (0, _classPrivateFieldSet2["default"])(this, _showAuthFormSlug, authFormSlug !== null && authFormSlug !== void 0 ? authFormSlug : '');
              if ((0, _classPrivateFieldGet11["default"])(this, _options).firebase.genuineForm === false) {
                if (this.authForm) {
                  this.authForm.defaultForm = authFormSlug;
                  if (!this.authForm.triggerButton || !this.authForm.triggerButton.isVisible) {
                    this.authForm.showDefaultForm();
                  }
                }
              }
              this.modal.show();
              if (!this.firebase.isUiShown) {
                this.checkFirebaseInit();
              }
            case 4:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function show(_x5) {
        return _show.apply(this, arguments);
      }
      return show;
    }()
  }, {
    key: "checkFirebaseInit",
    value: function checkFirebaseInit() {
      var _this8 = this;
      if (!this.firebase.loaded) {
        this.firebase.events.subscribe(_eventsName.FIREBASE_LOADED, function () {
          return _this8.checkFirebaseInit();
        }, {
          once: true
        });
      } else {
        if (!this.firebase.initialized) {
          this.firebase.events.subscribe(_eventsName.FIREBASE_INIT, function () {
            return _this8.checkFirebaseInit();
          }, {
            once: true
          });
        } else {
          var shownTimeout = null;
          if (!this.firebase.isUiShown) {
            shownTimeout = setTimeout(function () {
              _this8.firebase.startFirebaseUi();
              _this8.checkFirebaseInit();
            }, 2000);
            this.firebase.events.subscribe(_eventsName.FIREBASE_UI_SHOWN, function () {
              if (shownTimeout) {
                clearTimeout(shownTimeout);
              }
            });
          }
        }
      }
    }
  }, {
    key: "updateFirebaseToken",
    value: function updateFirebaseToken(token) {
      this.firebaseToken.set(token);
      this.frame.sendEvent(_eventsName["default"].wallkit.WALLKIT_EVENT_FIREBASE_TOKEN, token);
      this.sdk.methods.setFirebaseToken(token);
    }
  }, {
    key: "onFirebaseInit",
    value: function onFirebaseInit() {
      var _this9 = this;
      try {
        var _this$authForm;
        if ((0, _classPrivateFieldGet11["default"])(this, _options).firebase.genuineForm !== false) {
          if (this.reCaptcha.enabled && this.reCaptcha.loaded) {
            this.reCaptcha.initCaptchaProcess();
          } else if (!this.reCaptcha.loaded) {
            this.events.subscribe(_eventsName["default"].local.RECAPTCHA_LOADED, function () {
              _this9.reCaptcha.initCaptchaProcess();
            }, {
              once: true
            });
          }
        } else if ((_this$authForm = this.authForm) !== null && _this$authForm !== void 0 && _this$authForm.triggerButton) {
          this.authForm.triggerButton.events.notify(_eventsName.FIREBASE_UI_SHOWN, true);
        }
        this.toggleFormLoader(false);
      } catch (e) {
        this.toggleFormLoader(false);
      }
    }
  }, {
    key: "removeToken",
    value: function removeToken() {
      this.token.remove();
    }
  }, {
    key: "removeFirebaseToken",
    value: function removeFirebaseToken() {
      this.firebaseToken.remove();
    }
  }, {
    key: "removeTokens",
    value: function removeTokens() {
      this.removeToken();
      this.removeFirebaseToken();
    }
  }, {
    key: "setToken",
    value: function setToken(token) {
      this.token.set(token);
      this.sdk.methods.setToken(token);
    }
  }, {
    key: "resetAuthProcess",
    value: function resetAuthProcess() {
      var reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.firebase.reset();
      this.firebase.showAuthForm();
      if (this.firebase.genuineForm === false && reset) {
        this.authForm.reset();
      }
      if (!(0, _lodash["default"])(this.reCaptcha) && this.reCaptcha.enabled && !(0, _lodash["default"])(this.reCaptcha.grecaptcha)) {
        this.reCaptcha.grecaptcha.reset();
      }
    }
  }, {
    key: "logout",
    value: function () {
      var _logout = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        var success;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              this.removeToken();
              _context7.next = 4;
              return this.firebase.logout();
            case 4:
              success = _context7.sent;
              if (!success) {
                _context7.next = 20;
                break;
              }
              this.removeFirebaseToken();
              if (!(this.reCaptcha.enabled && !this.reCaptcha.loaded)) {
                _context7.next = 12;
                break;
              }
              _context7.next = 10;
              return this.reCaptcha.init();
            case 10:
              _context7.next = 13;
              break;
            case 12:
              if (this.reCaptcha.loaded) {
                this.resetAuthProcess();
                if (!(0, _lodash["default"])(this.reCaptcha) && this.reCaptcha.enabled && !(0, _lodash["default"])(this.reCaptcha.grecaptcha)) {
                  this.reCaptcha.grecaptcha.reset();
                }
                if ((0, _classPrivateFieldGet11["default"])(this, _options).firebase.genuineForm !== false) {
                  this.reCaptcha.initCaptchaProcess();
                }
              }
            case 13:
              if (!this.sdk.methods.isAuthenticated()) {
                _context7.next = 18;
                break;
              }
              _context7.next = 16;
              return this.sdk.methods.logout();
            case 16:
              _context7.next = 19;
              break;
            case 18:
              if (this.token.get() || this.firebaseToken.get()) {
                this.frame.sendEvent(_eventsName["default"].wallkit.WALLKIT_LOGOUT, true);
              }
            case 19:
              this.events.notify(_eventsName["default"].local.LOGOUT, true);
            case 20:
              this.resetAuthProcess();
              _context7.next = 27;
              break;
            case 23:
              _context7.prev = 23;
              _context7.t0 = _context7["catch"](0);
              console.log('ERROR:', _context7.t0);
              this.resetAuthProcess();
            case 27:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[0, 23]]);
      }));
      function logout() {
        return _logout.apply(this, arguments);
      }
      return logout;
    }()
  }, {
    key: "dispatchTokens",
    value: function dispatchTokens() {
      if (this.isAuthenticated()) {
        this.dispatchWallkitToken();
        this.dispatchFirebaseToken();
      }
    }
  }, {
    key: "dispatchWallkitToken",
    value: function dispatchWallkitToken() {
      var token = this.token.get();
      if (token) {
        this.frame.sendEvent(_eventsName["default"].wallkit.WALLKIT_EVENT_TOKEN, token);
      }
    }
  }, {
    key: "dispatchFirebaseToken",
    value: function dispatchFirebaseToken() {
      var token = this.firebaseToken.get();
      if (token) {
        this.frame.sendEvent(_eventsName["default"].wallkit.WALLKIT_EVENT_FIREBASE_TOKEN, token);
      }
    }
  }, {
    key: "handleTicketsToken",
    value: function () {
      var _handleTicketsToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(ticketPassAuthToken) {
        var response, userCredential, firebaseToken;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return this.sdk.methods.getAuthTokensByTicketPassToken(ticketPassAuthToken);
            case 3:
              response = _context8.sent;
              if (!response) {
                _context8.next = 19;
                break;
              }
              _context8.next = 7;
              return this.firebase.authWithCustomToken(response.firebase_custom_token);
            case 7:
              userCredential = _context8.sent;
              _context8.next = 10;
              return userCredential.user.getIdToken();
            case 10:
              firebaseToken = _context8.sent;
              this.updateFirebaseToken(firebaseToken);
              this.setToken(response.token);
              _context8.next = 15;
              return this.sdk.methods.getUser();
            case 15:
              this.dispatchTokens();
              this.events.notify(_eventsName["default"].local.SUCCESS_AUTH, true);
              this.events.notify(_eventsName["default"].local.TICKETS_TOKEN_AUTH_SUCCESS, true);
              return _context8.abrupt("return", true);
            case 19:
              return _context8.abrupt("return", false);
            case 22:
              _context8.prev = 22;
              _context8.t0 = _context8["catch"](0);
              console.error(_context8.t0);
              return _context8.abrupt("return", _context8.t0);
            case 26:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[0, 22]]);
      }));
      function handleTicketsToken(_x6) {
        return _handleTicketsToken.apply(this, arguments);
      }
      return handleTicketsToken;
    }()
  }, {
    key: "handleExternalAuthProvider",
    value: function () {
      var _handleExternalAuthProvider = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(externalUserId) {
        var response, userCredential, firebaseToken;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              if (externalUserId) {
                _context9.next = 3;
                break;
              }
              return _context9.abrupt("return", false);
            case 3:
              _context9.next = 5;
              return this.sdk.methods.getAuthTokensByExternalUserId(externalUserId);
            case 5:
              response = _context9.sent;
              if (response) {
                _context9.next = 8;
                break;
              }
              return _context9.abrupt("return", false);
            case 8:
              _context9.next = 10;
              return this.firebase.authWithCustomToken(response.firebase_custom_token);
            case 10:
              userCredential = _context9.sent;
              _context9.next = 13;
              return userCredential.user.getIdToken();
            case 13:
              firebaseToken = _context9.sent;
              if (!(!response.token || !firebaseToken)) {
                _context9.next = 16;
                break;
              }
              return _context9.abrupt("return", false);
            case 16:
              this.updateFirebaseToken(firebaseToken);
              this.setToken(response.token);
              _context9.next = 20;
              return this.sdk.methods.getUser();
            case 20:
              this.dispatchTokens();
              this.events.notify(_eventsName["default"].local.SUCCESS_AUTH, true);
              this.events.notify(_eventsName["default"].local.EXTERNAL_PROVIDER_TOKEN_AUTH_SUCCESS, true);
              return _context9.abrupt("return", true);
            case 26:
              _context9.prev = 26;
              _context9.t0 = _context9["catch"](0);
              console.error(_context9.t0);
              return _context9.abrupt("return", _context9.t0);
            case 30:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[0, 26]]);
      }));
      function handleExternalAuthProvider(_x7) {
        return _handleExternalAuthProvider.apply(this, arguments);
      }
      return handleExternalAuthProvider;
    }()
  }, {
    key: "onFirebaseAuthFail",
    value: function onFirebaseAuthFail(error) {
      this.toggleFormLoader(false);
    }
  }, {
    key: "handleOneTapResponse",
    value: function handleOneTapResponse(_ref3) {
      var credential = _ref3.credential;
      this.frame.sendEvent(_eventsName["default"].wallkit.WALLKIT_EVENT_ONE_TAP_SIGN_IN, credential);
    }
  }, {
    key: "showResetPassword",
    value: function showResetPassword(oobCode) {
      if (!(0, _lodash["default"])(oobCode)) {
        (0, _classPrivateFieldSet2["default"])(this, _oobCode, oobCode);
        if (this.authForm.triggerButton) {
          this.authForm.triggerButton.hide();
        }
        this.firebase.hideAuthForm();
        this.authForm.showForm(_AuthForm.RESET_PASSWORD_FORM_SLUG);
        this.modal.show();
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _classPrivateFieldGet5;
      if (!!((_classPrivateFieldGet5 = (0, _classPrivateFieldGet11["default"])(this, _options)) !== null && _classPrivateFieldGet5 !== void 0 && _classPrivateFieldGet5.firebase)) {
        // Render recaptcha before the firebase init if not custom FB form
        if ((0, _classPrivateFieldGet11["default"])(this, _options).firebase.genuineForm !== false) {
          if (this.reCaptcha.enabled) {
            if (!this.isAuthenticated()) {
              this.reCaptcha.init();
            }
          }
        }
        this.render();
        this.firebase.init();
        if (this.authForm) {
          this.authForm.render();
          this.reCaptcha.init();
        }
      }
      _classPrivateMethodGet(this, _initListeners, _initListeners2).call(this);
      _classPrivateMethodGet(this, _checkIfResetPasswordURL, _checkIfResetPasswordURL2).call(this);
      _classPrivateMethodGet(this, _checkIfAuthEmailLinkURL, _checkIfAuthEmailLinkURL2).call(this);
    }
  }]);
  return Authentication;
}();
exports["default"] = Authentication;
function _get_authPlaceholderElementSelector() {
  var _classPrivateFieldGet6, _classPrivateFieldGet7, _classPrivateFieldGet8, _classPrivateFieldGet9;
  var selector = (_classPrivateFieldGet6 = (_classPrivateFieldGet7 = (0, _classPrivateFieldGet11["default"])(this, _options)) === null || _classPrivateFieldGet7 === void 0 ? void 0 : (_classPrivateFieldGet8 = _classPrivateFieldGet7.auth) === null || _classPrivateFieldGet8 === void 0 ? void 0 : (_classPrivateFieldGet9 = _classPrivateFieldGet8.firebase) === null || _classPrivateFieldGet9 === void 0 ? void 0 : _classPrivateFieldGet9.elementSelector) !== null && _classPrivateFieldGet6 !== void 0 ? _classPrivateFieldGet6 : "#".concat(_constants.WALLKIT_AUTH_FORM_PLACEHOLDER_ID);
  return (0, _DOM.normalizeSelector)(selector);
}
function _get_authPlaceholderElementSelectorType() {
  switch ((0, _classPrivateFieldGet11["default"])(this, _authPlaceholderElementSelector).charAt(0)) {
    case '#':
      return 'id';
    case '.':
      return 'class';
  }
  return 'id';
}
function _get_isEmailProvider() {
  var providers = (0, _classPrivateFieldGet11["default"])(this, _options).firebase.providers;
  if ((0, _lodash["default"])(providers)) return false;
  if (!Array.isArray(providers)) return false;
  var _iterator = _createForOfIteratorHelper(providers),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var provider = _step.value;
      if (typeof provider === "string" && provider.toLowerCase() === 'email') return true;
      if (typeof provider !== "string" && !(0, _lodash["default"])(provider.provider) && provider.provider.toLowerCase() === 'email') return true;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return false;
}
function _createModal2() {
  var _classPrivateFieldGet10;
  return new _modal["default"]({
    modalName: 'auth-modal',
    content: ((_classPrivateFieldGet10 = (0, _classPrivateFieldGet11["default"])(this, _options)) === null || _classPrivateFieldGet10 === void 0 ? void 0 : _classPrivateFieldGet10.content) || this.getDefaultAuthenticationFormContent(),
    className: 'wallkit-auth-modal',
    initialLoader: true
  });
}
function _initListeners2() {
  var _this10 = this;
  this.events.subscribe(_eventsName["default"].local.FRAME_MESSAGE, function (_ref4) {
    var name = _ref4.name,
      value = _ref4.value;
    switch (name) {
      case _eventsName["default"].wallkit.WALLKIT_EVENT_TOKEN:
        if (value) {
          _this10.setToken(value);
        }
        break;
      case _eventsName["default"].wallkit.WALLKIT_EVENT_AUTH:
      case _eventsName["default"].wallkit.WALLKIT_EVENT_REGISTRATION:
      case _eventsName["default"].wallkit.WALLKIT_EVENT_GET_TOKEN:
        if (value) {
          var token = value.token;
          _this10.setToken(token);
        }
        break;
      case _eventsName["default"].wallkit.WALLKIT_FIREBASE_TOKEN:
        _this10.firebaseToken.set(value);
        if (_this10.sdk) {
          _this10.sdk.methods.setFirebaseToken(value);
        }
        break;
      case _eventsName["default"].wallkit.WALLKIT_EVENT_FIREBASE_CUSTOM_TOKEN:
        if (value) {
          _this10.firebase.authWithCustomToken(value);
        }
        break;
      case _eventsName["default"].wallkit.WALLKIT_LOGOUT:
        if (_this10.isAuthenticated()) {
          _this10.logout();
        }
        break;
    }
  });
}
function _setAuthorizationError2(errorMessage, errorCode) {
  if (this.authForm) {
    this.authForm.handleError(errorMessage, errorCode);
  } else {
    var errorPlaceholder = document.getElementById('authorization-error');
    if (errorPlaceholder) {
      if (errorMessage === null) {
        errorPlaceholder.innerHTML = '';
      } else {
        errorPlaceholder.innerHTML = errorMessage || 'Something went wrong!';
      }
    }
  }
}
function _resetAuthorizationError2() {
  _classPrivateMethodGet(this, _setAuthorizationError, _setAuthorizationError2).call(this, null);
}
function _checkIfResetPasswordURL2() {
  var oobCode = (0, _url.parseResetPasswordOobCodeHash)();
  if (oobCode) {
    this.showResetPassword(oobCode);
    (0, _url.resetHash)();
  }
}
function _checkIfAuthEmailLinkURL2() {
  return _checkIfAuthEmailLinkURL3.apply(this, arguments);
}
function _checkIfAuthEmailLinkURL3() {
  _checkIfAuthEmailLinkURL3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
    var authData, _ref5, oobcode, email, resJson;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          authData = (0, _url.parseAuthEmailLinkOobCodeHash)();
          _ref5 = authData || {}, oobcode = _ref5.oobcode, email = _ref5.email;
          if (!(!(0, _lodash["default"])(oobcode) && !(0, _lodash["default"])(email))) {
            _context10.next = 8;
            break;
          }
          (0, _url.resetHash)();
          _context10.next = 6;
          return this.firebase.authEmailLink(oobcode, email);
        case 6:
          resJson = _context10.sent;
          this.onSuccessAuth({
            operationType: "signIn",
            token: resJson.idToken
          });
        case 8:
        case "end":
          return _context10.stop();
      }
    }, _callee10, this);
  }));
  return _checkIfAuthEmailLinkURL3.apply(this, arguments);
}

/***/ }),

/***/ 5613:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _classPrivateFieldGet5 = _interopRequireDefault(__webpack_require__(5194));
var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(8478));
var _events2 = _interopRequireDefault(__webpack_require__(9889));
var _eventsName = _interopRequireDefault(__webpack_require__(6073));
var _sdk2 = _interopRequireDefault(__webpack_require__(4753));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _popup = /*#__PURE__*/new WeakMap();
var _config = /*#__PURE__*/new WeakMap();
var _events = /*#__PURE__*/new WeakMap();
var _sdk = /*#__PURE__*/new WeakMap();
var _classForHandleClick = /*#__PURE__*/new WeakMap();
var _classThatReactOnTheUsersStatus = /*#__PURE__*/new WeakMap();
var _classThatReactOnTheUsersPlans = /*#__PURE__*/new WeakMap();
var _classThatReactOnTheUsersEvents = /*#__PURE__*/new WeakMap();
var _isDebug = /*#__PURE__*/new WeakSet();
var _initWkListeners = /*#__PURE__*/new WeakSet();
var _initUIListeners = /*#__PURE__*/new WeakSet();
var _setDataWkHasAccessInBody = /*#__PURE__*/new WeakSet();
var _debugUserStatus = /*#__PURE__*/new WeakSet();
var _debugElementsClickingOnWhichOpensPopups = /*#__PURE__*/new WeakSet();
var _debugElementsThatReactToTheUsersStatus = /*#__PURE__*/new WeakSet();
var _debugElementsThatReactToTheUsersPlans = /*#__PURE__*/new WeakSet();
var _debugElementsThatReactToTheUsersEvents = /*#__PURE__*/new WeakSet();
var Call = /*#__PURE__*/function () {
  function Call(popup, config) {
    var _config$call$classFor, _config$call, _config$call$classTha, _config$call2, _config$call$classTha2, _config$call3, _config$call$classTha3, _config$call4;
    (0, _classCallCheck2["default"])(this, Call);
    _classPrivateMethodInitSpec(this, _debugElementsThatReactToTheUsersEvents);
    _classPrivateMethodInitSpec(this, _debugElementsThatReactToTheUsersPlans);
    _classPrivateMethodInitSpec(this, _debugElementsThatReactToTheUsersStatus);
    _classPrivateMethodInitSpec(this, _debugElementsClickingOnWhichOpensPopups);
    _classPrivateMethodInitSpec(this, _debugUserStatus);
    _classPrivateMethodInitSpec(this, _setDataWkHasAccessInBody);
    _classPrivateMethodInitSpec(this, _initUIListeners);
    _classPrivateMethodInitSpec(this, _initWkListeners);
    _classPrivateMethodInitSpec(this, _isDebug);
    _classPrivateFieldInitSpec(this, _popup, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _config, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _events, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _sdk, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _classForHandleClick, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _classThatReactOnTheUsersStatus, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _classThatReactOnTheUsersPlans, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _classThatReactOnTheUsersEvents, {
      writable: true,
      value: void 0
    });
    (0, _classPrivateFieldSet2["default"])(this, _popup, popup);
    (0, _classPrivateFieldSet2["default"])(this, _config, config);
    (0, _classPrivateFieldSet2["default"])(this, _events, new _events2["default"]());
    (0, _classPrivateFieldSet2["default"])(this, _sdk, new _sdk2["default"]());
    (0, _classPrivateFieldSet2["default"])(this, _classForHandleClick, (_config$call$classFor = config === null || config === void 0 ? void 0 : (_config$call = config.call) === null || _config$call === void 0 ? void 0 : _config$call.classForHandleClick) !== null && _config$call$classFor !== void 0 ? _config$call$classFor : 'wk-call');
    (0, _classPrivateFieldSet2["default"])(this, _classThatReactOnTheUsersStatus, (_config$call$classTha = config === null || config === void 0 ? void 0 : (_config$call2 = config.call) === null || _config$call2 === void 0 ? void 0 : _config$call2.classThatReactOnTheUsersStatus) !== null && _config$call$classTha !== void 0 ? _config$call$classTha : 'wk-call-status-user');
    (0, _classPrivateFieldSet2["default"])(this, _classThatReactOnTheUsersPlans, (_config$call$classTha2 = config === null || config === void 0 ? void 0 : (_config$call3 = config.call) === null || _config$call3 === void 0 ? void 0 : _config$call3.classThatReactOnTheUsersPlans) !== null && _config$call$classTha2 !== void 0 ? _config$call$classTha2 : 'wk-call-status-plans');
    (0, _classPrivateFieldSet2["default"])(this, _classThatReactOnTheUsersEvents, (_config$call$classTha3 = config === null || config === void 0 ? void 0 : (_config$call4 = config.call) === null || _config$call4 === void 0 ? void 0 : _config$call4.classThatReactOnTheUsersEvents) !== null && _config$call$classTha3 !== void 0 ? _config$call$classTha3 : 'wk-call-status-events');
  }
  (0, _createClass2["default"])(Call, [{
    key: "getUserStatus",
    value: function getUserStatus() {
      return (0, _classPrivateFieldGet5["default"])(this, _sdk).methods.isAuthenticated() ? 'authorized' : 'guest';
    }
  }, {
    key: "setAllDataWkStatusesInDOMElements",
    value: function setAllDataWkStatusesInDOMElements(response) {
      this.setDataWkStatusUserInDOMElements();
      this.setDataWkStatusPlansInDOMElements(response);
      this.setDataWkStatusEventsInDOMElements(response);
    }
  }, {
    key: "setDataWkStatusUserInDOMElements",
    value: function setDataWkStatusUserInDOMElements() {
      if (_classPrivateMethodGet(this, _isDebug, _isDebug2).call(this)) {
        console.log("Set user status: \"".concat(this.getUserStatus(), "\" for elements:"));
      }
      // find all elements with class `${this.#classThatReactOnTheUsersStatus}`
      var _iterator = _createForOfIteratorHelper(document.querySelectorAll(".".concat((0, _classPrivateFieldGet5["default"])(this, _classThatReactOnTheUsersStatus)))),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var element = _step.value;
          if (_classPrivateMethodGet(this, _isDebug, _isDebug2).call(this)) {
            console.log(element);
          }
          element.dataset.wkCallStatusUser = this.getUserStatus();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "setDataWkStatusPlansInDOMElements",
    value: function setDataWkStatusPlansInDOMElements() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        subscriptions = _ref.subscriptions;
      var plans = 'undefined';
      if (Array.isArray(subscriptions) && subscriptions.length > 0) {
        plans = subscriptions.map(function (s) {
          return s.plan.slug;
        }).join(' ');
      }
      if (_classPrivateMethodGet(this, _isDebug, _isDebug2).call(this)) {
        console.log("Set plans status: \"".concat(plans, "\" for elements:"));
      }
      // find all elements with class `${this.#classThatReactOnTheUsersPlans}`
      var _iterator2 = _createForOfIteratorHelper(document.querySelectorAll(".".concat((0, _classPrivateFieldGet5["default"])(this, _classThatReactOnTheUsersPlans)))),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var element = _step2.value;
          if (_classPrivateMethodGet(this, _isDebug, _isDebug2).call(this)) {
            console.log(element);
          }
          element.dataset.wkCallStatusPlans = plans;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "setDataWkStatusEventsInDOMElements",
    value: function setDataWkStatusEventsInDOMElements() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        assigned_tickets = _ref2.assigned_tickets;
      var events = 'undefined';
      if (Array.isArray(assigned_tickets) && assigned_tickets.length > 0) {
        events = assigned_tickets.map(function (s) {
          return s.ti_event.slug;
        }).join(' ');
      }
      if (_classPrivateMethodGet(this, _isDebug, _isDebug2).call(this)) {
        console.log("Set events status: \"".concat(events, "\" for elements:"));
      }
      // find all elements with class `${this.#classThatReactOnTheUsersEvents}`
      var _iterator3 = _createForOfIteratorHelper(document.querySelectorAll(".".concat((0, _classPrivateFieldGet5["default"])(this, _classThatReactOnTheUsersEvents)))),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var element = _step3.value;
          if (_classPrivateMethodGet(this, _isDebug, _isDebug2).call(this)) {
            console.log(element);
          }
          element.dataset.wkCallStatusEvents = events;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "getWallkitUserData",
    value: function getWallkitUserData() {
      var _this = this;
      (0, _classPrivateFieldGet5["default"])(this, _sdk).client.get({
        path: "/user"
      }).then(function (response) {
        console.log(response);
        _this.setAllDataWkStatusesInDOMElements(response);
      })["catch"](function (error) {
        console.log('WK Call ERROR:', error);
        _this.setAllDataWkStatusesInDOMElements();
      });
    }
  }, {
    key: "removeAllDataWkStatuses",
    value: function removeAllDataWkStatuses() {
      if (_classPrivateMethodGet(this, _isDebug, _isDebug2).call(this)) {
        console.log("Remove all wallkit statuses from all DOM Elements.");
        console.log('Remove data-wk-call-user-has-access from body element.');
      }
      delete document.body.dataset.wkCallUserHasAccess;
      var _iterator4 = _createForOfIteratorHelper(document.querySelectorAll(".".concat((0, _classPrivateFieldGet5["default"])(this, _classThatReactOnTheUsersStatus)))),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var element = _step4.value;
          if (_classPrivateMethodGet(this, _isDebug, _isDebug2).call(this)) {
            console.log('Remove data-wk-call-status-user from element:', element);
          }
          delete element.dataset.wkCallStatusUser;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      var _iterator5 = _createForOfIteratorHelper(document.querySelectorAll(".".concat((0, _classPrivateFieldGet5["default"])(this, _classThatReactOnTheUsersPlans)))),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _element = _step5.value;
          if (_classPrivateMethodGet(this, _isDebug, _isDebug2).call(this)) {
            console.log('Remove data-wk-call-status-plans from element:', _element);
          }
          delete _element.dataset.wkCallStatusPlans;
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      var _iterator6 = _createForOfIteratorHelper(document.querySelectorAll(".".concat((0, _classPrivateFieldGet5["default"])(this, _classThatReactOnTheUsersEvents)))),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _element2 = _step6.value;
          if (_classPrivateMethodGet(this, _isDebug, _isDebug2).call(this)) {
            console.log('Remove data-wk-call-status-events from element:', _element2);
          }
          delete _element2.dataset.wkCallStatusEvents;
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  }, {
    key: "init",
    value: function init() {
      if (_classPrivateMethodGet(this, _isDebug, _isDebug2).call(this)) {
        var _classPrivateFieldGet2;
        console.log('Init Wallkit Call with config: ', (_classPrivateFieldGet2 = (0, _classPrivateFieldGet5["default"])(this, _config)) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.call);
        _classPrivateMethodGet(this, _debugUserStatus, _debugUserStatus2).call(this);
        _classPrivateMethodGet(this, _debugElementsClickingOnWhichOpensPopups, _debugElementsClickingOnWhichOpensPopups2).call(this);
        _classPrivateMethodGet(this, _debugElementsThatReactToTheUsersStatus, _debugElementsThatReactToTheUsersStatus2).call(this);
        _classPrivateMethodGet(this, _debugElementsThatReactToTheUsersPlans, _debugElementsThatReactToTheUsersPlans2).call(this);
        _classPrivateMethodGet(this, _debugElementsThatReactToTheUsersEvents, _debugElementsThatReactToTheUsersEvents2).call(this);
      }
      _classPrivateMethodGet(this, _initWkListeners, _initWkListeners2).call(this);
      _classPrivateMethodGet(this, _initUIListeners, _initUIListeners2).call(this);
      if ((0, _classPrivateFieldGet5["default"])(this, _sdk).methods.isAuthenticated()) {
        this.getWallkitUserData();
      } else {
        this.setAllDataWkStatusesInDOMElements();
      }
    }
  }]);
  return Call;
}();
exports["default"] = Call;
function _isDebug2() {
  var _classPrivateFieldGet3, _classPrivateFieldGet4;
  return !!((_classPrivateFieldGet3 = (0, _classPrivateFieldGet5["default"])(this, _config)) !== null && _classPrivateFieldGet3 !== void 0 && (_classPrivateFieldGet4 = _classPrivateFieldGet3.call) !== null && _classPrivateFieldGet4 !== void 0 && _classPrivateFieldGet4.debug);
}
function _initWkListeners2() {
  var _this2 = this;
  (0, _classPrivateFieldGet5["default"])(this, _events).subscribe(_eventsName["default"].local.FRAME_MESSAGE, function (_ref3) {
    var name = _ref3.name,
      _ = _ref3._;
    switch (name) {
      case _eventsName["default"].wallkit.WALLKIT_EVENT_USER:
        _this2.getWallkitUserData();
        break;
    }
  });
  (0, _classPrivateFieldGet5["default"])(this, _events).subscribe(_eventsName["default"].local.SUCCESS_AUTH, function (value) {
    if (_classPrivateMethodGet(_this2, _isDebug, _isDebug2).call(_this2)) {
      console.log('subscribe ventsNames.local.SUCCESS_AUTH', value);
    }
    _this2.getWallkitUserData();
  });
  (0, _classPrivateFieldGet5["default"])(this, _events).subscribe(_eventsName["default"].local.LOGOUT, function () {
    _this2.setAllDataWkStatusesInDOMElements();
    _classPrivateMethodGet(_this2, _setDataWkHasAccessInBody, _setDataWkHasAccessInBody2).call(_this2, false);
  });
  (0, _classPrivateFieldGet5["default"])(this, _events).subscribe(_eventsName["default"].local.CHECK_USER_ACCESS, function (value) {
    if (_classPrivateMethodGet(_this2, _isDebug, _isDebug2).call(_this2)) {
      console.log('subscribe ventsNames.local.CHECK_USER_ACCESS', value);
    }
    _classPrivateMethodGet(_this2, _setDataWkHasAccessInBody, _setDataWkHasAccessInBody2).call(_this2, value);
  });
}
function _initUIListeners2() {
  var _this3 = this;
  document.body.addEventListener('click', function (e) {
    try {
      if (_classPrivateMethodGet(_this3, _isDebug, _isDebug2).call(_this3)) {
        console.log('Click on element: ', e.target);
        console.log("Does element have class ".concat((0, _classPrivateFieldGet5["default"])(_this3, _classForHandleClick), ": ").concat(e.target.classList.contains((0, _classPrivateFieldGet5["default"])(_this3, _classForHandleClick))));
      }

      // skip if target element has no class `${this.#classForHandleClick}`
      if (!e.target.classList.contains("".concat((0, _classPrivateFieldGet5["default"])(_this3, _classForHandleClick)))) return;

      // retrieve all classes for element
      var classes = Array.from(e.target.classList);
      var slugAndParamStr = classes.find(function (className) {
        return className.startsWith('wk–');
      });
      if (_classPrivateMethodGet(_this3, _isDebug, _isDebug2).call(_this3)) {
        console.log('Popup\'s slug and params: ', slugAndParamStr);
        console.log('Exit if slug and param === "undefined"');
      }

      // skip if we have no popup slug
      if (typeof slugAndParamStr === "undefined") return;
      var slugAndParamArr = slugAndParamStr.split("–");
      var popupSlug = slugAndParamArr[1];
      var popupParams = slugAndParamArr[2];
      if (_classPrivateMethodGet(_this3, _isDebug, _isDebug2).call(_this3)) {
        console.log('Popup\'s slug: ', popupSlug);
        console.log('Popup\'s params: ', popupParams);
      }

      // open popup without params
      if (typeof popupSlug !== "undefined" && typeof popupParams === "undefined") {
        if (_classPrivateMethodGet(_this3, _isDebug, _isDebug2).call(_this3)) {
          console.log('Open popup without params. Only with slug: ', popupSlug);
        }
        (0, _classPrivateFieldGet5["default"])(_this3, _popup).open(popupSlug);
        e.preventDefault();
        return;
      }

      // getting key and value params
      var popupParamsArr = popupParams.split('-');
      var key = popupParamsArr[0];
      var value = popupParamsArr[1];
      if (_classPrivateMethodGet(_this3, _isDebug, _isDebug2).call(_this3)) {
        console.log('Popup\'s param key: ', key);
        console.log('Popup\'s param value: ', value);
      }

      //open popup with params
      if (typeof key !== "undefined" && typeof value !== "undefined") {
        // make mo readable key for user
        if (key === 'ticket') {
          key = 'ti_event_ticket';
        }

        // prepare params for popup
        var params = JSON.stringify({
          item_type: key,
          item_key: value
        });
        var path = "".concat(popupSlug, "?[").concat(params, "]");
        if (_classPrivateMethodGet(_this3, _isDebug, _isDebug2).call(_this3)) {
          console.log('Open popup with params: ', path);
        }
        (0, _classPrivateFieldGet5["default"])(_this3, _popup).open(path);
        e.preventDefault();
      }
    } catch (error) {
      console.log('WK Call ERROR:', error);
    }
  });
}
function _setDataWkHasAccessInBody2(value) {
  if (_classPrivateMethodGet(this, _isDebug, _isDebug2).call(this)) {
    console.log("Set user has access data \"".concat(value, "\" in body element."));
  }
  document.body.dataset.wkCallUserHasAccess = value;
}
function _debugUserStatus2() {
  console.log("User status: ", this.getUserStatus());
}
function _debugElementsClickingOnWhichOpensPopups2() {
  console.log('Elements, clicking on which opens popups:');
  var _iterator7 = _createForOfIteratorHelper(document.querySelectorAll(".".concat((0, _classPrivateFieldGet5["default"])(this, _classForHandleClick)))),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var element = _step7.value;
      console.log(element);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
}
function _debugElementsThatReactToTheUsersStatus2() {
  console.log('Elements that react to the user\'s status:');
  var _iterator8 = _createForOfIteratorHelper(document.querySelectorAll(".".concat((0, _classPrivateFieldGet5["default"])(this, _classThatReactOnTheUsersStatus)))),
    _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var element = _step8.value;
      console.log(element);
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
}
function _debugElementsThatReactToTheUsersPlans2() {
  console.log('Elements that react to the user\'s plans:');
  var _iterator9 = _createForOfIteratorHelper(document.querySelectorAll(".".concat((0, _classPrivateFieldGet5["default"])(this, _classThatReactOnTheUsersPlans)))),
    _step9;
  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var element = _step9.value;
      console.log(element);
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }
}
function _debugElementsThatReactToTheUsersEvents2() {
  console.log('Elements that react to the user\'s events:');
  var _iterator10 = _createForOfIteratorHelper(document.querySelectorAll(".".concat((0, _classPrivateFieldGet5["default"])(this, _classThatReactOnTheUsersEvents)))),
    _step10;
  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var element = _step10.value;
      console.log(element);
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }
}

/***/ }),

/***/ 8390:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(8047));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(366));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7240));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _classPrivateFieldGet2 = _interopRequireDefault(__webpack_require__(5194));
var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(8478));
var _sdk = _interopRequireDefault(__webpack_require__(4753));
var _events2 = _interopRequireDefault(__webpack_require__(9889));
var _eventsName = __webpack_require__(6073);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _options = /*#__PURE__*/new WeakMap();
var _events = /*#__PURE__*/new WeakMap();
var _optionsCheck = /*#__PURE__*/new WeakSet();
var _encodeQueryData = /*#__PURE__*/new WeakSet();
var _formatCheckAccessRequestPath = /*#__PURE__*/new WeakSet();
var Content = /*#__PURE__*/function () {
  function Content(content) {
    var _options2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2["default"])(this, Content);
    _classPrivateMethodInitSpec(this, _formatCheckAccessRequestPath);
    _classPrivateMethodInitSpec(this, _encodeQueryData);
    _classPrivateMethodInitSpec(this, _optionsCheck);
    _classPrivateFieldInitSpec(this, _options, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _events, {
      writable: true,
      value: void 0
    });
    this.content = content;
    (0, _classPrivateFieldSet2["default"])(this, _options, _classPrivateMethodGet(this, _optionsCheck, _optionsCheck2).call(this, _options2));
    this.sdk = new _sdk["default"]();
    (0, _classPrivateFieldSet2["default"])(this, _events, new _events2["default"]());
    this.accessCount = 0;
    this.accessCountLimit = 0;
  }
  (0, _createClass2["default"])(Content, [{
    key: "formatTaxonomies",
    value: function formatTaxonomies(taxonomies) {
      var formatted = {};
      var taxonimiesTitles = [];
      var taxonimiesKeys = [];
      var _loop = function _loop() {
        var _taxonomies$taxKey;
        taxonimiesKeys.push(taxKey);
        taxonimiesTitles.push(taxonomies[taxKey].label);
        var termKeysKey = "term_keys[".concat(taxKey, "]");
        var termTitleKey = "term_titles[".concat(taxKey, "]");
        if ((_taxonomies$taxKey = taxonomies[taxKey]) !== null && _taxonomies$taxKey !== void 0 && _taxonomies$taxKey.items) {
          formatted[termKeysKey] = [];
          formatted[termTitleKey] = [];
          taxonomies[taxKey].items.forEach(function (item) {
            formatted[termKeysKey].push(item.slug);
            formatted[termTitleKey].push(item.name);
          });
        }
        formatted[termKeysKey] = formatted[termKeysKey].join(',');
        formatted[termTitleKey] = formatted[termTitleKey].join(',');
      };
      for (var taxKey in taxonomies) {
        _loop();
      }
      formatted.taxonomy_titles = taxonimiesTitles.join(',');
      formatted.taxonomy_keys = taxonimiesKeys.join(',');
      return formatted;
    }
  }, {
    key: "checkContentAccessAndSync",
    value: function checkContentAccessAndSync(content) {
      var _this = this;
      var queryParams = {
        type: content.type,
        title: content.title,
        link: content.link || window.location.href,
        image: content.image || null
      };
      Object.assign(queryParams, this.formatTaxonomies(content.taxonomies));
      return this.sdk.client.get({
        path: _classPrivateMethodGet(this, _formatCheckAccessRequestPath, _formatCheckAccessRequestPath2).call(this, content.id, queryParams)
      }).then(function (response) {
        if (_this.sdk.methods.isAuthenticated()) {
          _this.getAccessDetails(content.id);
        }
        (0, _classPrivateFieldGet2["default"])(_this, _events).notify(_eventsName.CHECK_USER_ACCESS, response.allow);
        return {
          allowed: response.allow,
          data: response
        };
      })["catch"](function (error) {
        (0, _classPrivateFieldGet2["default"])(_this, _events).notify(_eventsName.CHECK_USER_ACCESS, false);
        return {
          allowed: false,
          error: error
        };
      });
    }
  }, {
    key: "checkAccess",
    value: function () {
      var _checkAccess = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return this.sdk.methods.checkAccess(this.content.id);
            case 3:
              response = _context.sent;
              if (!(this.sdk.methods.isAuthenticated() || (0, _classPrivateFieldGet2["default"])(this, _options).checkAccessDetails)) {
                _context.next = 7;
                break;
              }
              _context.next = 7;
              return this.getAccessDetails(this.content.id);
            case 7:
              (0, _classPrivateFieldGet2["default"])(this, _events).notify(_eventsName.CHECK_USER_ACCESS, response.allow);
              return _context.abrupt("return", {
                allowed: response.allow,
                data: response
              });
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              if (!(_context.t0.error === 'incorrect_content_key')) {
                _context.next = 15;
                break;
              }
              return _context.abrupt("return", this.checkContentAccessAndSync(this.content));
            case 15:
              (0, _classPrivateFieldGet2["default"])(this, _events).notify(_eventsName.CHECK_USER_ACCESS, false);
              return _context.abrupt("return", {
                allowed: false,
                error: _context.t0
              });
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 11]]);
      }));
      function checkAccess() {
        return _checkAccess.apply(this, arguments);
      }
      return checkAccess;
    }()
  }, {
    key: "getAccessDetails",
    value: function getAccessDetails(contentId) {
      var _this2 = this;
      return this.sdk.client.get({
        path: "/user/content-access-details/".concat(contentId)
      }).then(function (response) {
        var _response$content_ter, _response$content_ter2, _response$content_typ, _response$content_typ2;
        _this2.accessCount = 0;
        _this2.accessCountLimit = 0;
        var checkDone = false;
        _this2.accessDetails = _objectSpread({}, response || false);
        if (response !== null && response !== void 0 && (_response$content_ter = response.content_terms) !== null && _response$content_ter !== void 0 && (_response$content_ter2 = _response$content_ter.items) !== null && _response$content_ter2 !== void 0 && _response$content_ter2.length) {
          if (!response.content_terms.exclude) {
            _this2.accessCount = response.content_terms.usedLimitInPeriod;
            _this2.accessCountLimit = response.content_terms.accessLimit;
          } else {
            checkDone = true;
          }
        }
        if (response !== null && response !== void 0 && (_response$content_typ = response.content_types) !== null && _response$content_typ !== void 0 && (_response$content_typ2 = _response$content_typ.items) !== null && _response$content_typ2 !== void 0 && _response$content_typ2.length && !checkDone) {
          if (!response.content_types.exclude) {
            _this2.accessCount = response.content_terms.usedLimitInPeriod < _this2.accessCount ? response.content_terms.usedLimitInPeriod : _this2.accessCount;
            _this2.accessCountLimit = response.content_terms.accessLimit < _this2.accessCountLimit ? response.content_terms.accessLimit : _this2.accessCountLimit;
          } else {
            _this2.accessCount = 0;
            _this2.accessCountLimit = 0;
          }
        }
        return {
          accessCount: _this2.accessCount,
          accessCountLimit: _this2.accessCountLimit
        };
      })["catch"](function (error) {
        return error;
      });
    }
  }]);
  return Content;
}();
exports["default"] = Content;
function _optionsCheck2(options) {
  if (typeof options.checkAccessDetails === "undefined") {
    options.checkAccessDetails = false;
  }
  return options;
}
function _encodeQueryData2(data) {
  var ret = [];
  for (var d in data) {
    if (data[d] !== undefined) {
      ret.push("".concat(encodeURIComponent(d), "=").concat(encodeURIComponent(data[d])));
    }
  }
  return ret.join('&');
}
function _formatCheckAccessRequestPath2(id, params) {
  var query = _classPrivateMethodGet(this, _encodeQueryData, _encodeQueryData2).call(this, params);
  return "/user/content-sync-and-check/".concat(id, "?").concat(query);
}

/***/ }),

/***/ 6073:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.WALLKIT_SDK_LOADED = exports.WALLKIT_LOGOUT = exports.WALLKIT_FRAME_ROUTE_CHANGE = exports.WALLKIT_FRAME_READY = exports.WALLKIT_FIREBASE_TOKEN = exports.WALLKIT_EVENT_USER = exports.WALLKIT_EVENT_TOKEN = exports.WALLKIT_EVENT_REGISTRATION = exports.WALLKIT_EVENT_ONE_TAP_SIGN_IN = exports.WALLKIT_EVENT_GET_TOKEN = exports.WALLKIT_EVENT_FIREBASE_TOKEN = exports.WALLKIT_EVENT_FIREBASE_CUSTOM_TOKEN = exports.WALLKIT_EVENT_EXTERNAL_PROVIDER_TOKEN = exports.WALLKIT_EVENT_CHANGE_LANGUAGE = exports.WALLKIT_EVENT_AUTH = exports.WALLKIT_CHANGE_FRAME = exports.TICKETS_TOKEN_AUTH_SUCCESS = exports.SUCCESS_FIREBASE_AUTH = exports.SUCCESS_AUTH = exports.RECAPTCHA_VALIDATION_SUCCESS = exports.RECAPTCHA_VALIDATION_FAILED = exports.RECAPTCHA_LOADED = exports.PRE_SIGN_IN = exports.MODAL_CREATED = exports.MODAL_CLOSED = exports.LOGOUT = exports.FRAME_MOUNTED = exports.FRAME_MODAL_CLOSED = exports.FRAME_MESSAGE = exports.FRAME_CREATED = exports.FIREBASE_UI_SHOWN = exports.FIREBASE_LOADED = exports.FIREBASE_INIT = exports.EXTERNAL_PROVIDER_TOKEN_AUTH_SUCCESS = exports.DEFAULT_AUTH_FORM_SLUG_UPDATED = exports.CHECK_USER_ACCESS = exports.AUTH_MODAL_CLOSED = void 0;
// Local Events Names
var FRAME_CREATED = 'frame-created';
exports.FRAME_CREATED = FRAME_CREATED;
var FRAME_MOUNTED = 'frame-mounted';
exports.FRAME_MOUNTED = FRAME_MOUNTED;
var MODAL_CREATED = 'modal-created';
exports.MODAL_CREATED = MODAL_CREATED;
var SUCCESS_AUTH = 'success-auth';
exports.SUCCESS_AUTH = SUCCESS_AUTH;
var PRE_SIGN_IN = 'pre-sign-in';
exports.PRE_SIGN_IN = PRE_SIGN_IN;
var SUCCESS_FIREBASE_AUTH = 'success-firebase-auth';
exports.SUCCESS_FIREBASE_AUTH = SUCCESS_FIREBASE_AUTH;
var WALLKIT_SDK_LOADED = 'wallkit-js-sdk-loaded';
exports.WALLKIT_SDK_LOADED = WALLKIT_SDK_LOADED;
var FRAME_MESSAGE = 'frame-message';
exports.FRAME_MESSAGE = FRAME_MESSAGE;
var AUTH_MODAL_CLOSED = 'auth-modal-closed';
exports.AUTH_MODAL_CLOSED = AUTH_MODAL_CLOSED;
var FRAME_MODAL_CLOSED = 'frame-modal-closed';
exports.FRAME_MODAL_CLOSED = FRAME_MODAL_CLOSED;
var MODAL_CLOSED = 'modal-closed';
exports.MODAL_CLOSED = MODAL_CLOSED;
var RECAPTCHA_LOADED = 'recaptcha-loaded';
exports.RECAPTCHA_LOADED = RECAPTCHA_LOADED;
var RECAPTCHA_VALIDATION_FAILED = 'recaptcha-validation-failed';
exports.RECAPTCHA_VALIDATION_FAILED = RECAPTCHA_VALIDATION_FAILED;
var RECAPTCHA_VALIDATION_SUCCESS = 'recaptcha-validation-success';
exports.RECAPTCHA_VALIDATION_SUCCESS = RECAPTCHA_VALIDATION_SUCCESS;
var TICKETS_TOKEN_AUTH_SUCCESS = 'tickets-token-auth-success';
exports.TICKETS_TOKEN_AUTH_SUCCESS = TICKETS_TOKEN_AUTH_SUCCESS;
var FIREBASE_LOADED = 'firebase-loaded';
exports.FIREBASE_LOADED = FIREBASE_LOADED;
var FIREBASE_INIT = 'firebase-init';
exports.FIREBASE_INIT = FIREBASE_INIT;
var FIREBASE_UI_SHOWN = 'firebase-ui-shown';
exports.FIREBASE_UI_SHOWN = FIREBASE_UI_SHOWN;
var CHECK_USER_ACCESS = 'check-user-access';
exports.CHECK_USER_ACCESS = CHECK_USER_ACCESS;
var EXTERNAL_PROVIDER_TOKEN_AUTH_SUCCESS = 'external-provider-token-auth-success';
exports.EXTERNAL_PROVIDER_TOKEN_AUTH_SUCCESS = EXTERNAL_PROVIDER_TOKEN_AUTH_SUCCESS;
var LOGOUT = 'logout';
exports.LOGOUT = LOGOUT;
var DEFAULT_AUTH_FORM_SLUG_UPDATED = 'default-auth-form-slug-updated';

// Wallkit Events Names
exports.DEFAULT_AUTH_FORM_SLUG_UPDATED = DEFAULT_AUTH_FORM_SLUG_UPDATED;
var WALLKIT_CHANGE_FRAME = 'wk-event-modal';
exports.WALLKIT_CHANGE_FRAME = WALLKIT_CHANGE_FRAME;
var WALLKIT_LOGOUT = 'wk-event-logout';
exports.WALLKIT_LOGOUT = WALLKIT_LOGOUT;
var WALLKIT_FIREBASE_TOKEN = 'wk-firebase-token';
exports.WALLKIT_FIREBASE_TOKEN = WALLKIT_FIREBASE_TOKEN;
var WALLKIT_EVENT_FIREBASE_TOKEN = 'wk-event-firebase-token';
exports.WALLKIT_EVENT_FIREBASE_TOKEN = WALLKIT_EVENT_FIREBASE_TOKEN;
var WALLKIT_EVENT_TOKEN = 'wk-event-token';
exports.WALLKIT_EVENT_TOKEN = WALLKIT_EVENT_TOKEN;
var WALLKIT_FRAME_READY = 'wk-event-modals-ready';
exports.WALLKIT_FRAME_READY = WALLKIT_FRAME_READY;
var WALLKIT_EVENT_GET_TOKEN = 'wk-event-get-token';
exports.WALLKIT_EVENT_GET_TOKEN = WALLKIT_EVENT_GET_TOKEN;
var WALLKIT_EVENT_AUTH = 'wk-event-auth';
exports.WALLKIT_EVENT_AUTH = WALLKIT_EVENT_AUTH;
var WALLKIT_EVENT_USER = 'wk-event-user';
exports.WALLKIT_EVENT_USER = WALLKIT_EVENT_USER;
var WALLKIT_EVENT_REGISTRATION = 'wk-event-registration';
exports.WALLKIT_EVENT_REGISTRATION = WALLKIT_EVENT_REGISTRATION;
var WALLKIT_EVENT_ONE_TAP_SIGN_IN = 'wk-event-one-tap-sign-in';
exports.WALLKIT_EVENT_ONE_TAP_SIGN_IN = WALLKIT_EVENT_ONE_TAP_SIGN_IN;
var WALLKIT_FRAME_ROUTE_CHANGE = 'wk-event-route-change';
exports.WALLKIT_FRAME_ROUTE_CHANGE = WALLKIT_FRAME_ROUTE_CHANGE;
var WALLKIT_EVENT_FIREBASE_CUSTOM_TOKEN = 'wk-event-firebase-custom-token';
exports.WALLKIT_EVENT_FIREBASE_CUSTOM_TOKEN = WALLKIT_EVENT_FIREBASE_CUSTOM_TOKEN;
var WALLKIT_EVENT_CHANGE_LANGUAGE = 'wk-event-change-language';
exports.WALLKIT_EVENT_CHANGE_LANGUAGE = WALLKIT_EVENT_CHANGE_LANGUAGE;
var WALLKIT_EVENT_EXTERNAL_PROVIDER_TOKEN = 'wk-event-external-provider-token';
exports.WALLKIT_EVENT_EXTERNAL_PROVIDER_TOKEN = WALLKIT_EVENT_EXTERNAL_PROVIDER_TOKEN;
var _default = {
  local: {
    FRAME_CREATED: FRAME_CREATED,
    FRAME_MOUNTED: FRAME_MOUNTED,
    MODAL_CREATED: MODAL_CREATED,
    SUCCESS_AUTH: SUCCESS_AUTH,
    SUCCESS_FIREBASE_AUTH: SUCCESS_FIREBASE_AUTH,
    FRAME_MESSAGE: FRAME_MESSAGE,
    AUTH_MODAL_CLOSED: AUTH_MODAL_CLOSED,
    FRAME_MODAL_CLOSED: FRAME_MODAL_CLOSED,
    MODAL_CLOSED: MODAL_CLOSED,
    RECAPTCHA_LOADED: RECAPTCHA_LOADED,
    RECAPTCHA_VALIDATION_FAILED: RECAPTCHA_VALIDATION_FAILED,
    RECAPTCHA_VALIDATION_SUCCESS: RECAPTCHA_VALIDATION_SUCCESS,
    TICKETS_TOKEN_AUTH_SUCCESS: TICKETS_TOKEN_AUTH_SUCCESS,
    CHECK_USER_ACCESS: CHECK_USER_ACCESS,
    PRE_SIGN_IN: PRE_SIGN_IN,
    EXTERNAL_PROVIDER_TOKEN_AUTH_SUCCESS: EXTERNAL_PROVIDER_TOKEN_AUTH_SUCCESS,
    DEFAULT_AUTH_FORM_SLUG_UPDATED: DEFAULT_AUTH_FORM_SLUG_UPDATED,
    LOGOUT: LOGOUT
  },
  wallkit: {
    FRAME_CREATED: FRAME_CREATED,
    WALLKIT_LOGOUT: WALLKIT_LOGOUT,
    WALLKIT_FIREBASE_TOKEN: WALLKIT_FIREBASE_TOKEN,
    WALLKIT_EVENT_FIREBASE_TOKEN: WALLKIT_EVENT_FIREBASE_TOKEN,
    WALLKIT_EVENT_TOKEN: WALLKIT_EVENT_TOKEN,
    WALLKIT_FRAME_READY: WALLKIT_FRAME_READY,
    WALLKIT_EVENT_GET_TOKEN: WALLKIT_EVENT_GET_TOKEN,
    WALLKIT_EVENT_AUTH: WALLKIT_EVENT_AUTH,
    WALLKIT_EVENT_USER: WALLKIT_EVENT_USER,
    WALLKIT_EVENT_REGISTRATION: WALLKIT_EVENT_REGISTRATION,
    WALLKIT_EVENT_ONE_TAP_SIGN_IN: WALLKIT_EVENT_ONE_TAP_SIGN_IN,
    WALLKIT_FRAME_ROUTE_CHANGE: WALLKIT_FRAME_ROUTE_CHANGE,
    WALLKIT_EVENT_FIREBASE_CUSTOM_TOKEN: WALLKIT_EVENT_FIREBASE_CUSTOM_TOKEN,
    WALLKIT_EVENT_CHANGE_LANGUAGE: WALLKIT_EVENT_CHANGE_LANGUAGE,
    WALLKIT_EVENT_EXTERNAL_PROVIDER_TOKEN: WALLKIT_EVENT_EXTERNAL_PROVIDER_TOKEN
  }
};
exports["default"] = _default;

/***/ }),

/***/ 9889:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(8047));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7240));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var Events = /*#__PURE__*/function () {
  function Events() {
    (0, _classCallCheck2["default"])(this, Events);
    if (!!Events.instance) {
      return Events.instance;
    }
    Events.instance = this;
    this.listeners = [];
    return this;
  }
  (0, _createClass2["default"])(Events, [{
    key: "subscribe",
    value: function subscribe(eventName, callback, options) {
      this.listeners.push({
        name: eventName,
        callback: callback,
        options: options
      });
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(eventName, callback) {
      this.listeners = this.listeners.filter(function (event) {
        return event.name !== eventName || event.callback !== callback;
      });
    }
  }, {
    key: "notify",
    value: function notify(eventName, data) {
      var onceIndexesToRemove = [];
      this.listeners.forEach(function (event, index) {
        if (eventName === event.name) {
          var _event$options;
          event.callback(data);
          if (!!(event !== null && event !== void 0 && (_event$options = event.options) !== null && _event$options !== void 0 && _event$options.once)) {
            onceIndexesToRemove.push(index);
          }
        }
      });
      this.listeners = this.listeners.filter(function (item, index) {
        return !onceIndexesToRemove.includes(index);
      });
    }
  }, {
    key: "getEventByName",
    value: function getEventByName(eventName) {
      var _this$listeners;
      return (_this$listeners = this.listeners) === null || _this$listeners === void 0 ? void 0 : _this$listeners.find(function (item) {
        return item.name === eventName;
      });
    }
  }, {
    key: "preventiveEvent",
    value: function () {
      var _preventiveEvent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(eventName, data) {
        var event, proceed;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              event = this.getEventByName(eventName);
              if (!event) {
                _context.next = 12;
                break;
              }
              _context.prev = 2;
              _context.next = 5;
              return event.callback(data);
            case 5:
              proceed = _context.sent;
              return _context.abrupt("return", !!proceed);
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              console.log('ERROR:', _context.t0);
            case 12:
              return _context.abrupt("return", true);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[2, 9]]);
      }));
      function preventiveEvent(_x, _x2) {
        return _preventiveEvent.apply(this, arguments);
      }
      return preventiveEvent;
    }()
  }]);
  return Events;
}();
exports["default"] = Events;

/***/ }),

/***/ 447:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TriggerButton = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _classPrivateFieldGet5 = _interopRequireDefault(__webpack_require__(5194));
var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(8478));
var _DOM = __webpack_require__(2909);
var _events = _interopRequireDefault(__webpack_require__(9889));
var _eventsName = __webpack_require__(6073);
var _AuthForm = __webpack_require__(8031);
var _constants = __webpack_require__(9066);
var _lodash = _interopRequireDefault(__webpack_require__(5828));
var _lodash2 = _interopRequireDefault(__webpack_require__(4174));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _fullLabel = /*#__PURE__*/new WeakMap();
var _emailButonIconUrl = /*#__PURE__*/new WeakMap();
var _classNames = /*#__PURE__*/new WeakMap();
var _buttonsTitleSelector = /*#__PURE__*/new WeakMap();
var _options = /*#__PURE__*/new WeakMap();
var _changeAuthButtonsTitleColor = /*#__PURE__*/new WeakSet();
var _changeAuthButtonsTitle = /*#__PURE__*/new WeakSet();
var TriggerButton = /*#__PURE__*/function () {
  function TriggerButton(selector, options) {
    (0, _classCallCheck2["default"])(this, TriggerButton);
    _classPrivateMethodInitSpec(this, _changeAuthButtonsTitle);
    _classPrivateMethodInitSpec(this, _changeAuthButtonsTitleColor);
    _classPrivateFieldInitSpec(this, _fullLabel, {
      writable: true,
      value: {
        email: 'Sign in with email',
        emaillink: 'Sign by email link'
      }
    });
    _classPrivateFieldInitSpec(this, _emailButonIconUrl, {
      writable: true,
      value: 'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg'
    });
    _classPrivateFieldInitSpec(this, _classNames, {
      writable: true,
      value: {
        email: _constants.TRIGGER_EMAIL_BUTTON_CLASS_NAME,
        emaillink: _constants.TRIGGER_EMAILLINK_BUTTON_CLASS_NAME
      }
    });
    _classPrivateFieldInitSpec(this, _buttonsTitleSelector, {
      writable: true,
      value: {
        email: _constants.TRIGGER_EMAIL_BUTTON_TITLE_SELECTOR,
        emaillink: _constants.TRIGGER_EMAILLINK_BUTTON_TITLE_SELECTOR,
        google: _constants.TRIGGER_GOOGLE_BUTTON_TITLE_SELECTOR
      }
    });
    _classPrivateFieldInitSpec(this, _options, {
      writable: true,
      value: void 0
    });
    (0, _classPrivateFieldSet2["default"])(this, _options, this.checkOptions(options));
    this.events = new _events["default"]();
    this.selector = selector;
    this.elements = {};
    var _ref = (0, _classPrivateFieldGet5["default"])(this, _options) || {},
      email = _ref.email,
      emaillink = _ref.emaillink;
    if (!(0, _lodash["default"])(email)) {
      this.elements.email = this.createElement('email');
      if (options.emailOnClick) {
        this.elements.email.addEventListener('click', options.emailOnClick.bind(this));
      }
    }
    if (!(0, _lodash["default"])(emaillink)) {
      this.elements.emaillink = this.createElement('emaillink');
      if (options.emaillinkOnClick) {
        this.elements.emaillink.addEventListener('click', options.emaillinkOnClick.bind(this));
      }
    }
    this.subscribeEventForChanges();
  }
  (0, _createClass2["default"])(TriggerButton, [{
    key: "checkOptions",
    value: function checkOptions(options) {
      if (!Array.isArray(options.authProviders)) return options;
      var _iterator = _createForOfIteratorHelper(options.authProviders),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var authProvider = _step.value;
          if (typeof authProvider !== "string" && (0, _lodash["default"])(authProvider.provider)) continue;
          var aProvider = typeof authProvider === "string" ? authProvider : authProvider.provider.toLowerCase();
          options[aProvider] = {
            fullLabel: '',
            signInLabel: '',
            signUpLabel: '',
            label: '',
            backgroundColor: '',
            textColor: '',
            textColorStyle: '',
            iconUrl: '',
            styles: {}
          };
          var fullLabel = authProvider.fullLabel,
            signInLabel = authProvider.signInLabel,
            signUpLabel = authProvider.signUpLabel,
            buttonColor = authProvider.buttonColor,
            buttonTextColor = authProvider.buttonTextColor,
            iconUrl = authProvider.iconUrl;
          if (aProvider === 'email') {
            options[aProvider].fullLabel = (0, _classPrivateFieldGet5["default"])(this, _fullLabel)[aProvider];
            options[aProvider].label = (0, _classPrivateFieldGet5["default"])(this, _fullLabel)[aProvider];
            options[aProvider].iconUrl = (0, _classPrivateFieldGet5["default"])(this, _emailButonIconUrl);
          }
          if (!(0, _lodash["default"])(fullLabel)) {
            options[aProvider].fullLabel = fullLabel;
            options[aProvider].label = fullLabel;
          }
          if (!(0, _lodash["default"])(signInLabel)) {
            options[aProvider].signInLabel = signInLabel;
            if (options.defaultFormSlug === _AuthForm.SIGN_IN_FORM_SLUG) {
              options[aProvider].label = signInLabel;
            }
          }
          if (!(0, _lodash["default"])(signUpLabel)) {
            options[aProvider].signUpLabel = signUpLabel;
            if (options.defaultFormSlug === _AuthForm.SIGN_UP_FORM_SLUG) {
              options[aProvider].label = signUpLabel;
            }
          }
          if (!(0, _lodash["default"])(buttonColor)) {
            options[aProvider].backgroundColor = buttonColor;
            options[aProvider].styles.backgroundColor = buttonColor;
          }
          if (!(0, _lodash["default"])(buttonTextColor)) {
            options[aProvider].textColor = buttonTextColor;
            options[aProvider].textColorStyle = " style=\"color:".concat(buttonTextColor, "\"");
          }
          if (!(0, _lodash["default"])(iconUrl)) {
            options[aProvider].iconUrl = iconUrl;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return options;
    }
  }, {
    key: "subscribeEventForChanges",
    value: function subscribeEventForChanges() {
      var _this = this;
      /** change Firebase button titles on load */
      this.events.subscribe(_eventsName.FIREBASE_UI_SHOWN, function () {
        _classPrivateMethodGet(_this, _changeAuthButtonsTitle, _changeAuthButtonsTitle2).call(_this, (0, _classPrivateFieldGet5["default"])(_this, _options).defaultFormSlug, false);
        _classPrivateMethodGet(_this, _changeAuthButtonsTitleColor, _changeAuthButtonsTitleColor2).call(_this);
      }, {
        once: true
      });

      /** change titles on auth form change */
      this.events.subscribe(_eventsName.DEFAULT_AUTH_FORM_SLUG_UPDATED, function (value) {
        var newValue = (0, _lodash2["default"])(value, 'new', false);
        var oldValue = (0, _lodash2["default"])(value, 'old', false);
        if (newValue && newValue !== oldValue) {
          _classPrivateMethodGet(_this, _changeAuthButtonsTitle, _changeAuthButtonsTitle2).call(_this, newValue, oldValue);
        }
      });
    }
  }, {
    key: "createElement",
    value: function createElement(key) {
      var _classPrivateFieldGet2;
      var elementKey = key || 'email';
      var className = (_classPrivateFieldGet2 = (0, _classPrivateFieldGet5["default"])(this, _classNames)[elementKey]) !== null && _classPrivateFieldGet2 !== void 0 ? _classPrivateFieldGet2 : _constants.TRIGGER_BUTTON_CLASS_NAME;
      var buttonTitleSelector = "wk-auth-form-button-".concat(elementKey, "-title");
      var _classPrivateFieldGet3 = (0, _classPrivateFieldGet5["default"])(this, _options)[elementKey],
        iconUrl = _classPrivateFieldGet3.iconUrl,
        textColorStyle = _classPrivateFieldGet3.textColorStyle,
        label = _classPrivateFieldGet3.label,
        styles = _classPrivateFieldGet3.styles;
      return (0, _DOM.createElement)('div', {
        className: className,
        innerHTML: "\n                <span class=\"firebaseui-idp-icon-wrapper\">\n                    <img class=\"firebaseui-idp-icon\" alt=\"\" src=\"".concat(iconUrl, "\">\n                </span>\n                <span class=\"").concat(buttonTitleSelector, " firebaseui-idp-text firebaseui-idp-text-long\"").concat(textColorStyle, ">").concat(label, "</span>"),
        styles: styles
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this2 = this;
      if (!(0, _lodash["default"])(this.elements) && Object.keys(this.elements).length) {
        Object.keys(this.elements).forEach(function (key) {
          _this2.elements[key].style.display = 'none';
        });
      }
    }
  }, {
    key: "show",
    value: function show() {
      var _this3 = this;
      if (!(0, _lodash["default"])(this.elements) && Object.keys(this.elements).length) {
        Object.keys(this.elements).forEach(function (key) {
          _this3.elements[key].style.display = 'block';
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var targetElement = document.querySelector(this.selector);
      if (targetElement) {
        if (!(0, _lodash["default"])(this.elements) && Object.keys(this.elements).length) {
          Object.keys(this.elements).forEach(function (key) {
            targetElement.appendChild(_this4.elements[key]);
          });
        }
      }
    }
  }, {
    key: "isVisible",
    get: function get() {
      var _this5 = this;
      var isVisible = false;
      if ((0, _lodash["default"])(this.elements)) {
        return false;
      }
      if (Object.keys(this.elements).length) {
        Object.keys(this.elements).forEach(function (key) {
          if (window.getComputedStyle(_this5.elements[key])) {
            isVisible = window.getComputedStyle(_this5.elements[key]).getPropertyValue('display') === 'block';
            return isVisible;
          }
        });
      }
      return isVisible;
    }
  }]);
  return TriggerButton;
}();
exports.TriggerButton = TriggerButton;
function _changeAuthButtonsTitleColor2() {
  var _this6 = this;
  if (!Array.isArray((0, _classPrivateFieldGet5["default"])(this, _options).authProviders)) return;
  var _iterator2 = _createForOfIteratorHelper((0, _classPrivateFieldGet5["default"])(this, _options).authProviders),
    _step2;
  try {
    var _loop = function _loop() {
      var authProvider = _step2.value;
      if ((0, _lodash["default"])(authProvider.provider)) return "continue";
      var aProvider = authProvider.provider.toLowerCase();
      if (aProvider !== 'email') {
        var textColor = (0, _lodash2["default"])((0, _classPrivateFieldGet5["default"])(_this6, _options)[aProvider], 'textColor', false);
        if (!textColor) return "continue";
        var buttonsTitle = document.querySelectorAll((0, _classPrivateFieldGet5["default"])(_this6, _buttonsTitleSelector)[aProvider]);
        if (buttonsTitle) {
          buttonsTitle.forEach(function (item) {
            item.style.color = textColor;
          });
        }
      }
    };
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _ret = _loop();
      if (_ret === "continue") continue;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
function _changeAuthButtonsTitle2(authNew, authOld) {
  var _this7 = this;
  if (!Array.isArray((0, _classPrivateFieldGet5["default"])(this, _options).authProviders)) return;
  if (authNew && authNew !== authOld && [_AuthForm.SIGN_UP_FORM_SLUG, _AuthForm.SIGN_IN_FORM_SLUG].includes(authNew)) {
    var _iterator3 = _createForOfIteratorHelper((0, _classPrivateFieldGet5["default"])(this, _options).authProviders),
      _step3;
    try {
      var _loop2 = function _loop2() {
        var authProvider = _step3.value;
        if ((0, _lodash["default"])(authProvider.provider)) return "continue";
        var aProvider = authProvider.provider.toLowerCase();
        var _classPrivateFieldGet4 = (0, _classPrivateFieldGet5["default"])(_this7, _options)[aProvider],
          signInLabel = _classPrivateFieldGet4.signInLabel,
          signUpLabel = _classPrivateFieldGet4.signUpLabel,
          fullLabel = _classPrivateFieldGet4.fullLabel;
        if (!(0, _lodash["default"])((0, _classPrivateFieldGet5["default"])(_this7, _options)[aProvider]) && (!(0, _lodash["default"])(signInLabel) || !(0, _lodash["default"])(signUpLabel))) {
          var buttonsTitle = document.querySelectorAll((0, _classPrivateFieldGet5["default"])(_this7, _buttonsTitleSelector)[aProvider]);
          var title = authNew === _AuthForm.SIGN_UP_FORM_SLUG ? signUpLabel || fullLabel : signInLabel || fullLabel;
          if (buttonsTitle && title) {
            buttonsTitle.forEach(function (item) {
              item.innerHTML = title;
            });
          }
        }
      };
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _ret2 = _loop2();
        if (_ret2 === "continue") continue;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }
}

/***/ }),

/***/ 4195:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CheckBoxField = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(1185));
var _inherits2 = _interopRequireDefault(__webpack_require__(7964));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8442));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(7474));
var _index = __webpack_require__(4751);
var _DOM = __webpack_require__(2909);
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var CheckBoxField = /*#__PURE__*/function (_FormField) {
  (0, _inherits2["default"])(CheckBoxField, _FormField);
  var _super = _createSuper(CheckBoxField);
  function CheckBoxField(options) {
    var _this;
    (0, _classCallCheck2["default"])(this, CheckBoxField);
    _this = _super.call(this, options);
    _this.type = 'checkbox';
    _this.input.addEventListener('change', _this.validate.bind((0, _assertThisInitialized2["default"])(_this)));
    return _this;
  }
  (0, _createClass2["default"])(CheckBoxField, [{
    key: "createCheckMark",
    value: function createCheckMark() {
      return (0, _DOM.createElement)('span', {
        className: 'wk-form-field__checkmark'
      });
    }
  }, {
    key: "createWrapper",
    value: function createWrapper() {
      return (0, _DOM.createElement)('div', {
        className: 'wk-form-field wk-form-field--checkbox'
      });
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.input.checked;
    }
  }, {
    key: "render",
    value: function render(options) {
      this.inputWrapper = this.createInputWrapper();
      var label = this.createLabel(options.label, options.name);
      label.appendChild(this.input);
      label.appendChild(this.createCheckMark());
      this.inputWrapper.appendChild(label);
      this.wrapper.appendChild(this.inputWrapper);
    }
  }]);
  return CheckBoxField;
}(_index.FormField);
exports.CheckBoxField = CheckBoxField;

/***/ }),

/***/ 4386:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PasswordField = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(1185));
var _get2 = _interopRequireDefault(__webpack_require__(4560));
var _inherits2 = _interopRequireDefault(__webpack_require__(7964));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8442));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(7474));
var _classPrivateFieldGet2 = _interopRequireDefault(__webpack_require__(5194));
var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(8478));
var _index = __webpack_require__(4751);
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _options = /*#__PURE__*/new WeakMap();
var _hintDescription = /*#__PURE__*/new WeakMap();
var _passwordRuleLength = /*#__PURE__*/new WeakMap();
var _passwordRuleUppercase = /*#__PURE__*/new WeakMap();
var _passwordRuleLowercase = /*#__PURE__*/new WeakMap();
var _passwordRuleDigit = /*#__PURE__*/new WeakMap();
var _passwordRuleSpecial = /*#__PURE__*/new WeakMap();
var _passwordPrefix = /*#__PURE__*/new WeakMap();
var _passwordPostfix = /*#__PURE__*/new WeakMap();
var _testPasswordRule = /*#__PURE__*/new WeakSet();
var _testPassword = /*#__PURE__*/new WeakSet();
var PasswordField = /*#__PURE__*/function (_FormField) {
  (0, _inherits2["default"])(PasswordField, _FormField);
  var _super = _createSuper(PasswordField);
  function PasswordField(options) {
    var _options$ignoreValida;
    var _this;
    (0, _classCallCheck2["default"])(this, PasswordField);
    _this = _super.call(this, options);
    _classPrivateMethodInitSpec((0, _assertThisInitialized2["default"])(_this), _testPassword);
    _classPrivateMethodInitSpec((0, _assertThisInitialized2["default"])(_this), _testPasswordRule);
    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _options, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _hintDescription, {
      writable: true,
      value: "<div>\n            <span>Password should match requirements:</span>\n            <ul class=\"wk-field-list\">\n                <li>at least 1 uppercase character (A-Z)</li>\n                <li>at least 1 lowercase character (a-z)</li>\n                <li>at least 1 digit (0-9)</li>\n                <li>at least 1 special character (punctuation)</li>\n                <li>at least 8 characters length</li>\n            </ul>\n        </div>"
    });
    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _passwordRuleLength, {
      writable: true,
      value: "At least 8 characters length"
    });
    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _passwordRuleUppercase, {
      writable: true,
      value: "At least 1 uppercase character (A-Z)"
    });
    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _passwordRuleLowercase, {
      writable: true,
      value: "At least 1 lowercase character (a-z)"
    });
    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _passwordRuleDigit, {
      writable: true,
      value: "At least 1 digit (0-9)"
    });
    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _passwordRuleSpecial, {
      writable: true,
      value: "At least 1 special character (punctuation)"
    });
    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _passwordPrefix, {
      writable: true,
      value: "Password should be: "
    });
    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _passwordPostfix, {
      writable: true,
      value: ""
    });
    (0, _classPrivateFieldSet2["default"])((0, _assertThisInitialized2["default"])(_this), _options, options);
    var _ref = options.messages || {},
      passwordHintDescription = _ref.passwordHintDescription;
    _this.insertAffix("<div id=\"show-password-toggle\" class=\"wk-eye-toggle\"></div>", _this.togglePasswordVisibility.bind((0, _assertThisInitialized2["default"])(_this)));
    if (options.passwordHint) {
      _this.insertDescription(passwordHintDescription || (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _hintDescription));
    }
    _this.ignoreValidation = (_options$ignoreValida = options.ignoreValidation) !== null && _options$ignoreValida !== void 0 ? _options$ignoreValida : false;
    return _this;
  }
  (0, _createClass2["default"])(PasswordField, [{
    key: "togglePasswordVisibility",
    value: function togglePasswordVisibility() {
      var targetElement = this.wrapper.querySelector('#show-password-toggle');
      var TOGGLE_CLASSNAME = 'wk-eye-toggled';
      if (targetElement) {
        if (targetElement.classList.contains(TOGGLE_CLASSNAME)) {
          targetElement.classList.remove(TOGGLE_CLASSNAME);
          this.switchPasswordInputType('password');
        } else {
          targetElement.classList.add(TOGGLE_CLASSNAME);
          this.switchPasswordInputType('text');
        }
      }
    }
  }, {
    key: "switchPasswordInputType",
    value: function switchPasswordInputType(type) {
      if (this.input) {
        this.input.type = type || 'password';
      }
    }
  }, {
    key: "validate",
    value: function validate() {
      var value = this.getValue();
      var passwordValidation = _classPrivateMethodGet(this, _testPassword, _testPassword2).call(this, value);
      var _ref2 = (0, _classPrivateFieldGet2["default"])(this, _options).messages || {},
        passwordPrefix = _ref2.passwordPrefix,
        passwordPostfix = _ref2.passwordPostfix;
      if (!passwordValidation.valid) {
        this.setError("<div>\n                <span>".concat(passwordPrefix || (0, _classPrivateFieldGet2["default"])(this, _passwordPrefix)).concat(passwordValidation.message).concat(passwordPostfix || (0, _classPrivateFieldGet2["default"])(this, _passwordPostfix), "</span>\n            </div>"));
        return false;
      }
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(PasswordField.prototype), "validate", this).call(this);
    }
  }]);
  return PasswordField;
}(_index.FormField);
exports.PasswordField = PasswordField;
function _testPasswordRule2(value, regex, errorMessage) {
  var uppercaseRegex = new RegExp(regex);
  var uppercaseValid = uppercaseRegex.test(value);
  if (!uppercaseValid) {
    return {
      message: errorMessage,
      valid: false
    };
  }
  return {
    valid: true
  };
}
function _testPassword2(password) {
  if (this.ignoreValidation) {
    return {
      valid: true
    };
  }
  var _ref3 = (0, _classPrivateFieldGet2["default"])(this, _options).messages || {},
    passwordRuleLength = _ref3.passwordRuleLength,
    passwordRuleUppercase = _ref3.passwordRuleUppercase,
    passwordRuleLowercase = _ref3.passwordRuleLowercase,
    passwordRuleDigit = _ref3.passwordRuleDigit,
    passwordRuleSpecial = _ref3.passwordRuleSpecial;
  var rules = [{
    regex: "^(?=.{8,})",
    message: passwordRuleLength || (0, _classPrivateFieldGet2["default"])(this, _passwordRuleLength)
  }, {
    regex: "^(?=.*[A-Z])",
    message: passwordRuleUppercase || (0, _classPrivateFieldGet2["default"])(this, _passwordRuleUppercase)
  }, {
    regex: "^(?=.*[a-z])",
    message: passwordRuleLowercase || (0, _classPrivateFieldGet2["default"])(this, _passwordRuleLowercase)
  }, {
    regex: "^(?=.*[0-9])",
    message: passwordRuleDigit || (0, _classPrivateFieldGet2["default"])(this, _passwordRuleDigit)
  }, {
    regex: "^(?=.*[`~!@#$%^&*()+={}\/|:;'<>,.?_-])",
    message: passwordRuleSpecial || (0, _classPrivateFieldGet2["default"])(this, _passwordRuleSpecial)
  }];
  for (var _i = 0, _rules = rules; _i < _rules.length; _i++) {
    var rule = _rules[_i];
    var validateRule = _classPrivateMethodGet(this, _testPasswordRule, _testPasswordRule2).call(this, password, rule.regex, rule.message);
    if (!validateRule.valid) {
      return validateRule;
    }
  }
  return {
    valid: true
  };
}

/***/ }),

/***/ 4751:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FormField = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _classPrivateFieldGet2 = _interopRequireDefault(__webpack_require__(5194));
var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(8478));
var _DOM = __webpack_require__(2909);
var _lodash = _interopRequireDefault(__webpack_require__(5828));
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
var _errorMessageRequired = /*#__PURE__*/new WeakMap();
var _errorMessageEmptyEmail = /*#__PURE__*/new WeakMap();
var _errorMessageIncorrectEmail = /*#__PURE__*/new WeakMap();
var _errorMessageEmptyPassword = /*#__PURE__*/new WeakMap();
var FormField = /*#__PURE__*/function () {
  function FormField(options) {
    var _options$ignoreValida;
    (0, _classCallCheck2["default"])(this, FormField);
    _classPrivateFieldInitSpec(this, _errorMessageRequired, {
      writable: true,
      value: 'This field is required.'
    });
    _classPrivateFieldInitSpec(this, _errorMessageEmptyEmail, {
      writable: true,
      value: 'Enter your email address to continue.'
    });
    _classPrivateFieldInitSpec(this, _errorMessageIncorrectEmail, {
      writable: true,
      value: 'This email address isn\'t correct.'
    });
    _classPrivateFieldInitSpec(this, _errorMessageEmptyPassword, {
      writable: true,
      value: 'Enter your password to continue.'
    });
    if ((0, _lodash["default"])(options)) {
      throw new Error('No Options Provided');
    }
    var _ref = options || {},
      messages = _ref.messages;
    this.wrapper = this.createWrapper(options);
    this.input = this.createInput(options);
    this.type = options.type || 'text';
    this.message = null;
    this.isValid = false;
    this.required = options.required || false;
    this.slug = options.dataSlug;
    this.render(options);
    if (options.affix) {
      this.insertAffix(options.affix.content, options.affix.onClick);
    }
    if (options.description) {
      this.insertDescription(options.description);
    }
    if (options.onChange) {
      this.input.addEventListener('change', options.onChange.bind(this));
    }
    if (options.onInput) {
      this.input.addEventListener('input', options.onInput.bind(this));
    }
    if (!(0, _lodash["default"])(messages)) {
      var _ref2 = messages || {},
        required = _ref2.required,
        emptyEmail = _ref2.emptyEmail,
        incorrectEmail = _ref2.incorrectEmail,
        emptyPassword = _ref2.emptyPassword;
      (0, _classPrivateFieldSet2["default"])(this, _errorMessageRequired, required || (0, _classPrivateFieldGet2["default"])(this, _errorMessageRequired));
      (0, _classPrivateFieldSet2["default"])(this, _errorMessageEmptyEmail, emptyEmail || (0, _classPrivateFieldGet2["default"])(this, _errorMessageEmptyEmail));
      (0, _classPrivateFieldSet2["default"])(this, _errorMessageIncorrectEmail, incorrectEmail || (0, _classPrivateFieldGet2["default"])(this, _errorMessageIncorrectEmail));
      (0, _classPrivateFieldSet2["default"])(this, _errorMessageEmptyPassword, emptyPassword || (0, _classPrivateFieldGet2["default"])(this, _errorMessageEmptyPassword));
    }
    this.ignoreValidation = (_options$ignoreValida = options.ignoreValidation) !== null && _options$ignoreValida !== void 0 ? _options$ignoreValida : false;
    this.input.addEventListener('blur', this.validate.bind(this));
    if (options.onEnter) {
      this.input.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
          options.onEnter();
        }
      });
    }
    if (options.onValidate && typeof options.onValidate === "function") {
      this.onValidate = options.onValidate;
    }
    if (options.relatedData) {
      this.relatedData = options.relatedData;
    }
  }
  (0, _createClass2["default"])(FormField, [{
    key: "getElement",
    value: function getElement() {
      return this.wrapper;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.input.value;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (this.ignoreValidation) {
        return true;
      }
      var value = this.getValue();
      if (this.required && !value) {
        this.setError((0, _classPrivateFieldGet2["default"])(this, _errorMessageRequired));
        return false;
      }
      if (this.type === 'email') {
        if (!value) {
          this.setError((0, _classPrivateFieldGet2["default"])(this, _errorMessageEmptyEmail));
          return false;
        } else if (!value.length > 4 || !value.includes('@') || !value.includes('.')) {
          this.setError((0, _classPrivateFieldGet2["default"])(this, _errorMessageIncorrectEmail));
          return false;
        }
      } else if (this.type === 'password') {
        if (!value) {
          this.setError((0, _classPrivateFieldGet2["default"])(this, _errorMessageEmptyPassword));
          return false;
        }
      }
      if (this.onValidate) {
        if (!this.onValidate(this)) {
          return false;
        }
      }
      this.resetValidation();
      this.setFieldValidationState(true);
      return true;
    }
  }, {
    key: "createWrapper",
    value: function createWrapper() {
      return (0, _DOM.createElement)('div', {
        className: 'wk-form-field'
      });
    }
  }, {
    key: "createInputWrapper",
    value: function createInputWrapper() {
      return (0, _DOM.createElement)('div', {
        className: 'wk-form-field__input-wrapper'
      });
    }
  }, {
    key: "insertAffix",
    value: function insertAffix(content, onClick) {
      var affixElement = (0, _DOM.createElement)('div', {
        className: 'wk-form-field__field-affix',
        innerHTML: content
      });
      affixElement.addEventListener('click', onClick);
      this.inputWrapper.appendChild(affixElement);
    }
  }, {
    key: "insertDescription",
    value: function insertDescription(description) {
      var descriptionElement = (0, _DOM.createElement)('div', {
        className: 'wk-form-field__field-description',
        innerHTML: description
      });
      this.wrapper.appendChild(descriptionElement);
    }
  }, {
    key: "createInput",
    value: function createInput(options) {
      return (0, _DOM.createElement)('input', {
        className: options.className || "wk-form-field__input ".concat(options.name || ''),
        id: options.id || false,
        attributes: {
          name: options.name,
          type: options.type || 'text',
          placeholder: options.placeholder || ''
        }
      });
    }
  }, {
    key: "createLabel",
    value: function createLabel(text, forRef) {
      return (0, _DOM.createElement)('label', {
        className: 'wk-form-field__label',
        attributes: {
          "for": forRef
        },
        innerHTML: text
      });
    }
  }, {
    key: "createMessage",
    value: function createMessage(message, valid) {
      var messageElement = (0, _DOM.createElement)('span', {
        className: "wk-form-field__message"
      });
      messageElement.innerHTML = message;
      return messageElement;
    }
  }, {
    key: "setError",
    value: function setError(message) {
      if (!this.message) {
        this.setFieldValidationState(false);
        this.message = this.createMessage(message, false);
        (0, _DOM.insertAfter)(this.message, this.inputWrapper);
      } else if (this.message) {
        this.message.innerHTML = message;
      }
    }
  }, {
    key: "removeMessage",
    value: function removeMessage() {
      if (this.message) {
        this.message.remove();
        this.message = null;
      }
    }
  }, {
    key: "setFieldValidationState",
    value: function setFieldValidationState(valid) {
      this.isValid = valid;
      if (!valid) {
        this.wrapper.classList.add('wk-form-field--invalid');
        this.wrapper.classList.remove('wk-form-field--valid');
      } else {
        this.wrapper.classList.add('wk-form-field--valid');
        this.wrapper.classList.remove('wk-form-field--invalid');
      }
    }
  }, {
    key: "resetValidation",
    value: function resetValidation() {
      this.removeMessage();
      this.wrapper.classList.remove('wk-form-field--valid', 'wk-form-field--invalid');
    }
  }, {
    key: "resetField",
    value: function resetField() {
      this.input.value = '';
      this.resetValidation();
    }
  }, {
    key: "focus",
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: "render",
    value: function render(options) {
      this.inputWrapper = this.createInputWrapper();
      this.wrapper.appendChild(this.createLabel(options.label, options.name));
      this.inputWrapper.appendChild(this.input);
      this.wrapper.appendChild(this.inputWrapper);
    }
  }]);
  return FormField;
}();
exports.FormField = FormField;

/***/ }),

/***/ 8031:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SIGN_UP_FORM_SLUG = exports.SIGN_IN_FORM_SLUG = exports.RESET_PASSWORD_FORM_SLUG = exports.FORGOT_PASSWORD_FORM_SLUG = exports.EMAIL_LINK_FORM_SLUG = exports.AuthForm = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(366));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _classPrivateFieldGet2 = _interopRequireDefault(__webpack_require__(5194));
var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(8478));
var _DOM = __webpack_require__(2909);
var _TriggerButton = __webpack_require__(447);
var _LoginForm = __webpack_require__(4138);
var _SignUpForm = __webpack_require__(8955);
var _ForgotPasswordForm = __webpack_require__(7486);
var _ResetPasswordForm = __webpack_require__(2217);
var _EmailLinkForm = __webpack_require__(2511);
var _eventsName = __webpack_require__(6073);
var _lodash = _interopRequireDefault(__webpack_require__(5828));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
var SIGN_UP_FORM_SLUG = 'sign-up';
exports.SIGN_UP_FORM_SLUG = SIGN_UP_FORM_SLUG;
var SIGN_IN_FORM_SLUG = 'sign-in';
exports.SIGN_IN_FORM_SLUG = SIGN_IN_FORM_SLUG;
var FORGOT_PASSWORD_FORM_SLUG = 'forgot-password';
exports.FORGOT_PASSWORD_FORM_SLUG = FORGOT_PASSWORD_FORM_SLUG;
var RESET_PASSWORD_FORM_SLUG = 'reset-password';
exports.RESET_PASSWORD_FORM_SLUG = RESET_PASSWORD_FORM_SLUG;
var EMAIL_LINK_FORM_SLUG = 'email-link';
exports.EMAIL_LINK_FORM_SLUG = EMAIL_LINK_FORM_SLUG;
var _options = /*#__PURE__*/new WeakMap();
var AuthForm = /*#__PURE__*/function () {
  function AuthForm(selector, options) {
    var _options$signUp,
      _this = this,
      _options$signUp2,
      _this$forms;
    (0, _classCallCheck2["default"])(this, AuthForm);
    _classPrivateFieldInitSpec(this, _options, {
      writable: true,
      value: void 0
    });
    (0, _classPrivateFieldSet2["default"])(this, _options, options);
    this.defaultForm = (options === null || options === void 0 ? void 0 : options.defaultForm) || false;

    // this.wrapper = createElement('div', {
    //     id: 'wk-auth-form'
    // });
    var _ref = options.customizeAuthForms || {},
      messages = _ref.messages,
      signIn = _ref.signIn,
      signUp = _ref.signUp,
      emailLink = _ref.emailLink,
      forgotPassword = _ref.forgotPassword,
      resetPassword = _ref.resetPassword;

    /** LoginForm */
    var signInMessages = {};
    if (!(0, _lodash["default"])(signIn) && !(0, _lodash["default"])(signIn.messages)) {
      signInMessages = signIn.messages;
    }
    this.loginForm = new _LoginForm.LoginForm(selector, _objectSpread(_objectSpread({
      className: 'wk-form-login',
      cancelBtn: options.triggerButton !== false,
      signUp: (_options$signUp = options.signUp) !== null && _options$signUp !== void 0 ? _options$signUp : true,
      passwordSignInIgnoreValidation: options.passwordSignInIgnoreValidation || false
    }, signIn || {}), {}, {
      messages: _objectSpread(_objectSpread({}, messages || {}), signInMessages),
      onSubmit: function onSubmit(data) {
        if (options.onLogin) {
          options.onLogin(data);
        }
      },
      onCancel: function onCancel() {
        if (options.onCancel) {
          options.onCancel();
          _this.loginForm.resetForm();
        }
      }
    }));
    this.loginForm.formWrapper.addEventListener('click', function (event) {
      if (event.target.id === 'auth-signup-link') {
        event.preventDefault();
        _this.showForm(SIGN_UP_FORM_SLUG);
      } else if (event.target.id === 'auth-password-link') {
        event.preventDefault();
        _this.showForm(FORGOT_PASSWORD_FORM_SLUG);
      }
    });
    this.loginForm.hide();

    /** SignupForm */
    var signUpMessages = {};
    if (!(0, _lodash["default"])(signUp) && !(0, _lodash["default"])(signUp.messages)) {
      signUpMessages = signUp.messages;
    }
    if (options.signUp === true) {
      this.signUpForm = new _SignUpForm.SignupForm(selector, _objectSpread(_objectSpread({
        className: 'wk-form-signup',
        cancelBtn: options.triggerButton !== false,
        termsOfService: options.termsOfService
      }, signUp || {}), {}, {
        messages: _objectSpread(_objectSpread({}, messages || {}), signUpMessages),
        onSubmit: function onSubmit(data) {
          if (options.onSignUp) {
            options.onSignUp(data);
          }
        },
        onCancel: function onCancel() {
          if (options.onCancel) {
            options.onCancel();
            _this.signUpForm.resetForm();
          }
        }
      }));
      this.signUpForm.formWrapper.addEventListener('click', function (event) {
        if (event.target.id === 'auth-signin-link') {
          event.preventDefault();
          _this.showForm(SIGN_IN_FORM_SLUG);
        }
      });
      this.signUpForm.hide();
    }

    /** EmailLinkForm */
    var emailLinkMessages = {};
    if (!(0, _lodash["default"])(emailLink) && !(0, _lodash["default"])(emailLink.messages)) {
      emailLinkMessages = emailLink.messages;
    }
    this.emailLinkForm = new _EmailLinkForm.EmailLinkForm(selector, _objectSpread(_objectSpread({
      className: 'wk-form-email-link',
      cancelBtn: options.triggerButton !== false,
      signUp: (_options$signUp2 = options.signUp) !== null && _options$signUp2 !== void 0 ? _options$signUp2 : true
    }, emailLink || {}), {}, {
      messages: _objectSpread(_objectSpread({}, messages || {}), emailLinkMessages),
      onSubmit: function onSubmit(data) {
        if (options.onGetEmailLink) {
          options.onGetEmailLink(data);
        }
      },
      onCancel: function onCancel() {
        if (options.onCancel) {
          options.onCancel();
          _this.emailLinkForm.resetForm();
        }
      }
    }));
    this.emailLinkForm.formWrapper.addEventListener('click', function (event) {
      if (event.target.id === 'auth-signup-link') {
        event.preventDefault();
        _this.showForm(SIGN_UP_FORM_SLUG);
      } else if (event.target.id === 'auth-password-link') {
        event.preventDefault();
        _this.showForm(FORGOT_PASSWORD_FORM_SLUG);
      }
    });
    this.emailLinkForm.formWrapper.addEventListener('click', function (event) {
      if (event.target.id === 'back-to-login') {
        event.preventDefault();
        if (options.onCancel) {
          options.onCancel();
          _this.loginForm.resetForm();
        }
      }
    });
    this.emailLinkForm.hide();

    /** ForgotPasswordForm */
    var forgotPasswordMessages = {};
    if (!(0, _lodash["default"])(forgotPassword) && !(0, _lodash["default"])(forgotPassword.messages)) {
      forgotPasswordMessages = forgotPassword.messages;
    }
    this.forgotPasswordForm = new _ForgotPasswordForm.ForgotPasswordForm(selector, _objectSpread(_objectSpread({
      className: 'wk-form-forgot-password'
    }, forgotPassword || {}), {}, {
      messages: _objectSpread(_objectSpread({}, messages || {}), forgotPasswordMessages),
      onSubmit: function onSubmit(data) {
        if (options.onPasswordForgot) {
          options.onPasswordForgot(data);
        }
      }
    }));
    this.forgotPasswordForm.formWrapper.addEventListener('click', function (event) {
      if (event.target.id === 'back-to-login') {
        event.preventDefault();
        _this.showForm(SIGN_IN_FORM_SLUG);
        _this.forgotPasswordForm.reRender();
      }
    });
    this.forgotPasswordForm.hide();

    /** ResetPasswordForm */
    var resetPasswordMessages = {};
    if (!(0, _lodash["default"])(resetPassword) && !(0, _lodash["default"])(resetPassword.messages)) {
      resetPasswordMessages = resetPassword.messages;
    }
    this.resetPasswordForm = new _ResetPasswordForm.ResetPasswordForm(selector, _objectSpread(_objectSpread({
      className: 'wk-form-reset-password'
    }, resetPassword || {}), {}, {
      messages: _objectSpread(_objectSpread({}, messages || {}), resetPasswordMessages),
      onSubmit: function onSubmit(data) {
        if (options.onPasswordReset) {
          options.onPasswordReset(data);
        }
      }
    }));
    this.resetPasswordForm.formWrapper.addEventListener('click', function (event) {
      if (event.target.id === 'back-to-login') {
        event.preventDefault();
        _this.showForm(SIGN_IN_FORM_SLUG);
        _this.resetPasswordForm.reRender();
      }
    });
    this.resetPasswordForm.hide();

    /** TriggerButton */
    if (options.triggerButton !== false) {
      this.triggerButton = new _TriggerButton.TriggerButton(selector, {
        authProviders: options.authProviders,
        defaultFormSlug: this.defaultFormSlug,
        emailOnClick: function emailOnClick() {
          var authFormSlug = options.defaultForm || SIGN_IN_FORM_SLUG;
          if (options.getShowAuthFormSlug) {
            var showAuthFormSlug = options.getShowAuthFormSlug();
            authFormSlug = showAuthFormSlug || authFormSlug;
          }
          _this.defaultForm = authFormSlug;
          _this.defaultForm.show();
          _this.triggerButton.hide();
          if (options.onAuthFormShow) {
            options.onAuthFormShow();
          }
        },
        emaillinkOnClick: function emaillinkOnClick() {
          _this.defaultForm = EMAIL_LINK_FORM_SLUG;
          _this.defaultForm.show();
          _this.triggerButton.hide();
          if (options.onAuthFormShow) {
            options.onAuthFormShow();
          }
        }
      });
    }
    this.forms = (_this$forms = {}, (0, _defineProperty2["default"])(_this$forms, FORGOT_PASSWORD_FORM_SLUG, this.forgotPasswordForm), (0, _defineProperty2["default"])(_this$forms, RESET_PASSWORD_FORM_SLUG, this.resetPasswordForm), (0, _defineProperty2["default"])(_this$forms, SIGN_IN_FORM_SLUG, this.loginForm), (0, _defineProperty2["default"])(_this$forms, SIGN_UP_FORM_SLUG, this.signUpForm), (0, _defineProperty2["default"])(_this$forms, EMAIL_LINK_FORM_SLUG, this.emailLinkForm), _this$forms);
  }
  (0, _createClass2["default"])(AuthForm, [{
    key: "defaultForm",
    get: function get() {
      return this.forms[this.defaultFormSlug];
    },
    set: function set(formSlug) {
      var oldSlug = this.defaultFormSlug;
      if (formSlug && [SIGN_UP_FORM_SLUG, SIGN_IN_FORM_SLUG, FORGOT_PASSWORD_FORM_SLUG, RESET_PASSWORD_FORM_SLUG, EMAIL_LINK_FORM_SLUG].includes(formSlug)) {
        this.defaultFormSlug = formSlug;
      } else {
        this.defaultFormSlug = (0, _classPrivateFieldGet2["default"])(this, _options).defaultForm || SIGN_UP_FORM_SLUG;
      }
      if ((0, _classPrivateFieldGet2["default"])(this, _options).triggerButton !== false && this.triggerButton) {
        this.triggerButton.events.notify(_eventsName.DEFAULT_AUTH_FORM_SLUG_UPDATED, {
          "new": this.defaultFormSlug,
          "old": oldSlug
        });
      }
    }
  }, {
    key: "activeForm",
    get: function get() {
      var _this2 = this;
      var form = false;
      if (!!this.forms && Object.keys(this.forms).length) {
        Object.keys(this.forms).forEach(function (key) {
          if (_this2.forms[key].isVisible) {
            form = _this2.forms[key];
          }
        });
      }
      return form;
    }
  }, {
    key: "showForm",
    value: function showForm(authFormSlug) {
      if (authFormSlug && this.forms[authFormSlug]) {
        this.hide();
        this.forms[authFormSlug].show();
      }
    }
  }, {
    key: "showDefaultForm",
    value: function showDefaultForm() {
      this.showForm(this.defaultFormSlug);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.hide();
      if (this.triggerButton) {
        this.triggerButton.show();
      } else {
        this.showDefaultForm();
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      if (!!this.forms) {
        for (var formKey in this.forms) {
          var form = this.forms[formKey];
          if (form) {
            form.hide();
            form.resetForm();
          }
        }
      }
    }
  }, {
    key: "handleError",
    value: function handleError(errorMessage, errorCode) {
      if (this.activeForm) {
        if (errorMessage === null) {
          this.activeForm.resetFormError(errorMessage);
        } else {
          this.activeForm.setFormError(errorMessage, errorCode);
        }
      }
    }
  }, {
    key: "showSuccessEmailLink",
    value: function showSuccessEmailLink() {
      var email = this.emailLinkForm.emailField.getValue();
      var _ref2 = (0, _classPrivateFieldGet2["default"])(this, _options).customizeAuthForms || {},
        successEmailLink = _ref2.successEmailLink;
      var _ref3 = successEmailLink || {},
        descriptionPrefix = _ref3.descriptionPrefix,
        descriptionPostfix = _ref3.descriptionPostfix,
        backLinkTitle = _ref3.backLinkTitle;
      this.emailLinkForm.showFormResult("\n            <div class=\"wk-success-message wk-email-link-success wk-email-link-message\">\n                <p class=\"wk-success-message__description\">".concat(descriptionPrefix || 'Please follow the instructions sent to ', "<b>").concat(email, "</b>").concat(descriptionPostfix || ' to sign in.', "</p>\n                <button id=\"back-to-login\" class=\"wk-form-button wk-form-button--cancel\">").concat(backLinkTitle || 'Back to login', "</button>\n            </div>\n        "));
    }
  }, {
    key: "showSuccessPasswordForgot",
    value: function showSuccessPasswordForgot() {
      var email = this.forgotPasswordForm.emailField.getValue();
      var _ref4 = (0, _classPrivateFieldGet2["default"])(this, _options).customizeAuthForms || {},
        successPasswordForgot = _ref4.successPasswordForgot;
      var _ref5 = successPasswordForgot || {},
        descriptionPrefix = _ref5.descriptionPrefix,
        descriptionPostfix = _ref5.descriptionPostfix,
        backLinkTitle = _ref5.backLinkTitle;
      this.forgotPasswordForm.showFormResult("\n            <div class=\"wk-success-message wk-password-reset-success wk-password-forgot-message\">\n                <p class=\"wk-success-message__description\">".concat(descriptionPrefix || 'Please follow the instructions sent to ', "<b>").concat(email, "</b>").concat(descriptionPostfix || ' to set a new password.', "</p>\n                <button id=\"back-to-login\" class=\"wk-form-button wk-form-button--cancel\">").concat(backLinkTitle || 'Back to login', "</button>\n            </div>\n        "));
    }
  }, {
    key: "showSuccessPasswordReset",
    value: function showSuccessPasswordReset() {
      var _ref6 = (0, _classPrivateFieldGet2["default"])(this, _options) || {},
        authOnPasswordReset = _ref6.authOnPasswordReset;
      var _ref7 = (0, _classPrivateFieldGet2["default"])(this, _options).customizeAuthForms || {},
        successPasswordReset = _ref7.successPasswordReset;
      var _ref8 = successPasswordReset || {},
        description = _ref8.description,
        backLinkTitle = _ref8.backLinkTitle;
      this.resetPasswordForm.showFormResult("\n            <div class=\"wk-success-message wk-password-reset-success wk-password-reset-message\">\n                <h2 class=\"wk-success-message__title\">".concat(description || 'Your password had been saved successfully!', "</h2>\n                ").concat(authOnPasswordReset ? '' : '<button id="back-to-login" class="wk-form-button wk-form-button--cancel">' + (backLinkTitle || 'Back to login') + '</button>', "\n            </div>\n        "));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.loginForm) {
        this.loginForm.render();
      }
      if (this.signUpForm) {
        this.signUpForm.render();
      }
      if (this.emailLinkForm) {
        this.emailLinkForm.render();
      }
      if (this.forgotPasswordForm) {
        this.forgotPasswordForm.render();
      }
      if (this.resetPasswordForm) {
        this.resetPasswordForm.render();
      }
      if (this.triggerButton) {
        this.triggerButton.render();
      } else {
        this.showDefaultForm();
      }
    }
  }]);
  return AuthForm;
}();
exports.AuthForm = AuthForm;

/***/ }),

/***/ 8445:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ChangePasswordForm = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(1185));
var _inherits2 = _interopRequireDefault(__webpack_require__(7964));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8442));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(7474));
var _classPrivateFieldGet2 = _interopRequireDefault(__webpack_require__(5194));
var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(8478));
var _DOM = __webpack_require__(2909);
var _index = __webpack_require__(9356);
var _PasswordField = __webpack_require__(4386);
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
var _options = /*#__PURE__*/new WeakMap();
var ChangePasswordForm = /*#__PURE__*/function (_Form) {
  (0, _inherits2["default"])(ChangePasswordForm, _Form);
  var _super = _createSuper(ChangePasswordForm);
  function ChangePasswordForm(targetElementSelector, options) {
    var _this;
    (0, _classCallCheck2["default"])(this, ChangePasswordForm);
    _this = _super.call(this, targetElementSelector, options);
    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _options, {
      writable: true,
      value: void 0
    });
    _this.onCancel = options.onCancel || false;
    (0, _classPrivateFieldSet2["default"])((0, _assertThisInitialized2["default"])(_this), _options, options);
    (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _options).title = options.title || 'Change Password';
    (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _options).footer = _this.getFormFooter() || options.footer;
    var _ref = options.messages || {},
      emptyPassword = _ref.emptyPassword,
      newNotMatchOld = _ref.newNotMatchOld,
      confirmationMatchNew = _ref.confirmationMatchNew;
    _this.oldPasswordField = new _PasswordField.PasswordField({
      dataSlug: 'old_password',
      name: 'wk-old-password',
      ignoreValidation: true,
      passwordHint: false,
      label: 'Old Password',
      type: 'password',
      messages: options.messages || {},
      onEnter: function onEnter() {
        _this.submitForm();
      },
      onValidate: function onValidate(field) {
        var value = field.getValue();
        if (!value) {
          field.setError("<div>\n                            <span>".concat(emptyPassword || 'Password cannot be empty.', "</span>\n                        </div>"));
          return false;
        }
        return true;
      }
    });
    _this.newPasswordField = new _PasswordField.PasswordField({
      dataSlug: 'new_password',
      name: 'wk-new-password',
      ignoreValidation: false,
      passwordHint: true,
      label: 'New Password',
      type: 'password',
      messages: options.messages || {},
      relatedData: {
        oldPassword: _this.oldPasswordField
      },
      onEnter: function onEnter() {
        _this.submitForm();
      },
      onValidate: function onValidate(field) {
        var oldPasswordValue = field.relatedData.oldPassword.getValue();
        var value = field.getValue();
        if (oldPasswordValue === value) {
          field.setError("<div>\n                            <span>".concat(newNotMatchOld || 'The new password must not match the old one.', "</span>\n                        </div>"));
          return false;
        }
        return true;
      }
    });
    _this.newPasswordConfirmField = new _PasswordField.PasswordField({
      dataSlug: 'new_password_confirm',
      name: 'wk-new-password-confirm',
      ignoreValidation: false,
      passwordHint: false,
      label: 'New Password Confirmation',
      type: 'password',
      messages: options.messages || {},
      relatedData: {
        newPassword: _this.newPasswordField
      },
      onEnter: function onEnter() {
        _this.submitForm();
      },
      onValidate: function onValidate(field) {
        var newPasswordValue = field.relatedData.newPassword.getValue();
        var value = field.getValue();
        if (newPasswordValue !== value) {
          field.setError("<div>\n                            <span>".concat(confirmationMatchNew || 'The password confirmation must be the same as the new password.', "</span>\n                        </div>"));
          return false;
        }
        return true;
      }
    });
    _this.fields = [_this.oldPasswordField, _this.newPasswordField, _this.newPasswordConfirmField];
    _this.init();
    return _this;
  }
  (0, _createClass2["default"])(ChangePasswordForm, [{
    key: "cancelForm",
    value: function cancelForm() {
      if (typeof this.onCancel === "function") {
        this.onCancel();
      }
    }
  }, {
    key: "getFormFooter",
    value: function getFormFooter() {
      var formFooter = (0, _DOM.createElement)('div', {
        className: 'wk-form__footer'
      });
      var _ref2 = (0, _classPrivateFieldGet2["default"])(this, _options) || {},
        cancelBtnTitle = _ref2.cancelBtnTitle;
      formFooter.appendChild((0, _DOM.createElement)('a', {
        className: 'wk-form__link account-settings-link',
        innerText: cancelBtnTitle || 'Cancel',
        attributes: {
          href: '#'
        }
      }));
      formFooter.appendChild(this.submitBtn);
      return formFooter;
    }
  }]);
  return ChangePasswordForm;
}(_index.Form);
exports.ChangePasswordForm = ChangePasswordForm;

/***/ }),

/***/ 2511:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EmailLinkForm = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(1185));
var _inherits2 = _interopRequireDefault(__webpack_require__(7964));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8442));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(7474));
var _DOM = __webpack_require__(2909);
var _index = __webpack_require__(9356);
var _field = __webpack_require__(4751);
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var EmailLinkForm = /*#__PURE__*/function (_Form) {
  (0, _inherits2["default"])(EmailLinkForm, _Form);
  var _super = _createSuper(EmailLinkForm);
  function EmailLinkForm(targetElementSelector, options) {
    var _this;
    (0, _classCallCheck2["default"])(this, EmailLinkForm);
    _this = _super.call(this, targetElementSelector, options);
    _this.options = options;
    _this.options.title = options.title || 'Sign in with email';
    _this.options.footer = _this.getFormFooter() || options.footer;
    _this.emailField = new _field.FormField({
      name: 'wk-fb-email',
      dataSlug: 'email',
      label: 'Email',
      type: 'email',
      messages: options.messages || {},
      onEnter: function onEnter() {
        _this.submitForm();
      }
    });
    _this.fields = [_this.emailField];
    _this.init();
    if (options.onCancel) {
      _this.cancelBtn.addEventListener('click', options.onCancel.bind((0, _assertThisInitialized2["default"])(_this)));
    }
    return _this;
  }
  (0, _createClass2["default"])(EmailLinkForm, [{
    key: "getFormFooter",
    value: function getFormFooter() {
      var footerWrapper = (0, _DOM.createElement)('div');
      var subFooter = (0, _DOM.createElement)('div', {
        className: 'wk-form__sub-footer'
      });
      var signUpWrapper = (0, _DOM.createElement)('div', {
        className: 'wk-form__footer-sign-up',
        innerText: this.options.signUpPreLinkTitle || ''
      });
      if (this.options.signUp === true) {
        signUpWrapper.appendChild((0, _DOM.createElement)('a', {
          id: 'auth-signup-link',
          className: 'wk-form__link',
          innerText: this.options.signUpLinkTitle || 'Sign Up',
          attributes: {
            href: '#'
          }
        }));
      }
      subFooter.appendChild(signUpWrapper);
      var formFooter = (0, _DOM.createElement)('div', {
        className: 'wk-form__footer wk-form__footer--right'
      });
      footerWrapper.appendChild(subFooter);
      if (this.options.cancelBtn !== false) {
        formFooter.appendChild(this.cancelBtn);
      }
      formFooter.appendChild(this.submitBtn);
      footerWrapper.appendChild(formFooter);
      return footerWrapper;
    }
  }]);
  return EmailLinkForm;
}(_index.Form);
exports.EmailLinkForm = EmailLinkForm;

/***/ }),

/***/ 7486:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ForgotPasswordForm = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _inherits2 = _interopRequireDefault(__webpack_require__(7964));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8442));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(7474));
var _DOM = __webpack_require__(2909);
var _index = __webpack_require__(9356);
var _field = __webpack_require__(4751);
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ForgotPasswordForm = /*#__PURE__*/function (_Form) {
  (0, _inherits2["default"])(ForgotPasswordForm, _Form);
  var _super = _createSuper(ForgotPasswordForm);
  function ForgotPasswordForm(targetElementSelector, options) {
    var _this;
    (0, _classCallCheck2["default"])(this, ForgotPasswordForm);
    _this = _super.call(this, targetElementSelector, options);
    _this.options = options;
    _this.options.title = options.title || 'Reset Password';
    _this.options.footer = _this.getFormFooter() || options.footer;
    _this.emailField = new _field.FormField({
      name: 'wk-fb-email',
      dataSlug: 'email',
      label: 'Email',
      type: 'email',
      messages: options.messages || {},
      onEnter: function onEnter() {
        _this.submitForm();
      }
    });
    _this.fields = [_this.emailField];
    _this.init();
    return _this;
  }
  (0, _createClass2["default"])(ForgotPasswordForm, [{
    key: "getFormFooter",
    value: function getFormFooter() {
      var formFooter = (0, _DOM.createElement)('div', {
        className: 'wk-form__footer'
      });
      formFooter.appendChild(this.cancelBtn);
      this.cancelBtn.id = 'back-to-login';
      formFooter.appendChild(this.submitBtn);
      return formFooter;
    }
  }]);
  return ForgotPasswordForm;
}(_index.Form);
exports.ForgotPasswordForm = ForgotPasswordForm;

/***/ }),

/***/ 4138:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LoginForm = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(1185));
var _inherits2 = _interopRequireDefault(__webpack_require__(7964));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8442));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(7474));
var _DOM = __webpack_require__(2909);
var _index = __webpack_require__(9356);
var _field = __webpack_require__(4751);
var _PasswordField = __webpack_require__(4386);
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var LoginForm = /*#__PURE__*/function (_Form) {
  (0, _inherits2["default"])(LoginForm, _Form);
  var _super = _createSuper(LoginForm);
  function LoginForm(targetElementSelector, options) {
    var _this;
    (0, _classCallCheck2["default"])(this, LoginForm);
    _this = _super.call(this, targetElementSelector, options);
    _this.options = options;
    _this.options.title = options.title || 'Sign in with email';
    _this.options.footer = _this.getFormFooter() || options.footer;
    _this.emailField = new _field.FormField({
      dataSlug: 'email',
      name: 'wk-fb-email',
      label: 'Email',
      type: 'email',
      messages: options.messages || {},
      onEnter: function onEnter() {
        _this.passwordField.focus();
      }
    });
    _this.passwordField = new _PasswordField.PasswordField({
      dataSlug: 'password',
      name: 'wk-fb-password',
      ignoreValidation: options.passwordSignInIgnoreValidation || false,
      label: 'Password',
      type: 'password',
      messages: options.messages || {},
      onEnter: function onEnter() {
        _this.submitForm();
      }
    });
    _this.fields = [_this.emailField, _this.passwordField];
    _this.init();
    if (options.onCancel) {
      _this.cancelBtn.addEventListener('click', options.onCancel.bind((0, _assertThisInitialized2["default"])(_this)));
    }
    return _this;
  }
  (0, _createClass2["default"])(LoginForm, [{
    key: "getFormFooter",
    value: function getFormFooter() {
      var footerWrapper = (0, _DOM.createElement)('div');
      var subFooter = (0, _DOM.createElement)('div', {
        className: 'wk-form__sub-footer'
      });
      var signUpWrapper = (0, _DOM.createElement)('div', {
        className: 'wk-form__footer-sign-up',
        innerText: this.options.signUpPreLinkTitle || ''
      });
      if (this.options.signUp === true) {
        signUpWrapper.appendChild((0, _DOM.createElement)('a', {
          id: 'auth-signup-link',
          className: 'wk-form__link',
          innerText: this.options.signUpLinkTitle || 'Sign Up',
          attributes: {
            href: '#'
          }
        }));
      }
      subFooter.appendChild(signUpWrapper);
      subFooter.appendChild((0, _DOM.createElement)('a', {
        className: 'wk-form__link wk-form__reset-password',
        innerText: 'Forgot password',
        id: 'auth-password-link',
        attributes: {
          href: '#'
        }
      }));
      var formFooter = (0, _DOM.createElement)('div', {
        className: 'wk-form__footer wk-form__footer--right'
      });
      footerWrapper.appendChild(subFooter);
      if (this.options.cancelBtn !== false) {
        formFooter.appendChild(this.cancelBtn);
      }
      formFooter.appendChild(this.submitBtn);
      footerWrapper.appendChild(formFooter);
      return footerWrapper;
    }
  }]);
  return LoginForm;
}(_index.Form);
exports.LoginForm = LoginForm;

/***/ }),

/***/ 2217:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ResetPasswordForm = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _inherits2 = _interopRequireDefault(__webpack_require__(7964));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8442));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(7474));
var _DOM = __webpack_require__(2909);
var _index = __webpack_require__(9356);
var _PasswordField = __webpack_require__(4386);
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ResetPasswordForm = /*#__PURE__*/function (_Form) {
  (0, _inherits2["default"])(ResetPasswordForm, _Form);
  var _super = _createSuper(ResetPasswordForm);
  function ResetPasswordForm(targetElementSelector, options) {
    var _this;
    (0, _classCallCheck2["default"])(this, ResetPasswordForm);
    _this = _super.call(this, targetElementSelector, options);
    _this.options = options;
    _this.options.title = options.title || 'Reset Password';
    _this.options.footer = _this.getFormFooter() || options.footer;
    _this.newPasswordField = new _PasswordField.PasswordField({
      dataSlug: 'new_password',
      name: 'wk-new-password',
      ignoreValidation: false,
      passwordHint: true,
      label: 'New Password',
      type: 'password',
      messages: options.messages || {},
      onEnter: function onEnter() {
        _this.submitForm();
      }
    });
    _this.fields = [_this.newPasswordField];
    _this.init();
    return _this;
  }
  (0, _createClass2["default"])(ResetPasswordForm, [{
    key: "getFormFooter",
    value: function getFormFooter() {
      var formFooter = (0, _DOM.createElement)('div', {
        className: 'wk-form__footer'
      });
      formFooter.appendChild(this.cancelBtn);
      this.cancelBtn.id = 'back-to-login';
      formFooter.appendChild(this.submitBtn);
      return formFooter;
    }
  }]);
  return ResetPasswordForm;
}(_index.Form);
exports.ResetPasswordForm = ResetPasswordForm;

/***/ }),

/***/ 8955:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SignupForm = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(366));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(1185));
var _inherits2 = _interopRequireDefault(__webpack_require__(7964));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8442));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(7474));
var _DOM = __webpack_require__(2909);
var _index = __webpack_require__(9356);
var _field = __webpack_require__(4751);
var _PasswordField = __webpack_require__(4386);
var _CheckBoxField = __webpack_require__(4195);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _defaultTermsOfServiceOption = /*#__PURE__*/new WeakSet();
var _isTosEnabled = /*#__PURE__*/new WeakSet();
var SignupForm = /*#__PURE__*/function (_Form) {
  (0, _inherits2["default"])(SignupForm, _Form);
  var _super = _createSuper(SignupForm);
  function SignupForm(targetElementSelector, _options) {
    var _this;
    (0, _classCallCheck2["default"])(this, SignupForm);
    _this = _super.call(this, targetElementSelector, _options);
    _classPrivateMethodInitSpec((0, _assertThisInitialized2["default"])(_this), _isTosEnabled);
    _classPrivateMethodInitSpec((0, _assertThisInitialized2["default"])(_this), _defaultTermsOfServiceOption);
    _this.options = _options;
    _this.options.title = _options.title || 'Sign Up';
    _this.options.footer = _this.getFormFooter() || _options.footer;
    _this.options.termsOfService.termsOfService = _classPrivateMethodGet((0, _assertThisInitialized2["default"])(_this), _defaultTermsOfServiceOption, _defaultTermsOfServiceOption2).call((0, _assertThisInitialized2["default"])(_this), _this.options.termsOfService.termsOfService);
    _this.emailField = new _field.FormField({
      dataSlug: 'email',
      name: 'wk-fb-email',
      label: 'Email',
      type: 'email',
      messages: _options.messages || {},
      onEnter: function onEnter() {
        _this.nameField.focus();
      }
    });
    _this.nameField = new _field.FormField({
      dataSlug: 'name',
      name: 'wk-fb-name',
      label: 'Name',
      type: 'text',
      messages: _options.messages || {},
      onEnter: function onEnter() {
        _this.passwordField.focus();
      }
    });
    _this.passwordField = new _PasswordField.PasswordField({
      dataSlug: 'password',
      name: 'wk-fb-password',
      ignoreValidation: false,
      passwordHint: true,
      label: 'Password',
      type: 'password',
      messages: _options.messages || {},
      onEnter: function onEnter() {
        _this.submitForm();
      }
    });
    var _ref = _options.messages || {},
      tosRequired = _ref.tosRequired,
      required = _ref.required;
    if (_classPrivateMethodGet((0, _assertThisInitialized2["default"])(_this), _isTosEnabled, _isTosEnabled2).call((0, _assertThisInitialized2["default"])(_this), _options)) {
      _this.tosField = new _CheckBoxField.CheckBoxField({
        dataSlug: 'agreement',
        name: 'wk-fb-agreement',
        required: true,
        label: _this.getTosAcceptLabel(_options.termsOfService),
        type: 'checkbox',
        messages: _objectSpread(_objectSpread({}, _options.messages || {}), {
          required: tosRequired || required || false
        })
      });
    }
    _this.fields = [_this.emailField, _this.nameField, _this.passwordField];
    if (_this.tosField) {
      _this.fields.push(_this.tosField);
    }
    _this.init();
    if (_options.onCancel) {
      _this.cancelBtn.addEventListener('click', _options.onCancel.bind((0, _assertThisInitialized2["default"])(_this)));
    }
    return _this;
  }
  (0, _createClass2["default"])(SignupForm, [{
    key: "getFormFooter",
    value: function getFormFooter() {
      var formFooter = (0, _DOM.createElement)('div', {
        className: 'wk-form__footer'
      });
      var signInWrapper = (0, _DOM.createElement)('div', {
        className: 'wk-form__footer-sign-in',
        innerText: this.options.signInPreLinkTitle || 'Already have an account? '
      });
      signInWrapper.appendChild((0, _DOM.createElement)('a', {
        className: 'wk-form__link',
        innerText: this.options.signInLinkTitle || 'Sign-in',
        id: 'auth-signin-link',
        attributes: {
          href: '#'
        }
      }));
      formFooter.appendChild(signInWrapper);
      if (this.options.cancelBtn !== false) {
        formFooter.appendChild(this.cancelBtn);
      }
      formFooter.appendChild(this.submitBtn);
      return formFooter;
    }
  }, {
    key: "getTosAcceptLabel",
    value: function getTosAcceptLabel(termsOptions) {
      if (!termsOptions || !termsOptions.termsOfService) {
        return '';
      }
      if (typeof termsOptions.termsOfService === "string") {
        return termsOptions.termsOfService;
      }
      var defaultLabel = "By signing up I agree with the";
      if (termsOptions.tosURL) {
        defaultLabel += " <a href=\"".concat(termsOptions.tosURL, "\" target=\"_blank\">Terms & Conditions</a>");
      }
      if (termsOptions.tosURL && termsOptions.privacyPolicyURL) {
        defaultLabel += " and ";
      }
      if (termsOptions.privacyPolicyURL) {
        defaultLabel += " <a href=\"".concat(termsOptions.privacyPolicyURL, "\" target=\"_blank\">Privacy Policy</a>");
      }
      return defaultLabel;
    }
  }]);
  return SignupForm;
}(_index.Form);
exports.SignupForm = SignupForm;
function _defaultTermsOfServiceOption2(termsOfService) {
  if (typeof termsOfService === "undefined" || typeof termsOfService !== "string" && typeof termsOfService !== "boolean") {
    termsOfService = true;
  }
  return termsOfService;
}
function _isTosEnabled2(options) {
  if (!options.termsOfService.termsOfService) {
    return false;
  }
  return !!options.termsOfService.termsOfService && typeof options.termsOfService.termsOfService === "string" || !!options.termsOfService.tosURL || !!options.termsOfService.privacyPolicyURL;
}

/***/ }),

/***/ 9356:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Form = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _DOM = __webpack_require__(2909);
var _lodash = _interopRequireDefault(__webpack_require__(5828));
var _lodash2 = _interopRequireDefault(__webpack_require__(4174));
var Form = /*#__PURE__*/function () {
  function Form(targetElementSelector, options) {
    (0, _classCallCheck2["default"])(this, Form);
    this.targetElementSelector = targetElementSelector;
    this.formWrapper = (0, _DOM.createElement)('div', {
      className: "wk-form".concat(!(0, _lodash["default"])(options.className) ? ' ' + options.className : '')
    });
    this.submitBtn = (0, _DOM.createElement)('button', {
      className: 'wk-form-button',
      innerText: options.submitBtnTitle || 'Submit'
    });
    this.cancelBtn = (0, _DOM.createElement)('button', {
      className: 'wk-form-button wk-form-button--cancel',
      innerText: options.cancelBtnTitle || 'Cancel'
    });
    this.loading = false;
    this.options = options;
    this.fields = [];
  }
  (0, _createClass2["default"])(Form, [{
    key: "render",
    value: function render(selector) {
      try {
        var placeholderElement = document.querySelector(selector || this.targetElementSelector);
        if (placeholderElement) {
          placeholderElement.appendChild(this.getFormElement());
        }
      } catch (e) {
        console.log('FORM RENDER ERROR:', e);
      }
    }
  }, {
    key: "getFormElement",
    value: function getFormElement() {
      return this.formWrapper;
    }
  }, {
    key: "setFormError",
    value: function setFormError(error, errorCode) {
      var errorMessage = false;
      if (!(0, _lodash["default"])(this.options.messages)) {
        errorMessage = (0, _lodash2["default"])(this.options.messages, errorCode, false);
      }
      this.formErrorPlaceholder.innerText = errorMessage || error;
      this.formErrorPlaceholder.classList.add('wk-form__error--show');
      if (!(0, _lodash["default"])(errorCode)) {
        this.formErrorPlaceholder.dataset.errorCode = errorCode;
      }
    }
  }, {
    key: "resetFormError",
    value: function resetFormError() {
      this.formErrorPlaceholder.innerText = '';
      this.formErrorPlaceholder.classList.remove('wk-form__error--show');
    }
  }, {
    key: "resetFields",
    value: function resetFields() {
      this.fields.forEach(function (field) {
        return field.resetField();
      });
    }
  }, {
    key: "resetForm",
    value: function resetForm() {
      this.resetFields();
      this.resetFormError();
    }
  }, {
    key: "showFormResult",
    value: function showFormResult(markup) {
      if (markup) {
        this.formWrapper.innerHTML = '';
        this.formWrapper.appendChild((0, _DOM.createElement)('div', {
          className: 'wk-form-result',
          innerHTML: markup || ''
        }));
      }
    }
  }, {
    key: "insertFields",
    value: function insertFields() {
      var _this = this;
      this.formWrapperFields = (0, _DOM.createElement)('div', {
        className: 'wk-form-fields'
      });
      this.fields.forEach(function (field) {
        _this.formWrapperFields.appendChild(field.getElement());
      });
      this.formWrapper.appendChild(this.formWrapperFields);
      return this;
    }
  }, {
    key: "insertHeader",
    value: function insertHeader() {
      this.formWrapperHeader = (0, _DOM.createElement)('div', {
        className: 'wk-form-header'
      });
      if (this.options.title) {
        this.formWrapperHeader.appendChild((0, _DOM.createElement)('h2', {
          className: 'wk-form-header__title',
          innerText: this.options.title
        }));
      }
      if (this.options.description) {
        this.formWrapperHeader.appendChild((0, _DOM.createElement)('h2', {
          className: 'wk-form-header__description',
          innerText: this.options.description
        }));
      }
      this.formErrorPlaceholder = (0, _DOM.createElement)('div', {
        className: 'wk-form__error'
      });
      this.formWrapperHeader.appendChild(this.formErrorPlaceholder);
      this.formWrapper.appendChild(this.formWrapperHeader);
      return this;
    }
  }, {
    key: "insertFooter",
    value: function insertFooter() {
      var formWrapperFooter = (0, _DOM.createElement)('div', {
        className: 'wk-form-footer'
      });
      if (!this.options.footer) {
        formWrapperFooter.appendChild(this.submitBtn);
      } else {
        formWrapperFooter.appendChild(this.options.footer);
      }
      this.formWrapper.appendChild(formWrapperFooter);
      return this;
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      var isValid = null;
      this.fields.forEach(function (field) {
        var isFieldValid = field.validate();
        if (isValid !== false) {
          isValid = isFieldValid;
        }
      });
      return isValid;
    }
  }, {
    key: "show",
    value: function show() {
      this.formWrapper.style.display = 'block';
      return this;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.formWrapper.style.display = 'none';
      return this;
    }
  }, {
    key: "isVisible",
    get: function get() {
      if (window.getComputedStyle(this.formWrapper)) {
        return window.getComputedStyle(this.formWrapper).getPropertyValue('display') === 'block';
      }
      return false;
    }
  }, {
    key: "submitForm",
    value: function submitForm() {
      if (this.validateForm()) {
        if (this.options.onSubmit) {
          var data = {};
          this.fields.forEach(function (field) {
            data[field.slug] = field.getValue();
          });
          this.resetFormError();
          this.options.onSubmit(data);
        }
      }
    }
  }, {
    key: "reRender",
    value: function reRender() {
      this.formWrapper.innerHTML = '';
      this.insertFormElements();
    }
  }, {
    key: "insertFormElements",
    value: function insertFormElements() {
      this.insertHeader();
      this.insertFields();
      this.insertFooter();
    }
  }, {
    key: "init",
    value: function init() {
      this.insertFormElements();
      this.submitBtn.addEventListener('click', this.submitForm.bind(this));
      return this;
    }
  }]);
  return Form;
}();
exports.Form = Form;

/***/ }),

/***/ 8967:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _DOM = __webpack_require__(2909);
var _constants = __webpack_require__(9066);
var _eventsName = __webpack_require__(6073);
var _events = _interopRequireDefault(__webpack_require__(9889));
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var ADDITIONAL_FRAME_CLASSNAMES = 'intrinsic-ignore';
var _listeners = /*#__PURE__*/new WeakSet();
var Frame = /*#__PURE__*/function () {
  function Frame(options) {
    (0, _classCallCheck2["default"])(this, Frame);
    _classPrivateMethodInitSpec(this, _listeners);
    if (!!Frame.instance) {
      return Frame.instance;
    }
    Frame.instance = this;
    this.currentFrameName = '';
    this.options = options;
    this.frameElement = null;
    this.ready = false;
    this.events = new _events["default"]();
  }
  (0, _createClass2["default"])(Frame, [{
    key: "element",
    get: function get() {
      return this.frameElement;
    }
  }, {
    key: "getFrameURL",
    get: function get() {
      var _this$options$lang;
      var host = this.options.mode === 'dev' ? _constants.WALLKIT_POPUP_DEV_URL : _constants.WALLKIT_POPUP_URL;
      var lang = (_this$options$lang = this.options.lang) !== null && _this$options$lang !== void 0 ? _this$options$lang : 'en';
      return "".concat(host, "?PUBLIC_KEY=").concat(this.options.public_key, "&version=").concat(this.options.version, "&lang=").concat(lang);
    }
  }, {
    key: "createFrame",
    value: function createFrame() {
      this.frameElement = (0, _DOM.createElement)('iframe', {
        id: _constants.WALLKIT_FRAME_ID,
        className: "".concat(_constants.WALLKIT_FRAME_ID, " ").concat(ADDITIONAL_FRAME_CLASSNAMES),
        attributes: {
          scrolling: 'no',
          allowtransparency: 'true',
          frameborder: '0',
          width: _constants.WALLKIT_MODAL_MIN_WIDTH,
          height: _constants.WALLKIT_MODAL_MIN_HEIGHT
        }
      });
      this.frameElement.setAttribute("src", this.getFrameURL);
      this.events.notify(_eventsName.FRAME_CREATED, true);
      return this.frameElement;
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      width = width >= _constants.WALLKIT_MODAL_MIN_WIDTH ? width : _constants.WALLKIT_MODAL_MIN_WIDTH;
      height = height >= _constants.WALLKIT_MODAL_MIN_HEIGHT ? height : _constants.WALLKIT_MODAL_MIN_HEIGHT;
      if (this.frameElement) {
        this.frameElement.width = width;
        this.frameElement.height = height;
      }
    }
  }, {
    key: "sendEvent",
    value: function sendEvent(name, value, params) {
      var _this = this;
      var event = function event() {
        if (_this.frameElement && _this.frameElement.contentWindow) {
          var frameWindow = _this.frameElement.contentWindow;
          _this.events.notify(name, value);
          frameWindow.postMessage({
            name: name,
            value: value,
            params: params
          }, '*');
        }
      };
      if (this.ready) {
        event();
      } else {
        this.events.subscribe(_eventsName.WALLKIT_FRAME_READY, event.bind(this));
      }
    }
  }, {
    key: "openFrame",
    value: function openFrame(name, params) {
      var _this2 = this;
      this.currentFrameName = name;
      if (this.ready) {
        this.sendEvent(_eventsName.WALLKIT_CHANGE_FRAME, name, params);
      } else {
        this.events.subscribe(_eventsName.WALLKIT_FRAME_READY, function () {
          _this2.sendEvent(_eventsName.WALLKIT_CHANGE_FRAME, name, params);
        }, {
          once: true
        });
      }
    }
  }, {
    key: "onFrameReady",
    value: function onFrameReady() {
      var _this$options;
      this.ready = true;
      if ((_this$options = this.options) !== null && _this$options !== void 0 && _this$options.onReady) {
        var _this$options2;
        (_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.onReady();
      }
    }
  }, {
    key: "init",
    value: function init() {
      _classPrivateMethodGet(this, _listeners, _listeners2).call(this);
      return this.createFrame();
    }
  }]);
  return Frame;
}();
exports["default"] = Frame;
function _listeners2() {
  var _this3 = this;
  this.events.subscribe(_eventsName.WALLKIT_FRAME_ROUTE_CHANGE, function (value) {
    _this3.currentFrameName = value;
  });
  this.events.subscribe(_eventsName.WALLKIT_FRAME_READY, function (value) {
    if (value === true) {
      _this3.onFrameReady();
    }
  });
}

/***/ }),

/***/ 7761:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Localization = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _classPrivateFieldGet2 = _interopRequireDefault(__webpack_require__(5194));
var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(8478));
var _languages = __webpack_require__(8006);
var _eventsName = __webpack_require__(6073);
var _events2 = _interopRequireDefault(__webpack_require__(9889));
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
var _events = /*#__PURE__*/new WeakMap();
var Localization = /*#__PURE__*/function () {
  function Localization() {
    (0, _classCallCheck2["default"])(this, Localization);
    _classPrivateFieldInitSpec(this, _events, {
      writable: true,
      value: void 0
    });
    (0, _classPrivateFieldSet2["default"])(this, _events, new _events2["default"]());
  }
  (0, _createClass2["default"])(Localization, null, [{
    key: "assembleLanguage",
    value: function assembleLanguage() {
      var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
      if (typeof language === "string") {
        if (_languages.FB_AVAILABLE_LANGUAGES.includes(language.toLowerCase())) {
          return language;
        }
      }
      return 'en';
    }
  }, {
    key: "changeLanguage",
    value: function changeLanguage() {
      var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
      if (typeof language === "string") {
        (0, _classPrivateFieldGet2["default"])(this, _events).notify(_eventsName.WALLKIT_EVENT_CHANGE_LANGUAGE, language);
      }
    }
  }]);
  return Localization;
}();
exports.Localization = Localization;

/***/ }),

/***/ 9269:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(366));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _constants = __webpack_require__(9066);
var _DOM = _interopRequireDefault(__webpack_require__(2909));
var _loaders = __webpack_require__(1758);
var _url = __webpack_require__(5234);
var _events = _interopRequireDefault(__webpack_require__(9889));
var _eventsName = __webpack_require__(6073);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _getModalName = /*#__PURE__*/new WeakSet();
var _createElement = /*#__PURE__*/new WeakSet();
var _createCloseBtn = /*#__PURE__*/new WeakSet();
var _createWrapper = /*#__PURE__*/new WeakSet();
var _createContent = /*#__PURE__*/new WeakSet();
var _createLoader = /*#__PURE__*/new WeakSet();
var _completeModal = /*#__PURE__*/new WeakSet();
var _loadAssets = /*#__PURE__*/new WeakSet();
var Modal = /*#__PURE__*/function () {
  function Modal(_options) {
    (0, _classCallCheck2["default"])(this, Modal);
    _classPrivateMethodInitSpec(this, _loadAssets);
    _classPrivateMethodInitSpec(this, _completeModal);
    _classPrivateMethodInitSpec(this, _createLoader);
    _classPrivateMethodInitSpec(this, _createContent);
    _classPrivateMethodInitSpec(this, _createWrapper);
    _classPrivateMethodInitSpec(this, _createCloseBtn);
    _classPrivateMethodInitSpec(this, _createElement);
    _classPrivateMethodInitSpec(this, _getModalName);
    this.options = _options;
    this.modalFrame = _options ? _options.resourceFrame : null;
    this.content = _options ? _options.content : null;
    this.modalWrapper = null;
    this.modalContent = null;
    this.loaderElement = null;
    this.isLoading = false;
    this.closeOutside = true;
    this.onClose = _options ? _options.onClose : null;
  }
  (0, _createClass2["default"])(Modal, [{
    key: "bindCloseEvent",
    value: function bindCloseEvent(element) {
      return element.addEventListener('click', this.hide.bind(this));
    }
  }, {
    key: "insertContent",
    value: function insertContent(element) {
      if (this.modalContent && element) {
        if (typeof element === "string") {
          this.modalContent.insertAdjacentHTML('beforeend', element);
        } else if (element instanceof HTMLElement) {
          this.modalContent.appendChild(element);
        }
      }
    }
  }, {
    key: "toggleLoader",
    value: function toggleLoader(state) {
      this.isLoading = state;
      this.loaderElement.style.display = state ? 'flex' : 'none';
    }
  }, {
    key: "open",
    value: function open(name, params) {
      if (this.modalFrame) {
        this.modalFrame.openFrame(name, params);
        this.show();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {}
  }, {
    key: "show",
    value: function show() {
      this.modalWrapper.style.display = 'flex';
    }
  }, {
    key: "hide",
    value: function hide() {
      var events = new _events["default"]();
      events.notify(_eventsName.MODAL_CLOSED, {
        name: _classPrivateMethodGet(this, _getModalName, _getModalName2).call(this)
      });
      if (this.onClose) {
        this.onClose();
      }
      this.modalWrapper.style.display = 'none';
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      if (this.modalFrame) {
        this.modalFrame.resize(width, height);
      }
    }
  }, {
    key: "sendEvent",
    value: function sendEvent(name, value, params) {
      if (this.modalFrame) {
        this.modalFrame.sendEvent(name, value, params);
      }
    }
  }, {
    key: "openByHash",
    value: function openByHash() {
      var modal = (0, _url.parseModalHashURL)();
      if (modal) {
        this.open(modal.name, modal.params);
      } else if ((0, _url.parseUrlToShowAuthModal)()) {
        this.open('sign-in');
      }
    }
  }, {
    key: "onReady",
    value: function onReady() {
      var _this$options;
      if ((_this$options = this.options) !== null && _this$options !== void 0 && _this$options.onReady) {
        this.options.onReady(this);
      }
    }
  }, {
    key: "setError",
    value: function setError(error) {
      this.modalContent.insertAdjacentHTML('afterbegin', "<div class=\"wallkit-modal-error\">".concat(error, "</div>"));
    }
  }, {
    key: "init",
    value: function init() {
      _classPrivateMethodGet(this, _createWrapper, _createWrapper2).call(this);
      _classPrivateMethodGet(this, _createContent, _createContent2).call(this);
      _classPrivateMethodGet(this, _createLoader, _createLoader2).call(this);
      _classPrivateMethodGet(this, _completeModal, _completeModal2).call(this);
      this.onReady();
    }
  }]);
  return Modal;
}();
exports["default"] = Modal;
function _getModalName2() {
  var _this$options$modalNa, _this$options2;
  return (_this$options$modalNa = (_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.modalName) !== null && _this$options$modalNa !== void 0 ? _this$options$modalNa : 'wk-modal';
}
function _createElement2(elementTag, elementName, options) {
  var elementIdName = _classPrivateMethodGet(this, _getModalName, _getModalName2).call(this) + '-' + elementName;
  var elementIndex = 0;
  var elementId = elementIdName;
  while (_DOM["default"].checkIfElementExists('#' + elementId)) {
    ++elementIndex;
    elementId = elementIdName + '-' + elementIndex;
  }
  return _DOM["default"].createElement(elementTag, _objectSpread({
    id: elementId
  }, options));
}
function _createCloseBtn2() {
  var closeBtn = _classPrivateMethodGet(this, _createElement, _createElement2).call(this, 'div', 'close-btn', {
    className: _constants.WALLKIT_MODAL_CLOSE_BTN_CLASSNAME
  });
  closeBtn.innerHTML = '&#xd7;'; // Plus Symbol

  this.bindCloseEvent(closeBtn);
  return closeBtn;
}
function _createWrapper2() {
  var _this$options3,
    _this = this;
  var modalClassName = _constants.WALLKIT_MODAL_WRAPPER_CLASSNAME;
  if ((_this$options3 = this.options) !== null && _this$options3 !== void 0 && _this$options3.className) {
    var _this$options4;
    modalClassName += ' ' + ((_this$options4 = this.options) === null || _this$options4 === void 0 ? void 0 : _this$options4.className);
  }
  this.modalWrapper = _classPrivateMethodGet(this, _createElement, _createElement2).call(this, 'div', 'wrapper', {
    styles: {
      display: 'none'
    },
    className: modalClassName
  });
  this.modalWrapper.addEventListener('click', function (event) {
    if (event.target.id === _this.modalWrapper.id) {
      if (_this.closeOutside) {
        _this.hide();
      }
    }
  });
  return this.modalWrapper;
}
function _createContent2() {
  this.modalContent = _classPrivateMethodGet(this, _createElement, _createElement2).call(this, 'div', 'content', {
    className: _constants.WALLKIT_MODAL_CONTENT_CLASSNAME
  });
  this.modalContent.style.minWidth = _constants.WALLKIT_MODAL_MIN_WIDTH + 'px';
  this.modalContent.style.minHeight = _constants.WALLKIT_MODAL_MIN_HEIGHT + 'px';
  this.modalContent.style.maxWidth = _constants.WALLKIT_MODAL_MAX_WIDTH + 'px';
  return this.modalContent;
}
function _createLoader2() {
  var _this$options5;
  this.loaderElement = _classPrivateMethodGet(this, _createElement, _createElement2).call(this, 'div', 'wallkit-modal-spinner', {
    className: 'wallkit-spinner',
    styles: {
      display: (_this$options5 = this.options) !== null && _this$options5 !== void 0 && _this$options5.initialLoader ? 'flex' : 'none'
    }
  });
  this.loaderElement.insertAdjacentHTML('beforeend', '<div class="wallkit-spinner__container">' + '<div class="cube1"></div>' + '<div class="cube2"></div>' + '</div>');
}
function _completeModal2() {
  _classPrivateMethodGet(this, _loadAssets, _loadAssets2).call(this);
  this.modalWrapper.appendChild(this.modalContent);
  this.modalContent.appendChild(this.loaderElement);
  this.modalContent.appendChild(_classPrivateMethodGet(this, _createCloseBtn, _createCloseBtn2).call(this));
  if (this.modalFrame) {
    this.insertContent(this.modalFrame.init());
  } else if (this.modalContent) {
    this.insertContent(this.content);
  }
  return _DOM["default"].injectInBody(this.modalWrapper);
}
function _loadAssets2() {
  (0, _loaders.loadWallkitAsset)('css', '1.0', 'spinner');
}

/***/ }),

/***/ 4753:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _classPrivateFieldGet6 = _interopRequireDefault(__webpack_require__(5194));
var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(8478));
var _DOM = __webpack_require__(2909);
var _constants = __webpack_require__(9066);
var _eventsName = __webpack_require__(6073);
var _events2 = _interopRequireDefault(__webpack_require__(9889));
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
var _options = /*#__PURE__*/new WeakMap();
var _events = /*#__PURE__*/new WeakMap();
var _apiUrl = /*#__PURE__*/new WeakMap();
var SDK = /*#__PURE__*/function () {
  function SDK(options) {
    (0, _classCallCheck2["default"])(this, SDK);
    _classPrivateFieldInitSpec(this, _options, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _events, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _apiUrl, {
      writable: true,
      value: void 0
    });
    if (!!SDK.instance) {
      return SDK.instance;
    }
    if (!options) {
      return new Error('No Options Provided');
    }
    SDK.instance = this;
    this.methods = null;
    this.client = null;
    (0, _classPrivateFieldSet2["default"])(this, _options, options);
    (0, _classPrivateFieldSet2["default"])(this, _events, new _events2["default"]());
    (0, _classPrivateFieldSet2["default"])(this, _apiUrl, options.mode === 'dev' ? 'https://api.dev.wallkit.net/api/v1' : undefined);
    if (window.Wallkit) {
      this.onLoad();
    } else {
      this.load();
    }
  }
  (0, _createClass2["default"])(SDK, [{
    key: "onLoad",
    value: function onLoad() {
      if (window.Wallkit) {
        var _classPrivateFieldGet2, _classPrivateFieldGet3, _classPrivateFieldGet4;
        window.Wallkit.init({
          resource: (0, _classPrivateFieldGet6["default"])(this, _options).public_key,
          api_url: (0, _classPrivateFieldGet6["default"])(this, _apiUrl),
          subDomainCookie: (_classPrivateFieldGet2 = (_classPrivateFieldGet3 = (0, _classPrivateFieldGet6["default"])(this, _options).cookies) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.subDomain) !== null && _classPrivateFieldGet2 !== void 0 ? _classPrivateFieldGet2 : false
        });
        this.methods = window.Wallkit;
        this.client = window.Wallkit.client;
        (0, _classPrivateFieldGet6["default"])(this, _events).notify(_eventsName.WALLKIT_SDK_LOADED, window.Wallkit);
        if ((_classPrivateFieldGet4 = (0, _classPrivateFieldGet6["default"])(this, _options)) !== null && _classPrivateFieldGet4 !== void 0 && _classPrivateFieldGet4.onLoaded) {
          var _classPrivateFieldGet5;
          (_classPrivateFieldGet5 = (0, _classPrivateFieldGet6["default"])(this, _options)) === null || _classPrivateFieldGet5 === void 0 ? void 0 : _classPrivateFieldGet5.onLoaded();
        }
      }
    }
  }, {
    key: "awaitLoad",
    value: function awaitLoad() {
      var _this = this;
      return new Promise(function (resolve) {
        if (!_this.methods) {
          (0, _classPrivateFieldGet6["default"])(_this, _events).subscribe(_eventsName.WALLKIT_SDK_LOADED, function () {
            return resolve(_this);
          });
        } else {
          resolve(_this);
        }
      });
    }
  }, {
    key: "load",
    value: function load() {
      (0, _DOM.insertScript)("".concat(_constants.WALLKIT_CDN_URL, "/js/sdk/0.0.51/wallkit.umd.min.js"), 'wallkit-js-sdk', this.onLoad.bind(this));
    }
  }]);
  return SDK;
}();
exports["default"] = SDK;

/***/ }),

/***/ 4442:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(8047));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7240));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(366));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(3298));
var _createClass2 = _interopRequireDefault(__webpack_require__(1795));
var _classPrivateFieldGet2 = _interopRequireDefault(__webpack_require__(5194));
var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(8478));
var _modal = _interopRequireDefault(__webpack_require__(9269));
var _ChangePasswordForm = __webpack_require__(8445);
var _constants = __webpack_require__(9066);
var _lodash = _interopRequireDefault(__webpack_require__(5828));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _options = /*#__PURE__*/new WeakMap();
var _initModal = /*#__PURE__*/new WeakSet();
var _initChangePasswordForm = /*#__PURE__*/new WeakSet();
var _onSubmitChangePasswordForm = /*#__PURE__*/new WeakSet();
var _setErrorMessageChangePasswordForm = /*#__PURE__*/new WeakSet();
var _successChangePasswordForm = /*#__PURE__*/new WeakSet();
var UserManager = /*#__PURE__*/function () {
  function UserManager(_options2) {
    (0, _classCallCheck2["default"])(this, UserManager);
    _classPrivateMethodInitSpec(this, _successChangePasswordForm);
    _classPrivateMethodInitSpec(this, _setErrorMessageChangePasswordForm);
    _classPrivateMethodInitSpec(this, _onSubmitChangePasswordForm);
    _classPrivateMethodInitSpec(this, _initChangePasswordForm);
    _classPrivateMethodInitSpec(this, _initModal);
    _classPrivateFieldInitSpec(this, _options, {
      writable: true,
      value: void 0
    });
    (0, _classPrivateFieldSet2["default"])(this, _options, _options2);
    this.popup = _options2.popup;
    this.authentication = _options2.authentication;
    _classPrivateMethodGet(this, _initModal, _initModal2).call(this, _options2);
  }
  (0, _createClass2["default"])(UserManager, [{
    key: "cancelModalForm",
    value: function cancelModalForm(options) {
      this.modal.hide();
      if (options.openPopupName) {
        this.popup.open(options.openPopupName);
      }
    }
  }, {
    key: "showChangePassword",
    value: function showChangePassword() {
      this.modal.show();
      _classPrivateMethodGet(this, _initChangePasswordForm, _initChangePasswordForm2).call(this);
    }
  }, {
    key: "getDefaultUserManagerModalContent",
    value: function getDefaultUserManagerModalContent() {
      return "<div>\n                    <div id=\"user-manager-modal-error\"></div>\n                    <div id=\"".concat(_constants.WALLKIT_USER_MANAGER_MODAL_FORM_PLACEHOLDER_ID, "\"></div>\n                </div>");
    }
  }]);
  return UserManager;
}();
exports["default"] = UserManager;
function _initModal2(options) {
  var _this = this;
  this.modal = new _modal["default"]({
    modalName: options.name || 'user-manager-modal',
    content: options.content || this.getDefaultUserManagerModalContent(),
    className: options.className || 'wallkit-auth-modal',
    initialLoader: options.loader || false
  });
  this.modal.init();
  this.modal.modalWrapper.addEventListener('click', function (event) {
    if (_this.changePasswordForm && event.target.classList.contains('account-settings-link')) {
      event.preventDefault();
      _this.changePasswordForm.cancelForm();
    }
  });
}
function _initChangePasswordForm2() {
  var _this2 = this;
  if (!this.changePasswordForm) {
    var _ref = (0, _classPrivateFieldGet2["default"])(this, _options).customizeForms || {},
      messages = _ref.messages,
      changePassword = _ref.changePassword;
    var changePasswordMessages = {};
    if (!(0, _lodash["default"])(changePassword) && !(0, _lodash["default"])(changePassword.messages)) {
      changePasswordMessages = changePassword.messages;
    }
    this.changePasswordForm = new _ChangePasswordForm.ChangePasswordForm("#".concat(_constants.WALLKIT_USER_MANAGER_MODAL_FORM_PLACEHOLDER_ID), _objectSpread(_objectSpread({}, changePassword || {}), {}, {
      messages: _objectSpread(_objectSpread({}, messages || {}), changePasswordMessages),
      onCancel: function onCancel() {
        _this2.cancelModalForm({
          openPopupName: 'account-settings'
        });
      },
      onSubmit: function onSubmit(data) {
        _classPrivateMethodGet(_this2, _onSubmitChangePasswordForm, _onSubmitChangePasswordForm2).call(_this2, data);
      }
    }));
    this.changePasswordForm.render();
  } else {
    this.changePasswordForm.resetForm();
    this.changePasswordForm.reRender();
  }
}
function _onSubmitChangePasswordForm2(_x) {
  return _onSubmitChangePasswordForm3.apply(this, arguments);
}
function _onSubmitChangePasswordForm3() {
  _onSubmitChangePasswordForm3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref2) {
    var old_password, new_password;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          old_password = _ref2.old_password, new_password = _ref2.new_password;
          _context.prev = 1;
          if (this.modal) {
            this.modal.toggleLoader(true);
          }
          _context.next = 5;
          return this.authentication.firebase.reauthenticateWithCredential(old_password);
        case 5:
          _context.next = 7;
          return this.authentication.firebase.updatePassword(new_password);
        case 7:
          _classPrivateMethodGet(this, _successChangePasswordForm, _successChangePasswordForm2).call(this);
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          _classPrivateMethodGet(this, _setErrorMessageChangePasswordForm, _setErrorMessageChangePasswordForm2).call(this, _context.t0);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, this, [[1, 10]]);
  }));
  return _onSubmitChangePasswordForm3.apply(this, arguments);
}
function _setErrorMessageChangePasswordForm2(error) {
  if (this.changePasswordForm) {
    if (!(0, _lodash["default"])(error.message)) {
      this.changePasswordForm.setFormError(error.message, error.code || false);
    }
    if (this.modal) {
      this.modal.toggleLoader(false);
    }
  }
}
function _successChangePasswordForm2() {
  if (this.changePasswordForm) {
    var _ref3 = (0, _classPrivateFieldGet2["default"])(this, _options).customizeForms || {},
      successPasswordChange = _ref3.successPasswordChange;
    var _ref4 = successPasswordChange || {},
      description = _ref4.description,
      backLinkTitle = _ref4.backLinkTitle;
    this.changePasswordForm.showFormResult("\n            <div class=\"wk-success-message wk-password-reset-success\">\n                <h2 class=\"wk-success-message__title\">".concat(description || 'Your password has been successfully changed!', "</h2>\n                <a href=\"#\" class=\"wk-form__link account-settings-link\">").concat(backLinkTitle || 'Back to account settings', "</a>\n            </div>\n        "));
    if (this.modal) {
      this.modal.toggleLoader(false);
    }
  }
}

/***/ }),

/***/ 2909:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(2125);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.normalizeSelector = exports.loadCSS = exports.isMobile = exports.isDocumentAvailable = exports.insertScript = exports.insertAfter = exports.injectInHead = exports.injectInBody = exports["default"] = exports.createElement = exports.checkIfElementExists = void 0;
var _Error = _interopRequireWildcard(__webpack_require__(542));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var isDocumentAvailable = function isDocumentAvailable() {
  return !!document;
};
exports.isDocumentAvailable = isDocumentAvailable;
var checkIfElementExists = function checkIfElementExists(elementSelector) {
  if (!isDocumentAvailable()) return _Error["default"].handleError('Document is not available', _Error.ERRORS_TYPES.DOM_ERROR);
  return !!document.querySelector(elementSelector);
};
exports.checkIfElementExists = checkIfElementExists;
var insertAfter = function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};
exports.insertAfter = insertAfter;
var createElement = function createElement(tag, options) {
  if (!isDocumentAvailable()) return _Error["default"].handleError('Document is not available', _Error.ERRORS_TYPES.DOM_ERROR);
  if (!tag) return _Error["default"].checkRequiredArgument(tag);
  var element = document.createElement(tag);
  var _ref = options !== null && options !== void 0 ? options : {},
    id = _ref.id,
    className = _ref.className,
    styles = _ref.styles,
    attributes = _ref.attributes,
    innerText = _ref.innerText,
    innerHTML = _ref.innerHTML; // Options Arguments

  if (id) {
    element.id = id;
  }
  if (innerText) {
    element.innerText = innerText;
  }
  if (innerHTML) {
    element.innerHTML = innerHTML;
  }
  if (className) {
    element.setAttribute('class', className);
  }
  if (styles && Object.keys(styles) && Object.keys(styles).length) {
    for (var prop in styles) {
      if (styles.hasOwnProperty(prop)) {
        element.style[prop] = styles[prop];
      }
    }
  }
  if (attributes && Object.keys(attributes) && Object.keys(attributes).length) {
    for (var _prop in attributes) {
      if (attributes.hasOwnProperty(_prop)) {
        element.setAttribute(_prop, attributes[_prop]);
      }
    }
  }
  return element;
};
exports.createElement = createElement;
var injectInBody = function injectInBody(element) {
  if (!isDocumentAvailable()) return _Error["default"].handleError('Document is not available', _Error.ERRORS_TYPES.DOM_ERROR);
  if (!element) return _Error["default"].checkRequiredArgument(element, 'element');
  return document.body.appendChild(element);
};
exports.injectInBody = injectInBody;
var injectInHead = function injectInHead(element) {
  if (!isDocumentAvailable()) return _Error["default"].handleError('Document is not available', _Error.ERRORS_TYPES.DOM_ERROR);
  if (!element) return _Error["default"].checkRequiredArgument(element, 'element');
  return document.head.appendChild(element);
};
exports.injectInHead = injectInHead;
var loadCSS = function loadCSS(url, id) {
  if (!isDocumentAvailable()) return _Error["default"].handleError('Document is not available', _Error.ERRORS_TYPES.DOM_ERROR);
  if (checkIfElementExists('#' + id)) return;
  var head = document.querySelector('head');
  var link = document.createElement('link');
  if (id) {
    link.id = id;
  }
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  link.media = 'all';
  return head.appendChild(link);
};
exports.loadCSS = loadCSS;
var insertScript = function insertScript(url, id, onload) {
  if (!isDocumentAvailable()) return _Error["default"].handleError('Document is not available', _Error.ERRORS_TYPES.DOM_ERROR);
  if (checkIfElementExists('#' + id)) return;
  var scriptElement = createElement('script', {
    id: id,
    attributes: {
      src: url
    }
  });
  if (onload) {
    scriptElement.addEventListener('load', onload, {
      once: true
    });
  }
  return injectInBody(scriptElement);
};
exports.insertScript = insertScript;
var isMobile = function isMobile() {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 800;
  } else {
    return false;
  }
};
exports.isMobile = isMobile;
var normalizeSelector = function normalizeSelector(selector) {
  if (!!selector && !['#', '.'].includes(selector.charAt(0))) {
    selector = "#".concat(selector);
  }
  return selector;
};
exports.normalizeSelector = normalizeSelector;
var _default = {
  createElement: createElement,
  injectInBody: injectInBody,
  checkIfElementExists: checkIfElementExists,
  loadCSS: loadCSS,
  insertScript: insertScript,
  isMobile: isMobile,
  normalizeSelector: normalizeSelector
};
exports["default"] = _default;

/***/ }),

/***/ 5048:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setCookie = exports.removeCookie = exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(366));
var setCookie = function setCookie(name, value, options) {
  if (!name || !value) {
    return;
  }
  options = options || {};
  var _options = options,
    expires = _options.expires;
  if (typeof expires === "number" && expires) {
    var date = new Date();
    date.setTime(date.getTime() + expires * 1000);
    expires = options.expires = date;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }
  var updatedCookie = "".concat(name, "=").concat(encodeURIComponent(value), "; ");
  for (var propName in options) {
    var propValue = options[propName];
    if (propValue) {
      updatedCookie += "".concat(propName, "=").concat(propValue, "; ");
    }
  }
  document.cookie = updatedCookie;
};
exports.setCookie = setCookie;
var removeCookie = function removeCookie(name, domain) {
  var _props;
  var props = (_props = {}, (0, _defineProperty2["default"])(_props, name, ''), (0, _defineProperty2["default"])(_props, "expires", 'Thu, 01 Jan 1970 00:00:00 UTC'), (0, _defineProperty2["default"])(_props, "path", '/'), (0, _defineProperty2["default"])(_props, "domain", domain || null), _props);
  var cookieFingerprint = '';
  for (var propName in props) {
    var propValue = props[propName];
    if (propValue !== null && propValue !== undefined) {
      cookieFingerprint += "".concat(propName, "=").concat(propValue, "; ");
    }
  }
  document.cookie = cookieFingerprint;
};
exports.removeCookie = removeCookie;
var _default = {
  setCookie: setCookie,
  removeCookie: removeCookie
};
exports["default"] = _default;

/***/ }),

/***/ 7857:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isCrawler = void 0;
var isCrawler = function isCrawler() {
  return /bot|googlebot|crawler|spider|robot|crawling|facebookexternalhit|facebookcatalog/i.test(navigator.userAgent);
};
exports.isCrawler = isCrawler;

/***/ }),

/***/ 1758:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.loadWallkitAsset = exports.loadScripts = exports["default"] = void 0;
var _DOM = __webpack_require__(2909);
var _constants = __webpack_require__(9066);
var loadWallkitAsset = function loadWallkitAsset(type, version, name) {
  var min = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  switch (type) {
    case 'css':
      var assetName = name;
      if (min) {
        assetName += '.min.css';
      } else {
        assetName += '.css';
      }
      (0, _DOM.loadCSS)("".concat(_constants.WALLKIT_CDN_ASSETS_URL, "/css/").concat(version, "/").concat(assetName), "wk-css-".concat(name));
      return;
    default:
      return;
  }
};
exports.loadWallkitAsset = loadWallkitAsset;
var loadScripts = function loadScripts(scripts) {
  if (Array.isArray(scripts)) {
    scripts.forEach(function (script) {
      (0, _DOM.insertScript)(script.url, script.id, script.onload);
    });
  }
};
exports.loadScripts = loadScripts;
var _default = {
  loadWallkitAsset: loadWallkitAsset,
  loadScripts: loadScripts
};
exports["default"] = _default;

/***/ }),

/***/ 347:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = {
  setItem: function setItem(key, value) {
    if (!this.isAvailable()) return null;
    return window.localStorage.setItem(key, value);
  },
  getItem: function getItem(key) {
    if (!this.isAvailable()) return null;
    return window.localStorage.getItem(key);
  },
  removeItem: function removeItem(key) {
    if (!this.isAvailable()) return;
    return window.localStorage.removeItem(key);
  },
  isAvailable: function isAvailable() {
    try {
      window.localStorage.setItem('', '');
      window.localStorage.removeItem('');
      return true;
    } catch (e) {
      return false;
    }
  }
};
exports["default"] = _default;

/***/ }),

/***/ 8672:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isApplePayAvailable = void 0;
var isApplePayAvailable = function isApplePayAvailable() {
  try {
    if (window.ApplePaySession) {
      return window.ApplePaySession.canMakePayments();
    } else {
      return false;
    }
  } catch (e) {
    console.error("ApplePay Error", e);
    return false;
  }
};
exports.isApplePayAvailable = isApplePayAvailable;

/***/ }),

/***/ 5234:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5656);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resetSearchParams = exports.resetHash = exports.parseUrlToShowAuthModal = exports.parseResetPasswordOobCodeHash = exports.parseModalHashURL = exports.parseConfirmTokenHash = exports.parseAuthTokenHash = exports.parseAuthEmailLinkOobCodeHash = exports.getParentDomain = exports.getDomainWithoutSubdomain = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(2125));
var _lodash = _interopRequireDefault(__webpack_require__(5828));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var parseModalHashURL = function parseModalHashURL() {
  var UryModal = /#WkModal\((.*)\)$/.exec(decodeURIComponent(window.location.hash));
  if (UryModal && UryModal[1]) {
    var par = UryModal[1].split(/,(.+)/);
    if (typeof par[1] !== "undefined") {
      try {
        par[1] = JSON.parse(par[1]);
      } catch (_) {
        par[1] = {
          value: par[1].trim()
        };
      }
    }
    window.location.hash = "";
    return {
      name: par[0],
      params: (0, _typeof2["default"])(par[1]) === "object" ? par[1] : null
    };
  }
};
exports.parseModalHashURL = parseModalHashURL;
var parseAuthTokenHash = function parseAuthTokenHash() {
  var hash = decodeURIComponent(window.location.hash);
  if (hash !== null && hash !== void 0 && hash.includes('wk-authorize')) {
    var splitHash = hash.split('=');
    var token = splitHash === null || splitHash === void 0 ? void 0 : splitHash[1];
    if (token) {
      return token;
    }
  }
  return null;
};
exports.parseAuthTokenHash = parseAuthTokenHash;
var parseConfirmTokenHash = function parseConfirmTokenHash() {
  var hash = decodeURIComponent(window.location.hash);
  if (hash !== null && hash !== void 0 && hash.includes('wk-confirm-email')) {
    var splitHash = hash.split('=');
    var token = splitHash === null || splitHash === void 0 ? void 0 : splitHash[1];
    if (token) {
      return token;
    }
  }
  return null;
};
exports.parseConfirmTokenHash = parseConfirmTokenHash;
var resetHash = function resetHash() {
  window.location.hash = '';
  var path = window.location.href.replace('#', '');
  window.history.pushState('', '', path);
};
exports.resetHash = resetHash;
var resetSearchParams = function resetSearchParams(params) {
  if (!!params && !!window.location.search && window.location.search.includes(params)) {
    if (window.location.search.replace(params, '') === '?') {
      params = '?' + params;
    }
    var path = window.location.href.replace(params, '');
    window.history.pushState('', '', path);
  }
};
exports.resetSearchParams = resetSearchParams;
var getDomainWithoutSubdomain = function getDomainWithoutSubdomain(url) {
  var urlParts = new URL(url).hostname.split('.');
  return urlParts.slice(0).slice(-(urlParts.length === 4 ? 3 : 2)).join('.');
};
exports.getDomainWithoutSubdomain = getDomainWithoutSubdomain;
var getParentDomain = function getParentDomain() {
  return ".".concat(getDomainWithoutSubdomain(window.location));
};
exports.getParentDomain = getParentDomain;
var parseResetPasswordOobCodeHash = function parseResetPasswordOobCodeHash() {
  var hash = decodeURIComponent(window.location.hash);
  if (hash !== null && hash !== void 0 && hash.includes('#reset-password=')) {
    var splitHash = hash.split('=');
    var oobCode = splitHash === null || splitHash === void 0 ? void 0 : splitHash[1];
    if (oobCode) {
      return oobCode;
    }
  }
  return null;
};
exports.parseResetPasswordOobCodeHash = parseResetPasswordOobCodeHash;
var parseAuthEmailLinkOobCodeHash = function parseAuthEmailLinkOobCodeHash() {
  var hash = decodeURIComponent(window.location.hash);
  var authData = {};
  if (hash !== null && hash !== void 0 && hash.includes('#auth-email-link=')) {
    var splitHash = hash.split('&');
    if (Array.isArray(splitHash)) {
      var _iterator = _createForOfIteratorHelper(splitHash),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var hashItem = _step.value;
          var item = hashItem.split('=');
          if (!(0, _lodash["default"])(item[0]) && !(0, _lodash["default"])(item[1])) {
            item[0] = item[0].toLowerCase();
            if (item[0].startsWith('#')) {
              item[0] = item[0].slice(1);
            }
            if (item[0] === 'auth-email-link') {
              item[0] = 'oobcode';
            }
            authData[item[0]] = item[1];
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }
  return authData;
};
exports.parseAuthEmailLinkOobCodeHash = parseAuthEmailLinkOobCodeHash;
var parseUrlToShowAuthModal = function parseUrlToShowAuthModal() {
  var authUrlPattern = 'auth-modal=true';
  var search = decodeURIComponent(window.location.search);
  if (!!(search !== null && search !== void 0 && search.includes(authUrlPattern))) {
    resetSearchParams(authUrlPattern);
    return true;
  }
  return false;
};
exports.parseUrlToShowAuthModal = parseUrlToShowAuthModal;

/***/ }),

/***/ 4174:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ 5828:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap');

/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' ||
        typeof value.splice == 'function' || isBuffer(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (nonEnumShadows || isPrototype(value)) {
    return !nativeKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEmpty;


/***/ }),

/***/ 1185:
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7240:
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4869:
/***/ ((module) => {

function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }
  return descriptor.value;
}
module.exports = _classApplyDescriptorGet, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9194:
/***/ ((module) => {

function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}
module.exports = _classApplyDescriptorSet, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3298:
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4578:
/***/ ((module) => {

function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }
  return privateMap.get(receiver);
}
module.exports = _classExtractFieldDescriptor, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 5194:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classApplyDescriptorGet = __webpack_require__(4869);
var classExtractFieldDescriptor = __webpack_require__(4578);
function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = classExtractFieldDescriptor(receiver, privateMap, "get");
  return classApplyDescriptorGet(receiver, descriptor);
}
module.exports = _classPrivateFieldGet, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8478:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classApplyDescriptorSet = __webpack_require__(9194);
var classExtractFieldDescriptor = __webpack_require__(4578);
function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
  classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}
module.exports = _classPrivateFieldSet, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1795:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(4573);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 366:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(4573);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4560:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var superPropBase = __webpack_require__(93);
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _get.apply(this, arguments);
}
module.exports = _get, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7474:
/***/ ((module) => {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7964:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(3903);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 5656:
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8442:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(2125)["default"]);
var assertThisInitialized = __webpack_require__(1185);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3333:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(2125)["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3903:
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 93:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getPrototypeOf = __webpack_require__(7474);
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
module.exports = _superPropBase, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 577:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(2125)["default"]);
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4573:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(2125)["default"]);
var toPrimitive = __webpack_require__(577);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2125:
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8047:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(3333)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(6004);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=wallkit-integration-library.js.map
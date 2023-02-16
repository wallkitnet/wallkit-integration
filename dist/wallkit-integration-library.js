/*!
 * Package name: wallkit-integration-lib.
 * Package description: Wallkit Integration Library. Library to manipulate with Wallkit System: Paywall, Modals, Authentication, SDK..
 * Package version: 3.0.8.
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
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 2350:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LIBRARY_STYLES = void 0;
var LIBRARY_STYLES = "\n        .wallkit-modal-wrapper {\n            z-index: 100;\n            position: fixed;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: rgba(18, 18, 20, 0.9);\n            display: flex;\n            align-items: center;\n            justify-content: flex-start;\n            flex-direction: column;\n            overflow-y: auto;\n            padding: 70px 15px 20px;\n        }\n\n        .wallkit-modal-wrapper__content {\n            background-color: #fff;\n            flex-shrink: 0;\n            position: relative;\n            box-sizing: border-box;\n            overflow: hidden;\n        }\n        \n        @media screen and (max-width: 500px) {\n            .wallkit-modal-wrapper__content {\n                width: 100%;\n                min-width: auto!important;\n            }\n        }\n\n        .wallkit-modal-wrapper__close-btn {\n            position: absolute;\n            right: 10px;\n            top: 10px;\n            cursor: pointer;\n            color: #000;\n            font-size: 37px;\n            width: 37px;\n            height: 37px;\n            text-align: center;\n            line-height: 34px;\n        }\n\n        .wallkit-modal-wrapper .wk-frame {\n            transition: all 0.3s linear 0s;\n            max-width: 100%;\n            border: none;\n        }\n\n        .wallkit-auth-modal {\n            z-index: 999;\n        }\n\n        .wallkit-auth-modal .wallkit-modal-wrapper__content {\n            padding: 20px;\n        }\n\n        .wallkit-auth-modal .wallkit-auth-modal__title {\n            font-family: Roboto, sans-serif;\n            text-align: center;\n        }\n        \n        .wk-auth-form {\n            display: flex;\n            flex-direction: column;\n        }\n\n        .wk-form-field {\n            display: flex;\n            flex-direction: column;\n            font-family: Oxygen, sans-serif;\n            margin-bottom: 10px;\n        }\n\n        .wk-form-field .wk-form-field__label {\n            font-weight: 500;\n            color: #333;\n            margin-bottom: 5px;\n        }\n\n        .wk-form-field .wk-form-field__input-wrapper {\n            margin-bottom: 5px;\n            position: relative;\n        }\n        \n        .wk-eye-toggle {\n            background: url(https://www.gstatic.com/images/icons/material/system/1x/visibility_black_24dp.png);\n            width: 24px;\n            height: 24px;\n        }\n        \n        .wk-form-field__field-description {\n            font-size: 11px;\n            color: #989898;\n        }\n        \n        .wk-eye-toggle.wk-eye-toggled {\n            background: url(https://www.gstatic.com/images/icons/material/system/1x/visibility_off_black_24dp.png);\n        }\n        \n        .wk-form-field__field-affix {\n            position: absolute;\n            right: 5px;\n            top: 0;\n            bottom: 0;\n        }\n        \n        .wk-form-field .wk-form-field__input {\n            border-radius: 0;\n            border: 0;\n            border-bottom: 1px solid #ccc;\n            padding: 5px;\n            box-sizing: border-box;\n            width: 100%;\n        }\n        \n        .wk-field-list {\n            list-style-type: circle;\n            padding-left: 12px;\n            margin-top: 1px;\n        }\n\n        .wk-form-field .wk-form-field__input:focus {\n            border-bottom: 1px solid #3f51b5;\n            outline: none;\n        }\n\n        .wk-form-field .wk-form-field__message {\n            font-size: 12px;\n        }\n\n        .wk-auth-form-button {\n            background-color: #db4437;\n            direction: ltr;\n            font-weight: 500;\n            height: auto;\n            line-height: normal;\n            max-width: 220px;\n            min-height: 40px;\n            padding: 8px 16px;\n            text-align: left;\n            width: 100%;\n            box-sizing: border-box;\n            box-shadow: 0 2px 2px 0 rgba(0,0,0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.20), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n            border-radius: 2px;\n            font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n            margin: 0 auto 15px;\n            cursor: pointer;\n        }\n        \n        .wk-auth-form-button:focus,\n        .wk-auth-form-button:active,{\n            background-color: #5b6abe;\n        }\n\n        .wk-form-field.wk-form-field--invalid .wk-form-field__input {\n            border-bottom: 1px solid #dd2c00;\n        }\n        \n        .wk-form-field.wk-form-field--checkbox.wk-form-field--invalid .wk-form-field__checkmark {\n            border-color: #dd2c00;\n        }\n\n        .wk-form-field.wk-form-field--valid .wk-form-field__input {\n            border-bottom: 1px solid green;\n        }\n\n        .wk-form-field.wk-form-field--invalid .wk-form-field__message {\n            color: #dd2c00;\n        }\n\n        .wk-form-field.wk-form-field--valid .wk-form-field__message {\n            color: green;\n        }\n\n        .wk-form .wk-form__link {\n            font-size: 14px;\n            color: #3170f3;\n            text-decoration: underline;\n        }\n\n        .wk-form {\n            font-family: Oxygen, sans-serif;\n        }\n        \n        .wk-form-header {\n            margin-bottom: 10px;\n        }\n\n        .wk-form .wk-form__footer {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n        \n        .wk-form .wk-form__footer.wk-form__footer--right {\n            justify-content: flex-end;\n        }\n\n        .wk-form .wk-form__sub-footer {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin-bottom: 20px;\n        }\n\n        .wk-form__reset-password {\n            text-align: right;\n        }\n\n        .wk-form-result {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n        }\n\n        .wk-form-button {\n            border: none;\n            border-radius: 2px;\n            background-color: #3f51b5;\n            color: #fff;\n            position: relative;\n            height: 36px;\n            margin: 0;\n            min-width: 64px;\n            padding: 0 16px;\n            display: inline-block;\n            font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n            font-size: 14px;\n            font-weight: 500;\n            text-transform: uppercase;\n            letter-spacing: 0;\n            overflow: hidden;\n            will-change: box-shadow;\n            transition: box-shadow .2s cubic-bezier(0.4, 0, 1, 1),background-color .2s cubic-bezier(0.4, 0, 0.2, 1),color .2s cubic-bezier(0.4, 0, 0.2, 1);\n            outline: none;\n            cursor: pointer;\n            text-decoration: none;\n            text-align: center;\n            line-height: 36px;\n            vertical-align: middle;\n        }\n\n        .wk-form__error {\n            display: none;\n            margin: 10px 0;\n            border: 1px solid #f5c6cb;\n            border-radius: 5px;\n            color: #721c24;\n            background-color: #f8d7da;\n            line-height: 21px;\n            padding: 10px;\n        }\n\n        .wk-form__error.wk-form__error--show {\n            display: block;\n        }\n\n        .wk-form-button.wk-form-button--cancel {\n            margin-left: auto;\n            margin-right: 10px;\n            color: #3f51b5;\n            background: none;\n        }\n        \n        .wk-success-message {\n        }\n        \n        .wk-success-message__title {\n            font-weight: 500;\n            margin-bottom: 10px;\n        }\n        \n        .wk-success-message__description {\n            margin-bottom: 10px;\n        }\n        \n        .wk-success-message__description b {\n            font-weight: 500;\n        }\n\n        .wk-form-button.wk-form-button--cancel:hover {\n            background-color: hsla(0,0%,62%,.2);\n        }\n        \n        .wk-password-reset-success .wk-form-button {\n            left: 50%;\n            transform: translateX(-50%);\n        }\n        \n        .wk-form-field.wk-form-field--checkbox .wk-form-field__label {\n            position: relative;\n            padding-left: 30px;     \n            line-height: 20px;\n            font-size: 14px;     \n        } \n        \n        .wk-form-field.wk-form-field--checkbox input {\n            position: absolute;\n            opacity: 0;\n            cursor: pointer;\n            height: 0;\n            width: 0;\n        }\n        \n        .wk-form-field .wk-form-field__checkmark {\n            position: absolute;\n            top: 0;\n            left: 0;\n            height: 18px;\n            width: 18px;\n            background-color: none;\n            border: 2px solid #333;\n            box-sizing: border-box;\n            border-radius: 2px;\n        }\n        \n        .wk-form-field.wk-form-field--checkbox input:checked ~ .wk-form-field__checkmark {\n            background-color: #3f51b5;\n            border-color: #3f51b5;\n        }\n        \n        .wk-form-field__checkmark:after {\n            content: \"\";\n            position: absolute;\n            display: none;\n        }\n        \n        .wk-form-field input:checked ~ .wk-form-field__checkmark:after {\n            display: block;\n        }\n        \n        .wk-form-field .wk-form-field__checkmark:after {\n            left: 5px;\n            top: 2px;\n            width: 3px;\n            height: 7px;\n            border: solid white;\n            border-width: 0 2px 2px 0;\n            -webkit-transform: rotate(45deg);\n            -ms-transform: rotate(45deg);\n            transform: rotate(45deg);\n        }\n";
exports.LIBRARY_STYLES = LIBRARY_STYLES;

/***/ }),

/***/ 9066:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FIREBASE_TOKEN_NAME = exports.WALLKIT_TOKEN_NAME = exports.WALLKIT_DEV_FIREBASE_CONFIG = exports.WALLKIT_FIREBASE_CONFIG = exports.WALLKIT_FRAME_ID = exports.WALLKIT_USER_MANAGER_MODAL_FORM_PLACEHOLDER_ID = exports.WALLKIT_AUTH_FORM_PLACEHOLDER_ID = exports.WALLKIT_FIREBASE_WK_FORM_PLACEHOLDER_ID = exports.WALLKIT_FIREBASE_UI_PLACEHOLDER_ID = exports.WALLKIT_MODAL_MIN_HEIGHT = exports.WALLKIT_MODAL_MAX_WIDTH = exports.WALLKIT_MODAL_MIN_WIDTH = exports.WALLKIT_MODAL_CONTENT_CLASSNAME = exports.WALLKIT_MODAL_CLOSE_BTN_CLASSNAME = exports.WALLKIT_MODAL_WRAPPER_CLASSNAME = exports.ALLOWED_ORIGINS = exports.WALLKIT_CDN_ASSETS_URL = exports.WALLKIT_CDN_URL = exports.WALLKIT_POPUP_DEV_URL = exports.WALLKIT_POPUP_URL = void 0;
// Popups
var WALLKIT_POPUP_URL = 'https://wallkit.net/popups'; // export const WALLKIT_POPUP_URL = 'http://127.0.0.1:8000/popups';

exports.WALLKIT_POPUP_URL = WALLKIT_POPUP_URL;
var WALLKIT_POPUP_DEV_URL = 'https://dev.wallkit.net/popups'; // export const WALLKIT_POPUP_DEV_URL = 'https://wallkit-landing.com/popups';
// export const WALLKIT_POPUP_DEV_URL = 'http://127.0.0.1:8000/popups';
// Assets

exports.WALLKIT_POPUP_DEV_URL = WALLKIT_POPUP_DEV_URL;
var WALLKIT_CDN_URL = 'https://cdn.wallkit.net';
exports.WALLKIT_CDN_URL = WALLKIT_CDN_URL;
var WALLKIT_CDN_ASSETS_URL = WALLKIT_CDN_URL + '/assets'; // Safety

exports.WALLKIT_CDN_ASSETS_URL = WALLKIT_CDN_ASSETS_URL;
var ALLOWED_ORIGINS = [document.location.origin, 'http://127.0.0.1:8000', 'https://wallkit.net', 'https://dev.wallkit.net', 'https://demo.wallkit.net', 'https://wallkit-landing.com']; // Markup

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
var WALLKIT_FRAME_ID = 'wk-frame'; // Authentication

exports.WALLKIT_FRAME_ID = WALLKIT_FRAME_ID;
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


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = exports.DEFAULT_ERROR_MESSAGES = exports.ERRORS_TYPES = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

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

exports.default = Error;

/***/ }),

/***/ 6004:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(8239));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

window.WallkitIntegration = (_eventsListener = /*#__PURE__*/new WeakSet(), _insertStyles = /*#__PURE__*/new WeakSet(), _recogniseURLIncomeParams = /*#__PURE__*/new WeakSet(), /*#__PURE__*/function () {
  function WallkitIntegration(options) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, WallkitIntegration);

    _recogniseURLIncomeParams.add(this);

    _insertStyles.add(this);

    _eventsListener.add(this);

    this.config = options;
    this.events = new _events["default"]();
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
    this.content = _content["default"];
    this.sdk = new _sdk["default"](_objectSpread(_objectSpread({}, options), {}, {
      onLoaded: function onLoaded() {
        var _options$auth, _options$auth2, _options$auth2$modal, _options$auth3, _options$auth4, _options$auth4$modal, _options$auth5;

        _this.authentication = new _authentication["default"](_objectSpread(_objectSpread({}, options), {}, {
          firebase: options === null || options === void 0 ? void 0 : (_options$auth = options.auth) === null || _options$auth === void 0 ? void 0 : _options$auth.firebase,
          modalTitle: options === null || options === void 0 ? void 0 : (_options$auth2 = options.auth) === null || _options$auth2 === void 0 ? void 0 : (_options$auth2$modal = _options$auth2.modal) === null || _options$auth2$modal === void 0 ? void 0 : _options$auth2$modal.title,
          content: (options === null || options === void 0 ? void 0 : (_options$auth3 = options.auth) === null || _options$auth3 === void 0 ? void 0 : _options$auth3.content) || (options === null || options === void 0 ? void 0 : (_options$auth4 = options.auth) === null || _options$auth4 === void 0 ? void 0 : (_options$auth4$modal = _options$auth4.modal) === null || _options$auth4$modal === void 0 ? void 0 : _options$auth4$modal.content),
          reCaptcha: options === null || options === void 0 ? void 0 : (_options$auth5 = options.auth) === null || _options$auth5 === void 0 ? void 0 : _options$auth5.reCaptcha
        }));
        _this.analytics = new _analytics["default"](options === null || options === void 0 ? void 0 : options.analytics);
        _this.call = new _call["default"](_this.popup, _this.config);

        _this.init();

        _this.userManager = new _user["default"]({
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
}

var _default = WallkitIntegration;
exports.default = _default;

/***/ }),

/***/ 7343:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

var _classPrivateFieldGet2 = _interopRequireDefault(__webpack_require__(9704));

var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(1401));

var _sdk2 = _interopRequireDefault(__webpack_require__(4753));

var _authentication2 = _interopRequireDefault(__webpack_require__(7484));

var _events2 = _interopRequireDefault(__webpack_require__(9889));

var _eventsName = __webpack_require__(6073);

var _config = /*#__PURE__*/new WeakMap();

var _sdk = /*#__PURE__*/new WeakMap();

var _authentication = /*#__PURE__*/new WeakMap();

var _events = /*#__PURE__*/new WeakMap();

var Analytics = /*#__PURE__*/function () {
  function Analytics(options) {
    (0, _classCallCheck2["default"])(this, Analytics);

    _config.set(this, {
      writable: true,
      value: void 0
    });

    _sdk.set(this, {
      writable: true,
      value: void 0
    });

    _authentication.set(this, {
      writable: true,
      value: void 0
    });

    _events.set(this, {
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

exports.default = Analytics;

/***/ }),

/***/ 3378:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(107));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(756));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

var _classPrivateFieldGet2 = _interopRequireDefault(__webpack_require__(9704));

var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(1401));

var _eventsName = _interopRequireDefault(__webpack_require__(6073));

var _DOM = __webpack_require__(2909);

var _loaders = __webpack_require__(1758);

var _sdk2 = _interopRequireDefault(__webpack_require__(4753));

var _events = _interopRequireDefault(__webpack_require__(9889));

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _sdk = /*#__PURE__*/new WeakMap();

var _initReCaptchaPlaceholder = /*#__PURE__*/new WeakSet();

var _onRecaptchaAuth = /*#__PURE__*/new WeakSet();

var ReCaptchaFirebase = /*#__PURE__*/function () {
  function ReCaptchaFirebase(authenticationInstance, options) {
    (0, _classCallCheck2["default"])(this, ReCaptchaFirebase);

    _onRecaptchaAuth.add(this);

    _initReCaptchaPlaceholder.add(this);

    _sdk.set(this, {
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
          while (1) {
            switch (_context.prev = _context.next) {
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
          while (1) {
            switch (_context2.prev = _context2.next) {
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
          while (1) {
            switch (_context3.prev = _context3.next) {
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

exports.default = ReCaptchaFirebase;

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


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

var _classPrivateFieldGet2 = _interopRequireDefault(__webpack_require__(9704));

var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(1401));

var _localStorage = _interopRequireDefault(__webpack_require__(347));

var _cookie = __webpack_require__(5048);

var _url = __webpack_require__(5234);

var _slug = /*#__PURE__*/new WeakMap();

var _resource = /*#__PURE__*/new WeakMap();

var _domain = /*#__PURE__*/new WeakMap();

var Token = /*#__PURE__*/function () {
  function Token(slug, value, resource, subDomain) {
    (0, _classCallCheck2["default"])(this, Token);

    _slug.set(this, {
      writable: true,
      value: void 0
    });

    _resource.set(this, {
      writable: true,
      value: void 0
    });

    _domain.set(this, {
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

exports.default = Token;

/***/ }),

/***/ 5298:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(107));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(756));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(8239));

var _typeof2 = _interopRequireDefault(__webpack_require__(8630));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

var _classPrivateFieldGet2 = _interopRequireDefault(__webpack_require__(9704));

var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(1401));

var _loaders = __webpack_require__(1758);

var _DOM = __webpack_require__(2909);

var _constants = __webpack_require__(9066);

var _localization = __webpack_require__(7761);

var _events = _interopRequireDefault(__webpack_require__(9889));

var _eventsName = __webpack_require__(6073);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

    _firebaseInitApp.add(this);

    _authStateChanged.add(this);

    _loadFirebase.add(this);

    _getElementPlaceholder.add(this);

    _mode.set(this, {
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
          while (1) {
            switch (_context.prev = _context.next) {
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
          while (1) {
            switch (_context2.prev = _context2.next) {
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
    key: "reauthenticateWithCredential",
    value: function () {
      var _reauthenticateWithCredential = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(oldPassword) {
        var user, credential;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!oldPassword) {
                  _context3.next = 12;
                  break;
                }

                user = this.firebase.auth().currentUser;

                if (!user) {
                  _context3.next = 9;
                  break;
                }

                credential = this.firebase.auth.EmailAuthProvider.credential(user.email, oldPassword);
                _context3.next = 6;
                return user.reauthenticateWithCredential(credential);

              case 6:
                return _context3.abrupt("return", _context3.sent);

              case 9:
                throw new Error('Your authorization is broken. Please login again.');

              case 10:
                _context3.next = 13;
                break;

              case 12:
                throw new Error('Old Password is empty');

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function reauthenticateWithCredential(_x3) {
        return _reauthenticateWithCredential.apply(this, arguments);
      }

      return reauthenticateWithCredential;
    }()
  }, {
    key: "updatePassword",
    value: function () {
      var _updatePassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(newPassword) {
        var user;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!newPassword) {
                  _context4.next = 10;
                  break;
                }

                user = this.firebase.auth().currentUser;

                if (!user) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 5;
                return user.updatePassword(newPassword);

              case 5:
                _context4.next = 8;
                break;

              case 7:
                throw new Error('Your authorization is broken. Please login again.');

              case 8:
                _context4.next = 11;
                break;

              case 10:
                throw new Error('New Password is empty');

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updatePassword(_x4) {
        return _updatePassword.apply(this, arguments);
      }

      return updatePassword;
    }()
  }, {
    key: "authWithCustomToken",
    value: function () {
      var _authWithCustomToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(token) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;

                if (!(this.firebase && this.firebase.auth)) {
                  _context5.next = 5;
                  break;
                }

                _context5.next = 4;
                return this.firebase.auth().signInWithCustomToken(token);

              case 4:
                return _context5.abrupt("return", _context5.sent);

              case 5:
                return _context5.abrupt("return", false);

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                console.error('Custom Token Auth Fail');
                return _context5.abrupt("return", false);

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      function authWithCustomToken(_x5) {
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

exports.default = Firebase;

function _getElementPlaceholder2(options) {
  var defaultPlaceholder = "#".concat(_constants.WALLKIT_FIREBASE_UI_PLACEHOLDER_ID);

  if (this.genuineForm) {
    var _options$elementSelec;

    return (_options$elementSelec = options === null || options === void 0 ? void 0 : options.elementSelector) !== null && _options$elementSelec !== void 0 ? _options$elementSelec : defaultPlaceholder;
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


var _interopRequireDefault = __webpack_require__(9736);

var _typeof3 = __webpack_require__(8630);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(107));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(756));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(8239));

var _typeof2 = _interopRequireDefault(__webpack_require__(8630));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

var _classPrivateFieldGet9 = _interopRequireDefault(__webpack_require__(9704));

var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(1401));

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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _options = /*#__PURE__*/new WeakMap();

var _createModal = /*#__PURE__*/new WeakSet();

var _initListeners = /*#__PURE__*/new WeakSet();

var _setAuthorizationError = /*#__PURE__*/new WeakSet();

var _resetAuthorizationError = /*#__PURE__*/new WeakSet();

var Authentication = /*#__PURE__*/function () {
  function Authentication(options) {
    var _options$cookies,
        _options$cookies2,
        _this = this;

    (0, _classCallCheck2["default"])(this, Authentication);

    _resetAuthorizationError.add(this);

    _setAuthorizationError.add(this);

    _initListeners.add(this);

    _createModal.add(this);

    _options.set(this, {
      writable: true,
      value: void 0
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

      if (options.firebase.genuineForm === false) {
        this.initAuthForm();
      }
    }

    this.reCaptcha = new _ReCaptcha["default"](this, options === null || options === void 0 ? void 0 : options.reCaptcha);
    this.reCaptcha.events.subscribe(_eventsName["default"].local.RECAPTCHA_VALIDATION_FAILED, function () {
      _classPrivateMethodGet(_this, _setAuthorizationError, _setAuthorizationError2).call(_this, 'ReCaptcha Validation Failed! Please try again!');
    });
    this.reCaptcha.events.subscribe(_eventsName["default"].local.RECAPTCHA_VALIDATION_SUCCESS, function () {
      _classPrivateMethodGet(_this, _resetAuthorizationError, _resetAuthorizationError2).call(_this);
    });
    this.events = new _events["default"]();
  }

  (0, _createClass2["default"])(Authentication, [{
    key: "isAuthenticated",
    value: function isAuthenticated() {
      if (this.sdk) {
        return this.sdk.methods.isAuthenticated();
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
        if (error.message) {
          _this2.authForm.loginForm.setFormError(error.message);
        }

        _this2.reCaptcha.grecaptcha.reset();
      });
    }
  }, {
    key: "handleSignUp",
    value: function handleSignUp(data) {
      var _this3 = this;

      this.firebase.signUp(data.email, data.password).then(function () {
        _this3.firebase.updateName(data.name);
      })["catch"](function (error) {
        if (error.message) {
          _this3.authForm.signUpForm.setFormError(error.message);
        }

        _this3.reCaptcha.grecaptcha.reset();
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
      var _classPrivateFieldGet3,
          _this5 = this;

      var _classPrivateFieldGet2 = (0, _classPrivateFieldGet9["default"])(this, _options).firebase,
          tosURL = _classPrivateFieldGet2.tosURL,
          privacyPolicyURL = _classPrivateFieldGet2.privacyPolicyURL,
          termsOfService = _classPrivateFieldGet2.termsOfService;
      this.authForm = new _AuthForm.AuthForm("#".concat(_constants.WALLKIT_FIREBASE_WK_FORM_PLACEHOLDER_ID), {
        triggerButton: this.firebase.providers.length > 1,
        signUp: (_classPrivateFieldGet3 = (0, _classPrivateFieldGet9["default"])(this, _options).auth.signUp) !== null && _classPrivateFieldGet3 !== void 0 ? _classPrivateFieldGet3 : true,
        termsOfService: termsOfService !== null && termsOfService !== void 0 ? termsOfService : {
          tosURL: tosURL,
          privacyPolicyURL: privacyPolicyURL
        },
        onLogin: function onLogin(data) {
          if (_this5.reCaptcha.enabled) {
            _this5.executeRecaptcha();

            _this5.reCaptcha.events.subscribe(_eventsName["default"].local.RECAPTCHA_VALIDATION_SUCCESS, _this5.handleLogin.bind(_this5, data), {
              once: true
            });
          } else {
            _this5.handleLogin(data);
          }
        },
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
        onPasswordReset: function () {
          var _onPasswordReset = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
            var success, _yield$_this5$sdk$met, result;

            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;

                    _this5.toggleFormLoader(true);

                    if (!((0, _classPrivateFieldGet9["default"])(_this5, _options).firebase.genuinePasswordReset === false)) {
                      _context.next = 10;
                      break;
                    }

                    _context.next = 5;
                    return _this5.sdk.methods.firebasePasswordReset(data.email);

                  case 5:
                    _yield$_this5$sdk$met = _context.sent;
                    result = _yield$_this5$sdk$met.result;
                    success = result;
                    _context.next = 13;
                    break;

                  case 10:
                    _context.next = 12;
                    return _this5.firebase.sendPasswordResetEmail(data.email);

                  case 12:
                    success = true;

                  case 13:
                    if (!success) {
                      _context.next = 17;
                      break;
                    }

                    _this5.authForm.showSuccessPasswordReset();

                    _context.next = 18;
                    break;

                  case 17:
                    throw new Error('Something went wrong');

                  case 18:
                    _this5.toggleFormLoader(false);

                    _context.next = 25;
                    break;

                  case 21:
                    _context.prev = 21;
                    _context.t0 = _context["catch"](0);

                    if (_context.t0.message) {
                      _this5.authForm.forgotPasswordForm.setFormError(_context.t0.message);
                    }

                    _this5.toggleFormLoader(false);

                  case 25:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[0, 21]]);
          }));

          function onPasswordReset(_x) {
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

        _classPrivateMethodGet(_this6, _setAuthorizationError, _setAuthorizationError2).call(_this6, (error === null || error === void 0 ? void 0 : error.message) || 'Something went wrong!');
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
    value: function authInWallkit() {
      var _this7 = this;

      var firebaseToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _classPrivateMethodGet(this, _resetAuthorizationError, _resetAuthorizationError2).call(this);

      return new Promise(function (resolve, reject) {
        if (firebaseToken) {
          _this7.sdk.methods.authenticateWithFirebase(firebaseToken).then(function (_ref) {
            var token = _ref.token,
                existed = _ref.existed;

            _this7.setToken(token);

            var userGetTimeout = setTimeout(function () {
              reject(false);
            }, 10000);

            var userEventCallback = function userEventCallback() {
              clearTimeout(userGetTimeout);

              _this7.sdk.methods.unsubscribeLocalEvent('user', userEventCallback);

              _this7.events.notify(_eventsName["default"].local.SUCCESS_AUTH, {
                register: !existed
              });

              resolve(true);
            };

            _this7.sdk.methods.subscribeLocalEvent('user', userEventCallback);
          })["catch"](function (error) {
            var _error$response;

            console.log('error', error);

            _classPrivateMethodGet(_this7, _setAuthorizationError, _setAuthorizationError2).call(_this7, error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.error_description);

            _this7.removeTokens();

            reject(error);
          });
        } else {
          resolve(false);
        }
      });
    }
  }, {
    key: "getDefaultAuthenticationFormContent",
    value: function getDefaultAuthenticationFormContent() {
      var _classPrivateFieldGet4, _classPrivateFieldGet5;

      return "<div>\n                    <div id=\"authorization-error\"></div>\n                    <h2 class=\"wallkit-auth-modal__title\">".concat((_classPrivateFieldGet4 = (_classPrivateFieldGet5 = (0, _classPrivateFieldGet9["default"])(this, _options)) === null || _classPrivateFieldGet5 === void 0 ? void 0 : _classPrivateFieldGet5.modalTitle) !== null && _classPrivateFieldGet4 !== void 0 ? _classPrivateFieldGet4 : 'Sign In', "</h2>\n                    <div id=\"").concat(_constants.WALLKIT_AUTH_FORM_PLACEHOLDER_ID, "\"></div>\n                </div>");
    }
  }, {
    key: "attachFormPlaceholders",
    value: function attachFormPlaceholders() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.WALLKIT_AUTH_FORM_PLACEHOLDER_ID;
      var placeholders = "<div id=\"".concat(_constants.WALLKIT_FIREBASE_WK_FORM_PLACEHOLDER_ID, "\"></div>\n                            <div id=\"").concat(_constants.WALLKIT_FIREBASE_UI_PLACEHOLDER_ID, "\"></div>");
      var targetElement = document.getElementById(selector);

      if (targetElement) {
        targetElement.innerHTML = placeholders;
      }
    }
  }, {
    key: "render",
    value: function render() {
      if ((0, _classPrivateFieldGet9["default"])(this, _options).auth.renderType === 'selector') {
        var placeholder = document.querySelector((0, _classPrivateFieldGet9["default"])(this, _options).auth.selector);

        if (placeholder) {
          var _classPrivateFieldGet6;

          placeholder.insertAdjacentHTML('beforeend', ((_classPrivateFieldGet6 = (0, _classPrivateFieldGet9["default"])(this, _options)) === null || _classPrivateFieldGet6 === void 0 ? void 0 : _classPrivateFieldGet6.content) || this.getDefaultAuthenticationFormContent());
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
      var _show = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.modal.show();

                if (!this.firebase.isUiShown) {
                  this.checkFirebaseInit();
                }

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function show() {
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
        if ((0, _classPrivateFieldGet9["default"])(this, _options).firebase.genuineForm !== false) {
          if (this.reCaptcha.enabled && this.reCaptcha.loaded) {
            this.reCaptcha.initCaptchaProcess();
          } else if (!this.reCaptcha.loaded) {
            this.events.subscribe(_eventsName["default"].local.RECAPTCHA_LOADED, function () {
              _this9.reCaptcha.initCaptchaProcess();
            }, {
              once: true
            });
          }
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

      if (this.reCaptcha.enabled) {
        this.reCaptcha.grecaptcha.reset();
      }
    }
  }, {
    key: "logout",
    value: function () {
      var _logout = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var success;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.removeToken();
                _context3.next = 4;
                return this.firebase.logout();

              case 4:
                success = _context3.sent;

                if (!success) {
                  _context3.next = 13;
                  break;
                }

                this.removeFirebaseToken();

                if (!(this.reCaptcha.enabled && !this.reCaptcha.loaded)) {
                  _context3.next = 12;
                  break;
                }

                _context3.next = 10;
                return this.reCaptcha.init();

              case 10:
                _context3.next = 13;
                break;

              case 12:
                if (this.reCaptcha.loaded) {
                  this.resetAuthProcess();
                  this.reCaptcha.grecaptcha.reset();

                  if ((0, _classPrivateFieldGet9["default"])(this, _options).firebase.genuineForm !== false) {
                    this.reCaptcha.initCaptchaProcess();
                  }
                }

              case 13:
                this.resetAuthProcess();
                _context3.next = 20;
                break;

              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3["catch"](0);
                console.log('ERROR:', _context3.t0);
                this.resetAuthProcess();

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 16]]);
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
      var _handleTicketsToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(ticketPassAuthToken) {
        var response, userCredential, firebaseToken;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.sdk.methods.getAuthTokensByTicketPassToken(ticketPassAuthToken);

              case 3:
                response = _context4.sent;

                if (!response) {
                  _context4.next = 19;
                  break;
                }

                _context4.next = 7;
                return this.firebase.authWithCustomToken(response.firebase_custom_token);

              case 7:
                userCredential = _context4.sent;
                _context4.next = 10;
                return userCredential.user.getIdToken();

              case 10:
                firebaseToken = _context4.sent;
                this.updateFirebaseToken(firebaseToken);
                this.setToken(response.token);
                _context4.next = 15;
                return this.sdk.methods.getUser();

              case 15:
                this.dispatchTokens();
                this.events.notify(_eventsName["default"].local.SUCCESS_AUTH, true);
                this.events.notify(_eventsName["default"].local.TICKETS_TOKEN_AUTH_SUCCESS, true);
                return _context4.abrupt("return", true);

              case 19:
                return _context4.abrupt("return", false);

              case 22:
                _context4.prev = 22;
                _context4.t0 = _context4["catch"](0);
                console.error(_context4.t0);
                return _context4.abrupt("return", _context4.t0);

              case 26:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 22]]);
      }));

      function handleTicketsToken(_x2) {
        return _handleTicketsToken.apply(this, arguments);
      }

      return handleTicketsToken;
    }()
  }, {
    key: "onFirebaseAuthFail",
    value: function onFirebaseAuthFail(error) {
      this.toggleFormLoader(false);
    }
  }, {
    key: "handleOneTapResponse",
    value: function handleOneTapResponse(_ref2) {
      var credential = _ref2.credential;
      this.frame.sendEvent(_eventsName["default"].wallkit.WALLKIT_EVENT_ONE_TAP_SIGN_IN, credential);
    }
  }, {
    key: "init",
    value: function init() {
      var _classPrivateFieldGet7;

      if (!!((_classPrivateFieldGet7 = (0, _classPrivateFieldGet9["default"])(this, _options)) !== null && _classPrivateFieldGet7 !== void 0 && _classPrivateFieldGet7.firebase)) {
        // Render recaptcha before the firebase init if not custom FB form
        if ((0, _classPrivateFieldGet9["default"])(this, _options).firebase.genuineForm !== false) {
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
    }
  }]);
  return Authentication;
}();

exports.default = Authentication;

function _createModal2() {
  var _classPrivateFieldGet8;

  return new _modal["default"]({
    modalName: 'auth-modal',
    content: ((_classPrivateFieldGet8 = (0, _classPrivateFieldGet9["default"])(this, _options)) === null || _classPrivateFieldGet8 === void 0 ? void 0 : _classPrivateFieldGet8.content) || this.getDefaultAuthenticationFormContent(),
    className: 'wallkit-auth-modal',
    initialLoader: true
  });
}

function _initListeners2() {
  var _this10 = this;

  this.events.subscribe(_eventsName["default"].local.FRAME_MESSAGE, function (_ref3) {
    var name = _ref3.name,
        value = _ref3.value;

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
        _this10.logout();

        break;
    }
  });
}

function _setAuthorizationError2(error) {
  var _this$authForm;

  if ((_this$authForm = this.authForm) !== null && _this$authForm !== void 0 && _this$authForm.visibleFormName) {
    if (error === null) {
      this.authForm[this.authForm.visibleFormName].resetFormError(error);
    } else {
      this.authForm[this.authForm.visibleFormName].setFormError(error);
    }
  } else {
    var errorPlaceholder = document.getElementById('authorization-error');

    if (errorPlaceholder) {
      if (error === null) {
        errorPlaceholder.innerHTML = '';
      } else {
        errorPlaceholder.innerHTML = error || 'Something went wrong!';
      }
    }
  }
}

function _resetAuthorizationError2() {
  _classPrivateMethodGet(this, _setAuthorizationError, _setAuthorizationError2).call(this, null);
}

/***/ }),

/***/ 5613:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

var _classPrivateFieldGet5 = _interopRequireDefault(__webpack_require__(9704));

var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(1401));

var _events2 = _interopRequireDefault(__webpack_require__(9889));

var _eventsName = _interopRequireDefault(__webpack_require__(6073));

var _sdk2 = _interopRequireDefault(__webpack_require__(4753));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var _getWallkitUserData = /*#__PURE__*/new WeakSet();

var _debugUserStatus = /*#__PURE__*/new WeakSet();

var _debugElementsClickingOnWhichOpensPopups = /*#__PURE__*/new WeakSet();

var _debugElementsThatReactToTheUsersStatus = /*#__PURE__*/new WeakSet();

var _debugElementsThatReactToTheUsersPlans = /*#__PURE__*/new WeakSet();

var _debugElementsThatReactToTheUsersEvents = /*#__PURE__*/new WeakSet();

var Call = /*#__PURE__*/function () {
  function Call(popup, config) {
    var _config$call$classFor, _config$call, _config$call$classTha, _config$call2, _config$call$classTha2, _config$call3, _config$call$classTha3, _config$call4;

    (0, _classCallCheck2["default"])(this, Call);

    _debugElementsThatReactToTheUsersEvents.add(this);

    _debugElementsThatReactToTheUsersPlans.add(this);

    _debugElementsThatReactToTheUsersStatus.add(this);

    _debugElementsClickingOnWhichOpensPopups.add(this);

    _debugUserStatus.add(this);

    _getWallkitUserData.add(this);

    _setDataWkHasAccessInBody.add(this);

    _initUIListeners.add(this);

    _initWkListeners.add(this);

    _isDebug.add(this);

    _popup.set(this, {
      writable: true,
      value: void 0
    });

    _config.set(this, {
      writable: true,
      value: void 0
    });

    _events.set(this, {
      writable: true,
      value: void 0
    });

    _sdk.set(this, {
      writable: true,
      value: void 0
    });

    _classForHandleClick.set(this, {
      writable: true,
      value: void 0
    });

    _classThatReactOnTheUsersStatus.set(this, {
      writable: true,
      value: void 0
    });

    _classThatReactOnTheUsersPlans.set(this, {
      writable: true,
      value: void 0
    });

    _classThatReactOnTheUsersEvents.set(this, {
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
      } // find all elements with class `${this.#classThatReactOnTheUsersStatus}`


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
      } // find all elements with class `${this.#classThatReactOnTheUsersPlans}`


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
      } // find all elements with class `${this.#classThatReactOnTheUsersEvents}`


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
        _classPrivateMethodGet(this, _getWallkitUserData, _getWallkitUserData2).call(this);
      } else {
        this.setAllDataWkStatusesInDOMElements();
      }
    }
  }]);
  return Call;
}();

exports.default = Call;

function _isDebug2() {
  var _classPrivateFieldGet3, _classPrivateFieldGet4;

  return !!((_classPrivateFieldGet3 = (0, _classPrivateFieldGet5["default"])(this, _config)) !== null && _classPrivateFieldGet3 !== void 0 && (_classPrivateFieldGet4 = _classPrivateFieldGet3.call) !== null && _classPrivateFieldGet4 !== void 0 && _classPrivateFieldGet4.debug);
}

function _initWkListeners2() {
  var _this = this;

  (0, _classPrivateFieldGet5["default"])(this, _events).subscribe(_eventsName["default"].local.FRAME_MESSAGE, function (_ref3) {
    var name = _ref3.name,
        _ = _ref3._;

    switch (name) {
      case _eventsName["default"].wallkit.WALLKIT_LOGOUT:
        _this.setAllDataWkStatusesInDOMElements();

        _classPrivateMethodGet(_this, _setDataWkHasAccessInBody, _setDataWkHasAccessInBody2).call(_this, false);

        break;

      case _eventsName["default"].wallkit.WALLKIT_EVENT_USER:
        _classPrivateMethodGet(_this, _getWallkitUserData, _getWallkitUserData2).call(_this);

        break;
    }
  });
  (0, _classPrivateFieldGet5["default"])(this, _events).subscribe(_eventsName["default"].local.SUCCESS_AUTH, function (value) {
    if (_classPrivateMethodGet(_this, _isDebug, _isDebug2).call(_this)) {
      console.log('subscribe ventsNames.local.SUCCESS_AUTH', value);
    }

    _classPrivateMethodGet(_this, _getWallkitUserData, _getWallkitUserData2).call(_this);
  });
  (0, _classPrivateFieldGet5["default"])(this, _events).subscribe(_eventsName["default"].local.CHECK_USER_ACCESS, function (value) {
    if (_classPrivateMethodGet(_this, _isDebug, _isDebug2).call(_this)) {
      console.log('subscribe ventsNames.local.CHECK_USER_ACCESS', value);
    }

    _classPrivateMethodGet(_this, _setDataWkHasAccessInBody, _setDataWkHasAccessInBody2).call(_this, value);
  });
}

function _initUIListeners2() {
  var _this2 = this;

  document.body.addEventListener('click', function (e) {
    try {
      if (_classPrivateMethodGet(_this2, _isDebug, _isDebug2).call(_this2)) {
        console.log('Click on element: ', e.target);
        console.log("Does element have class ".concat((0, _classPrivateFieldGet5["default"])(_this2, _classForHandleClick), ": ").concat(e.target.classList.contains((0, _classPrivateFieldGet5["default"])(_this2, _classForHandleClick))));
      } // skip if target element has no class `${this.#classForHandleClick}`


      if (!e.target.classList.contains("".concat((0, _classPrivateFieldGet5["default"])(_this2, _classForHandleClick)))) return; // retrieve all classes for element

      var classes = Array.from(e.target.classList);
      var slugAndParamStr = classes.find(function (className) {
        return className.startsWith('wk–');
      });

      if (_classPrivateMethodGet(_this2, _isDebug, _isDebug2).call(_this2)) {
        console.log('Popup\'s slug and params: ', slugAndParamStr);
        console.log('Exit if slug and param === "undefined"');
      } // skip if we have no popup slug


      if (typeof slugAndParamStr === "undefined") return;
      var slugAndParamArr = slugAndParamStr.split("–");
      var popupSlug = slugAndParamArr[1];
      var popupParams = slugAndParamArr[2];

      if (_classPrivateMethodGet(_this2, _isDebug, _isDebug2).call(_this2)) {
        console.log('Popup\'s slug: ', popupSlug);
        console.log('Popup\'s params: ', popupParams);
      } // open popup without params


      if (typeof popupSlug !== "undefined" && typeof popupParams === "undefined") {
        if (_classPrivateMethodGet(_this2, _isDebug, _isDebug2).call(_this2)) {
          console.log('Open popup without params. Only with slug: ', popupSlug);
        }

        (0, _classPrivateFieldGet5["default"])(_this2, _popup).open(popupSlug);
        e.preventDefault();
        return;
      } // getting key and value params


      var popupParamsArr = popupParams.split('-');
      var key = popupParamsArr[0];
      var value = popupParamsArr[1];

      if (_classPrivateMethodGet(_this2, _isDebug, _isDebug2).call(_this2)) {
        console.log('Popup\'s param key: ', key);
        console.log('Popup\'s param value: ', value);
      } //open popup with params


      if (typeof key !== "undefined" && typeof value !== "undefined") {
        // make mo readable key for user
        if (key === 'ticket') {
          key = 'ti_event_ticket';
        } // prepare params for popup


        var params = JSON.stringify({
          item_type: key,
          item_key: value
        });
        var path = "".concat(popupSlug, "?[").concat(params, "]");

        if (_classPrivateMethodGet(_this2, _isDebug, _isDebug2).call(_this2)) {
          console.log('Open popup with params: ', path);
        }

        (0, _classPrivateFieldGet5["default"])(_this2, _popup).open(path);
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

function _getWallkitUserData2() {
  var _this3 = this;

  (0, _classPrivateFieldGet5["default"])(this, _sdk).client.get({
    path: "/user"
  }).then(function (response) {
    console.log(response);

    _this3.setAllDataWkStatusesInDOMElements(response);
  })["catch"](function (error) {
    console.log('WK Call ERROR:', error);

    _this3.setAllDataWkStatusesInDOMElements();
  });
}

function _debugUserStatus2() {
  console.log("User status: ", this.getUserStatus());
}

function _debugElementsClickingOnWhichOpensPopups2() {
  console.log('Elements, clicking on which opens popups:');

  var _iterator4 = _createForOfIteratorHelper(document.querySelectorAll(".".concat((0, _classPrivateFieldGet5["default"])(this, _classForHandleClick)))),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var element = _step4.value;
      console.log(element);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
}

function _debugElementsThatReactToTheUsersStatus2() {
  console.log('Elements that react to the user\'s status:');

  var _iterator5 = _createForOfIteratorHelper(document.querySelectorAll(".".concat((0, _classPrivateFieldGet5["default"])(this, _classThatReactOnTheUsersStatus)))),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var element = _step5.value;
      console.log(element);
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
}

function _debugElementsThatReactToTheUsersPlans2() {
  console.log('Elements that react to the user\'s plans:');

  var _iterator6 = _createForOfIteratorHelper(document.querySelectorAll(".".concat((0, _classPrivateFieldGet5["default"])(this, _classThatReactOnTheUsersPlans)))),
      _step6;

  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var element = _step6.value;
      console.log(element);
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
}

function _debugElementsThatReactToTheUsersEvents2() {
  console.log('Elements that react to the user\'s events:');

  var _iterator7 = _createForOfIteratorHelper(document.querySelectorAll(".".concat((0, _classPrivateFieldGet5["default"])(this, _classThatReactOnTheUsersEvents)))),
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

/***/ }),

/***/ 8390:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

var _classPrivateFieldGet2 = _interopRequireDefault(__webpack_require__(9704));

var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(1401));

var _sdk = _interopRequireDefault(__webpack_require__(4753));

var _events2 = _interopRequireDefault(__webpack_require__(9889));

var _eventsName = __webpack_require__(6073);

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _options = /*#__PURE__*/new WeakMap();

var _events = /*#__PURE__*/new WeakMap();

var _encodeQueryData = /*#__PURE__*/new WeakSet();

var _formatCheckAccessRequestPath = /*#__PURE__*/new WeakSet();

var Content = /*#__PURE__*/function () {
  function Content(content, options) {
    (0, _classCallCheck2["default"])(this, Content);

    _formatCheckAccessRequestPath.add(this);

    _encodeQueryData.add(this);

    _options.set(this, {
      writable: true,
      value: void 0
    });

    _events.set(this, {
      writable: true,
      value: void 0
    });

    this.content = content;
    (0, _classPrivateFieldSet2["default"])(this, _options, options);
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

      var _loop = function _loop(taxKey) {
        var _taxonomies$taxKey;

        taxonimiesKeys.push(taxKey);
        taxonimiesTitles.push(taxonomies[taxKey].label);
        var termKeysKey = "term_keys[".concat(taxKey, "]");
        var termTitleKey = "term_titles[".concat(taxKey, "]");
        var targetTermKeys = formatted[termKeysKey];
        var targetTermTitles = formatted[termTitleKey];

        if ((_taxonomies$taxKey = taxonomies[taxKey]) !== null && _taxonomies$taxKey !== void 0 && _taxonomies$taxKey.items) {
          taxonomies[taxKey].items.forEach(function (item) {
            if (targetTermKeys) {
              targetTermKeys.push(item.slug);
            } else {
              formatted[termKeysKey] = [item.slug];
            }

            if (targetTermTitles) {
              targetTermTitles.push(item.slug);
            } else {
              formatted[termTitleKey] = [item.name];
            }
          });
        }

        formatted[termKeysKey] = formatted[termKeysKey].join(',');
        formatted[termTitleKey] = formatted[termTitleKey].join(',');
      };

      for (var taxKey in taxonomies) {
        _loop(taxKey);
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

        (0, _classPrivateFieldGet2["default"])(_this, _events).notify(_eventsName.CHECK_USER_ACCESS, true);
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
    value: function checkAccess() {
      var _this2 = this;

      return this.sdk.methods.checkAccess(this.content.id).then(function (response) {
        if (_this2.sdk.methods.isAuthenticated()) {
          _this2.getAccessDetails(_this2.content.id);
        }

        (0, _classPrivateFieldGet2["default"])(_this2, _events).notify(_eventsName.CHECK_USER_ACCESS, true);
        return {
          allowed: response.allow,
          data: response
        };
      })["catch"](function (error) {
        if (error.error === 'incorrect_content_key') {
          return _this2.checkContentAccessAndSync(_this2.content);
        }

        (0, _classPrivateFieldGet2["default"])(_this2, _events).notify(_eventsName.CHECK_USER_ACCESS, false);
        return {
          allowed: false,
          error: error
        };
      });
    }
  }, {
    key: "getAccessDetails",
    value: function getAccessDetails(contentId) {
      var _this3 = this;

      return this.sdk.client.get({
        path: "/user/content-access-details/".concat(contentId)
      }).then(function (response) {
        if (response) {
          var terms = response.content_terms;
          _this3.accessCount = terms.usedLimitInPeriod;
          _this3.accessCountLimit = terms.accessLimit;
          return {
            accessCount: _this3.accessCount,
            accessCountLimit: _this3.accessCountLimit
          };
        }

        return {
          accessCount: 0,
          accessCountLimit: 0
        };
      })["catch"](function (error) {
        return error;
      });
    }
  }]);
  return Content;
}();

exports.default = Content;

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
exports.default = exports.WALLKIT_EVENT_CHANGE_LANGUAGE = exports.WALLKIT_EVENT_FIREBASE_CUSTOM_TOKEN = exports.WALLKIT_FRAME_ROUTE_CHANGE = exports.WALLKIT_EVENT_ONE_TAP_SIGN_IN = exports.WALLKIT_EVENT_REGISTRATION = exports.WALLKIT_EVENT_USER = exports.WALLKIT_EVENT_AUTH = exports.WALLKIT_EVENT_GET_TOKEN = exports.WALLKIT_FRAME_READY = exports.WALLKIT_EVENT_TOKEN = exports.WALLKIT_EVENT_FIREBASE_TOKEN = exports.WALLKIT_FIREBASE_TOKEN = exports.WALLKIT_LOGOUT = exports.WALLKIT_CHANGE_FRAME = exports.CHECK_USER_ACCESS = exports.FIREBASE_UI_SHOWN = exports.FIREBASE_INIT = exports.FIREBASE_LOADED = exports.TICKETS_TOKEN_AUTH_SUCCESS = exports.RECAPTCHA_VALIDATION_SUCCESS = exports.RECAPTCHA_VALIDATION_FAILED = exports.RECAPTCHA_LOADED = exports.MODAL_CLOSED = exports.FRAME_MODAL_CLOSED = exports.AUTH_MODAL_CLOSED = exports.FRAME_MESSAGE = exports.WALLKIT_SDK_LOADED = exports.SUCCESS_FIREBASE_AUTH = exports.SUCCESS_AUTH = exports.MODAL_CREATED = exports.FRAME_MOUNTED = exports.FRAME_CREATED = void 0;
// Local Events Names
var FRAME_CREATED = 'frame-created';
exports.FRAME_CREATED = FRAME_CREATED;
var FRAME_MOUNTED = 'frame-mounted';
exports.FRAME_MOUNTED = FRAME_MOUNTED;
var MODAL_CREATED = 'modal-created';
exports.MODAL_CREATED = MODAL_CREATED;
var SUCCESS_AUTH = 'success-auth';
exports.SUCCESS_AUTH = SUCCESS_AUTH;
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
var CHECK_USER_ACCESS = 'check-user-access'; // Wallkit Events Names

exports.CHECK_USER_ACCESS = CHECK_USER_ACCESS;
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
    CHECK_USER_ACCESS: CHECK_USER_ACCESS
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
    WALLKIT_EVENT_CHANGE_LANGUAGE: WALLKIT_EVENT_CHANGE_LANGUAGE
  }
};
exports.default = _default;

/***/ }),

/***/ 9889:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

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
  }]);
  return Events;
}();

exports.default = Events;

/***/ }),

/***/ 447:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TriggerButton = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

var _DOM = __webpack_require__(2909);

var TriggerButton = /*#__PURE__*/function () {
  function TriggerButton(selector, options) {
    (0, _classCallCheck2["default"])(this, TriggerButton);
    this.selector = selector;
    this.element = this.createElement(options);

    if (options.onClick) {
      this.element.addEventListener('click', options.onClick.bind(this));
    }
  }

  (0, _createClass2["default"])(TriggerButton, [{
    key: "createElement",
    value: function createElement(options) {
      var className = 'wk-auth-form-button';

      if (options) {
        if (options.className) {
          className += " ".concat(options.className);
        }
      }

      return (0, _DOM.createElement)('div', {
        className: className,
        innerHTML: "\n                <span class=\"firebaseui-idp-icon-wrapper\">\n                    <img class=\"firebaseui-idp-icon\" alt=\"\" src=\"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg\">\n                </span>\n                <span class=\"firebaseui-idp-text firebaseui-idp-text-long\">Sign in with email</span>"
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      this.element.style.display = 'none';
    }
  }, {
    key: "show",
    value: function show() {
      this.element.style.display = 'block';
    }
  }, {
    key: "render",
    value: function render() {
      var targetElement = document.querySelector(this.selector);

      if (targetElement) {
        targetElement.appendChild(this.element);
      }
    }
  }]);
  return TriggerButton;
}();

exports.TriggerButton = TriggerButton;

/***/ }),

/***/ 4195:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CheckBoxField = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(9168));

var _inherits2 = _interopRequireDefault(__webpack_require__(8914));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2164));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(2094));

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


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PasswordField = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(9168));

var _get2 = _interopRequireDefault(__webpack_require__(8183));

var _inherits2 = _interopRequireDefault(__webpack_require__(8914));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2164));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(2094));

var _index = __webpack_require__(4751);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _testPasswordRule = /*#__PURE__*/new WeakSet();

var _testPassword = /*#__PURE__*/new WeakSet();

var PasswordField = /*#__PURE__*/function (_FormField) {
  (0, _inherits2["default"])(PasswordField, _FormField);

  var _super = _createSuper(PasswordField);

  function PasswordField(options) {
    var _options$testStrength;

    var _this;

    (0, _classCallCheck2["default"])(this, PasswordField);
    _this = _super.call(this, options);

    _testPassword.add((0, _assertThisInitialized2["default"])(_this));

    _testPasswordRule.add((0, _assertThisInitialized2["default"])(_this));

    _this.insertAffix("<div id=\"show-password-toggle\" class=\"wk-eye-toggle\"></div>", _this.togglePasswordVisibility.bind((0, _assertThisInitialized2["default"])(_this)));

    if (options.passwordHint) {
      _this.insertDescription("<div>\n            <span>Password should match requirements:</span>\n            <ul class=\"wk-field-list\">\n                <li>at least 1 uppercase character (A-Z)</li>\n                <li>at least 1 lowercase character (a-z)</li>\n                <li>at least 1 digit (0-9)</li>\n                <li>at least 1 special character (punctuation)</li>\n                <li>at least 8 characters length</li>\n            </ul>\n        </div>");
    }

    _this.testStrength = (_options$testStrength = options.testStrength) !== null && _options$testStrength !== void 0 ? _options$testStrength : false;
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

      if (!passwordValidation.valid) {
        this.setError("<div>\n                <span>Password should be: ".concat(passwordValidation.message, "</span>\n            </div>"));
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
  if (!this.testStrength) {
    return {
      valid: true
    };
  }

  var rules = [{
    regex: "^(?=.{8,})",
    message: "At least 8 characters length"
  }, {
    regex: "^(?=.*[A-Z])",
    message: "At least 1 uppercase character (A-Z)"
  }, {
    regex: "^(?=.*[a-z])",
    message: "At least 1 lowercase character (a-z)"
  }, {
    regex: "^(?=.*[0-9])",
    message: "At least 1 digit (0-9)"
  }, {
    regex: "^(?=.*[`~!@#$%^&*()+={}\/|:;'<>,.?_-])",
    message: "At least 1 special character (punctuation)"
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


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FormField = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

var _DOM = __webpack_require__(2909);

var FormField = /*#__PURE__*/function () {
  function FormField(options) {
    (0, _classCallCheck2["default"])(this, FormField);

    if (!options) {
      throw new Error('No Options Provided');
    }

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
      var value = this.getValue();

      if (this.required && !value) {
        this.setError('This field is required!');
        return false;
      }

      if (this.type === 'email') {
        if (!value) {
          this.setError('Enter your email address to continue!');
          return false;
        } else if (!value.length > 4 || !value.includes('@') || !value.includes('.')) {
          this.setError('This email address isn\'t correct!');
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
        className: 'wk-form-field__input',
        id: options.id || options.name,
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


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AuthForm = exports.RESET_PASSWORD_FORM_SLUG = exports.SIGN_IN_FORM_SLUG = exports.SIGN_UP_FORM_SLUG = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(8239));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

var _DOM = __webpack_require__(2909);

var _TriggerButton = __webpack_require__(447);

var _LoginForm = __webpack_require__(4138);

var _SignUpForm = __webpack_require__(8955);

var _ForgotPasswordForm = __webpack_require__(7486);

var SIGN_UP_FORM_SLUG = 'sign-up';
exports.SIGN_UP_FORM_SLUG = SIGN_UP_FORM_SLUG;
var SIGN_IN_FORM_SLUG = 'sign-in';
exports.SIGN_IN_FORM_SLUG = SIGN_IN_FORM_SLUG;
var RESET_PASSWORD_FORM_SLUG = 'reset-password';
exports.RESET_PASSWORD_FORM_SLUG = RESET_PASSWORD_FORM_SLUG;

var AuthForm = /*#__PURE__*/function () {
  function AuthForm(selector, options) {
    var _options$signUp,
        _this = this,
        _this$forms;

    (0, _classCallCheck2["default"])(this, AuthForm);
    this.defaultFormSlug = (options === null || options === void 0 ? void 0 : options.defaultForm) || SIGN_UP_FORM_SLUG;
    this.wrapper = (0, _DOM.createElement)('div', {
      id: 'wk-auth-form'
    });
    this.loginForm = new _LoginForm.LoginForm(selector, {
      cancelBtn: options.triggerButton !== false,
      signUp: (_options$signUp = options.signUp) !== null && _options$signUp !== void 0 ? _options$signUp : true,
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
    });
    this.loginForm.formWrapper.addEventListener('click', function (event) {
      if (event.target.id === 'auth-signup-link') {
        event.preventDefault();

        _this.loginForm.hide();

        _this.signUpForm.show();

        _this.loginForm.resetForm();
      } else if (event.target.id === 'auth-password-link') {
        event.preventDefault();

        _this.loginForm.hide();

        _this.loginForm.resetForm();

        _this.forgotPasswordForm.show();
      }
    });
    this.loginForm.hide();

    if (options.signUp === true) {
      this.signUpForm = new _SignUpForm.SignupForm(selector, {
        termsOfService: options.termsOfService,
        onSubmit: function onSubmit(data) {
          if (options.onSignUp) {
            options.onSignUp(data);
          }
        }
      });
      this.signUpForm.formWrapper.addEventListener('click', function (event) {
        if (event.target.id === 'auth-signin-link') {
          _this.loginForm.show();

          _this.signUpForm.hide();

          _this.signUpForm.resetForm();
        }
      });
      this.signUpForm.hide();
    }

    this.forgotPasswordForm = new _ForgotPasswordForm.ForgotPasswordForm(selector, {
      onSubmit: function onSubmit(data) {
        if (options.onPasswordReset) {
          options.onPasswordReset(data);
        }
      }
    });
    this.forgotPasswordForm.formWrapper.addEventListener('click', function (event) {
      if (event.target.id === 'back-to-login') {
        event.preventDefault();

        _this.forgotPasswordForm.hide();

        _this.forgotPasswordForm.resetForm();

        _this.loginForm.show();

        _this.forgotPasswordForm.reRender();
      }
    });
    this.forgotPasswordForm.hide();

    if (options.triggerButton !== false) {
      this.triggerButton = new _TriggerButton.TriggerButton(selector, {
        onClick: function onClick() {
          _this.loginForm.show();

          _this.triggerButton.hide();

          if (options.onAuthFormShow) {
            options.onAuthFormShow();
          }
        }
      });
    }

    this.forms = (_this$forms = {}, (0, _defineProperty2["default"])(_this$forms, RESET_PASSWORD_FORM_SLUG, this.forgotPasswordForm), (0, _defineProperty2["default"])(_this$forms, SIGN_IN_FORM_SLUG, this.loginForm), (0, _defineProperty2["default"])(_this$forms, SIGN_UP_FORM_SLUG, this.signUpForm), _this$forms);
  }

  (0, _createClass2["default"])(AuthForm, [{
    key: "defaultForm",
    get: function get() {
      return this.forms[this.defaultFormSlug];
    }
  }, {
    key: "visibleFormName",
    get: function get() {
      if (this.signUpForm.isVisible()) {
        return 'signUpForm';
      } else if (this.loginForm.isVisible()) {
        return 'loginForm';
      } else if (this.forgotPasswordForm.isVisible()) {
        return 'forgotPasswordForm';
      } else {
        return false;
      }
    }
  }, {
    key: "showDefaultForm",
    value: function showDefaultForm() {
      var form = this.defaultForm;

      if (form) {
        form.show();
      }
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
    key: "showSuccessPasswordReset",
    value: function showSuccessPasswordReset() {
      var email = this.forgotPasswordForm.emailField.getValue();
      this.forgotPasswordForm.showFormResult("\n            <div class=\"wk-success-message wk-password-reset-success\">\n                <h2 class=\"wk-success-message__title\">Check your email!</h2>\n                <p class=\"wk-success-message__description\">Follow the instructions sent to <b>".concat(email, "</b> to recover your password</p>\n                <button id=\"back-to-login\" class=\"wk-form-button wk-form-button--cancel\">Back to login</button>\n            </div>\n        "));
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

      if (this.forgotPasswordForm) {
        this.forgotPasswordForm.render();
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


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ChangePasswordForm = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

var _inherits2 = _interopRequireDefault(__webpack_require__(8914));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2164));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(2094));

var _DOM = __webpack_require__(2909);

var _index = __webpack_require__(9356);

var _PasswordField = __webpack_require__(4386);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ChangePasswordForm = /*#__PURE__*/function (_Form) {
  (0, _inherits2["default"])(ChangePasswordForm, _Form);

  var _super = _createSuper(ChangePasswordForm);

  function ChangePasswordForm(targetElementSelector, options) {
    var _this;

    (0, _classCallCheck2["default"])(this, ChangePasswordForm);
    _this = _super.call(this, targetElementSelector, options);
    _this.onCancel = options.onCancel || false;
    _this.options = options;
    _this.options.title = 'Change Password' || 0;
    _this.options.footer = _this.getFormFooter() || options.footer;
    _this.oldPasswordField = new _PasswordField.PasswordField({
      dataSlug: 'old_password',
      name: 'wk-old-password',
      testStrength: false,
      passwordHint: false,
      label: 'Old Password',
      type: 'password',
      onEnter: function onEnter() {
        _this.submitForm();
      },
      onValidate: function onValidate(field) {
        var value = field.getValue();

        if (!value) {
          field.setError("<div>\n                            <span>Password cannot be empty.</span>\n                        </div>");
          return false;
        }

        return true;
      }
    });
    _this.newPasswordField = new _PasswordField.PasswordField({
      dataSlug: 'new_password',
      name: 'wk-new-password',
      testStrength: true,
      passwordHint: true,
      label: 'New Password',
      type: 'password',
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
          field.setError("<div>\n                            <span>The new password must not match the old one.</span>\n                        </div>");
          return false;
        }

        return true;
      }
    });
    _this.newPasswordConfirmField = new _PasswordField.PasswordField({
      dataSlug: 'new_password_confirm',
      name: 'wk-new-password-confirm',
      testStrength: true,
      passwordHint: false,
      label: 'New Password Confirm',
      type: 'password',
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
          field.setError("<div>\n                            <span>The password confirmation must be the same as the new password.</span>\n                        </div>");
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
      formFooter.appendChild((0, _DOM.createElement)('a', {
        className: 'wk-form__link account-settings-link',
        innerText: 'Cancel',
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

/***/ 7486:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ForgotPasswordForm = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

var _inherits2 = _interopRequireDefault(__webpack_require__(8914));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2164));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(2094));

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
    _this.options.title = 'Reset Password' || 0;
    _this.options.footer = _this.getFormFooter() || options.footer;
    _this.emailField = new _field.FormField({
      name: 'wk-fb-email',
      dataSlug: 'email',
      label: 'Email',
      type: 'email',
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


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LoginForm = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(9168));

var _inherits2 = _interopRequireDefault(__webpack_require__(8914));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2164));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(2094));

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
    _this.options.title = 'Sign in with email' || 0;
    _this.options.footer = _this.getFormFooter() || options.footer;
    _this.emailField = new _field.FormField({
      dataSlug: 'email',
      name: 'wk-fb-email',
      label: 'Email',
      type: 'email',
      onEnter: function onEnter() {
        _this.passwordField.focus();
      }
    });
    _this.passwordField = new _PasswordField.PasswordField({
      dataSlug: 'password',
      name: 'wk-fb-password',
      testStrength: false,
      label: 'Password',
      type: 'password',
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

      if (this.options.signUp === true) {
        subFooter.appendChild((0, _DOM.createElement)('a', {
          id: 'auth-signup-link',
          className: 'wk-form__link',
          innerText: 'Sign Up',
          attributes: {
            href: '#'
          }
        }));
      }

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

/***/ 8955:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SignupForm = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(8630));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(9168));

var _inherits2 = _interopRequireDefault(__webpack_require__(8914));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2164));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(2094));

var _DOM = __webpack_require__(2909);

var _index = __webpack_require__(9356);

var _field = __webpack_require__(4751);

var _PasswordField = __webpack_require__(4386);

var _CheckBoxField = __webpack_require__(4195);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _isTosEnabled = /*#__PURE__*/new WeakSet();

var SignupForm = /*#__PURE__*/function (_Form) {
  (0, _inherits2["default"])(SignupForm, _Form);

  var _super = _createSuper(SignupForm);

  function SignupForm(targetElementSelector, _options) {
    var _this;

    (0, _classCallCheck2["default"])(this, SignupForm);
    _this = _super.call(this, targetElementSelector, _options);

    _isTosEnabled.add((0, _assertThisInitialized2["default"])(_this));

    _this.options = _options;
    _this.options.title = 'Sign Up' || 0;
    _this.options.footer = _this.getFormFooter() || _options.footer;
    _this.emailField = new _field.FormField({
      dataSlug: 'email',
      name: 'wk-fb-email',
      label: 'Email',
      type: 'email',
      onEnter: function onEnter() {
        _this.nameField.focus();
      }
    });
    _this.nameField = new _field.FormField({
      dataSlug: 'name',
      name: 'wk-fb-name',
      label: 'Name',
      type: 'text',
      onEnter: function onEnter() {
        _this.passwordField.focus();
      }
    });
    _this.passwordField = new _PasswordField.PasswordField({
      dataSlug: 'password',
      name: 'wk-fb-password',
      testStrength: true,
      passwordHint: true,
      label: 'Password',
      type: 'password',
      onEnter: function onEnter() {
        _this.submitForm();
      }
    });

    if (_classPrivateMethodGet((0, _assertThisInitialized2["default"])(_this), _isTosEnabled, _isTosEnabled2).call((0, _assertThisInitialized2["default"])(_this), _options)) {
      _this.tosField = new _CheckBoxField.CheckBoxField({
        dataSlug: 'agreement',
        name: 'wk-fb-agreement',
        required: true,
        label: _this.getTosAcceptLabel(_options.termsOfService),
        type: 'checkbox'
      });
    }

    _this.fields = [_this.emailField, _this.nameField, _this.passwordField];

    if (_this.tosField) {
      _this.fields.push(_this.tosField);
    }

    _this.init();

    return _this;
  }

  (0, _createClass2["default"])(SignupForm, [{
    key: "getFormFooter",
    value: function getFormFooter() {
      var formFooter = (0, _DOM.createElement)('div', {
        className: 'wk-form__footer'
      });
      formFooter.appendChild((0, _DOM.createElement)('a', {
        className: 'wk-form__link',
        innerText: 'Already have an account? Login',
        id: 'auth-signin-link',
        attributes: {
          href: '#'
        }
      }));
      formFooter.appendChild(this.submitBtn);
      return formFooter;
    }
  }, {
    key: "getTosAcceptLabel",
    value: function getTosAcceptLabel(termsOptions) {
      if (!termsOptions) {
        return '';
      }

      if ((0, _typeof2["default"])(termsOptions) !== "object") {
        return termsOptions;
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

function _isTosEnabled2(options) {
  if (!options.termsOfService) {
    return false;
  }

  return !!options.termsOfService || !!options.termsOfService.tosURL || !!options.termsOfService.privacyPolicyURL;
}

/***/ }),

/***/ 9356:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Form = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

var _DOM = __webpack_require__(2909);

var Form = /*#__PURE__*/function () {
  function Form(targetElementSelector, options) {
    (0, _classCallCheck2["default"])(this, Form);
    this.targetElementSelector = targetElementSelector;
    this.formWrapper = (0, _DOM.createElement)('div', {
      className: 'wk-form'
    });
    this.submitBtn = (0, _DOM.createElement)('button', {
      className: 'wk-form-button',
      innerText: 'Submit'
    });
    this.cancelBtn = (0, _DOM.createElement)('button', {
      className: 'wk-form-button wk-form-button--cancel',
      innerText: 'Cancel'
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
    value: function setFormError(error) {
      this.formErrorPlaceholder.innerText = error;
      this.formErrorPlaceholder.classList.add('wk-form__error--show');
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
    value: function isVisible() {
      return this.formWrapper.style.display === 'block';
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


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

var _DOM = __webpack_require__(2909);

var _constants = __webpack_require__(9066);

var _eventsName = __webpack_require__(6073);

var _events = _interopRequireDefault(__webpack_require__(9889));

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _listeners = /*#__PURE__*/new WeakSet();

var Frame = /*#__PURE__*/function () {
  function Frame(options) {
    (0, _classCallCheck2["default"])(this, Frame);

    _listeners.add(this);

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
        className: _constants.WALLKIT_FRAME_ID,
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

exports.default = Frame;

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


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Localization = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

var _classPrivateFieldGet2 = _interopRequireDefault(__webpack_require__(9704));

var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(1401));

var _languages = __webpack_require__(8006);

var _eventsName = __webpack_require__(6073);

var _events2 = _interopRequireDefault(__webpack_require__(9889));

var _events = /*#__PURE__*/new WeakMap();

var Localization = /*#__PURE__*/function () {
  function Localization() {
    (0, _classCallCheck2["default"])(this, Localization);

    _events.set(this, {
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


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(8239));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

var _constants = __webpack_require__(9066);

var _DOM = _interopRequireDefault(__webpack_require__(2909));

var _loaders = __webpack_require__(1758);

var _url = __webpack_require__(5234);

var _events = _interopRequireDefault(__webpack_require__(9889));

var _eventsName = __webpack_require__(6073);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

    _loadAssets.add(this);

    _completeModal.add(this);

    _createLoader.add(this);

    _createContent.add(this);

    _createWrapper.add(this);

    _createCloseBtn.add(this);

    _createElement.add(this);

    _getModalName.add(this);

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

exports.default = Modal;

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


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

var _classPrivateFieldGet6 = _interopRequireDefault(__webpack_require__(9704));

var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(1401));

var _DOM = __webpack_require__(2909);

var _constants = __webpack_require__(9066);

var _eventsName = __webpack_require__(6073);

var _events2 = _interopRequireDefault(__webpack_require__(9889));

var _options = /*#__PURE__*/new WeakMap();

var _events = /*#__PURE__*/new WeakMap();

var _apiUrl = /*#__PURE__*/new WeakMap();

var SDK = /*#__PURE__*/function () {
  function SDK(options) {
    (0, _classCallCheck2["default"])(this, SDK);

    _options.set(this, {
      writable: true,
      value: void 0
    });

    _events.set(this, {
      writable: true,
      value: void 0
    });

    _apiUrl.set(this, {
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
      (0, _DOM.insertScript)("".concat(_constants.WALLKIT_CDN_URL, "/js/sdk/0.0.48/wallkit.umd.min.js"), 'wallkit-js-sdk', this.onLoad.bind(this));
    }
  }]);
  return SDK;
}();

exports.default = SDK;

/***/ }),

/***/ 4442:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(107));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(756));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(8972));

var _createClass2 = _interopRequireDefault(__webpack_require__(8884));

var _modal = _interopRequireDefault(__webpack_require__(9269));

var _ChangePasswordForm = __webpack_require__(8445);

var _constants = __webpack_require__(9066);

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _initModal = /*#__PURE__*/new WeakSet();

var _initChangePasswordForm = /*#__PURE__*/new WeakSet();

var _onSubmitChangePasswordForm = /*#__PURE__*/new WeakSet();

var _setErrorMessageChangePasswordForm = /*#__PURE__*/new WeakSet();

var _successChangePasswordForm = /*#__PURE__*/new WeakSet();

var UserManager = /*#__PURE__*/function () {
  function UserManager(_options) {
    (0, _classCallCheck2["default"])(this, UserManager);

    _successChangePasswordForm.add(this);

    _setErrorMessageChangePasswordForm.add(this);

    _onSubmitChangePasswordForm.add(this);

    _initChangePasswordForm.add(this);

    _initModal.add(this);

    this.popup = _options.popup;
    this.authentication = _options.authentication;

    _classPrivateMethodGet(this, _initModal, _initModal2).call(this, _options);
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

exports.default = UserManager;

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
    this.changePasswordForm = new _ChangePasswordForm.ChangePasswordForm("#".concat(_constants.WALLKIT_USER_MANAGER_MODAL_FORM_PLACEHOLDER_ID), {
      onCancel: function onCancel() {
        _this2.cancelModalForm({
          openPopupName: 'account-settings'
        });
      },
      onSubmit: function onSubmit(data) {
        _classPrivateMethodGet(_this2, _onSubmitChangePasswordForm, _onSubmitChangePasswordForm2).call(_this2, data);
      }
    });
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
  _onSubmitChangePasswordForm3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var old_password, new_password;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            old_password = _ref.old_password, new_password = _ref.new_password;
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
      }
    }, _callee, this, [[1, 10]]);
  }));
  return _onSubmitChangePasswordForm3.apply(this, arguments);
}

function _setErrorMessageChangePasswordForm2(error) {
  if (this.changePasswordForm) {
    if (error.message) {
      this.changePasswordForm.setFormError(error.message);
    }

    if (this.modal) {
      this.modal.toggleLoader(false);
    }
  }
}

function _successChangePasswordForm2() {
  if (this.changePasswordForm) {
    this.changePasswordForm.showFormResult("\n            <div class=\"wk-success-message wk-password-reset-success\">\n                <h2 class=\"wk-success-message__title\">Password updated.</h2>\n                <a href=\"#\" class=\"wk-form__link account-settings-link\">Back to account settings</a>\n            </div>\n        ");

    if (this.modal) {
      this.modal.toggleLoader(false);
    }
  }
}

/***/ }),

/***/ 2909:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(8630);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = exports.isMobile = exports.insertScript = exports.loadCSS = exports.injectInHead = exports.injectInBody = exports.createElement = exports.insertAfter = exports.checkIfElementExists = exports.isDocumentAvailable = void 0;

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
var _default = {
  createElement: createElement,
  injectInBody: injectInBody,
  checkIfElementExists: checkIfElementExists,
  loadCSS: loadCSS,
  insertScript: insertScript,
  isMobile: isMobile
};
exports.default = _default;

/***/ }),

/***/ 5048:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = exports.removeCookie = exports.setCookie = void 0;

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
  var domainName = domain ? "domain=".concat(domain, "; ") : '';
  document.cookie = "".concat(name, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; ").concat(domainName);
};

exports.removeCookie = removeCookie;
var _default = {
  setCookie: setCookie,
  removeCookie: removeCookie
};
exports.default = _default;

/***/ }),

/***/ 1758:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = exports.loadScripts = exports.loadWallkitAsset = void 0;

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
exports.default = _default;

/***/ }),

/***/ 347:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
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
exports.default = _default;

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


var _interopRequireDefault = __webpack_require__(9736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getParentDomain = exports.getDomainWithoutSubdomain = exports.resetHash = exports.parseAuthTokenHash = exports.parseModalHashURL = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(8630));

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

var resetHash = function resetHash() {
  window.location.hash = '';
  var path = window.location.href.replace('#', '');
  window.history.pushState('', '', path);
};

exports.resetHash = resetHash;

var getDomainWithoutSubdomain = function getDomainWithoutSubdomain(url) {
  var urlParts = new URL(url).hostname.split('.');
  return urlParts.slice(0).slice(-(urlParts.length === 4 ? 3 : 2)).join('.');
};

exports.getDomainWithoutSubdomain = getDomainWithoutSubdomain;

var getParentDomain = function getParentDomain() {
  return ".".concat(getDomainWithoutSubdomain(window.location));
};

exports.getParentDomain = getParentDomain;

/***/ }),

/***/ 9168:
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 756:
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

module.exports = _asyncToGenerator;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 2461:
/***/ ((module) => {

function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

module.exports = _classApplyDescriptorGet;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 4838:
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

module.exports = _classApplyDescriptorSet;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 8972:
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 8641:
/***/ ((module) => {

function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

module.exports = _classExtractFieldDescriptor;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 9704:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classApplyDescriptorGet = __webpack_require__(2461);

var classExtractFieldDescriptor = __webpack_require__(8641);

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = classExtractFieldDescriptor(receiver, privateMap, "get");
  return classApplyDescriptorGet(receiver, descriptor);
}

module.exports = _classPrivateFieldGet;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 1401:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classApplyDescriptorSet = __webpack_require__(4838);

var classExtractFieldDescriptor = __webpack_require__(8641);

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
  classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}

module.exports = _classPrivateFieldSet;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 8884:
/***/ ((module) => {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 8239:
/***/ ((module) => {

function _defineProperty(obj, key, value) {
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

module.exports = _defineProperty;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 8183:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var superPropBase = __webpack_require__(4624);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
    module.exports.default = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 2094:
/***/ ((module) => {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports.default = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 8914:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(4307);

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
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 9736:
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 2164:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = __webpack_require__(8630).default;

var assertThisInitialized = __webpack_require__(9168);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 4307:
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports.default = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 4624:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getPrototypeOf = __webpack_require__(2094);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 8630:
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 107:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(2390);


/***/ }),

/***/ 2390:
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
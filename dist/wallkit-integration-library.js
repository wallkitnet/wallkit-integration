/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 350:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LIBRARY_STYLES = void 0;
var LIBRARY_STYLES = "\n        .wallkit-modal-wrapper {\n            z-index: 100;\n            position: fixed;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: rgba(18, 18, 20, 0.9);\n            display: flex;\n            align-items: center;\n            justify-content: flex-start;\n            flex-direction: column;\n            overflow-y: auto;\n            padding: 70px 15px 20px;\n        }\n\n        .wallkit-modal-wrapper__content {\n            background-color: #fff;\n            flex-shrink: 0;\n            position: relative;\n            box-sizing: border-box;\n            overflow: hidden;\n        }\n        \n        @media screen and (max-width: 500px) {\n            .wallkit-modal-wrapper__content {\n                width: 100%;\n                min-width: auto!important;\n            }\n        }\n\n        .wallkit-modal-wrapper__close-btn {\n            position: absolute;\n            right: 10px;\n            top: 10px;\n            cursor: pointer;\n            color: #000;\n            font-size: 37px;\n            width: 37px;\n            height: 37px;\n            text-align: center;\n            line-height: 34px;\n        }\n\n        .wallkit-modal-wrapper .wk-frame {\n            transition: all 0.3s linear 0s;\n            max-width: 100%;\n            border: none;\n        }\n\n        .wallkit-auth-modal {\n            z-index: 999;\n        }\n\n        .wallkit-auth-modal .wallkit-modal-wrapper__content {\n            padding: 20px;\n        }\n\n        .wallkit-auth-modal .wallkit-auth-modal__title {\n            font-family: Roboto, sans-serif;\n            text-align: center;\n        }\n\n        button:focus {\n            background-color: #000;\n        }\n        \n          .wk-auth-form {\n            display: flex;\n            flex-direction: column;\n        }\n\n        .wk-form-field {\n            display: flex;\n            flex-direction: column;\n            font-family: Oxygen, sans-serif;\n            margin-bottom: 10px;\n        }\n\n        .wk-form-field .wk-form-field__label {\n            font-weight: 500;\n            margin-bottom: 5px;\n        }\n\n        .wk-form-field .wk-form-field__input {\n            margin-bottom: 5px;\n            border-radius: 0;\n            border: 1px solid #ccc;\n            padding: 5px;\n            box-sizing: content-box;\n        }\n\n        .wk-form-field .wk-form-field__input:focus {\n            border: 1px solid #0000;\n            box-shadow: 0px 0px 0px 2px #000 inset;\n            outline: none;\n        }\n\n        .wk-form-field .wk-form-field__message {\n            font-size: 12px;\n        }\n\n        .wk-auth-form-button {\n            background-color: #db4437;\n            direction: ltr;\n            font-weight: 500;\n            height: auto;\n            line-height: normal;\n            max-width: 220px;\n            min-height: 40px;\n            padding: 8px 16px;\n            text-align: left;\n            width: 100%;\n            box-sizing: border-box;\n            box-shadow: 0 2px 2px 0 rgba(0,0,0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.20), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n            border-radius: 2px;\n            font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n            margin: 0 auto;\n            cursor: pointer;\n        }\n\n        .wk-form-field.wk-form-field--invalid .wk-form-field__input {\n            border: 1px solid #dd2c00;\n        }\n\n        .wk-form-field.wk-form-field--valid .wk-form-field__input {\n            border: 1px solid green;\n        }\n\n        .wk-form-field.wk-form-field--invalid .wk-form-field__message {\n            color: #dd2c00;\n        }\n\n        .wk-form-field.wk-form-field--valid .wk-form-field__message {\n            color: green;\n        }\n\n        .wk-form .wk-form__link {\n            font-size: 14px;\n            color: #3170f3;\n            text-decoration: underline;\n        }\n\n        .wk-form {\n            font-family: Oxygen, sans-serif;\n        }\n\n        .wk-form .wk-form__footer {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n\n        .wk-form .wk-form__sub-footer {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin-bottom: 20px;\n        }\n\n        .wk-form__reset-password {\n            text-align: right;\n        }\n\n        .wk-form-result {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n        }\n\n        .wk-form-button {\n            border: none;\n            border-radius: 2px;\n            background-color: black;\n            color: #fff;\n            position: relative;\n            height: 36px;\n            margin: 0;\n            min-width: 64px;\n            padding: 0 16px;\n            display: inline-block;\n            font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n            font-size: 14px;\n            font-weight: 500;\n            text-transform: uppercase;\n            letter-spacing: 0;\n            overflow: hidden;\n            will-change: box-shadow;\n            transition: box-shadow .2s cubic-bezier(0.4, 0, 1, 1),background-color .2s cubic-bezier(0.4, 0, 0.2, 1),color .2s cubic-bezier(0.4, 0, 0.2, 1);\n            outline: none;\n            cursor: pointer;\n            text-decoration: none;\n            text-align: center;\n            line-height: 36px;\n            vertical-align: middle;\n        }\n\n        .wk-form__error {\n            margin-bottom: 10px;\n        }\n\n        .wk-form__error.wk-form__error--show {\n            margin-bottom: 17px;\n            background-color: #ff5b5b;\n            padding: 10px;\n            color: #fff;\n            border-radius: 8px;\n        }\n\n        .wk-form-button.wk-form-button--cancel {\n            color: #000;\n            background: none;\n        }\n\n        .wk-form-button.wk-form-button--cancel:hover {\n            background-color: hsla(0,0%,62%,.2);\n        }\n";
exports.LIBRARY_STYLES = LIBRARY_STYLES;

/***/ }),

/***/ 66:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FIREBASE_TOKEN_NAME = exports.WALLKIT_TOKEN_NAME = exports.WALLKIT_DEV_FIREBASE_CONFIG = exports.WALLKIT_FIREBASE_CONFIG = exports.WALLKIT_FRAME_ID = exports.WALLKIT_FIREBASE_WK_FORM_PLACEHOLDER_ID = exports.WALLKIT_FIREBASE_UI_PLACEHOLDER_ID = exports.WALLKIT_MODAL_MIN_HEIGHT = exports.WALLKIT_MODAL_MIN_WIDTH = exports.WALLKIT_MODAL_CONTENT_CLASSNAME = exports.WALLKIT_MODAL_CLOSE_BTN_CLASSNAME = exports.WALLKIT_MODAL_WRAPPER_CLASSNAME = exports.ALLOWED_ORIGINS = exports.WALLKIT_CDN_ASSETS_URL = exports.WALLKIT_CDN_URL = exports.WALLKIT_POPUP_DEV_URL = exports.WALLKIT_POPUP_URL = void 0;
// Popups
var WALLKIT_POPUP_URL = 'https://wallkit.net/popups';
exports.WALLKIT_POPUP_URL = WALLKIT_POPUP_URL;
var WALLKIT_POPUP_DEV_URL = 'https://dev.wallkit.net/popups'; // Assets

exports.WALLKIT_POPUP_DEV_URL = WALLKIT_POPUP_DEV_URL;
var WALLKIT_CDN_URL = 'https://cdn.wallkit.net';
exports.WALLKIT_CDN_URL = WALLKIT_CDN_URL;
var WALLKIT_CDN_ASSETS_URL = WALLKIT_CDN_URL + '/assets'; // Safety

exports.WALLKIT_CDN_ASSETS_URL = WALLKIT_CDN_ASSETS_URL;
var ALLOWED_ORIGINS = [document.location.origin, 'http://127.0.0.1:8000', 'https://wallkit.net', 'https://dev.wallkit.net', 'https://demo.wallkit.net']; // Markup

exports.ALLOWED_ORIGINS = ALLOWED_ORIGINS;
var WALLKIT_MODAL_WRAPPER_CLASSNAME = 'wallkit-modal-wrapper';
exports.WALLKIT_MODAL_WRAPPER_CLASSNAME = WALLKIT_MODAL_WRAPPER_CLASSNAME;
var WALLKIT_MODAL_CLOSE_BTN_CLASSNAME = 'wallkit-modal-wrapper__close-btn';
exports.WALLKIT_MODAL_CLOSE_BTN_CLASSNAME = WALLKIT_MODAL_CLOSE_BTN_CLASSNAME;
var WALLKIT_MODAL_CONTENT_CLASSNAME = 'wallkit-modal-wrapper__content';
exports.WALLKIT_MODAL_CONTENT_CLASSNAME = WALLKIT_MODAL_CONTENT_CLASSNAME;
var WALLKIT_MODAL_MIN_WIDTH = '500';
exports.WALLKIT_MODAL_MIN_WIDTH = WALLKIT_MODAL_MIN_WIDTH;
var WALLKIT_MODAL_MIN_HEIGHT = '250';
exports.WALLKIT_MODAL_MIN_HEIGHT = WALLKIT_MODAL_MIN_HEIGHT;
var WALLKIT_FIREBASE_UI_PLACEHOLDER_ID = 'firebase-ui-placeholder';
exports.WALLKIT_FIREBASE_UI_PLACEHOLDER_ID = WALLKIT_FIREBASE_UI_PLACEHOLDER_ID;
var WALLKIT_FIREBASE_WK_FORM_PLACEHOLDER_ID = 'wk-email-auth-form';
exports.WALLKIT_FIREBASE_WK_FORM_PLACEHOLDER_ID = WALLKIT_FIREBASE_WK_FORM_PLACEHOLDER_ID;
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

/***/ 542:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = exports.DEFAULT_ERROR_MESSAGES = exports.ERRORS_TYPES = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(972));

var _createClass2 = _interopRequireDefault(__webpack_require__(884));

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

/***/ 343:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(972));

var _createClass2 = _interopRequireDefault(__webpack_require__(884));

var _classPrivateFieldGet2 = _interopRequireDefault(__webpack_require__(704));

var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(401));

var _sdk2 = _interopRequireDefault(__webpack_require__(850));

var _authentication2 = _interopRequireDefault(__webpack_require__(484));

var _events2 = _interopRequireDefault(__webpack_require__(889));

var _eventsName = __webpack_require__(73);

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

/***/ 42:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AuthButton = exports.FormField = exports.SignupForm = exports.LoginForm = exports.ForgotPasswordForm = exports.AuthForm = exports.Form = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(168));

var _inherits2 = _interopRequireDefault(__webpack_require__(914));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(164));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(94));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(972));

var _createClass2 = _interopRequireDefault(__webpack_require__(884));

var _DOM = __webpack_require__(909);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Form = /*#__PURE__*/function () {
  function Form(options) {
    (0, _classCallCheck2["default"])(this, Form);
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
        var placeholderElement = document.querySelector(selector);

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
    key: "init",
    value: function init() {
      this.insertHeader();
      this.insertFields();
      this.insertFooter();
      this.submitBtn.addEventListener('click', this.submitForm.bind(this));
      return this;
    }
  }]);
  return Form;
}();

exports.Form = Form;

var AuthForm = /*#__PURE__*/function () {
  function AuthForm(selector, options) {
    var _this2 = this;

    (0, _classCallCheck2["default"])(this, AuthForm);
    this.wrapper = (0, _DOM.createElement)('div', {
      id: 'wk-auth-form'
    });
    this.loginForm = new LoginForm(selector, {
      onSubmit: function onSubmit(data) {
        if (options.onLogin) {
          options.onLogin(data);
        }
      },
      onCancel: function onCancel() {
        if (options.onCancel) {
          options.onCancel();

          _this2.loginForm.resetForm();
        }
      }
    });
    this.loginForm.formWrapper.addEventListener('click', function (event) {
      if (event.target.id === 'auth-signup-link') {
        event.preventDefault();

        _this2.loginForm.hide();

        _this2.signUpForm.show();

        _this2.loginForm.resetForm();
      } else if (event.target.id === 'auth-password-link') {
        event.preventDefault();

        _this2.loginForm.hide();

        _this2.loginForm.resetForm();

        _this2.forgotPasswordForm.show();
      }
    });
    this.loginForm.hide();
    this.signUpForm = new SignupForm(selector, {
      onSubmit: function onSubmit(data) {
        if (options.onSignUp) {
          options.onSignUp(data);
        }
      }
    });
    this.signUpForm.formWrapper.addEventListener('click', function (event) {
      if (event.target.id === 'auth-signin-link') {
        _this2.loginForm.show();

        _this2.signUpForm.hide();

        _this2.signUpForm.resetForm();
      }
    });
    this.signUpForm.hide();
    this.forgotPasswordForm = new ForgotPasswordForm(selector, {
      onSubmit: function onSubmit(data) {
        if (options.onPasswordReset) {
          options.onPasswordReset(data);
        }
      }
    });
    this.forgotPasswordForm.formWrapper.addEventListener('click', function (event) {
      if (event.target.id === 'back-to-login') {
        event.preventDefault();

        _this2.forgotPasswordForm.hide();

        _this2.forgotPasswordForm.resetForm();

        _this2.loginForm.show();
      }
    });
    this.forgotPasswordForm.hide();
    this.authButton = new AuthButton(selector, {
      onClick: function onClick() {
        _this2.loginForm.show();

        _this2.authButton.hide();

        if (options.onAuthFormShow) {
          options.onAuthFormShow();
        }
      }
    });
    this.authButton.render();
  }

  (0, _createClass2["default"])(AuthForm, [{
    key: "toggle",
    value: function toggle() {
      this.hide();
      this.authButton.show();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.loginForm.hide();
      this.loginForm.resetForm();
      this.signUpForm.hide();
      this.signUpForm.resetForm();
      this.forgotPasswordForm.hide();
      this.forgotPasswordForm.resetForm();
    }
  }, {
    key: "showSuccessLogin",
    value: function showSuccessLogin() {}
  }, {
    key: "showSuccessSignUp",
    value: function showSuccessSignUp() {}
  }, {
    key: "showSuccessPasswordReset",
    value: function showSuccessPasswordReset() {
      this.forgotPasswordForm.showFormResult("\n            <div>\n                <h2>Check your email!</h2>\n                <p>Follow the instructions sent to test@ya.ru to recover your password</p>\n            </div>\n        ");
    }
  }]);
  return AuthForm;
}();

exports.AuthForm = AuthForm;

var ForgotPasswordForm = /*#__PURE__*/function (_Form) {
  (0, _inherits2["default"])(ForgotPasswordForm, _Form);

  var _super = _createSuper(ForgotPasswordForm);

  function ForgotPasswordForm(targetElementSelector, options) {
    var _this3;

    (0, _classCallCheck2["default"])(this, ForgotPasswordForm);
    _this3 = _super.call(this, {});
    _this3.options = options;
    _this3.options.title = 'Reset Password' || 0;
    _this3.options.footer = _this3.getFormFooter() || options.footer;
    _this3.emailField = new FormField({
      name: 'wk-fb-email',
      dataSlug: 'email',
      label: 'Email',
      type: 'email',
      onChange: function onChange() {},
      onInput: function onInput() {}
    });
    _this3.fields = [_this3.emailField];

    _this3.init();

    _this3.render(targetElementSelector);

    return _this3;
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
}(Form);

exports.ForgotPasswordForm = ForgotPasswordForm;

var LoginForm = /*#__PURE__*/function (_Form2) {
  (0, _inherits2["default"])(LoginForm, _Form2);

  var _super2 = _createSuper(LoginForm);

  function LoginForm(targetElementSelector, options) {
    var _this4;

    (0, _classCallCheck2["default"])(this, LoginForm);
    _this4 = _super2.call(this, {});
    _this4.options = options;
    _this4.options.title = 'Sign in with email' || 0;
    _this4.options.footer = _this4.getFormFooter() || options.footer;
    _this4.emailField = new FormField({
      dataSlug: 'email',
      name: 'wk-fb-email',
      label: 'Email',
      type: 'email',
      onChange: function onChange() {},
      onInput: function onInput() {}
    });
    _this4.passwordField = new FormField({
      dataSlug: 'password',
      name: 'wk-fb-password',
      label: 'Password',
      type: 'password',
      onChange: function onChange() {},
      onInput: function onInput() {}
    });
    _this4.fields = [_this4.emailField, _this4.passwordField];

    _this4.init();

    _this4.render(targetElementSelector);

    if (options.onCancel) {
      _this4.cancelBtn.addEventListener('click', options.onCancel.bind((0, _assertThisInitialized2["default"])(_this4)));
    }

    return _this4;
  }

  (0, _createClass2["default"])(LoginForm, [{
    key: "getFormFooter",
    value: function getFormFooter() {
      var footerWrapper = (0, _DOM.createElement)('div');
      var subFooter = (0, _DOM.createElement)('div', {
        className: 'wk-form__sub-footer'
      });
      subFooter.appendChild((0, _DOM.createElement)('a', {
        id: 'auth-signup-link',
        className: 'wk-form__link',
        innerText: 'Sign Up',
        attributes: {
          href: '#'
        }
      }));
      subFooter.appendChild((0, _DOM.createElement)('a', {
        className: 'wk-form__link wk-form__reset-password',
        innerText: 'Forgot password',
        id: 'auth-password-link',
        attributes: {
          href: '#'
        }
      }));
      var formFooter = (0, _DOM.createElement)('div', {
        className: 'wk-form__footer'
      });
      footerWrapper.appendChild(subFooter);
      formFooter.appendChild(this.cancelBtn);
      formFooter.appendChild(this.submitBtn);
      footerWrapper.appendChild(formFooter);
      return footerWrapper;
    }
  }]);
  return LoginForm;
}(Form);

exports.LoginForm = LoginForm;

var SignupForm = /*#__PURE__*/function (_Form3) {
  (0, _inherits2["default"])(SignupForm, _Form3);

  var _super3 = _createSuper(SignupForm);

  function SignupForm(targetElementSelector, options) {
    var _this5;

    (0, _classCallCheck2["default"])(this, SignupForm);
    _this5 = _super3.call(this);
    _this5.options = options;
    _this5.options.title = 'Sign Up' || 0;
    _this5.options.footer = _this5.getFormFooter() || options.footer;
    _this5.emailField = new FormField({
      dataSlug: 'email',
      name: 'wk-fb-email',
      label: 'Email',
      type: 'email',
      onChange: function onChange() {},
      onInput: function onInput() {}
    });
    _this5.nameField = new FormField({
      dataSlug: 'name',
      name: 'wk-fb-name',
      label: 'Name',
      type: 'text',
      onChange: function onChange() {},
      onInput: function onInput() {}
    });
    _this5.passwordField = new FormField({
      dataSlug: 'password',
      name: 'wk-fb-password',
      label: 'Password',
      type: 'password',
      onChange: function onChange() {},
      onInput: function onInput() {}
    });
    _this5.fields = [_this5.emailField, _this5.nameField, _this5.passwordField];

    _this5.init();

    _this5.render(targetElementSelector);

    return _this5;
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
  }]);
  return SignupForm;
}(Form);

exports.SignupForm = SignupForm;

var FormField = /*#__PURE__*/function () {
  function FormField(options) {
    (0, _classCallCheck2["default"])(this, FormField);

    if (!options) {
      throw new Error('No Options Provided');
    }

    this.wrapper = this.createWrapper();
    this.input = this.createInput(options);
    this.type = options.type || 'text';
    this.message = null;
    this.isValid = false;
    this.required = options.required || false;
    this.slug = options.dataSlug;
    this.wrapper.appendChild(this.createLabel(options.label, options.name));
    this.wrapper.appendChild(this.input);

    if (options.onChange) {
      this.input.addEventListener('change', options.onChange.bind(this));
    }

    if (options.onInput) {
      this.input.addEventListener('input', options.onInput.bind(this));
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
      } else if (this.type === 'password') {
        if (!value) {
          this.setError('Enter your password to continue!');
          return false;
        } else if (!value.length >= 6) {
          this.setError('Password doesn\'t match requirements!');
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
        innerText: text
      });
    }
  }, {
    key: "createMessage",
    value: function createMessage(message, valid) {
      var messageElement = (0, _DOM.createElement)('span', {
        className: "wk-form-field__message"
      });
      messageElement.innerText = message;
      return messageElement;
    }
  }, {
    key: "setError",
    value: function setError(message) {
      if (!this.message) {
        this.setFieldValidationState(false);
        this.message = this.createMessage(message, false);
        this.wrapper.appendChild(this.message);
      } else if (this.message) {
        this.message.innerText = message;
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
      } else {
        this.wrapper.classList.add('wk-form-field--valid');
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
  }]);
  return FormField;
}();

exports.FormField = FormField;

var AuthButton = /*#__PURE__*/function () {
  function AuthButton(selector, options) {
    (0, _classCallCheck2["default"])(this, AuthButton);
    this.selector = selector;
    this.element = this.createElement(options);

    if (options.onClick) {
      this.element.addEventListener('click', options.onClick.bind(this));
    }
  }

  (0, _createClass2["default"])(AuthButton, [{
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
  return AuthButton;
}();

exports.AuthButton = AuthButton;

/***/ }),

/***/ 753:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(107));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(756));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(239));

var _typeof2 = _interopRequireDefault(__webpack_require__(630));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(972));

var _createClass2 = _interopRequireDefault(__webpack_require__(884));

var _classPrivateFieldGet2 = _interopRequireDefault(__webpack_require__(704));

var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(401));

var _loaders = __webpack_require__(758);

var _DOM = __webpack_require__(909);

var _constants = __webpack_require__(66);

var _events = _interopRequireDefault(__webpack_require__(889));

var _eventsName = __webpack_require__(73);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _mode = /*#__PURE__*/new WeakMap();

var _loadFirebase = /*#__PURE__*/new WeakSet();

var _authStateChanged = /*#__PURE__*/new WeakSet();

var _firebaseInitApp = /*#__PURE__*/new WeakSet();

var Firebase = /*#__PURE__*/function () {
  function Firebase(options) {
    var _options$captchaKey, _options$genuineForm, _options$elementSelec, _options$onSuccessAut, _options$onAuthStateC, _options$uiShown;

    (0, _classCallCheck2["default"])(this, Firebase);

    _firebaseInitApp.add(this);

    _authStateChanged.add(this);

    _loadFirebase.add(this);

    _mode.set(this, {
      writable: true,
      value: void 0
    });

    this.events = new _events["default"]();
    this.firebaseUiConfig = null;
    (0, _classPrivateFieldSet2["default"])(this, _mode, options === null || options === void 0 ? void 0 : options.mode);
    this.config = options === null || options === void 0 ? void 0 : options.config;
    this.providers = options === null || options === void 0 ? void 0 : options.providers;
    this.tosURL = options === null || options === void 0 ? void 0 : options.tosURL;
    this.privacyPolicyURL = options === null || options === void 0 ? void 0 : options.privacyPolicyURL;
    this.captchaKey = (_options$captchaKey = options === null || options === void 0 ? void 0 : options.captchaKey) !== null && _options$captchaKey !== void 0 ? _options$captchaKey : '6LeNZrwbAAAAAKXPTmJj5KMdUwI2GE6XAUbCU6DM';
    this.genuineForm = (_options$genuineForm = options === null || options === void 0 ? void 0 : options.genuineForm) !== null && _options$genuineForm !== void 0 ? _options$genuineForm : true;
    this.firebase = null;
    this.firebaseui = null;
    this.elementPlaceholder = (_options$elementSelec = options === null || options === void 0 ? void 0 : options.elementSelector) !== null && _options$elementSelec !== void 0 ? _options$elementSelec : "#".concat(_constants.WALLKIT_FIREBASE_UI_PLACEHOLDER_ID);
    this.onSuccessAuth = (_options$onSuccessAut = options === null || options === void 0 ? void 0 : options.onSuccessAuth) !== null && _options$onSuccessAut !== void 0 ? _options$onSuccessAut : null;
    this.onAuthStateChanged = (_options$onAuthStateC = options === null || options === void 0 ? void 0 : options.onAuthStateChanged) !== null && _options$onAuthStateC !== void 0 ? _options$onAuthStateC : null;
    this.uiShown = (_options$uiShown = options === null || options === void 0 ? void 0 : options.uiShown) !== null && _options$uiShown !== void 0 ? _options$uiShown : null;
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
        if (result) {
          result.user.getIdToken().then(function (token) {
            var formattedResult = {
              user: result.user,
              userId: result.user.uid,
              token: token
            };

            if (_this4.onSuccessAuth) {
              _this4.onSuccessAuth(formattedResult, result);
            }
          });
        }
      });
    }
  }, {
    key: "signUp",
    value: function signUp(email, password) {
      var _this5 = this;

      return this.firebase.auth().createUserWithEmailAndPassword(email, password).then(function (result) {
        if (result) {
          result.user.getIdToken().then(function (token) {
            var formattedResult = {
              user: result.user,
              userId: result.user.uid,
              token: token
            };

            if (_this5.onSuccessAuth) {
              _this5.onSuccessAuth(formattedResult, result);
            }
          });
        }
      });
    }
  }, {
    key: "sendPasswordResetEmail",
    value: function sendPasswordResetEmail(email) {
      return this.firebase.auth().sendPasswordResetEmail(email);
    }
  }, {
    key: "authWithCustomToken",
    value: function () {
      var _authWithCustomToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(token) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (!(this.firebase && this.firebase.auth)) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 4;
                return this.firebase.auth().signInWithCustomToken(token);

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 5:
                return _context2.abrupt("return", false);

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.error('Custom Token Auth Fail');
                return _context2.abrupt("return", false);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function authWithCustomToken(_x2) {
        return _authWithCustomToken.apply(this, arguments);
      }

      return authWithCustomToken;
    }()
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
        url: 'https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js',
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

/***/ 378:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(107));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(756));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(972));

var _createClass2 = _interopRequireDefault(__webpack_require__(884));

var _classPrivateFieldGet2 = _interopRequireDefault(__webpack_require__(704));

var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(401));

var _eventsName = _interopRequireDefault(__webpack_require__(73));

var _DOM = __webpack_require__(909);

var _loaders = __webpack_require__(758);

var _sdk2 = _interopRequireDefault(__webpack_require__(850));

var _events = _interopRequireDefault(__webpack_require__(889));

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _sdk = /*#__PURE__*/new WeakMap();

var _initReCaptchaPlaceholder = /*#__PURE__*/new WeakSet();

var _onRecaptchaAuth = /*#__PURE__*/new WeakSet();

var ReCaptcha = /*#__PURE__*/function () {
  function ReCaptcha(authenticationInstance, options) {
    (0, _classCallCheck2["default"])(this, ReCaptcha);

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

  (0, _createClass2["default"])(ReCaptcha, [{
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
  return ReCaptcha;
}();

exports.default = ReCaptcha;

function _initReCaptchaPlaceholder2() {
  var reCaptchaPlaceholder = (0, _DOM.createElement)('div');
  reCaptchaPlaceholder.classList.add('g-recaptcha');
  reCaptchaPlaceholder.dataset.sitekey = this.siteKey;
  reCaptchaPlaceholder.dataset.size = 'invisible';
  reCaptchaPlaceholder.dataset.callback = 'onRecaptchaAuth';
  this.authentication.modal.modalContent.appendChild(reCaptchaPlaceholder); // injectInBody(reCaptchaPlaceholder);
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


var _interopRequireDefault = __webpack_require__(736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(972));

var _createClass2 = _interopRequireDefault(__webpack_require__(884));

var _classPrivateFieldGet2 = _interopRequireDefault(__webpack_require__(704));

var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(401));

var _localStorage = _interopRequireDefault(__webpack_require__(347));

var _cookie = __webpack_require__(48);

var _slug = /*#__PURE__*/new WeakMap();

var Token = /*#__PURE__*/function () {
  function Token(slug, value) {
    (0, _classCallCheck2["default"])(this, Token);

    _slug.set(this, {
      writable: true,
      value: void 0
    });

    if (slug) {
      (0, _classPrivateFieldSet2["default"])(this, _slug, slug);

      if (value) {
        this.set(value);
      } else {
        this.token = this.getStoredTokenValue() || null;
      }
    }
  }

  (0, _createClass2["default"])(Token, [{
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
      (0, _cookie.removeCookie)((0, _classPrivateFieldGet2["default"])(this, _slug));

      _localStorage["default"].removeItem((0, _classPrivateFieldGet2["default"])(this, _slug));
    }
  }, {
    key: "set",
    value: function set(value) {
      this.token = value;
      (0, _cookie.setCookie)((0, _classPrivateFieldGet2["default"])(this, _slug), value, {
        expires: 'Fri, 31 Dec 9999 23:59:59 GMT',
        path: "/"
      });

      _localStorage["default"].setItem((0, _classPrivateFieldGet2["default"])(this, _slug), value);
    }
  }]);
  return Token;
}();

exports.default = Token;

/***/ }),

/***/ 484:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(736);

var _typeof3 = __webpack_require__(630);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(107));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(756));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(239));

var _typeof2 = _interopRequireDefault(__webpack_require__(630));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(972));

var _createClass2 = _interopRequireDefault(__webpack_require__(884));

var _classPrivateFieldGet5 = _interopRequireDefault(__webpack_require__(704));

var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(401));

var _modal = _interopRequireDefault(__webpack_require__(269));

var _Firebase = _interopRequireDefault(__webpack_require__(753));

var _constants = __webpack_require__(66);

var _eventsName = _interopRequireWildcard(__webpack_require__(73));

var _events = _interopRequireDefault(__webpack_require__(889));

var _frame = _interopRequireDefault(__webpack_require__(967));

var _sdk = _interopRequireDefault(__webpack_require__(850));

var _Token = _interopRequireDefault(__webpack_require__(526));

var _ReCaptcha = _interopRequireDefault(__webpack_require__(378));

var _AuthForm = __webpack_require__(42);

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
    var _this = this;

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
    this.token = new _Token["default"](_constants.WALLKIT_TOKEN_NAME);
    this.firebaseToken = new _Token["default"](_constants.FIREBASE_TOKEN_NAME);
    this.frame = new _frame["default"]();
    this.sdk = new _sdk["default"]();

    if (!!(options !== null && options !== void 0 && options.firebase)) {
      this.modal = _classPrivateMethodGet(this, _createModal, _createModal2).call(this);
      this.modal.init();
      var config = {
        mode: options.mode,
        onAuthStateChanged: this.updateFirebaseToken.bind(this),
        onSuccessAuth: this.onSuccessAuth.bind(this),
        uiShown: this.onFirebaseInit.bind(this),
        onAuthFail: this.onFirebaseAuthFail.bind(this)
      };

      if ((0, _typeof2["default"])(options.firebase) === "object") {
        config = _objectSpread(_objectSpread({}, config), options.firebase);
      }

      this.firebase = new _Firebase["default"](config);
      this.firebase.init();

      if (options.firebase.genuineForm === false) {
        this.authForm = new _AuthForm.AuthForm("#".concat(_constants.WALLKIT_FIREBASE_WK_FORM_PLACEHOLDER_ID), {
          onLogin: function onLogin(data) {
            _this.firebase.signIn(data.email, data.password).then(function () {
              _this.authForm.hide();
            })["catch"](function (error) {
              if (error.message) {
                _this.authForm.signUpForm.setFormError(error.message);
              }
            });
          },
          onSignUp: function onSignUp(data) {
            _this.firebase.signUp(data.email, data.password).then(function () {
              _this.authForm.hide();
            })["catch"](function (error) {
              if (error.message) {
                _this.authForm.signUpForm.setFormError(error.message);
              }
            });
          },
          onPasswordReset: function onPasswordReset(data) {
            _this.firebase.sendPasswordResetEmail(data.email).then(function () {
              _this.authForm.showSuccessPasswordReset();
            })["catch"](function (error) {
              if (error.message) {
                _this.authForm.forgotPasswordForm.setFormError(error.message);
              }
            });
          },
          onAuthFormShow: function onAuthFormShow() {
            _this.firebase.hideAuthForm();
          },
          onCancel: function onCancel() {
            _this.firebase.showAuthForm();

            _this.authForm.toggle();
          }
        });
      }
    }

    this.reCaptcha = new _ReCaptcha["default"](this, options === null || options === void 0 ? void 0 : options.reCaptcha);
    this.reCaptcha.events.subscribe(_eventsName["default"].local.RECAPTCHA_VALIDATION_FAILED, function () {
      _classPrivateMethodGet(_this, _setAuthorizationError, _setAuthorizationError2).call(_this, 'ReCaptcha Validation Failed! Please try again!');
    });
    this.reCaptcha.events.subscribe(_eventsName["default"].local.RECAPTCHA_VALIDATION_SUCCESS, function () {
      _classPrivateMethodGet(_this, _resetAuthorizationError, _resetAuthorizationError2).call(_this);
    });

    if (this.reCaptcha.enabled) {
      if (!this.isAuthenticated()) {
        this.reCaptcha.init();
      }
    }

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
    key: "onSuccessAuth",
    value: function onSuccessAuth(data) {
      var _this2 = this;

      this.modal.toggleLoader(true);

      var handleAuthError = function handleAuthError(error) {
        _this2.firebase.reset();

        _this2.modal.toggleLoader(false);

        _classPrivateMethodGet(_this2, _setAuthorizationError, _setAuthorizationError2).call(_this2, (error === null || error === void 0 ? void 0 : error.message) || 'Something went wrong!');
      };

      this.updateFirebaseToken(data.token);
      this.events.notify(_eventsName["default"].local.SUCCESS_FIREBASE_AUTH, data);
      this.authInWallkit(data.token).then(function (status) {
        if (status) {
          _this2.modal.hide();
        } else {
          _this2.firebase.reset();
        }

        _this2.modal.toggleLoader(false);
      })["catch"](function (error) {
        return handleAuthError(error);
      });
    }
  }, {
    key: "authInWallkit",
    value: function authInWallkit() {
      var _this3 = this;

      var firebaseToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _classPrivateMethodGet(this, _resetAuthorizationError, _resetAuthorizationError2).call(this);

      return new Promise(function (resolve) {
        if (firebaseToken) {
          _this3.sdk.methods.authenticateWithFirebase(firebaseToken).then(function (_ref) {
            var token = _ref.token,
                existed = _ref.existed;

            _this3.setToken(token);

            var userGetTimeout = setTimeout(function () {
              resolve(false);
            }, 10000);

            var userEventCallback = function userEventCallback() {
              clearTimeout(userGetTimeout);

              _this3.sdk.methods.unsubscribeLocalEvent('user', userEventCallback);

              _this3.events.notify(_eventsName["default"].local.SUCCESS_AUTH, {
                register: !existed
              });

              resolve(true);
            };

            _this3.sdk.methods.subscribeLocalEvent('user', userEventCallback);
          })["catch"](function (error) {
            var _error$response;

            _classPrivateMethodGet(_this3, _setAuthorizationError, _setAuthorizationError2).call(_this3, error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.error_description);

            _this3.removeTokens();

            resolve(false);
          });
        } else {
          resolve(false);
        }
      });
    }
  }, {
    key: "show",
    value: function () {
      var _show = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.modal.show();

                if (!this.firebase.isUiShown) {
                  this.checkFirebaseInit();
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function show() {
        return _show.apply(this, arguments);
      }

      return show;
    }()
  }, {
    key: "checkFirebaseInit",
    value: function checkFirebaseInit() {
      var _this4 = this;

      if (!this.firebase.loaded) {
        this.firebase.events.subscribe(_eventsName.FIREBASE_LOADED, function () {
          return _this4.checkFirebaseInit();
        }, {
          once: true
        });
      } else {
        if (!this.firebase.initialized) {
          this.firebase.events.subscribe(_eventsName.FIREBASE_INIT, function () {
            return _this4.checkFirebaseInit();
          }, {
            once: true
          });
        } else {
          var shownTimeout = null;

          if (!this.firebase.isUiShown) {
            shownTimeout = setTimeout(function () {
              _this4.firebase.startFirebaseUi();

              _this4.checkFirebaseInit();
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
      var _this5 = this;

      if (this.reCaptcha.enabled && this.reCaptcha.loaded) {
        this.reCaptcha.initCaptchaProcess();
      } else if (!this.reCaptcha.loaded) {
        this.events.subscribe(_eventsName["default"].local.RECAPTCHA_LOADED, function () {
          _this5.reCaptcha.initCaptchaProcess();
        }, {
          once: true
        });
      }

      this.modal.toggleLoader(false);
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
    key: "logout",
    value: function logout() {
      var _this6 = this;

      this.removeToken();
      this.firebase.logout().then(function (success) {
        if (success) {
          _this6.removeFirebaseToken();

          if (_this6.reCaptcha.enabled && !_this6.reCaptcha.loaded) {
            _this6.reCaptcha.init().then(function () {
              _this6.firebase.reset();
            })["catch"](function (error) {
              console.error(error);

              _this6.firebase.reset();
            });
          } else if (_this6.reCaptcha.loaded) {
            _this6.firebase.reset();

            _this6.reCaptcha.grecaptcha.reset();

            _this6.reCaptcha.initCaptchaProcess();
          } else {
            _this6.firebase.reset();
          }
        }
      });
    }
  }, {
    key: "dispatchTokens",
    value: function dispatchTokens() {
      if (this.isAuthenticated()) {
        if (this.token.get()) {
          this.frame.sendEvent(_eventsName["default"].wallkit.WALLKIT_EVENT_TOKEN, this.token.get());
        }

        if (this.firebaseToken.get()) {
          this.frame.sendEvent(_eventsName["default"].wallkit.WALLKIT_EVENT_FIREBASE_TOKEN, this.firebaseToken.get());
        }
      }
    }
  }, {
    key: "handleTicketsToken",
    value: function () {
      var _handleTicketsToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(ticketPassAuthToken) {
        var response, userCredential, firebaseToken;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.sdk.methods.getAuthTokensByTicketPassToken(ticketPassAuthToken);

              case 3:
                response = _context2.sent;

                if (!response) {
                  _context2.next = 19;
                  break;
                }

                _context2.next = 7;
                return this.firebase.authWithCustomToken(response.firebase_custom_token);

              case 7:
                userCredential = _context2.sent;
                _context2.next = 10;
                return userCredential.user.getIdToken();

              case 10:
                firebaseToken = _context2.sent;
                this.updateFirebaseToken(firebaseToken);
                this.setToken(response.token);
                _context2.next = 15;
                return this.sdk.methods.getUser();

              case 15:
                this.dispatchTokens();
                this.events.notify(_eventsName["default"].local.SUCCESS_AUTH, true);
                this.events.notify(_eventsName["default"].local.TICKETS_TOKEN_AUTH_SUCCESS, true);
                return _context2.abrupt("return", true);

              case 19:
                return _context2.abrupt("return", false);

              case 22:
                _context2.prev = 22;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);
                return _context2.abrupt("return", _context2.t0);

              case 26:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 22]]);
      }));

      function handleTicketsToken(_x) {
        return _handleTicketsToken.apply(this, arguments);
      }

      return handleTicketsToken;
    }()
  }, {
    key: "onFirebaseAuthFail",
    value: function onFirebaseAuthFail(error) {
      this.modal.toggleLoader(false);
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
      _classPrivateMethodGet(this, _initListeners, _initListeners2).call(this);
    }
  }]);
  return Authentication;
}();

exports.default = Authentication;

function _createModal2() {
  var _classPrivateFieldGet2, _classPrivateFieldGet3, _classPrivateFieldGet4;

  var defaultContentModal = "<div>\n                                        <div id=\"authorization-error\"></div>\n                                        <h2 class=\"wallkit-auth-modal__title\">".concat((_classPrivateFieldGet2 = (_classPrivateFieldGet3 = (0, _classPrivateFieldGet5["default"])(this, _options)) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.modalTitle) !== null && _classPrivateFieldGet2 !== void 0 ? _classPrivateFieldGet2 : 'Sign In', "</h2>\n                                        <div id=\"").concat(_constants.WALLKIT_FIREBASE_WK_FORM_PLACEHOLDER_ID, "\"></div>\n                                        <div id=\"").concat(_constants.WALLKIT_FIREBASE_UI_PLACEHOLDER_ID, "\"></div>\n                                     </div>");
  return new _modal["default"]({
    modalName: 'auth-modal',
    content: ((_classPrivateFieldGet4 = (0, _classPrivateFieldGet5["default"])(this, _options)) === null || _classPrivateFieldGet4 === void 0 ? void 0 : _classPrivateFieldGet4.content) || defaultContentModal,
    className: 'wallkit-auth-modal',
    initialLoader: true
  });
}

function _initListeners2() {
  var _this7 = this;

  this.events.subscribe(_eventsName["default"].local.FRAME_MESSAGE, function (_ref3) {
    var name = _ref3.name,
        value = _ref3.value;

    switch (name) {
      case _eventsName["default"].wallkit.WALLKIT_EVENT_TOKEN:
        if (value) {
          _this7.setToken(value);
        }

        break;

      case _eventsName["default"].wallkit.WALLKIT_EVENT_AUTH:
      case _eventsName["default"].wallkit.WALLKIT_EVENT_REGISTRATION:
      case _eventsName["default"].wallkit.WALLKIT_EVENT_GET_TOKEN:
        if (value) {
          var token = value.token;

          _this7.setToken(token);
        }

        break;

      case _eventsName["default"].wallkit.WALLKIT_FIREBASE_TOKEN:
        _this7.firebaseToken.set(value);

        if (_this7.sdk) {
          _this7.sdk.methods.setFirebaseToken(value);
        }

        break;

      case _eventsName["default"].wallkit.WALLKIT_EVENT_FIREBASE_CUSTOM_TOKEN:
        if (value) {
          _this7.firebase.authWithCustomToken(value);
        }

        break;

      case _eventsName["default"].wallkit.WALLKIT_LOGOUT:
        _this7.logout();

        break;
    }
  });
}

function _setAuthorizationError2(error) {
  var errorPlaceholder = document.getElementById('authorization-error');

  if (errorPlaceholder) {
    errorPlaceholder.innerHTML = error || '';
  }
}

function _resetAuthorizationError2() {
  _classPrivateMethodGet(this, _setAuthorizationError, _setAuthorizationError2).call(this, null);
}

/***/ }),

/***/ 958:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(972));

var _createClass2 = _interopRequireDefault(__webpack_require__(884));

var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(401));

var _sdk = _interopRequireDefault(__webpack_require__(850));

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _options = /*#__PURE__*/new WeakMap();

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

    this.content = content;
    (0, _classPrivateFieldSet2["default"])(this, _options, options);
    this.sdk = new _sdk["default"]();
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

        return {
          allowed: response.allow,
          data: response
        };
      })["catch"](function (error) {
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

        return {
          allowed: response.allow,
          data: response
        };
      })["catch"](function (error) {
        if (error.error === 'incorrect_content_key') {
          return _this2.checkContentAccessAndSync(_this2.content);
        }

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

/***/ 73:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = exports.WALLKIT_EVENT_FIREBASE_CUSTOM_TOKEN = exports.WALLKIT_FRAME_ROUTE_CHANGE = exports.WALLKIT_EVENT_ONE_TAP_SIGN_IN = exports.WALLKIT_EVENT_REGISTRATION = exports.WALLKIT_EVENT_USER = exports.WALLKIT_EVENT_AUTH = exports.WALLKIT_EVENT_GET_TOKEN = exports.WALLKIT_FRAME_READY = exports.WALLKIT_EVENT_TOKEN = exports.WALLKIT_EVENT_FIREBASE_TOKEN = exports.WALLKIT_FIREBASE_TOKEN = exports.WALLKIT_LOGOUT = exports.WALLKIT_CHANGE_FRAME = exports.FIREBASE_UI_SHOWN = exports.FIREBASE_INIT = exports.FIREBASE_LOADED = exports.TICKETS_TOKEN_AUTH_SUCCESS = exports.RECAPTCHA_VALIDATION_SUCCESS = exports.RECAPTCHA_VALIDATION_FAILED = exports.RECAPTCHA_LOADED = exports.MODAL_CLOSED = exports.FRAME_MODAL_CLOSED = exports.AUTH_MODAL_CLOSED = exports.FRAME_MESSAGE = exports.WALLKIT_SDK_LOADED = exports.SUCCESS_FIREBASE_AUTH = exports.SUCCESS_AUTH = exports.MODAL_CREATED = exports.FRAME_MOUNTED = exports.FRAME_CREATED = void 0;
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
var FIREBASE_UI_SHOWN = 'firebase-init'; // Wallkit Events Names

exports.FIREBASE_UI_SHOWN = FIREBASE_UI_SHOWN;
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
    TICKETS_TOKEN_AUTH_SUCCESS: TICKETS_TOKEN_AUTH_SUCCESS
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
    WALLKIT_EVENT_FIREBASE_CUSTOM_TOKEN: WALLKIT_EVENT_FIREBASE_CUSTOM_TOKEN
  }
};
exports.default = _default;

/***/ }),

/***/ 889:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(972));

var _createClass2 = _interopRequireDefault(__webpack_require__(884));

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

/***/ 967:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(972));

var _createClass2 = _interopRequireDefault(__webpack_require__(884));

var _DOM = __webpack_require__(909);

var _constants = __webpack_require__(66);

var _eventsName = __webpack_require__(73);

var _events = _interopRequireDefault(__webpack_require__(889));

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
      var host = this.options.mode === 'dev' ? _constants.WALLKIT_POPUP_DEV_URL : _constants.WALLKIT_POPUP_URL;
      return "".concat(host, "?PUBLIC_KEY=").concat(this.options.public_key, "&version=").concat(this.options.version);
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
      if (this.frameElement && this.frameElement.contentWindow) {
        var frameWindow = this.frameElement.contentWindow;
        this.events.notify(name, value);
        frameWindow.postMessage({
          name: name,
          value: value,
          params: params
        }, '*');
      }
    }
  }, {
    key: "openFrame",
    value: function openFrame(name, params) {
      var _this = this;

      this.currentFrameName = name;

      if (this.ready) {
        console.log('test');
        this.sendEvent(_eventsName.WALLKIT_CHANGE_FRAME, name, params);
      } else {
        console.log('test2');
        this.events.subscribe(_eventsName.WALLKIT_FRAME_READY, function () {
          console.log('123145');

          _this.sendEvent(_eventsName.WALLKIT_CHANGE_FRAME, name, params);
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
  var _this2 = this;

  this.events.subscribe(_eventsName.WALLKIT_FRAME_ROUTE_CHANGE, function (value) {
    _this2.currentFrameName = value;
  });
  this.events.subscribe(_eventsName.WALLKIT_FRAME_READY, function (value) {
    if (value === true) {
      _this2.onFrameReady();
    }
  });
}

/***/ }),

/***/ 269:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(239));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(972));

var _createClass2 = _interopRequireDefault(__webpack_require__(884));

var _constants = __webpack_require__(66);

var _DOM = _interopRequireDefault(__webpack_require__(909));

var _loaders = __webpack_require__(758);

var _url = __webpack_require__(234);

var _events = _interopRequireDefault(__webpack_require__(889));

var _eventsName = __webpack_require__(73);

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

/***/ 850:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(972));

var _createClass2 = _interopRequireDefault(__webpack_require__(884));

var _classPrivateFieldGet4 = _interopRequireDefault(__webpack_require__(704));

var _classPrivateFieldSet2 = _interopRequireDefault(__webpack_require__(401));

var _DOM = __webpack_require__(909);

var _constants = __webpack_require__(66);

var _eventsName = __webpack_require__(73);

var _events2 = _interopRequireDefault(__webpack_require__(889));

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
        var _classPrivateFieldGet2;

        window.Wallkit.init({
          resource: (0, _classPrivateFieldGet4["default"])(this, _options).public_key,
          api_url: (0, _classPrivateFieldGet4["default"])(this, _apiUrl)
        });
        this.methods = window.Wallkit;
        this.client = window.Wallkit.client;
        (0, _classPrivateFieldGet4["default"])(this, _events).notify(_eventsName.WALLKIT_SDK_LOADED, window.Wallkit);

        if ((_classPrivateFieldGet2 = (0, _classPrivateFieldGet4["default"])(this, _options)) !== null && _classPrivateFieldGet2 !== void 0 && _classPrivateFieldGet2.onLoaded) {
          var _classPrivateFieldGet3;

          (_classPrivateFieldGet3 = (0, _classPrivateFieldGet4["default"])(this, _options)) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.onLoaded();
        }
      }
    }
  }, {
    key: "awaitLoad",
    value: function awaitLoad() {
      var _this = this;

      return new Promise(function (resolve) {
        if (!_this.methods) {
          (0, _classPrivateFieldGet4["default"])(_this, _events).subscribe(_eventsName.WALLKIT_SDK_LOADED, function () {
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
      (0, _DOM.insertScript)("".concat(_constants.WALLKIT_CDN_URL, "/js/sdk/0.0.45/wallkit.umd.min.js"), 'wallkit-js-sdk', this.onLoad.bind(this));
    }
  }]);
  return SDK;
}();

exports.default = SDK;

/***/ }),

/***/ 909:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(630);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = exports.isMobile = exports.insertScript = exports.loadCSS = exports.injectInHead = exports.injectInBody = exports.createElement = exports.checkIfElementExists = exports.isDocumentAvailable = void 0;

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
        element[_prop] = attributes[_prop];
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

/***/ 48:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = exports.removeCookie = exports.setCookie = void 0;

var setCookie = function setCookie(name, value, options) {
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

  value = encodeURIComponent(value);
  var updatedCookie = "".concat(name, "=").concat(value);

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];

    if (propValue) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
};

exports.setCookie = setCookie;

var removeCookie = function removeCookie(name) {
  document.cookie = "".concat(name, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;");
};

exports.removeCookie = removeCookie;
var _default = {
  setCookie: setCookie,
  removeCookie: removeCookie
};
exports.default = _default;

/***/ }),

/***/ 758:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = exports.loadScripts = exports.loadWallkitAsset = void 0;

var _DOM = __webpack_require__(909);

var _constants = __webpack_require__(66);

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

/***/ 672:
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

/***/ 234:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(736);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resetHash = exports.parseAuthTokenHash = exports.parseModalHashURL = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(630));

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

/***/ }),

/***/ 168:
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

/***/ 461:
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

/***/ 838:
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

/***/ 972:
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 641:
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

/***/ 704:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classApplyDescriptorGet = __webpack_require__(461);

var classExtractFieldDescriptor = __webpack_require__(641);

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = classExtractFieldDescriptor(receiver, privateMap, "get");
  return classApplyDescriptorGet(receiver, descriptor);
}

module.exports = _classPrivateFieldGet;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 401:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classApplyDescriptorSet = __webpack_require__(838);

var classExtractFieldDescriptor = __webpack_require__(641);

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
  classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}

module.exports = _classPrivateFieldSet;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 884:
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

/***/ 239:
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

/***/ 94:
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

/***/ 914:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(307);

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

/***/ 736:
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 164:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = __webpack_require__(630).default;

var assertThisInitialized = __webpack_require__(168);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 307:
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

/***/ 630:
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

module.exports = __webpack_require__(390);


/***/ }),

/***/ 390:
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(736);

__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(239));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(972));

var _createClass2 = _interopRequireDefault(__webpack_require__(884));

var _authentication = _interopRequireDefault(__webpack_require__(484));

var _modal = _interopRequireDefault(__webpack_require__(269));

var _frame = _interopRequireDefault(__webpack_require__(967));

var _sdk = _interopRequireDefault(__webpack_require__(850));

var _events = _interopRequireDefault(__webpack_require__(889));

var _analytics = _interopRequireDefault(__webpack_require__(343));

var _content = _interopRequireDefault(__webpack_require__(958));

var _styles = __webpack_require__(350);

var _DOM = __webpack_require__(909);

var _payments = __webpack_require__(672);

var _constants = __webpack_require__(66);

var _eventsName = __webpack_require__(73);

var _url = __webpack_require__(234);

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
        var _options$auth, _options$auth2, _options$auth2$modal, _options$auth3, _options$auth3$modal, _options$auth4;

        _this.authentication = new _authentication["default"](_objectSpread(_objectSpread({}, options), {}, {
          firebase: options === null || options === void 0 ? void 0 : (_options$auth = options.auth) === null || _options$auth === void 0 ? void 0 : _options$auth.firebase,
          modalTitle: options === null || options === void 0 ? void 0 : (_options$auth2 = options.auth) === null || _options$auth2 === void 0 ? void 0 : (_options$auth2$modal = _options$auth2.modal) === null || _options$auth2$modal === void 0 ? void 0 : _options$auth2$modal.title,
          content: options === null || options === void 0 ? void 0 : (_options$auth3 = options.auth) === null || _options$auth3 === void 0 ? void 0 : (_options$auth3$modal = _options$auth3.modal) === null || _options$auth3$modal === void 0 ? void 0 : _options$auth3$modal.content,
          reCaptcha: options === null || options === void 0 ? void 0 : (_options$auth4 = options.auth) === null || _options$auth4 === void 0 ? void 0 : _options$auth4.reCaptcha
        }));
        _this.analytics = new _analytics["default"](options === null || options === void 0 ? void 0 : options.analytics);

        _this.init();
      }
    }));
  }

  (0, _createClass2["default"])(WallkitIntegration, [{
    key: "modal",
    value: function modal(name, params) {
      this.popup.open(name, params);
    }
  }, {
    key: "init",
    value: function init() {
      _classPrivateMethodGet(this, _insertStyles, _insertStyles2).call(this);

      this.popup.init();
      this.authentication.init();
      this.analytics.init();

      _classPrivateMethodGet(this, _eventsListener, _eventsListener2).call(this);

      _classPrivateMethodGet(this, _recogniseURLIncomeParams, _recogniseURLIncomeParams2).call(this);

      if (this.config.onInit) {
        this.config.onInit(this);
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
              if (redirect) {
                _this2.popup.open(redirect);
              }
            }, {
              once: true
            });

            _this2.authentication.show();

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
__webpack_unused_export__ = _default;
})();

/******/ })()
;
//# sourceMappingURL=wallkit-integration-library.js.map
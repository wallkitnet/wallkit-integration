export const POPUP_UI_LIBRARY_STYLES = `
        .wallkit-modal-wrapper {
            z-index: 100;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(18, 18, 20, 0.9);
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
            overflow-y: auto;
            padding: 70px 15px 20px;
        }

        .wallkit-modal-wrapper__content {
            background-color: #fff;
            flex-shrink: 0;
            position: relative;
            box-sizing: border-box;
            overflow: hidden;
            font-family: Roboto, sans-serif;
        }
        
        @media screen and (max-width: 500px) {
            .wallkit-modal-wrapper__content {
                width: 100%;
                min-width: auto!important;
            }
        }

        .wallkit-modal-wrapper__close-btn {
            position: absolute;
            right: 10px;
            top: 10px;
            cursor: pointer;
            color: #000;
            font-size: 37px;
            width: 37px;
            height: 37px;
            text-align: center;
            line-height: 34px;
        }

        .wallkit-modal-wrapper .wk-frame {
            transition: all 0.3s linear 0s;
            max-width: 100%;
            border: none;
        }

        .wallkit-auth-modal {
            z-index: 999;
        }

        .wallkit-auth-modal .wallkit-modal-wrapper__content {
            padding: 20px;
        }

        .wallkit-auth-modal .wallkit-auth-modal__title {
            font-family: Roboto, sans-serif;
            text-align: center;
        }
        
        .wk-auth-form {
            display: flex;
            flex-direction: column;
        }

        .wk-form-field {
            display: flex;
            flex-direction: column;
            font-family: Oxygen, sans-serif;
            margin-bottom: 10px;
        }

        .wk-form-field .wk-form-field__label {
            font-weight: 500;
            color: #333;
            margin-bottom: 5px;
        }

        .wk-form-field .wk-form-field__input-wrapper {
            margin-bottom: 5px;
            position: relative;
        }
        
        .wk-eye-toggle {
            background: url(https://www.gstatic.com/images/icons/material/system/1x/visibility_black_24dp.png);
            width: 24px;
            height: 24px;
        }
        
        .wk-form-field__field-description {
            font-size: 11px;
            color: #989898;
        }
        
        .wk-eye-toggle.wk-eye-toggled {
            background: url(https://www.gstatic.com/images/icons/material/system/1x/visibility_off_black_24dp.png);
        }
        
        .wk-form-field__field-affix {
            position: absolute;
            right: 5px;
            top: 0;
            bottom: 0;
        }
        
        .wk-form-field .wk-form-field__input {
            border-radius: 0;
            border: 0;
            border-bottom: 1px solid #ccc;
            padding: 5px;
            box-sizing: border-box;
            width: 100%;
        }
        
        .wk-field-list {
            list-style-type: circle;
            padding-left: 12px;
            margin-top: 1px;
        }

        .wk-form-field .wk-form-field__input:focus {
            border-bottom: 1px solid #3f51b5;
            outline: none;
        }

        .wk-form-field .wk-form-field__message {
            font-size: 12px;
        }

        .wk-auth-form-button {
            background-color: #db4437;
            direction: ltr;
            font-weight: 500;
            height: auto;
            line-height: normal;
            max-width: 220px;
            min-height: 40px;
            padding: 8px 16px;
            text-align: left;
            width: 100%;
            box-sizing: border-box;
            box-shadow: 0 2px 2px 0 rgba(0,0,0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.20), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
            border-radius: 2px;
            font-family: "Roboto","Helvetica","Arial",sans-serif;
            margin: 0 auto 15px;
            cursor: pointer;
        }
        
        .wk-auth-form-button:focus,
        .wk-auth-form-button:active,{
            background-color: #5b6abe;
        }

        .wk-form-field.wk-form-field--invalid .wk-form-field__input {
            border-bottom: 1px solid #dd2c00;
        }
        
        .wk-form-field.wk-form-field--checkbox.wk-form-field--invalid .wk-form-field__checkmark {
            border-color: #dd2c00;
        }

        .wk-form-field.wk-form-field--valid .wk-form-field__input {
            border-bottom: 1px solid green;
        }

        .wk-form-field.wk-form-field--invalid .wk-form-field__message {
            color: #dd2c00;
        }

        .wk-form-field.wk-form-field--valid .wk-form-field__message {
            color: green;
        }

        .wk-form .wk-form__link {
            font-size: 14px;
            color: #3170f3;
            text-decoration: underline;
        }

        .wk-form {
            font-family: Oxygen, sans-serif;
        }
        
        .wk-form-header {
            margin-bottom: 10px;
        }

        .wk-form .wk-form__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .wk-form .wk-form__footer.wk-form__footer--right {
            justify-content: flex-end;
        }

        .wk-form .wk-form__sub-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .wk-form__reset-password {
            text-align: right;
        }

        .wk-form-result {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .wk-form-button {
            border: none;
            border-radius: 2px;
            background-color: #3f51b5;
            color: #fff;
            position: relative;
            height: 36px;
            margin: 0;
            min-width: 64px;
            padding: 0 16px;
            display: inline-block;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-size: 14px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0;
            overflow: hidden;
            will-change: box-shadow;
            transition: box-shadow .2s cubic-bezier(0.4, 0, 1, 1),background-color .2s cubic-bezier(0.4, 0, 0.2, 1),color .2s cubic-bezier(0.4, 0, 0.2, 1);
            outline: none;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
            line-height: 36px;
            vertical-align: middle;
        }

        .wk-form__error {
            display: none;
            margin: 10px 0;
            border: 1px solid #f5c6cb;
            border-radius: 5px;
            color: #721c24;
            background-color: #f8d7da;
            line-height: 21px;
            padding: 10px;
        }

        .wk-form__error.wk-form__error--show {
            display: block;
        }

        .wk-form-button.wk-form-button--cancel {
            margin-left: auto;
            margin-right: 10px;
            color: #3f51b5;
            background: none;
        }
        
        .wk-success-message {
        }
        
        .wk-success-message__title {
            font-weight: 500;
            margin-bottom: 10px;
        }
        
        .wk-success-message__description {
            margin-bottom: 10px;
        }
        
        .wk-success-message__description b {
            font-weight: 500;
        }

        .wk-form-button.wk-form-button--cancel:hover {
            background-color: hsla(0,0%,62%,.2);
        }
        
        .wk-success-message.wk-password-reset-success {
            min-height: 205px;
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
        
       
        
        .wk-form-field.wk-form-field--checkbox .wk-form-field__label {
            position: relative;
            padding-left: 30px;     
            line-height: 20px;
            font-size: 14px;     
        } 
        
        .wk-form-field.wk-form-field--checkbox input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }
        
        .wk-form-field .wk-form-field__checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 18px;
            width: 18px;
            background-color: none;
            border: 2px solid #333;
            box-sizing: border-box;
            border-radius: 2px;
        }
        
        .wk-form-field.wk-form-field--checkbox input:checked ~ .wk-form-field__checkmark {
            background-color: #3f51b5;
            border-color: #3f51b5;
        }
        
        .wk-form-field__checkmark:after {
            content: "";
            position: absolute;
            display: none;
        }
        
        .wk-form-field input:checked ~ .wk-form-field__checkmark:after {
            display: block;
        }
        
        .wk-form-field .wk-form-field__checkmark:after {
            left: 5px;
            top: 2px;
            width: 3px;
            height: 7px;
            border: solid white;
            border-width: 0 2px 2px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }
        
        .wallkit-modal-error {
            border: 1px solid #f1aeb5;
            border-radius: 5px;
            padding: 10px;
            width: calc(100% - 50px);
            background-color: #f8d7da;
            color: #58151c;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        }
        
        .wallkit-modal-success {
            border: 1px solid #a3cfbb;
            border-radius: 5px;
            padding: 10px;
            width: 100%;
            background-color: #d1e7dd;
            color: #0a3622;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        }
        
        .wallkit-email-confirmation-modal {
          text-align: center;
        }
`;
export const INLINE_UI_LIBRARY_STYLES = `
        .wallkit-modal-wrapper {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
        }

        .wallkit-modal-wrapper__content {
            background-color: #fff;
            flex-shrink: 0;
            position: relative;
            box-sizing: border-box;
            overflow: hidden;
        }
        
        @media screen and (max-width: 500px) {
            .wallkit-modal-wrapper__content {
                width: 100%;
                min-width: auto!important;
            }
        }

        .wallkit-modal-wrapper__close-btn {
            position: absolute;
            right: 10px;
            top: 10px;
            cursor: pointer;
            color: #000;
            font-size: 37px;
            width: 37px;
            height: 37px;
            text-align: center;
            line-height: 34px;
        }

        .wallkit-modal-wrapper .wk-frame {
            transition: all 0.3s linear 0s;
            max-width: 100%;
            border: none;
        }

        .wallkit-auth-modal {
            z-index: 999;
        }

        .wallkit-auth-modal .wallkit-modal-wrapper__content {
            padding: 20px;
        }

        .wallkit-auth-modal .wallkit-auth-modal__title {
            font-family: Roboto, sans-serif;
            text-align: center;
        }
        
        .wk-auth-form {
            display: flex;
            flex-direction: column;
        }

        .wk-form-field {
            display: flex;
            flex-direction: column;
            font-family: Oxygen, sans-serif;
            margin-bottom: 10px;
        }

        .wk-form-field .wk-form-field__label {
            font-weight: 500;
            color: #333;
            margin-bottom: 5px;
        }

        .wk-form-field .wk-form-field__input-wrapper {
            margin-bottom: 5px;
            position: relative;
        }
        
        .wk-eye-toggle {
            background: url(https://www.gstatic.com/images/icons/material/system/1x/visibility_black_24dp.png);
            width: 24px;
            height: 24px;
        }
        
        .wk-form-field__field-description {
            font-size: 11px;
            color: #989898;
        }
        
        .wk-eye-toggle.wk-eye-toggled {
            background: url(https://www.gstatic.com/images/icons/material/system/1x/visibility_off_black_24dp.png);
        }
        
        .wk-form-field__field-affix {
            position: absolute;
            right: 5px;
            top: 0;
            bottom: 0;
        }
        
        .wk-form-field .wk-form-field__input {
            border-radius: 0;
            border: 0;
            border-bottom: 1px solid #ccc;
            padding: 5px;
            box-sizing: border-box;
            width: 100%;
        }
        
        .wk-field-list {
            list-style-type: circle;
            padding-left: 12px;
            margin-top: 1px;
        }

        .wk-form-field .wk-form-field__input:focus {
            border-bottom: 1px solid #3f51b5;
            outline: none;
        }

        .wk-form-field .wk-form-field__message {
            font-size: 12px;
        }

        .wk-auth-form-button {
            background-color: #db4437;
            direction: ltr;
            font-weight: 500;
            height: auto;
            line-height: normal;
            max-width: 220px;
            min-height: 40px;
            padding: 8px 16px;
            text-align: left;
            width: 100%;
            box-sizing: border-box;
            box-shadow: 0 2px 2px 0 rgba(0,0,0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.20), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
            border-radius: 2px;
            font-family: "Roboto","Helvetica","Arial",sans-serif;
            margin: 0 auto 15px;
            cursor: pointer;
        }
        
        .wk-auth-form-button:focus,
        .wk-auth-form-button:active,{
            background-color: #5b6abe;
        }

        .wk-form-field.wk-form-field--invalid .wk-form-field__input {
            border-bottom: 1px solid #dd2c00;
        }
        
        .wk-form-field.wk-form-field--checkbox.wk-form-field--invalid .wk-form-field__checkmark {
            border-color: #dd2c00;
        }

        .wk-form-field.wk-form-field--valid .wk-form-field__input {
            border-bottom: 1px solid green;
        }

        .wk-form-field.wk-form-field--invalid .wk-form-field__message {
            color: #dd2c00;
        }

        .wk-form-field.wk-form-field--valid .wk-form-field__message {
            color: green;
        }

        .wk-form .wk-form__link {
            font-size: 14px;
            color: #3170f3;
            text-decoration: underline;
        }

        .wk-form {
            font-family: Oxygen, sans-serif;
        }
        
        .wk-form-header {
            margin-bottom: 10px;
        }

        .wk-form .wk-form__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .wk-form .wk-form__footer.wk-form__footer--right {
            justify-content: flex-end;
        }

        .wk-form .wk-form__sub-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .wk-form__reset-password {
            text-align: right;
        }

        .wk-form-result {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .wk-form-button {
            border: none;
            border-radius: 2px;
            background-color: #3f51b5;
            color: #fff;
            position: relative;
            height: 36px;
            margin: 0;
            min-width: 64px;
            padding: 0 16px;
            display: inline-block;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-size: 14px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0;
            overflow: hidden;
            will-change: box-shadow;
            transition: box-shadow .2s cubic-bezier(0.4, 0, 1, 1),background-color .2s cubic-bezier(0.4, 0, 0.2, 1),color .2s cubic-bezier(0.4, 0, 0.2, 1);
            outline: none;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
            line-height: 36px;
            vertical-align: middle;
        }

        .wk-form__error {
            display: none;
            margin: 10px 0;
            border: 1px solid #f5c6cb;
            border-radius: 5px;
            color: #721c24;
            background-color: #f8d7da;
            line-height: 21px;
            padding: 10px;
        }

        .wk-form__error.wk-form__error--show {
            display: block;
        }

        .wk-form-button.wk-form-button--cancel {
            margin-left: auto;
            margin-right: 10px;
            color: #3f51b5;
            background: none;
        }
        
        .wk-success-message {
        }
        
        .wk-success-message__title {
            font-weight: 500;
            margin-bottom: 10px;
        }
        
        .wk-success-message__description {
            margin-bottom: 10px;
        }
        
        .wk-success-message__description b {
            font-weight: 500;
        }

        .wk-form-button.wk-form-button--cancel:hover {
            background-color: hsla(0,0%,62%,.2);
        }
        
        .wk-success-message.wk-password-reset-success {
            min-height: 205px;
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
        
       
        
        .wk-form-field.wk-form-field--checkbox .wk-form-field__label {
            position: relative;
            padding-left: 30px;     
            line-height: 20px;
            font-size: 14px;     
        } 
        
        .wk-form-field.wk-form-field--checkbox input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }
        
        .wk-form-field .wk-form-field__checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 18px;
            width: 18px;
            background-color: none;
            border: 2px solid #333;
            box-sizing: border-box;
            border-radius: 2px;
        }
        
        .wk-form-field.wk-form-field--checkbox input:checked ~ .wk-form-field__checkmark {
            background-color: #3f51b5;
            border-color: #3f51b5;
        }
        
        .wk-form-field__checkmark:after {
            content: "";
            position: absolute;
            display: none;
        }
        
        .wk-form-field input:checked ~ .wk-form-field__checkmark:after {
            display: block;
        }
        
        .wk-form-field .wk-form-field__checkmark:after {
            left: 5px;
            top: 2px;
            width: 3px;
            height: 7px;
            border: solid white;
            border-width: 0 2px 2px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }
`;

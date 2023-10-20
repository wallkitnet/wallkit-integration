import {AUTH_DEFAULT_ERROR_CODE, AUTH_DEFAULT_ERROR_MESSAGE, ERROR_MESSAGES} from "../configs/constants";
import isEmpty from "lodash.isempty";

export const isStringJson = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

export const parseErrorMessage = (errorMessage, errorCode) => {
    let erMessage = AUTH_DEFAULT_ERROR_MESSAGE;
    let erCode = AUTH_DEFAULT_ERROR_CODE;
    if (isStringJson(errorMessage)) {
        const errorObj = JSON.parse(errorMessage);
        if (!isEmpty(errorObj.error)) {
            erMessage = ERROR_MESSAGES[errorObj.error.message] || errorObj.error.message;
            erCode = errorObj.error.code || erCode;
        }
    } else {
        erMessage = errorMessage;
        erCode = errorCode || erCode;
    }
    return {erMessage, erCode}
}
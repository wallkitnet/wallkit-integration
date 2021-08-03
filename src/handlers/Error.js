
export const ERRORS_TYPES = {
    DOM_ERROR: 'DOM_ERROR',
    ARGUMENT_ERROR: 'ARGUMENT_ERROR'
}

export const DEFAULT_ERROR_MESSAGES = {
    DOM_ERROR: 'DOM Manipulation gone wrong',
    ARGUMENT_ERROR: 'One of the argument were not provided'
}


export default class Error {
    constructor() {
    }

    static isErrorRecognisable(error_type) {
        return !!ERRORS_TYPES[error_type];
    }

    static getErrorTypeMessage(error_type) {
        return DEFAULT_ERROR_MESSAGES[error_type] ?? 'Unrecognised Error';
    }

    static handleError(error, error_type) {
        if (error_type && this.isErrorRecognisable(error_type)) {
            const message = error ?? Error.getErrorTypeMessage(error_type);
            const errorMessage = `ERROR::${error_type}; ${message};`;
            console.log(errorMessage);
            throw new Error(errorMessage);
        } else {
            const errorMessage = `ERROR::${error_type};`;
            console.log(errorMessage);
            throw new Error(errorMessage);
        }
    }

    static checkRequiredArgument(argument, key) {
        if (argument === undefined) {
            this.handleError(`Argument ${key} is not provided`, ERRORS_TYPES.ARGUMENT_ERROR);
        }
    }
}
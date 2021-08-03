export const setCookie = (name, value, options) => {
    options = options || {};

    let {expires} = options;

    if (typeof expires === "number" && expires) {
        let date = new Date();
        date.setTime(date.getTime() + expires * 1000);
        expires = options.expires = date;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    let updatedCookie = `${name}=${value}`;

    for (let propName in options) {
        updatedCookie += "; " + propName;
        let propValue = options[propName];
        if (propValue) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}

export const removeCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export default {
    setCookie,
    removeCookie
}
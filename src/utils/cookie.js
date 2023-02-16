export const setCookie = (name, value, options) => {
    if (!name || !value) {
      return;
    }

    options = options || {};
    let { expires } = options;

    if (typeof expires === "number" && expires) {
        let date = new Date();
        date.setTime(date.getTime() + expires * 1000);
        expires = options.expires = date;
    }

    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    let updatedCookie = `${name}=${encodeURIComponent(value)}; `;

    for (let propName in options) {
        let propValue = options[propName];
        if (propValue) {
            updatedCookie += `${propName}=${propValue}; `;
        }
    }

    document.cookie = updatedCookie;
}

export const removeCookie = (name, domain) => {
    const domainName = domain ? `domain=${domain}; ` : '';

    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; ${domainName}`;
}

export default {
    setCookie,
    removeCookie
}

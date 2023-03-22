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
    const props = {
      [name]: '',
      expires: 'Thu, 01 Jan 1970 00:00:00 UTC',
      path: '/',
      domain: domain || null
    };

    let cookieFingerprint = '';
    for (let propName in props) {
      const propValue = props[propName];
      if (propValue !== null && propValue !== undefined) {
        cookieFingerprint += `${propName}=${propValue}; `;
      }
    }

    document.cookie = cookieFingerprint;
}

export default {
    setCookie,
    removeCookie
}

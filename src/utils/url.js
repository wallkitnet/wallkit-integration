export const parseModalHashURL = () => {
    const UryModal = /#WkModal\((.*)\)$/.exec(decodeURIComponent(window.location.hash));
    if (UryModal && UryModal[1]) {
        const par = UryModal[1].split(/,(.+)/);

        if (typeof par[1] !== "undefined") {
            try {
                par[1] = JSON.parse(par[1])
            } catch (_) {
                par[1] = {
                    value: par[1].trim()
                }
            }
        }

        window.location.hash = "";

        return {
            name: par[0],
            params: (typeof par[1] === "object" ? par[1] : null)
        }
    }
}

export const parseAuthTokenHash = () => {
    const hash = decodeURIComponent(window.location.hash)

    if (hash?.includes('wk-authorize')) {
        const splitHash = hash.split('=');

        const token = splitHash?.[1];
        if (token) {
            return token;
        }
    }

    return null;
}

export const resetHash = () => {
    window.location.hash = '';
    const path = window.location.href.replace('#', '');
    window.history.pushState('', '', path);
}

export const resetSearchParams = (params) => {
    if (!!params && !!window.location.search && window.location.search.includes(params)) {
        if (window.location.search.replace(params, '') === '?') {
            params = '?'+params;
        }
        const path = window.location.href.replace(params, '');
        window.history.pushState('', '', path);
    }
}

export const getDomainWithoutSubdomain = url => {
  const urlParts = new URL(url).hostname.split('.')

  return urlParts
    .slice(0)
    .slice(-(urlParts.length === 4 ? 3 : 2))
    .join('.')
}

export const getParentDomain = () => {
  return `.${getDomainWithoutSubdomain(window.location)}`;
}

export const parseResetPasswordOobCodeHash = () => {
    const hash = decodeURIComponent(window.location.hash)

    if (hash?.includes('#reset-password=')) {
        const splitHash = hash.split('=');

        const oobCode = splitHash?.[1];
        if (oobCode) {
            return oobCode;
        }
    }

    return null;
}

export const parseUrlToShowAuthModal = () => {
    const authUrlPattern = 'auth-modal=true';
    const search = decodeURIComponent(window.location.search);
    if (!!search?.includes(authUrlPattern)) {
        resetSearchParams(authUrlPattern);
        return true;
    }
    return false;
}
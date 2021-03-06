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
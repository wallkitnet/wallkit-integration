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
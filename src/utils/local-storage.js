export default {
    setItem: function (key, value) {
        if (!this.isAvailable()) return null;

        return window.localStorage.setItem(key, value);
    },
    getItem: function (key) {
        if (!this.isAvailable()) return null;

        return window.localStorage.getItem(key);
    },
    removeItem: function (key) {
        if (!this.isAvailable()) return;

        return window.localStorage.removeItem(key);
    },
    isAvailable: function () {
        try {
            window.localStorage.setItem('', '');
            window.localStorage.removeItem('');
            return true;
        } catch(e) {
            return false;
        }
    }
};
export default class Events {
    constructor() {
        if (!!Events.instance) {
            return Events.instance;
        }

        Events.instance = this;
        this.listeners = [];

        return this;
    }

    subscribe(eventName, callback, options) {
        this.listeners.push({ name: eventName, callback, options: options });
    }

    unsubscribe(eventName, callback) {
        this.listeners = this.listeners.filter((event) => {
            return ((event.name !== eventName) || (event.callback !== callback));
        });
    }

    notify(eventName, data) {
        let onceIndexesToRemove = [];
        this.listeners.forEach((event, index) => {
            if (eventName === event.name) {
                event.callback(data);

                if (!!event?.options?.once) {
                    onceIndexesToRemove.push(index);
                }
            }
        })

        this.listeners = this.listeners.filter((item, index) => !onceIndexesToRemove.includes(index));
    }
}
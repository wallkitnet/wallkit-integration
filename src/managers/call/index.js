import Events from "../events";
import EventsNames from "../events/events-name";
import SDK from "../sdk";
import debug from "../../utils/debug";

export default class Call {
    #popup;
    #config;
    #events;
    #sdk;
    #classForHandleClick;
    #classThatReactOnTheUsersStatus;
    #classThatReactOnTheUsersPlans;
    #classThatReactOnTheUsersEvents;
    #onReady;

    constructor(popup, config, onReady) {
        this.#popup = popup;
        this.#config = config;
        this.#events = new Events();
        this.#sdk = new SDK();
        this.#classForHandleClick = config?.call?.classForHandleClick ?? 'wk-call';
        this.#classThatReactOnTheUsersStatus = config?.call?.classThatReactOnTheUsersStatus ?? 'wk-call-status-user';
        this.#classThatReactOnTheUsersPlans = config?.call?.classThatReactOnTheUsersPlans ?? 'wk-call-status-plans';
        this.#classThatReactOnTheUsersEvents = config?.call?.classThatReactOnTheUsersEvents ?? 'wk-call-status-events';
        this.#onReady = onReady;
    }

    #initWkListeners() {
        this.#events.subscribe(EventsNames.local.FRAME_MESSAGE, ({name, _}) => {
            switch (name) {
                case EventsNames.wallkit.WALLKIT_EVENT_USER:
                    this.getWallkitUserData();
                    break;
            }
        });

        this.#events.subscribe(EventsNames.local.SUCCESS_AUTH, (value) => {
            debug.log('subscribe ventsNames.local.SUCCESS_AUTH', value);

            this.getWallkitUserData();
        });

        this.#events.subscribe(EventsNames.local.LOGOUT, () => {
            this.setAllDataWkStatusesInDOMElements();
            this.#setDataWkHasAccessInBody(false);
        });

        this.#events.subscribe(EventsNames.local.CHECK_USER_ACCESS, (value) => {
            debug.log('subscribe ventsNames.local.CHECK_USER_ACCESS', value);

            this.#setDataWkHasAccessInBody(value);
        });
    }

    // add event listener to body and handle click on elements which have class `${this.#classForHandleClick}`
    // get class which starts from "wk–" to obtain slug of popup which we have to open
    // and params for this popup
    // ex. <a href="#" class="btn btn-primary wk-call wk–checkout–subscription-94">Buy</a> ===>
    // popup slug - checkout; params - {"item_type":"subscription", "item_key":"94"}
    // open popup by slug with params
    #initUIListeners() {
        document.body.addEventListener('click', (e) => {

                try {

                    debug.log('Click on element: ', e.target);
                    debug.log(`Does element have class ${this.#classForHandleClick}: ${e.target.classList.contains(this.#classForHandleClick)}`);

                    // skip if target element has no class `${this.#classForHandleClick}`
                    if (!e.target.classList.contains(`${this.#classForHandleClick}`)) return;

                    // retrieve all classes for element
                    const classes = Array.from(e.target.classList);
                    const slugAndParamStr = classes.find(className => className.startsWith('wk–'));

                    debug.log('Popup\'s slug and params: ', slugAndParamStr);
                    debug.log('Exit if slug and param === "undefined"');

                    // skip if we have no popup slug
                    if (typeof slugAndParamStr === "undefined") return;

                    const slugAndParamArr = slugAndParamStr.split("–");
                    const popupSlug = slugAndParamArr[1];
                    const popupParams = slugAndParamArr[2];

                    debug.log('Popup\'s slug: ', popupSlug);
                    debug.log('Popup\'s params: ', popupParams);

                    // open popup without params
                    if (typeof popupSlug !== "undefined" && typeof popupParams === "undefined") {
                        debug.log('Open popup without params. Only with slug: ', popupSlug);

                        this.#popup.open(popupSlug);
                        e.preventDefault();
                        return;
                    }

                    // getting key and value params
                    const popupParamsArr = popupParams.split('-');
                    let key = popupParamsArr[0];
                    const value = popupParamsArr[1];

                    debug.log('Popup\'s param key: ', key);
                    debug.log('Popup\'s param value: ', value);

                    //open popup with params
                    if (typeof key !== "undefined" && typeof value !== "undefined") {

                        // make mo readable key for user
                        if (key === 'ticket') {
                            key = 'ti_event_ticket';
                        }

                        // prepare params for popup
                        const params = JSON.stringify({item_type: key, item_key: value});
                        const path = `${popupSlug}?[${params}]`

                        debug.log('Open popup with params: ', path);

                        this.#popup.open(path);
                        e.preventDefault();
                    }
                } catch (error) {
                    debug.log('WK Call ERROR:', error);
                }
            }
        );
    }

    getUserStatus() {
        return this.#sdk.methods.isAuthenticated() ? 'authorized' : 'guest';
    }

    setAllDataWkStatusesInDOMElements(response) {
        this.setDataWkStatusUserInDOMElements();
        this.setDataWkStatusPlansInDOMElements(response);
        this.setDataWkStatusEventsInDOMElements(response);
    }

    setDataWkStatusUserInDOMElements() {
        debug.log(`Set user status: "${this.getUserStatus()}" for elements:`);

        // find all elements with class `${this.#classThatReactOnTheUsersStatus}`
        for (const element of document.querySelectorAll(`.${this.#classThatReactOnTheUsersStatus}`)) {
            debug.log(element);

            element.dataset.wkCallStatusUser = this.getUserStatus();
        }
    }

    setDataWkStatusPlansInDOMElements({subscriptions} = {}) {

        let plans = 'undefined';

        if (Array.isArray(subscriptions) && subscriptions.length > 0) {
            plans = subscriptions.map((s) => s.plan.slug).join(' ');
        }

        debug.log(`Set plans status: "${plans}" for elements:`);

        // find all elements with class `${this.#classThatReactOnTheUsersPlans}`
        for (const element of document.querySelectorAll(`.${this.#classThatReactOnTheUsersPlans}`)) {
            debug.log(element);

            element.dataset.wkCallStatusPlans = plans;
        }
    }

    setDataWkStatusEventsInDOMElements({assigned_tickets} = {}) {

        let events = 'undefined';

        if (Array.isArray(assigned_tickets) && assigned_tickets.length > 0) {
            events = assigned_tickets.map((s) => s.ti_event.slug).join(' ');
        }

        debug.log(`Set events status: "${events}" for elements:`);

        // find all elements with class `${this.#classThatReactOnTheUsersEvents}`
        for (const element of document.querySelectorAll(`.${this.#classThatReactOnTheUsersEvents}`)) {
            debug.log(element);

            element.dataset.wkCallStatusEvents = events;
        }
    }

    #setDataWkHasAccessInBody(value) {
        debug.log(`Set user has access data "${value}" in body element.`);

        document.body.dataset.wkCallUserHasAccess = value;
    }

    getWallkitUserData() {
        return this.#sdk.client.get({path: `/user`})
            .then((response) => {
                this.setAllDataWkStatusesInDOMElements(response);
            })
            .catch((error) => {
                debug.log('WK Call ERROR:', error);
                this.setAllDataWkStatusesInDOMElements();
            });
    }

    removeAllDataWkStatuses() {
        debug.log(`Remove all wallkit statuses from all DOM Elements.`);
        debug.log('Remove data-wk-call-user-has-access from body element.');

        delete document.body.dataset.wkCallUserHasAccess;

        for (const element of document.querySelectorAll(`.${this.#classThatReactOnTheUsersStatus}`)) {
            debug.log('Remove data-wk-call-status-user from element:', element);

            delete element.dataset.wkCallStatusUser;
        }
        for (const element of document.querySelectorAll(`.${this.#classThatReactOnTheUsersPlans}`)) {
            debug.log('Remove data-wk-call-status-plans from element:', element);

            delete element.dataset.wkCallStatusPlans;
        }
        for (const element of document.querySelectorAll(`.${this.#classThatReactOnTheUsersEvents}`)) {
            debug.log('Remove data-wk-call-status-events from element:', element);

            delete element.dataset.wkCallStatusEvents;
        }
    }

    #debugUserStatus() {
        debug.log(`User status: `, this.getUserStatus());
    }

    #debugElementsClickingOnWhichOpensPopups() {
        debug.log('Elements, clicking on which opens popups:');

        for (const element of document.querySelectorAll(`.${this.#classForHandleClick}`)) {
            debug.log(element);
        }
    }

    #debugElementsThatReactToTheUsersStatus() {
        debug.log('Elements that react to the user\'s status:');

        for (const element of document.querySelectorAll(`.${this.#classThatReactOnTheUsersStatus}`)) {
            debug.log(element);
        }
    }

    #debugElementsThatReactToTheUsersPlans() {
        debug.log('Elements that react to the user\'s plans:');

        for (const element of document.querySelectorAll(`.${this.#classThatReactOnTheUsersPlans}`)) {
            debug.log(element);
        }
    }

    #debugElementsThatReactToTheUsersEvents() {
        debug.log('Elements that react to the user\'s events:');

        for (const element of document.querySelectorAll(`.${this.#classThatReactOnTheUsersEvents}`)) {
            debug.log(element);
        }
    }

    async init() {
        debug.log('Init Wallkit Call with config: ', this.#config?.call);

        if (debug.getDebugMode()) {
            this.#debugUserStatus();
            this.#debugElementsClickingOnWhichOpensPopups();
            this.#debugElementsThatReactToTheUsersStatus();
            this.#debugElementsThatReactToTheUsersPlans();
            this.#debugElementsThatReactToTheUsersEvents();
        }

        this.#initWkListeners();
        this.#initUIListeners();

        if (this.#sdk.methods.isAuthenticated()) {
            await this.getWallkitUserData();
        } else {
            this.setAllDataWkStatusesInDOMElements();
        }

        if (this.#onReady) {
            this.#onReady();
        }

    }
}

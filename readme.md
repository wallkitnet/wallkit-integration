# Wallkit Integration Library


Is a library to work with Wallkit Paywall System. It allows you to manage popups, firebase authentication and analytics.

# Setup and Configuration
1. Add the ``<script src="https://cdn1.wallkit.net/js/integration/latest/wallkit-integration-library.min.js"></script>`` to your html body.
2. Configure the library with your public key and other options.
```js
 const options = {
    public_key: 'xxxx-xxxx-xxxx-xxxx', // See Resource Settings in Wallkit Dashboard 
    debug: true, // default false. If true, you can see logs from Integration Library and JS SDK in console
    mode: 'prod', // default 'prod'. If 'dev', you will use dev version of Integration Library and JS SDK
    version: 'v1',
    auth: { 
        firebase: { 
            config: { // See Firebase Console 
                apiKey: "xxxx",
                authDomain: "app.firebaseapp.com",
                databaseURL: "https://app.firebaseio.com",
                projectId: "project-id",
                storageBucket: "app.appspot.com",
                messagingSenderId: "xxxx",
                appId: "x:xxxx:xxx:xxxx",
                measurementId: "x-xxxxxxx"
            },
            providers: ['email', 'google'], // ['email', 'google] - default
            tosURL: 'https://website.com', // https://wallkit.net - default
            privacyPolicyURL: 'https://website.com', // https://walkit.net - default
        },
        modal: {
            title: 'Authorisation', // Sign In - default
        },
    },
    call: {  
        use: true,
        classForHandleClick: "wk-call",
        classThatReactOnTheUsersStatus: "wk-call-status-user",
        classThatReactOnTheUsersPlans: "wk-call-status-plans",
        classThatReactOnTheUsersEvents: "wk-call-status-events"
    },
    analytics: {
        parseUTM: true // true - default
    },
    ui: {
        type: 'popup', // popup | inline. popup - default. If inline, you need to add <div id="inline-app"></div> to your html body 
        selector: '#inline-app',
    }
};

window.wk = new WallkitIntegration(options);
```

# Modules

Wallkit Integration Library has several modules. You can use them to manage modals, authentication, events system, 'call' system and other.
Each module has its own methods and features.

## Authentication
This module allows you to manage authorization modal and firebase authentication. You can show and hide authorization modal, check authorization state and handle one tap response. 
Here is the example of usage:
```js
wk.authentication.show() // Show authorization modal, with firebase auth.
wk.authentication.hide() // Hide authorization modal.
wk.authentication.isAuthenticated() // Check authorization state.
wk.authentication.handleOneTapResponse(oneTapResponse) // Handles one tap response.
wk.authentication.firebase.reset() // Resets firebase UI.
```

## Modals
Wallkit modals is a single page application based on Vue.js. This module allows you to manage modals. 
You can open and hide modals, toggle loader on modals and subscribe on route change event.
```js
wk.modal.open(slug, params) // Open modal.
wk.modal.hide() // Hides modal.
wk.modal.toggleLoader(state) // Toggles loader on modal.
```

## Calls system
This module will allow custom UX implementation according to the status, plans and events by applying certain classes.

1. Enable Wallkit Calls in the configuration object.
2. If you are having problems with how it works on your website, you can enable **debug** and see a lot of useful information in the console that may help you find the solution.
3. Assign names to classes, for instance:
   - Click handler = `wk-call`.
   - Class that reacts to the user’s status = `wk-call-status-user`.
   - Class that react to the user’s plans = `wk-call-status-plans`.
   - Class that react to the user’s events = `wk-call-status-events`.

#### Some of the examples of usage Wallkit Calls:
First, we use the class ```wk-call```, then ```wk—{popup-slug}```

**Pop-up calls:**
```html
<a href="#" class="wk-call wk—sign-in">Login<a/>
```
```html
<a href="#" class="wk-call wk—account-settings">My account</a>
```
```html
<a href="#" class="wk-call wk—logout">Logout</a> 
```

**wk-call-status-user:**

Display depending on user status: logged in (authorized) or not logged in (guest):
```html
<div class="tn-user-area wk-call-status-user" data-wk-call-status-user="authorized">
```
```html
<div class="tn-user-area wk-call-status-user" data-wk-call-status-user="guest">
```
You can add Wallkit calls to HTML elements that need to be hidden for particular plans:
```css
body.wk-call-status-plans[data-wk—call-status-plans="AnyPlan"] .ADS_ELEMENT_CLASS {
   display: none;
}
```

## Events
You can subscribe on events which are emitted by Integration Library and JS SDK to implement your own business logic. For example, you can subscribe on ```'check-access'``` event to send information about user's access to the Google Analytics.

There are two ways to subscribe on events:
1. Subscribe on events BOTH before and after before Integration Library is initialized. In this case, you can place your "subscribe code" before Integration Library initialization.
   In this case you can use this method:
    ```js
    window.wk = window.wk || [];
    window.wk.push([eventName, callback, subscribeOptions]); 
    ```
    ```subscribeOptions``` is an optional parameter. subscribeOptions: { once: true // default - false} If ```once``` is true, callback will be called only once.
    For example, you can implement some logic after checking user's access to the content.
    ```js
    window.wk = window.wk || [];
    window.wk.push(['check-access', (data) => {
        // place your code here
        // for example, you can send information about user's access to the Google Analytics
        const { allowed, content, message } = data;
        gtag('event', 'check-access', {
            'event_category': 'access',
            'event_label': content.key, // key | link | title available
            'value': allowed
        });
    }, subscribeOptions]);
    
    window.wk = new WallkitIntegration(options);
    ```

2. Subscribe on events ONLY after Integration Library is initialized. In this case, you can use following methods:
    ```js
    window.wk.on(eventName, callback, subscribeOptions) // to subscribe on event. 
    window.wk.off(eventName) // to unsubscribe from event.
    ```
    ```subscribeOptions``` is an optional parameter. subscribeOptions: { once: true // default - false} If ```once``` is true, callback will be called only once.
    For example, you can implement some logic after checking user's access to the content.
    ```js
    window.wk = new WallkitIntegration(options);
    window.wk.on('check-access', (data) => {
        // place your code here
        // for example, you can send information about user's access to the Google Analytics
        const { allowed, content, message } = data;
        gtag('event', 'check-access', {
            'event_category': 'access',
            'event_label': content.key, // key | link | title available
            'value': allowed
        });
    });
    ```

### List of events
Here is the list (not full) of events which you can subscribe on:

-----
```'ready'``` This event emits when Integration Library ( and all modules like Firebase, JS SDK, Call) is ready to work. It is very important event because you can be insured that Integration Library is ready to work.

Example:
```js
window.wk = window.wk || [];
window.wk.push(['ready', (data) => {
    // place your code here
    // wk object with all methods is available here
    // for example, you can check user's access to the content
    const content = new wk.content({ id: 179 });
    content.checkAccess().then((response) => {
            console.log('response:', response);
        }).catch((error) => {
            console.log('error:', error);
        });
}]);
```

-----
```'success-auth'``` This event emits when user is successfully authenticated in Wallkit system and Firebase. 
In ```data``` object you can check if user logged in after registration or not. If user logged in after registration, ```data.register``` will be true, otherwise ```data.register``` will be false.

Example:
```js
window.wk = window.wk || [];
window.wk.push(['success-auth', (data) => {
    console.log('data:', data); // {register: true | false}
    // place your code here
    // for example, you can get full user's data
    wk.sdk.methods.getUser().then(({id, email, first_name, last_name}) => {
        console.log('user:', {id, email, first_name, last_name});
    }).catch((error) => {
        console.log('error:', error);
    });

}]);
```

-----
```'wk-event-logout'``` This event emits when user is logged out from Wallkit system and Firebase.

Example:
```js
window.wk = window.wk || [];
window.wk.push(['wk-event-logout', (data) => {
    console.log('wk-event-logout callback, data:', data);
    // place your code here
    // for example, you can logout user from other services like Disqus
}]);
```

-----
```'wk-event-route-change'``` Wallkit Modals is a single page application based on Vue.js. 
This event emits when route is changed in Wallkit Modals. 
In ```slug``` you will see slug of modal which will be opened.
The slug of modal is a name of modal which you can see in Wallkit Dashboard.
You can use this event for example to track user's actions in Google Analytics.

Example:
```js
window.wk = window.wk || [];
window.wk.push(['wk-event-route-change', (slug) => {
    if (typeof slug === 'undefined') return;
    console.log('wk-event-route-change callback, slug:', slug);
    // place your code here
    // for example, you can track route change in Google Analytics
    gtag('event', 'route-change', {
        'event_category': 'modal',
        'event_label': slug
    });
}]);
```

-----
```'wk-event-calculate-price'``` This event emits when user for example opens a modal 'checkout' or applies a promo code.

Example:
```js
window.wk = window.wk || [];
window.wk.push(['wk-event-calculate-price', (data) => {
    console.log('wk-event-calculate-price callback, data:', data);
    // place your code here
    // for example, you can track price calculation in Google Analytics
    const { currency, discount, purchases, total_price, total_taxes } = data;
    const itemsTitle = purchases.map((purchase) => purchase.item_title).join(', ');
    gtag('event', 'calculate-price', {
        'event_category': 'checkout',
        'event_label': itemsTitle,
        'value': total_price
    });

}]);
```

-----
```'wk-event-transaction'``` This event emits when user successfully paid for the subscription or tickets.

Example:
```js
window.wk = window.wk || [];
window.wk.push(['wk-event-transaction', (data) => {
    console.log('wk-event-transaction callback, data:', data);
    // place your code here
    // for example, you can track transaction in Google Analytics
    const { transactions } = data;
    transactions.forEach((transaction) => {
        const { id, amount, currency, status, purchases } = transaction;
        const itemsTitle = purchases.map((purchase) => purchase.item_title).join(', ');
        gtag('event', 'transaction', {
            'event_category': 'checkout',
            'event_label': itemsTitle,
            'value': { amount, currency, status }
        });

    });
}]);
```

-----
```'check-access'``` This event emits when happens check access to the content.

Example:
```js
window.wk = window.wk || [];
window.wk.push(['check-access', (data) => {
    // place your code here
    // for example, you can send information about user's access to the Google Analytics
    const { allowed, content, message } = data;
    gtag('event', 'check-access', {
        'event_category': 'access',
        'event_label': content.key, // key | link | title available
        'value': allowed
    });
}]);
```

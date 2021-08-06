# Wallkit Integration Library

Is a library to work with Wallkit Paywall System. It allows you to manage popups, firebase authentication and analytics.

# Usage
1. Add the ``<script src="./wallkit-integration-library.js"></script>`` to your html body. 
2. Init the library with constructor ``new WallkitIntegration(options)``.
3. Enjoy

# Options
```js
 const options = {
    public_key: 'xxxx-xxxx-xxxx-xxxx',
    mode: 'prod',
    version: 'v1',
    auth: { // default false
        firebase: { // default true
            config: { // wallkit net config default
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
    analytics: {
        parseUTM: true // true - default
    }
}
```

# Methods

###Authorization

```WallkitIntegration.authentication.show()```

Show authorization modal, with firebase auth.

```WallkitIntegration.authentication.hide()```

Hide authorization modal.

```WallkitIntegration.authentication.isAuthenticated()```

Check authorization state.

```WallkitIntegration.authentication.handleOneTapResponse(oneTapResponse)```

Handles one tap response.

```WallkitIntegration.authentication.firebase.reset()```

Resets firebase UI.


### Frame

```WallkitIntegration.frame.open(slug, params)```

Open frame.

```WallkitIntegration.frame.hide()```

Hides frame.

```WallkitIntegration.frame.sendEvent(name, value, params)```

Sends event to frame.

### Modal

```WallkitIntegration.modal.open(slug, params)```

Open modal.

```WallkitIntegration.modal.hide()```

Hides modal.

```WallkitIntegration.modal.toggleLoader(state)```

Toggles loader on modal.

### Events

```WallkitIntegration.events.subscribe(eventName, callback, options)```

```options: { once: true // default - false}```

Subscribes on event.

Local events:

```
'frame-created'
'frame-mounted'
'modal-created'
'success-auth'
'success-firebase-auth'
'wallkit-js-sdk-loaded'
'frame-message'
```

Some Wallkit Events (not full list):
```
'wk-event-modal'
'wk-event-logout'
'wk-firebase-token'
'wk-event-firebase-token'
'wk-event-token'
'wk-event-modals-ready'
'wk-event-get-token'
'wk-event-auth'
'wk-event-user'
'wk-event-registration'
'wk-event-one-tap-sign-in'
```

```WallkitIntegration.events.unsubscribe(eventName)```

Unsubscribes on events.


# Develop

```bash
npm run install
npm run dev
```

# Build

```bash
npm run install
npm run build
```
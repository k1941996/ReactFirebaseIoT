# ReactFirebaseIoT
IoT Project project Firebase Realtime DB React Implementation with Authentication

Paste these rules in your Realtime Database rules. 
```
{
  "rules": {
    "$uid": {
      "$device": {
        ".write": "$uid === auth.uid"
      },
      ".read": "$uid === auth.uid"
    }
  }
}
```

Edit src/config/firebase.js with your firebase config. and the app is good to go.

The app has a basic implementation of react router authenticated. There are protected routes and public routes.

We can use this boilerplate to create our own IOT application which can be scaled. 

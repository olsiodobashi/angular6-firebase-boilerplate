# Angular 6 Firebase Boilerplate

## Getting started

Clone this repository and install the dependencies:
```
git clone https://github.com/olsiodobashi/angular6-firebase-boilerplate.git
cd angular6-firebase-boilerplate
npm i
```

## Set up Firebase
This project makes use of the [Angularfire2](https://github.com/angular/angularfire2) library.

Create a new project from the Firebase account console.
Add your Firebase project settings in `src/environments/environment.ts`. You can find the project settings in:

- Project Overview > "+ Add app" button under the project title
- Project Settings > General

Copy only the contents and paste them under a `firebase` object in your app's environment files. Both `environment.ts` and `environment.prod.ts` should look something like this:

```
export const environment = {
    // other configs
    firebase: {
        apiKey: '{your_api_key}',
        authDomain: '{projectId}.firebaseapp.com',
        databaseURL: 'https://{projectId}.firebaseio.com',
        projectId: '{projectId}',
        storageBucket: '{projectId}.appspot.com',
        messagingSenderId: '*********'
    }
};
```

## Firestore data
The app assumes your data lives in a Firestore called `items`. You can find some basic CRUD methods in `services/firebase.service.ts`.
The item's interface can be found in `new-article/article.model.ts`.

## Running the app
This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

Run `npm start` for a dev server.
Navigate to `http://localhost:4200/`.
The app will automatically reload if you change any of the source files.

import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyBJ-SnrJBiB9g-MlPsAMOD0PrXTrKzsDsw",
  authDomain: "backstage-users-db.firebaseapp.com",
  databaseURL: "https://backstage-users-db.firebaseio.com",
  projectId: "backstage-users-db",
  storageBucket: "backstage-users-db.appspot.com",
  messagingSenderId: "533413879801"
};

const devConfig = {
  apiKey: "AIzaSyBJ-SnrJBiB9g-MlPsAMOD0PrXTrKzsDsw",
  authDomain: "backstage-users-db.firebaseapp.com",
  databaseURL: "https://backstage-users-db.firebaseio.com",
  projectId: "backstage-users-db",
  storageBucket: "backstage-users-db.appspot.com",
  messagingSenderId: "533413879801"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
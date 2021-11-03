import firebase from "firebase";
import config from "./firebaseConfig";

// Configure Firebase.
const config1 = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // ...
};
//Check if firebase is already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

export default firebase;

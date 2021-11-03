import firebase from "firebase";
import config from "./firebaseConfig";

//Check if firebase is already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

export default firebase;

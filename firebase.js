import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE7kqa05pwGgHUZwt8OKSBy9QUUYDzCvw",
  authDomain: "project-4a092.firebaseapp.com",
  projectId: "project-4a092",
  storageBucket: "project-4a092.appspot.com",
  messagingSenderId: "255076806825",
  appId: "1:255076806825:web:9998d75edfbc204033b9b8",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;

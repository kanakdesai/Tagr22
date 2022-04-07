// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDuLAryqJa2mvxoKJTTn4ykF95Ygfr4mQ",
  authDomain: "tagr2-bc39b.firebaseapp.com",
  projectId: "tagr2-bc39b",
  storageBucket: "tagr2-bc39b.appspot.com",
  messagingSenderId: "891576616027",
  appId: "1:891576616027:web:e1fb5bfa7182047a95ab7e"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
  } else {
    app = firebase.app();
  }
const auth = firebase.auth()

export { auth };

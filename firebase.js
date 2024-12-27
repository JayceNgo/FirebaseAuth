// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADG2fegA-bx7ijWuEKmvNr8Lo4mkCCRuw",
  authDomain: "fir-auth-1bfff.firebaseapp.com",
  projectId: "fir-auth-1bfff",
  storageBucket: "fir-auth-1bfff.firebasestorage.app",
  messagingSenderId: "608322611578",
  appId: "1:608322611578:web:ec130621d0eb2277d30ec3",
  measurementId: "G-Z77QXNTPMG"
};

// Initialize Firebase
let app;
    if (firebase.apps.length === 0)
    {
    app = firebase.initializeApp(firebaseConfig);
    } else {
        app = firebase.app();
    }
const auth = firebase.auth();

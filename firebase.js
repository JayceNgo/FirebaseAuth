// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADG2fegA-bx7ijWuEKmvNr8Lo4mkCCRuw",
  authDomain: "fir-auth-1bfff.firebaseapp.com",
  projectId: "fir-auth-1bfff",
  storageBucket: "fir-auth-1bfff.firebasestorage.app",
  messagingSenderId: "608322611578",
  appId: "1:608322611578:web:ec130621d0eb2277d30ec3",
  measurementId: "G-Z77QXNTPMG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Enable offline persistence
enableIndexedDbPersistence(db).catch((err) => {
    console.log('Offline persistence error:', err.code);
  });

export { auth, db };

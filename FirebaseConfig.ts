import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth" 
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDatXd5XEX2vVgB8FA7plpja89HtWaUCHY",
  authDomain: "compass-sales-9ba7d.firebaseapp.com",
  projectId: "compass-sales-9ba7d",
  storageBucket: "compass-sales-9ba7d.appspot.com",
  messagingSenderId: "6845046764",
  appId: "1:6845046764:web:c601f19c9ffe65c2aeaac9"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
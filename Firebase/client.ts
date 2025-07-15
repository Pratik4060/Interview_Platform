

import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSAnOqkZklQwzXymX2rICUp9xVYzjNkxI",
  authDomain: "prepwise-50828.firebaseapp.com",
  projectId: "prepwise-50828",
  storageBucket: "prepwise-50828.firebasestorage.app",
  messagingSenderId: "494844012680",
  appId: "1:494844012680:web:7f81c66ed9006e0bbf173d",
  measurementId: "G-DHWJT9PQ33"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
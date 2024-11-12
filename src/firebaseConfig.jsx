// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuqL2rhYRz6-1QxPm7243YhUq0HhpiiWM",
  authDomain: "e-commerce-71f5f.firebaseapp.com",
  projectId: "e-commerce-71f5f",
  storageBucket: "e-commerce-71f5f.firebasestorage.app",
  messagingSenderId: "585281412641",
  appId: "1:585281412641:web:445d70cc130e13f7e68d60",
  measurementId: "G-V1T0Q1L8QD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
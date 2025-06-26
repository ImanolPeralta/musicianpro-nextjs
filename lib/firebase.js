// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGvqGb4Fk-uJIGEZBvvin4QNjf2d8kt7I",
  authDomain: "musicianproapp.firebaseapp.com",
  projectId: "musicianproapp",
  storageBucket: "musicianproapp.firebasestorage.app",
  messagingSenderId: "100990803382",
  appId: "1:100990803382:web:9345923a5a1c1cdbbdf517"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
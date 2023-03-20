// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT8zpTKr6QDFO5A0nF5XGnuhyvuXwf2B8",
  authDomain: "portfolio-9fa6e.firebaseapp.com",
  projectId: "portfolio-9fa6e",
  storageBucket: "portfolio-9fa6e.appspot.com",
  messagingSenderId: "865689713910",
  appId: "1:865689713910:web:a06f742bd31f9cb7c3c0d7"
};

// Initialize Firebase
  export const app = initializeApp(firebaseConfig);


export const db=getFirestore();
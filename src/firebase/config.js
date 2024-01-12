// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxo1DSnJmk-5IJ0UuP_Dp36ebLFUulFYs",
  authDomain: "rj-49910-91cb1.firebaseapp.com",
  projectId: "rj-49910-91cb1",
  storageBucket: "rj-49910-91cb1.appspot.com",
  messagingSenderId: "328299371257",
  appId: "1:328299371257:web:dff76c2aae3d1b2c7ce028"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
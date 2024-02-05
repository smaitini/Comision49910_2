
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDreAcjGRof2Q2w1Y3NRRGj2U78I6ddvFU",
  authDomain: "beccaritas-sport.firebaseapp.com",
  projectId: "beccaritas-sport",
  storageBucket: "beccaritas-sport.appspot.com",
  messagingSenderId: "1017921419460",
  appId: "1:1017921419460:web:95531fea0ffc4520693191"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
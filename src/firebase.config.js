// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARVPLmHT3394t3MCvmd16qWipqwDPZ2K0",
  authDomain: "house-marketting-app.firebaseapp.com",
  projectId: "house-marketting-app",
  storageBucket: "house-marketting-app.appspot.com",
  messagingSenderId: "760827646547",
  appId: "1:760827646547:web:c69c1c13c4264699aeeca6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjLVY3_6ePpQHjkEDyvaDpRgbZrDWQtX0",
  authDomain: "coder-ecomer.firebaseapp.com",
  projectId: "coder-ecomer",
  storageBucket: "coder-ecomer.appspot.com",
  messagingSenderId: "212890601804",
  appId: "1:212890601804:web:a4b47f4304757fed8527e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const DB_PRODUCTS = 'products';
export const DB_SALES = 'sales';

export const db = getFirestore(app);
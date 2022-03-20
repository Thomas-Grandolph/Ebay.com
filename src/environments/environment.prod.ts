export const environment = {
  production: true
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZOEznL2wIZSvGD9yFrBgH89lW7pgoYeY",
  authDomain: "newebaywebsite.firebaseapp.com",
  databaseURL: "https://newebaywebsite-default-rtdb.firebaseio.com",
  projectId: "newebaywebsite",
  storageBucket: "newebaywebsite.appspot.com",
  messagingSenderId: "74338111901",
  appId: "1:74338111901:web:77c3b66bfc961480c31f74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
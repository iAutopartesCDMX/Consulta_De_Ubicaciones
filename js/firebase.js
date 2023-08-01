// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  // Paste your firebase config here
  apiKey: "AIzaSyAOl3nxwcajyeYKj993cJbyAJ7hoTdJ57E",
  authDomain: "mariana-autopartes.firebaseapp.com",
  databaseURL: "https://mariana-autopartes-default-rtdb.firebaseio.com",
  projectId: "mariana-autopartes",
  storageBucket: "mariana-autopartes.appspot.com",
  messagingSenderId: "1018662012921",
  appId: "1:1018662012921:web:ef6a8af6c8210fafbbdf28"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


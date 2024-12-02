// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu0hdDj362Z91-LUJN8ChobbyV-QN8wm4",
  authDomain: "planner-for-p.firebaseapp.com",
  projectId: "planner-for-p",
  storageBucket: "planner-for-p.firebasestorage.app",
  messagingSenderId: "295049428940",
  appId: "1:295049428940:web:940bbfcf243816935c6769",
  measurementId: "G-B620Y113N3"
};

// Initialize Firebase
export const {app} = initializeApp(firebaseConfig);
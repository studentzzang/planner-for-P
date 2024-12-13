// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "planner-for-p.firebaseapp.com",
  projectId: "planner-for-p",
  storageBucket: "planner-for-p.firebasestorage.app",
  messagingSenderId: "295049428940",
  appId: "1:295049428940:web:940bbfcf243816935c6769",
  measurementId: "G-B620Y113N3"
};

// Initialize Firebase
export const {app} = initializeApp(firebaseConfig);
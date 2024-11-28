import { initializeApp } from "firebase/app";

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
const app = initializeApp(firebaseConfig);
console.log(app);
export {app};
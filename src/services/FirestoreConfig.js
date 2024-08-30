// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4r8h3koIJDa-WSY1euC7uSHNbxHjnu0g",
  authDomain: "stotel-2c940.firebaseapp.com",
  projectId: "stotel-2c940",
  storageBucket: "stotel-2c940.appspot.com",
  messagingSenderId: "103524332557",
  appId: "1:103524332557:web:4686d98422e143e55a9144",
  measurementId: "G-GB4F99YN84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and export it
const db = getFirestore(app);

export default db;

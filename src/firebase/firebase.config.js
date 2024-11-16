// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQV8SDjbQNQdKMnLpyf6lCE5k1qb5KszQ",
  authDomain: "conceptual-2-eb781.firebaseapp.com",
  projectId: "conceptual-2-eb781",
  storageBucket: "conceptual-2-eb781.firebasestorage.app",
  messagingSenderId: "477746914894",
  appId: "1:477746914894:web:dd292c24bd9d5f1228051f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

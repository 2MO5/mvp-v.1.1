// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFivQDq5shnBeuba2wvMAzqHvnIOLaaXQ",
  authDomain: "engliveandroidv1.firebaseapp.com",
  projectId: "engliveandroidv1",
  storageBucket: "engliveandroidv1.appspot.com",
  messagingSenderId: "839111273642",
  appId: "1:839111273642:web:3e50185a204ea4f2b634d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export { auth, db, app };

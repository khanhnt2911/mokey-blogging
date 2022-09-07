import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA3m-BDKxRBOY9ops_FsMSAI8OyotVUSok",
  authDomain: "monkey-blogging-8dade.firebaseapp.com",
  projectId: "monkey-blogging-8dade",
  storageBucket: "monkey-blogging-8dade.appspot.com",
  messagingSenderId: "526059036462",
  appId: "1:526059036462:web:b296b45cfb4353326ee4bf",
  measurementId: "G-P5KM6J9CP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
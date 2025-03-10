// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-librarie

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgUBkSCglzp5zLcbeGyMos4Z4W1kBctzo",
  authDomain: "clone-24abd.firebaseapp.com",
  projectId: "clone-24abd",
  storageBucket: "clone-24abd.firebasestorage.app",
  messagingSenderId: "121606293623",
  appId: "1:121606293623:web:9a83e5b20111166f461e72"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = firebase.firestore()

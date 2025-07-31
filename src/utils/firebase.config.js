// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "project1-f482f.firebaseapp.com",
  projectId: "project1-f482f",
  storageBucket: "clone-f3d66.appspot.com",
  messagingSenderId: "130055137156",
  appId: "1:130055137156:web:687e9a8c1d4a5231a3dfd1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Sign in with google
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

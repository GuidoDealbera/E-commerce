// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeuN4eMniFrfLeNbO6ZLjJC6vd1kyRhUc",
  authDomain: "e-commerce-51d4a.firebaseapp.com",
  projectId: "e-commerce-51d4a",
  storageBucket: "e-commerce-51d4a.appspot.com",
  messagingSenderId: "838510995434",
  appId: "1:838510995434:web:2f6b30feb4ff8ae791f493",
  measurementId: "G-MMZW1L2YXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();
export const FacebookProvider = new FacebookAuthProvider();
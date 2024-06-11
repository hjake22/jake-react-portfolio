import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBT-2kiiPvuG4U-TN4OA-0Kp4dLYk6bccI",
    authDomain: "react-portfolio-a3fed.firebaseapp.com",
    projectId: "react-portfolio-a3fed",
    storageBucket: "react-portfolio-a3fed.appspot.com",
    messagingSenderId: "678067773267",
    appId: "1:678067773267:web:91bf59a134ebcd9b18cba6",
    measurementId: "G-NDQGY0R5YY"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
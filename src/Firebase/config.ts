// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVgbIfcHrd4Zwa_4O5LQsw4CRzfb9wvgo",
  authDomain: "mydream-91333.firebaseapp.com",
  projectId: "mydream-91333",
  storageBucket: "mydream-91333.appspot.com",
  messagingSenderId: "674773976291",
  appId: "1:674773976291:web:1eb2f3957c5568160f31d6",
  measurementId: "G-2NHC9CBNR2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyBd2ik_M7q90v3A2KnuXURCEzhBUq_O9RA",
 authDomain: "blinktalk-ce60a.firebaseapp.com",
 projectId: "blinktalk-ce60a",
 storageBucket: "blinktalk-ce60a.appspot.com",
 messagingSenderId: "586986161150",
 appId: "1:586986161150:web:dd0302dc859890d44476af",
 measurementId: "G-V54TH5MT8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Auth and Google Auth Provider
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

// Function to sign in with Google using a popup
const signInWithGoogle = () => {
 return signInWithPopup(auth, googleProvider);
};

export { auth, googleProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithGoogle };


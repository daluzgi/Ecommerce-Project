// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLSnnT1_JEKoS4bAYllzlerXXsxuQigFI",
  authDomain: "react-coder-ce450.firebaseapp.com",
  projectId: "react-coder-ce450",
  storageBucket: "react-coder-ce450.firebasestorage.app",
  messagingSenderId: "975912515559",
  appId: "1:975912515559:web:b664b47517e95df46def42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);

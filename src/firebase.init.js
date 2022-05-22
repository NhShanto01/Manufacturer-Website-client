// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPkf8ND0RfQ2PxJs4CTv8Row_dX1yzlWc",
    authDomain: "auto-parts01.firebaseapp.com",
    projectId: "auto-parts01",
    storageBucket: "auto-parts01.appspot.com",
    messagingSenderId: "701962668420",
    appId: "1:701962668420:web:960c0c9d6c0d3a6e6435d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
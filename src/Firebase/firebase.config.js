// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCv5tDeUIUIXDm_4IXf3JyroZwxOcDmEx0",
    authDomain: "b9a11-cbd0a.firebaseapp.com",
    projectId: "b9a11-cbd0a",
    storageBucket: "b9a11-cbd0a.appspot.com",
    messagingSenderId: "598236443897",
    appId: "1:598236443897:web:ce45a3f65245b2c3c9de28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
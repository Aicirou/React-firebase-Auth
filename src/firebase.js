// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNZY96SUuk3kie-NJ3gKGyMzPuS6lCe3s",
    authDomain: "auth-development-5662c.firebaseapp.com",
    projectId: "auth-development-5662c",
    storageBucket: "auth-development-5662c.appspot.com",
    messagingSenderId: "565351645150",
    appId: "1:565351645150:web:aaebbd881fdadb3319a74f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app




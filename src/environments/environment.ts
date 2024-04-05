// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAugiSv7tbukcUMRSh-2Y4jYqEWuVXYVI0",
    authDomain: "booking-project-a0a8f.firebaseapp.com",
    projectId: "booking-project-a0a8f",
    storageBucket: "booking-project-a0a8f.appspot.com",
    messagingSenderId: "383140835890",
    appId: "1:383140835890:web:d12e18004fb25c0722422b",
    measurementId: "G-TR621RX2ZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
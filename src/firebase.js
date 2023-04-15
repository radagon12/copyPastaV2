import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBEHWrH86jRc47--D6uGI5ANCE_Kslc2n4",
    authDomain: "copy-pastav1.firebaseapp.com",
    projectId: "copy-pastav1",
    storageBucket: "copy-pastav1.appspot.com",
    messagingSenderId: "634430308307",
    appId: "1:634430308307:web:d1002e456ff9f7386ab926",
    measurementId: "G-VNBSQQ2CM4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const storage = getStorage();
export const db = getFirestore();
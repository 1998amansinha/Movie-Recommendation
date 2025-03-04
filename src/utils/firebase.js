// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBME917yWL-BKCRDkc_8hlS_Js3MEeypg4",
  authDomain: "netflixgpt-3b5bf.firebaseapp.com",
  projectId: "netflixgpt-3b5bf",
  storageBucket: "netflixgpt-3b5bf.firebasestorage.app",
  messagingSenderId: "758562312382",
  appId: "1:758562312382:web:7c75261a3ca27e0ab1ceef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

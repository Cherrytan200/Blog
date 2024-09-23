// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-dcaa4.firebaseapp.com",
  projectId: "mern-blog-dcaa4",
  storageBucket: "mern-blog-dcaa4.appspot.com",
  messagingSenderId: "600088975593",
  appId: "1:600088975593:web:1c1a4c1e9e34f0ce0ef878"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


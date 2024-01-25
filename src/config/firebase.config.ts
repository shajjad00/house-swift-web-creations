// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXVhMmPC7hu8bYK2hQXFfWWVUXR9sM9Ps",
  authDomain: "house-swift-team.firebaseapp.com",
  projectId: "house-swift-team",
  storageBucket: "house-swift-team.appspot.com",
  messagingSenderId: "59837319225",
  appId: "1:59837319225:web:0ff2ab11cb0e147db465e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
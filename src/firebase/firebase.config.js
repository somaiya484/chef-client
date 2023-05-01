// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWgDJgZov79NBwdoxTSgxTHG3zvuQ_btE",
  authDomain: "assignment-food-recipes.firebaseapp.com",
  projectId: "assignment-food-recipes",
  storageBucket: "assignment-food-recipes.appspot.com",
  messagingSenderId: "390348159521",
  appId: "1:390348159521:web:0996e9643126de07210160"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
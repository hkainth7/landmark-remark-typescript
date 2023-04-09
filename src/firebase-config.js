import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD-WWilt-qKDqVhTEJDrTx0n7gFpYfGQiE",
    authDomain: "landmark-app-ts.firebaseapp.com",
    projectId: "landmark-app-ts",
    storageBucket: "landmark-app-ts.appspot.com",
    messagingSenderId: "825566336917",
    appId: "1:825566336917:web:0e12f9e7451cf85973889c"
  };

  const app = initializeApp(firebaseConfig);
  
  export const db = getFirestore(app);
  export const auth = getAuth(app);
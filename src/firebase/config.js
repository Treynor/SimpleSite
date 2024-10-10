import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyB7mH7jGzZkIqjUno4cNFMPHjyNPsQYtwE",
  
    authDomain: "simplesite-953da.firebaseapp.com",
  
    projectId: "simplesite-953da",
  
    storageBucket: "simplesite-953da.appspot.com",
  
    messagingSenderId: "270105540831",
  
    appId: "1:270105540831:web:0882adada76a1c9bd6916a"
  
  };
  
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  // Initialize Firestore
  const db = getFirestore(app);
  
  export { db };
//import firebase from "firesabe"
//import "firebase/storage"

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBaXzZ-iU8xNSpbjU8S1db69_j4VnB5LRE",
    authDomain: "task-e1a7e.firebaseapp.com",
    projectId: "task-e1a7e",
    storageBucket: "task-e1a7e.appspot.com",
    messagingSenderId: "681396754218",
    appId: "1:681396754218:web:d66e4858b687b291b3f053"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database  = firebase.firestore();
  export default database;
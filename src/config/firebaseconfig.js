import firebase from 'firebase/compat';
import 'firebase/storage';

const firebaseConfig = {
     apiKey: "AIzaSyBaXzZ-iU8xNSpbjU8S1db69_j4VnB5LRE",
     authDomain: "task-e1a7e.firebaseapp.com",
     projectId: "task-e1a7e",
     storageBucket: "task-e1a7e.appspot.com",
     messagingSenderId: "681396754218",
     appId: "1:681396754218:web:d66e4858b687b291b3f053"
   };

firebase.initializeApp(firebaseConfig);

export default firebase;
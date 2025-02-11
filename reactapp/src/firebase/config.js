import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDb2ki6_huM-9JMULz0IPx7PQb-Pic29ik",
    authDomain: "skillsync-136c5.firebaseapp.com",
    projectId: "skillsync-136c5",
    storageBucket: "skillsync-136c5.firebasestorage.app",
    messagingSenderId: "269941665654",
    appId: "1:269941665654:web:7f88e343fd119b76bc9457"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  
  export { db };
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCobyiQA0QTCCE32hvQIepU8wb5LhYbdVM",
    authDomain: "halaman-pribadi-saya.firebaseapp.com",
    projectId: "halaman-pribadi-saya",
    storageBucket: "halaman-pribadi-saya.firebasestorage.app",
    messagingSenderId: "1083898265669",
    appId: "1:1083898265669:web:01f8c4ca43a2c3b7a1632c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { 
    auth, db, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    collection, addDoc, getDocs, serverTimestamp 
};

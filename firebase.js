// =====================================================
// KONFIGURASI FIREBASE
// =====================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    doc, 
    addDoc, 
    setDoc,
    getDoc,
    getDocs, 
    updateDoc, 
    deleteDoc, 
    query, 
    where, 
    orderBy, 
    serverTimestamp,
    onSnapshot
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
const db = getFirestore(app);

console.log("🔥 Firebase siap:", firebaseConfig.projectId);

export { 
    db,
    collection, doc, addDoc, setDoc, getDoc, getDocs,
    updateDoc, deleteDoc, query, where, orderBy,
    serverTimestamp, onSnapshot 
};

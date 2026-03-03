// Import SDK Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

// Konfigurasi Firebase anda
const firebaseConfig = {
    apiKey: "AIzaSyCdKtcJseBEcR5CXapiAmVb8TvOw30rN1Q",
    authDomain: "semsiraf6kehadiran.firebaseapp.com",
    projectId: "semsiraf6kehadiran",
    storageBucket: "semsiraf6kehadiran.firebasestorage.app",
    messagingSenderId: "410598658230",
    appId: "1:410598658230:web:911046bf7a8d36260c9617",
    measurementId: "G-YVFRM60N1Z"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Eksport 'db' supaya boleh digunakan di fail lain
export { db };

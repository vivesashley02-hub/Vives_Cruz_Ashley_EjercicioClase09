import { initializeApp } from "firebase/app"; import { getFirestore } from "firebase/firestore";
const firebaseConfig = {

  apiKey: "AIzaSyD9a2zTlMpL5X2IpGNYvLhCnUPCRQuEyk8",

  authDomain: "vives-cruz-ashley-ejclase09.firebaseapp.com",

  projectId: "vives-cruz-ashley-ejclase09",

  storageBucket: "vives-cruz-ashley-ejclase09.firebasestorage.app",

  messagingSenderId: "618152729192",

  appId: "1:618152729192:web:253a588469d72d75a1f9dd",

  measurementId: "G-1QVTRVG3BK"

};
const app = initializeApp(firebaseConfig); export const db = getFirestore(app);

// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCMU5B6-KiXjHG2xThAxInbqysDuVImAlc",
  authDomain: "suivi-conso-ea49f.firebaseapp.com",
  projectId: "suivi-conso-ea49f",
  storageBucket: "suivi-conso-ea49f.firebasestorage.app",
  messagingSenderId: "437467597001",
  appId: "1:437467597001:web:ecf2cf8fca2793d092a518"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

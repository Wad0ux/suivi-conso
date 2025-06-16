// dashboard.js
import { db, auth } from './firebase.js';
import {
  collection, getDocs, query, orderBy
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import {
  signInWithEmailAndPassword, signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const loginForm = document.getElementById('login-form');
const dashboard = document.getElementById('dashboard');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const exportBtn = document.getElementById('export-csv');
const tbody = document.getElementById('table-body');

loginBtn.addEventListener('click', async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  await signInWithEmailAndPassword(auth, email, password);
});

logoutBtn.addEventListener('click', async () => {
  await signOut(auth);
});

onAuthStateChanged(auth, async (user) => {
  if (user) {
    loginForm.classList.add('hidden');
    dashboard.classList.remove('hidden');
    await renderTable();
  } else {
    loginForm.classList.remove('hidden');
    dashboard.classList.add('hidden');
  }
});

async function renderTable() {
  tbody.innerHTML = "";
  const q = query(collection(db, "consommations"), orderBy("date", "desc"));
  const snapshot = await getDocs(q);
  snapshot.forEach(doc => {
    const data = doc.data();
    const row = `<tr class="border"><td>${data.client}</td><td>${data.produit}</td><td>${data.quantite}</td><td>${new Date(data.date.seconds * 1000).toLocaleString()}</td></tr>`;
    tbody.innerHTML += row;
  });
}

exportBtn.addEventListener('click', async () => {
  const q = query(collection(db, "consommations"));
  const snapshot = await getDocs(q);
  let csv = "Client,Produit,Quantité,Date\n";
  snapshot.forEach(doc => {
    const d = doc.data();
    const date = new Date(d.date.seconds * 1000).toISOString();
    csv += `${d.client},${d.produit},${d.quantite},${date}\n`;
  });
  const blob = new Blob([csv], { type: 'text/csv' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'consommations.csv';
  link.click();
});

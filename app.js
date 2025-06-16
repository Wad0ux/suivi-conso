// app.js
import { db } from './firebase.js';
import { collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const form = document.getElementById('conso-form');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const client = document.getElementById('client').value;
  const produit = document.getElementById('produit').value;
  const quantite = parseInt(document.getElementById('quantite').value);

  await addDoc(collection(db, "consommations"), {
    client, produit, quantite, date: Timestamp.now()
  });

  form.reset();
  message.classList.remove('hidden');
});

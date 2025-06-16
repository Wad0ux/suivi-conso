// app.js
import { db, auth } from './firebase.js';
import { collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const form = document.getElementById('conso-form');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Empêche le rechargement de la page

  const client = document.getElementById('client').value.trim();
  const produit = document.getElementById('produit').value.trim();
  const quantite = parseInt(document.getElementById('quantite').value, 10);

  if (!client || !produit || isNaN(quantite) || quantite <= 0) {
    alert("Veuillez remplir tous les champs correctement.");
    return;
  }

  try {
    await addDoc(collection(db, "consommations"), {
      client,
      produit,
      quantite,
      date: Timestamp.now()
    });
    message.classList.remove('hidden');
    form.reset();
  } catch (error) {
    console.error("Erreur lors de l'ajout : ", error);
    alert("Erreur lors de l'ajout, veuillez réessayer.");
  }
});

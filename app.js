import { db } from './firebase.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

document.getElementById('conso-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const client = document.getElementById('client').value.trim();
  const produit = document.getElementById('produit').value.trim().toLowerCase();
  const quantite = parseInt(document.getElementById('quantite').value);

  if (!client || !produit || isNaN(quantite)) return;

  try {
    await addDoc(collection(db, "consommations"), {
      client,
      produit,
      quantite,
      date: serverTimestamp()
    });

    document.getElementById('message').classList.remove('hidden');
    document.getElementById('conso-form').reset();
  } catch (error) {
    console.error("Erreur lors de l'ajout :", error);
  }
});


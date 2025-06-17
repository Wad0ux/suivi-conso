// admin.js
/*import { db } from './firebase.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

async function loadData() {
  const consommationsSnapshot = await getDocs(collection(db, "consommations"));
  const data = {};

  consommationsSnapshot.forEach(doc => {
    const { client, produit, quantite } = doc.data();

    if (!data[client]) {
      data[client] = { "Bière": 0, "Vin": 0, total: 0 };
    }
    data[client][produit] = (data[client][produit] || 0) + quantite;
    data[client].total += quantite;
  });

  const tbody = document.getElementById('tbody');
  tbody.innerHTML = '';

  for (const client in data) {
    const row = document.createElement('tr');
    row.classList.add('text-center', 'border-t');

    row.innerHTML = `
      <td class="py-2 px-4 border">${client}</td>
      <td class="py-2 px-4 border">${data[client]["Canette"] || 0}</td>
      <td class="py-2 px-4 border">${data[client]["Nourriture"] || 0}</td>
      <td class="py-2 px-4 border font-bold">${data[client].total}</td>
    `;

    tbody.appendChild(row);
  }
}

loadData();*/

// admin.js
import { db } from './firebase.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

async function loadData() {
  const consommationsSnapshot = await getDocs(collection(db, "consommations"));
  const data = {};
  const produitsSet = new Set();

  consommationsSnapshot.forEach(doc => {
    const { client, produit, quantite } = doc.data();

    const produitNom = produit.trim().toLowerCase(); // normalisation
    produitsSet.add(produitNom);

    if (!data[client]) {
      data[client] = { total: 0 };
    }

    data[client][produitNom] = (data[client][produitNom] || 0) + quantite;
    data[client].total += quantite;
  });

  const produits = Array.from(produitsSet).sort(); // tri pour un affichage cohérent

  // Générer l’en-tête du tableau dynamiquement
  const theadRow = document.querySelector('thead tr');
  theadRow.innerHTML = `<th class="py-2 px-4 border">Nom</th>` +
    produits.map(p => `<th class="py-2 px-4 border">${p}</th>`).join('') +
    `<th class="py-2 px-4 border">Total</th>`;

  // Remplir le tableau
  const tbody = document.getElementById('tbody');
  tbody.innerHTML = '';

  for (const client in data) {
    const row = document.createElement('tr');
    row.classList.add('text-center', 'border-t');

    row.innerHTML = `
      <td class="py-2 px-4 border">${client}</td>
      ${produits.map(p => `<td class="py-2 px-4 border">${data[client][p] || 0}</td>`).join('')}
      <td class="py-2 px-4 border font-bold">${data[client].total}</td>
    `;

    tbody.appendChild(row);
  }
}

loadData();


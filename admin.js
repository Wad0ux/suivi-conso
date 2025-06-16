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

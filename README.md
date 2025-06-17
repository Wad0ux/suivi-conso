# Suivi de consommation (version Firebase)
Ce projet permet de suivre les consommations de produits dans une association à l'aide de Firebase (Firestore + Auth).

## 🚀 Mise en place

1. Crée un projet sur [Firebase Console](https://console.firebase.google.com)
2. Active **Firestore** dans "Build → Firestore Database"
3. Active **Authentication** avec "Email/Password" dans "Build → Authentication"
4. Crée un utilisateur admin dans l’onglet "Users"
5. Remplace les infos dans `firebase.js` (`apiKey`, `authDomain`, etc.)

## 🌐 Déploiement GitHub Pages

1. Dépose le contenu du dossier sur un repo GitHub
2. Va dans "Settings → Pages" et active GitHub Pages sur le dossier `/root` ou `/docs`
3. Tu auras une URL publique du type : `https://toncompte.github.io/tonprojet/`

## 🎯 Utilisation

- `index.html` : formulaire public d’ajout de consommation
- `admin.html` : tableau de bord (connexion requise), affichage et export CSV

        <p class="mt-4 text-sm text-right">
          <a href="admin.html" class="text-blue-600 hover:underline">Accès Admin</a>
        </p>

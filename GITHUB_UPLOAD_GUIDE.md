# 📤 GUIDE COMPLET : UPLOAD SUR GITHUB EN 5 MINUTES

## ✅ Option 1 : GitHub Web Interface (RECOMMANDÉE)

Tu vas faire l'upload directement via le site GitHub. C'est le plus simple !

---

## 📋 ÉTAPE 1 : Préparer tes fichiers

### ✓ Vérifie que tu as le dossier complet

```
C:\BTS-SIO-Revision\
├── index.html ✅
├── css/
│   └── style.css ✅
├── js/
│   └── main.js ✅
├── pages/
│   ├── bloc1/
│   ├── slam/
│   ├── sisr/
│   ├── fondamentaux/
│   └── transversal/
├── README.md ✅
├── LICENSE ✅
├── .gitignore ✅
└── ... (autres fichiers)
```

**Tout est déjà prêt !** ✅

---

## 🌐 ÉTAPE 2 : Aller sur GitHub

1. **Ouvre ton navigateur**
2. **Va sur** : https://github.com/flaori28/r-vision-BTS-SIO1

Tu dois être connecté à ton compte GitHub (flaori28)

---

## 📂 ÉTAPE 3 : Upload les fichiers

### OPTION A : Drag & Drop (Le plus facile)

```
1. Va sur la page du repository
2. Cherche le bouton "Add file" (en haut à droite)
3. Clique sur "Upload files"
4. Ouvre l'Explorateur Windows et minimise GitHub
5. Va dans : C:\BTS-SIO-Revision\
6. Sélectionne TOUS les fichiers (Ctrl + A)
7. Drag & drop les fichiers dans la zone GitHub
8. Attends le chargement (une barre de progression)
```

### OPTION B : Click to upload

```
1. Sur GitHub, clique "Add file" → "Upload files"
2. Clique sur la zone "choose your files"
3. Sélectionne TOUT le dossier BTS-SIO-Revision
   (ou fais Ctrl + A dans C:\BTS-SIO-Revision\)
4. Clique "Open"
5. Attends le chargement complet
```

---

## ✍️ ÉTAPE 4 : Commit les changements

Une fois les fichiers uploadés, tu vas voir :

```
Commit changes
Commit message: [Zone de texte]
Extended description: [Zone optionnelle]
```

### Remplis comme suit :

**Commit message** :
```
Add complete BTS SIO revision platform
```

**Description** (optionnel) :
```
15 pages de cours, 75 exercices, 150 QCM
Dashboard avec progression et mode sombre
Interface responsive et moderne
```

### Puis clique : **"Commit changes"**

---

## 🎨 ÉTAPE 5 : Activer GitHub Pages

1. **Sur le repository**, clique sur **Settings** (onglet en haut)
2. Dans le menu de gauche, clique sur **Pages**
3. Sous **Build and deployment** :
   - **Source** : Sélectionne **Deploy from a branch**
   - **Branch** : Sélectionne **main**
   - **Folder** : Sélectionne **/(root)**
4. Clique **Save**

### GitHub va dire :
```
✓ Your site is live at https://flaori28.github.io/r-vision-BTS-SIO1/
```

---

## ⏳ ÉTAPE 6 : Attendre

Attends **1-2 minutes** que le site se déploie.

Tu peux actualiser la page pour vérifier la progression :
https://flaori28.github.io/r-vision-BTS-SIO1/

---

## 🎉 RÉSULTAT FINAL

Ton site sera accessible sur :

```
https://flaori28.github.io/r-vision-BTS-SIO1/
```

Avec :
- ✅ Sidebar avec 4 catégories
- ✅ Dashboard avec 4 stats
- ✅ 15 matières dans une grille
- ✅ Dark mode toggle
- ✅ Responsive design
- ✅ 75 exercices + 150 QCM
- ✅ localStorage pour scoring

---

## 🆘 Troubleshooting

### "Les fichiers ne s'uploadent pas"
- Vérifie que tu es connecté à GitHub (en haut à droite)
- Essaie un autre navigateur (Chrome, Edge)
- Vérifie que tu es sur le bon repository

### "GitHub Pages ne s'active pas"
- Va dans Settings → Pages
- Assure-toi que **main branch** est sélectionné
- Clique **Save** à nouveau

### "Le site affiche une erreur 404"
- Attends 3-5 minutes (le déploiement peut prendre du temps)
- Actualise la page (Ctrl + F5)
- Vérifie que index.html est bien à la racine

### "Les pages de cours ne chargent pas"
- Ouvre la console (F12)
- Vérifie qu'il n'y a pas d'erreur 404 pour les fichiers `pages/`
- Assure-toi que les fichiers sont bien uploadés dans `pages/slam/`, `pages/sisr/`, etc.

---

## 📞 Aide supplémentaire

**Documentation GitHub** :
- https://docs.github.com/en/pages

**Pour tester en local avant** :
```powershell
cd C:\BTS-SIO-Revision
python -m http.server 8000
# Puis ouvre http://localhost:8000
```

---

## ✨ Bravo !

Une fois en ligne, tu peux :
- Partager le lien avec tes camarades
- Ajouter le lien dans ton CV
- Utiliser le site pour réviser en ligne

**Bon courage pour tes révisions BTS SIO ! 🎓**

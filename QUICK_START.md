# 🎯 GUIDE RAPIDE - BTS SIO Revision Platform

## Démarrage en 30 secondes

### Windows
```bash
# 1. Double-cliquez sur :
C:\BTS-SIO-Revision\start.bat

# Terminé ! Le serveur démarre automatiquement
```

### Mac/Linux
```bash
cd ~/BTS-SIO-Revision
python3 -m http.server 8000
# Accéder à http://localhost:8000
```

---

## 🎓 Utiliser la Plateforme

### 1. **Accueil - Tableau de Bord**
- Visualiser progression globale
- Voir score moyen
- Cliquer sur une matière pour accéder au contenu

### 2. **Naviguer**
- **Sidebar gauche** : Cliquer sur la matière
- **Navigation rapide** : Sections organisées (Fondamentaux, SLAM, SISR, Transversales)

### 3. **Consulter un Cours**
- Lire la leçon avec définitions
- Voir exemples de code avec coloration syntaxe
- Consulter tableaux et diagrammes

### 4. **Exercices**
- Cliquer sur "Voir la correction" pour afficher la solution
- Clicker à nouveau pour masquer
- Pratiquer en essayant d'abord seul !

### 5. **Quiz**
- Répondre aux 4-10 questions
- Cliquer "Soumettre"
- Score s'affiche automatiquement
- Progression sauvegardée !

### 6. **Mode Sombre**
- Cliquer sur l'icône lune/soleil (haut-droit)
- Préférence sauvegardée automatiquement
- Parfait pour réviser le soir

---

## 📊 Suivre sa Progression

Vos scores sont automatiquement sauvegardés dans le navigateur :
- **Progression globale** : % de matières révisées
- **Score moyen** : Moyenne de tous les quiz réalisés
- **Quiz complétés** : Nombre de sujets terminés

> **Note** : Données stockées localement. Clearing cache = reset !

---

## 🔧 Ajouter du Contenu (Pour Admins)

### Créer une nouvelle page SLAM

**Étape 1** : Créer le fichier `pages/slam/nouveau-sujet.html`

```html
<!-- Copier le template d'une page existante -->
<div class="page-content">
    <h1>Titre du Sujet</h1>
    <div class="lesson-content">
        <!-- COURS ICI -->
    </div>
    <div class="exercises-section">
        <!-- EXERCICES ICI -->
    </div>
    <div class="quiz-section">
        <!-- QUIZ ICI -->
    </div>
</div>
```

**Étape 2** : Ajouter à la navigation dans `index.html`

```html
<a href="#" class="nav-link" data-page="nouveau-sujet">
    <i class="fas fa-icon"></i>
    <span>Nouveau Sujet</span>
</a>
```

**Étape 3** : Ajouter le générateur dans `js/main.js`

```javascript
'nouveau-sujet': generateNouveauSujetPage

function generateNouveauSujetPage() {
    return `<!-- contenu HTML ici -->`;
}
```

---

## 🎨 Personnaliser les Couleurs

Éditer `css/style.css` - section `:root`

```css
:root {
    --primary: #6366f1;        /* Bleu (couleur principale) */
    --secondary: #ec4899;      /* Rose */
    --success: #10b981;        /* Vert */
    --danger: #ef4444;         /* Rouge */
    /* ... autres variables */
}
```

---

## 📱 Tester la Responsivité

### Dans le navigateur
1. **F12** ou `Ctrl+Shift+I`
2. **Ctrl+Shift+M** (Toggle device toolbar)
3. Tester sur :
   - **Mobile** : 375px (iPhone)
   - **Tablet** : 768px (iPad)
   - **Desktop** : 1920px

### Points de rupture CSS
- **480px** : Mobile
- **768px** : Tablette
- **1024px+** : Desktop

---

## 🐛 Dépannage

### Les styles ne s'appliquent pas
```
✓ Vérifier que css/style.css est accessible
✓ Recharger la page (Ctrl+F5 hard refresh)
✓ Vérifier le chemin relatif : /css/style.css
```

### Dark mode ne se sauvegarde pas
```
✓ localStorage est activé dans les paramètres du navigateur
✓ Vérifier que les cookies sont autorisés
✓ Essayer en mode normal (pas incognito)
```

### Quiz ne score pas
```
✓ Console développeur (F12) pour voir erreurs
✓ Vérifier que submitQuiz() est appelée
✓ Vérifier les noms des questions (name="q1", etc.)
```

---

## 📊 Structure des Données localStorage

### Clé : `darkMode`
```json
true  // ou false
```

### Clé : `quizScores`
```json
{
  "math": 85,
  "slam-algo": 90,
  "sisr-reseau": 75
}
```

---

## 🚀 Déploiement

### GitHub Pages
```bash
git init
git add .
git commit -m "BTS SIO Platform"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

Settings → Pages → Branch: main

### Netlify (Recommandé)
1. Aller sur netlify.com
2. Drag & drop le dossier `BTS-SIO-Revision`
3. Déploié en quelques secondes !

### Vercel
```bash
npm i -g vercel
vercel
# Suivre les instructions
```

---

## 📚 Ressources Pédagogiques

### Pour améliorer le contenu
- **Code** : MDN Web Docs (mdn.org)
- **Réseaux** : Cisco Learning Network
- **Sécurité** : ANSSI (anssi.gouv.fr)
- **Linux** : Ubuntu Documentation

### Design & UX
- **Icons** : Font Awesome (fontawesome.com)
- **Fonts** : Google Fonts (fonts.google.com)
- **Layouts** : CSS-Tricks

---

## 📞 Support & Questions

### Erreurs courantes
1. **Port 8000 occupé** → Utiliser `python -m http.server 8001`
2. **Python non installé** → Télécharger depuis python.org
3. **CDN non accessible** → Utiliser version locale (offline mode)

### Contact
- Issues sur GitHub
- Email : votre-email@example.com

---

## ✅ Checklist Déploiement

- [ ] Toutes les pages créées
- [ ] Quiz testés et scorent correctement
- [ ] Dark mode fonctionne
- [ ] localStorage sauvegarde les données
- [ ] Responsive sur mobile/tablette/desktop
- [ ] Tous les liens navigation marchent
- [ ] Pas d'erreurs console (F12)
- [ ] Serveur démarré sans erreurs
- [ ] Textes et spellcheck vérifiés
- [ ] Images et icônes chargent

---

**Bon courage pour vos révisions ! 📖🎓**

*Dernière mise à jour : 27 mai 2026*

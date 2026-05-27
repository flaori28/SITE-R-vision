# BTS SIO 1ère Année - Plateforme de Révision

Une application web interactive pour réviser le programme complet de BTS SIO 1ère année (SLAM et SISR) avec cours, exercices et quiz.

## 🚀 Démarrage rapide

### Option 1 : Serveur local Python
```powershell
cd C:\BTS-SIO-Revision
python -m http.server 8000
```
Puis ouvrir `http://localhost:8000` dans le navigateur

### Option 2 : Node.js
```powershell
cd C:\BTS-SIO-Revision
npx http-server
```

### Option 3 : Live Server VS Code
1. Installer l'extension "Live Server" de Ritwick Dey
2. Clic droit sur `index.html` → "Open with Live Server"

## 📚 Structure du projet

```
BTS-SIO-Revision/
├── index.html              # Page principale (tableau de bord)
├── css/
│   └── style.css          # Styles réactifs et mode sombre
├── js/
│   └── main.js            # Logique navigation, quiz, dark mode
├── pages/                 # Pages de contenu pour chaque matière
│   ├── slam/
│   ├── sisr/
│   └── transversal/
├── data/
│   └── subjects.json      # Données curriculum (extensible)
└── README.md
```

## ✨ Fonctionnalités

### ✅ Implémentées
- **Tableau de bord** : Suivi en temps réel de la progression
- **12 matières** : SLAM (4), SISR (4), Fondamentaux (3), Transversales (2)
- **Navigation dynamique** : Sidebar avec sections organisées
- **Mode sombre** : Toggle avec persistance localStorage
- **Responsif** : Mobile-first design (480px, 768px, 1024px)
- **Exercices** : Solutions masquables avec bouton "Voir la correction"
- **Quiz interactifs** : Questions à choix multiples avec scoring
- **Persistance** : localStorage pour scores et préférences

### 🔄 En construction
- Pages SLAM complètes (Algorithmique, BDD, Web, POO)
- Pages SISR complètes (Réseaux, Systèmes, Cyber, Virtualisation)
- Pages transversales (Économie-Droit, Management SI)
- Importation de données externes

## 🎨 Technologie

- **HTML5** : Structure sémantique
- **CSS3** : Variables CSS, Grid, Flexbox, animations
- **JavaScript Vanilla** : Pas de dépendances externes
- **Font Awesome 6.4.0** : Icons professionnels
- **Google Fonts (Poppins)** : Typographie moderne
- **highlight.js** : Syntaxe coloration de code
- **localStorage** : Persistance des données

## 🔧 Configuration

### Dark Mode
Le mode sombre est sauvegardé automatiquement dans localStorage :
```javascript
localStorage.getItem('darkMode') // true ou false
```

### Progress Tracking
Les scores des quiz sont stockés par sujet :
```javascript
{
  "math": 85,
  "slam-algo": 90,
  "sisr-reseau": 75
}
```

## 📝 Ajouter du contenu

### Ajouter une nouvelle page

1. Créer la page HTML dans `/pages/`:
```html
<!-- pages/slam/mon-sujet.html -->
<div class="page-content">
    <h1>Mon sujet</h1>
    <!-- Contenu -->
</div>
```

2. Ajouter le lien dans la sidebar (`index.html`):
```html
<a href="#" class="nav-link" data-page="mon-sujet">
    <i class="fas fa-icon"></i>
    <span>Mon Sujet</span>
</a>
```

3. Ajouter le générateur dans `js/main.js`:
```javascript
'mon-sujet': generateMonSujetPage

function generateMonSujetPage() {
    return `<div class="page-content">...</div>`;
}
```

## 🎯 Prochaines étapes

1. **Compléter les pages SLAM** : Ajouter contenu complet avec code exemples
2. **Compléter les pages SISR** : Réseaux, Systèmes, Cybersécurité, Virtualisation
3. **Enrichir les quiz** : Plus de questions, meilleur scoring
4. **Importer contenu externe** : Scripts Python pour scraper formationsup.fr
5. **Statistiques avancées** : Temps d'étude, tendances, recommandations
6. **Partage** : Générer liens pour partager progression

## 🌐 Déploiement

### GitHub Pages
```powershell
git init
git add .
git commit -m "Initial BTS SIO revision platform"
git push -u origin main
```

Configuration dans `Settings → Pages` : Déployer depuis `main` branche

### Netlify (recommandé)
1. Drag & drop le dossier sur netlify.com
2. Automatiquement déployé avec HTTPS

### Autres hébergeurs
Compatible avec tout hébergement statique (Vercel, Surge, etc.)

## 📞 Support

Pour ajouter des matières, modifier les couleurs ou adapter le contenu :

1. Éditer les **variables CSS** dans `css/style.css` (`:root`)
2. Modifier les **générateurs de page** dans `js/main.js`
3. Ajouter les **liens de navigation** dans `index.html`

## 📄 Licence

MIT - Libre d'utilisation et de modification pour l'éducation

---

**Bon courage pour vos révisions ! 🎓**

# 📚 BTS SIO - Plateforme de Révision Interactive

> Plateforme web complète de révision pour le programme BTS SIO (Services Informatiques aux Organisations) 1ère année

![License](https://img.shields.io/badge/License-MIT-green.svg)
![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen.svg)
![Pages](https://img.shields.io/badge/Pages-15-blue.svg)
![Exercises](https://img.shields.io/badge/Exercices-75+-orange.svg)
![Questions](https://img.shields.io/badge/Questions%20QCM-150+-purple.svg)

## 🎯 Présentation

Plateforme interactive pour **réviser tout le programme BTS SIO 1ère année** avec :
- ✅ **15 modules complets** (Bloc 1, SLAM, SISR, Fondamentaux, Transversal)
- ✅ **75+ exercices pratiques** avec corrections
- ✅ **150+ questions QCM** avec feedback instantané
- ✅ **Mode sombre** inclus
- ✅ **Responsive** (Desktop, Tablet, Mobile)
- ✅ **Scoring localStorage** (progression sauvegardée)

## 📋 Contenu du Programme

### **BLOC 1 - Support et Mise à Disposition**
- 🏢 **Gestion du Patrimoine Informatique** - ITIL, GLPI, disponibilité, MTBF/MTTR
- 📋 **Réponses aux Besoins** - CDCF, analyse de faisabilité, critères de choix

### **SLAM - Solutions Logicielles**
- 🔢 **Algorithmes** - Complexité, structures, paradigmes
- 🗄️ **Bases de Données** - MCD/MLD, SQL, intégrité référentielle
- 🌐 **Développement Web** - HTML5, CSS3, JavaScript, PHP
- 🎯 **Programmation Orientée Objet** - Classes, héritage, polymorphisme

### **SISR - Systèmes et Réseaux**
- 🌍 **Réseaux Informatiques** - OSI/TCP-IP, IPv4, VLSM, DHCP/DNS/ARP
- 🖥️ **Systèmes d'Exploitation** - Linux, Windows Server, Active Directory
- 🔒 **Cybersécurité** - DICP, cryptographie, authentification, menaces
- 💻 **Virtualisation** - Hyperviseurs, vCPU, modes réseau

### **Fondamentaux**
- 🔢 **Mathématiques pour l'Informatique** - Numération, algèbre de Boole
- 🌐 **Anglais Technique** - Vocabulaire IT, grammaire professionnelle
- 📖 **Culture Générale et Expression** - Synthèse, argumentation, actualité

### **Transversal**
- ⚖️ **CEJM** - Cadre Éthique et Juridique du Management
- 📊 **Management SI** - Gestion de projet, Agile/Scrum, GANTT/PERT, ITIL

## 🚀 Démarrage Rapide

### **Option 1 : Serveur Local (Recommandé)**

```bash
# Cloner le repository
git clone https://github.com/votre-username/BTS-SIO-Revision.git
cd BTS-SIO-Revision

# Démarrer le serveur Python
python -m http.server 8000

# Ouvrir dans le navigateur
# http://localhost:8000
```

### **Option 2 : Fichier Local Directement**

Double-cliquez sur `index.html` pour ouvrir localement (sans serveur)

### **Option 3 : GitHub Pages**

Si déployé sur GitHub Pages :
```
https://votre-username.github.io/BTS-SIO-Revision
```

## 📁 Structure du Projet

```
BTS-SIO-Revision/
├── index.html                      # Page d'accueil + navigation
├── css/
│   └── style.css                   # Styles principaux
├── js/
│   └── main.js                     # Logique navigation + localStorage
├── pages/
│   ├── bloc1/
│   │   ├── gestion-patrimoine.html
│   │   └── reponses-besoins.html
│   ├── slam/
│   │   ├── algorithmique.html
│   │   ├── bases-de-donnees.html
│   │   ├── dev-web.html
│   │   └── poo.html
│   ├── sisr/
│   │   ├── reseaux.html
│   │   ├── systemes.html
│   │   ├── cybersecurite.html
│   │   └── virtualisation.html
│   ├── fondamentaux/
│   │   ├── maths.html
│   │   ├── anglais.html
│   │   └── cge.html
│   └── transversal/
│       ├── cejm.html
│       └── management-si.html
├── README.md                       # Documentation
├── start.bat                       # Launcher Windows
└── start.ps1                       # Launcher PowerShell
```

## ✨ Fonctionnalités

### **📖 Cours Structurés**
- 4 sections de cours par page avec définitions et exemples
- Code snippets avec syntax highlighting
- Schémas et tableaux comparatifs

### **💪 Exercices Pratiques**
- 5 exercices par page
- Énoncé + solution toggle-able
- Explications détaillées

### **🎓 Quiz Interactif**
- 10 questions QCM par page
- Feedback immédiat (vert = correct, rouge = incorrect)
- Scoring localStorage (persistence entre sessions)
- Résultat final (Excellent/Très bien/À revoir)

### **🌙 Dark Mode**
- Toggle bouton en haut à droite
- Thème automatique selon préférence système
- Persistence localStorage

### **📱 Responsive Design**
- Desktop (1024px+)
- Tablet (768px-1023px)
- Mobile (480px-767px)

## 🔧 Technologies

- **Frontend** : HTML5, CSS3, JavaScript ES6+
- **Design** : Responsive, Flexbox/Grid
- **Icons** : Font Awesome 6.4.0
- **Fonts** : Google Fonts (Poppins)
- **Storage** : localStorage (Quiz scores)
- **Code Highlighting** : highlight.js 11.8.0

## 📊 Statistiques

| Métrique | Nombre |
|----------|--------|
| Pages | 15 |
| Modules | 5 blocs |
| Sections cours | 60+ |
| Exercices | 75+ |
| Questions QCM | 150+ |
| Code snippets | 100+ |
| Taille totale | ~800 KB |

## 🎯 Public Cible

- 👨‍🎓 Étudiants BTS SIO (révision)
- 👨‍🏫 Formateurs (ressources pédagogiques)
- 💼 Candidats certification IT

## 🏆 Points Forts

✅ **Complet** - Couverture 100% du programme BTS SIO 1ère année
✅ **Interactif** - Quiz auto-correctifs + exercices détaillés
✅ **Moderne** - Design épuré, responsive, dark mode
✅ **Facile d'accès** - Fonctionne sans installation ni backend
✅ **Scalable** - Architecture modulaire, facile à étendre
✅ **Gratuit** - Open source, libre d'utilisation

## 📝 Utilisation

### **Pour les Étudiants**
1. Ouvrir la plateforme → Sélectionner un module
2. Lire le cours complet
3. Faire les 5 exercices (consulter corrections au besoin)
4. Valider avec le quiz QCM
5. Vérifier le score localStorage

### **Pour les Formateurs**
1. Utiliser les pages comme support de cours
2. Références des exercices et quiz pour évaluation
3. Adapter le contenu selon besoins classe

## 🐛 Amélioration Continue

Suggestions bienvenues ! Créez une **Issue** ou **Pull Request** pour :
- Corrections de contenu
- Nouvelles pages/modules
- Améliorations UI/UX
- Optimisations de performance

## 📜 License

Ce projet est sous licence **MIT** - libre d'utilisation, modification, distribution

```
MIT License - Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

Voir [LICENSE](./LICENSE) pour détails complets.

## 👥 Auteurs

- **Développement** : Projet pédagogique BTS SIO
- **Contenu pédagogique** : Spécialistes IT/Formation
- **Design** : UI/UX moderne et accessible

## 📞 Support & Contact

**Questions ?** Consultez la documentation :
- [README.md](./README.md) - Documentation générale
- [QUICK_START.md](./QUICK_START.md) - Démarrage rapide
- Créez une **Issue** GitHub

## 🔗 Ressources Utiles

- [Programme BTS SIO Officiel](https://www.education.gouv.fr/)
- [Font Awesome Icons](https://fontawesome.com)
- [Google Fonts](https://fonts.google.com)
- [MDN Web Docs](https://developer.mozilla.org)

## 🌟 Remerciements

Merci à tous les utilisateurs et contributeurs qui aident à améliorer cette plateforme !

---

**Dernière mise à jour** : Mai 2026  
**Statut** : ✅ Production Ready  
**Version** : 1.0.0

> **Note** : Cette plateforme est régulièrement mise à jour. Assurez-vous d'avoir la dernière version via `git pull`


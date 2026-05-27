# 📤 Guide de Déploiement sur GitHub

## ✅ Étape 1 : Créer un Repository GitHub

1. Va sur [github.com](https://github.com) et connecte-toi
2. Clique sur **"New repository"** (+ en haut à gauche)
3. Remplis :
   - **Repository name** : `BTS-SIO-Revision`
   - **Description** : "Plateforme interactive de révision BTS SIO"
   - **Public** : ✅ (pour que tout le monde puisse y accéder)
   - **Add a README file** : ❌ (on va utiliser le nôtre)
4. Clique **"Create repository"**

## ✅ Étape 2 : Préparer ton Ordinateur

### **A. Installer Git (si pas déjà fait)**

Télécharge Git depuis [git-scm.com](https://git-scm.com/download/win)

Vérifie l'installation :
```powershell
git --version
```

### **B. Configurer Git**

```powershell
git config --global user.name "Ton Nom"
git config --global user.email "ton.email@example.com"
```

## ✅ Étape 3 : Uploader le Projet

### **Option A : Ligne de Commande (Recommandé)**

```powershell
# 1. Ouvre PowerShell dans le dossier C:\BTS-SIO-Revision
cd C:\BTS-SIO-Revision

# 2. Initialise le repository Git
git init

# 3. Ajoute tous les fichiers
git add .

# 4. Crée le premier commit
git commit -m "Initial commit: Plateforme complète BTS SIO"

# 5. Renomme la branche en 'main' (si nécessaire)
git branch -M main

# 6. Ajoute l'URL du repository GitHub
# (Remplace USERNAME par ton pseudo GitHub et REPO par le nom du repo)
git remote add origin https://github.com/USERNAME/BTS-SIO-Revision.git

# 7. Upload les fichiers vers GitHub
git push -u origin main
```

### **Option B : GitHub Desktop (Interface Graphique)**

1. Télécharge [GitHub Desktop](https://desktop.github.com)
2. Connecte-toi avec ton compte GitHub
3. **File** → **Clone repository** → Choisis `BTS-SIO-Revision`
4. Ouvre le dossier local
5. **Current Branch** → Crée une nouvelle branche
6. Fais **Commit to main** → **Push origin**

## ✅ Étape 4 : Activer GitHub Pages (pour accès web)

1. Va sur ton repository GitHub
2. **Settings** (onglet en haut à droite)
3. **Pages** (menu à gauche)
4. **Source** → Sélectionne **main branch**
5. **Save**

→ Ton site sera accessible sur : `https://USERNAME.github.io/BTS-SIO-Revision/`

## ✅ Étape 5 : Ajouter un Badge README

Pour afficher un joli badge sur ton README :

```markdown
![GitHub Stars](https://img.shields.io/github/stars/USERNAME/BTS-SIO-Revision)
![GitHub Forks](https://img.shields.io/github/forks/USERNAME/BTS-SIO-Revision)
![GitHub Issues](https://img.shields.io/github/issues/USERNAME/BTS-SIO-Revision)
```

## 🔄 Mises à Jour Futures

Pour mettre à jour ton repository :

```powershell
cd C:\BTS-SIO-Revision

# Fais tes modifications locales

# Ajoute les changements
git add .

# Crée un commit
git commit -m "Description des modifications"

# Upload vers GitHub
git push origin main
```

## 📋 Checklist Avant Push

- ✅ Tous les fichiers HTML sont présents
- ✅ Dossiers `pages/`, `css/`, `js/` existent
- ✅ `index.html` est au root
- ✅ `README.md` ou `GITHUB_README.md` existe
- ✅ `.gitignore` configuré
- ✅ `LICENSE` inclus
- ✅ Pas de fichiers personnels/sensibles

## 🐛 Troubleshooting

### **Erreur : "git not found"**
→ Réinstalle Git depuis [git-scm.com](https://git-scm.com/download/win)

### **Erreur : "Permission denied"**
→ Génère une clé SSH : [GitHub Docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

### **Erreur : "fatal: pathspec does not match any file"**
→ Vérifie que tu es dans le bon dossier : `cd C:\BTS-SIO-Revision`

### **Le site ne s'affiche pas sur GitHub Pages**
→ Attends 1-2 minutes et actualise la page
→ Vérifie que GitHub Pages est activé (Settings → Pages)

## 📚 Ressources Utiles

- [GitHub Docs](https://docs.github.com)
- [Git Tutorial](https://git-scm.com/doc)
- [GitHub Desktop Help](https://docs.github.com/en/desktop)
- [Markdown Guide](https://www.markdownguide.org/)

## 🎉 Succès !

Une fois pushé, ton repository sera visible à :
```
https://github.com/USERNAME/BTS-SIO-Revision
```

Et ton site web sur :
```
https://USERNAME.github.io/BTS-SIO-Revision/
```

**N'oublie pas de remplacer USERNAME par ton vrai pseudo GitHub !**


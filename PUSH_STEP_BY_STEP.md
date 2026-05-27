# 🚀 GUIDE COMPLET : PUSH GITHUB - PAS À PAS

**Statut actuel :** Ton projet est prêt localement, juste besoin de le pusher sur GitHub

---

## 📋 ÉTAPE 1 : VÉRIFIER QUE TU AS GIT D'INSTALLÉ

```powershell
git --version
```

Si tu vois une version, tu es bon ✅
Sinon, télécharge-le : https://git-scm.com/download/win

---

## 📋 ÉTAPE 2 : CONFIGURER GIT (Première fois seulement)

Ouvre PowerShell et exécute :

```powershell
git config --global user.name "flaori28"
git config --global user.email "ton.email@github.com"
```

---

## 📋 ÉTAPE 3 : VÉRIFIER L'ÉTAT LOCAL

```powershell
cd C:\BTS-SIO-Revision

# Voir le statut
git status

# Voir les commits locaux
git log --oneline
```

Tu dois voir :
- ✅ Initial commit avec 29 fichiers
- ✅ Branche 'main'

---

## 📋 ÉTAPE 4 : CRÉER UN TOKEN GITHUB (Plus sûr que le mot de passe)

### **A. Sur GitHub.com :**

1. Va sur : https://github.com/settings/tokens/new
2. Connecte-toi avec **flaori28**
3. Remplis :
   - **Token name** : `BTS-SIO-Push`
   - **Expiration** : 90 jours
   - **Scopes** : ✅ `repo` (cocher la case principale)
4. Clique **Generate token**
5. **⚠️ COPIE LE TOKEN** (tu ne le verras qu'une fois !)

### **B. Local, avec le Token :**

```powershell
cd C:\BTS-SIO-Revision

# Configure le remote avec le token
# Remplace TOKEN par ce que tu viens de copier
git remote set-url origin https://flaori28:TOKEN@github.com/flaori28/r-vision-BTS-SIO1.git

# Pousse le code
git push -u origin main
```

---

## 📋 ÉTAPE 5 : ALTERNATIVE - POUSSER EN HTTPS SIMPLE

Si le token ne marche pas :

```powershell
cd C:\BTS-SIO-Revision

# Configure simple
git remote set-url origin https://github.com/flaori28/r-vision-BTS-SIO1.git

# Git te demandera ton identifiant
git push -u origin main

# Utilise comme identifiant : flaori28
# Utilise comme mot de passe : Ton token GitHub (ou mot de passe)
```

---

## 📋 ÉTAPE 6 : ALTERNATIVE - UTILISER GITHUB DESKTOP

Si les lignes de commande te font peur :

1. Télécharge : https://desktop.github.com
2. Installe et connecte-toi avec **flaori28**
3. **File** → **Add Local Repository**
4. Sélectionne `C:\BTS-SIO-Revision`
5. Clique **Publish repository**
6. Laisse les paramètres par défaut
7. Clique **Publish**

→ C'est tout ! ✅

---

## 📋 ÉTAPE 7 : ACTIVER GITHUB PAGES

Une fois que tu vois les fichiers sur GitHub :

1. Va sur : https://github.com/flaori28/r-vision-BTS-SIO1
2. Clique **Settings** (onglet en haut à droite)
3. Clique **Pages** (menu de gauche)
4. Sous **Build and deployment** :
   - **Source** : `Deploy from a branch`
   - **Branch** : `main` / `/(root)`
5. Clique **Save**

⏳ Attends 1-2 minutes...

→ Ton site sera accessible sur : **https://flaori28.github.io/r-vision-BTS-SIO1/**

---

## ✅ VÉRIFIER QUE ÇA A MARCHÉ

```powershell
# Vérifie le remote configuré
git remote -v

# Doit afficher :
# origin  https://github.com/flaori28/r-vision-BTS-SIO1.git (fetch)
# origin  https://github.com/flaori28/r-vision-BTS-SIO1.git (push)
```

---

## 🐛 TROUBLESHOOTING

### **Erreur : "fatal: unable to access"**
→ Vérifie ta connexion internet
→ Vérifie que le token est valide

### **Erreur : "Access denied"**
→ Le token a expiré (refais l'étape 4)
→ Utilise GitHub Desktop à la place

### **Erreur : "Repository not found"**
→ Vérifie que tu as créé le repo `r-vision-BTS-SIO1` sur GitHub
→ Vérifie que l'URL est correcte

### **GitHub Pages ne s'affiche pas**
→ Attends 2-3 minutes
→ Vérifie que Pages est activé dans Settings
→ Assure-toi que c'est la branche `main` qui est selectionnée

---

## 📊 RÉSUMÉ DES FICHIERS QUI SERONT PUSHÉS

```
29 fichiers seront uploadés :
✅ index.html (page d'accueil)
✅ 14 pages de cours (pages/)
✅ CSS et JavaScript (css/, js/)
✅ Documentation (README.md, LICENSE, etc)
✅ Scripts (start.bat, start.ps1)
```

**Total : ~400 KB de contenu éducatif**

---

## 🎉 APRÈS LE PUSH

Une fois que tu vois ton code sur GitHub :

1. **Partage le lien** : `https://flaori28.github.io/r-vision-BTS-SIO1/`
2. **Partage le repo** : `https://github.com/flaori28/r-vision-BTS-SIO1`
3. **Les étudiants peuvent** :
   - Accéder au site directement
   - Cloner le repo : `git clone https://github.com/flaori28/r-vision-BTS-SIO1`
   - Faire des fork et contribuer

---

## 📝 COMMANDES RAPIDES À RETENIR

```powershell
# Vérifier l'état
git status

# Voir les commits
git log --oneline

# Vérifier le remote
git remote -v

# Pousser les changements
git push origin main

# Récupérer les changements distants
git pull origin main
```

---

## 🚀 TU ES PRÊT !

Tes fichiers sont prêts. Juste à pousser. Bonne chance ! 🎓

Si tu as une question : relis ce guide ou cherche sur **Stack Overflow** 😉


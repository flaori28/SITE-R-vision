# 🚀 Instructions pour Pusher sur GitHub

## ✅ Étape 1 : Vérifier la Connexion Internet

Assure-toi que tu as une connexion internet active.

## ✅ Étape 2 : Générer une Clé SSH (Recommandé)

Si tu n'as pas encore de clé SSH :

```powershell
# Génère une clé SSH
ssh-keygen -t ed25519 -C "flaori28@github.com"

# Ajoute la clé à l'agent SSH
eval $(ssh-agent -s)
ssh-add $env:USERPROFILE\.ssh\id_ed25519
```

Puis ajoute la clé publique à GitHub : https://github.com/settings/ssh/new

## ✅ Étape 3 : Pusher le Code (Avec SSH)

```powershell
cd C:\BTS-SIO-Revision

# Configure le remote avec SSH
git remote set-url origin git@github.com:flaori28/r-vision-BTS-SIO1.git

# Pousse le code
git push -u origin main
```

## ✅ Étape 4 : Alternative avec Token (HTTPS)

Si SSH ne fonctionne pas, utilise un token d'accès personnel :

1. Va sur https://github.com/settings/tokens
2. Crée un nouveau token avec l'accès `repo`
3. Copie le token

```powershell
cd C:\BTS-SIO-Revision

# Configure le remote avec le token
git remote set-url origin https://flaori28:TOKEN@github.com/flaori28/r-vision-BTS-SIO1.git

# Remplace TOKEN par ton vrai token

# Pousse le code
git push -u origin main
```

## ✅ Étape 5 : Vérifier sur GitHub

Après le push, va vérifier : https://github.com/flaori28/r-vision-BTS-SIO1

## ✅ Étape 6 : Activer GitHub Pages

1. Va sur ton repository GitHub
2. Clique sur **Settings**
3. Sélectionne **Pages** (dans le menu de gauche)
4. Sous **Build and deployment**, sélectionne :
   - **Source** : Deploy from a branch
   - **Branch** : `main` / `/(root)`
5. Clique **Save**

→ Ton site sera accessible sur : **https://flaori28.github.io/r-vision-BTS-SIO1/**

## ⚠️ Si tu as une erreur "fatal: unable to access"

**Cause probable** : Problème de connexion réseau ou d'authentification

**Solutions** :
1. Teste ta connexion : `ping google.com`
2. Vérifie ton token/SSH : voir les étapes ci-dessus
3. Essaie avec le protocole HTTP en dernier recours
4. Réessaie dans quelques minutes

## 📝 Commandes Rapides

```powershell
# Voir le statut
git status

# Voir les remotes configurés
git remote -v

# Changer de remote
git remote set-url origin [NEW_URL]

# Tester la connexion SSH
ssh -T git@github.com

# Tester la connexion HTTPS
git ls-remote https://github.com/flaori28/r-vision-BTS-SIO1.git
```

## ✅ Résumé du Processus

```
1. Local init ✅ (déjà fait)
2. Ajouter remote → git remote add origin ...
3. Pousser → git push -u origin main
4. Activer GitHub Pages dans les settings
5. Accéder au site → https://flaori28.github.io/r-vision-BTS-SIO1/
```

Good luck ! 🚀

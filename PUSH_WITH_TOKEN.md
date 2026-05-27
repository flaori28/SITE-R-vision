# 🔑 Push sur GitHub avec Token d'Accès Personnel

## ⚠️ Raison du Blocage

Le firewall de ton réseau bloque :
- ❌ SSH (port 22) - Connecté
- ❌ Les connexions directes à GitHub

## ✅ Solution : Utiliser un Token d'Accès

### **Étape 1 : Créer un Token sur GitHub**

1. Va sur : https://github.com/settings/tokens/new
2. Remplis les champs :
   - **Token name** : `BTS-SIO-Push`
   - **Expiration** : `90 days` (ou plus)
   - **Scopes** : Coche uniquement `repo` (accès complet au repo)
3. Clique **Generate token**
4. **COPIE LE TOKEN** (tu ne pourras pas le revoir !)

### **Étape 2 : Configurer Git avec le Token**

**Option A : Avec une URL complète (rapide)**

```powershell
cd C:\BTS-SIO-Revision

# Remplace TOKEN par ton vrai token
git remote set-url origin https://flaori28:TOKEN@github.com/flaori28/r-vision-BTS-SIO1.git

# Pousse le code
git push origin main
```

**Option B : Stocker le Token (sécurisé)**

```powershell
# Sur Windows, utilise le Windows Credential Manager
git config --global credential.helper manager

# Ensuite, Git te demandera ton token la première fois
# Utilise flaori28 comme username et ton TOKEN comme password
```

### **Étape 3 : Pusher le Code**

```powershell
cd C:\BTS-SIO-Revision
git push origin main
```

Git te demandera :
- **Username** : `flaori28`
- **Password** : Colle le TOKEN

## ⚡ Script Automatique PowerShell

Crée un fichier `push-with-token.ps1` :

```powershell
# push-with-token.ps1
param(
    [string]$Token = $(Read-Host "Entre ton Personal Access Token")
)

cd C:\BTS-SIO-Revision

Write-Host "🔐 Configuring GitHub token..." -ForegroundColor Cyan
git remote set-url origin "https://flaori28:$Token@github.com/flaori28/r-vision-BTS-SIO1.git"

Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

if ($?) {
    Write-Host "✅ Push réussi !" -ForegroundColor Green
    Write-Host "🌐 Site accessible sur :" -ForegroundColor Cyan
    Write-Host "   https://flaori28.github.io/r-vision-BTS-SIO1/" -ForegroundColor Magenta
} else {
    Write-Host "❌ Erreur lors du push" -ForegroundColor Red
}

# Nettoie le token de la configuration
git remote set-url origin "https://github.com/flaori28/r-vision-BTS-SIO1.git"
```

Utilise-le :
```powershell
.\push-with-token.ps1
```

## 🔒 Sécurité

⚠️ **IMPORTANT** : 
- N'enregistre JAMAIS ton token en dur dans les fichiers
- Le token est comme un mot de passe
- Si tu l'as exposé, régénère-le : https://github.com/settings/tokens

## ✅ Après le Push

Une fois le push réussi :

1. Va vérifier : https://github.com/flaori28/r-vision-BTS-SIO1
2. Active GitHub Pages :
   - **Settings** → **Pages**
   - **Branch** : `main` / `/(root)`
   - **Save**
3. Ton site sera sur : **https://flaori28.github.io/r-vision-BTS-SIO1/**

## 🆘 En cas de Problème

```powershell
# Réinitialise la URL du remote
git remote set-url origin https://github.com/flaori28/r-vision-BTS-SIO1.git

# Vérifie la configuration
git remote -v

# Teste la connexion
git ls-remote https://github.com/flaori28/r-vision-BTS-SIO1.git
```

Bonne chance ! 🚀

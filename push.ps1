#!/usr/bin/env powershell
# Script de Push Automatique sur GitHub
# =====================================

param(
    [string]$Token = $null
)

# Couleurs
$Green = 'Green'
$Red = 'Red'
$Yellow = 'Yellow'
$Cyan = 'Cyan'

Write-Host "
╔════════════════════════════════════════════════════════════╗
║          🚀 PUSH SUR GITHUB - BTS SIO REVISION 🚀         ║
╚════════════════════════════════════════════════════════════╝
" -ForegroundColor $Cyan

# Vérifie si on est dans le bon dossier
if (-not (Test-Path "C:\BTS-SIO-Revision\.git")) {
    Write-Host "❌ Erreur : Repository Git non trouvé !" -ForegroundColor $Red
    Write-Host "   Assure-toi d'être dans C:\BTS-SIO-Revision" -ForegroundColor $Red
    exit 1
}

cd C:\BTS-SIO-Revision

# Si pas de token en paramètre, demande-le
if (-not $Token) {
    Write-Host "📝 Entre ton Personal Access Token GitHub :" -ForegroundColor $Yellow
    Write-Host "   (génère un token sur https://github.com/settings/tokens/new)" -ForegroundColor $Cyan
    Write-Host ""
    
    $TokenSecure = Read-Host "Token"
    $Token = $TokenSecure
    
    if (-not $Token) {
        Write-Host "❌ Erreur : Token vide !" -ForegroundColor $Red
        exit 1
    }
}

Write-Host ""
Write-Host "⚙️  Configuration du token..." -ForegroundColor $Yellow

# Configure le remote avec le token
git remote set-url origin "https://flaori28:$Token@github.com/flaori28/r-vision-BTS-SIO1.git"

Write-Host "📤 Envoi des fichiers vers GitHub..." -ForegroundColor $Yellow
Write-Host ""

# Pousse le code
$output = git push origin main 2>&1
$success = $?

# Affiche le résultat
Write-Host $output

if ($success) {
    Write-Host ""
    Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor $Green
    Write-Host "║                  ✅ PUSH RÉUSSI ! ✅                      ║" -ForegroundColor $Green
    Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor $Green
    Write-Host ""
    Write-Host "🌐 Ton site est en ligne sur :" -ForegroundColor $Green
    Write-Host "   https://flaori28.github.io/r-vision-BTS-SIO1/" -ForegroundColor $Cyan
    Write-Host ""
    Write-Host "⚙️  Prochaine étape :" -ForegroundColor $Yellow
    Write-Host "   1. Va sur https://github.com/flaori28/r-vision-BTS-SIO1" -ForegroundColor $Cyan
    Write-Host "   2. Settings → Pages" -ForegroundColor $Cyan
    Write-Host "   3. Source: main branch" -ForegroundColor $Cyan
    Write-Host "   4. Save" -ForegroundColor $Cyan
    Write-Host ""
    Write-Host "   ⏳ Attends 1-2 minutes et actualise ton site" -ForegroundColor $Cyan
} else {
    Write-Host ""
    Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor $Red
    Write-Host "║              ❌ ERREUR LORS DU PUSH ❌                   ║" -ForegroundColor $Red
    Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor $Red
    Write-Host ""
    Write-Host "💡 Vérifie :" -ForegroundColor $Yellow
    Write-Host "   • Le token est correct" -ForegroundColor $Cyan
    Write-Host "   • Le token a l'accès 'repo'" -ForegroundColor $Cyan
    Write-Host "   • La connexion internet fonctionne" -ForegroundColor $Cyan
    Write-Host ""
}

# Nettoie la config (enlève le token)
Write-Host ""
Write-Host "🔒 Nettoyage des credentials..." -ForegroundColor $Yellow
git remote set-url origin "https://github.com/flaori28/r-vision-BTS-SIO1.git"

Write-Host "✅ Done !" -ForegroundColor $Green
Write-Host ""

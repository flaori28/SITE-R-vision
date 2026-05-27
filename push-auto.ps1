#!/usr/bin/env powershell
# Script de Push Automatique avec Gestion d'Erreurs
# ==================================================

Write-Host "
╔════════════════════════════════════════════════════════════╗
║           🚀 PUSH AUTOMATIQUE VERS GITHUB 🚀              ║
╚════════════════════════════════════════════════════════════╝
" -ForegroundColor Cyan

Set-Location C:\BTS-SIO-Revision

# Configure Git Credential Manager
Write-Host "⚙️  Configuration de Git..." -ForegroundColor Yellow
git config --global credential.helper manager
git config --global user.name "flaori28"
git config --global user.email "flaori28@github.com"

Write-Host "🚀 Lancement du push..." -ForegroundColor Yellow
Write-Host ""

# Essaie le push
$output = git push origin main 2>&1
$success = $?

if ($success) {
    Write-Host "
╔════════════════════════════════════════════════════════════╗
║                  ✅ PUSH RÉUSSI ! ✅                       ║
╚════════════════════════════════════════════════════════════╝
" -ForegroundColor Green

    Write-Host "📊 Résultat du push :" -ForegroundColor Green
    Write-Host $output -ForegroundColor White
    
    Write-Host ""
    Write-Host "🌐 Prochaines étapes :" -ForegroundColor Cyan
    Write-Host "  1. Va sur : https://github.com/flaori28/r-vision-BTS-SIO1" -ForegroundColor White
    Write-Host "  2. Clique : Settings → Pages" -ForegroundColor White
    Write-Host "  3. Source : Deploy from a branch" -ForegroundColor White
    Write-Host "  4. Branch : main / Folder: /(root)" -ForegroundColor White
    Write-Host "  5. Clique : Save" -ForegroundColor White
    Write-Host "  6. Attends 1-2 minutes..." -ForegroundColor White
    Write-Host ""
    Write-Host "🎉 Ton site sera bientôt en ligne :" -ForegroundColor Green
    Write-Host "  https://flaori28.github.io/r-vision-BTS-SIO1/" -ForegroundColor Magenta
    
} else {
    Write-Host "
╔════════════════════════════════════════════════════════════╗
║              ❌ ERREUR LORS DU PUSH ❌                     ║
╚════════════════════════════════════════════════════════════╝
" -ForegroundColor Red

    Write-Host "📋 Message d'erreur :" -ForegroundColor Yellow
    Write-Host $output -ForegroundColor White
    
    Write-Host ""
    Write-Host "💡 Solutions possibles :" -ForegroundColor Cyan
    Write-Host "  1. Essaie à nouveau (peut-être un timeout réseau)" -ForegroundColor White
    Write-Host "  2. Utilise GitHub Desktop : https://desktop.github.com" -ForegroundColor White
    Write-Host "  3. Utilise GitHub Web :" -ForegroundColor White
    Write-Host "     → https://github.com/flaori28/r-vision-BTS-SIO1" -ForegroundColor White
    Write-Host "     → Clique 'Add file' → 'Upload files'" -ForegroundColor White
    Write-Host "     → Drag & drop C:\BTS-SIO-Revision\" -ForegroundColor White
    Write-Host ""
}

Write-Host "Appuie sur une touche pour fermer..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

#!/usr/bin/env powershell
# Script de Push Automatique vers GitHub
# ========================================

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  PUSH AUTOMATIQUE VERS GITHUB" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

Set-Location C:\BTS-SIO-Revision

# Configure Git
Write-Host "Configuration de Git..." -ForegroundColor Yellow
git config --global credential.helper manager
git config --global user.name "flaori28"
git config --global user.email "admin@github.com"

Write-Host "Lancement du push vers GitHub..." -ForegroundColor Yellow
Write-Host ""

# Push
$output = git push origin main 2>&1
$success = $?

if ($success) {
    Write-Host ""
    Write-Host "================================================" -ForegroundColor Green
    Write-Host "  PUSH REUSSI !" -ForegroundColor Green
    Write-Host "================================================" -ForegroundColor Green
    Write-Host ""
    
    Write-Host "Resultat :" -ForegroundColor Green
    Write-Host $output -ForegroundColor White
    
    Write-Host ""
    Write-Host "Prochaines etapes :" -ForegroundColor Cyan
    Write-Host "  1. Va sur : https://github.com/flaori28/r-vision-BTS-SIO1" -ForegroundColor White
    Write-Host "  2. Clique Settings -> Pages" -ForegroundColor White
    Write-Host "  3. Source: Deploy from a branch" -ForegroundColor White
    Write-Host "  4. Branch: main / Folder: /(root)" -ForegroundColor White
    Write-Host "  5. Clique Save" -ForegroundColor White
    Write-Host "  6. Attends 1-2 minutes" -ForegroundColor White
    Write-Host ""
    Write-Host "Ton site sera en ligne :" -ForegroundColor Green
    Write-Host "  https://flaori28.github.io/r-vision-BTS-SIO1/" -ForegroundColor Magenta
    
} else {
    Write-Host ""
    Write-Host "================================================" -ForegroundColor Red
    Write-Host "  ERREUR LORS DU PUSH" -ForegroundColor Red
    Write-Host "================================================" -ForegroundColor Red
    Write-Host ""
    
    Write-Host "Message d'erreur :" -ForegroundColor Yellow
    Write-Host $output -ForegroundColor White
    
    Write-Host ""
    Write-Host "Solutions :" -ForegroundColor Cyan
    Write-Host "  1. Essaie a nouveau (timeout reseau)" -ForegroundColor White
    Write-Host "  2. Utilise GitHub Desktop: https://desktop.github.com" -ForegroundColor White
    Write-Host "  3. Utilise GitHub Web upload :" -ForegroundColor White
    Write-Host "     https://github.com/flaori28/r-vision-BTS-SIO1" -ForegroundColor White
    Write-Host ""
}

Write-Host "Appuie sur une touche pour fermer..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

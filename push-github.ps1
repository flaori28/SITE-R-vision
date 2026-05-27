# Script PowerShell pour pusher sur GitHub automatiquement

param(
    [Parameter(Mandatory=$true)]
    [string]$GitHubToken
)

Write-Host "🚀 PUSH AUTOMATIQUE SUR GITHUB" -ForegroundColor Green
Write-Host ""

$projectPath = "C:\BTS-SIO-Revision"
$repoUrl = "https://flaori28:$GitHubToken@github.com/flaori28/r-vision-BTS-SIO1.git"

# Vérifier que le dossier existe
if (-not (Test-Path $projectPath)) {
    Write-Host "❌ Erreur : Le dossier $projectPath n'existe pas" -ForegroundColor Red
    exit 1
}

cd $projectPath

Write-Host "📂 Dossier de travail : $projectPath" -ForegroundColor Cyan
Write-Host ""

# Vérifier l'état Git
Write-Host "📋 Vérification du statut Git..." -ForegroundColor Yellow
git status
Write-Host ""

# Configurer le remote
Write-Host "🔗 Configuration du remote GitHub..." -ForegroundColor Yellow
git remote set-url origin $repoUrl
Write-Host "✅ Remote configuré" -ForegroundColor Green
Write-Host ""

# Pousser le code
Write-Host "📤 Lancement du push..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ PUSH RÉUSSI !" -ForegroundColor Green
    Write-Host ""
    Write-Host "🌐 Ton site sera accessible sur :" -ForegroundColor Cyan
    Write-Host "   https://flaori28.github.io/r-vision-BTS-SIO1/" -ForegroundColor Magenta
    Write-Host ""
    Write-Host "📍 Ton repository :" -ForegroundColor Cyan
    Write-Host "   https://github.com/flaori28/r-vision-BTS-SIO1" -ForegroundColor Magenta
    Write-Host ""
    Write-Host "⏳ Le site mettra 1-2 minutes avant d'être accessible" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "❌ ERREUR LORS DU PUSH" -ForegroundColor Red
    Write-Host "Vérifie :" -ForegroundColor Yellow
    Write-Host "  1. Ta connexion Internet" -ForegroundColor White
    Write-Host "  2. Que le token est valide" -ForegroundColor White
    Write-Host "  3. Que le repository existe sur GitHub" -ForegroundColor White
}

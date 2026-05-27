# BTS SIO Revision Platform - Startup Script (PowerShell)
# Usage: .\start.ps1

Write-Host "========================================" -ForegroundColor Green
Write-Host "BTS SIO 1ère Année - Platform Révision" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# Set location to script directory
Set-Location $PSScriptRoot

# Check Python installation
Write-Host "Vérification de Python..." -ForegroundColor Yellow
$pythonCheck = python --version 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERREUR] Python n'est pas installé ou non accessible" -ForegroundColor Red
    Write-Host "Téléchargez Python depuis : https://www.python.org/downloads/" -ForegroundColor Red
    Read-Host "Appuyez sur Entrée pour quitter"
    exit 1
}

Write-Host "✓ Python détecté : $pythonCheck" -ForegroundColor Green
Write-Host ""

# Start server
Write-Host "Démarrage du serveur sur http://localhost:8000" -ForegroundColor Cyan
Write-Host "Appuyez sur Ctrl+C pour arrêter" -ForegroundColor Yellow
Write-Host ""

try {
    python -m http.server 8000
} catch {
    Write-Host "Erreur lors du démarrage du serveur" -ForegroundColor Red
    Read-Host "Appuyez sur Entrée pour quitter"
    exit 1
}

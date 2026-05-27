@echo off
REM BTS SIO Revision Platform - Startup Script
REM Démarrage du serveur local avec Python

title BTS SIO - Local Server
color 0A

echo.
echo ========================================
echo BTS SIO 1ère Année - Platform Révision
echo ========================================
echo.
echo Démarrage du serveur local...
echo.

cd /d "%~dp0"

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERREUR] Python n'est pas installé ou non accessible via PATH
    echo Téléchargez Python depuis : https://www.python.org/downloads/
    echo.
    pause
    exit /b 1
)

REM Start Python HTTP server
echo Serveur démarré sur : http://localhost:8000
echo.
echo Appuyez sur Ctrl+C pour arrêter le serveur
echo.

python -m http.server 8000

pause

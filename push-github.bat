@echo off
REM Script pour pusher le code sur GitHub facilement
REM Usage: push-github.bat [token]

setlocal enabledelayedexpansion

echo.
echo ============================================================
echo        PUSH GITHUB - BTS SIO REVISION PLATFORM
echo ============================================================
echo.

REM Chemin du projet
set "PROJECT_PATH=C:\BTS-SIO-Revision"

REM Vérifier que le dossier existe
if not exist "%PROJECT_PATH%" (
    echo Erreur : Le dossier %PROJECT_PATH% n'existe pas
    pause
    exit /b 1
)

cd /d "%PROJECT_PATH%"

echo [INFO] Dossier de travail : %PROJECT_PATH%
echo.

REM Si le token est fourni en paramètre
if not "%~1"=="" (
    set "TOKEN=%~1"
    echo [INFO] Token fourni en paramètre
) else (
    echo.
    echo [!] IMPORTANT : Tu dois créer un token sur GitHub
    echo    1. Va sur : https://github.com/settings/tokens/new
    echo    2. Connecte-toi avec : flaori28
    echo    3. Scopes : Coche 'repo'
    echo    4. Copie le token généré
    echo.
    set /p TOKEN="[?] Colle ton token GitHub ici : "
)

if "!TOKEN!"=="" (
    echo Erreur : Aucun token fourni
    pause
    exit /b 1
)

echo.
echo [INFO] Vérification du statut Git...
git status
echo.

echo [INFO] Configuration du remote GitHub...
set "REPO_URL=https://flaori28:!TOKEN!@github.com/flaori28/r-vision-BTS-SIO1.git"
git remote set-url origin !REPO_URL!
echo [OK] Remote configuré
echo.

echo [INFO] Lancement du push...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ============================================================
    echo [OK] PUSH RÉUSSI !
    echo ============================================================
    echo.
    echo URL du site : https://flaori28.github.io/r-vision-BTS-SIO1/
    echo Repository : https://github.com/flaori28/r-vision-BTS-SIO1
    echo.
    echo [!] Attends 1-2 minutes avant d'accéder au site
    echo.
) else (
    echo.
    echo ============================================================
    echo [ERREUR] Le push a échoué
    echo ============================================================
    echo.
    echo Vérifie :
    echo   1. Ta connexion Internet
    echo   2. Que le token est valide
    echo   3. Que le repository existe sur GitHub
    echo.
)

pause

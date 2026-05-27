@echo off
REM Script de Push Automatique avec Git Credential Manager
REM ======================================================

cd /d C:\BTS-SIO-Revision

echo.
echo ========================================
echo    PUSH VERS GITHUB - BTS SIO REVISION
echo ========================================
echo.

REM Configure Git pour utiliser le credential manager
git config --global credential.helper manager

echo Configuration du credential helper...
echo.

REM Essaie le push (Git Credential Manager va demander les identifiants)
echo Tentative de push vers GitHub...
echo.

git push origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo    ✓ PUSH REUSSI !
    echo ========================================
    echo.
    echo Site en ligne sur :
    echo https://flaori28.github.io/r-vision-BTS-SIO1/
    echo.
    echo Prochaines etapes :
    echo 1. Va sur https://github.com/flaori28/r-vision-BTS-SIO1
    echo 2. Settings ^> Pages
    echo 3. Source: main / /(root)
    echo 4. Save
    echo 5. Attends 1-2 minutes
    echo.
) else (
    echo.
    echo ========================================
    echo    ERREUR LORS DU PUSH
    echo ========================================
    echo.
    echo Options :
    echo 1. Essaie a nouveau (peut-etre un timeout reseau)
    echo 2. Utilise GitHub Desktop (https://desktop.github.com)
    echo 3. Utilise GitHub Web (https://github.com/flaori28/r-vision-BTS-SIO1)
    echo    Clique Add file ^> Upload files
    echo.
)

pause

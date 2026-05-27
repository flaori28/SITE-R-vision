@echo off
REM Script de push sur GitHub avec token
REM ======================================

cd /d C:\BTS-SIO-Revision

echo.
echo ========================================
echo    PUSH SUR GITHUB - BTS SIO REVISION
echo ========================================
echo.

REM Demande le token à l'utilisateur
set /p TOKEN="Rentre ton Personal Access Token (GitHub) : "

if "%TOKEN%"=="" (
    echo.
    echo ERREUR : Token vide !
    echo.
    pause
    exit /b 1
)

echo.
echo Configuration du token...
git remote set-url origin "https://flaori28:%TOKEN%@github.com/flaori28/r-vision-BTS-SIO1.git"

echo.
echo Envoi des fichiers vers GitHub...
git push origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo     ✓ PUSH REUSSI !
    echo ========================================
    echo.
    echo Site en ligne sur :
    echo https://flaori28.github.io/r-vision-BTS-SIO1/
    echo.
    echo Pensez a activer GitHub Pages dans :
    echo Settings ^> Pages ^> Source: main branch
    echo.
) else (
    echo.
    echo ERREUR lors du push !
    echo.
)

REM Nettoie la config (enleve le token stocké)
git remote set-url origin "https://github.com/flaori28/r-vision-BTS-SIO1.git"

pause

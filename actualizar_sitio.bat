@echo off
echo ===================================================
echo   ACTUALIZADOR AUTOMATICO DE SITIO WEB (ALICA)
echo ===================================================
echo.
echo Espere mientras se guardan y suben los cambios...
echo.

:: 1. Agregar todos los cambios
git add .

:: 2. Crear el "paquete" (commit) con un mensaje automatico
git commit -m "Actualizacion automatica (un click)"

:: 3. Enviar a la nube (GitHub/Vercel)
echo.
echo Subiendo a GitHub...
git push origin main

echo.
echo ===================================================
echo   LISTO! Los cambios se han subido.
echo   El sitio web se actualizara en unos minutos.
echo ===================================================
echo.
pause

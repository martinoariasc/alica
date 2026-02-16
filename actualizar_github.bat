@echo off
echo ========================================
echo   ACTUALIZANDO TU GITHUB AUTOMATICAMENTE
echo ========================================
echo.
echo 1. Buscando cambios...
git add .
echo.
echo 2. Guardando cambios...
git commit -m "Actualizacion automatica (un click)"
echo.
echo 3. Subiendo a la nube...
git push
echo.
echo ========================================
echo   LISTO! Todo actualizado en GitHub.
echo ========================================
timeout /t 5

@echo off
setlocal enabledelayedexpansion

:: Configuración de colores (solo funciona en terminales modernos, pero es seguro)
echo ===================================================
echo    ALICA PREMIUM - ASISTENTE DE ACTUALIZACION
echo ===================================================
echo.
echo [1/4] Verificando conexion con el servidor...
git fetch origin

echo.
echo [2/4] Sincronizando datos remotos...
git pull origin main --rebase

echo.
echo [3/4] Preparando tus cambios...
git add .

:: Verificar si hay cambios antes de hacer commit
git status --porcelain > nul
if errorlevel 1 (
    echo.
    echo [!] No se detectaron cambios nuevos para subir.
) else (
    echo.
    echo [3b/4] Guardando cambios de forma segura...
    git commit -m "Actualizacion automatica: %date% %time%"
)

echo.
echo [4/4] Subiendo a la nube (GitHub/Vercel)...
git push origin main

if %errorlevel% neq 0 (
    echo.
    echo ---------------------------------------------------
    echo   ERROR: No se pudieron subir los cambios.
    echo   Asegurate de tener conexion a internet.
    echo ---------------------------------------------------
) else (
    echo.
    echo ===================================================
    echo   ¡LISTO! Tu tienda Alica ha sido actualizada.
    echo   Los cambios seran visibles en 1-2 minutos.
    echo ===================================================
)

echo.
echo Presiona cualquier tecla para cerrar esta ventana...
pause > nul

@echo off
title Starting Portfolio Project Dev Server...
echo ====================================================
echo   Portfolio Web Application - Development Server
echo ====================================================
echo.

if not exist "node_modules\" (
    echo [INFO] node_modules not found. Installing dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] npm install failed. Please check errors above.
        pause
        exit /b %errorlevel%
    )
)

echo [INFO] Launching Vite development server...
echo.
call npm run dev -- --open

pause

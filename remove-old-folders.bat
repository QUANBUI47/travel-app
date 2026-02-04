@echo off
REM Xoa cac thu muc cu (app, config, components, styles, types) o root
cd /d "%~dp0"

if exist "app" (
  rmdir /s /q "app"
  echo Da xoa thu muc: app
)
if exist "config" (
  rmdir /s /q "config"
  echo Da xoa thu muc: config
)
if exist "components" (
  rmdir /s /q "components"
  echo Da xoa thu muc: components
)
if exist "styles" (
  rmdir /s /q "styles"
  echo Da xoa thu muc: styles
)
if exist "types" (
  rmdir /s /q "types"
  echo Da xoa thu muc: types
)

echo.
echo Xong. Cac thu muc cu da duoc xoa. Du an chi con cau truc src/
pause

@echo off
cd /d "%~dp0"

echo Xoa cac thu muc ban-do, di-tich-lich-su, du-an, gioi-thieu, tin-tuc...

if exist "src\app\(public)\ban-do" rmdir /s /q "src\app\(public)\ban-do"
if exist "src\app\(public)\di-tich-lich-su" rmdir /s /q "src\app\(public)\di-tich-lich-su"
if exist "src\app\(public)\du-an" rmdir /s /q "src\app\(public)\du-an"
if exist "src\app\(public)\gioi-thieu" rmdir /s /q "src\app\(public)\gioi-thieu"
if exist "src\app\(public)\tin-tuc" rmdir /s /q "src\app\(public)\tin-tuc"

if exist "src\components\ban-do" rmdir /s /q "src\components\ban-do"
if exist "src\components\gioi-thieu" rmdir /s /q "src\components\gioi-thieu"
if exist "src\components\du-an" rmdir /s /q "src\components\du-an"
if exist "src\components\tin-tuc" rmdir /s /q "src\components\tin-tuc"

if exist "src\components\sections" rmdir /s /q "src\components\sections"

echo Xong.
pause

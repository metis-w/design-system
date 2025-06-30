@echo off
setlocal enabledelayedexpansion

REM Script to bump version and prepare for release
REM Usage: release.bat patch|minor|major

if "%1"=="" (
    echo Usage: %0 ^<patch^|minor^|major^>
    echo Example: %0 patch
    exit /b 1
)

set VERSION_TYPE=%1

REM Validate version type
if not "%VERSION_TYPE%"=="patch" if not "%VERSION_TYPE%"=="minor" if not "%VERSION_TYPE%"=="major" (
    echo Error: Version type must be 'patch', 'minor', or 'major'
    exit /b 1
)

echo 🚀 Preparing %VERSION_TYPE% release...

REM Get current version
for /f "tokens=*" %%i in ('node -p "require('./package.json').version"') do set CURRENT_VERSION=%%i
echo Current version: %CURRENT_VERSION%

REM Bump version
npm version %VERSION_TYPE% --no-git-tag-version

REM Get new version
for /f "tokens=*" %%i in ('node -p "require('./package.json').version"') do set NEW_VERSION=%%i
echo New version: %NEW_VERSION%

REM Build the project
echo 📦 Building project...
npm run build

REM Instructions
echo.
echo ✅ Version bumped to %NEW_VERSION%
echo.
echo Next steps:
echo 1. Update CHANGELOG.md with new changes
echo 2. Commit changes: git add . ^&^& git commit -m "chore: bump version to %NEW_VERSION%"
echo 3. Push to main: git push origin main
echo 4. GitHub Actions will automatically publish to NPM

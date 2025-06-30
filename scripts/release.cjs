#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const versionType = process.argv[2];

if (!versionType || !['patch', 'minor', 'major'].includes(versionType)) {
    console.log('Usage: node release.js <patch|minor|major>');
    console.log('Example: node release.js patch');
    process.exit(1);
}

try {
    console.log(`🚀 Preparing ${versionType} release...`);
    
    // Get current version
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const currentVersion = packageJson.version;
    console.log(`Current version: ${currentVersion}`);
    
    // Bump version
    execSync(`npm version ${versionType} --no-git-tag-version`, { stdio: 'inherit' });
    
    // Get new version
    const newPackageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const newVersion = newPackageJson.version;
    console.log(`New version: ${newVersion}`);
    
    // Build the project
    console.log('📦 Building project...');
    execSync('npm run build', { stdio: 'inherit' });
    
    console.log('');
    console.log(`✅ Version bumped to ${newVersion}`);
    console.log('');
    console.log('Next steps:');
    console.log(`1. Commit changes: git add . && git commit -m "chore: bump version to ${newVersion}"`);
    console.log('2. Push to main: git push origin main');
    console.log('3. GitHub Actions will automatically publish to NPM');
    
} catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
}

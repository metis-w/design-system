# Release Automation Setup

This project uses GitHub Actions to automatically publish to NPM when the version in `package.json` changes.

## Setup Instructions

### 1. Create NPM Access Token

1. Go to [npmjs.com](https://www.npmjs.com) and login
2. Go to **Access Tokens** in your account settings
3. Click **Generate New Token**
4. Choose **Automation** type
5. Copy the token

### 2. Add NPM Token to GitHub Secrets

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `NPM_TOKEN`
5. Value: Paste your NPM token
6. Click **Add secret**

### 3. Publish to NPM Registry (First Time)

For the first publish, you need to do it manually:

```bash
npm login
npm publish
```

## Usage

### Option 1: Using npm scripts (Recommended)

```bash
# Patch release (1.0.0 → 1.0.1)
npm run release:patch

# Minor release (1.0.0 → 1.1.0)  
npm run release:minor

# Major release (1.0.0 → 2.0.0)
npm run release:major
```

### Option 2: Manual version bump

```bash
# Bump version manually
npm version patch  # or minor/major

# Update CHANGELOG.md with changes

# Commit and push
git add .
git commit -m "chore: bump version to x.x.x"
git push origin main
```

## What Happens Automatically

When you push changes with a version bump:

1. **GitHub Actions detects** version change in `package.json`
2. **Runs tests** and builds the project
3. **Publishes to NPM** automatically
4. **Creates GitHub Release** with release notes
5. **Tags the commit** with version number

## Workflow Overview

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│  npm run        │    │  git push        │    │  GitHub Actions │
│  release:patch  │───▶│  origin main     │───▶│  auto publish   │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## File Structure

```
.github/
└── workflows/
    └── publish.yml          # GitHub Actions workflow

scripts/
├── release.js              # Cross-platform release script
├── release.sh              # Linux/Mac release script  
└── release.bat             # Windows release script
```

## Troubleshooting

**NPM publish fails:**
- Check NPM_TOKEN secret is set correctly
- Verify you have publish rights to @metis-w scope
- Ensure version number is unique (not already published)

**Version not detected:**
- Make sure `package.json` version actually changed
- Check the commit includes `package.json` changes

**GitHub release fails:**
- Verify GITHUB_TOKEN permissions in repository settings

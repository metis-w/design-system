#!/bin/bash

# Script to bump version and prepare for release
# Usage: ./scripts/release.sh patch|minor|major

set -e

if [ $# -eq 0 ]; then
    echo "Usage: $0 <patch|minor|major>"
    echo "Example: $0 patch"
    exit 1
fi

VERSION_TYPE=$1

# Validate version type
if [[ ! "$VERSION_TYPE" =~ ^(patch|minor|major)$ ]]; then
    echo "Error: Version type must be 'patch', 'minor', or 'major'"
    exit 1
fi

echo "🚀 Preparing $VERSION_TYPE release..."

# Get current version
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo "Current version: $CURRENT_VERSION"

# Bump version
npm version $VERSION_TYPE --no-git-tag-version

# Get new version
NEW_VERSION=$(node -p "require('./package.json').version")
echo "New version: $NEW_VERSION"

# Build the project
echo "📦 Building project..."
npm run build

# Update CHANGELOG
echo "📝 Don't forget to update CHANGELOG.md with new changes!"

# Instructions
echo ""
echo "✅ Version bumped to $NEW_VERSION"
echo ""
echo "Next steps:"
echo "1. Update CHANGELOG.md with new changes"
echo "2. Commit changes: git add . && git commit -m 'chore: bump version to $NEW_VERSION'"
echo "3. Push to main: git push origin main"
echo "4. GitHub Actions will automatically publish to NPM"

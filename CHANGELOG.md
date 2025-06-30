# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.1 - 1.0.4] - 2025-06-30

### Fixed
- Fixed release scripts to work with ES modules
- Updated GitHub Actions workflow for automatic NPM publishing

## [1.0.0] - 2025-06-30

### Added
- Initial release of Metis Design System
- React + TypeScript + Tailwind CSS v4 setup
- Universal CSS module detection and separate output files
- Base styles with custom color variables
- Typography styles with modern font stacks
- Button component with primary, secondary, and accent variants
- `cn` utility function for combining classes (clsx + tailwind-merge)
- Automatic NPM publishing via GitHub Actions on version changes
- Cross-platform release scripts (release.sh, release.bat, release.cjs)
- Comprehensive documentation and usage examples

### Features
- **Colors**: Primary (#00b894), Secondary (#0984e3), Accent (#6c5ce7)
- **CSS Variables**: Available as `--color-primary`, `--color-secondary`, `--color-accent`
- **Utility Classes**: `.bg-primary`, `.text-primary`, etc.
- **Universal Imports**: Support for both ES modules and CommonJS
- **Tailwind Integration**: Easy setup for Next.js projects
- **Type Safety**: Full TypeScript support with declarations

[Unreleased]: https://github.com/metis-w/design-system/compare/v1.0.1...HEAD
[1.0.1]: https://github.com/metis-w/design-system/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/metis-w/design-system/releases/tag/v1.0.0

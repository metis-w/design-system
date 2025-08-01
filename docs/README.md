# Design System

A simple, responsive, and scalable design system built with Tailwind CSS. This MVP version focuses on essential design tokens and components to help us build consistent user interfaces quickly.

## Installation

```bash
npm install @metis-w/design-system
```

## Quick Start

Import the design system in your main CSS file:

```css
@import "@metis-w/design-system/styles";
```

## What's Included

### 🎨 Colours

-   **Primitive Colours**: Full colour palettes for purple, red, blue, green, yellow and neutral
-   **Semantic Colours**: Purpose-driven colour tokens for surfaces, containers, text, borders and actions
-   **Consistent Naming**: Clear, predictable naming convention across all colour tokens

### 📝 Typography

-   **Responsive Scale**: From label-sm (12px) to title-lg (32px)
-   **Semantic Classes**: Purpose-driven typography classes like `text-ui-title-base`, `text-ui-body-lg`
-   **Consistent Line Heights**: Optimised line heights for readability

### 🎯 Focus on Simplicity

-   Minimal learning curve
-   Intuitive naming conventions
-   Essential tokens only

### 📱 Responsive by Design

-   Scalable typography system
-   Flexible colour system

### 🔧 Scalable Architecture

-   CSS custom properties for easy theming
-   Semantic token structure
-   Built on Tailwind CSS for extensibility

## Usage Examples

### Colours

```html
<!-- Surface colours -->
<div class="bg-surf-pr text-text-pr">Primary surface</div>
<div class="bg-surf-sec text-text-sec">Secondary surface</div>

<!-- Container colours -->
<div class="bg-cont-suc text-text-suc">Success container</div>
<div class="bg-cont-rev text-text-rev">Review container</div>

<!-- Action colours -->
<button class="bg-aa text-text-aa">Primary action</button>
<button class="bg-asec text-text-asec">Secondary action</button>
```

### Typography

```html
<!-- Titles -->
<h1 class="text-ui-title-lg">Large title</h1>
<h2 class="text-ui-title-base">Base title</h2>
<h3 class="text-ui-title-sm">Small title</h3>

<!-- Body text -->
<p class="text-ui-body-lg">Large body text</p>
<p class="text-ui-body-base">Base body text</p>
<p class="text-ui-body-sm">Small body text</p>

<!-- Labels -->
<label class="text-ui-label-lg">Large label</label>
<span class="text-ui-label-base">Base label</span>
<small class="text-ui-label-sm">Small label</small>
```

## Documentation

-   [Colours Documentation](./docs/colors.md) - Complete colour system guide
-   [Typography Documentation](./docs/typography.md) - Typography scale and usage
-   [Migration Guide](./docs/migration.md) - Upgrading from previous versions

## Roadmap

This is our MVP version focusing on core design tokens. Future releases will include:

-   Component library
-   Animation system
-   Dark mode support
-   Advanced theming capabilities
-   Additional colour palettes

## License

MIT License - see [LICENSE](./LICENSE) for details.

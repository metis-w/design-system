# Metis Design System

Design system library for Metis projects built with React, TypeScript, and Tailwind CSS v4.

[![NPM](https://nodei.co/npm/@metis-w/design-system.png)](https://npmjs.com/package/@metis-w/design-system)

## Installation

```bash
npm install @metis-w/design-system
```

## Usage in Next.js

### 1. Install the library

```bash
npm install @metis-w/design-system
```

### 2. Import styles in your app

Import the design system styles in your main app file (`layout.tsx` for Next.js):

```tsx
// In layout.tsx (Next.js) or your main app file
import '@metis-w/design-system/styles'; // Main styles (base.css)

// Or import specific style modules
import '@metis-w/design-system/styles/base';       // Colors + Tailwind
import '@metis-w/design-system/styles/typography'; // Typography styles

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

### 3. Configure Tailwind CSS in your Next.js project

Add the design system path to your `tailwind.config.js` and extend colors:

```js
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './node_modules/@metis-w/design-system/**/*.{js,ts,jsx,tsx}', // 👈 Important!
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      }
    }
  }
};
```

### 4. Import and use components

```tsx
import { Button, cn } from '@metis-w/design-system';

export default function Page() {
  return (
    <div>
      {/* Using design system components */}
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="accent">Accent Button</Button>
      
      {/* Using cn utility for combining classes */}
      <div className={cn("p-4", "bg-primary", "text-white")}>
        Combined classes with cn utility
      </div>
      
      {/* Using custom colors in your own components */}
      <div className="bg-primary text-white p-4">
        Primary background with white text
      </div>
      <h1 className="text-secondary text-2xl">
        Secondary colored heading
      </h1>
      <span className="text-accent">Accent colored text</span>
    </div>
  );
}
```

## Using Custom Colors

The design system provides colors in multiple ways:

### 1. CSS Variables (available everywhere after import)
```css
:root {
  --color-primary: #00b894;
  --color-secondary: #0984e3;
  --color-accent: #6c5ce7;
}
```

### 2. Utility Classes (from the design system)
```tsx
<div className="bg-primary text-white">Primary background</div>
<div className="bg-secondary text-white">Secondary background</div>
<div className="bg-accent text-white">Accent background</div>
```

### 3. Tailwind Classes (after config setup)
```tsx
<div className="bg-primary text-primary">Using Tailwind config</div>
<div className="bg-secondary text-secondary">Configured colors</div>
```

## Available Style Modules

The design system automatically detects and builds all CSS files from `src/styles/`:

- **`base.css`** - Tailwind CSS base styles + custom color variables and utilities
- **`typography.css`** - Font families, headings, body text, and typography utilities

You can import them individually:

```tsx
// Import specific modules
import '@metis-w/design-system/styles/base';       // Essential: colors + Tailwind
import '@metis-w/design-system/styles/typography'; // Typography styles

// Or all main styles at once
import '@metis-w/design-system/styles'; // Imports base.css
```

## Built-in Components & Utilities

### Components
- **`Button`** - Primary, secondary, and accent variants
- **`cn`** - Utility function for combining classes (clsx + tailwind-merge)

### Colors
- **Primary**: `#00b894` (Green)
- **Secondary**: `#0984e3` (Blue)  
- **Accent**: `#6c5ce7` (Purple)

Available as CSS variables (`--color-primary`) and utility classes (`.bg-primary`, `.text-primary`).

## Development

```bash
# Build the library
npm run build

# Watch mode for development
npm run dev
```

## Release Management

For information about creating releases and version management, see [RELEASE.md](./RELEASE.md).

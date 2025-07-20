# Colours

Our colour system is built on two layers: **Primitive Colours** and **Semantic Colours**. This approach ensures consistency while maintaining flexibility for future theming.

## Colour Architecture

### Primitive Colours

Base color palettes that form the foundation of our system:

-   **Purple**: `purple-50` to `purple-950`
-   **Red**: `red-50` to `red-950`
-   **Blue**: `blue-50` to `blue-950`
-   **Green**: `green-50` to `green-950`
-   **Yellow**: `yellow-50` to `yellow-950`
-   **Neutral**: `neutral-50` to `neutral-900`

### Semantic Colours

Purpose-driven colors that reference primitive colors:

## Surface Colours (surf)

Used for page and section backgrounds:

```css
--color-surf-pr: var(--color-white); /* Primary surface */
--color-surf-sec: var(--color-neutral-50); /* Secondary surface */
--color-surf-overlay: rgba(0, 0, 0, 0.48); /* Overlay/modal backdrop */
```

**Usage:**

```html
<div class="bg-surf-pr">Main content area</div>
<div class="bg-surf-sec">Secondary content area</div>
```

## Container Colours (cont)

Used for component backgrounds and containers:

```css
--color-cont-pr: var(--color-white); /* Primary container */
--color-cont-sec: var(--color-yellow-50); /* Secondary container */
--color-cont-a: var(--color-yellow-100); /* Attention container */
--color-cont-suc: var(--color-green-100); /* Success container */
--color-cont-rev: var(--color-blue-100); /* Review container */
--color-cont-ident: var(
    --color-purple-200
); /* Identity container used for avatars */
```

**Usage:**

```html
<div class="bg-cont-suc p-4 rounded">Success message</div>
<div class="bg-cont-rew p-4 rounded">Review notification</div>
```

## Text Colours

Hierarchical text colours for content:

```css
--color-text-pr: var(--color-neutral-950); /* Primary text */
--color-text-sec: var(--color-neutral-800); /* Secondary text */
--color-text-ter: var(--color-neutral-600); /* Tertiary text */
--color-text-a: var(--color-yellow-900); /* Attention text */
--color-text-suc: var(--color-green-900); /* Success text */
--color-text-rev: var(--color-blue-900); /* Review text */
--color-text-ident: var(--color-purple-900); /* Identity text */
```

**Usage:**

```html
<h1 class="text-text-pr">Primary heading</h1>
<p class="text-text-sec">Secondary body text</p>
<span class="text-text-ter">Tertiary caption</span>
<span class="text-text-suc">Success message</span>
```

## Border Colours

Consistent border styling:

```css
--color-border-default: var(--color-neutral-200); /* Default borders */
--color-border-ident: var(--color-purple-300); /* Identity borders */
--color-border-a: var(--color-yellow-200); /* Attention borders */
```

**Usage:**

```html
<div class="border border-border-default">Default border</div>
<div class="border border-border-ident">Identity border</div>
```

## Action Colours (a)

Button and interactive element colours:

### Primary Action (aa)

```css
--color-bg-aa: var(--color-yellow-500);
--color-bg-aa-hover: var(--color-yellow-400);
--color-bg-aa-pressed: var(--color-yellow-300);
--color-bg-aa-disabled: var(--color-yellow-200);
```

### Secondary Action (asec)

```css
--color-bg-asec: var(--color-neutral-50);
--color-bg-asec-hover: var(--color-neutral-100);
--color-bg-asec-pressed: var(--color-neutral-200);
```

### Success Action (asuc)

```css
--color-bg-asuc: var(--color-green-50);
--color-bg-asuc-hover: var(--color-green-100);
--color-bg-asuc-pressed: var(--color-green-200);
```

### Review Action (arev)

```css
--color-bg-arev: var(--color-blue-50);
--color-bg-arev-hover: var(--color-blue-100);
--color-bg-arev-pressed: var(--color-blue-200);
```

### Mistake Action (amist)

```css
--color-bg-amist: var(--color-red-50);
--color-bg-amist-hover: var(--color-red-100);
--color-bg-amist-pressed: var(--color-red-200);
```

**Usage:**

```html
<button class="bg-aa text-text-aa hover:bg-aa-hover">Primary Button</button>
<button class="bg-asec text-text-asec hover:bg-asec-hover">
    Secondary Button
</button>
<button class="bg-asuc text-text-asuc hover:bg-asuc-hover">
    Success Button
</button>
<button class="bg-amist text-text-amist hover:bg-amist-hover">
    Delete Button
</button>
```

## Input Colours (inp)

Form input styling:

```css
--color-bg-inp: var(--color-white); /* Input background */
--color-bg-inp-mistake: var(--color-red-50); /* Error state */
--color-bg-inp-disabled: var(--color-neutral-50); /* Disabled state */
--color-border-inp: var(--color-neutral-200); /* Default border */
--color-border-inp-focus: var(--color-neutral-400); /* Focus border */
--color-border-inp-mistake: var(--color-red-500); /* Error border */
```

**Usage:**

```html
<input class="bg-inp border border-inp focus:border-inp-focus" />
<input class="bg-inp-mistake border border-inp-mistake" />
```

## Progress Colours

Progress bar and loading states:

```css
--color-bg-track: var(--color-neutral-100); /* Progress track */
--color-bg-fill: var(--color-green-500); /* Progress fill */
```

## Best Practices

### Do's

-   Use semantic colours for consistent meaning across your application
-   Reference semantic colours in your CSS, not primitive colours directly
-   Use the appropriate text colour with each container colour
-   Maintain colour contrast ratios for accessibility

### Don'ts

-   Don't use primitive colours directly in components
-   Don't mix semantic colour categories (e.g., text colours for backgrounds)
-   Don't override semantic colours without considering system-wide impact

## Accessibility

All colour combinations meet WCAG AA contrast requirements:

-   Primary text on primary surfaces: 21:1 contrast ratio
-   Secondary text on primary surfaces: 7:1 contrast ratio
-   All action colours have sufficient contrast for text and focus states

## Customisation

To customise colours in your project:

```css
:root {
    /* Override semantic colours */
    --color-surf-pr: #f8f9fa;
    --color-text-pr: #1a1a1a;

    /* Or override primitive colours */
    --color-yellow-500: #f59e0b;
}
```

## Future Enhancements

-   Dark mode colour tokens
-   High contrast mode
-   Additional semantic colour categories
-   Dynamic colour generation utilities

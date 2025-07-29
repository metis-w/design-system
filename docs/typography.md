# Typography

Our typography system provides a consistent, scalable approach to text styling across your application. Built with responsive design principles and semantic naming conventions.

## Typography Scale

Our type system includes three main categories: **Titles**, **Body Text**, and **Labels**.

### Titles

Used for headings and primary content hierarchy:

| Class                | Size           | Line Height    | Font Weight    | Usage                           |
| -------------------- | -------------- | -------------- | -------------- | ------------------------------- |
| `typo-ui-title-lg`   | 32px (2rem)    | 40px (2.5rem)  | 600 (semibold) | Main page headings, hero titles |
| `typo-ui-title-base` | 24px (1.5rem)  | 32px (2rem)    | 600 (semibold) | Section headings, card titles   |
| `typo-ui-title-sm`   | 20px (1.25rem) | 28px (1.75rem) | 600 (semibold) | Subsection headings             |

### Subtitles

Used for secondary headings and emphasis:

| Class              | Size           | Line Height    | Font Weight  | Usage                             |
| ------------------ | -------------- | -------------- | ------------ | --------------------------------- |
| `typo-ui-subtitle` | 20px (1.25rem) | 28px (1.75rem) | 500 (medium) | Subtitle text, emphasized content |

### Body Text

Used for primary content and reading text:

| Class               | Size            | Line Height    | Font Weight  | Usage                          |
| ------------------- | --------------- | -------------- | ------------ | ------------------------------ |
| `typo-ui-body-lg`   | 18px (1.125rem) | 28px (1.75rem) | 400 (normal) | Large body text, introductions |
| `typo-ui-body-base` | 16px (1rem)     | 24px (1.5rem)  | 400 (normal) | Default body text, paragraphs  |
| `typo-ui-body-sm`   | 14px (0.875rem) | 20px (1.25rem) | 400 (normal) | Small body text, captions      |

### Labels

Used for UI elements, forms, and micro-copy:

| Class                | Size            | Line Height    | Font Weight  | Usage                     |
| -------------------- | --------------- | -------------- | ------------ | ------------------------- |
| `typo-ui-label-lg`   | 16px (1rem)     | 24px (1.5rem)  | 500 (medium) | Large labels, form labels |
| `typo-ui-label-base` | 14px (0.875rem) | 20px (1.25rem) | 500 (medium) | Default labels, buttons   |
| `typo-ui-label-sm`   | 12px (0.75rem)  | 16px (1rem)    | 500 (medium) | Small labels, metadata    |

> **Note:** Font weights are built into each typography class. No need to add additional `font-*` classes unless you specifically need to override the default weight.

## Usage Examples

### Semantic HTML Structure

```html
<!-- Page hierarchy -->
<h1 class="typo-ui-title-lg text-text-pr">Main Page Title</h1>

<div class="typo-ui-subtitle text-text-sec">
    Supporting subtitle or description
</div>

<h2 class="typo-ui-title-base text-text-pr">Section Heading</h2>

<p class="typo-ui-body-base text-text-pr">
    This is the main body text for reading content. It uses the base body size
    which is optimised for readability across devices.
</p>

<h3 class="typo-ui-title-sm text-text-pr">Subsection Heading</h3>

<p class="typo-ui-body-sm text-text-sec">
    This is smaller body text, perfect for captions, secondary information, or
    less prominent content.
</p>
```

## Built-in Font Weights

Each typography class includes an optimised font weight - no need to add additional `font-*` classes:

-   **Titles** (`typo-ui-title-*`): `font-weight: 600` (semibold)
-   **Subtitles** (`typo-ui-subtitle`): `font-weight: 500` (medium)
-   **Body text** (`typo-ui-body-*`): `font-weight: 400` (normal)
-   **Labels** (`typo-ui-label-*`): `font-weight: 500` (medium)

```html
<!-- ✅ Good - font weight is already included -->
<h1 class="typo-ui-title-lg">Perfect heading</h1>
<p class="typo-ui-body-base">Perfect body text</p>
<label class="typo-ui-label-base">Perfect label</label>

<!-- ❌ Unnecessary - font weight is already set -->
<h1 class="typo-ui-title-lg font-semibold">Redundant weight</h1>

<!-- ✅ Override when needed -->
<h1 class="typo-ui-title-lg font-bold">Custom bold heading</h1>
```

## Responsive Typography

Our typography system is inherently responsive through relative units (rem) and optimised line heights. For additional responsive behavior:

```html
<!-- Responsive title sizing -->
<h1 class="typo-ui-title-base md:text-ui-title-lg">Responsive Heading</h1>

<!-- Responsive body text -->
<p class="typo-ui-body-sm md:text-ui-body-base">
    This text scales up on larger screens
</p>
```

## Accessibility Considerations

### Line Height

All typography classes include optimised line heights:

-   **Titles**: 1.25x font size for clear hierarchy
-   **Body text**: 1.5x font size for comfortable reading
-   **Labels**: 1.33x font size for compact UI elements

### Colour Contrast

Always pair typography with appropriate text colours:

```html
<!-- Good contrast examples -->
<h1 class="typo-ui-title-lg text-text-pr">High contrast heading</h1>
<p class="typo-ui-body-base text-text-sec">Medium contrast body</p>
<span class="typo-ui-label-sm text-text-ter">Lower contrast metadata</span>
```

### Focus Management

Ensure interactive text elements have proper focus states:

```html
<button
    class="typo-ui-label-base focus:outline-none focus:ring-2 focus:ring-ring-inp-focus"
>
    Accessible Button
</button>
```

## Custom Properties

Typography classes use CSS custom properties for easy customisation:

```css
/* Default values */
:root {
    --text-ui-title-lg: 2rem;
    --leading-ui-title-lg: 2.5rem;

    --text-ui-body-base: 1rem;
    --leading-ui-body-base: 1.5rem;
}

/* Custom overrides */
.custom-theme {
    --text-ui-title-lg: 2.5rem;
    --leading-ui-title-lg: 3rem;
}
```

## Best Practices

### Do's

-   Use semantic HTML elements with typography classes
-   Maintain consistent hierarchy with title sizes
-   Pair typography with appropriate text colours
-   Use line height for comfortable reading experiences
-   Consider responsive scaling for better mobile experience

### Don'ts

-   Don't skip heading levels (h1 → h3 without h2)
-   Don't use title classes for body content
-   Don't override line heights without considering readability
-   Don't use colour without considering contrast ratios

## Implementation Notes

### CSS Layer

Typography utilities are defined in the `@layer utilities` to ensure proper cascade:

```css
@layer utilities {
    .text-ui-title-lg {
        font-size: var(--text-ui-title-lg);
        line-height: var(--leading-ui-title-lg);
        font-weight: 600;
    }

    .text-ui-body-base {
        font-size: var(--text-ui-body-base);
        line-height: var(--leading-ui-body-base);
        font-weight: 400;
    }
}
```

### Tailwind Integration

These classes work seamlessly with Tailwind utilities:

```html
<h1 class="typo-ui-title-lg text-text-pr mb-4 max-w-3xl">
    Typography with Tailwind utilities
</h1>
```

## Future Enhancements

-   Fluid typography for smoother responsive scaling
-   Additional semantic typography roles
-   Advanced line height controls
-   Letter spacing optimisations
-   Font loading optimisation utilities

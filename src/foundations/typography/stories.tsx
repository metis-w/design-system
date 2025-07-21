import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Foundations/Typography",
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const AllTypography: Story = {
    render: () => (
        <div className="space-y-8">
            {/* Titles */}
            <div className="space-y-4">
                <h2 className="text-ui-title-base text-text-pr border-b border-border-default pb-2">
                    Titles
                </h2>
                <div className="space-y-3">
                    <div>
                        <h1 className="typo-ui-title-lg text-text-pr">
                            Title Large (2rem / 32px)
                        </h1>
                        <p className="text-ui-body-sm text-text-ter mt-1">
                            .text-ui-title-lg - font-size: 2rem, line-height:
                            2.5rem, font-weight: 600
                        </p>
                    </div>
                    <div>
                        <h2 className="text-ui-title-base text-text-pr">
                            Title Base (1.5rem / 24px)
                        </h2>
                        <p className="text-ui-body-sm text-text-ter mt-1">
                            .text-ui-title-base - font-size: 1.5rem,
                            line-height: 2rem, font-weight: 600
                        </p>
                    </div>
                    <div>
                        <h3 className="text-ui-title-sm text-text-pr">
                            Title Small (1.25rem / 20px)
                        </h3>
                        <p className="text-ui-body-sm text-text-ter mt-1">
                            .text-ui-title-sm - font-size: 1.25rem, line-height:
                            1.75rem, font-weight: 600
                        </p>
                    </div>
                </div>
            </div>

            {/* Subtitle */}
            <div className="space-y-4">
                <h2 className="text-ui-title-base text-text-pr border-b border-border-default pb-2">
                    Subtitle
                </h2>
                <div>
                    <h4 className="text-ui-subtitle text-text-pr">
                        Subtitle (1.25rem / 20px)
                    </h4>
                    <p className="text-ui-body-sm text-text-ter mt-1">
                        .text-ui-subtitle - font-size: 1.25rem, line-height:
                        1.75rem, font-weight: 500
                    </p>
                </div>
            </div>

            {/* Body Text */}
            <div className="space-y-4">
                <h2 className="text-ui-title-base text-text-pr border-b border-border-default pb-2">
                    Body Text
                </h2>
                <div className="space-y-3">
                    <div>
                        <p className="text-ui-body-lg text-text-pr">
                            Body Large (1.125rem / 18px) - Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p className="text-ui-body-sm text-text-ter mt-1">
                            .text-ui-body-lg - font-size: 1.125rem, line-height:
                            1.75rem, font-weight: 400
                        </p>
                    </div>
                    <div>
                        <p className="text-ui-body-base text-text-pr">
                            Body Base (1rem / 16px) - Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p className="text-ui-body-sm text-text-ter mt-1">
                            .text-ui-body-base - font-size: 1rem, line-height:
                            1.5rem, font-weight: 400
                        </p>
                    </div>
                    <div>
                        <p className="text-ui-body-sm text-text-pr">
                            Body Small (0.875rem / 14px) - Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p className="text-ui-body-sm text-text-ter mt-1">
                            .text-ui-body-sm - font-size: 0.875rem, line-height:
                            1.25rem, font-weight: 400
                        </p>
                    </div>
                </div>
            </div>

            {/* Labels */}
            <div className="space-y-4">
                <h2 className="text-ui-title-base text-text-pr border-b border-border-default pb-2">
                    Labels
                </h2>
                <div className="space-y-3">
                    <div>
                        <span className="text-ui-label-lg text-text-pr">
                            Label Large (1rem / 16px)
                        </span>
                        <p className="text-ui-body-sm text-text-ter mt-1">
                            .text-ui-label-lg - font-size: 1rem, line-height:
                            1.5rem, font-weight: 500
                        </p>
                    </div>
                    <div>
                        <span className="text-ui-label-base text-text-pr">
                            Label Base (0.875rem / 14px)
                        </span>
                        <p className="text-ui-body-sm text-text-ter mt-1">
                            .text-ui-label-base - font-size: 0.875rem,
                            line-height: 1.25rem, font-weight: 500
                        </p>
                    </div>
                    <div>
                        <span className="text-ui-label-sm text-text-pr">
                            Label Small (0.75rem / 12px)
                        </span>
                        <p className="text-ui-body-sm text-text-ter mt-1">
                            .text-ui-label-sm - font-size: 0.75rem, line-height:
                            1rem, font-weight: 500
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ),
};

export const TextColors: Story = {
    render: () => (
        <div className="space-y-8">
            <div className="space-y-4">
                <h2 className="text-ui-title-base text-text-pr border-b border-border-default pb-2">
                    Text Colors
                </h2>
                <div className="space-y-3">
                    <div>
                        <p className="text-ui-body-base text-text-pr">
                            Primary text (text-text-pr) - Main content text
                        </p>
                    </div>
                    <div>
                        <p className="text-ui-body-base text-text-sec">
                            Secondary text (text-text-sec) - Supporting content
                        </p>
                    </div>
                    <div>
                        <p className="text-ui-body-base text-text-ter">
                            Tertiary text (text-text-ter) - Subtle information
                        </p>
                    </div>
                    <div>
                        <p className="text-ui-body-base text-text-a">
                            Accent text (text-text-a) - Highlighted information
                        </p>
                    </div>
                    <div>
                        <p className="text-ui-body-base text-text-suc">
                            Success text (text-text-suc) - Positive feedback
                        </p>
                    </div>
                    <div>
                        <p className="text-ui-body-base text-text-rev">
                            Review text (text-text-rev) - Information status
                        </p>
                    </div>
                    <div>
                        <p className="text-ui-body-base text-text-ident">
                            Identity text (text-text-ident) - Brand elements
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ),
};

export const Hierarchy: Story = {
    render: () => (
        <div className="space-y-6">
            <article className="max-w-2xl">
                <h1 className="text-ui-title-lg text-text-pr mb-4">
                    Design System Typography
                </h1>

                <p className="text-ui-body-lg text-text-pr mb-6">
                    This is an example of how our typography system works
                    together to create a clear information hierarchy. This large
                    body text serves as an introduction or lead paragraph.
                </p>

                <h2 className="text-ui-title-base text-text-pr mb-3">
                    Main Section Heading
                </h2>

                <p className="text-ui-body-base text-text-pr mb-4">
                    This is regular body text that makes up the main content.
                    It's readable and comfortable for extended reading. The line
                    height and spacing create good readability.
                </p>

                <h3 className="text-ui-title-sm text-text-pr mb-3">
                    Subsection Heading
                </h3>

                <p className="text-ui-body-base text-text-pr mb-3">
                    More body content continues here. Notice how the hierarchy
                    guides the eye through the content structure.
                </p>

                <h4 className="text-ui-subtitle text-text-pr mb-2">
                    Minor Heading or Subtitle
                </h4>

                <p className="text-ui-body-sm text-text-sec mb-4">
                    Smaller text in secondary color can be used for less
                    important information, captions, or supporting details.
                </p>

                <div className="bg-surf-sec p-4 rounded-lg">
                    <span className="text-ui-label-base text-text-pr font-medium">
                        Label:
                    </span>
                    <span className="text-ui-body-sm text-text-ter ml-2">
                        This shows how labels and small text work together in
                        components.
                    </span>
                </div>
            </article>
        </div>
    ),
};

export const ResponsiveText: Story = {
    render: () => (
        <div className="space-y-6">
            <div className="space-y-4">
                <h2 className="text-ui-title-base text-text-pr border-b border-border-default pb-2">
                    Responsive Typography Example
                </h2>
                <p className="text-ui-body-sm text-text-ter">
                    Resize your browser window to see how the typography scales
                </p>
            </div>

            <div className="grid gap-6 md:gap-8">
                <div className="bg-surf-sec p-4 rounded-lg">
                    <h3 className="text-ui-title-base md:text-ui-title-lg text-text-pr mb-2">
                        Responsive Heading
                    </h3>
                    <p className="text-ui-body-sm md:text-ui-body-base text-text-sec">
                        This text changes size based on screen size. On mobile
                        it's smaller, on desktop it's larger.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-cont-pr border border-border-default p-4 rounded-lg">
                        <span className="text-ui-label-sm text-text-ter uppercase tracking-wide">
                            Card Label
                        </span>
                        <h4 className="text-ui-subtitle text-text-pr mt-1 mb-2">
                            Card Title
                        </h4>
                        <p className="text-ui-body-sm text-text-sec">
                            Card description with smaller text that provides
                            additional context.
                        </p>
                    </div>

                    <div className="bg-cont-pr border border-border-default p-4 rounded-lg">
                        <span className="text-ui-label-sm text-text-ter uppercase tracking-wide">
                            Card Label
                        </span>
                        <h4 className="text-ui-subtitle text-text-pr mt-1 mb-2">
                            Another Card
                        </h4>
                        <p className="text-ui-body-sm text-text-sec">
                            Consistent spacing and typography creates visual
                            harmony.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ),
};

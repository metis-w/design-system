import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Foundations/Colors",
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component: "Color system showing primitive colors and semantic color tokens used throughout the design system.",
            },
        },
    },
    tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Color display component
const ColorSwatch = ({ name, cssVar, description }: { name: string; cssVar: string; description?: string }) => (
    <div className="flex flex-col">
        <div
            className="w-24 h-24 rounded-lg border border-border-default mb-2 shadow-sm"
            style={{ backgroundColor: `var(${cssVar})` }}
        />
        <div className="space-y-1">
            <div className="typo-ui-label-base text-text-pr font-mono">{name}</div>
            <div className="typo-ui-label-sm text-text-sec font-mono text-xs">{cssVar}</div>
            {description && <div className="typo-ui-body-sm text-text-ter">{description}</div>}
        </div>
    </div>
);

export const PrimitiveColors: Story = {
    render: () => (
        <div className="p-6 space-y-8">
            <div className="space-y-4">
                <h2 className="typo-ui-title-base text-text-pr">Primitive Colors</h2>
                <p className="typo-ui-body-base text-text-sec">
                    Base color palette used to build semantic color tokens
                </p>
            </div>

            {/* Neutral Colors */}
            <div className="space-y-4">
                <h3 className="typo-ui-title-sm text-text-pr">Neutral</h3>
                <div className="grid grid-cols-6 gap-4">
                    <ColorSwatch name="Black" cssVar="--color-black" />
                    <ColorSwatch name="White" cssVar="--color-white" />
                    <ColorSwatch name="50" cssVar="--color-neutral-50" />
                    <ColorSwatch name="100" cssVar="--color-neutral-100" />
                    <ColorSwatch name="200" cssVar="--color-neutral-200" />
                    <ColorSwatch name="300" cssVar="--color-neutral-300" />
                </div>
                <div className="grid grid-cols-6 gap-4">
                    <ColorSwatch name="400" cssVar="--color-neutral-400" />
                    <ColorSwatch name="500" cssVar="--color-neutral-500" />
                    <ColorSwatch name="600" cssVar="--color-neutral-600" />
                    <ColorSwatch name="700" cssVar="--color-neutral-700" />
                    <ColorSwatch name="800" cssVar="--color-neutral-800" />
                    <ColorSwatch name="900" cssVar="--color-neutral-900" />
                </div>
            </div>

            {/* Yellow Colors */}
            <div className="space-y-4">
                <h3 className="typo-ui-title-sm text-text-pr">Yellow</h3>
                <div className="grid grid-cols-6 gap-4">
                    <ColorSwatch name="50" cssVar="--color-yellow-50" />
                    <ColorSwatch name="100" cssVar="--color-yellow-100" />
                    <ColorSwatch name="200" cssVar="--color-yellow-200" />
                    <ColorSwatch name="300" cssVar="--color-yellow-300" />
                    <ColorSwatch name="400" cssVar="--color-yellow-400" />
                    <ColorSwatch name="500" cssVar="--color-yellow-500" />
                </div>
                <div className="grid grid-cols-6 gap-4">
                    <ColorSwatch name="600" cssVar="--color-yellow-600" />
                    <ColorSwatch name="700" cssVar="--color-yellow-700" />
                    <ColorSwatch name="800" cssVar="--color-yellow-800" />
                    <ColorSwatch name="900" cssVar="--color-yellow-900" />
                    <ColorSwatch name="950" cssVar="--color-yellow-950" />
                    <div></div>
                </div>
            </div>

            {/* Red Colors */}
            <div className="space-y-4">
                <h3 className="typo-ui-title-sm text-text-pr">Red</h3>
                <div className="grid grid-cols-6 gap-4">
                    <ColorSwatch name="50" cssVar="--color-red-50" />
                    <ColorSwatch name="100" cssVar="--color-red-100" />
                    <ColorSwatch name="200" cssVar="--color-red-200" />
                    <ColorSwatch name="300" cssVar="--color-red-300" />
                    <ColorSwatch name="400" cssVar="--color-red-400" />
                    <ColorSwatch name="500" cssVar="--color-red-500" />
                </div>
                <div className="grid grid-cols-6 gap-4">
                    <ColorSwatch name="600" cssVar="--color-red-600" />
                    <ColorSwatch name="700" cssVar="--color-red-700" />
                    <ColorSwatch name="800" cssVar="--color-red-800" />
                    <ColorSwatch name="900" cssVar="--color-red-900" />
                    <ColorSwatch name="950" cssVar="--color-red-950" />
                    <div></div>
                </div>
            </div>

            {/* Green Colors */}
            <div className="space-y-4">
                <h3 className="typo-ui-title-sm text-text-pr">Green</h3>
                <div className="grid grid-cols-6 gap-4">
                    <ColorSwatch name="50" cssVar="--color-green-50" />
                    <ColorSwatch name="100" cssVar="--color-green-100" />
                    <ColorSwatch name="200" cssVar="--color-green-200" />
                    <ColorSwatch name="300" cssVar="--color-green-300" />
                    <ColorSwatch name="400" cssVar="--color-green-400" />
                    <ColorSwatch name="500" cssVar="--color-green-500" />
                </div>
                <div className="grid grid-cols-6 gap-4">
                    <ColorSwatch name="600" cssVar="--color-green-600" />
                    <ColorSwatch name="700" cssVar="--color-green-700" />
                    <ColorSwatch name="800" cssVar="--color-green-800" />
                    <ColorSwatch name="900" cssVar="--color-green-900" />
                    <ColorSwatch name="950" cssVar="--color-green-950" />
                    <div></div>
                </div>
            </div>

            {/* Blue Colors */}
            <div className="space-y-4">
                <h3 className="typo-ui-title-sm text-text-pr">Blue</h3>
                <div className="grid grid-cols-6 gap-4">
                    <ColorSwatch name="50" cssVar="--color-blue-50" />
                    <ColorSwatch name="100" cssVar="--color-blue-100" />
                    <ColorSwatch name="200" cssVar="--color-blue-200" />
                    <ColorSwatch name="300" cssVar="--color-blue-300" />
                    <ColorSwatch name="400" cssVar="--color-blue-400" />
                    <ColorSwatch name="500" cssVar="--color-blue-500" />
                </div>
                <div className="grid grid-cols-6 gap-4">
                    <ColorSwatch name="600" cssVar="--color-blue-600" />
                    <ColorSwatch name="700" cssVar="--color-blue-700" />
                    <ColorSwatch name="800" cssVar="--color-blue-800" />
                    <ColorSwatch name="900" cssVar="--color-blue-900" />
                    <ColorSwatch name="950" cssVar="--color-blue-950" />
                    <div></div>
                </div>
            </div>

            {/* Purple Colors */}
            <div className="space-y-4">
                <h3 className="typo-ui-title-sm text-text-pr">Purple</h3>
                <div className="grid grid-cols-6 gap-4">
                    <ColorSwatch name="50" cssVar="--color-purple-50" />
                    <ColorSwatch name="100" cssVar="--color-purple-100" />
                    <ColorSwatch name="200" cssVar="--color-purple-200" />
                    <ColorSwatch name="300" cssVar="--color-purple-300" />
                    <ColorSwatch name="400" cssVar="--color-purple-400" />
                    <ColorSwatch name="500" cssVar="--color-purple-500" />
                </div>
                <div className="grid grid-cols-6 gap-4">
                    <ColorSwatch name="600" cssVar="--color-purple-600" />
                    <ColorSwatch name="700" cssVar="--color-purple-700" />
                    <ColorSwatch name="800" cssVar="--color-purple-800" />
                    <ColorSwatch name="900" cssVar="--color-purple-900" />
                    <ColorSwatch name="950" cssVar="--color-purple-950" />
                    <div></div>
                </div>
            </div>
        </div>
    ),
};

export const SemanticColors: Story = {
    render: () => (
        <div className="p-6 space-y-8">
            <div className="space-y-4">
                <h2 className="typo-ui-title-base text-text-pr">Semantic Colors</h2>
                <p className="typo-ui-body-base text-text-sec">
                    Semantic color tokens that provide meaning and context to UI elements
                </p>
            </div>

            {/* Surface Colors */}
            <div className="space-y-4">
                <h3 className="typo-ui-title-sm text-text-pr">Surface</h3>
                <div className="grid grid-cols-4 gap-4">
                    <ColorSwatch name="Primary" cssVar="--color-surf-pr" description="Main surface background" />
                    <ColorSwatch name="Secondary" cssVar="--color-surf-sec" description="Secondary surface background" />
                    <ColorSwatch name="Overlay" cssVar="--color-surf-overlay" description="Modal/dialog overlay" />
                </div>
            </div>

            {/* Container Colors */}
            <div className="space-y-4">
                <h3 className="typo-ui-title-sm text-text-pr">Container</h3>
                <div className="grid grid-cols-4 gap-4">
                    <ColorSwatch name="Primary" cssVar="--color-cont-pr" description="Primary container" />
                    <ColorSwatch name="Secondary" cssVar="--color-cont-sec" description="Secondary container" />
                    <ColorSwatch name="Accent" cssVar="--color-cont-a" description="Accent container" />
                    <ColorSwatch name="Success" cssVar="--color-cont-suc" description="Success container" />
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <ColorSwatch name="Review" cssVar="--color-cont-rev" description="Review container" />
                    <ColorSwatch name="Identity" cssVar="--color-cont-ident" description="Identity container" />
                </div>
            </div>

            {/* Text Colors */}
            <div className="space-y-4">
                <h3 className="typo-ui-title-sm text-text-pr">Text</h3>
                <div className="grid grid-cols-4 gap-4">
                    <ColorSwatch name="Primary" cssVar="--color-text-pr" description="Primary text" />
                    <ColorSwatch name="Secondary" cssVar="--color-text-sec" description="Secondary text" />
                    <ColorSwatch name="Tertiary" cssVar="--color-text-ter" description="Tertiary text" />
                    <ColorSwatch name="Accent" cssVar="--color-text-a" description="Accent text" />
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <ColorSwatch name="Success" cssVar="--color-text-suc" description="Success text" />
                    <ColorSwatch name="Review" cssVar="--color-text-rev" description="Review text" />
                    <ColorSwatch name="Identity" cssVar="--color-text-ident" description="Identity text" />
                </div>
            </div>

            {/* Border Colors */}
            <div className="space-y-4">
                <h3 className="typo-ui-title-sm text-text-pr">Border</h3>
                <div className="grid grid-cols-4 gap-4">
                    <ColorSwatch name="Default" cssVar="--color-border-default" description="Default border" />
                    <ColorSwatch name="Identity" cssVar="--color-border-ident" description="Identity border" />
                    <ColorSwatch name="Accent" cssVar="--color-border-a" description="Accent border" />
                </div>
            </div>
        </div>
    ),
};

export const ActionColors: Story = {
    render: () => (
        <div className="p-6 space-y-8">
            <div className="space-y-4">
                <h2 className="typo-ui-title-base text-text-pr">Action Colors</h2>
                <p className="typo-ui-body-base text-text-sec">
                    Color tokens for interactive elements like buttons, showing all states
                </p>
            </div>

            {/* Accent Action */}
            <div className="space-y-4">
                <h3 className="typo-ui-title-sm text-text-pr">Accent Action</h3>
                <div className="grid grid-cols-6 gap-4">
                    <ColorSwatch name="Default" cssVar="--color-bg-aa" />
                    <ColorSwatch name="Hover" cssVar="--color-bg-aa-hover" />
                    <ColorSwatch name="Pressed" cssVar="--color-bg-aa-pressed" />
                    <ColorSwatch name="Disabled" cssVar="--color-bg-aa-disabled" />
                    <ColorSwatch name="Text" cssVar="--color-text-aa" />
                    <ColorSwatch name="Text Disabled" cssVar="--color-text-aa-disabled" />
                </div>
            </div>

            {/* Primary Action */}
            <div className="space-y-4">
                <h3 className="typo-ui-title-sm text-text-pr">Primary Action</h3>
                <div className="grid grid-cols-6 gap-4">
                    <ColorSwatch name="Default" cssVar="--color-bg-apr" />
                    <ColorSwatch name="Hover" cssVar="--color-bg-apr-hover" />
                    <ColorSwatch name="Pressed" cssVar="--color-bg-apr-pressed" />
                    <ColorSwatch name="Disabled" cssVar="--color-bg-apr-disabled" />
                    <ColorSwatch name="Text" cssVar="--color-text-apr" />
                    <ColorSwatch name="Text Disabled" cssVar="--color-text-apr-disabled" />
                </div>
            </div>

            {/* Secondary Action */}
            <div className="space-y-4">
                <h3 className="typo-ui-title-sm text-text-pr">Secondary Action</h3>
                <div className="grid grid-cols-6 gap-4">
                    <ColorSwatch name="Default" cssVar="--color-bg-asec" />
                    <ColorSwatch name="Hover" cssVar="--color-bg-asec-hover" />
                    <ColorSwatch name="Pressed" cssVar="--color-bg-asec-pressed" />
                    <ColorSwatch name="Disabled" cssVar="--color-bg-asec-disabled" />
                    <ColorSwatch name="Text" cssVar="--color-text-asec" />
                    <ColorSwatch name="Text Disabled" cssVar="--color-text-asec-disabled" />
                </div>
            </div>

            {/* Ghost Action */}
            <div className="space-y-4">
                <h3 className="typo-ui-title-sm text-text-pr">Ghost Action</h3>
                <div className="grid grid-cols-4 gap-4">
                    <ColorSwatch name="Hover" cssVar="--color-bg-agh-hover" />
                    <ColorSwatch name="Pressed" cssVar="--color-bg-agh-pressed" />
                    <ColorSwatch name="Text" cssVar="--color-text-agh" />
                    <ColorSwatch name="Text Disabled" cssVar="--color-text-agh-disabled" />
                </div>
            </div>

            {/* State Actions */}
            <div className="space-y-4">
                <h3 className="typo-ui-title-sm text-text-pr">State Actions</h3>
                
                <div className="space-y-6">
                    <div>
                        <h4 className="typo-ui-label-lg text-text-pr mb-3">Mistake</h4>
                        <div className="grid grid-cols-6 gap-4">
                            <ColorSwatch name="Default" cssVar="--color-bg-amist" />
                            <ColorSwatch name="Hover" cssVar="--color-bg-amist-hover" />
                            <ColorSwatch name="Pressed" cssVar="--color-bg-amist-pressed" />
                            <ColorSwatch name="Disabled" cssVar="--color-bg-amist-disabled" />
                            <ColorSwatch name="Text" cssVar="--color-text-amist" />
                            <ColorSwatch name="Text Disabled" cssVar="--color-text-amist-disabled" />
                        </div>
                    </div>

                    <div>
                        <h4 className="typo-ui-label-lg text-text-pr mb-3">Success</h4>
                        <div className="grid grid-cols-6 gap-4">
                            <ColorSwatch name="Default" cssVar="--color-bg-asuc" />
                            <ColorSwatch name="Hover" cssVar="--color-bg-asuc-hover" />
                            <ColorSwatch name="Pressed" cssVar="--color-bg-asuc-pressed" />
                            <ColorSwatch name="Disabled" cssVar="--color-bg-asuc-disabled" />
                            <ColorSwatch name="Text" cssVar="--color-text-asuc" />
                            <ColorSwatch name="Text Disabled" cssVar="--color-text-asuc-disabled" />
                        </div>
                    </div>

                    <div>
                        <h4 className="typo-ui-label-lg text-text-pr mb-3">Review</h4>
                        <div className="grid grid-cols-6 gap-4">
                            <ColorSwatch name="Default" cssVar="--color-bg-arev" />
                            <ColorSwatch name="Hover" cssVar="--color-bg-arev-hover" />
                            <ColorSwatch name="Pressed" cssVar="--color-bg-arev-pressed" />
                            <ColorSwatch name="Disabled" cssVar="--color-bg-arev-disabled" />
                            <ColorSwatch name="Text" cssVar="--color-text-arev" />
                            <ColorSwatch name="Text Disabled" cssVar="--color-text-arev-disabled" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
};

export const InputColors: Story = {
    render: () => (
        <div className="p-6 space-y-8">
            <div className="space-y-4">
                <h2 className="typo-ui-title-base text-text-pr">Input Colors</h2>
                <p className="typo-ui-body-base text-text-sec">
                    Color tokens specifically designed for form inputs and their various states
                </p>
            </div>

            {/* Input Backgrounds */}
            <div className="space-y-4">
                <h3 className="typo-ui-title-sm text-text-pr">Input Backgrounds</h3>
                <div className="grid grid-cols-4 gap-4">
                    <ColorSwatch name="Default" cssVar="--color-bg-inp" description="Normal input background" />
                    <ColorSwatch name="Mistake" cssVar="--color-bg-inp-mistake" description="Error state background" />
                    <ColorSwatch name="Disabled" cssVar="--color-bg-inp-disabled" description="Disabled input background" />
                    <ColorSwatch name="Readonly" cssVar="--color-bg-inp-readonly" description="Readonly input background" />
                </div>
            </div>

            {/* Input Text */}
            <div className="space-y-4">
                <h3 className="typo-ui-title-sm text-text-pr">Input Text</h3>
                <div className="grid grid-cols-6 gap-4">
                    <ColorSwatch name="Placeholder" cssVar="--color-text-inp" />
                    <ColorSwatch name="Label" cssVar="--color-text-inp-label" />
                    <ColorSwatch name="Caption" cssVar="--color-text-inp-caption" />
                    <ColorSwatch name="Filled" cssVar="--color-text-inp-filled" />
                    <ColorSwatch name="Mistake" cssVar="--color-text-inp-mistake" />
                    <ColorSwatch name="Disabled" cssVar="--color-text-inp-disabled" />
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <ColorSwatch name="Readonly" cssVar="--color-text-inp-readonly" />
                    <ColorSwatch name="Label Disabled" cssVar="--color-text-inp-label-disabled" />
                    <ColorSwatch name="Caption Disabled" cssVar="--color-text-inp-caption-disabled" />
                </div>
            </div>

            {/* Input Borders */}
            <div className="space-y-4">
                <h3 className="typo-ui-title-sm text-text-pr">Input Borders</h3>
                <div className="grid grid-cols-4 gap-4">
                    <ColorSwatch name="Default" cssVar="--color-border-inp" description="Normal border" />
                    <ColorSwatch name="Focus" cssVar="--color-border-inp-focus" description="Focused border" />
                    <ColorSwatch name="Mistake" cssVar="--color-border-inp-mistake" description="Error border" />
                    <ColorSwatch name="Readonly" cssVar="--color-border-inp-readonly" description="Readonly border" />
                </div>
            </div>

            {/* Focus Rings */}
            <div className="space-y-4">
                <h3 className="typo-ui-title-sm text-text-pr">Focus Rings</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <div
                            className="w-24 h-24 rounded-lg border-2 border-border-inp-focus shadow-sm"
                            style={{ 
                                backgroundColor: 'var(--color-bg-inp)',
                                boxShadow: '0 0 0 3px var(--color-ring-inp-focus)'
                            }}
                        />
                        <div className="space-y-1">
                            <div className="typo-ui-label-base text-text-pr font-mono">Focus Ring</div>
                            <div className="typo-ui-label-sm text-text-sec font-mono text-xs">--color-ring-inp-focus</div>
                            <div className="typo-ui-body-sm text-text-ter">Normal focus ring</div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div
                            className="w-24 h-24 rounded-lg border-2 border-border-inp-mistake shadow-sm"
                            style={{ 
                                backgroundColor: 'var(--color-bg-inp-mistake)',
                                boxShadow: '0 0 0 3px var(--color-ring-inp-mistake)'
                            }}
                        />
                        <div className="space-y-1">
                            <div className="typo-ui-label-base text-text-pr font-mono">Mistake Ring</div>
                            <div className="typo-ui-label-sm text-text-sec font-mono text-xs">--color-ring-inp-mistake</div>
                            <div className="typo-ui-body-sm text-text-ter">Error focus ring</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
};
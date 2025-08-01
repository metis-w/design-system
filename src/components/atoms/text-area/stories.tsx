import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from ".";
import { Label } from "../label";
import { Input } from "../input";

const meta = {
    title: "Components/Atoms/TextArea",
    component: TextArea,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        placeholder: {
            control: { type: "text" },
        },
        disabled: {
            control: { type: "boolean" },
        },
        rows: {
            control: { type: "number" },
        },
        resize: {
            control: { type: "select" },
            options: ["none", "both", "horizontal", "vertical"],
        },
        autoGrow: {
            control: { type: "boolean" },
        },
        maxLines: {
            control: { type: "number" },
            description: "Maximum number of lines before scrolling",
        },
        minLines: {
            control: { type: "number" },
            description: "Minimum number of lines for initial height",
        },
    },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component for consistent widths
const TextAreaWrapper = ({
    children,
    width = "w-80",
}: {
    children: React.ReactNode;
    width?: string;
}) => <div className={`${width} max-w-full`}>{children}</div>;

export const Default: Story = {
    render: (args) => (
        <TextAreaWrapper>
            <TextArea {...args} />
        </TextAreaWrapper>
    ),
    args: {
        placeholder: "Type your message here...",
    },
};

export const WithMaxLines: Story = {
    render: (args) => (
        <TextAreaWrapper>
            <TextArea {...args} />
        </TextAreaWrapper>
    ),
    args: {
        placeholder:
            "Start typing... This will grow until 6 lines, then scroll",
        autoGrow: true,
        maxLines: 6,
        minLines: 3,
    },
};

export const MaxHeightDemonstration: Story = {
    render: () => (
        <div className="space-y-4 w-96 max-w-full">
            <div>
                <h3 className="typo-ui-title-sm text-text-pr">
                    Auto-Growing with Max Height
                </h3>
                <p className="typo-ui-body-sm text-text-sec">
                    Demonstrates different max height limits and scrolling
                    behavior
                </p>
            </div>

            <div className="grid gap-6">
                <div className="space-y-2">
                    <div>
                        <h4 className="typo-ui-label-lg text-text-pr">
                            6 Line Maximum
                        </h4>
                        <p className="typo-ui-body-sm text-text-ter">
                            Grows automatically until 6 lines, then shows
                            scrollbar
                        </p>
                    </div>
                    <TextArea
                        placeholder="Keep typing to see the max height in action..."
                        autoGrow={true}
                        maxLines={6}
                        minLines={2}
                        defaultValue="Line 1: Start typing here
Line 2: Keep adding content
Line 3: Notice how it grows
Line 4: Still growing...
Line 5: Almost at the limit
Line 6: This is the last line before scrolling
Line 7: Now you should see a scrollbar appear
Line 8: This content will require scrolling to see
Line 9: The height is now fixed
Line 10: Perfect for limiting vertical space"
                    />
                </div>

                <div className="space-y-2">
                    <div>
                        <h4 className="typo-ui-label-lg text-text-pr">
                            Comparing Different Limits
                        </h4>
                        <p className="typo-ui-body-sm text-text-ter">
                            3-line vs 8-line maximum heights side by side
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Max 3 lines</Label>
                            <TextArea
                                placeholder="Max 3 lines..."
                                autoGrow={true}
                                maxLines={3}
                                minLines={2}
                                defaultValue="Line 1
Line 2
Line 3
Line 4 - scroll needed"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Max 8 lines</Label>
                            <TextArea
                                placeholder="Max 8 lines..."
                                autoGrow={true}
                                maxLines={8}
                                minLines={2}
                                defaultValue="Line 1
Line 2
Line 3
Line 4
Line 5
Line 6
Line 7
Line 8
Line 9 - scroll needed"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
};

export const FlashcardUseCase: Story = {
    render: () => (
        <TextAreaWrapper width="w-96">
            <div className="space-y-4">
                <div className="space-y-1">
                    <h3 className="typo-ui-title-sm text-text-pr">
                        Flashcard Content
                    </h3>
                    <p className="typo-ui-body-sm text-text-sec">
                        Auto-growing textareas with sensible height limits for
                        flashcard creation
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="space-y-1">
                        <Label htmlFor="word">Word *</Label>
                        <Input
                            id="word"
                            placeholder="Enter the word or phrase..."
                            defaultValue="a dog"
                        />
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="translation">Translation *</Label>
                        <Input
                            id="translation"
                            placeholder="Enter the translation..."
                            defaultValue="un perro"
                        />
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="example">Example</Label>
                        <TextArea
                            id="example"
                            placeholder="Add an example sentence..."
                            autoGrow={true}
                            maxLines={3}
                            minLines={2}
                            defaultValue="El perro es pequeño. - The dog is small."
                        />
                    </div>
                </div>
            </div>
        </TextAreaWrapper>
    ),
};

export const FixedVsGrowingComparison: Story = {
    render: () => (
        <div className="space-y-4 w-96 max-w-full">
            <div className="space-y-1">
                <h3 className="typo-ui-title-sm text-text-pr">
                    Behaviour Comparison
                </h3>
                <p className="typo-ui-body-sm text-text-sec">
                    Different textarea behaviours side by side
                </p>
            </div>

            <div className="grid gap-6">
                <div className="space-y-2">
                    <div>
                        <h4 className="typo-ui-label-lg text-text-pr">
                            Traditional Fixed Height
                        </h4>
                        <p className="typo-ui-body-sm text-text-ter">
                            Fixed 4 rows, always shows scrollbar when needed
                        </p>
                    </div>
                    <TextArea
                        placeholder="I have a fixed height..."
                        autoGrow={false}
                        rows={4}
                        defaultValue="Line 1
Line 2  
Line 3
Line 4
Line 5 - scroll appears immediately"
                    />
                </div>

                <div className="space-y-2">
                    <div>
                        <h4 className="typo-ui-label-lg text-text-pr">
                            Auto-Growing (No Limit)
                        </h4>
                        <p className="typo-ui-body-sm text-text-ter">
                            Grows infinitely with content
                        </p>
                    </div>
                    <TextArea
                        placeholder="I grow without limits..."
                        autoGrow={true}
                        defaultValue="Line 1
Line 2
Line 3
Line 4
Line 5
Line 6 - still growing
Line 7 - keeps expanding"
                    />
                </div>

                <div className="space-y-2">
                    <div>
                        <h4 className="typo-ui-label-lg text-text-pr">
                            Auto-Growing with Max Height (Recommended)
                        </h4>
                        <p className="typo-ui-body-sm text-text-ter">
                            Grows to 5 lines, then scrolls - best of both worlds
                        </p>
                    </div>
                    <TextArea
                        placeholder="I grow smartly..."
                        autoGrow={true}
                        maxLines={5}
                        minLines={2}
                        defaultValue="Line 1
Line 2
Line 3
Line 4
Line 5
Line 6 - now I scroll
Line 7 - perfect balance!"
                    />
                </div>
            </div>
        </div>
    ),
};

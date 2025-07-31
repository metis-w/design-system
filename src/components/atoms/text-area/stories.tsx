import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from ".";

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
        noWrap: {
            control: { type: "boolean" },
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

export const WithValue: Story = {
    render: (args) => (
        <TextAreaWrapper>
            <TextArea {...args} />
        </TextAreaWrapper>
    ),
    args: {
        placeholder: "Type your message here...",
        defaultValue: "This is some sample text in the textarea component.",
    },
};

export const LongText: Story = {
    render: (args) => (
        <TextAreaWrapper>
            <TextArea {...args} />
        </TextAreaWrapper>
    ),
    args: {
        placeholder: "Write your story...",
        defaultValue:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
};

export const AutoGrowingBehavior: Story = {
    render: (args) => (
        <TextAreaWrapper>
            <TextArea {...args} />
        </TextAreaWrapper>
    ),
    args: {
        placeholder: "Start typing and watch this grow vertically...",
        autoGrow: true,
    },
};

export const FixedHeight: Story = {
    render: (args) => (
        <TextAreaWrapper>
            <TextArea {...args} />
        </TextAreaWrapper>
    ),
    args: {
        placeholder: "This has fixed height with scrolling...",
        autoGrow: false,
        rows: 4,
    },
};

export const NoWrapText: Story = {
    render: (args) => (
        <TextAreaWrapper>
            <TextArea {...args} />
        </TextAreaWrapper>
    ),
    args: {
        placeholder:
            "Long lines will scroll horizontally instead of wrapping...",
        noWrap: true,
        defaultValue:
            "This is a very long line of text that would normally wrap but instead will scroll horizontally when noWrap is enabled.",
    },
};

export const Disabled: Story = {
    render: (args) => (
        <TextAreaWrapper>
            <TextArea {...args} />
        </TextAreaWrapper>
    ),
    args: {
        placeholder: "This textarea is disabled",
        disabled: true,
    },
};

export const DisabledWithValue: Story = {
    render: (args) => (
        <TextAreaWrapper>
            <TextArea {...args} />
        </TextAreaWrapper>
    ),
    args: {
        placeholder: "This textarea is disabled",
        defaultValue: "This textarea is disabled and has some content.",
        disabled: true,
    },
};

export const Form: Story = {
    render: () => (
        <TextAreaWrapper width="w-96">
            <form className="space-y-4">
                <div className="space-y-2">
                    <label className="text-ui-label-base text-text-inp-label">
                        Message *
                    </label>
                    <TextArea
                        placeholder="Please describe your issue..."
                        autoGrow={true}
                        required
                    />
                    <p className="text-ui-label-sm text-text-inp-caption">
                        Please provide as much detail as possible.
                    </p>
                </div>
                <div className="space-y-2">
                    <label className="text-ui-label-base text-text-inp-label">
                        Additional Comments
                    </label>
                    <TextArea
                        placeholder="Any additional information (optional)..."
                        autoGrow={true}
                    />
                </div>
            </form>
        </TextAreaWrapper>
    ),
};

export const AutoGrowVariants: Story = {
    render: () => (
        <div className="space-y-6 w-96 max-w-full">
            <div className="space-y-2">
                <h3 className="text-ui-label-base text-text-pr">
                    Auto-Growing (Default)
                </h3>
                <p className="text-ui-body-sm text-text-sec">
                    Expands vertically as you type, width stays fixed
                </p>
                <TextArea
                    placeholder="Type multiple lines and watch me grow..."
                    autoGrow={true}
                />
            </div>

            <div className="space-y-2">
                <h3 className="text-ui-label-base text-text-pr">
                    Fixed Height with Scroll
                </h3>
                <p className="text-ui-body-sm text-text-sec">
                    Traditional textarea with scrollbars
                </p>
                <TextArea
                    placeholder="I have a fixed height and will scroll..."
                    autoGrow={false}
                    rows={3}
                />
            </div>

            <div className="space-y-2">
                <h3 className="text-ui-label-base text-text-pr">
                    No Text Wrapping
                </h3>
                <p className="text-ui-body-sm text-text-sec">
                    Long lines scroll horizontally
                </p>
                <TextArea
                    placeholder="Long text will scroll horizontally instead of wrapping to new lines..."
                    noWrap={true}
                    autoGrow={true}
                    defaultValue="This is a very long line of text that demonstrates horizontal scrolling behavior when noWrap is enabled."
                />
            </div>
        </div>
    ),
};

export const WidthDemonstration: Story = {
    render: () => (
        <div className="space-y-6">
            <div className="space-y-2">
                <h3 className="text-ui-label-base text-text-pr">
                    Narrow Container (w-64)
                </h3>
                <div className="w-64 max-w-full border border-dashed border-gray-300 p-2">
                    <TextArea
                        placeholder="I'm constrained to a narrow width..."
                        defaultValue="This text will wrap within the narrow container width. Notice how the textarea respects its container boundaries."
                    />
                </div>
            </div>

            <div className="space-y-2">
                <h3 className="text-ui-label-base text-text-pr">
                    Medium Container (w-80)
                </h3>
                <div className="w-80 max-w-full border border-dashed border-gray-300 p-2">
                    <TextArea
                        placeholder="I have a medium width container..."
                        defaultValue="This textarea has more room to display text before wrapping. The width is controlled by the parent container, not the textarea itself."
                    />
                </div>
            </div>

            <div className="space-y-2">
                <h3 className="text-ui-label-base text-text-pr">
                    Wide Container (w-96)
                </h3>
                <div className="w-96 max-w-full border border-dashed border-gray-300 p-2">
                    <TextArea
                        placeholder="I'm in a wide container..."
                        defaultValue="This textarea has even more horizontal space available before text needs to wrap to the next line. The key is that it always respects the container width and never expands horizontally on its own."
                    />
                </div>
            </div>
        </div>
    ),
};

export const FlashcardUseCase: Story = {
    render: () => (
        <TextAreaWrapper width="w-96">
            <div className="space-y-4">
                <div className="space-y-2">
                    <h3 className="text-ui-label-base text-text-pr">
                        Flashcard Content (Recommended)
                    </h3>
                    <p className="text-ui-body-sm text-text-sec">
                        Auto-growing textareas for natural content entry
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-ui-label-base text-text-inp-label">
                            Front Side
                        </label>
                        <TextArea
                            placeholder="Enter the English word..."
                            autoGrow={true}
                            defaultValue="apple"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-ui-label-base text-text-inp-label">
                            Back Side
                        </label>
                        <TextArea
                            placeholder="Enter the translation..."
                            autoGrow={true}
                            defaultValue="una manzana"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-ui-label-base text-text-inp-label">
                            Notes (Optional)
                        </label>
                        <TextArea
                            placeholder="Add context, pronunciation, or examples..."
                            autoGrow={true}
                            defaultValue="Feminine noun in Spanish. Pronunciation: /ˈmansana/. Example: 'Me gusta comer manzanas rojas' (I like to eat red apples)."
                        />
                    </div>
                </div>
            </div>
        </TextAreaWrapper>
    ),
};

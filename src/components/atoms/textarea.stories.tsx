import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";

const meta = {
    title: "Components/Atoms/Textarea",
    component: Textarea,
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
    },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: "Type your message here...",
    },
};

export const WithValue: Story = {
    args: {
        placeholder: "Type your message here...",
        defaultValue: "This is some sample text in the textarea component.",
    },
};

export const LongText: Story = {
    args: {
        placeholder: "Write your story...",
        defaultValue:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
};

export const Disabled: Story = {
    args: {
        placeholder: "This textarea is disabled",
        disabled: true,
    },
};

export const DisabledWithValue: Story = {
    args: {
        placeholder: "This textarea is disabled",
        defaultValue: "This textarea is disabled and has some content.",
        disabled: true,
    },
};

export const WithRows: Story = {
    args: {
        placeholder: "Type your message here...",
        rows: 8,
    },
};

export const MinimalRows: Story = {
    args: {
        placeholder: "Small textarea...",
        rows: 2,
    },
};

export const MaxLength: Story = {
    args: {
        placeholder: "Maximum 100 characters...",
        maxLength: 100,
    },
};

export const Form: Story = {
    render: () => (
        <form className="space-y-4 w-80">
            <div className="space-y-2">
                <label className="text-ui-label-base text-text-inp-label">
                    Message *
                </label>
                <Textarea
                    placeholder="Please describe your issue..."
                    rows={4}
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
                <Textarea
                    placeholder="Any additional information (optional)..."
                    rows={3}
                />
            </div>
        </form>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className="space-y-4 w-96">
            <div className="space-y-2">
                <h3 className="text-ui-label-base text-text-pr">
                    Small (2 rows)
                </h3>
                <Textarea placeholder="Small textarea..." rows={2} />
            </div>
            <div className="space-y-2">
                <h3 className="text-ui-label-base text-text-pr">
                    Medium (4 rows)
                </h3>
                <Textarea placeholder="Medium textarea..." rows={4} />
            </div>
            <div className="space-y-2">
                <h3 className="text-ui-label-base text-text-pr">
                    Large (8 rows)
                </h3>
                <Textarea placeholder="Large textarea..." rows={8} />
            </div>
        </div>
    ),
};

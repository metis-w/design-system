import type { Meta, StoryObj } from "@storybook/react";
import { Plus, X, Heart, Settings } from "lucide-react";
import { IconButton } from ".";

const meta = {
    title: "Components/Atoms/IconButton",
    component: IconButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["default", "lg"],
        },
        disabled: {
            control: { type: "boolean" },
        },
    },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <Plus />,
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        children: <Plus />,
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <div className="text-center">
                <div className="mb-2">
                    <IconButton size="default">
                        <Plus />
                    </IconButton>
                </div>
                <span className="typo-ui-label-sm text-text-ter">Default</span>
            </div>

            <div className="text-center">
                <div className="mb-2">
                    <IconButton size="lg">
                        <Plus />
                    </IconButton>
                </div>
                <span className="typo-ui-label-sm text-text-ter">Large</span>
            </div>
        </div>
    ),
};

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

export const Examples: Story = {
    render: () => (
        <div className="space-y-6">
            <div className="space-y-2">
                <h3 className="typo-ui-title-base text-text-pr">
                    Icon Button Examples
                </h3>
                <p className="typo-ui-body-sm text-text-sec">
                    Icon buttons with different icons
                </p>
            </div>

            <div className="grid grid-cols-4 gap-4">
                <div className="text-center space-y-2">
                    <IconButton>
                        <Plus />
                    </IconButton>
                    <span className="typo-ui-label-sm text-text-ter block">
                        Add
                    </span>
                </div>

                <div className="text-center space-y-2">
                    <IconButton>
                        <X />
                    </IconButton>
                    <span className="typo-ui-label-sm text-text-ter block">
                        Close
                    </span>
                </div>

                <div className="text-center space-y-2">
                    <IconButton>
                        <Heart />
                    </IconButton>
                    <span className="typo-ui-label-sm text-text-ter block">
                        Like
                    </span>
                </div>

                <div className="text-center space-y-2">
                    <IconButton>
                        <Settings />
                    </IconButton>
                    <span className="typo-ui-label-sm text-text-ter block">
                        Settings
                    </span>
                </div>

                <div className="text-center space-y-2">
                    <IconButton disabled>
                        <Plus />
                    </IconButton>
                    <span className="typo-ui-label-sm text-text-ter block">
                        Disabled
                    </span>
                </div>
            </div>
        </div>
    ),
};

export const Interactive: Story = {
    render: () => (
        <div className="space-y-6">
            <div className="space-y-2">
                <h3 className="typo-ui-title-base text-text-pr">
                    Interactive Examples
                </h3>
                <p className="typo-ui-body-sm text-text-sec">
                    Icon buttons with different use cases
                </p>
            </div>

            <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 p-3 bg-cont-sec rounded-lg">
                    <span className="typo-ui-label-base text-text-pr">
                        Like this post
                    </span>
                    <IconButton>
                        <Heart />
                    </IconButton>
                </div>

                <div className="flex items-center gap-2 p-3 bg-cont-sec rounded-lg">
                    <span className="typo-ui-label-base text-text-pr">
                        Settings
                    </span>
                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>

                <div className="flex items-center gap-2 p-3 bg-cont-sec rounded-lg">
                    <span className="typo-ui-label-base text-text-pr">
                        Add item
                    </span>
                    <IconButton>
                        <Plus />
                    </IconButton>
                </div>

                <div className="flex items-center gap-2 p-3 bg-cont-sec rounded-lg">
                    <span className="typo-ui-label-base text-text-pr">
                        Close dialog
                    </span>
                    <IconButton>
                        <X />
                    </IconButton>
                </div>
            </div>
        </div>
    ),
};

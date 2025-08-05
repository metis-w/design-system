import type { Meta, StoryObj } from "@storybook/react";

import { Label, Input } from "@/components/atoms";

const meta = {
    title: "Components/Atoms/Label",
    component: Label,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        children: {
            control: { type: "text" },
        },
    },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Email address",
        htmlFor: "email",
    },
};

export const Required: Story = {
    args: {
        children: "Password *",
        htmlFor: "password",
    },
};

export const WithInput: Story = {
    render: () => (
        <div className="space-y-1">
            <Label htmlFor="username">Username</Label>
            <Input
                id="username"
                type="text"
                placeholder="Enter your username"
            />
        </div>
    ),
};

export const DisabledWithInput: Story = {
    render: () => (
        <div className="space-y-1">
            <Label htmlFor="disabled-input" disabled>
                Disabled Field
            </Label>
            <Input
                id="disabled-input"
                type="text"
                placeholder="This field is disabled"
                disabled
            />
        </div>
    ),
};

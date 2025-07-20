import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
    title: "Components/Atoms/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: [
                "accent",
                "primary",
                "secondary",
                "ghost",
                "mistake",
                "success",
                "review",
            ],
        },
        size: {
            control: { type: "select" },
            options: ["default"],
        },
        disabled: {
            control: { type: "boolean" },
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Button",
    },
};

export const Primary: Story = {
    args: {
        variant: "primary",
        children: "Primary",
    },
};

export const Accent: Story = {
    args: {
        variant: "accent",
        children: "Accent",
    },
};

export const Secondary: Story = {
    args: {
        variant: "secondary",
        children: "Secondary",
    },
};

export const Ghost: Story = {
    args: {
        variant: "ghost",
        children: "Ghost",
    },
};

export const Mistake: Story = {
    args: {
        variant: "mistake",
        children: "Mistake",
    },
};

export const Success: Story = {
    args: {
        variant: "success",
        children: "Success",
    },
};

export const Review: Story = {
    args: {
        variant: "review",
        children: "Review",
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        children: "Disabled",
    },
};

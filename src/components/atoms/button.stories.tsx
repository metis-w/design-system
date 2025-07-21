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

export const TypographyTest: Story = {
    render: () => (
        <div className="space-y-4">
            <div className="space-y-2">
                <h3 className="text-ui-title-base text-text-pr">Typography Test for Buttons</h3>
                <p className="text-ui-body-sm text-text-sec">
                    Testing if text-ui-label-base class is applied to buttons
                </p>
            </div>
            
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <Button>Default Button</Button>
                    <span className="text-ui-body-sm text-text-ter">← Should have text-ui-label-base</span>
                </div>
                
                <div className="flex items-center gap-4">
                    <Button variant="secondary">Secondary Button</Button>
                    <span className="text-ui-body-sm text-text-ter">← Should have text-ui-label-base</span>
                </div>
                
                <div className="flex items-center gap-4">
                    <Button className="text-ui-title-lg">With text-ui-title-lg</Button>
                    <span className="text-ui-body-sm text-text-ter">← Custom typography class</span>
                </div>
                
                <div className="space-y-2 mt-6 p-4 bg-cont-sec rounded-lg">
                    <h4 className="text-ui-subtitle text-text-pr">Comparison:</h4>
                    <p className="text-ui-label-base text-text-pr">This text has text-ui-label-base class</p>
                    <p className="text-ui-body-base text-text-pr">This text has text-ui-body-base class</p>
                    <p className="text-ui-title-lg text-text-pr">This text has text-ui-title-lg class</p>
                </div>
            </div>
        </div>
    ),
};
import type { Meta, StoryObj } from "@storybook/react";
import { Label } from ".";

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
        <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="w-full px-3 py-2 border border-border-default rounded-lg bg-bg-inp text-text-inp-filled placeholder:text-text-inp focus:border-border-inp-focus focus:ring-2 focus:ring-ring-inp-focus focus:outline-none disabled:bg-bg-inp-disabled disabled:text-text-inp-disabled"
            />
        </div>
    ),
};

export const DisabledWithInput: Story = {
    render: () => (
        <div className="space-y-2">
            <Label htmlFor="disabled-input" className="group-data-[disabled=true]:opacity-50">
                Disabled Field
            </Label>
            <input
                id="disabled-input"
                type="text"
                placeholder="This field is disabled"
                disabled
                className="w-full px-3 py-2 border border-border-default rounded-lg bg-bg-inp-disabled text-text-inp-disabled placeholder:text-text-inp-disabled"
            />
        </div>
    ),
};

export const WithCheckbox: Story = {
    render: () => (
        <div className="flex items-center space-x-2">
            <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-border-default rounded"
            />
            <Label htmlFor="terms">
                I agree to the terms and conditions
            </Label>
        </div>
    ),
};

export const WithRadio: Story = {
    render: () => (
        <div className="space-y-3">
            <div className="flex items-center space-x-2">
                <input
                    id="option1"
                    name="options"
                    type="radio"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-border-default"
                />
                <Label htmlFor="option1">Option 1</Label>
            </div>
            
            <div className="flex items-center space-x-2">
                <input
                    id="option2"
                    name="options"
                    type="radio"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-border-default"
                />
                <Label htmlFor="option2">Option 2</Label>
            </div>
            
            <div className="flex items-center space-x-2">
                <input
                    id="option3"
                    name="options"
                    type="radio"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-border-default"
                />
                <Label htmlFor="option3">Option 3</Label>
            </div>
        </div>
    ),
};

export const LongText: Story = {
    args: {
        children: "This is a very long label text that demonstrates how the label component handles longer content and wrapping behavior when needed",
        htmlFor: "long-text-input",
    },
};

export const Typography: Story = {
    render: () => (
        <div className="space-y-4">
            <div className="space-y-2">
                <h3 className="typo-ui-title-sm text-text-pr">Label Typography Examples</h3>
                <p className="typo-ui-body-sm text-text-sec">
                    Labels using different typography utilities
                </p>
            </div>
            
            <div className="space-y-3">
                <Label className="typo-ui-label-lg">Large Label</Label>
                <Label className="typo-ui-label-base">Base Label (Default)</Label>
                <Label className="typo-ui-label-sm">Small Label</Label>
            </div>
        </div>
    ),
};

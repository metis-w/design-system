import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";
import { Label } from "../label";

const meta = {
    title: "Components/Atoms/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        type: {
            control: { type: "select" },
            options: ["text", "email", "password", "number", "tel", "url"],
        },
        placeholder: {
            control: { type: "text" },
        },
        disabled: {
            control: { type: "boolean" },
        },
        readOnly: {
            control: { type: "boolean" },
        },
        showPasswordToggle: {
            control: { type: "boolean" },
        },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: "Enter text...",
    },
};

export const Email: Story = {
    args: {
        type: "email",
        placeholder: "Enter your email...",
    },
};

export const Password: Story = {
    args: {
        type: "password",
        placeholder: "Enter your password...",
    },
};

export const PasswordWithToggle: Story = {
    args: {
        type: "password",
        placeholder: "Enter your password...",
        showPasswordToggle: true,
        defaultValue: "secretpassword123",
    },
};

export const WithValue: Story = {
    args: {
        placeholder: "Enter text...",
        defaultValue: "Sample text",
    },
};

export const Disabled: Story = {
    args: {
        placeholder: "Disabled input",
        disabled: true,
    },
};

export const DisabledWithValue: Story = {
    args: {
        placeholder: "Disabled input",
        defaultValue: "Disabled with value",
        disabled: true,
    },
};

export const Readonly: Story = {
    args: {
        placeholder: "This is readonly",
        defaultValue: "This input is readonly",
        readOnly: true,
    },
};

export const PasswordExamples: Story = {
    render: () => (
        <div className="space-y-4 w-80">
            <div className="space-y-2">
                <h3 className="typo-ui-title-sm text-text-pr">
                    Password Input Examples
                </h3>
                <p className="typo-ui-body-sm text-text-sec">
                    Different password input configurations
                </p>
            </div>

            <div className="space-y-4">
                <div className="space-y-2">
                    <Label>
                        Regular Password Input
                    </Label>
                    <Input
                        type="password"
                        placeholder="Enter password..."
                        defaultValue="secretpassword"
                    />
                </div>

                <div className="space-y-2">
                    <Label>
                        Password Input with Placeholder
                    </Label>
                    <Input
                        type="password"
                        placeholder="Enter password..."
                        showPasswordToggle
                        defaultValue="secretpassword"
                    />
                </div>

                <div className="space-y-2">
                    <Label>
                        Empty Password Input
                    </Label>
                    <Input
                        type="password"
                        placeholder="Enter password..."
                        showPasswordToggle={true}
                    />
                </div>

                <div className="space-y-2">
                    <Label disabled>
                        Disabled Password Input
                    </Label>
                    <Input
                        type="password"
                        placeholder="Enter password..."
                        showPasswordToggle={true}
                        defaultValue="secretpassword"
                        disabled
                    />
                </div>

                <div className="space-y-2">
                    <Label>
                        Readonly Text Input
                    </Label>
                    <Input
                        placeholder="Readonly input"
                        defaultValue="This is readonly text"
                        readOnly
                    />
                </div>

                <div className="space-y-2">
                    <Label>
                        Readonly Password Input
                    </Label>
                    <Input
                        type="password"
                        placeholder="Enter password..."
                        showPasswordToggle={true}
                        defaultValue="secretpassword"
                        readOnly
                    />
                </div>
            </div>
        </div>
    ),
};

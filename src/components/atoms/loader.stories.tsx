import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./loader";

const meta = {
    title: "Components/Atoms/Loader",
    component: Loader,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["sm", "md", "lg"],
        },
        message: {
            control: { type: "text" },
        },
        fullScreen: {
            control: { type: "boolean" },
        },
    },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        fullScreen: false,
    },
};

export const WithMessage: Story = {
    args: {
        message: "Loading data...",
        fullScreen: false,
    },
};

export const Small: Story = {
    args: {
        size: "sm",
        message: "Loading...",
        fullScreen: false,
    },
};

export const Medium: Story = {
    args: {
        size: "md",
        message: "Loading...",
        fullScreen: false,
    },
};

export const Large: Story = {
    args: {
        size: "lg",
        message: "Loading...",
        fullScreen: false,
    },
};

export const NoMessage: Story = {
    args: {
        message: "",
        fullScreen: false,
    },
};

export const CustomMessage: Story = {
    args: {
        message: "Please wait while we process your request...",
        fullScreen: false,
    },
};

export const FullScreen: Story = {
    args: {
        message: "Loading application...",
        fullScreen: true,
    },
    parameters: {
        layout: "fullscreen",
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-8">
            <div className="text-center">
                <Loader size="sm" message="Small" fullScreen={false} />
            </div>
            <div className="text-center">
                <Loader size="md" message="Medium" fullScreen={false} />
            </div>
            <div className="text-center">
                <Loader size="lg" message="Large" fullScreen={false} />
            </div>
        </div>
    ),
    parameters: {
        layout: "centered",
    },
};

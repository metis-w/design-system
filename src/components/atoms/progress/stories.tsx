import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Progress } from ".";

const meta = {
    title: "Components/Atoms/Progress",
    component: Progress,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        value: {
            control: { type: "number", min: 0, max: 100, step: 1 },
            description: "Progress value from 0 to 100",
        },
        className: {
            control: { type: "text" },
            description: "Additional CSS classes",
        },
    },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 50,
        className: "w-md",
    },
};

export const Empty: Story = {
    args: {
        value: 0,
        className: "w-md",
    },
};

export const Quarter: Story = {
    args: {
        value: 25,
        className: "w-md",
    },
};

export const Half: Story = {
    args: {
        value: 50,
        className: "w-md",
    },
};

export const ThreeQuarters: Story = {
    args: {
        value: 75,
        className: "w-md",
    },
};

export const Complete: Story = {
    args: {
        value: 100,
        className: "w-md",
    },
};

export const WithLabels: Story = {
    render: () => (
        <div className="space-y-6 w-md max-w-lg">
            <div className="space-y-6">
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <p className="typo-ui-label-base text-text-pr">
                            16 of 32
                        </p>
                        <p className="typo-ui-label-base text-text-sec">50%</p>
                    </div>
                    <Progress value={50} className="w-full" />
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <p className="typo-ui-label-base text-text-pr">
                            8 of 32
                        </p>
                        <p className="typo-ui-label-base text-text-sec">25%</p>
                    </div>
                    <Progress value={25} className="w-full" />
                </div>
            </div>
        </div>
    ),
};

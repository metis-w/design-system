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
        className: "w-96",
    },
};

export const Empty: Story = {
    args: {
        value: 0,
        className: "w-96",
    },
};

export const Quarter: Story = {
    args: {
        value: 25,
        className: "w-96",
    },
};

export const Half: Story = {
    args: {
        value: 50,
        className: "w-96",
    },
};

export const ThreeQuarters: Story = {
    args: {
        value: 75,
        className: "w-96",
    },
};

export const Complete: Story = {
    args: {
        value: 100,
        className: "w-96",
    },
};

export const CustomWidth: Story = {
    render: () => (
        <div className="space-y-6 w-full max-w-2xl">
            <div className="space-y-2">
                <h3 className="typo-ui-title-base text-text-pr">Custom Widths</h3>
                <p className="typo-ui-body-sm text-text-sec">
                    Progress bars with different widths
                </p>
            </div>

            <div className="space-y-4">
                <div className="space-y-2">
                    <span className="typo-ui-label-base text-text-pr">Small (200px)</span>
                    <Progress value={65} className="w-48" />
                </div>

                <div className="space-y-2">
                    <span className="typo-ui-label-base text-text-pr">Medium (300px)</span>
                    <Progress value={65} className="w-72" />
                </div>

                <div className="space-y-2">
                    <span className="typo-ui-label-base text-text-pr">Large (400px)</span>
                    <Progress value={65} className="w-96" />
                </div>

                <div className="space-y-2">
                    <span className="typo-ui-label-base text-text-pr">Full width</span>
                    <Progress value={65} className="w-full" />
                </div>
            </div>
        </div>
    ),
};

export const CustomHeight: Story = {
    render: () => (
        <div className="space-y-6 w-full max-w-md">
            <div className="space-y-2">
                <h3 className="typo-ui-title-base text-text-pr">Custom Heights</h3>
                <p className="typo-ui-body-sm text-text-sec">
                    Progress bars with different heights
                </p>
            </div>

            <div className="space-y-4">
                <div className="space-y-2">
                    <span className="typo-ui-label-base text-text-pr">Thin (h-1)</span>
                    <Progress value={60} className="w-full h-1" />
                </div>

                <div className="space-y-2">
                    <span className="typo-ui-label-base text-text-pr">Default (h-2)</span>
                    <Progress value={60} className="w-full" />
                </div>

                <div className="space-y-2">
                    <span className="typo-ui-label-base text-text-pr">Medium (h-3)</span>
                    <Progress value={60} className="w-full h-3" />
                </div>

                <div className="space-y-2">
                    <span className="typo-ui-label-base text-text-pr">Thick (h-4)</span>
                    <Progress value={60} className="w-full h-4" />
                </div>
            </div>
        </div>
    ),
};

export const WithLabels: Story = {
    render: () => (
        <div className="space-y-6 w-full max-w-md">
            <div className="space-y-2">
                <h3 className="typo-ui-title-base text-text-pr">Progress with Labels</h3>
                <p className="typo-ui-body-sm text-text-sec">
                    Progress bars with percentage labels
                </p>
            </div>

            <div className="space-y-6">
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="typo-ui-label-base text-text-pr">Loading...</span>
                        <span className="typo-ui-label-sm text-text-ter">25%</span>
                    </div>
                    <Progress value={25} className="w-full" />
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="typo-ui-label-base text-text-pr">Processing...</span>
                        <span className="typo-ui-label-sm text-text-ter">65%</span>
                    </div>
                    <Progress value={65} className="w-full" />
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="typo-ui-label-base text-text-pr">Complete</span>
                        <span className="typo-ui-label-sm text-text-suc">100%</span>
                    </div>
                    <Progress value={100} className="w-full" />
                </div>
            </div>
        </div>
    ),
};

export const AnimatedProgress: Story = {
    render: () => {
        const [progress, setProgress] = React.useState(0);

        React.useEffect(() => {
            const timer = setInterval(() => {
                setProgress((oldProgress) => {
                    if (oldProgress >= 100) {
                        return 0;
                    }
                    const diff = Math.random() * 10;
                    return Math.min(oldProgress + diff, 100);
                });
            }, 500);

            return () => {
                clearInterval(timer);
            };
        }, []);

        return (
            <div className="space-y-6 w-full max-w-md">
                <div className="space-y-2">
                    <h3 className="typo-ui-title-base text-text-pr">Animated Progress</h3>
                    <p className="typo-ui-body-sm text-text-sec">
                        Auto-updating progress bar
                    </p>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="typo-ui-label-base text-text-pr">Downloading...</span>
                        <span className="typo-ui-label-sm text-text-ter">{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="w-full" />
                </div>
            </div>
        );
    },
};

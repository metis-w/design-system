import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from ".";

const meta = {
    title: "Components/Atoms/Skeleton",
    component: Skeleton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        className: "w-32 h-4",
    },
};

export const Circle: Story = {
    args: {
        className: "w-12 h-12 rounded-full",
    },
};

export const Rectangle: Story = {
    args: {
        className: "w-48 h-24 rounded-lg",
    },
};

export const Text: Story = {
    render: () => (
        <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-3/4" />
        </div>
    ),
};

export const DeckCard: Story = {
    render: () => (
        <div className="p-5">
            <div className="w-full max-w-md">
                <div className="border border-border-default rounded-lg">
                    <div className="p-3 space-y-4">
                        <div className="flex items-start justify-between">
                            <div className="space-y-2 flex-1">
                                <Skeleton className="h-6 w-32" />
                                <Skeleton className="h-4 w-16" />
                            </div>
                            <Skeleton className="w-8 h-8" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Skeleton className="h-4 w-16" />{" "}
                                <Skeleton className="h-4 w-8" />
                            </div>
                            <Skeleton className="h-2 w-full rounded-full" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 p-3 items-stretch justify-between border-t border-t-border-default md:flex-row">
                        <Skeleton className="h-9 w-full rounded-md md:w-24" />{" "}
                        <Skeleton className="h-9 w-full rounded-md md:w-24" />{" "}
                    </div>
                </div>
            </div>
        </div>
    ),
};

export const Button: Story = {
    args: {
        className: "h-9 w-35 rounded-md",
    },
};

export const Avatar: Story = {
    args: {
        className: "w-9 h-9 rounded-full",
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="space-y-4">
            <div className="space-y-2">
                <p className="text-ui-label-sm text-text-ter">Small</p>
                <Skeleton className="h-2 w-32" />
            </div>
            <div className="space-y-2">
                <p className="text-ui-label-sm text-text-ter">Medium</p>
                <Skeleton className="h-4 w-48" />
            </div>
            <div className="space-y-2">
                <p className="text-ui-label-sm text-text-ter">Large</p>
                <Skeleton className="h-6 w-64" />
            </div>
        </div>
    ),
};

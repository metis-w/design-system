import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./skeleton";

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

export const Card: Story = {
    render: () => (
        <div className="border border-border-default rounded-lg p-4 space-y-4 max-w-sm">
            <div className="flex items-center space-x-4">
                <Skeleton className="w-12 h-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-16" />
                </div>
            </div>
            <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
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
        className: "w-10 h-10 rounded-full",
    },
};

export const ArticleCard: Story = {
    render: () => (
        <div className="border border-border-default rounded-lg overflow-hidden max-w-sm">
            <Skeleton className="h-48 w-full rounded-none" />
            <div className="p-4 space-y-3">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <div className="space-y-2">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-2/3" />
                </div>
                <div className="flex justify-between items-center pt-2">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-8 w-16 rounded-md" />
                </div>
            </div>
        </div>
    ),
};

export const Table: Story = {
    render: () => (
        <div className="space-y-3 w-full max-w-2xl">
            {/* Table Header */}
            <div className="flex gap-4">
                <Skeleton className="h-4 flex-1" />
                <Skeleton className="h-4 flex-1" />
                <Skeleton className="h-4 flex-1" />
                <Skeleton className="h-4 flex-1" />
            </div>
            {/* Table Rows */}
            {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex gap-4">
                    <Skeleton className="h-3 flex-1" />
                    <Skeleton className="h-3 flex-1" />
                    <Skeleton className="h-3 flex-1" />
                    <Skeleton className="h-3 flex-1" />
                </div>
            ))}
        </div>
    ),
    parameters: {
        layout: 'padded',
    },
};

export const SimpleTable: Story = {
    render: () => (
        <div className="space-y-2 w-80">
            <div className="space-y-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-4/5" />
            </div>
        </div>
    ),
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

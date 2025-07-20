import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const meta = {
    title: "Components/Atoms/Avatar",
    component: Avatar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Avatar>
            <AvatarImage src="https://github.com/metis-w.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    ),
};

export const Fallback: Story = {
    render: () => (
        <Avatar>
            <AvatarImage src="https://broken-link.png" alt="Broken" />
            <AvatarFallback>JD</AvatarFallback>
        </Avatar>
    ),
};

export const OnlyFallback: Story = {
    render: () => (
        <Avatar>
            <AvatarFallback>MW</AvatarFallback>
        </Avatar>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Avatar className="size-8">
                <AvatarImage src="https://github.com/metis-w.png" alt="Small" />
                <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <Avatar className="size-12">
                <AvatarImage src="https://github.com/metis-w.png" alt="Medium" />
                <AvatarFallback>M</AvatarFallback>
            </Avatar>
            <Avatar className="size-16">
                <AvatarImage src="https://github.com/metis-w.png" alt="Large" />
                <AvatarFallback>L</AvatarFallback>
            </Avatar>
        </div>
    ),
};

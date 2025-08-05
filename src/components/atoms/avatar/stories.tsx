import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarFallback, AvatarImage } from ".";

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
            <AvatarImage
                src="https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=1480"
                alt="@shadcn"
            />
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

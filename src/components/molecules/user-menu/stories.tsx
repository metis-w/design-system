import type { Meta, StoryObj } from "@storybook/react";

import {
    User,
    MessageCircleHeart,
    LogOut,
    Settings,
    CreditCard,
} from "lucide-react";
import { UserMenu } from ".";

const meta = {
    title: "Components/Molecules/UserMenu",
    component: UserMenu,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        avatar: {
            control: { type: "object" },
        },
    },
} satisfies Meta<typeof UserMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        avatar: { fallback: "U" },
        items: [
            {
                icon: <User />,
                label: "Account",
                location: "/account",
            },
            {
                icon: <Settings />,
                label: "Settings",
                location: "/settings",
            },
            {
                icon: <MessageCircleHeart />,
                label: "Contact us",
                location: "/contact",
            },
            {
                type: "separator",
            },
            {
                icon: <LogOut />,
                label: "Log out",
                onClick: () => console.log("Logout clicked"),
            },
        ],
    },
};

export const WithClickHandlers: Story = {
    args: {
        avatar: {
            src: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=1480",
            fallback: "U",
        },
        items: [
            {
                icon: <User />,
                label: "Profile",
                onClick: () => alert("Profile clicked"),
            },
            {
                icon: <CreditCard />,
                label: "Billing",
                onClick: () => alert("Billing clicked"),
            },
            {
                icon: <Settings />,
                label: "Settings",
                onClick: () => alert("Settings clicked"),
            },
            {
                type: "separator",
            },
            {
                icon: <LogOut />,
                label: "Sign out",
                onClick: () => alert("Sign out clicked"),
            },
        ],
    },
};

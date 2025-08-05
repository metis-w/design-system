import type { Meta, StoryObj } from "@storybook/react";

import { Header } from ".";
import {
    User,
    MessageCircleHeart,
    LogOut,
    Plus,
} from "lucide-react";
import { Button } from "@/components/atoms";
import { UserMenu } from "@/components/molecules";

const meta = {
    title: "Components/Organisms/Header",
    component: Header,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {
        position: {
            control: { type: "select" },
            options: ["fixed", "sticky", "relative"],
        },
        className: {
            control: { type: "text" },
        },
    },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        position: "relative",
    },
};

export const withChildren: Story = {
    args: {
        position: "relative",
        children: (
            <>
                <UserMenu
                    avatar={{ fallback: "U" }}
                    items={[
                        {
                            icon: <User />,
                            label: "Account",
                            location: "/account",
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
                    ]}
                />

                <Button variant="accent">
                    <Plus /> Add
                </Button>
            </>
        ),
    },
};

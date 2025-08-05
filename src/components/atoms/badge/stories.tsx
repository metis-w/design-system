import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from ".";
import { Book, Calendar, Clock } from "lucide-react";

const meta = {
    title: "Components/Atoms/Badge",
    component: Badge,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["accent", "success", "rewiev"],
        },
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: "accent",
        children: <Calendar className="size-5"/>,
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex gap-3">
            <Badge variant="accent">
                <Calendar className="size-5"/>
            </Badge>
            <Badge variant="success">
                <Book className="size-5"/>
            </Badge>
            <Badge variant="rewiev">
                <Clock className="size-5"/>
            </Badge>
        </div>
    ),
};

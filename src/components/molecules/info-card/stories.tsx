import type { Meta, StoryObj } from "@storybook/react";

import { InfoCard } from ".";
import { Calendar } from "lucide-react";
import { Badge } from "@/components/atoms";

const meta = {
    title: "Components/Molecules/InfoCard",
    component: InfoCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        title: {
            control: { type: "text" },
        },
        label: {
            control: { type: "text" },
        },
        className: {
            control: { type: "text" },
        },
    },
} satisfies Meta<typeof InfoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Total Cards",
        label: "Learning Progress",
        badge: (
            <Badge variant="accent">
                <Calendar className="size-5" />
            </Badge>
        ),
        className: "w-md",
    },
};

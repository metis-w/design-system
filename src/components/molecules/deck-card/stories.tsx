import type { Meta, StoryObj } from "@storybook/react";

import { DeckCard, DeckCardContent, DeckCardActions, DeckCardFooter } from ".";

interface StoryArgs {
    className?: string;
    progress?: number;
    title?: string;
    description?: string;
}

const meta: Meta<StoryArgs> = {
    title: "Components/Molecules/DeckCard",
    component: DeckCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        className: {
            control: { type: "text" },
        },
        progress: {
            control: { 
                type: "number",
                min: 0,
                max: 100,
                step: 1,
            },
        },
        title: {
            control: { type: "text" },
        },
        description: {
            control: { type: "text" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        className: "w-md",
        progress: 75,
        title: "Title",
        description: "Language",
    },
    render: (args) => (
        <DeckCard className={args.className}>
            <DeckCardContent
                title={args.title || "Title"}
                description={args.description || "Description"}
                progress={args.progress || 0}
            >
                <DeckCardActions
                    onEdit={() => console.log("Edit clicked")}
                    onDelete={() => console.log("Delete clicked")}
                />
            </DeckCardContent>
            <DeckCardFooter
                onAddCard={() => console.log("Add card clicked")}
                onStudy={() => console.log("Study clicked")}
            />
        </DeckCard>
    ),
};

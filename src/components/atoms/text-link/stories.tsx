import type { Meta, StoryObj } from "@storybook/react";
import { Globe, Home, ArrowRight } from "lucide-react";
import { TextLink } from ".";

const meta = {
    title: "Components/Atoms/TextLink",
    component: TextLink,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["default", "destructive"],
        },
        size: {
            control: { type: "select" },
            options: ["sm", "base", "lg"],
        },
        underline: {
            control: { type: "select" },
            options: ["auto", "always", "never"],
        },
        external: {
            control: { type: "boolean" },
        },
        asChild: {
            control: { type: "boolean" },
        },
        children: {
            control: { type: "text" },
        },
    },
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Text Link",
        href: "#",
    },
};

export const DefaultVariant: Story = {
    args: {
        variant: "default",
        children: "Default Link",
        href: "#",
    },
};

export const Destructive: Story = {
    args: {
        variant: "destructive",
        children: "Destructive Link",
        href: "#",
    },
};

export const SizeSmall: Story = {
    args: {
        size: "sm",
        children: "Small Link",
        href: "#",
    },
};

export const SizeBase: Story = {
    args: {
        size: "base",
        children: "Base Link",
        href: "#",
    },
};

export const SizeLarge: Story = {
    args: {
        size: "lg",
        children: "Large Link",
        href: "#",
    },
};

export const UnderlineAuto: Story = {
    args: {
        underline: "auto",
        children: "Auto Underline (hover to see)",
        href: "#",
    },
};

export const UnderlineAlways: Story = {
    args: {
        underline: "always",
        children: "Always Underlined",
        href: "#",
    },
};

export const UnderlineNever: Story = {
    args: {
        underline: "never",
        children: "Never Underlined",
        href: "#",
    },
};

export const ExternalLink: Story = {
    args: {
        external: true,
        children: "External Link",
        href: "https://example.com",
    },
};

export const WithIcon: Story = {
    args: {
        children: (
            <>
                <Home className="size-4" />
                Link with Home Icon
            </>
        ),
        href: "#",
    },
};

export const WithGlobeIcon: Story = {
    args: {
        children: (
            <>
                <Globe className="size-4" />
                Website Link
            </>
        ),
        href: "#",
    },
};

export const WithArrowIcon: Story = {
    args: {
        children: (
            <>
                Continue Reading
                <ArrowRight className="size-4" />
            </>
        ),
        href: "#",
    },
};

export const CombinedVariants: Story = {
    render: () => (
        <div className="flex flex-col gap-4 items-start">
            <TextLink variant="default" size="sm" underline="always" href="#">
                Small Default Always Underlined
            </TextLink>
            <TextLink
                variant="destructive"
                size="base"
                underline="auto"
                href="#"
            >
                Base Destructive Auto Underline
            </TextLink>
            <TextLink variant="default" size="lg" underline="never" href="#">
                Large Default Never Underlined
            </TextLink>
            <TextLink
                variant="destructive"
                size="sm"
                external
                href="https://example.com"
            >
                Small Destructive External
            </TextLink>
        </div>
    ),
};

export const InteractiveDemo: Story = {
    render: () => (
        <div className="flex flex-col gap-6 p-4">
            <div>
                <h3 className="text-lg font-semibold mb-2">Variants</h3>
                <div className="flex gap-4">
                    <TextLink variant="default" href="#">
                        Default
                    </TextLink>
                    <TextLink variant="destructive" href="#">
                        Destructive
                    </TextLink>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-2">Sizes</h3>
                <div className="flex items-center gap-4">
                    <TextLink size="sm" href="#">
                        Small
                    </TextLink>
                    <TextLink size="base" href="#">
                        Base
                    </TextLink>
                    <TextLink size="lg" href="#">
                        Large
                    </TextLink>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-2">
                    Underline Options
                </h3>
                <div className="flex gap-4">
                    <TextLink underline="auto" href="#">
                        Auto (hover)
                    </TextLink>
                    <TextLink underline="always" href="#">
                        Always
                    </TextLink>
                    <TextLink underline="never" href="#">
                        Never
                    </TextLink>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-2">Special Cases</h3>
                <div className="flex flex-col gap-2 items-start">
                    <TextLink external href="https://example.com">
                        External Link (opens in new tab)
                    </TextLink>
                    <TextLink href="#">
                        <Home className="size-4" />
                        Link with Icon
                    </TextLink>
                    <TextLink href="#">
                        Navigate Forward
                        <ArrowRight className="size-4" />
                    </TextLink>
                </div>
            </div>
        </div>
    ),
};

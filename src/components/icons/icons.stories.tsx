import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./logo";
import { LogoExt } from "./logo-ext";
import { Google } from "./google";
import { Button } from "../atoms/button";

const meta = {
    title: "Components/Icons",
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const LogoIcon: StoryObj = {
    render: () => <Logo />,
    name: "Logo",
};

export const LogoExtended: StoryObj = {
    render: () => <LogoExt />,
    name: "Logo Extended",
};

export const GoogleIcon: StoryObj = {
    render: () => <Google />,
    name: "Google",
};

export const Sizes: StoryObj = {
    render: () => (
        <div className="space-y-8">
            <div className="space-y-4">
                <h3 className="text-ui-title-sm text-text-pr">Logo</h3>
                <div className="flex items-center gap-4">
                    <Logo className="w-4 h-4" />
                    <Logo className="w-6 h-6" />
                    <Logo className="w-8 h-8" />
                    <Logo className="w-12 h-12" />
                    <Logo className="w-16 h-16" />
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-ui-title-sm text-text-pr">Logo Extended</h3>
                <div className="flex items-center gap-4">
                    <LogoExt className="w-10 h-4" />
                    <LogoExt className="w-15 h-6" />
                    <LogoExt className="w-20 h-8" />
                    <LogoExt className="w-30 h-12" />
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-ui-title-sm text-text-pr">Google</h3>
                <div className="flex items-center gap-4">
                    <Google className="w-4 h-4" />
                    <Google className="w-6 h-6" />
                    <Google className="w-8 h-8" />
                    <Google className="w-12 h-12" />
                    <Google className="w-16 h-16" />
                </div>
            </div>
        </div>
    ),
};

export const Usage: StoryObj = {
    render: () => (
        <div className="space-y-8">
            <div className="space-y-4">
                <h3 className="text-ui-title-sm text-text-pr">In Buttons</h3>
                <div className="flex gap-4">
                    <Button variant="primary">
                        <Google />
                        Sign in with Google
                    </Button>
                    <Button variant="secondary">
                        <Logo />
                        Continue
                    </Button>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-ui-title-sm text-text-pr">In Headers</h3>
                <div className="border border-border-default rounded-lg p-4">
                    <div className="flex items-center gap-3">
                        <LogoExt className="w-20 h-8" />
                        <div className="text-ui-body-sm text-text-ter">
                            Design System
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
};

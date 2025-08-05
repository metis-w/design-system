import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import {
    AdaptiveDialog,
    AdaptiveDialogClose,
    AdaptiveDialogContent,
    AdaptiveDialogDescription,
    AdaptiveDialogFooter,
    AdaptiveDialogHeader,
    AdaptiveDialogTitle,
    AdaptiveDialogTrigger,
    AdaptiveDialogBody,
} from ".";
import { Button, IconButton, Input, Label } from "@/components/atoms";
import { X, Settings, User, AlertTriangle, CheckCircle } from "lucide-react";

const meta: Meta = {
    title: "Components/Organisms/AdaptiveDialog",
    component: AdaptiveDialog,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component:
                    "Adaptive dialog that shows as a Modal on desktop (&ge;640px) and Drawer on mobile. Resize your screen to see the behavior change.",
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => (
        <AdaptiveDialog>
            <AdaptiveDialogTrigger asChild>
                <Button>Open Dialog</Button>
            </AdaptiveDialogTrigger>
            <AdaptiveDialogContent>
                <AdaptiveDialogHeader>
                    <AdaptiveDialogTitle>Adaptive Dialog</AdaptiveDialogTitle>
                    <AdaptiveDialogDescription>
                        This dialog adapts to screen size. On desktop it shows
                        as a modal, on mobile as a drawer. Try resizing your
                        browser window!
                    </AdaptiveDialogDescription>
                </AdaptiveDialogHeader>
                <AdaptiveDialogBody>
                    <p className="typo-ui-body-base text-text-pr">
                        Content goes here. The layout automatically adapts to
                        provide the best user experience on each device type.
                    </p>
                </AdaptiveDialogBody>
                <AdaptiveDialogFooter>
                    <AdaptiveDialogClose asChild>
                        <Button variant="secondary">Cancel</Button>
                    </AdaptiveDialogClose>
                    <Button>Continue</Button>
                </AdaptiveDialogFooter>
            </AdaptiveDialogContent>
        </AdaptiveDialog>
    ),
};

export const WithForm: Story = {
    render: () => {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");

        return (
            <AdaptiveDialog>
                <AdaptiveDialogTrigger asChild>
                    <Button>
                        <User className="w-4 h-4 mr-2" />
                        Add User
                    </Button>
                </AdaptiveDialogTrigger>
                <AdaptiveDialogContent size="lg">
                    <AdaptiveDialogHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <AdaptiveDialogTitle>
                                    Create New User
                                </AdaptiveDialogTitle>
                                <AdaptiveDialogDescription>
                                    Fill in the information below to create a
                                    new user account.
                                </AdaptiveDialogDescription>
                            </div>
                            <AdaptiveDialogClose asChild>
                                <IconButton>
                                    <X />
                                </IconButton>
                            </AdaptiveDialogClose>
                        </div>
                    </AdaptiveDialogHeader>
                    <AdaptiveDialogBody>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    placeholder="Enter full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Enter password"
                                    showPasswordToggle
                                />
                            </div>
                        </div>
                    </AdaptiveDialogBody>
                    <AdaptiveDialogFooter>
                        <AdaptiveDialogClose asChild>
                            <Button variant="secondary">Cancel</Button>
                        </AdaptiveDialogClose>
                        <Button>Create User</Button>
                    </AdaptiveDialogFooter>
                </AdaptiveDialogContent>
            </AdaptiveDialog>
        );
    },
};

export const ConfirmationDialog: Story = {
    render: () => (
        <AdaptiveDialog>
            <AdaptiveDialogTrigger asChild>
                <Button variant="mistake">Delete Item</Button>
            </AdaptiveDialogTrigger>
            <AdaptiveDialogContent size="sm">
                <AdaptiveDialogHeader>
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-amist">
                            <AlertTriangle className="h-5 w-5 text-text-amist" />
                        </div>
                        <div>
                            <AdaptiveDialogTitle>
                                Delete Confirmation
                            </AdaptiveDialogTitle>
                            <AdaptiveDialogDescription>
                                This action cannot be undone.
                            </AdaptiveDialogDescription>
                        </div>
                    </div>
                </AdaptiveDialogHeader>
                <AdaptiveDialogBody>
                    <p className="typo-ui-body-base text-text-pr">
                        Are you sure you want to delete this item? This will
                        permanently remove it from your account and cannot be
                        recovered.
                    </p>
                </AdaptiveDialogBody>
                <AdaptiveDialogFooter>
                    <AdaptiveDialogClose asChild>
                        <Button variant="secondary">Cancel</Button>
                    </AdaptiveDialogClose>
                    <Button variant="mistake">Delete</Button>
                </AdaptiveDialogFooter>
            </AdaptiveDialogContent>
        </AdaptiveDialog>
    ),
};

export const SuccessDialog: Story = {
    render: () => (
        <AdaptiveDialog>
            <AdaptiveDialogTrigger asChild>
                <Button variant="success">Complete Action</Button>
            </AdaptiveDialogTrigger>
            <AdaptiveDialogContent size="sm">
                <AdaptiveDialogHeader>
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-asuc">
                            <CheckCircle className="h-5 w-5 text-text-asuc" />
                        </div>
                        <div>
                            <AdaptiveDialogTitle>Success!</AdaptiveDialogTitle>
                            <AdaptiveDialogDescription>
                                Your action was completed successfully.
                            </AdaptiveDialogDescription>
                        </div>
                    </div>
                </AdaptiveDialogHeader>
                <AdaptiveDialogBody>
                    <p className="typo-ui-body-base text-text-pr">
                        The operation has been completed successfully. You can
                        now continue with your workflow.
                    </p>
                </AdaptiveDialogBody>
                <AdaptiveDialogFooter>
                    <AdaptiveDialogClose asChild>
                        <Button>Continue</Button>
                    </AdaptiveDialogClose>
                </AdaptiveDialogFooter>
            </AdaptiveDialogContent>
        </AdaptiveDialog>
    ),
};

export const SettingsDialog: Story = {
    render: () => (
        <AdaptiveDialog>
            <AdaptiveDialogTrigger asChild>
                <Button variant="ghost">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                </Button>
            </AdaptiveDialogTrigger>
            <AdaptiveDialogContent size="xl">
                <AdaptiveDialogHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <AdaptiveDialogTitle>
                                Application Settings
                            </AdaptiveDialogTitle>
                            <AdaptiveDialogDescription>
                                Manage your application preferences and
                                configuration.
                            </AdaptiveDialogDescription>
                        </div>
                        <AdaptiveDialogClose asChild>
                            <IconButton>
                                <X />
                            </IconButton>
                        </AdaptiveDialogClose>
                    </div>
                </AdaptiveDialogHeader>
                <AdaptiveDialogBody>
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <h4 className="typo-ui-label-lg text-text-pr">
                                Notifications
                            </h4>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        className="rounded"
                                    />
                                    <div>
                                        <span className="typo-ui-body-base text-text-pr">
                                            Email notifications
                                        </span>
                                        <p className="typo-ui-body-sm text-text-sec">
                                            Receive updates via email
                                        </p>
                                    </div>
                                </label>
                                <label className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        className="rounded"
                                    />
                                    <div>
                                        <span className="typo-ui-body-base text-text-pr">
                                            Push notifications
                                        </span>
                                        <p className="typo-ui-body-sm text-text-sec">
                                            Get instant push notifications
                                        </p>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h4 className="typo-ui-label-lg text-text-pr">
                                Privacy
                            </h4>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        className="rounded"
                                    />
                                    <div>
                                        <span className="typo-ui-body-base text-text-pr">
                                            Profile visibility
                                        </span>
                                        <p className="typo-ui-body-sm text-text-sec">
                                            Make your profile visible to others
                                        </p>
                                    </div>
                                </label>
                                <label className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        className="rounded"
                                    />
                                    <div>
                                        <span className="typo-ui-body-base text-text-pr">
                                            Activity status
                                        </span>
                                        <p className="typo-ui-body-sm text-text-sec">
                                            Show when you're online
                                        </p>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </AdaptiveDialogBody>
                <AdaptiveDialogFooter>
                    <AdaptiveDialogClose asChild>
                        <Button variant="secondary">Cancel</Button>
                    </AdaptiveDialogClose>
                    <Button>Save Changes</Button>
                </AdaptiveDialogFooter>
            </AdaptiveDialogContent>
        </AdaptiveDialog>
    ),
};

export const ResponsiveDemo: Story = {
    render: () => (
        <div className="space-y-4 text-center">
            <div className="p-4 bg-surf-sec rounded-lg">
                <h3 className="typo-ui-title-sm text-text-pr mb-2">
                    Responsive Behavior
                </h3>
                <p className="typo-ui-body-sm text-text-sec mb-4">
                    This dialog automatically adapts based on screen size:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left typo-ui-body-sm">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-text-pr">
                            &ge;768px: Modal (center-screen)
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="text-text-pr">
                            &lt;768px: Drawer (slide-up)
                        </span>
                    </div>
                </div>
            </div>

            <AdaptiveDialog>
                <AdaptiveDialogTrigger asChild>
                    <Button size="default">Test Responsive Dialog</Button>
                </AdaptiveDialogTrigger>
                <AdaptiveDialogContent>
                    <AdaptiveDialogHeader>
                        <AdaptiveDialogTitle>
                            Responsive Dialog Demo
                        </AdaptiveDialogTitle>
                        <AdaptiveDialogDescription>
                            Try resizing your browser window to see how this
                            dialog adapts!
                        </AdaptiveDialogDescription>
                    </AdaptiveDialogHeader>
                    <AdaptiveDialogBody>
                        <div className="space-y-3">
                            <p className="typo-ui-body-base text-text-pr">
                                Current behavior:
                            </p>
                            <div className="p-3 bg-surf-sec rounded typo-ui-body-sm text-text-sec">
                                On desktop (&ge;640px): Shows as a centered modal
                                with backdrop
                                <br />
                                On mobile (&lt;640px): Shows as a bottom drawer
                                that slides up
                            </div>
                        </div>
                    </AdaptiveDialogBody>
                    <AdaptiveDialogFooter>
                        <AdaptiveDialogClose asChild>
                            <Button variant="secondary">Close</Button>
                        </AdaptiveDialogClose>
                    </AdaptiveDialogFooter>
                </AdaptiveDialogContent>
            </AdaptiveDialog>
        </div>
    ),
};

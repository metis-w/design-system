import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../../atoms/button";
import { IconButton } from "../../atoms/icon-button";
import { Input } from "../../atoms/input";
import { Label } from "../../atoms/label";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from ".";
import { X, Settings, Plus, User } from "lucide-react";

const meta = {
    title: "Components/Molecules/Drawer",
    component: Drawer,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="secondary">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Default Drawer</DrawerTitle>
                    <DrawerDescription>
                        This is a simple drawer with basic content.
                    </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                    <p className="typo-ui-body-base text-text-pr">
                        Drawer content goes here. You can add any content you
                        need.
                    </p>
                </div>
                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button variant="secondary">Close</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    ),
};

export const WithForm: Story = {
    render: () => {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");

        return (
            <Drawer>
                <DrawerTrigger asChild>
                    <Button>
                        <User className="w-4 h-4" />
                        Add User
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <DrawerTitle>Add New User</DrawerTitle>
                                <DrawerDescription>
                                    Enter the user details below to create a new
                                    account.
                                </DrawerDescription>
                            </div>
                            <DrawerClose asChild>
                                <IconButton>
                                    <X />
                                </IconButton>
                            </DrawerClose>
                        </div>
                    </DrawerHeader>
                    <div className="p-4 space-y-4">
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
                    </div>
                    <DrawerFooter>
                        <Button className="w-full">Create User</Button>
                        <DrawerClose asChild>
                            <Button variant="secondary" className="w-full">
                                Cancel
                            </Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        );
    },
};

export const FromTop: Story = {
    render: () => (
        <Drawer direction="top">
            <DrawerTrigger asChild>
                <Button variant="secondary">Open from Top</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Top Drawer</DrawerTitle>
                    <DrawerDescription>
                        This drawer slides down from the top of the screen.
                    </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                    <p className="typo-ui-body-base text-text-pr">
                        Perfect for notifications, alerts, or quick actions that
                        don't require full screen attention.
                    </p>
                </div>
                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button variant="secondary">Dismiss</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    ),
};

export const FromRight: Story = {
    render: () => (
        <Drawer direction="right">
            <DrawerTrigger asChild>
                <Button variant="primary">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <DrawerTitle>Settings</DrawerTitle>
                            <DrawerDescription>
                                Manage your application preferences.
                            </DrawerDescription>
                        </div>
                        <DrawerClose asChild>
                            <IconButton>
                                <X />
                            </IconButton>
                        </DrawerClose>
                    </div>
                </DrawerHeader>
                <div className="p-4 space-y-4">
                    <div className="space-y-2">
                        <h4 className="typo-ui-label-lg text-text-pr">
                            Notifications
                        </h4>
                        <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" defaultChecked />
                                <span className="typo-ui-body-sm text-text-pr">
                                    Email notifications
                                </span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" />
                                <span className="typo-ui-body-sm text-text-pr">
                                    Push notifications
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h4 className="typo-ui-label-lg text-text-pr">
                            Privacy
                        </h4>
                        <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" defaultChecked />
                                <span className="typo-ui-body-sm text-text-pr">
                                    Profile visibility
                                </span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" defaultChecked />
                                <span className="typo-ui-body-sm text-text-pr">
                                    Activity status
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
                <DrawerFooter>
                    <Button className="w-full">Save Changes</Button>
                    <DrawerClose asChild>
                        <Button variant="secondary" className="w-full">
                            Cancel
                        </Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    ),
};

export const FromLeft: Story = {
    render: () => (
        <Drawer direction="left">
            <DrawerTrigger asChild>
                <Button variant="ghost">
                    <Plus className="w-4 h-4 mr-2" />
                    Navigation
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <div className="flex items-center justify-between">
                        <DrawerTitle>Navigation Menu</DrawerTitle>
                        <DrawerClose asChild>
                            <IconButton>
                                <X />
                            </IconButton>
                        </DrawerClose>
                    </div>
                </DrawerHeader>
                <div className="p-4">
                    <nav className="space-y-2">
                        <a
                            href="#"
                            className="block p-2 rounded typo-ui-body-base text-text-pr hover:bg-surf-sec transition-colors"
                        >
                            Dashboard
                        </a>
                        <a
                            href="#"
                            className="block p-2 rounded typo-ui-body-base text-text-pr hover:bg-surf-sec transition-colors"
                        >
                            Users
                        </a>
                        <a
                            href="#"
                            className="block p-2 rounded typo-ui-body-base text-text-pr hover:bg-surf-sec transition-colors"
                        >
                            Settings
                        </a>
                        <a
                            href="#"
                            className="block p-2 rounded typo-ui-body-base text-text-pr hover:bg-surf-sec transition-colors"
                        >
                            Reports
                        </a>
                        <a
                            href="#"
                            className="block p-2 rounded typo-ui-body-base text-text-pr hover:bg-surf-sec transition-colors"
                        >
                            Help
                        </a>
                    </nav>
                </div>
            </DrawerContent>
        </Drawer>
    ),
};

export const AllDirections: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Drawer direction="bottom">
                <DrawerTrigger asChild>
                    <Button variant="secondary">From Bottom</Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Bottom Drawer</DrawerTitle>
                        <DrawerDescription>
                            Slides up from bottom
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4">
                        <p className="typo-ui-body-sm text-text-pr">
                            Bottom drawer content
                        </p>
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="secondary">Close</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            <Drawer direction="top">
                <DrawerTrigger asChild>
                    <Button variant="secondary">From Top</Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Top Drawer</DrawerTitle>
                        <DrawerDescription>
                            Slides down from top
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4">
                        <p className="typo-ui-body-sm text-text-pr">
                            Top drawer content
                        </p>
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="secondary">Close</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            <Drawer direction="left">
                <DrawerTrigger asChild>
                    <Button variant="secondary">From Left</Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Left Drawer</DrawerTitle>
                        <DrawerDescription>Slides from left</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4">
                        <p className="typo-ui-body-sm text-text-pr">
                            Left drawer content
                        </p>
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="secondary">Close</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            <Drawer direction="right">
                <DrawerTrigger asChild>
                    <Button variant="secondary">From Right</Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Right Drawer</DrawerTitle>
                        <DrawerDescription>Slides from right</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4">
                        <p className="typo-ui-body-sm text-text-pr">
                            Right drawer content
                        </p>
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="secondary">Close</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    ),
};

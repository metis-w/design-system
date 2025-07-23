import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../../atoms/button";
import { IconButton } from "../../atoms/icon-button";
import { Input } from "../../atoms/input";
import { Label } from "../../atoms/label";
import { 
    Modal,
    ModalClose,
    ModalContent,
    ModalDescription,
    ModalFooter,
    ModalHeader,
    ModalTitle,
    ModalTrigger,
    ModalBody,
} from ".";
import { X, AlertTriangle, Info, CheckCircle, Trash2, Settings, User } from "lucide-react";

const meta = {
    title: "Components/Molecules/Modal",
    component: Modal,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Modal>
            <ModalTrigger asChild>
                <Button>Open Modal</Button>
            </ModalTrigger>
            <ModalContent>
                <ModalHeader>
                    <ModalTitle>Default Modal</ModalTitle>
                    <ModalDescription>
                        This is a simple modal with basic content. You can add any information here.
                    </ModalDescription>
                </ModalHeader>
                <ModalBody>
                    <p className="typo-ui-body-base text-text-pr">
                        Modal content goes here. You can add any content you need, including forms, 
                        images, or other components.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <ModalClose asChild>
                        <Button variant="secondary">Cancel</Button>
                    </ModalClose>
                    <Button>Continue</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    ),
};

export const WithForm: Story = {
    render: () => {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");

        return (
            <Modal>
                <ModalTrigger asChild>
                    <Button>
                        <User className="w-4 h-4 mr-2" />
                        Add User
                    </Button>
                </ModalTrigger>
                <ModalContent size="lg">
                    <ModalHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <ModalTitle>Create New User</ModalTitle>
                                <ModalDescription>
                                    Fill in the information below to create a new user account.
                                </ModalDescription>
                            </div>
                            <ModalClose asChild>
                                <IconButton>
                                    <X />
                                </IconButton>
                            </ModalClose>
                        </div>
                    </ModalHeader>
                    <ModalBody>
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
                    </ModalBody>
                    <ModalFooter>
                        <ModalClose asChild>
                            <Button variant="secondary">Cancel</Button>
                        </ModalClose>
                        <Button>Create User</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        );
    },
};

export const ConfirmationDialog: Story = {
    render: () => (
        <Modal>
            <ModalTrigger asChild>
                <Button variant="mistake">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Item
                </Button>
            </ModalTrigger>
            <ModalContent size="sm">
                <ModalHeader>
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-amist">
                            <AlertTriangle className="h-5 w-5 text-text-amist" />
                        </div>
                        <div>
                            <ModalTitle>Delete Confirmation</ModalTitle>
                            <ModalDescription>
                                This action cannot be undone.
                            </ModalDescription>
                        </div>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <p className="typo-ui-body-base text-text-pr">
                        Are you sure you want to delete this item? This will permanently remove 
                        it from your account and cannot be recovered.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <ModalClose asChild>
                        <Button variant="secondary">Cancel</Button>
                    </ModalClose>
                    <Button variant="mistake">Delete</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    ),
};

export const InfoDialog: Story = {
    render: () => (
        <Modal>
            <ModalTrigger asChild>
                <Button variant="review">
                    <Info className="w-4 h-4 mr-2" />
                    Show Info
                </Button>
            </ModalTrigger>
            <ModalContent size="md">
                <ModalHeader>
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-arev">
                            <Info className="h-5 w-5 text-text-arev" />
                        </div>
                        <div>
                            <ModalTitle>Information</ModalTitle>
                            <ModalDescription>
                                Here's some important information for you.
                            </ModalDescription>
                        </div>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className="space-y-3">
                        <p className="typo-ui-body-base text-text-pr">
                            This is an informational dialog that provides important details 
                            about the current operation or system status.
                        </p>
                        <ul className="space-y-1 text-text-sec typo-ui-body-sm">
                            <li>• Feature updates are applied automatically</li>
                            <li>• Your data is backed up daily</li>
                            <li>• Settings can be changed anytime</li>
                        </ul>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <ModalClose asChild>
                        <Button>Got it</Button>
                    </ModalClose>
                </ModalFooter>
            </ModalContent>
        </Modal>
    ),
};

export const SuccessDialog: Story = {
    render: () => (
        <Modal>
            <ModalTrigger asChild>
                <Button variant="success">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Complete Action
                </Button>
            </ModalTrigger>
            <ModalContent size="sm">
                <ModalHeader>
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-asuc">
                            <CheckCircle className="h-5 w-5 text-text-asuc" />
                        </div>
                        <div>
                            <ModalTitle>Success!</ModalTitle>
                            <ModalDescription>
                                Your action was completed successfully.
                            </ModalDescription>
                        </div>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <p className="typo-ui-body-base text-text-pr">
                        The operation has been completed successfully. You can now continue 
                        with your workflow.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <ModalClose asChild>
                        <Button>Continue</Button>
                    </ModalClose>
                </ModalFooter>
            </ModalContent>
        </Modal>
    ),
};

export const SettingsModal: Story = {
    render: () => (
        <Modal>
            <ModalTrigger asChild>
                <Button variant="ghost">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                </Button>
            </ModalTrigger>
            <ModalContent size="xl">
                <ModalHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <ModalTitle>Application Settings</ModalTitle>
                            <ModalDescription>
                                Manage your application preferences and configuration.
                            </ModalDescription>
                        </div>
                        <ModalClose asChild>
                            <IconButton>
                                <X />
                            </IconButton>
                        </ModalClose>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <h4 className="typo-ui-label-lg text-text-pr">Notifications</h4>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-3">
                                    <input type="checkbox" defaultChecked className="rounded" />
                                    <div>
                                        <span className="typo-ui-body-base text-text-pr">Email notifications</span>
                                        <p className="typo-ui-body-sm text-text-sec">Receive updates via email</p>
                                    </div>
                                </label>
                                <label className="flex items-center space-x-3">
                                    <input type="checkbox" className="rounded" />
                                    <div>
                                        <span className="typo-ui-body-base text-text-pr">Push notifications</span>
                                        <p className="typo-ui-body-sm text-text-sec">Get instant push notifications</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        
                        <div className="space-y-3">
                            <h4 className="typo-ui-label-lg text-text-pr">Privacy</h4>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-3">
                                    <input type="checkbox" defaultChecked className="rounded" />
                                    <div>
                                        <span className="typo-ui-body-base text-text-pr">Profile visibility</span>
                                        <p className="typo-ui-body-sm text-text-sec">Make your profile visible to others</p>
                                    </div>
                                </label>
                                <label className="flex items-center space-x-3">
                                    <input type="checkbox" defaultChecked className="rounded" />
                                    <div>
                                        <span className="typo-ui-body-base text-text-pr">Activity status</span>
                                        <p className="typo-ui-body-sm text-text-sec">Show when you're online</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <ModalClose asChild>
                        <Button variant="secondary">Cancel</Button>
                    </ModalClose>
                    <Button>Save Changes</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    ),
};

export const DifferentSizes: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Modal>
                <ModalTrigger asChild>
                    <Button variant="secondary">Small Modal</Button>
                </ModalTrigger>
                <ModalContent size="sm">
                    <ModalHeader>
                        <ModalTitle>Small Modal</ModalTitle>
                        <ModalDescription>This is a small modal window.</ModalDescription>
                    </ModalHeader>
                    <ModalBody>
                        <p className="typo-ui-body-sm text-text-pr">Compact content for quick actions.</p>
                    </ModalBody>
                    <ModalFooter>
                        <ModalClose asChild>
                            <Button variant="secondary">Close</Button>
                        </ModalClose>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Modal>
                <ModalTrigger asChild>
                    <Button variant="secondary">Medium Modal</Button>
                </ModalTrigger>
                <ModalContent size="md">
                    <ModalHeader>
                        <ModalTitle>Medium Modal</ModalTitle>
                        <ModalDescription>This is a medium-sized modal window.</ModalDescription>
                    </ModalHeader>
                    <ModalBody>
                        <p className="typo-ui-body-base text-text-pr">
                            Standard size for most modal content and forms.
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <ModalClose asChild>
                            <Button variant="secondary">Close</Button>
                        </ModalClose>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Modal>
                <ModalTrigger asChild>
                    <Button variant="secondary">Large Modal</Button>
                </ModalTrigger>
                <ModalContent size="lg">
                    <ModalHeader>
                        <ModalTitle>Large Modal</ModalTitle>
                        <ModalDescription>This is a large modal window.</ModalDescription>
                    </ModalHeader>
                    <ModalBody>
                        <p className="typo-ui-body-base text-text-pr">
                            Larger size for complex forms and detailed content.
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <ModalClose asChild>
                            <Button variant="secondary">Close</Button>
                        </ModalClose>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Modal>
                <ModalTrigger asChild>
                    <Button variant="secondary">XL Modal</Button>
                </ModalTrigger>
                <ModalContent size="xl">
                    <ModalHeader>
                        <ModalTitle>Extra Large Modal</ModalTitle>
                        <ModalDescription>This is an extra large modal window.</ModalDescription>
                    </ModalHeader>
                    <ModalBody>
                        <p className="typo-ui-body-base text-text-pr">
                            Extra large size for extensive content, settings panels, or data tables.
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <ModalClose asChild>
                            <Button variant="secondary">Close</Button>
                        </ModalClose>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    ),
};

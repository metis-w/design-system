"use client";

import * as React from "react";
import { useMedia } from "react-use";
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
} from "@/components/molecules";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/molecules";

const DialogContext = React.createContext<boolean>(false);

interface BaseProps {
    className?: string;
    children: React.ReactNode;
}

interface Props extends Omit<BaseProps, "className"> {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    defaultOpen?: boolean;
}

const AdaptiveDialog = ({
    children,
    open,
    onOpenChange,
    defaultOpen = false,
}: Props) => {
    const isDesktop = useMedia("(min-width: 640px)");
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
    const isOpen = open ?? internalOpen;

    const handleOpenChange = React.useCallback(
        (value: boolean) => {
            onOpenChange?.(value) ?? setInternalOpen(value);
        },
        [onOpenChange]
    );

    const modalComponent = React.useMemo(
        () => (
            <Modal open={isOpen} onOpenChange={handleOpenChange}>
                {children}
            </Modal>
        ),
        [isOpen, handleOpenChange, children]
    );

    const drawerComponent = React.useMemo(
        () => (
            <Drawer open={isOpen} onOpenChange={handleOpenChange}>
                {children}
            </Drawer>
        ),
        [isOpen, handleOpenChange, children]
    );

    return (
        <DialogContext.Provider value={isDesktop}>
            {isDesktop ? modalComponent : drawerComponent}
        </DialogContext.Provider>
    );
};
AdaptiveDialog.displayName = "AdaptiveDialog";

const AdaptiveDialogTrigger = React.memo(
    ({ children, ...props }: BaseProps & { asChild?: boolean }) => {
        const isDesktop = React.useContext(DialogContext);

        if (isDesktop) {
            return <ModalTrigger {...props}>{children}</ModalTrigger>;
        }
        return <DrawerTrigger {...props}>{children}</DrawerTrigger>;
    }
);
AdaptiveDialogTrigger.displayName = "AdaptiveDialogTrigger";

const AdaptiveDialogContent = React.memo(
    ({
        children,
        size,
        ...props
    }: BaseProps & { size?: "sm" | "md" | "lg" | "xl" | "full" }) => {
        const isDesktop = React.useContext(DialogContext);

        if (isDesktop) {
            return (
                <ModalContent size={size} {...props}>
                    {children}
                </ModalContent>
            );
        }
        return <DrawerContent {...props}>{children}</DrawerContent>;
    }
);
AdaptiveDialogContent.displayName = "AdaptiveDialogContent";

const AdaptiveDialogHeader = React.memo(({ children, ...props }: BaseProps) => {
    const isDesktop = React.useContext(DialogContext);

    if (isDesktop) {
        return <ModalHeader {...props}>{children}</ModalHeader>;
    }
    return <DrawerHeader {...props}>{children}</DrawerHeader>;
});
AdaptiveDialogHeader.displayName = "AdaptiveDialogHeader";

const AdaptiveDialogBody = React.memo(({ children, ...props }: BaseProps) => {
    const isDesktop = React.useContext(DialogContext);

    if (isDesktop) {
        return <ModalBody {...props}>{children}</ModalBody>;
    }
    return (
        <div className="p-4" {...props}>
            {children}
        </div>
    );
});
AdaptiveDialogBody.displayName = "AdaptiveDialogBody";

const AdaptiveDialogFooter = React.memo(({ children, ...props }: BaseProps) => {
    const isDesktop = React.useContext(DialogContext);

    if (isDesktop) {
        return <ModalFooter {...props}>{children}</ModalFooter>;
    }
    return <DrawerFooter {...props}>{children}</DrawerFooter>;
});
AdaptiveDialogFooter.displayName = "AdaptiveDialogFooter";

const AdaptiveDialogTitle = React.memo(({ children, ...props }: BaseProps) => {
    const isDesktop = React.useContext(DialogContext);

    if (isDesktop) {
        return <ModalTitle {...props}>{children}</ModalTitle>;
    }
    return <DrawerTitle {...props}>{children}</DrawerTitle>;
});
AdaptiveDialogTitle.displayName = "AdaptiveDialogTitle";

const AdaptiveDialogDescription = React.memo(
    ({ children, ...props }: BaseProps) => {
        const isDesktop = React.useContext(DialogContext);

        if (isDesktop) {
            return <ModalDescription {...props}>{children}</ModalDescription>;
        }
        return <DrawerDescription {...props}>{children}</DrawerDescription>;
    }
);
AdaptiveDialogDescription.displayName = "AdaptiveDialogDescription";

const AdaptiveDialogClose = React.memo(
    ({ children, ...props }: BaseProps & { asChild?: boolean }) => {
        const isDesktop = React.useContext(DialogContext);

        if (isDesktop) {
            return <ModalClose {...props}>{children}</ModalClose>;
        }
        return <DrawerClose {...props}>{children}</DrawerClose>;
    }
);
AdaptiveDialogClose.displayName = "AdaptiveDialogClose";

export {
    AdaptiveDialog,
    AdaptiveDialogTrigger,
    AdaptiveDialogContent,
    AdaptiveDialogHeader,
    AdaptiveDialogBody,
    AdaptiveDialogFooter,
    AdaptiveDialogTitle,
    AdaptiveDialogDescription,
    AdaptiveDialogClose,
};

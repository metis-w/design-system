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
} from "../../molecules/modal";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../../molecules/drawer";

const AdaptiveDialogContext = React.createContext(false);

export interface AdaptiveDialogProps {
    children: React.ReactNode;
}

interface AdaptiveDialogContentProps {
    className?: string;
    children: React.ReactNode;
    size?: "sm" | "md" | "lg" | "xl" | "full";
}

interface AdaptiveDialogHeaderProps {
    className?: string;
    children: React.ReactNode;
}

interface AdaptiveDialogFooterProps {
    className?: string;
    children: React.ReactNode;
}

interface AdaptiveDialogTitleProps {
    className?: string;
    children: React.ReactNode;
}

interface AdaptiveDialogDescriptionProps {
    className?: string;
    children: React.ReactNode;
}

interface AdaptiveDialogBodyProps {
    className?: string;
    children: React.ReactNode;
}

interface AdaptiveDialogTriggerProps {
    className?: string;
    children: React.ReactNode;
    asChild?: boolean;
}

interface AdaptiveDialogCloseProps {
    className?: string;
    children: React.ReactNode;
    asChild?: boolean;
}

const AdaptiveDialog = ({ children, ...props }: AdaptiveDialogProps) => {
    const isDesktop = useMedia("(min-width: 768px)");
    const [open, setOpen] = React.useState(false);
    
    const modalComponent = React.useMemo(
        () => (
            <Modal open={open} onOpenChange={setOpen} {...props}>
                {children}
            </Modal>
        ),
        [open, children, props]
    );
    
    const drawerComponent = React.useMemo(
        () => (
            <Drawer open={open} onOpenChange={setOpen} {...props}>
                {children}
            </Drawer>
        ),
        [open, children, props]
    );
    
    return (
        <AdaptiveDialogContext.Provider value={isDesktop}>
            {isDesktop ? modalComponent : drawerComponent}
        </AdaptiveDialogContext.Provider>
    );
};

const AdaptiveDialogTrigger = React.memo(({ children, ...props }: AdaptiveDialogTriggerProps) => {
    const isDesktop = React.useContext(AdaptiveDialogContext);
    
    if (isDesktop) {
        return <ModalTrigger {...props}>{children}</ModalTrigger>;
    }
    return <DrawerTrigger {...props}>{children}</DrawerTrigger>;
});
AdaptiveDialogTrigger.displayName = "AdaptiveDialogTrigger";

const AdaptiveDialogContent = React.memo(({ children, size, ...props }: AdaptiveDialogContentProps) => {
    const isDesktop = React.useContext(AdaptiveDialogContext);
    
    if (isDesktop) {
        return <ModalContent size={size} {...props}>{children}</ModalContent>;
    }
    return <DrawerContent {...props}>{children}</DrawerContent>;
});
AdaptiveDialogContent.displayName = "AdaptiveDialogContent";

const AdaptiveDialogHeader = React.memo(({ children, ...props }: AdaptiveDialogHeaderProps) => {
    const isDesktop = React.useContext(AdaptiveDialogContext);
    
    if (isDesktop) {
        return <ModalHeader {...props}>{children}</ModalHeader>;
    }
    return <DrawerHeader {...props}>{children}</DrawerHeader>;
});
AdaptiveDialogHeader.displayName = "AdaptiveDialogHeader";

const AdaptiveDialogBody = React.memo(({ children, ...props }: AdaptiveDialogBodyProps) => {
    const isDesktop = React.useContext(AdaptiveDialogContext);
    
    if (isDesktop) {
        return <ModalBody {...props}>{children}</ModalBody>;
    }
    return <div className="p-4" {...props}>{children}</div>;
});
AdaptiveDialogBody.displayName = "AdaptiveDialogBody";

const AdaptiveDialogFooter = React.memo(({ children, ...props }: AdaptiveDialogFooterProps) => {
    const isDesktop = React.useContext(AdaptiveDialogContext);
    
    if (isDesktop) {
        return <ModalFooter {...props}>{children}</ModalFooter>;
    }
    return <DrawerFooter {...props}>{children}</DrawerFooter>;
});
AdaptiveDialogFooter.displayName = "AdaptiveDialogFooter";

const AdaptiveDialogTitle = React.memo(({ children, ...props }: AdaptiveDialogTitleProps) => {
    const isDesktop = React.useContext(AdaptiveDialogContext);
    
    if (isDesktop) {
        return <ModalTitle {...props}>{children}</ModalTitle>;
    }
    return <DrawerTitle {...props}>{children}</DrawerTitle>;
});
AdaptiveDialogTitle.displayName = "AdaptiveDialogTitle";

const AdaptiveDialogDescription = React.memo(({ children, ...props }: AdaptiveDialogDescriptionProps) => {
    const isDesktop = React.useContext(AdaptiveDialogContext);
    
    if (isDesktop) {
        return <ModalDescription {...props}>{children}</ModalDescription>;
    }
    return <DrawerDescription {...props}>{children}</DrawerDescription>;
});
AdaptiveDialogDescription.displayName = "AdaptiveDialogDescription";

const AdaptiveDialogClose = React.memo(({ children, ...props }: AdaptiveDialogCloseProps) => {
    const isDesktop = React.useContext(AdaptiveDialogContext);
    
    if (isDesktop) {
        return <ModalClose {...props}>{children}</ModalClose>;
    }
    return <DrawerClose {...props}>{children}</DrawerClose>;
});
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
"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const modalContentVariants = cva(
    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed left-[50%] top-[50%] z-50 w-full translate-x-[-50%] translate-y-[-50%] rounded-2xl border bg-cont-pr border-border-default shadow-lg duration-200 p-5",
    {
        variants: {
            size: {
                sm: "max-w-sm",
                md: "max-w-md",
                lg: "max-w-lg",
                xl: "max-w-2xl",
                full: "max-w-[95vw] max-h-[95vh]",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
);

function Modal({
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
    return <DialogPrimitive.Root data-slot="modal" {...props} />;
}

function ModalTrigger({
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
    return <DialogPrimitive.Trigger data-slot="modal-trigger" {...props} />;
}

function ModalPortal({
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
    return <DialogPrimitive.Portal data-slot="modal-portal" {...props} />;
}

function ModalClose({
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
    return <DialogPrimitive.Close data-slot="modal-close" {...props} />;
}

function ModalOverlay({
    className,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
    return (
        <DialogPrimitive.Overlay
            data-slot="modal-overlay"
            className={cn(
                "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-surf-overlay",
                className
            )}
            {...props}
        />
    );
}

function ModalContent({
    className,
    children,
    size,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> &
    VariantProps<typeof modalContentVariants>) {
    return (
        <ModalPortal>
            <ModalOverlay />
            <DialogPrimitive.Content
                data-slot="modal-content"
                className={cn(modalContentVariants({ size, className }))}
                {...props}
            >
                {children}
            </DialogPrimitive.Content>
        </ModalPortal>
    );
}

function ModalHeader({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="modal-header"
            className={cn("flex flex-col gap-2 pb-0", className)}
            {...props}
        />
    );
}

function ModalFooter({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="modal-footer"
            className={cn(
                "flex flex-col-reverse gap-3 pt-0 sm:flex-row sm:justify-end",
                className
            )}
            {...props}
        />
    );
}

function ModalTitle({
    className,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
    return (
        <DialogPrimitive.Title
            data-slot="modal-title"
            className={cn("text-text-pr typo-ui-title-base", className)}
            {...props}
        />
    );
}

function ModalDescription({
    className,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
    return (
        <DialogPrimitive.Description
            data-slot="modal-description"
            className={cn("text-text-sec typo-ui-body-sm", className)}
            {...props}
        />
    );
}

function ModalBody({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="modal-body"
            className={cn("py-4", className)}
            {...props}
        />
    );
}

export {
    Modal,
    ModalPortal,
    ModalOverlay,
    ModalTrigger,
    ModalClose,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalTitle,
    ModalDescription,
    ModalBody,
    modalContentVariants,
};

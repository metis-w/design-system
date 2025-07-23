"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/lib/utils";

const Modal = DialogPrimitive.Root;

const ModalTrigger = DialogPrimitive.Trigger;

const ModalPortal = DialogPrimitive.Portal;

const ModalClose = DialogPrimitive.Close;

const ModalOverlay = React.forwardRef<
    React.ComponentRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        data-slot="modal-overlay"
        className={cn(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-surf-overlay",
            className
        )}
        {...props}
    />
));

const ModalContent = React.forwardRef<
    React.ComponentRef<typeof DialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
        size?: "sm" | "md" | "lg" | "xl" | "full";
    }
>(({ className, children, size = "md", ...props }, ref) => (
    <ModalPortal>
        <ModalOverlay />
        <DialogPrimitive.Content
            ref={ref}
            data-slot="modal-content"
            className={cn(
                "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                "fixed left-[50%] top-[50%] z-50 w-full translate-x-[-50%] translate-y-[-50%] rounded-2xl border bg-cont-pr border-border-default shadow-lg duration-200 p-5",
                {
                    "max-w-sm": size === "sm",
                    "max-w-md": size === "md",
                    "max-w-lg": size === "lg",
                    "max-w-2xl": size === "xl",
                    "max-w-[95vw] max-h-[95vh]": size === "full",
                },
                className
            )}
            {...props}
        >
            {children}
        </DialogPrimitive.Content>
    </ModalPortal>
));

const ModalHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        data-slot="modal-header"
        className={cn("flex flex-col gap-2 pb-0", className)}
        {...props}
    />
);

const ModalFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        data-slot="modal-footer"
        className={cn("flex flex-col-reverse gap-3 pt-0 sm:flex-row sm:justify-end", className)}
        {...props}
    />
);

const ModalTitle = React.forwardRef<
    React.ComponentRef<typeof DialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Title
        ref={ref}
        data-slot="modal-title"
        className={cn("text-text-pr typo-ui-title-base", className)}
        {...props}
    />
));

const ModalDescription = React.forwardRef<
    React.ComponentRef<typeof DialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Description
        ref={ref}
        data-slot="modal-description"
        className={cn("text-text-sec typo-ui-body-sm", className)}
        {...props}
    />
));

const ModalBody = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        data-slot="modal-body"
        className={cn("py-4", className)}
        {...props}
    />
);

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
};

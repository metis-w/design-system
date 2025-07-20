"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {
    CheckIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    ChevronsUpDown,
} from "lucide-react";

import { cn } from "@/lib/utils";

function Select({
    onValueChange,
    onOpenChange,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
    const handleOpenChange = (open: boolean) => {
        onOpenChange?.(open);

        if (!open) {
            setTimeout(() => {
                if (document.activeElement) {
                    (document.activeElement as HTMLElement).blur();
                }
            }, 0);
        }
    };

    const handleValueChange = (value: string) => {
        onValueChange?.(value);

        setTimeout(() => {
            if (document.activeElement) {
                (document.activeElement as HTMLElement).blur();
            }
        }, 0);
    };

    return (
        <SelectPrimitive.Root
            data-slot="select"
            onOpenChange={handleOpenChange}
            onValueChange={handleValueChange}
            {...props}
        />
    );
}

function SelectGroup({
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
    return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
    return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
    className,
    size = "default",
    children,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
    size?: "sm" | "default";
}) {
    return (
        <SelectPrimitive.Trigger
            data-slot="select-trigger"
            data-size={size}
            className={cn(
                "h-10 flex px-4 py-3 w-full rounded-lg border text-ui-label-base",
                "bg-bg-inp border-border-inp text-text-inp-filled",
                "data-[placeholder]:text-text-inp",
                "focus:border-border-inp-focus focus:ring-2 focus:ring-ring-inp-focus outline-none",
                "data-[state=open]:border-border-inp-focus data-[state=open]:ring-2 data-[state=open]:ring-ring-inp-focus",
                "disabled:bg-bg-inp-disabled disabled:text-text-inp-disabled disabled:cursor-not-allowed",
                "transition-all duration-300 ease-in-out",
                "flex items-center justify-between gap-2",
                "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                className
            )}
            {...props}
        >
            {children}
            <SelectPrimitive.Icon asChild>
                <ChevronsUpDown className="size-4" />
            </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
    );
}

function SelectContent({
    className,
    children,
    position = "popper",
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
    return (
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content
                data-slot="select-content"
                className={cn(
                    "relative z-50 max-h-(--radix-select-content-available-height) min-w-[var(--radix-select-trigger-width)] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg border bg-cont-pr border-border-default shadow-lg",
                    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                    position === "popper" &&
                        "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
                    className
                )}
                position={position}
                {...props}
            >
                <SelectScrollUpButton />
                <SelectPrimitive.Viewport
                    className={cn(
                        "p-1",
                        position === "popper" &&
                            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
                    )}
                >
                    {children}
                </SelectPrimitive.Viewport>
                <SelectScrollDownButton />
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
    );
}

function SelectLabel({
    className,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
    return (
        <SelectPrimitive.Label
            data-slot="select-label"
            className={cn(
                "text-text-ter px-2 py-1.5 text-ui-label-sm",
                className
            )}
            {...props}
        />
    );
}

function SelectItem({
    className,
    children,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
    return (
        <SelectPrimitive.Item
            data-slot="select-item"
            className={cn(
                "h-10 text-ui-label-base text-text-pr relative flex w-full cursor-default items-center gap-2 rounded-md py-2 pr-8 pl-3 outline-hidden select-none",
                "hover:bg-surf-sec focus:bg-surf-sec",
                "data-[disabled]:pointer-events-none data-[disabled]:text-text-inp-disabled",
                "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                className
            )}
            {...props}
        >
            <span className="absolute right-2 flex size-3.5 items-center justify-center">
                <SelectPrimitive.ItemIndicator>
                    <CheckIcon className="size-4 text-text-pr" />
                </SelectPrimitive.ItemIndicator>
            </span>
            <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        </SelectPrimitive.Item>
    );
}

function SelectSeparator({
    className,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
    return (
        <SelectPrimitive.Separator
            data-slot="select-separator"
            className={cn(
                "bg-border-default pointer-events-none -mx-1 my-1 h-px",
                className
            )}
            {...props}
        />
    );
}

function SelectScrollUpButton({
    className,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
    return (
        <SelectPrimitive.ScrollUpButton
            data-slot="select-scroll-up-button"
            className={cn(
                "flex cursor-default items-center justify-center py-1",
                className
            )}
            {...props}
        >
            <ChevronUpIcon className="size-4" />
        </SelectPrimitive.ScrollUpButton>
    );
}

function SelectScrollDownButton({
    className,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
    return (
        <SelectPrimitive.ScrollDownButton
            data-slot="select-scroll-down-button"
            className={cn(
                "flex cursor-default items-center justify-center py-1",
                className
            )}
            {...props}
        >
            <ChevronDownIcon className="size-4" />
        </SelectPrimitive.ScrollDownButton>
    );
}

export {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectScrollDownButton,
    SelectScrollUpButton,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
};

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("", {
    variants: {
        type: {
            main: "mx-auto max-w-[85rem] px-5 py-10 md:px-10",
            box: "w-full max-w-md space-y-7 p-0 bg-surf-pr md:p-8 md:bg-surf-sec md:border md:border-border-default md:rounded-3xl",
        },
    },
    defaultVariants: {
        type: "main",
    },
});

function Container({
    children,
    type,
    className,
    ...props
}: React.ComponentProps<"div"> & VariantProps<typeof containerVariants>) {
    return (
        <div
            data-slot="container"
            className={cn(containerVariants({ type, className }))}
            {...props}
        >
            {children}
        </div>
    );
}

export { Container, containerVariants };

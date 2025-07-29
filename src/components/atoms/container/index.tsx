import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("", {
    variants: {
        type: {
            content: "mx-auto max-w-[90rem] px-5 py-8 md:px-20 md:py-8",
            box: "mx-auto max-w-[44rem] px-0 py-0 md:px-10 md:py-10",
        },
    },
    defaultVariants: {
        type: "content",
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

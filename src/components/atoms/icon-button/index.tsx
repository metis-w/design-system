import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const iconButtonVariants = cva(
    "inline-flex justify-center items-center gap-1 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 text-text-agh hover:bg-bg-agh-hover active:bg-bg-agh-pressed disabled:text-text-agh-disabled",
    {
        variants: {
            size: {
                default: "p-2 [&_svg:not([class*='size-'])]:size-3",
                lg: "p-4 [&_svg:not([class*='size-'])]:size-5",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
);

function IconButton({
    className,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof iconButtonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            data-slot="icon-button"
            className={cn(iconButtonVariants({ size, className }))}
            {...props}
        />
    );
}

export { IconButton, iconButtonVariants };

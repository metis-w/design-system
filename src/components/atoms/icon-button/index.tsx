import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const iconButtonVariants = cva(
    "inline-flex justify-center items-center gap-1 rounded-lg transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none text-text-agh hover:bg-bg-agh-hover active:bg-bg-agh-pressed disabled:text-text-agh-disabled",
    {
        variants: {
            size: {
                default: "size-8 [&_svg:not([class*='size-'])]:size-4",
                lg: "size-10 [&_svg:not([class*='size-'])]:size-5",
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

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center typo-ui-label-base justify-center gap-2 whitespace-nowrap rounded-lg shadow-xs transition-all hover:shadow-none focus-visible:shadow-none disabled:pointer-events-none[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
    {
        variants: {
            variant: {
                accent: "bg-bg-aa text-text-aa border border-border-aa hover:bg-bg-aa-hover focus-visible:bg-bg-aa-pressed disabled:bg-bg-aa-disabled disabled:text-text-aa-disabled",
                primary:
                    "bg-bg-apr text-text-apr border border-border-apr hover:bg-bg-apr-hover focus-visible:bg-bg-apr-pressed disabled:bg-bg-apr-disabled disabled:text-text-apr-disabled disabled:border-border-apr-disabled",
                secondary:
                    "bg-bg-asec text-text-asec border border-border-asec hover:bg-bg-asec-hover focus-visible:bg-bg-asec-pressed disabled:bg-bg-asec-disabled disabled:text-text-asec-disabled disabled:border-border-asec-disabled",
                ghost: "shadow-none text-text-agh hover:bg-bg-agh-hover focus-visible:bg-bg-agh-pressed disabled:text-text-agh-disabled",
                mistake:
                    "bg-bg-amist text-text-amist border border-border-amist hover:bg-bg-amist-hover focus-visible:bg-bg-amist-pressed disabled:bg-bg-amist-disabled disabled:text-text-amist-disabled disabled:border-border-amist-disabled",
                success:
                    "bg-bg-asuc text-text-asuc border border-border-asuc hover:bg-bg-asuc-hover focus-visible:bg-bg-asuc-pressed disabled:bg-bg-asuc-disabled disabled:text-text-asuc-disabled disabled:border-border-asuc-disabled",
                review: "bg-bg-arev text-text-arev border border-border-arev hover:bg-bg-arev-hover focus-visible:bg-bg-arev-pressed disabled:bg-bg-arev-disabled disabled:text-text-arev-disabled disabled:border-border-arev-disabled",
            },
            size: {
                default: "px-3 h-9 has-[>svg]:px-3 min-h-[2.25rem]",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export { Button, buttonVariants };

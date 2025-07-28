import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textLinkVariants = cva(
    "inline-flex items-center gap-1 transition-all underline-offset-4 hover:bg-bg-agh-hover focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default: "text-text-agh",
                destructive: "text-text-agh hover:text-text-amist",
            },
            size: {
                sm: "p-1 typo-ui-label-base rounded-md",
                base: "p-2 typo-ui-label-base rounded-lg",
                lg: "p-2 typo-ui-label-lg rounded-lg",
            },
            underline: {
                auto: "",
                always: "underline",
                never: "no-underline hover:no-underline",
            },
            layout: {
                inline: "",
                dropdown:
                    "text-inherit hover:text-inherit no-underline hover:no-underline w-full",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "base",
            underline: "auto",
            layout: "inline",
        },
    }
);

interface TextLinkProps
    extends React.ComponentProps<"a">,
        VariantProps<typeof textLinkVariants> {
    asChild?: boolean;
    external?: boolean;
}

function TextLink({
    className,
    variant,
    size,
    underline,
    layout,
    asChild = false,
    external = false,
    children,
    ...props
}: TextLinkProps) {
    const Comp = asChild ? Slot : "a";

    // Add external link props automatically (but not for dropdown layout)
    const externalProps =
        external && layout !== "dropdown"
            ? {
                  target: "_blank",
                  rel: "noopener noreferrer",
              }
            : {};

    return (
        <Comp
            data-slot="text-link"
            className={cn(
                textLinkVariants({
                    variant,
                    size,
                    underline,
                    layout,
                    className,
                })
            )}
            {...externalProps}
            {...props}
        >
            {children}
        </Comp>
    );
}

export { TextLink, textLinkVariants };
export type { TextLinkProps };

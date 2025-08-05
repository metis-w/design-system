import * as React from "react";
import { LogoExt } from "@/foundations";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const headerVariants = cva("border-b border-border-default bg-cont-pr z-10", {
    variants: {
        position: {
            fixed: "fixed top-0 left-0 right-0",
            sticky: "sticky top-0",
            relative: "relative",
        },
    },
    defaultVariants: {
        position: "relative",
    },
});

function Header({
    position,
    className,
    children,
}: VariantProps<typeof headerVariants> & {
    className?: string;
    children?: React.ReactNode;
}) {
    return (
        <header className={cn(headerVariants({ position, className }))}>
            <div
                className={cn(
                    "mx-auto max-w-[85rem] px-20 py-5 md:px-10",
                    children && "flex justify-between"
                )}
            >
                <div className="flex items-center">
                    <a href="/">
                        <LogoExt
                            width={120}
                            height={40}
                            className="h-10 w-auto"
                        />
                    </a>
                </div>
                {children && (
                    <div className="flex items-center gap-3">{children}</div>
                )}
            </div>
        </header>
    );
}

export { Header, headerVariants };

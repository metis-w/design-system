import * as React from "react";

import { cn } from "@/lib/utils";

export function Input({ className, type, ...props }: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "h-10 flex px-4 py-3 w-full rounded-lg border text-ui-label-base",
                "bg-bg-inp border-border-inp text-text-inp-filled",
                "placeholder:text-text-inp",
                "focus:border-border-inp-focus focus:ring-2 focus:ring-ring-inp-focus outline-none",
                "disabled:bg-bg-inp-disabled disabled:text-text-inp-disabled disabled:cursor-not-allowed",
                "transition-all duration-300 ease-in-out",
                "aria-invalid:ring-ring-inp-mistake aria-invalid:border-border-inp-mistake aria-invalid:bg-bg-inp-mistake",
                "autofill:bg-bg-inp autofill:text-text-inp-filled",
                "autofill:shadow-[inset_0_0_0px_1000px_theme(colors.bg-inp)]",
                className
            )}
            {...props}
        />
    );
}
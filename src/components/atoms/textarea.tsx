import * as React from "react";

import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                "bg-bg-inp border-border-inp text-text-inp-filled placeholder:text-text-inp focus-visible:border-border-inp-focus focus-visible:ring-ring-inp-focus aria-invalid:border-border-inp-mistake aria-invalid:ring-ring-inp-mistake disabled:bg-bg-inp-disabled disabled:text-text-inp-disabled disabled:cursor-not-allowed flex min-h-16 w-full rounded-md border px-3 py-2 text-ui-body-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] field-sizing-content",
                className
            )}
            {...props}
        />
    );
}
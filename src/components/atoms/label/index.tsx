import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

interface LabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {
    disabled?: boolean;
}

export function Label({ className, disabled, ...props }: LabelProps) {
    return (
        <LabelPrimitive.Root
            data-slot="label"
            className={cn(
                "flex items-center gap-2 typo-ui-label-base select-none",
                "peer-disabled:cursor-not-allowed peer-disabled:text-text-inp-label-disabled",
                disabled &&
                    "pointer-events-none text-text-inp-label-disabled cursor-not-allowed",
                className
            )}
            {...props}
        />
    );
}

import * as React from "react";

import { cn } from "@/lib/utils";

interface TextAreaProps extends React.ComponentProps<"textarea"> {
    resize?: "none" | "both" | "horizontal" | "vertical";
    noWrap?: boolean;
    autoGrow?: boolean;
}

export function TextArea({
    className,
    resize = "vertical",
    noWrap = false,
    autoGrow = true,
    ...props
}: TextAreaProps) {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    const adjustHeight = React.useCallback(() => {
        const textarea = textareaRef.current;
        if (textarea && autoGrow) {
            // Reset height to auto to get the correct scrollHeight
            textarea.style.height = "auto";
            // Set height to scrollHeight to fit content
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, [autoGrow]);

    React.useEffect(() => {
        adjustHeight();
    }, [adjustHeight]);

    const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
        adjustHeight();
        if (props.onInput) {
            props.onInput(e);
        }
    };

    return (
        <textarea
            ref={textareaRef}
            data-slot="textarea"
            onInput={handleInput}
            className={cn(
                // Match Input styling: same padding, border radius, transitions, and states
                "flex min-h-16 w-full rounded-lg border px-4 py-3 typo-ui-body-sm bg-bg-inp border-border-inp text-text-inp-filled shadow-xs placeholder:text-text-inp placeholder:font-medium transition-all duration-300 ease-in-out outline-none focus:border-border-inp-focus focus:ring-2 focus:ring-ring-inp-focus focus:shadow-none disabled:bg-bg-inp-disabled disabled:text-text-inp-disabled disabled:cursor-not-allowed read-only:bg-bg-inp-readonly read-only:text-text-inp-readonly read-only:border-border-inp-readonly read-only:focus:ring-0 aria-invalid:ring-ring-inp-mistake aria-invalid:border-border-inp-mistake aria-invalid:bg-bg-inp-mistake",
                {
                    "whitespace-nowrap overflow-x-auto": noWrap,
                    "overflow-hidden": autoGrow, // Hide scrollbars when auto-growing
                    "resize-none": autoGrow, // Disable manual resize when auto-growing
                },
                className
            )}
            {...props}
        />
    );
}

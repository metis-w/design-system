import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textAreaVariants = cva(
    "flex min-h-16 w-full rounded-lg border px-4 py-3 typo-ui-body-sm bg-bg-inp border-border-inp text-text-inp-filled shadow-xs placeholder:text-text-inp placeholder:font-medium transition-all duration-300 ease-in-out outline-none focus:border-border-inp-focus focus:ring-2 focus:ring-ring-inp-focus focus:shadow-none disabled:bg-bg-inp-disabled disabled:text-text-inp-disabled disabled:cursor-not-allowed read-only:bg-bg-inp-readonly read-only:text-text-inp-readonly read-only:border-border-inp-readonly read-only:focus:ring-0 aria-invalid:ring-ring-inp-mistake aria-invalid:border-border-inp-mistake aria-invalid:bg-bg-inp-mistake",
    {
        variants: {
            resize: {
                none: "resize-none",
                both: "resize",
                horizontal: "resize-x",
                vertical: "resize-y",
            },
            noWrap: {
                true: "whitespace-nowrap overflow-x-auto",
                false: "",
            },
            autoGrow: {
                true: "overflow-hidden resize-none",
                false: "",
            },
        },
        defaultVariants: {
            resize: "vertical",
            noWrap: false,
            autoGrow: true,
        },
    }
);

function TextArea({
    className,
    resize,
    noWrap,
    autoGrow,
    ...props
}: React.ComponentProps<"textarea"> & VariantProps<typeof textAreaVariants>) {
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
        props.onInput?.(e);
    };

    return (
        <textarea
            ref={textareaRef}
            data-slot="textarea"
            onInput={handleInput}
            className={cn(textAreaVariants({ resize, noWrap, autoGrow, className }))}
            {...props}
        />
    );
}

export { TextArea, textAreaVariants };

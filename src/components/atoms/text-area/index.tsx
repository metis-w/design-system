import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textAreaVariants = cva(
    "flex min-h-16 w-full rounded-lg border px-4 py-3 typo-ui-body-sm bg-bg-inp border-border-inp text-text-inp-filled shadow-xs placeholder:text-text-inp placeholder:font-medium transition-all duration-300 ease-in-out outline-none focus:border-border-inp-focus focus:ring-2 focus:ring-ring-inp-focus focus:shadow-none disabled:bg-bg-inp-disabled disabled:text-text-inp-disabled disabled:cursor-not-allowed read-only:bg-bg-inp-readonly read-only:text-text-inp-readonly read-only:border-border-inp-readonly read-only:focus:ring-0 aria-invalid:ring-ring-inp-mistake aria-invalid:border-border-inp-mistake aria-invalid:bg-bg-inp-mistake",
    {
        variants: {
            resize: {
                none: "resize-none",
                vertical: "resize-y",
            },
            autoGrow: {
                true: "overflow-hidden resize-none",
                false: "",
            },
        },
        defaultVariants: {
            resize: "none",
            autoGrow: true,
        },
    }
);

interface TextAreaProps
    extends React.ComponentProps<"textarea">,
        VariantProps<typeof textAreaVariants> {
    /**
     * Maximum number of lines before scrolling kicks in
     * @default undefined (no max height)
     */
    maxLines?: number;
    /**
     * Minimum number of lines for initial height
     * @default 4 (matches min-h-16 which is ~4 lines)
     */
    minLines?: number;
}

function TextArea({
    className,
    resize,
    autoGrow,
    maxLines,
    minLines = 4,
    ...props
}: TextAreaProps) {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);
    const [isAtMaxHeight, setIsAtMaxHeight] = React.useState(false);

    // Calculate line height and max height
    const lineHeight = 20; // Based on typo-ui-body-sm line-height (1.25rem = 20px)
    const verticalPadding = 24; // py-3 = 12px top + 12px bottom
    const maxHeight = maxLines
        ? maxLines * lineHeight + verticalPadding
        : undefined;

    const adjustHeight = React.useCallback(() => {
        const textarea = textareaRef.current;
        if (!textarea || !autoGrow) return;

        // Reset height to auto to get the correct scrollHeight
        textarea.style.height = "auto";

        // Calculate the new height
        let newHeight = textarea.scrollHeight;

        // Apply max height constraint if specified
        if (maxHeight && newHeight > maxHeight) {
            newHeight = maxHeight;
            setIsAtMaxHeight(true);
            // Enable scrolling when at max height
            textarea.style.overflowY = "auto";
        } else {
            setIsAtMaxHeight(false);
            // Disable scrolling when not at max height
            textarea.style.overflowY = "hidden";
        }

        // Set the new height
        textarea.style.height = `${newHeight}px`;
    }, [autoGrow, maxHeight]);

    React.useEffect(() => {
        adjustHeight();
    }, [adjustHeight]);

    const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
        adjustHeight();
        props.onInput?.(e);
    };

    // Calculate minimum height based on minLines
    const minHeight = minLines * lineHeight + verticalPadding;

    return (
        <textarea
            ref={textareaRef}
            data-slot="textarea"
            onInput={handleInput}
            style={{
                minHeight: autoGrow ? `${minHeight}px` : undefined,
                maxHeight: maxHeight && autoGrow ? `${maxHeight}px` : undefined,
            }}
            className={cn(
                textAreaVariants({ resize, autoGrow, className }),
                // Add scrollbar styling when at max height
                isAtMaxHeight &&
                    "scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-neutral-100"
            )}
            {...props}
        />
    );
}

export { TextArea, textAreaVariants, type TextAreaProps };

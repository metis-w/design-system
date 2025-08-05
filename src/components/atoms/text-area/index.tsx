import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

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

function TextArea({
    className,
    resize, autoGrow,
    maxLines, minLines = 4,
    ...props
}: React.ComponentProps<"textarea"> & VariantProps<typeof textAreaVariants> & {
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
}) {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);
    const [isAtMaxHeight, setIsAtMaxHeight] = React.useState(false);

    const lineHeight = 20;
    const verticalPadding = 24;

    const maxHeight = maxLines
        ? maxLines * lineHeight + verticalPadding
        : undefined;
    const minHeight = minLines * lineHeight + verticalPadding;

    const adjustHeight = React.useCallback(() => {
        const textarea = textareaRef.current;
        if (!textarea || !autoGrow) return;

        textarea.style.height = "auto";
        let newHeight = textarea.scrollHeight;

        if (maxHeight && newHeight > maxHeight) {
            newHeight = maxHeight;
            setIsAtMaxHeight(true);

            textarea.style.overflowY = "auto";
        } else {
            setIsAtMaxHeight(false);

            textarea.style.overflowY = "hidden";
        }
        textarea.style.height = `${newHeight}px`;
    }, [autoGrow, maxHeight]);

    React.useEffect(() => adjustHeight(), [adjustHeight]);

    return (
        <textarea
            ref={textareaRef}
            data-slot="textarea"
            onInput={(e) => {
                adjustHeight();
                props.onInput?.(e);
            }}
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

export { TextArea, textAreaVariants };

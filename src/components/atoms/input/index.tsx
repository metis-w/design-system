import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
    "flex h-10 w-full rounded-lg border px-4 py-3 typo-ui-label-base bg-bg-inp border-border-inp text-text-inp-filled placeholder:text-text-inp transition-all duration-300 ease-in-out outline-none focus:border-border-inp-focus focus:ring-2 focus:ring-ring-inp-focus disabled:bg-bg-inp-disabled disabled:text-text-inp-disabled disabled:cursor-not-allowed read-only:bg-bg-inp-readonly read-only:text-text-inp-readonly read-only:border-border-inp-readonly read-only:focus:ring-0 aria-invalid:ring-ring-inp-mistake aria-invalid:border-border-inp-mistake aria-invalid:bg-bg-inp-mistake autofill:bg-bg-inp autofill:text-text-inp-filled autofill:shadow-[inset_0_0_0px_1000px_var(--color-bg-inp)]",
    {
        variants: {
            showPasswordToggle: {
                true: "pr-12",
                false: "",
            },
        },
        defaultVariants: {
            showPasswordToggle: false,
        },
    }
);

function Input({
    className,
    type,
    showPasswordToggle,
    ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
    const [showPassword, setShowPassword] = React.useState(false);
    const shouldShowToggle = type === "password" && showPasswordToggle;

    const inputType = shouldShowToggle
        ? showPassword
            ? "text"
            : "password"
        : type;

    const handleToggleVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowPassword((prev) => !prev);
    };

    if (!shouldShowToggle) {
        return (
            <input
                type={inputType}
                data-slot="input"
                className={cn(inputVariants({ showPasswordToggle, className }))}
                {...props}
            />
        );
    }

    return (
        <div className="relative">
            <input
                type={inputType}
                data-slot="input"
                className={cn(inputVariants({ showPasswordToggle, className }))}
                {...props}
            />
            <button
                type="button"
                tabIndex={-1}
                onMouseDown={handleToggleVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-text-ter hover:text-text-pr focus:text-text-pr transition-colors focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
            >
                {showPassword ? (
                    <EyeOff className="size-4" />
                ) : (
                    <Eye className="size-4" />
                )}
            </button>
        </div>
    );
}

export { Input, inputVariants };

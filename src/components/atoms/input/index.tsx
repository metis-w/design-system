import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
    "flex h-10 w-full rounded-lg border px-4 py-3 typo-ui-label-base bg-bg-inp border-border-inp text-text-inp-filled placeholder:text-text-inp transition-all duration-300 ease-in-out outline-none focus:border-border-inp-focus focus:ring-2 focus:ring-ring-inp-focus disabled:bg-bg-inp-disabled disabled:text-text-inp-disabled disabled:cursor-not-allowed read-only:bg-bg-inp-readonly read-only:text-text-inp-readonly read-only:border-border-inp-readonly aria-invalid:ring-ring-inp-mistake aria-invalid:border-border-inp-mistake aria-invalid:bg-bg-inp-mistake autofill:bg-bg-inp autofill:text-text-inp-filled autofill:shadow-[inset_0_0_0px_1000px_var(--color-bg-inp)]",
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

        const inputType = React.useMemo(() => {
            return shouldShowToggle 
                ? (showPassword ? "text" : "password") 
                : type;
        }, [shouldShowToggle, showPassword, type]);

        const inputElement = (
            <input
                type={inputType}
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
                    "autofill:shadow-[inset_0_0_0px_1000px_var(--color-bg-inp)]",
                    shouldShowToggle && "pr-12", className
                )}
                ref={ref}
                {...props}
            />
        );
        return (
            <>
                {shouldShowToggle ? (
                    <div className="relative">
                        {inputElement}

                        <button
                            type="button"
                            tabIndex={-1}
                            onMouseDown={(e) => {
                                e.preventDefault();
                                setShowPassword(!showPassword);

                                setTimeout(() => {
                                    if (ref && "current" in ref && ref.current) {
                                        ref.current.focus();
                                    }
                                }, 0);
                            }}
                            className={cn(
                                "absolute right-3 top-1/2 -translate-y-1/2 flex items-center",
                                "text-text-ter hover:text-text-pr transition-colors",
                                "focus:outline-none focus:text-text-pr"
                            )}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                    </div>
                ) : (
                    <Eye className="size-4" />
                )}
            </button>
        </div>
    );
}

Input.displayName = "Input";
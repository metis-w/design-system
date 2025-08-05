import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const loaderVariants = cva("flex items-center justify-center", {
    variants: {
        fullScreen: {
            true: "min-h-screen bg-bg-default",
            false: "p-8",
        },
    },
    defaultVariants: {
        fullScreen: true,
    },
});

const spinnerVariants = cva(
    "border-border-default border-t-transparent rounded-full animate-spin",
    {
        variants: {
            size: {
                sm: "w-6 h-6 border-[1.5px]",
                md: "w-8 h-8 border-2",
                lg: "w-12 h-12 border-[3px]",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
);

function Loader({
    message = "Loading...",
    size,
    className,
    fullScreen,
}: VariantProps<typeof loaderVariants> & VariantProps<typeof spinnerVariants> & {
    message?: string;
    className?: string;
}) {
    return (
        <div className={cn(loaderVariants({ fullScreen }), className)}>
            <div className="flex flex-col items-center gap-3">
                <div className={cn(spinnerVariants({ size }))} />
                {message && (
                    <p className="typo-ui-label-sm text-text-ter">{message}</p>
                )}
            </div>
        </div>
    );
}

export { Loader, loaderVariants };

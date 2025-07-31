import { cn } from "@/lib/utils";

interface Props {
    message?: string;
    size?: "sm" | "md" | "lg";
    className?: string;
    fullScreen?: boolean;
}

const sizeVariants = {
    sm: "w-6 h-6 border-[1.5px]",
    md: "w-8 h-8 border-2",
    lg: "w-12 h-12 border-[3px]",
};

export function Loader({
    message = "Loading...",
    size = "md",
    className,
    fullScreen = true,
}: Props) {
    const content = (
        <div className="flex flex-col items-center gap-3">
            <div
                className={cn(
                    "border-border-default border-t-transparent rounded-full animate-spin",
                    sizeVariants[size]
                )}
            />
            {message && (
                <p className="typo-ui-label-sm text-text-ter">{message}</p>
            )}
        </div>
    );
    if (fullScreen) {
        return (
            <div
                className={cn(
                    "min-h-screen flex items-center justify-center bg-bg-default",
                    className
                )}
            >
                {content}
            </div>
        );
    }
    return (
        <div className={cn("flex items-center justify-center p-8", className)}>
            {content}
        </div>
    );
}

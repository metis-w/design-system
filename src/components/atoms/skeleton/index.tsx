import { cn } from "@/lib/utils";

export function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="skeleton"
            className={cn(
                "bg-cont-skeleton animate-pulse rounded-md relative overflow-hidden",
                className
            )}
            {...props}
        />
    );
}

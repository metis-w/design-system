import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const badgeVariants = cva("inline-flex rounded-full p-3 items-center gap-2.5", {
    variants: {
        variant: {
            accent: "bg-cont-a text-text-a",
            success: "bg-cont-suc text-text-suc",
            rewiev: "bg-cont-rev text-text-rev",
        },
    },
    defaultVariants: {
        variant: "accent",
    },
});

function Badge({
    variant,
    className,
    children,
}: VariantProps<typeof badgeVariants> & {
    className?: string;
    children?: React.ReactNode;
}) {
    return (
        <span
            data-slot="badge"
            className={cn(badgeVariants({ variant, className }))}
        >
            {children}
        </span>
    );
}

export { Badge, badgeVariants };

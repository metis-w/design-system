import * as React from "react";

import { cn } from "@/lib/utils";

function InfoCard({
    title,
    label,
    badge,
    className,
}: {
    title: string;
    label?: string;
    badge?: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn(
            "bg-surf-pr border border-border-default rounded-2xl",
            "flex flex-col items-start gap-4 p-4",
            className
        )}>
            {badge}
            <div className="flex flex-col items-start self-stretch">
                <p className="text-text-ter typo-ui-label-base">
                    {label}
                </p>
                <h3 className="text-text-pr typo-ui-title-sm">
                    {title}
                </h3>
            </div>
        </div>
    );
}

export { InfoCard };
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    type: "main" | "secondary";
    className?: string;
}

export const Container: React.FC<Props> = ({ children, type, className }) => {
    return (
        <div
            className={cn(
                type === "main"
                    ? "mx-auto max-w-[85rem] px-5 py-10 md:px-10"
                    : "w-full max-w-md space-y-7 p-0 md:p-8 md:bg-white md:border md:rounded-2xl",
                className
            )}
        >
            {children}
        </div>
    );
};

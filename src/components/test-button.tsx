import React from "react";
import { cn } from "../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "accent";
}

export const Button = ({
    variant = "primary",
    className,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={cn(
                "px-4 py-2 rounded text-white font-medium transition-opacity",
                variant === "primary" && "bg-primary hover:opacity-90",
                variant === "secondary" && "bg-secondary hover:opacity-90",
                variant === "accent" && "bg-accent hover:opacity-90",
                className
            )}
            {...props}
        />
    );
};

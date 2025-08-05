import * as React from "react";
import {
    Avatar,
    AvatarImage,
    AvatarFallback,
    TextLink,
} from "@/components/atoms";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/molecules";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

interface Item {
    type?: "item" | "separator";
    icon?: React.ReactNode;
    label?: string;
    location?: string;
    onClick?: () => void;
}

function UserMenu({
    avatar = { fallback: "U" },
    items,
    className,
}: {
    avatar?: {
        src?: string;
        fallback?: string;
    };
    items: Item[];
    className?: string;
}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div
                    className={cn(
                        "relative flex items-center rounded-lg bg-bg-asec hover:bg-bg-asec-hover hover:shadow-none focus:outline-none inner-border-pseudo shadow-sm transition-all [&[data-state=open]_svg]:rotate-180 data-[state=open]:shadow-none",
                        className
                    )}
                >
                    <div className="size-9 relative">
                        <div className="absolute h-full flex items-center">
                            <Avatar className="size-9 rounded-lg">
                                {avatar.src && (
                                    <AvatarImage
                                        src={avatar.src}
                                        alt="Avatar"
                                    />
                                )}
                                <AvatarFallback>
                                    {avatar.fallback}
                                </AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                    <div className="size-9 flex items-center justify-center">
                        <ChevronDown className="size-4 text-text-agh transition-transform duration-200" />
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
                {items.map((item, index) => {
                    if (item.type === "separator") {
                        return (
                            <DropdownMenuSeparator key={`separator-${index}`} />
                        );
                    }

                    const content = (
                        <>
                            {item.icon}
                            {item.label && <span>{item.label}</span>}
                        </>
                    );
                    return (
                        <DropdownMenuItem
                            key={item.label || `item-${index}`}
                            asChild
                        >
                            <TextLink
                                layout="dropdown"
                                href={item.location}
                                onClick={item.onClick}
                                asChild={!item.location}
                            >
                                {!item.location ? (
                                    <button type="button">{content}</button>
                                ) : (
                                    content
                                )}
                            </TextLink>
                        </DropdownMenuItem>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export { UserMenu, type Item };

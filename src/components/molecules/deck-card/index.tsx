import * as React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/molecules";
import { EllipsisVertical, Plus } from "lucide-react";
import { Button, IconButton, Progress, TextLink } from "@/components/atoms";

import { cn } from "@/lib/utils";

function DeckCard({
    className,
    children,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="deck-card"
            className={cn(
                "bg-cont-pr border border-border-default rounded-xl",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

function DeckCardContent({
    className,
    title,
    description,
    progress = 0,
    children,
    ...props
}: React.ComponentProps<"div"> & {
    title: string;
    description: string;
    progress?: number;
}) {
    progress = Math.min(Math.max(progress, 0), 100);

    return (
        <div
            data-slot="deck-card-content"
            className={cn("flex flex-col gap-4 p-3", className)}
            {...props}
        >
            <div className="flex">
                <div className="flex flex-col gap-1 flex-1">
                    <h3 className="text-text-pr typo-ui-title-sm">{title}</h3>
                    <p className="text-text-ter typo-ui-label-base">
                        {description}
                    </p>
                </div>
                <div className="flex flex-col items-end">{children}</div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <p className="text-text-sec typo-ui-label-base">Progress</p>
                    <p className="text-text-pr typo-ui-label-base">
                        {progress}%
                    </p>
                </div>
                <Progress value={progress} />
            </div>
        </div>
    );
}

function DeckCardActions({
    onEdit,
    onDelete,
    ...props
}: {
    onEdit?: () => void;
    onDelete?: () => void;
}) {
    return (
        <DropdownMenu {...props}>
            <DropdownMenuTrigger asChild>
                <IconButton>
                    <EllipsisVertical />
                </IconButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                    <button onClick={onEdit} className="w-full">
                        <TextLink layout="dropdown" asChild>
                            <span>Edit deck</span>
                        </TextLink>
                    </button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <button onClick={onDelete} className="w-full">
                        <TextLink
                            variant="destructive"
                            layout="dropdown"
                            asChild
                        >
                            <span>Delete deck</span>
                        </TextLink>
                    </button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

function DeckCardFooter({
    className,
    onAddCard,
    onStudy,
    ...props
}: React.ComponentProps<"div"> & {
    onAddCard?: () => void;
    onStudy?: () => void;
}) {
    return (
        <div
            data-slot="deck-card-footer"
            className={cn(
                "flex p-3 self-stretch border-t border-border-default",
                "flex-col items-start gap-2",
                "sm:flex-row sm:justify-between sm:items-center",
                className
            )}
            {...props}
        >
            <Button
                variant="primary"
                onClick={onStudy}
                className="w-full sm:w-auto sm:order-2"
            >
                Study now
            </Button>
            <Button
                variant="secondary"
                onClick={onAddCard}
                className="w-full sm:w-auto sm:order-1"
            >
                <Plus className="size-4" />
                Add card
            </Button>
        </div>
    );
}

export { DeckCard, DeckCardContent, DeckCardActions, DeckCardFooter };

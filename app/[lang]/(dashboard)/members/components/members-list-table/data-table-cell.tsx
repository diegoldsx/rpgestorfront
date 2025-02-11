import * as React from "react";
import { CellContext } from "@tanstack/react-table";
import { cn } from "@/lib/utils";

interface DataTableCellProps<TData> {
	context: CellContext<TData, unknown>;
	align?: "left" | "center" | "right";
	className?: string;
}

export function DataTableCell<TData>({
	context,
	align = "left",
	className = "",
}: DataTableCellProps<TData>) {
	const value = context.getValue();

	return (
		<div
			className={cn(
				"px-2 py-1 whitespace-nowrap",
				align === "center" && "text-center",
				align === "right" && "text-right",
				align === "left" && "text-left",
				className
			)}
		>
			{value !== null && value !== undefined ? String(value) : ""}
		</div>
	);
}

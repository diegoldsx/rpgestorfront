"use client";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { SlidersHorizontal } from "lucide-react";

import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@radix-ui/react-scroll-area";

interface DataTableViewOptionsProps<TData> {
	table: Table<TData>;
}
export function DataTableViewOptions<TData>({
	table,
}: DataTableViewOptionsProps<TData>) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					size="sm"
					className="ml-auto hidden h-8 lg:flex"
					onClick={(e) => e.stopPropagation()}
				>
					<SlidersHorizontal className="ltr:mr-2 rtl:ml-2 h-4 w-4" />
					Mostrar Colunas
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				side="top"
				sideOffset={5}
				align="end"
				className="min-w-[100px] h-64 overflow-y-auto"
			>
				<DropdownMenuLabel>Colunas</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<ScrollArea className="h-full">
					<ul>
						{table
							.getAllColumns()
							.filter(
								(column) =>
									typeof column.accessorFn !== "undefined" &&
									column.getCanHide()
							)
							.map((column) => {
								console.log(column.columnDef.meta);
								const columnLabel = column.columnDef.meta as string;
								return (
									<li key={column.id}>
										<DropdownMenuCheckboxItem
											checked={column.getIsVisible()}
											onCheckedChange={(value) =>
												column.toggleVisibility(!!value)
											}
											onSelect={(event) => {
												event.preventDefault();
											}}
										>
											{columnLabel}
										</DropdownMenuCheckboxItem>
									</li>
								);
							})}
					</ul>
				</ScrollArea>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

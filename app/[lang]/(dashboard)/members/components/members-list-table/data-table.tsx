"use client";

import React, { useState } from "react";
import {
	ColumnDef,
	ColumnFiltersState,
	RowSelectionState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { DataTableToolbar } from "./data-table-toolbar";
import { DataTableFilterPanel } from "./data-table-filter-panel";
import { Member } from "../../types/Member";
import { DataTablePagination } from "@/app/[lang]/(dash-components)/(invoice)/invoice-list/invoice-list-table/components/data-table-pagination";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

export const visibilityState: VisibilityState = {
	birthDate: false,
	state: false,
	cep: false,
};

interface DataTableProps {
	columns: ColumnDef<Member>[];
	data: Member[];
}

export function DataTable({ columns, data }: DataTableProps) {
	const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [sorting, setSorting] = useState<SortingState>([]);
	const [columnVisibility, setColumnVisibility] =
		useState<VisibilityState>(visibilityState);

	const table = useReactTable({
		data,
		columns,
		enableRowSelection: true,
		enableColumnPinning: true,
		initialState: {
			columnPinning: {
				right: ["actions"],
			},
		},
		state: { sorting, columnFilters, rowSelection, columnVisibility },

		onRowSelectionChange: setRowSelection,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		onColumnVisibilityChange: setColumnVisibility,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
	});

	return (
		<div>
			<div className="p-2">
				<DataTableToolbar table={table} />
			</div>
			<div className="p-2">
				<DataTableFilterPanel table={table} />
			</div>

			{/* Scroll horizontal */}
			<div className="w-full overflow-x-auto">
				<Table className="w-full">
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead
										key={header.id}
										colSpan={header.colSpan}
										onClick={
											header.column.getCanSort()
												? header.column.getToggleSortingHandler()
												: undefined
										}
										className={`cursor-pointer select-none  ${
											header.column.getIsPinned() === "right"
												? "sticky right-0 bg-white z-10 "
												: ""
										}`}
										style={{
											width: `${header.column.getSize()}px`,
										}}
									>
										<div className="flex items-center justify-center">
											{flexRender(
												header.column.columnDef.header,
												header.getContext()
											)}

											{header.column.getCanSort() && (
												<span className="ml-2 text-zinc-400">
													{header.column.getIsSorted() === "asc" ? (
														<ArrowUp className="h-4 w-4" />
													) : header.column.getIsSorted() === "desc" ? (
														<ArrowDown className="h-4 w-4" />
													) : (
														<ArrowUpDown className="h-4 w-4" />
													)}
												</span>
											)}
										</div>
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows.map((row) => (
							<TableRow key={row.id} className="hover:bg-gray-50">
								{row.getVisibleCells().map((cell) => (
									<TableCell
										key={cell.id}
										className={`text-sm text-gray-600 text-left ${
											cell.column.getIsPinned() === "right"
												? "sticky right-0 bg-white z-0"
												: ""
										}`}
										style={{
											width: `${cell.column.getSize()}px`,
										}}
									>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>

			<DataTablePagination table={table} />
		</div>
	);
}

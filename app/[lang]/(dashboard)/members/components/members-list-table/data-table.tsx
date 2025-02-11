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
	getFacetedRowModel,
	getFacetedUniqueValues,
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
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { DataTableToolbar } from "./data-table-toolbar";
import { Member } from "../../types/Member";
import { DataTablePagination } from "@/app/[lang]/(dash-components)/(invoice)/invoice-list/invoice-list-table/components/data-table-pagination";

export const visibilityState: VisibilityState = {
	id: false,
	type: true,
	tradeName: false,
	name: true,
	birthDate: false,
	email: true,
	paymentGroup: true,
	billingCycle: false,
	financialStatus: true,

	city: false,
	neighborhood: false,
	cep: false,
	street: false,
	state: false,
	number: false,
	password: false,
	complement: false,
	corporateName: true,
};

interface DataTableProps<TData extends Member> {
	columns: ColumnDef<TData>[];
	data: TData[];
}

export function DataTable<TData>({ columns, data }: DataTableProps<Member>) {
	const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [sorting, setSorting] = useState<SortingState>([]);
	const [visibleFilters, setVisibleFilters] = useState<Record<string, boolean>>(
		{}
	);
	const [columnVisibility, setColumnVisibility] =
		useState<VisibilityState>(visibilityState);

	const toggleFilterVisibility = (columnId: string) => {
		setVisibleFilters((prev) => ({
			...prev,
			[columnId]: !prev[columnId],
		}));
	};

	const table = useReactTable({
		data,
		columns,
		state: { sorting, columnFilters, rowSelection, columnVisibility },
		enableRowSelection: true,
		onRowSelectionChange: setRowSelection,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		onColumnVisibilityChange: setColumnVisibility,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
	});

	return (
		<div>
			<div className="p-2">
				<DataTableToolbar table={table} />
			</div>
			<Table>
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<TableHead
									key={header.id}
									colSpan={header.colSpan}
									className={`whitespace-nowrap transition-[height] duration-300 ease-in-out p-4 ${
										visibleFilters[header.column.id] ? "h-[70px]" : "h-[40px]"
									}`}
								>
									<div className="flex flex-col items-start gap-1 h-full transition-all duration-300 ease-in-out">
										<div className="flex items-center gap-2">
											<Search
												className="h-4 w-4 text-gray-400 cursor-pointer transition-transform duration-300 hover:scale-110"
												onClick={() => toggleFilterVisibility(header.column.id)}
											/>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext()
												  )}
										</div>

										<div
											className={`w-full transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${
												visibleFilters[header.column.id]
													? "max-h-10 opacity-100"
													: "max-h-0 opacity-0"
											}`}
										>
											{header.column.getCanFilter() && (
												<Input
													autoFocus
													value={
														(header.column.getFilterValue() as string) || ""
													}
													onChange={(e) =>
														header.column.setFilterValue(
															e.target.value || undefined
														)
													}
													placeholder={`Filtrar ${header.column.columnDef.meta}`}
													className="w-full text-sm border-gray-300 focus:border-gray-500 transition-all pl-2 focus:outline-none focus:ring-0"
												/>
											)}
										</div>
									</div>
								</TableHead>
							))}
						</TableRow>
					))}
				</TableHeader>

				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow
								key={row.id}
								data-state={row.getIsSelected() && "selected"}
								className="hover:bg-default-50 "
							>
								{row.getVisibleCells().map((cell) => (
									<TableCell
										key={cell.id}
										className="text-sm text-default-600 text-left"
									>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={columns.length} className="h-24 text-center">
								Nenhum registro encontrado.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
			<DataTablePagination table={table} />
		</div>
	);
}

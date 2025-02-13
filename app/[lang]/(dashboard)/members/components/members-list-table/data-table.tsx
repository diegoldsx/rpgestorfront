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

export const visibilityState: VisibilityState = {
	id: false,
	type: true,
	tradeName: false,
	name: true,
	birthDate: false,
	email: true,
	paymentGroup: true,
	billingCycle: true,
	financialStatus: true,
	select: true,
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
			<Table>
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<TableHead key={header.id} colSpan={header.colSpan}>
									<div className="flex items-center justify-between">
										<span>
											{flexRender(
												header.column.columnDef.header,
												header.getContext()
											)}
										</span>
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
								className="hover:bg-default-50"
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

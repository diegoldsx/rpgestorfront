"use client";

import * as React from "react";
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

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import { BasePagination } from "./table-pagination";
import { DataTableColumnToggler } from "./table-column-toggler";
import FacetedFilters from "./faceted-filters";
import DataTableHeader from "./data-table-header";
import { TableDataExporter } from "./table-data-exporter";

interface DataTableProps<TData> {
	columns: ColumnDef<TData, any>[];
	data: TData[];
	toolbar?: React.ReactNode;
	facetedFilters?: any[];
	filterComponent?: React.ReactNode;
	toolbarActions?: React.ReactNode;
	rowActions?: (row: TData) => React.ReactNode;
	emptyMessage?: string;
	selectable?: boolean;
	visibilityState?: VisibilityState;
}

export function DataTable<TData>({
	columns,
	data,
	facetedFilters,
	visibilityState = {},
	rowActions,
	emptyMessage = "Nenhum registro encontrado.",
	selectable = true,
}: DataTableProps<TData>) {
	const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>(visibilityState);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	);
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
			columnVisibility,
			rowSelection,
			columnFilters,
		},
		enableRowSelection: selectable,
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

	const safeFacetedFilters = facetedFilters ?? [];
	console.log(table.getHeaderGroups());
	return (
		<div className="">
			<header className="flex items-center justify-end gap-4 p-4">
				<div className="space-x-2">
					<FacetedFilters filters={safeFacetedFilters} table={table} />
				</div>

				<div className="space-x-2">
					<DataTableColumnToggler table={table} />
				</div>

				<div className="space-x-2">
					<TableDataExporter table={table} />
				</div>
			</header>

			<div className="border-t border-default-200">
				<Table>
					<DataTableHeader headerGroups={table.getHeaderGroups()} />
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
											className="text-sm  text-default-600"
										>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
									{rowActions && (
										<TableCell className="text-right">
											{rowActions(row.original)}
										</TableCell>
									)}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length + (rowActions ? 1 : 0)}
									className="h-24 text-center"
								>
									{emptyMessage}
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<BasePagination table={table} />
		</div>
	);
}

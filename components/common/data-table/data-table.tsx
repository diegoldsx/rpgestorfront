"use client";

import * as React from "react";
import {
	Cell,
	CellContext,
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
import { Checkbox } from "@/components/ui/checkbox";
import { BasePagination } from "./table-pagination";
import { DataTableColumnToggler } from "./table-column-toggler";
import FacetedFilters from "./faceted-filters";
import DataTableHeader from "./data-table-header";
import { TableDataExporter } from "./table-data-exporter";
import { DataTableAdvancedSearch } from "./data-table-advanced-search";
import Link from "next/link";
import { Option } from "@/types/options/Option";

export type FacetedFilter = {
	id: string;
	title: string;
	options: Option[];
};

interface DataTableProps<TData extends { id: string | number }> {
	columns: ColumnDef<TData, any>[];
	data: TData[];
	facetedFilters?: FacetedFilter[];
	emptyMessage?: string;
	selectable?: boolean;
	visibilityState?: VisibilityState;
	sortBy?: SortingState;
}

export function DataTable<TData extends { id: string | number }>({
	columns,
	data,
	facetedFilters,
	visibilityState = {},
	emptyMessage = "Nenhum registro encontrado.",
	selectable = true,
	sortBy = [],
}: DataTableProps<TData>) {
	const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});
	const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>(visibilityState);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
	const [sorting, setSorting] = React.useState<SortingState>(sortBy);

	const selectColumn = React.useMemo<ColumnDef<TData, any>>(
		() => ({
			id: "select",
			header: ({ table }) => {
				const all = table.getIsAllRowsSelected();
				const some = table.getIsSomeRowsSelected();
				return (
					<Checkbox
						aria-label="Selecionar todos"
						checked={all}
						onCheckedChange={(v) => table.toggleAllRowsSelected(!!v)}
						ref={(el) => {
							if (el) {
								// @ts-ignore
								el.indeterminate = some && !all;
							}
						}}
					/>
				);
			},
			cell: ({ row }) => (
				<Checkbox
					aria-label={`Selecionar linha ${row.id}`}
					checked={row.getIsSelected()}
					onCheckedChange={(v) => row.toggleSelected(!!v)}
				/>
			),
			enableSorting: false,
			enableColumnFilter: false,
			size: 32,
		}),
		[]
	);

	type RowT = (typeof data)[number];

	const baseCols = React.useMemo<ColumnDef<RowT>[]>(() => [...columns], [columns]);

	const allColumns = React.useMemo<ColumnDef<RowT>[]>(
		() => (selectable ? [selectColumn as ColumnDef<RowT>, ...baseCols] : baseCols),
		[baseCols, selectable, selectColumn]
	);

	const table = useReactTable({
		data,
		columns: allColumns, // Coluna de Actions será a primeira a ser exibida em todos componentes
		columnResizeMode: "onEnd",
		state: { sorting, columnVisibility, rowSelection, columnFilters },
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

	return (
		<div>
			<header className="flex items-center justify-end gap-4 p-4">
				<FacetedFilters filters={facetedFilters ?? []} table={table} />
				<DataTableColumnToggler table={table} />
				<TableDataExporter table={table} />
				<DataTableAdvancedSearch table={table} />
			</header>

			<div className="border-t border-default-200">
				<Table>
					<DataTableHeader headerGroups={table.getHeaderGroups()} />
					<TableBody>
						{table.getRowModel().rows.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow key={row.id} data-state={row.getIsSelected() && "selected"} className="hover:bg-default-50">
									{row.getVisibleCells().map((cell) => (
										<TableCell
											key={cell.id}
											className="text-sm text-default-600"
											style={{ width: cell.column.getSize() }}
										>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className="h-24 text-left">
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

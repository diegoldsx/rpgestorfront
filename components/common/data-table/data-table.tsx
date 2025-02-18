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

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { DataTableToolbar } from "./table-toolbar";
import { BasePagination } from "./table-pagination";
import { DataTableFacetedFilter } from "./table-faceted-filter";

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
	hideColumns?: string[];
}

export function DataTable<TData>({
	columns,
	data,
	toolbar,
	filterComponent,
	facetedFilters,
	toolbarActions,
	rowActions,
	emptyMessage = "Nenhum registro encontrado.",
	selectable = true,
}: DataTableProps<TData>) {
	const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
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

	return (
		<div>
			<div className="flex p-6 space-x-4 ">
				{safeFacetedFilters.map((filter) => {
					const column = table.getColumn(filter.id);
					if (!column) return null;

					return (
						<DataTableFacetedFilter
							key={filter.id}
							column={column}
							title={filter.title}
							options={filter.options}
						/>
					);
				})}
			</div>

			<div className="border-t border-default-200">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead
										key={header.id}
										colSpan={header.colSpan}
										className="whitespace-nowrap h-11"
									>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext()
											  )}
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
											className="text-sm text-default-600"
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

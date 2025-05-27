"use client";

import * as React from "react";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableFooter } from "@/components/ui/table";
import { FileX } from "lucide-react";

interface SimpleTableProps<TData> {
	columns: ColumnDef<TData, any>[];
	data: TData[];
}

export function SimpleTable<TData>({ columns, data }: SimpleTableProps<TData>) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className="w-full">
			<div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow
								key={headerGroup.id}
								className="border-b border-gray-200 bg-gray-50"
							>
								{headerGroup.headers.map((header) => (
									<TableHead
										key={header.id}
										colSpan={header.colSpan}
										className="h-12 px-6 text-left text-sm font-semibold text-gray-700"
									>
										{header.isPlaceholder ? null : (
											<div className="flex items-center space-x-2">
												{flexRender(header.column.columnDef.header, header.getContext())}
											</div>
										)}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row, index) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
									className={`
                border-b border-gray-100 transition-colors duration-200
                hover:bg-gray-50
                ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              `}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell
											key={cell.id}
											className="px-6 py-3 text-sm text-gray-800"
										>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<EmptyRow columnsLength={columns.length} />
						)}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}

const EmptyRow = ({ columnsLength }: { columnsLength: number }) => (
	<TableRow className="hover:bg-transparent">
		<TableCell
			colSpan={columnsLength}
			className="h-32 text-center border-0"
		>
			<div className="flex flex-col items-center justify-center space-y-3 text-muted-foreground">
				<div className="rounded-full bg-muted/30 p-3">
					<FileX className="h-6 w-6" />
				</div>
				<div className="space-y-1">
					<p className="text-sm font-medium">Nenhum resultado encontrado</p>
					<p className="text-xs text-muted-foreground/70">
						Não há dados disponíveis para exibir
					</p>
				</div>
			</div>
		</TableCell>
	</TableRow>
);

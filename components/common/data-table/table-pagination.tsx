"use client";
import { ChevronsLeft, ChevronRight, ChevronLeft, ChevronsRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Table } from "@tanstack/react-table";

interface BasePaginationProps<TData> {
	table: Table<TData>;
	totalLabel?: string;
}

export function TablePagination<TData>({ table, totalLabel = "registros selecionados" }: BasePaginationProps<TData>) {
	// Obtém o número total de páginas
	const totalPages = table.getPageCount();

	// Obtém a página atual
	const currentPage = table.getState().pagination.pageIndex + 1;

	// Calcula início e fim para exibição de páginas
	let startPage = Math.max(currentPage - 2, 1);
	let endPage = Math.min(startPage + 4, totalPages);

	if (endPage - startPage < 4) {
		startPage = Math.max(endPage - 4, 1);
	}

	const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

	return (
		<div className="flex items-center flex-wrap gap-2 justify-between p-4 border-t border-default-200">
			<div className="flex-1 text-sm text-muted-foreground">
				{table.getFilteredSelectedRowModel().rows.length} de {table.getFilteredRowModel().rows.length} {totalLabel}
			</div>

			<div className="flex flex-wrap items-center gap-2">
				<div className="flex items-center gap-2">
					<Button variant="outline" className="h-8 w-8 p-0" onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
						<span className="sr-only">Primeira página</span>
						<ChevronsLeft className="h-4 w-4" />
					</Button>

					<Button variant="outline" className="h-8 w-8 p-0" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
						<span className="sr-only">Página anterior</span>
						<ChevronLeft className="h-4 w-4" />
					</Button>

					{/* Botões de página */}
					<div className="flex gap-2">
						{pages.map((page) => (
							<Button key={page} variant={currentPage === page ? "soft" : "outline"} className="h-8 w-8 p-0" onClick={() => table.setPageIndex(page - 1)}>
								{page}
							</Button>
						))}
					</div>

					<Button variant="outline" className="h-8 w-8 p-0" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
						<span className="sr-only">Próxima página</span>
						<ChevronRight className="h-4 w-4" />
					</Button>

					<Button variant="outline" className="h-8 w-8 p-0" onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
						<span className="sr-only">Última página</span>
						<ChevronsRight className="h-4 w-4" />
					</Button>
				</div>
			</div>
		</div>
	);
}

"use client";
import { X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";
import { Table } from "@tanstack/react-table";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface DataTableToolbarProps<TData> {
	table: Table<TData>;
	filterComponent?: React.ReactNode;
	actions?: React.ReactNode;
	searchPlaceholder?: string;
	searchField?: string;
	addNewButton?: {
		label: string;
		href: string;
	};
}

export function DataTableToolbar<TData>({
	table,
	filterComponent,
	actions,
	searchPlaceholder = "Buscar...",
	searchField = "name",
	addNewButton,
}: DataTableToolbarProps<TData>) {
	const isFiltered = table.getState().columnFilters.length > 0;

	return (
		<div className="flex flex-col md:flex-row gap-4">
			<div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-3">
				{/* Itens por página */}
				<div className="flex items-center gap-3">
					<span className="text-base font-medium text-default-600">Exibir</span>
					<Select
						onValueChange={(value) => {
							table.setPageSize(Number(value));
						}}
					>
						<SelectTrigger className="w-20" size="md" radius="sm">
							<SelectValue placeholder={table.getState().pagination.pageSize} />
						</SelectTrigger>
						<SelectContent className="w-20 min-w-[80px]">
							{[10, 20, 30, 40, 50].map((pageSize) => (
								<SelectItem key={pageSize} value={`${pageSize}`}>
									{pageSize}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				{/* Campo de busca */}
				<div className="relative">
					<Input
						placeholder={searchPlaceholder}
						value={
							(table.getColumn(searchField)?.getFilterValue() as string) ?? ""
						}
						onChange={(event) =>
							table.getColumn(searchField)?.setFilterValue(event.target.value)
						}
						className="min-w-[200px] sm:max-w-[248px] ltr:pl-7 rtl:pr-7 rounded"
					/>
					<Icon
						icon="heroicons:magnifying-glass"
						className="w-3.5 h-3.5 absolute top-1/2 -translate-y-1/2 ltr:left-3 rtl:right-3 text-default-500"
					/>
				</div>
			</div>

			<div className="flex-none flex flex-col sm:flex-row sm:items-center gap-4">
				{/* Filtros customizados */}
				{filterComponent}

				{/* Botão de limpar filtros */}
				{isFiltered && (
					<Button
						variant="outline"
						onClick={() => table.resetColumnFilters()}
						className="border-default-300 text-default-600 px-2 lg:px-3"
					>
						Limpar Filtros
						<X className="ltr:ml-2 rtl:mr-2 h-4 w-4" />
					</Button>
				)}

				{/* Ações customizadas */}
				{actions}

				{/* Botão de adicionar novo */}
				{addNewButton && (
					<Button asChild>
						<a href={addNewButton.href}>
							<Plus className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
							{addNewButton.label}
						</a>
					</Button>
				)}
			</div>
		</div>
	);
}

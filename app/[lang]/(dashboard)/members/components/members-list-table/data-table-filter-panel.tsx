"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table } from "@tanstack/react-table";
import { ChevronDown, ChevronUp, Filter, Search } from "lucide-react";

import { Member } from "../../types/Member";

interface DataTableFilterProps {
	table: Table<Member>;
}

export const DataTableFilterPanel: React.FC<DataTableFilterProps> = ({
	table,
}) => {
	const [showFilters, setShowFilters] = React.useState(false);
	const [filterValues, setFilterValues] = React.useState<
		Record<string, string>
	>({});

	const handleInputChange = (columnId: string, value: string) => {
		setFilterValues((prev) => ({ ...prev, [columnId]: value }));
	};

	const handleFilter = () => {
		Object.entries(filterValues).forEach(([columnId, value]) => {
			const column = table.getColumn(columnId);
			column?.setFilterValue(value || undefined);
		});
		table.resetPageIndex();
	};

	const handleClearFilters = () => {
		setFilterValues({});
		table.resetColumnFilters();
	};

	const renderFilterField = (columnId: string) => (
		<div className="relative">
			<Input
				value={filterValues[columnId] || ""}
				onChange={(e) => handleInputChange(columnId, e.target.value)}
				className="w-full pl-10"
			/>
			<Filter className="absolute left-3 top-2.5 h-4 w-4 text-zinc-300" />
		</div>
	);

	return (
		<div className="w-full mb-2">
			<div className="flex items-center">
				<span
					onClick={() => setShowFilters((prev) => !prev)}
					className="flex items-center justify-between gap-2 text-primary cursor-pointer"
				>
					<Search className="h-4 w-4" />
					{showFilters ? "Esconder Filtros" : "Busca avançada"}
					{showFilters ? (
						<ChevronUp className="h-4 w-4" />
					) : (
						<ChevronDown className="h-4 w-4" />
					)}
				</span>
			</div>
			<div
				className={`overflow-hidden transition-[max-height] shadow-md duration-500 ease-in-out ${
					showFilters ? "max-h-[500px]" : "max-h-0"
				}`}
			>
				<div className="grid mt-2 grid-cols-1 md:grid-cols-4  gap-6 p-6">
					{table
						.getAllColumns()
						.filter((col) => col.columnDef.meta?.type === "text") // Apenas colunas com meta.type === "text"
						.map((col) => (
							<div key={col.id}>
								<label className="block text-xs font-bold uppercase mb-1 text-primary">
									{col.columnDef.header as string}
								</label>
								{renderFilterField(col.id)}
							</div>
						))}
					<div className="mt-6 col-span-1 md:col-span-2 flex justify-end gap-4">
						<Button onClick={handleClearFilters} variant={"outline"}>
							Limpar Filtros
						</Button>
						<Button onClick={handleFilter}>Procurar</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

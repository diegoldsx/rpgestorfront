"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table } from "@tanstack/react-table";
import { ChevronDown, ChevronUp, Filter } from "lucide-react"; // Ícones de filtro e seta

import { Member } from "../../types/Member";
import { Separator } from "@radix-ui/react-dropdown-menu";

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

	const renderFilterField = (columnId: string) => {
		return (
			<div className="relative">
				<Input
					value={filterValues[columnId] || ""}
					onChange={(e) => handleInputChange(columnId, e.target.value)}
					className="w-full pl-10"
				/>
				<Filter className="absolute left-3 top-2.5 h-4 w-4 text-zinc-300" />
			</div>
		);
	};

	return (
		<div className="w-full  p-2 mb-6 ">
			<div className="flex items-center   ">
				<Button
					onClick={() => setShowFilters((prev) => !prev)}
					variant="ghost"
					className="flex items-center gap-2  transition-all duration-300"
				>
					<Filter className="h-4 w-4" />

					{showFilters ? "Esconder Filtros" : "Filtros Avançados"}
					{showFilters ? (
						<ChevronUp className="h-4 w-4" />
					) : (
						<ChevronDown className="h-4 w-4" />
					)}
				</Button>
			</div>
			<div
				className={`overflow-hidden shadow-md transition-all duration-400 easy-in ${
					showFilters ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 ">
					{table
						.getAllColumns()
						.filter((col) => col.getCanFilter())
						.map((col) => (
							<div key={col.id}>
								<label className="block text-xs font-bold uppercase text-primary mb-1">
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

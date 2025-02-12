"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectItem,
	SelectTrigger,
	SelectValue,
	SelectContent,
} from "@/components/ui/select";
import { Table } from "@tanstack/react-table";
import { Member } from "../../types/Member";

interface DataTableFilterProps {
	table: Table<Member>;
}

export const DataTableFilter: React.FC<DataTableFilterProps> = ({ table }) => {
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
		const selectOptions = getDynamicOptions(columnId);

		if (selectOptions.length > 0) {
			return (
				<Select
					value={filterValues[columnId] || ""}
					onValueChange={(value) => handleInputChange(columnId, value)}
				>
					<SelectTrigger>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						{selectOptions.map((option) => (
							<SelectItem key={option.value} value={option.value}>
								{option.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			);
		}

		return (
			<Input
				value={filterValues[columnId] || ""}
				onChange={(e) => handleInputChange(columnId, e.target.value)}
			/>
		);
	};

	const getDynamicOptions = (
		columnId: string
	): { value: string; label: string }[] => {
		switch (columnId) {
			case "financialStatus":
				return [
					{ value: "ativo", label: "Ativo" },
					{ value: "inativo", label: "Inativo" },
					{ value: "pendente", label: "Pendente" },
				];
			case "billingCycle":
				return [
					{ value: "mensal", label: "Mensal" },
					{ value: "bimestral", label: "Bimestral" },
					{ value: "trimestral", label: "Trimestral" },
					{ value: "anual", label: "Anual" },
				];
			default:
				return [];
		}
	};

	return (
		<div className="w-full p-4 rounded-lg">
			<Button
				onClick={() => setShowFilters((prev) => !prev)}
				className="mb-4 bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all duration-300"
			>
				{showFilters ? "Esconder Filtros" : "Filtros Avançados"}
			</Button>
			<div
				className={`overflow-hidden bg-gray-50 rounded-lg transition-all duration-500 ease-in-out ${
					showFilters ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				<div className="p-4 grid grid-cols-2 gap-4">
					{table
						.getAllColumns()
						.filter((col) => col.getCanFilter())
						.map((col) => (
							<div key={col.id}>
								<label className="block text-sm font-medium capitalize">
									{col.columnDef.header as string}
								</label>
								{renderFilterField(col.id)}
							</div>
						))}
					<div className="mt-4 col-span-2 flex gap-4">
						<Button
							onClick={handleClearFilters}
							className="bg-gray-400 text-white"
						>
							Limpar Filtros
						</Button>
						<Button onClick={handleFilter} className="bg-blue-500 text-white">
							Procurar
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

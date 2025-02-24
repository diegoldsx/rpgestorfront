import React from "react";
import { Table } from "@tanstack/react-table";
import { DataTableFacetedFilter } from "./table-faceted-filter"; // Importe o componente correto

interface FacetedFiltersProps<TData> {
	table: Table<TData>;
	filters: { id: string; title: string; options: any[] }[];
}

export default function FacetedFilters<TData>({
	table,
	filters,
}: FacetedFiltersProps<TData>) {
	return (
		<>
			{filters.map((filter) => {
				const column = table.getColumn(filter.id);
				return column && column.getIsVisible() ? (
					<DataTableFacetedFilter
						key={filter.id}
						column={column}
						title={filter.title}
						options={filter.options}
					/>
				) : null;
			})}
		</>
	);
}

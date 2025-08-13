import { Column } from "@/types/columns/ColumnsDefinition";
import { VisibilityState } from "@tanstack/react-table";
import { createColumn } from "@/types/columns/ColumnsDefinition";
import { TransferType } from "@/types/Transfer";
import { FacetedFilter } from "@/components/common/data-table/data-table";

export const columnSchema: Array<Column<TransferType>> = [
	createColumn<TransferType>({
		id: "id",
		title: "ID",
		type: "id",
		size: 100,
	}),
	createColumn<TransferType>({
		id: "origin",
		title: "Origem",
		type: "text",
		size: 100,
	}),
	createColumn<TransferType>({
		id: "destination",
		title: "Destino",
		type: "text",
		size: 100,
	}),
	createColumn<TransferType>({
		id: "date",
		title: "Data",
		type: "date",
		size: 100,
	}),
	createColumn<TransferType>({
		id: "amount",
		title: "Valor",
		type: "text",
		size: 100,
	}),

]


export const defaultValues = Object.fromEntries(
	columnSchema.map(({ id, defaultValue }) => [id, defaultValue])
) as Partial<TransferType>;

export const facetedFilters = columnSchema.filter((f) => !!f.options) as FacetedFilter[];

export const visibleColumns: ReadonlyArray<string> = ["*"];
export const visibilityState: VisibilityState = Object.fromEntries(
	columnSchema.map(({ id }) => [
		id,
		visibleColumns.includes(id) || visibleColumns[0] === "*",
	])
);


export function getFieldsWithOptions() {
	return columnSchema.filter(({ options }) => !!options);
}

import { Column } from "@/types/columns/ColumnsDefinition";
import { VisibilityState } from "@tanstack/react-table";
import { createColumn } from "@/types/columns/ColumnsDefinition";
import { ReturnType } from "@/types/Return";

export const columnSchema: Array<Column<ReturnType>> = [
	createColumn<ReturnType>({
		id: "id",
		title: "ID",
		type: "id",
		size: 100,
	}),
	createColumn<ReturnType>({
		id: "account",
		title: "conta",
		type: "text",
		size: 100,
	}),
	createColumn<ReturnType>({
		id: "filePath",
		title: "Arquivo",
		type: "text",
		size: 100,
	}),

]


export const defaultValues = Object.fromEntries(
	columnSchema.map(({ id, defaultValue }) => [id, defaultValue])
) as Partial<ReturnType>;

export const facetedFilters = columnSchema.filter((f) => !!f.options);

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

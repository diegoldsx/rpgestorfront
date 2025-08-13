import { Column } from "@/types/columns/ColumnsDefinition";
import { VisibilityState } from "@tanstack/react-table";
import { createColumn } from "@/types/columns/ColumnsDefinition";
import { ProvisionType } from "@/types/Provision";
import { FacetedFilter } from "@/components/common/data-table/data-table";


export const columnSchema: Array<Column<ProvisionType>> = [
	createColumn<ProvisionType>({
		id: "id",
		title: "ID",
		type: "id",
		size: 100,
	}),
	createColumn<ProvisionType>({
		id: "ammount",
		title: "Quantia",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ProvisionType>({
		id: "documentDate",
		title: "Data doc",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ProvisionType>({
		id: "description",
		title: "Descrição",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ProvisionType>({
		id: "observations",
		title: "Observações",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
]


export const defaultValues = Object.fromEntries(
	columnSchema.map(({ id, defaultValue }) => [id, defaultValue])
) as Partial<ProvisionType>;

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

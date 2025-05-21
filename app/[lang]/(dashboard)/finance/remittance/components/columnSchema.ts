import { Column } from "@/types/columns/ColumnsDefinition";
import { VisibilityState } from "@tanstack/react-table";
import { createColumn } from "@/types/columns/ColumnsDefinition";
import { RemittanceType } from "@/types/Remittance";

export const columnSchema: Array<Column<RemittanceType>> = [
	createColumn<RemittanceType>({
		id: "id",
		title: "ID",
		type: "id",
		size: 100,
	}),
	createColumn<RemittanceType>({
		id: "bank",
		title: "Banco",
		type: "text",
		size: 150,
	}),
	createColumn<RemittanceType>({
		id: "search",
		title: "Pesquisa",
		type: "text",
		size: 150,
	}),
	createColumn<RemittanceType>({
		id: "searchFor",
		title: "Pesquisa por",
		type: "text",
		size: 150,
	}),
	createColumn<RemittanceType>({
		id: "dueDate",
		title: "Data de vencimento",
		type: "date",
		size: 150,
	}),
	createColumn<RemittanceType>({
		id: "finalDate",
		title: "Data final",
		type: "date",
		size: 150,
	}),
	createColumn<RemittanceType>({
		id: "dateType",
		title: "Tipo de data",
		type: "select",
		options: [
			{ value: "due", label: "Vencimento" },
			{ value: "payment", label: "Pagamento" },
		],
		size: 150,
	}),
	createColumn<RemittanceType>({
		id: "limit",
		title: "Limite",
		type: "date",
		size: 150,
	}),
	createColumn<RemittanceType>({
		id: "type",
		title: "Tipo",
		type: "select",
		options: [
			{ value: "invoice", label: "Fatura" },
			{ value: "all", label: "Todas" },
		],
		size: 150,
	}),


]


export const defaultValues = Object.fromEntries(
	columnSchema.map(({ id, defaultValue }) => [id, defaultValue])
) as Partial<RemittanceType>;

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

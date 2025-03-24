import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { FieldConfig } from "@/app/types/FieldConfig";
import { ReportSchemaType } from "@/schemas/finance/report";

// Arquivo que nao existe e que ser  preenchido conforme o tipo dele
export const options = {};
// Configuração dinâmica das colunas
export const columnConfig: FieldConfig<ReportSchemaType>[] = [
	{ id: "id", title: "ID", defaultValue: "" },
	{ id: "title", title: "Título", defaultValue: "" },
	{ id: "author", title: "Autor", defaultValue: "" },
	{ id: "date", title: "Data", defaultValue: "" },
	{ id: "status", title: "Status", defaultValue: "" },
];

export const defaultValues: Partial<ReportSchemaType> = columnConfig.reduce(
	(acc, field) => {
		acc[field.id] =
			field.type === "number"
				? String(field.defaultValue) // Converte números para string
				: field.defaultValue;

		return acc;
	},
	{} as Partial<ReportSchemaType>
);

export const facetedFilters = columnConfig.filter(({ options }) => !!options);

export const visibleColumns: ReadonlyArray<string> = ["*"];
export const visibilityState: VisibilityState = Object.fromEntries(
	columnConfig.map(({ id }) => [
		id,
		visibleColumns.includes(id) || visibleColumns[0] === "*",
	])
);

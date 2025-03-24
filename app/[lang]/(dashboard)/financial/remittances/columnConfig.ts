import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { FieldConfig } from "@/app/types/FieldConfig";
import { RemittanceSchemaType } from "@/schemas/finance/remittance";
import { Remittance } from "@/types/finance/remittance";

export const options = {
	status: [
		{ value: "active", label: "Ativo" },
		{ value: "inactive", label: "Inativo" },
	],
};

const fieldTypes: Partial<
	Record<keyof Remittance, "text" | "number" | "date" | "select">
> = {
	status: "select",
};

// Configuração dinâmica das colunas
export const columnConfig: FieldConfig<RemittanceSchemaType>[] = [
	{ id: "id", title: "ID", defaultValue: "" },
	{ id: "amount", title: "Quantia", defaultValue: "" },
	{ id: "type", title: "Tipo", defaultValue: "" },
	{ id: "bank", title: "Banco", defaultValue: "" },
	{ id: "search", title: "Busca", defaultValue: "" },
	{ id: "searchFor", title: "Busca por", defaultValue: "" },
	{ id: "startDate", title: "Data inicial", defaultValue: "" },
	{ id: "finalDate", title: "Data final", defaultValue: "" },
	{ id: "limit", title: "Limite", defaultValue: "" },
	{ id: "dateCategory", title: "Categoria", defaultValue: "" },
];

export const defaultValues: Partial<RemittanceSchemaType> = columnConfig.reduce(
	(acc, field) => {
		acc[field.id] =
			field.type === "number"
				? String(field.defaultValue) // Converte números para string
				: field.defaultValue;

		return acc;
	},
	{} as Partial<RemittanceSchemaType>
);

export const facetedFilters = columnConfig.filter(({ options }) => !!options);

export const visibleColumns: ReadonlyArray<string> = ["*"];
export const visibilityState: VisibilityState = Object.fromEntries(
	columnConfig.map(({ id }) => [
		id,
		visibleColumns.includes(id) || visibleColumns[0] === "*",
	])
);

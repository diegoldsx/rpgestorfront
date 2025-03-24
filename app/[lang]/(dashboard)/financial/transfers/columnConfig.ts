import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { FieldConfig } from "@/app/types/FieldConfig";
import { TransferSchemaType } from "@/schemas/finance/transfer";

// Configuração dinâmica das colunas
export const columnConfig: FieldConfig<TransferSchemaType>[] = [
	{ id: "id", title: "ID", defaultValue: "" },
	{ id: "origin", title: "Quantia", defaultValue: "" },
	{ id: "destination", title: "Tipo", defaultValue: "" },
	{ id: "date", title: "Banco", defaultValue: "" },
	{ id: "amount", title: "Busca", defaultValue: "" },
];

export const defaultValues: Partial<TransferSchemaType> = columnConfig.reduce(
	(acc, field) => {
		acc[field.id] =
			field.type === "number"
				? String(field.defaultValue) // Converte números para string
				: field.defaultValue;

		return acc;
	},
	{} as Partial<TransferSchemaType>
);

export const facetedFilters = columnConfig.filter(({ options }) => !!options);

export const visibleColumns: ReadonlyArray<string> = ["*"];
export const visibilityState: VisibilityState = Object.fromEntries(
	columnConfig.map(({ id }) => [
		id,
		visibleColumns.includes(id) || visibleColumns[0] === "*",
	])
);

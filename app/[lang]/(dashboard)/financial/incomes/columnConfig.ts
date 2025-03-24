import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { FieldConfig } from "@/app/types/FieldConfig";
import { IncomeSchemaType } from "@/schemas/finance/income";

export const options = {};

export const columnConfig: FieldConfig<IncomeSchemaType>[] = [
	{ id: "id", title: "ID", defaultValue: "" },
	{ id: "payer", title: "Pagador", defaultValue: "" },
	{ id: "dueDate", title: "Data de vencimento", defaultValue: "" },
	{ id: "account", title: "Categoria", defaultValue: "" },
	{ id: "paymentMethod", title: "Método de pagamento", defaultValue: "" },
	{ id: "costCenter", title: "Centro de custo", defaultValue: "" },
	{ id: "category", title: "Conta", defaultValue: "" },
	{ id: "taxApplied", title: "Descrição", defaultValue: "" },
	{ id: "value", title: "Observações", defaultValue: "" },
];

export const defaultValues: Partial<IncomeSchemaType> = columnConfig.reduce(
	(acc, field) => {
		acc[field.id] =
			field.type === "number"
				? String(field.defaultValue) // Converte números para string
				: field.defaultValue;

		return acc;
	},
	{} as Partial<IncomeSchemaType>
);

export const facetedFilters = columnConfig.filter(({ options }) => !!options);

export const visibleColumns: ReadonlyArray<string> = ["*"];
export const visibilityState: VisibilityState = Object.fromEntries(
	columnConfig.map(({ id }) => [
		id,
		visibleColumns.includes(id) || visibleColumns[0] === "*",
	])
);

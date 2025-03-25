import { VisibilityState } from "@tanstack/react-table";
import { FieldConfig } from "@/app/types/FieldConfig";
import { RemittanceSchemaType } from "@/types/finance/remittance";

const field = (
	id: keyof RemittanceSchemaType,
	title: string,
	options?: any
) => ({
	id,
	title,
	defaultValue: "",
	...(options && { options }),
});

export const columnConfig: FieldConfig<RemittanceSchemaType>[] = [
	field("id", "ID"),
	field("bank", "Banco", [
		{ value: "caixa", label: "Caixa" },
		{ value: "bradesco", label: "Bradesco" },
	]),
	field("search", "Busca"),
	field("searchFor", "Busca por"),
	field("dueDate", "Vencimento"),
	field("finalDate", "Final"),
	field("dateType", "Tipo"),
	field("type", "Tipo", [
		{ value: "all", label: "Todos" },
		{ value: "other", label: "Outros" },
	]),
];

export const defaultValues = Object.fromEntries(
	columnConfig.map(({ id, defaultValue }) => [id, defaultValue])
) as Partial<RemittanceSchemaType>;

export const facetedFilters = columnConfig.filter((f) => !!f.options);

export const visibleColumns: ReadonlyArray<string> = ["*"];
export const visibilityState: VisibilityState = Object.fromEntries(
	columnConfig.map(({ id }) => [
		id,
		visibleColumns.includes(id) || visibleColumns[0] === "*",
	])
);

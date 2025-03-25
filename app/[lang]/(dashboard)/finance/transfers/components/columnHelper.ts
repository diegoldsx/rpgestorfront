import { VisibilityState } from "@tanstack/react-table";
import { FieldConfig } from "@/app/types/FieldConfig";
import { TransferSchemaType } from "@/types/finance/transfer";

const field = (id: keyof TransferSchemaType, title: string, options?: any) => ({
	id,
	title,
	defaultValue: "",
	...(options && { options }),
});

export const columnConfig: FieldConfig<TransferSchemaType>[] = [
	field("id", "ID"),
	field("destination", "Grupo", [
		{ value: "caixa", label: "Caixa" },
		{ value: "bradesco", label: "Bradesco" },
	]),
	field("origin", "Origem", [
		{ value: "caixa", label: "Caixa" },
		{ value: "bradesco", label: "Bradesco" },
	]),
	field("date", "Data"),
	field("amount", "Quantia"),
];

export const defaultValues = Object.fromEntries(
	columnConfig.map(({ id, defaultValue }) => [id, defaultValue])
) as Partial<TransferSchemaType>;

export const facetedFilters = columnConfig.filter((f) => !!f.options);

export const visibleColumns: ReadonlyArray<string> = ["*"];
export const visibilityState: VisibilityState = Object.fromEntries(
	columnConfig.map(({ id }) => [
		id,
		visibleColumns.includes(id) || visibleColumns[0] === "*",
	])
);

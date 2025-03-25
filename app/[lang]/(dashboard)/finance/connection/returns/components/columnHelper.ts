import { VisibilityState } from "@tanstack/react-table";
import { FieldConfig } from "@/app/types/FieldConfig";
import { ReturnSchemaType } from "@/types/finance/return";

const field = (id: keyof ReturnSchemaType, title: string, options?: any) => ({
	id,
	title,
	defaultValue: "",
	...(options && { options }),
});

export const columnConfig: FieldConfig<ReturnSchemaType>[] = [
	field("id", "ID"),
	field("account", "Conta", [
		{ value: "cx", label: "Caixa" },
		{ value: "br", label: "Bradesco" },
	]),
	field("filePath", "Arquivo"),
];

export const defaultValues = Object.fromEntries(
	columnConfig.map(({ id, defaultValue }) => [id, defaultValue])
) as Partial<ReturnSchemaType>;

export const facetedFilters = columnConfig.filter((f) => !!f.options);

export const visibleColumns: ReadonlyArray<string> = ["*"];
export const visibilityState: VisibilityState = Object.fromEntries(
	columnConfig.map(({ id }) => [
		id,
		visibleColumns.includes(id) || visibleColumns[0] === "*",
	])
);

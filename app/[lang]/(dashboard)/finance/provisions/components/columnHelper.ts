import { VisibilityState } from "@tanstack/react-table";
import { FieldConfig } from "@/app/types/FieldConfig";
import { ProvisionSchemaType } from "@/types/finance/provision";

const field = (
	id: keyof ProvisionSchemaType,
	title: string,
	options?: any
) => ({
	id,
	title,
	defaultValue: "",
	...(options && { options }),
});

export const columnConfig: FieldConfig<ProvisionSchemaType>[] = [
	field("id", "ID"),
	field("ammount", "Valor"),
	field("documentDate", "Data documento"),
	field("description", "Descrição"),
	field("observations", "Observações"),
];

export const defaultValues = Object.fromEntries(
	columnConfig.map(({ id, defaultValue }) => [id, defaultValue])
) as Partial<ProvisionSchemaType>;

export const provisionFacetedFilters = columnConfig.filter((f) => !!f.options);

export const visibleColumns: ReadonlyArray<string> = ["*"];
export const provisionVisibilityState: VisibilityState = Object.fromEntries(
	columnConfig.map(({ id }) => [
		id,
		visibleColumns.includes(id) || visibleColumns[0] === "*",
	])
);

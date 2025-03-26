import { VisibilityState } from "@tanstack/react-table";
import { FieldConfig } from "@/app/types/FieldConfig";
import { AssemblySchemaType } from "@/types/assembly/assembly";

const field = (id: keyof AssemblySchemaType, title: string, options?: any) => ({
	id,
	title,
	defaultValue: "",
	...(options && { options }),
});

export const columnConfig: FieldConfig<AssemblySchemaType>[] = [
	field("id", "ID"),
	field("name", "Name"),
	field("status", "Status", [
		{ value: "active", label: "Active" },
		{ value: "inactive", label: "Inactive" },
	]),
	field("startDate", "Start Date"),
	field("endDate", "End Date"),
	field("resultDate", "Result Date"),
	field("description", "Description"),
	field("type", "Type"),
	field("allowChangeVote", "Allow Change Vote"),
	field("displayMode", "Display Mode"),
	field("videoConference", "Video Conference"),
];

export const defaultValues = Object.fromEntries(
	columnConfig.map(({ id, defaultValue }) => [id, defaultValue])
) as Partial<AssemblySchemaType>;

export const assemblyFacetedFilters = columnConfig.filter((f) => !!f.options);

export const visibleColumns: ReadonlyArray<string> = ["*"];
export const assemblyVisibilityState: VisibilityState = Object.fromEntries(
	columnConfig.map(({ id }) => [
		id,
		visibleColumns.includes(id) || visibleColumns[0] === "*",
	])
);

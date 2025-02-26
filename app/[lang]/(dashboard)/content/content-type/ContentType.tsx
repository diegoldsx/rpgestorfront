import { FieldConfig as Field } from "@/app/types/FieldConfig";
import { VisibilityState } from "@tanstack/react-table";

export type ContentType = {
	id: number;
	name: string;
};

export const contentTypeFields: Field<ContentType>[] = [
	{ id: "id", title: "ID" },
	{ id: "name", title: "Nome" },
];

let hideColumns: string[] = [];

export const visibilityState: VisibilityState = Object.fromEntries(contentTypeFields.map((key) => [key.id, !hideColumns.includes(key.id)]));
export const facetedFilters: any[] = contentTypeFields.filter((field: any) => field.options);

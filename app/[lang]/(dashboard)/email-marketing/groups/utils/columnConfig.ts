import { FieldConfig as Field } from "@/app/types/FieldConfig";

import { options } from "./options";

import { VisibilityState } from "@tanstack/react-table";
import { Group } from "@/types/email-marketing/group";

export const columnConfig: Field<Group>[] = [
	{ id: "id", title: "ID" },
	{ id: "name", title: "Nome" },
	{ id: "total", title: "Total" },
];

export const facetedFilters = columnConfig.filter(({ options }) => !!options);

const visibleColumns: ReadonlyArray<string> = ["*"];

export const visibilityState: VisibilityState = Object.fromEntries(
	columnConfig.map(({ id }) => [id, visibleColumns.includes(id) || visibleColumns[0] === "*"])
);

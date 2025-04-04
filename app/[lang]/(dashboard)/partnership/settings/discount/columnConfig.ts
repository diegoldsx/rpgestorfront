import { FieldConfig as Field } from "@/app/types/FieldConfig";

import { options } from "./options";

import { VisibilityState } from "@tanstack/react-table";
import { Discount } from "@/types/partnership/discount";

export const columnConfig: Field<Discount>[] = [
	{ id: "id", title: "ID" },
	{ id: "name", title: "Nome" },
	{ id: "status", title: "Status", options: [...options.status] },
];

export const facetedFilters = columnConfig.filter(({ options }) => !!options);

const visibleColumns: ReadonlyArray<string> = ["*"];

export const visibilityState: VisibilityState = Object.fromEntries(
	columnConfig.map(({ id }) => [id, visibleColumns.includes(id) || visibleColumns[0] === "*"])
);

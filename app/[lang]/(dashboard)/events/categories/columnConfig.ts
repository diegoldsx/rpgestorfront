import { FieldConfig as Field } from "@/app/types/FieldConfig";
import { Event } from "@/types/event/event";

import { VisibilityState } from "@tanstack/react-table";

export const options = {
	status: [
		{ value: "active", label: "Ativo" },
		{ value: "inactive", label: "Inativo" },
	],
};

export const columnConfig: Field<Event>[] = [
	{ id: "id", title: "ID" },
	{ id: "name", title: "Nome" },
	{ id: "status", title: "Status", options: [...options.status] },
];

export const facetedFilters = columnConfig.filter(({ options }) => !!options);

const visibleColumns: ReadonlyArray<string> = ["*"];

export const visibilityState: VisibilityState = Object.fromEntries(
	columnConfig.map(({ id }) => [
		id,
		visibleColumns.includes(id) || visibleColumns[0] === "*",
	])
);

import { FieldConfig as Field } from "@/app/types/FieldConfig";

import { VisibilityState } from "@tanstack/react-table";
import { Message } from "@/types/email-marketing/message";

export const columnConfig: Field<Message>[] = [
	{ id: "id", title: "ID" },
	{ id: "subject", title: "subject" },
	{ id: "message", title: "Mensagem" },
];

export const facetedFilters = columnConfig.filter(({ options }) => !!options);

const visibleColumns: ReadonlyArray<string> = ["*"];

export const visibilityState: VisibilityState = Object.fromEntries(
	columnConfig.map(({ id }) => [id, visibleColumns.includes(id) || visibleColumns[0] === "*"])
);

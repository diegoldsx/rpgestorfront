import { FieldConfig as Field } from "@/app/types/FieldConfig";

import { options } from "./options";
import { Message } from "@/types/email-marketing/message";
import { VisibilityState } from "@tanstack/react-table";

export const columnConfig: Field<Message>[] = [
	{ id: "id", title: "ID" },
	{ id: "subject", title: "Assunto" },
	{ id: "message", title: "Mensagem" },
];

export const facetedFilters = columnConfig.filter(({ options }) => !!options);

const visibleColumns: ReadonlyArray<string> = ["*"];

export const visibilityState: VisibilityState = Object.fromEntries(
	columnConfig.map(({ id }) => [
		id,
		visibleColumns.includes(id) || visibleColumns[0] === "*",
	])
);

import { FieldConfig as Field } from "@/app/types/FieldConfig";

import { options } from "./options";
import { Message } from "@/types/email-marketing/message";
import { VisibilityState } from "@tanstack/react-table";

export const columnConfig: Field<Message>[] = [
	{ id: "id", title: "ID" },
	{ id: "name", title: "Nome" },
	{ id: "benefits", title: "Benefícios" },
	{ id: "contact", title: "Contato" },
	{ id: "email", title: "Email" },
	{ id: "mobile", title: "Celular" },
	{ id: "phone", title: "Telefone" },
	{ id: "local", title: "Localidade" },
	{ id: "type", title: "Tipo", options: [...options.type] },
	{ id: "status", title: "Situação", options: [...options.status] },
];

export const facetedFilters = columnConfig.filter(({ options }) => !!options);

const visibleColumns: ReadonlyArray<string> = ["*"];

export const visibilityState: VisibilityState = Object.fromEntries(
	columnConfig.map(({ id }) => [id, visibleColumns.includes(id) || visibleColumns[0] === "*"])
);

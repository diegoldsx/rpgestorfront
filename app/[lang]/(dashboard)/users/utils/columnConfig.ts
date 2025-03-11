import { z } from "zod";
import { User } from "./User";
import { VisibilityState } from "@tanstack/react-table";
export interface Option<T> {
	value: T;
	label: string;
}
type FieldType = "text" | "date" | "select" | "number" | "boolean" | "hidden";

export interface FieldConfig<T> {
	id: keyof T;
	title: string;
	type?: FieldType;
	options?: Option<T[keyof T]>[]; // Options agora é genérico
}

export const columnFields: FieldConfig<User>[] = [
	{ id: "id", type: "text", title: "Id" },
	{ id: "name", type: "text", title: "Nome" },
	{ id: "email", type: "text", title: "Email" },
	{ id: "username", type: "text", title: "Nome de usuário" },
	{ id: "redirectUrl", type: "text", title: "Url de redirecionamento" },
	{
		id: "status",
		type: "select",
		title: "Situação",
		options: [
			{ value: "active", label: "Ativo" },
			{ value: "inactive", label: "Inativo" },
		],
	},
];

export const facetedFilters = columnFields.filter(({ options }) => !!options);

const visibleColumns: ReadonlyArray<string> = ["*"];
export const visibilityState: VisibilityState = Object.fromEntries(columnFields.map(({ id }) => [id, ["*"].includes(id) || visibleColumns[0] === "*"]));

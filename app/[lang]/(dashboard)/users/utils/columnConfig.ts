import { z } from "zod";
import { User } from "./User";
import { VisibilityState } from "@tanstack/react-table";
import { FieldConfig } from "@/app/types/FieldConfig";

export const userOptions = {
	status: [
		{ value: "active", label: "Ativo" },
		{ value: "inactive", label: "Inativo" },
	],
};

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
		options: userOptions.status,
	},
];

export const facetedFilters = columnFields.filter(({ options }) => !!options);

const visibleColumns: ReadonlyArray<string> = ["*"];
export const visibilityState: VisibilityState = Object.fromEntries(columnFields.map(({ id }) => [id, ["*"].includes(id) || visibleColumns[0] === "*"]));

import { FieldConfig as Field } from "@/app/types/FieldConfig";
import { VisibilityState } from "@tanstack/react-table";

export type Partnership = {
	id: number;
	name: string;
	benefits: string;
	contact: string;
	email: string;
	mobile: string;
	type: "user1" | "user2";
	phone: string;
	local: string;
	status: "active" | "inactive";
};

export const options = {
	type: [
		{ value: "user1", label: "Tipo 2" },
		{ value: "user2", label: "Tipo 1" },
	],
	status: [
		{ value: "active", label: "Ativo" },
		{ value: "inactive", label: "Inativo" },
	],
};

export const PartnershipFields: Field<Partnership>[] = [
	{ id: "id", title: "ID" },
	{ id: "name", title: "Nome" },
	{ id: "benefits", title: "Benefícios" },
	{ id: "contact", title: "Contato" },
	{ id: "email", title: "Email" },
	{ id: "mobile", title: "Celular" },
	{ id: "phone", title: "Telefone" },
	{ id: "local", title: "Localidade" },
	{ id: "type", title: "Tipo", options: options.type },
	{ id: "status", title: "Situação", options: options.status },
];

let visibleColumns: string[] = ["*"];

export const visibilityState: VisibilityState = Object.fromEntries(
	PartnershipFields.map((key) => [key.id, visibleColumns.includes(key.id) || visibleColumns[0] === "*"])
);
export const facetedFilters: any[] = PartnershipFields.filter((field: any) => field.options);

import { z } from "zod";

export const PartnershipSchema = z.object({
	id: z.number(),
	name: z.string(),
	benefits: z.string(),
	contact: z.string(),
	email: z.string().email(),
	mobile: z.string(),
	type: z.enum(["user1", "user2"]),
	phone: z.string(),
	local: z.string(),
	status: z.enum(["active", "inactive"]),
});

export type PartnershipSchemaType = z.infer<typeof PartnershipSchema>;

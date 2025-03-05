import { FieldConfig as Field } from "@/app/types/FieldConfig";
import { Sector } from "../types/sector";
import { options } from "./options";

export const fields: Readonly<Field<Sector>[]> = [
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

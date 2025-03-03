import { FieldConfig as Field } from "@/app/types/FieldConfig";
import { Template } from "../types/template";
import { options } from "./templateOptions";

export const fields: Readonly<Field<Template>[]> = [
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

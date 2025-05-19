import { FieldConfig as Field } from "@/types/columns/field-config";
import { Message } from "../types/message";
import { options } from "./options";

export const fields: Readonly<Field<Message>[]> = [
	{ id: "id", title: "ID" },
	{ id: "email", title: "Email" },
	{ id: "group", title: "Grupo" },
	{ id: "status", title: "Situação", options: [...options.status] },
];

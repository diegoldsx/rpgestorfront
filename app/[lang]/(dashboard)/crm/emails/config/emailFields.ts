import { FieldConfig as Field } from "@/app/types/FieldConfig";
import { Email } from "../types/email";
import { options } from "./emailOptions";

export const fields: Readonly<Field<Email>[]> = [
	{ id: "id", title: "ID" },
	{ id: "email", title: "email" },
	{ id: "status", title: "Situação", options: [...options.status] },
];

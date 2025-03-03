import { FieldConfig as Field } from "@/app/types/FieldConfig";
import { Announcement } from "../types/announcements";

export const fields: Readonly<Field<Announcement>[]> = [
	{ id: "id", title: "ID" },
	{ id: "subject", title: "Assunto" },
	{ id: "message", title: "Mensagem" },
];

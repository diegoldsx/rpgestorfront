import { FieldConfig as Field } from "@/app/types/FieldConfig";
import { Group } from "../types/group";

export const fields: Readonly<Field<Group>[]> = [
	{ id: "id", title: "ID" },
	{ id: "name", title: "Nome" },
];

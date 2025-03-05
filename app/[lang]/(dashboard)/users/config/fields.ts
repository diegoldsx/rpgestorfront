import { FieldConfig as Field } from "@/app/types/FieldConfig";
import { User } from "../types/user";
import { options } from "./options";

export const fields: Readonly<Field<User>[]> = [
	{ id: "id", title: "ID" },
	{ id: "name", title: "Nome" },
	{ id: "email", title: "Email" },
	{ id: "nickname", title: "Usuário" },
	{ id: "status", title: "Situação", options: [...options.status] },
	{ id: "redirectUrl", title: "Redirecionamento" },
	{ id: "company", title: "Empresa" },
	{ id: "permissions", title: "Permissões", options: [...options.permissions] },
	{ id: "role", title: "Perfil", options: [...options.role] },
];

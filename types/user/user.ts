import { z } from "zod";

// enum de nível de permissão
export const permissionLevelEnum = z.enum(["read", "edit", "admin"]);
export const routesEnum = z.enum(["assemblies", "events", "finance", "users", "content, content-types", "customer", "email-marketing", "members", "afilliation", "service-desk", "users"]);
export type PermissionLevel = z.infer<typeof permissionLevelEnum>;

// schema para cada item de permissão
const permissionSchema = z.object({
	route: routesEnum,
	level: permissionLevelEnum,
});

export const userSchema = z
	.object({
		id: z.string().optional(),
		name: z.string().min(3, "O nome é obrigatório"),
		email: z.string().email("O email é obrigatório"),
		status: z.enum(["active", "inactive"], {
			required_error: "Selecione um status",
		}),
		redirectUrl: z.string().url("A URL fornecida é inválida").optional(),
		username: z
			.string()
			.min(6, "O nome de usuário deve ter pelo menos 6 caracteres")
			.regex(
				/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
				"O nome de usuário deve conter letras e números"
			),
		permissions: z.array(permissionSchema).optional(),
	})

export type UserSchemaType = z.infer<typeof userSchema>;

// type correspondente ao schema
export type Permission = {
	route: string;
	level: PermissionLevel;
};

export type User = {
	id?: string;
	name: string;
	email: string;
	status: string;
	redirectUrl?: string;
	username?: string;
	permissions?: Permission[];
	resetToken: null;
	resetTokenExpiry: null;
	profile: null;
};

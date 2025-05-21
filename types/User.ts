import { z } from "zod";
import { StatusEnum } from "./options";

export const permissionLevelEnum = z.enum(["read", "edit", "admin"]);
export const routesEnum = z.enum(["assemblies", "events", "finance", "users", "content, content-types", "customer", "email-marketing", "members", "afilliation", "service-desk", "users"]);
export type PermissionLevel = z.infer<typeof permissionLevelEnum>;

const permissionSchema = z.object({
	route: routesEnum,
	level: permissionLevelEnum,
});

export const userSchema = z
	.object({
		id: z.string().optional(),
		name: z.string().min(3, "O nome é obrigatório"),
		email: z.string().email("O email é obrigatório"),
		status: StatusEnum,
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

export type UserType = z.infer<typeof userSchema>;

// type correspondente ao schema
export type Permission = {
	route: string;
	level: PermissionLevel;
};

export const fakeUsers: UserType[] = [
	{
		id: '1',
		name: 'name 1',
		email: 'email 1',
		status: 'active',
		username: 'diego001',
		permissions: [
			{
				route: 'assemblies',
				level: 'admin',
			},
			{
				route: 'events',
				level: 'admin',
			},
			{
				route: 'finance',
				level: 'admin',
			},
			{
				route: 'members',
				level: 'admin',
			},
			{
				route: 'afilliation',
				level: 'admin',
			},
			{
				route: 'service-desk',
				level: 'admin',
			},
		]
	},
	{
		id: '2',
		name: 'name 2',
		email: 'email 2',
		status: 'active',
		username: 'username 2',
		permissions: [
			{
				route: 'assemblies',
				level: 'read',
			}
		]
	}
]



import { z } from "zod";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";

// enum de nível de permissão
export const permissionLevelEnum = z.enum(["read", "edit", "admin"]);
export type PermissionLevel = z.infer<typeof permissionLevelEnum>;

// schema para cada item de permissão
const permissionSchema = z.object({
	route: z.string(),
	level: permissionLevelEnum,
});

// schema completo do usuário
export const userSchema = z.object({
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
		.regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, "O nome de usuário deve conter letras e números")
		.optional(),
	permissions: z.array(permissionSchema).optional(),
	image: z.any().optional(), // ou z.string() se quiser tipar como path
	password: z.string().min(6).optional(),
	resetToken: z.string().nullable().optional(),
	resetTokenExpiry: z.number().nullable().optional(),
	profile: z.any().nullable().optional(),
});

export type User = z.infer<typeof userSchema>;

export type Permission = {
	route: string;
	level: PermissionLevel;
};

// usuários fake com campos extras coerentes com schema
export const fake_users: User[] = [
	{
		id: "1",
		name: "RPGestor",
		image: avatar3,
		password: "senha123",
		status: "active",
		username: "Gestor123",
		email: "admin@rpgestor.com.br",
		resetToken: null,
		resetTokenExpiry: null,
		profile: null,
		permissions: [
			{ route: "/assemblies", level: "admin" },
			{ route: "/content", level: "admin" },
			{ route: "/content-type", level: "admin" },
			{ route: "/customer", level: "admin" },
			{ route: "/email-marketing", level: "admin" },
			{ route: "/events", level: "admin" },
			{ route: "/finance", level: "admin" },
			{ route: "/members", level: "admin" },
			{ route: "/afilliations", level: "admin" },
			{ route: "/service-desk", level: "admin" },
			{ route: "/users", level: "admin" },
		],
	},
	{
		id: "2",
		name: "Atendimento",
		image: avatar2,
		password: "senha123",
		status: "active",
		username: "atend123",
		email: "atendimento@rpgestor.com.br",
		resetToken: null,
		resetTokenExpiry: null,
		profile: null,
		permissions: [{ route: "/service-desk", level: "read" }],
	},
];

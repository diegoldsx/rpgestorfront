import { z } from "zod";
import { StateUFEnum, StatusEnum } from "./options";
import { PaymentGroupSchema } from "./PaymentGroup";

export const permissionLevelEnum = z.enum(["read", "edit", "admin"]);
export const routesEnum = z.enum(["dashboard", "assemblies", "events", "finance"]);
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
		permissions: z.array(permissionSchema),
		documentNumber: z.string(),
		phone: z.string(),
		mobile: z.string(),
		paymentGroup: PaymentGroupSchema,

		zipCode: z.string().min(8, "CEP inválido."),
		street: z.string().min(1, "A rua é obrigatória."),
		number: z.string().min(1, "O número é obrigatório."),
		complement: z.string().optional(),
		neighborhood: z.string().min(1, "O bairro é obrigatório."),
		state: StateUFEnum,
		city: z.string().min(1, "A cidade é obrigatória."),
		image: z.string(),
		password: z.string()
			.min(8, "A senha deve ter no mínimo 8 caracteres")
			.regex(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
			.regex(/[a-z]/, "Deve conter ao menos uma letra minúscula")
			.regex(/[0-9]/, "Deve conter ao menos um número")
			.regex(/[^A-Za-z0-9]/, "Deve conter ao menos um caractere especial"),
	})

export type UserType = z.infer<typeof userSchema>;

// type correspondente ao schema



export type Permission = z.infer<typeof permissionSchema>;

const permissions: Permission[] = [
	{ route: 'assemblies', level: 'admin' },
	{ route: 'dashboard', level: 'admin' },
	{ route: 'events', level: 'admin' },
];

export const fakeUsers: UserType[] = [
	{
		id: "1",
		name: "João Silva",
		email: "joao.silva@example.com",
		status: "active", // StatusEnum
		redirectUrl: "https://example.com/dashboard",
		username: "joao123",
		permissions: permissions,
		documentNumber: "12345678900",
		phone: "1132121234",
		mobile: "11999998888",
		paymentGroup:
		{
			id: "1",
			name: "Mensal",
			defaultAmount: 150.0,
			emailModel: "mobile",
			cycle: "monthly",
			status: "active",
		},
		image: "/images/avatar/avatar-2.jpg",
		zipCode: "01310100",
		street: "Av. Paulista",
		number: "1000",
		complement: "Apto 101",
		neighborhood: "Bela Vista",
		state: "SP", // StateUFEnum
		city: "São Paulo",
		password: "Senha@123",
	},
	{
		id: "2",
		name: "Maria Oliveira",
		email: "maria.oliveira@example.com",
		status: "inactive",
		username: "maria2024",
		image: "/images/avatar/avatar-1.jpg",

		permissions: [{
			route: 'dashboard',
			level: 'read',
		}],
		documentNumber: "98765432100",
		phone: "1132114321",
		mobile: "11988887777",
		paymentGroup:
		{
			id: "2",
			name: "Trimestral",
			defaultAmount: 400.0,
			emailModel: "associateCard",
			cycle: "quarterly",
			status: "active",
		},

		zipCode: "01001000",
		street: "Rua XV de Novembro",
		number: "222",
		neighborhood: "Centro",
		state: "RJ",
		city: "Rio de Janeiro",
		password: "M@ria2024!",
	},
];



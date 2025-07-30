import { z } from "zod";

const addressSchema = z.object({
	zipCode: z.string(),
	street: z.string(),
	number: z.string(),
	complement: z.string().optional(),
	district: z.string(),
	city: z.string(),
	state: z.string(),
});

const contactSchema = z.object({
	phone: z.string().optional(),
	mobile: z.string().optional(),
	email: z.string().email().optional(),
});

export const individualMemberSchema = z.object({
	id: z.string(),

	type: z.literal("individual"),
	status: z.enum(["active", "inactive"]),
	code: z.string(),
	cpf: z.string(),
	fullName: z.string(),
	birthDate: z.string(), // pode trocar pra z.date() se vier como Date
	address: addressSchema,
	contact: contactSchema,
	paymentGroup: z.string(),
	cycle: z.string(),
});

export const companyMemberSchema = z.object({
	id: z.string(),

	type: z.literal("company"),
	status: z.enum(["active", "inactive"]),
	code: z.string(),
	cnpj: z.string(),
	corporateName: z.string(),
	tradeName: z.string(),
	address: addressSchema,
	billingAddress: addressSchema,
	stateRegistration: z.string().optional(),
	municipalRegistration: z.string().optional(),
	totalEmployees: z.number().optional(),
	website: z.string().url().optional(),
	contact: contactSchema.extend({
		billingEmail: z.string().email().optional(),
	}),
	publishData: z.boolean().optional(),
	additionalInfo: z.string().optional(),
	notes: z.array(z.string()).optional(),
	paymentGroup: z.string(),
	cycle: z.string(),
	autoBilling: z.boolean().optional(),
	socialMedia: z
		.object({
			instagram: z.string().url().optional(),
			facebook: z.string().url().optional(),
			linkedin: z.string().url().optional(),
		})
		.optional(),
	billingAmount: z.number().optional(),
	userPassword: z.string().optional(),
	logo: z.string().optional(), // path ou base64
	contacts: z
		.array(
			z.object({
				fullName: z.string(),
				cpf: z.string(),
				position: z.string(),
				department: z.string(),
				phone: z.string().optional(),
				mobile: z.string().optional(),
			})
		)
		.optional(),
	photo: z.string().optional(), // path ou base64
});

export const memberSchema = z.discriminatedUnion("type", [individualMemberSchema, companyMemberSchema]);

export type Member = z.infer<typeof memberSchema>;

export const fakeMembers: Member[] = [
	{
		id: "1",
		type: "individual",
		status: "active",
		code: "PF001",
		cpf: "123.456.789-00",
		fullName: "João da Silva",
		birthDate: "1990-05-15",
		address: {
			zipCode: "12345-678",
			street: "Rua das Flores",
			number: "123",
			complement: "Apto 45",
			district: "Centro",
			city: "São Paulo",
			state: "SP",
		},
		contact: {
			phone: "(11) 1234-5678",
			mobile: "(11) 91234-5678",
			email: "joao@email.com",
		},
		paymentGroup: "Mensal",
		cycle: "Janeiro-Dezembro",
	},

	{
		id: "2",
		type: "company",
		status: "active",
		code: "PJ001",
		cnpj: "12.345.678/0001-90",
		corporateName: "Empresa XYZ LTDA",
		tradeName: "XYZ Soluções",
		address: {
			zipCode: "98765-432",
			street: "Av. Industrial",
			number: "456",
			complement: "Bloco B",
			district: "Distrito",
			city: "Rio de Janeiro",
			state: "RJ",
		},
		billingAddress: {
			zipCode: "98765-000",
			street: "Av. Comercial",
			number: "789",
			complement: "",
			district: "Comercial",
			city: "Rio de Janeiro",
			state: "RJ",
		},
		stateRegistration: "123456789",
		municipalRegistration: "987654321",
		totalEmployees: 52,
		website: "https://xyz.com.br",
		contact: {
			phone: "(21) 4002-8922",
			mobile: "(21) 99999-0000",
			email: "contato@xyz.com.br",
			billingEmail: "financeiro@xyz.com.br",
		},
		publishData: true,
		additionalInfo: "Empresa de tecnologia.",
		notes: ["Cliente desde 2020", "Participa de eventos anuais"],
		paymentGroup: "Trimestral",
		cycle: "Fevereiro-Novembro",
		autoBilling: true,
		socialMedia: {
			instagram: "https://instagram.com/xyz",
			facebook: "https://facebook.com/xyz",
			linkedin: "https://linkedin.com/company/xyz",
		},
		billingAmount: 1499.99,
		userPassword: "hashed_or_encrypted_value",
		logo: "/logos/xyz.png",
		photo: "/photos/contact.png",
		contacts: [
			{
				fullName: "Maria Oliveira",
				cpf: "321.654.987-00",
				position: "Gerente Financeira",
				department: "Financeiro",
				phone: "(21) 3003-3003",
				mobile: "(21) 98888-8888",
			},
		],
	},
];

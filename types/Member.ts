import { z } from "zod";

const individualSchema = z.object({
	id: z.string(),
	type: z.literal("individual"),
	status: z.enum(["active", "inactive"]),
	code: z.string(),
	fullName: z.string(),
	cpf: z.string().min(11),
	birthDate: z.string(),
	contact: z.object({
		email: z.string().email(),
		phone: z.string(),
	}),
	paymentGroup: z.string(),
	cycle: z.string(),
	address: z.object({
		zipCode: z.string(),
		state: z.string(),
		city: z.string(),
		district: z.string(),
		street: z.string(),
		number: z.string(),
		complement: z.string().optional(),
	}),
});

const companySchema = z.object({
	id: z.string(),
	type: z.literal("company"),
	status: z.enum(["active", "inactive"]),
	code: z.string(),
	corporateName: z.string(),
	tradeName: z.string(),
	totalEmployees: z.number().int().optional(),
	cnpj: z.string().min(14),
	stateRegistration: z.string(),
	municipalRegistration: z.string(),
	website: z.string().url().optional(),
	address: z.object({
		zipCode: z.string(),
		state: z.string(),
		city: z.string(),
		district: z.string(),
		street: z.string(),
		number: z.string(),
		complement: z.string().optional(),
	}),
});

export const MemberSchema = z.union([individualSchema, companySchema]);
export type MemberType = z.infer<typeof MemberSchema>;

export const fakeMembers: MemberType[] = [
	{
		id: "1",
		type: "individual",
		status: "active",
		code: "PF001",
		cpf: "12345678900",
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
		corporateName: "Empresa Exemplo Ltda",
		tradeName: "Exemplo",
		totalEmployees: 42,
		cnpj: "12345678000199",
		stateRegistration: "123456789",
		municipalRegistration: "987654321",
		website: "https://www.exemplo.com.br",
		address: {
			zipCode: "87654-321",
			state: "RJ",
			city: "Rio de Janeiro",
			district: "Centro",
			street: "Av. Principal",
			number: "1000",
			complement: "Sala 501",
		},
	},
];

import { z } from "zod";

export const CustomerSchema = z.object({
	id: z.string().optional(),
	name: z.string().min(1, "O nome é obrigatório."),
	email: z.string().email("E-mail inválido."),
	customerType: z.enum(["pf", "pj"]),
	cpf: z.string().min(11, "CPF inválido."),
	cnpj: z.string().min(14, "CNPJ inválido."),
	phone: z.string().min(8, "Telefone inválido."),
	mobile: z.string().min(8, "Celular inválido."),
	userPassword: z.string().min(6, "A senha deve ter no mínimo 6 caracteres."),
	registrationDate: z.string().min(1, "A data de registro é obrigatória."),
	status: z.string().min(1, "O status é obrigatório."),
	code: z.string().min(1, "O código é obrigatório."),
	photo: z.string().url("URL da foto inválida."),
	zipCode: z.string().min(8, "CEP inválido."),
	street: z.string().min(1, "A rua é obrigatória."),
	number: z.string().min(1, "O número é obrigatório."),
	complement: z.string().optional(),
	neighborhood: z.string().min(1, "O bairro é obrigatório."),
	state: z.string().min(2, "Estado inválido."),
	city: z.string().min(1, "A cidade é obrigatória."),
	corporateName: z.string().min(1, "A razão social é obrigatória."),
	tradeName: z.string().min(1, "O nome fantasia é obrigatório."),
	billingEmail: z.string().email("E-mail de cobrança inválido."),
	billingName: z.string().min(1, "O nome de cobrança é obrigatório."),
	billingPhone: z.string().min(8, "Telefone de cobrança inválido."),
	billingMobile: z.string().min(8, "Celular de cobrança inválido."),
});

export type CustomerSchemaType = z.infer<typeof CustomerSchema>;

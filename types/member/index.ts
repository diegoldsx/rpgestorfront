import { StateUF } from "./StateUF";
import { z } from "zod";

export type Member = {
	id: string;
	email: string;
	phone?: string;
	mobile?: string;
	name?: string;
	birthDate?: string;
	corporateName?: string;
	tradeName?: string;
	financialStatus: string;
	billingCycle: string;
	paymentGroup: string;
	paymentMethod: string;
	type: string;
	password?: string;
	cep: string;
	street: string;
	number: string;
	complement?: string;
	neighborhood: string;

	state: StateUF;
	city: string;
	document: string; // CPF or CNPJ
};

export const MemberSchema = z.object({
	id: z.string().nonempty("ID é obrigatório"),
	email: z.string().email("Formato de email inválido"),
	phone: z.string().optional(),
	mobile: z.string().optional(),
	name: z.string().optional(),
	birthDate: z.string().optional(),
	corporateName: z.string().optional(),
	tradeName: z.string().optional(),
	financialStatus: z.string().nonempty("Status financeiro é obrigatório"),
	billingCycle: z.string().nonempty("Ciclo de faturamento é obrigatório"),
	paymentGroup: z.string().nonempty("Grupo de pagamento é obrigatório"),
	paymentMethod: z.string().nonempty("Método de pagamento é obrigatório"),
	type: z.string().nonempty("Tipo é obrigatório"),
	password: z.string().optional(),
	cep: z.string().nonempty("CEP é obrigatório"),
	street: z.string().nonempty("Rua é obrigatória"),
	number: z.string().nonempty("Número é obrigatório"),
	complement: z.string().optional(),
	neighborhood: z.string().nonempty("Bairro é obrigatório"),
	state: z.nativeEnum(StateUF),
	city: z.string().nonempty("Cidade é obrigatória"),
	document: z.string().nonempty("Documento é obrigatório"),
});

export type MemberSchemaType = z.infer<typeof MemberSchema>;

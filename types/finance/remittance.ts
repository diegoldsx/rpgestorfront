export type Remittance = {
	id?: string;
	bank: "caixa" | "bradesco"; // "Remetente"
	search: string; // "Vencimento"
	searchFor: string; // "Quantia"
	dueDate?: string; // "Descrição"
	finalDate?: string; // "Situação"
	dataType: "due" | "payment"; // "Data documento"
	limit?: string; // "Observações"
	type: "all" | "invoice";
};

import { z } from "zod";

export const RemittanceSchema = z.object({
	id: z.string().optional(),
	bank: z.enum(["caixa", "bradesco"], {
		required_error: "O banco remetente é obrigatório.",
	}),
	search: z.string().min(1, "A quantia é obrigatória."),
	searchFor: z.string().min(1, "A quantia é obrigatória."),

	dueDate: z.string().min(1, "A data de vencimento é obrigatória."),
	finalDate: z.string().optional(),

	dateType: z.enum(["due", "payment"], {
		required_error: "O tipo de data do documento é obrigatório.",
	}),
	limit: z.string().optional(),
	type: z.enum(["all", "invoice"], {
		required_error: "O tipo é obrigatório.",
	}),
});

export type RemittanceSchemaType = z.infer<typeof RemittanceSchema>;

export const DATA_REMITTANCES: any[] = [
	{
		id: "1",
		bank: "caixa",
		search: "1500.00",
		searchFor: "Remessa de pagamento de fornecedores",
		dueDate: "2024-12-01",
		finalDate: "2024-12-01",
		dueType: "payment",
		dateType: "payment",
		limit: "2024-12-10",
		type: "invoice",
	},
	{
		id: "2",
		bank: "caixa",
		search: "1500.00",
		searchFor: "Remessa de pagamento de fornecedores",
		dueDate: "2024-12-01",
		finalDate: "2024-12-01",
		dueType: "payment",
		dateType: "payment",
		limit: "2024-12-10",
		type: "invoice",
	},
	{
		id: "3",
		bank: "bradesco",
		search: "1500.00",
		searchFor: "Remessa de pagamento de fornecedores",
		dueDate: "2024-12-01",
		finalDate: "2024-12-01",
		dueType: "payment",
		dateType: "payment",
		limit: "2024-12-10",
		type: "invoice",
	},
];

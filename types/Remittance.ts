

import { z } from "zod";
import { BankEnum } from "./options";

export const RemittanceSchema = z.object({
	id: z.string().optional(),
	bank: BankEnum,
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

export type RemittanceType = z.infer<typeof RemittanceSchema>;

export const fakeRemittance: RemittanceType[] = [
	{
		id: "1",
		bank: "caixa",
		search: "1500.00",
		searchFor: "Remessa de pagamento de fornecedores",
		dueDate: "2024-12-01",
		finalDate: "2024-12-01",
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
		dateType: "payment",
		limit: "2024-12-10",
		type: "invoice",
	},
];

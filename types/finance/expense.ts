export type Expense = {
	id?: string;
	payer: string; // "Pagador"
	competenceDate?: string; // "Competência" (optional)
	dueDate: string; // "Vencimento"
	costCenter: string; // "Centro de Custo"
	category: string;
	paymentMethod: string;
	baseDocument?: string; // "Base Documento" (optional)
	account: string;
	tax: string;
	amount: number; // "Valor"
	description?: string; // "Descrição"
	observations?: string; // "Observações"
	status: string;

	paymentDate?: string; // "Data Pagamento" (optional)
	paymentClearingDate?: string; // Compensação de pagamento
	discounts?: number; // "Parcelas" (optional)
	addition?: number;
	totalPaid?: number; // "Total Pago" (optional)
	totalClearing?: number; // Valor compensado

	installments?: number;
	installmentType: string;

	itemPayer?: string;
	itemCategory?: string;
	itemCostCenter?: string;
	itemBaseDocument?: string;
	itemDueDate?: string;
	itemDescription?: string;
	itemAmount?: number;

	taxISS?: number;
	taxCSSL?: number;
	taxPIS?: number;
	taxCONFINS?: number;
};

import { z } from "zod";

export const ExpenseSchema = z.object({
	id: z.string().optional(),
	payer: z.string().min(1, "O pagador é obrigatório."),
	competenceDate: z.string().optional(),
	dueDate: z.string().min(1, "A data de vencimento é obrigatória."),
	costCenter: z.string().min(1, "O centro de custo é obrigatório."),
	category: z.string().min(1, "A categoria é obrigatória."),
	paymentMethod: z.string().min(1, "O método de pagamento é obrigatório."),
	baseDocument: z.string().optional(),
	account: z.string().min(1, "A conta é obrigatória."),
	tax: z.string().min(1, "A taxa é obrigatória."),
	amount: z.string().min(1, "O valor é obrigatório."),
	description: z.string().optional(),
	observations: z.string().optional(),
	status: z.string().min(1, "O status é obrigatório."),

	paymentDate: z.string().optional(),
	paymentClearingDate: z.string().optional(),
	discounts: z.string().optional(),
	addition: z.string().optional(),
	totalPaid: z.string().optional(),
	totalClearing: z.string().optional(),

	installments: z.string().optional(),
	installmentType: z.string().min(1, "O tipo de parcela é obrigatório."),

	itemPayer: z.string().optional(),
	itemCategory: z.string().optional(),
	itemCostCenter: z.string().optional(),
	itemBaseDocument: z.string().optional(),
	itemDueDate: z.string().optional(),
	itemDescription: z.string().optional(),
	itemAmount: z.string().optional(),

	taxISS: z.string().optional(),
	taxCSSL: z.string().optional(),
	taxPIS: z.string().optional(),
	taxCONFINS: z.string().optional(),
});

export type ExpenseSchemaType = z.infer<typeof ExpenseSchema>;

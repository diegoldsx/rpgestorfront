export type Income = {
	id?: string;
	payer: string; // "Pagador"
	description: string;
	competenceDate?: string; // "Competência" (optional)
	dueDate: string; // "Vencimento"
	account: string;
	paymentMethod: string;
	costCenter: string;
	category: string;
	value: string; // "Valor"
	paidValue: string;
	discountType?: string;
	discountPercentage?: string; // "Percentual Desconto(%)" (if % is selected)
	discountExpirationDate?: string; // "Data limite desconto" (optional)
	discountDescription?: string; // "Descrição"
	observations?: string; // "Observações"
	status: string;
	totalInstallments: string;
	installmentType: string;
	invoiceInstructions: string;
	sampleMessage: string;
};

import { z } from "zod";

export const IncomeSchema = z.object({
	id: z.string().optional(),
	payer: z.string().min(1, "O pagador é obrigatório."),
	description: z.string().min(1, "A descrição é obrigatória."),
	competenceDate: z.string().optional(),
	dueDate: z.string().min(1, "A data de vencimento é obrigatória."),
	account: z.string().min(1, "A conta é obrigatória."),
	paymentMethod: z.string().min(1, "O método de pagamento é obrigatório."),
	costCenter: z.string().min(1, "O centro de custo é obrigatório."),
	category: z.string().min(1, "A categoria é obrigatória."),
	value: z.string().min(1, "O valor é obrigatório."),
	paidValue: z.string().min(1, "O valor pago é obrigatório."),
	discountType: z.string().optional(),
	discountPercentage: z.string().optional(),
	discountExpirationDate: z.string().optional(),
	discountDescription: z.string().optional(),
	observations: z.string().optional(),
	status: z.string().min(1, "O status é obrigatório."),
	totalInstallments: z.string().min(1, "O total de parcelas é obrigatório."),
	installmentType: z.string().min(1, "O tipo de parcela é obrigatório."),
	invoiceInstructions: z
		.string()
		.min(1, "As instruções da fatura são obrigatórias."),
	sampleMessage: z.string().min(1, "A mensagem de exemplo é obrigatória."),
});

export type IncomeSchemaType = z.infer<typeof IncomeSchema>;

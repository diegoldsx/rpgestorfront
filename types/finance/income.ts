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
	payer: z.string({ required_error: "O pagador é obrigatório." }),
	description: z.string({ required_error: "A descrição é obrigatória." }),
	competenceDate: z.string().optional(),
	dueDate: z.string({ required_error: "A data de vencimento é obrigatória." }),
	account: z.string({ required_error: "A conta é obrigatória." }),
	paymentMethod: z.string({
		required_error: "O método de pagamento é obrigatório.",
	}),
	costCenter: z.string({ required_error: "O centro de custo é obrigatório." }),
	category: z.string({ required_error: "A categoria é obrigatória." }),
	value: z.string({ required_error: "O valor é obrigatório." }),
	paidValue: z.string({ required_error: "O valor pago é obrigatório." }),
	discountType: z.string().optional(),
	discountPercentage: z.string().optional(),
	discountExpirationDate: z.string().optional(),
	discountDescription: z.string().optional(),
	observations: z.string().optional(),
	status: z.string({ required_error: "O status é obrigatório." }),
	totalInstallments: z.string({
		required_error: "O total de parcelas é obrigatório.",
	}),
	installmentType: z.string({
		required_error: "O tipo de parcela é obrigatório.",
	}),
	invoiceInstructions: z.string({
		required_error: "As instruções da fatura são obrigatórias.",
	}),
	sampleMessage: z.string({
		required_error: "A mensagem de exemplo é obrigatória.",
	}),
});

export type IncomeSchemaType = z.infer<typeof IncomeSchema>;

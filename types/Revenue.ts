

import { z } from "zod";
import { CostCenterEnum, DiscountEnum, PaymentMethodEnum, StatusEnum } from "./options";


export const RevenueSchema = z.object({
	id: z.string().optional(),
	payer: z.string().min(1, "O pagador é obrigatório."),
	description: z.string().min(1, "A descrição é obrigatória."),
	competenceDate: z.string().optional(),
	dueDate: z.string().min(1, "A data de vencimento é obrigatória."),
	account: z.string().min(1, "A conta é obrigatória."),
	paymentMethod: PaymentMethodEnum,
	costCenter: CostCenterEnum,
	category: z.string().min(1, "A categoria é obrigatória."),
	value: z.string().min(1, "O valor é obrigatório."),
	paidValue: z.string().min(1, "O valor pago é obrigatório."),
	discountType: DiscountEnum,
	discountPercentage: z.number().optional(),
	discountExpirationDate: z.string().optional(),
	discountDescription: z.string().optional(),
	observations: z.string().optional(),
	taxApplied: z.string().optional(),

	status: StatusEnum,
	totalInstallments: z.string().min(1, "O total de parcelas é obrigatório."),
	installmentType: z.string().min(1, "O tipo de parcela é obrigatório."),
	invoiceInstructions: z
		.string()
		.min(1, "As instruções da fatura são obrigatórias."),
	sampleMessage: z.string().min(1, "A mensagem de exemplo é obrigatória."),
});

export type RevenueType = z.infer<typeof RevenueSchema>;

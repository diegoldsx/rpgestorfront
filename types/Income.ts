

import { z } from "zod";
import { CostCenterEnum, PaymentMethodEnum, StatusEnum } from "./options";

export const IncomeSchema = z.object({
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
	discountType: z.string().optional(),
	discountPercentage: z.string().optional(),
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

export type IncomeType = z.infer<typeof IncomeSchema>;



export const fakeIncomes: IncomeType[] = [
	{
		id: "1",
		payer: "Pagador",
		description: "descrição",
		competenceDate: "Cometence",
		dueDate: "Due Date",
		account: "Account",
		paymentMethod: PaymentMethodEnum.Values.pix,
		costCenter: CostCenterEnum.Values.administrativo,
		category: "Category",
		value: "Value",
		paidValue: "Paid Value",
		discountType: "Discount Type",
		discountPercentage: "Discount Percentage",
		discountExpirationDate: "Discount Expiration Date",
		discountDescription: "Discount Description",
		observations: "Observations",
		taxApplied: "Tax Applied",
		status: "active",
		totalInstallments: "Total Installments",
		installmentType: "Installment Type",
		invoiceInstructions: "Invoice Instructions",
		sampleMessage: "sampleMessage",
	},
]

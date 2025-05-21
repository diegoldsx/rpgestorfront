

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


export const fakeRevenues: RevenueType[] = [
	{
		id: '1',
		payer: 'Payer 1',
		description: 'Description 1',
		dueDate: '2022-01-01',
		account: 'account 1',
		paymentMethod: 'payment method 1',
		costCenter: 'cost center 1',
		category: 'category 1',
		value: '100',
		paidValue: '100',
		discountType: 'discount type 1',
		discountPercentage: 10,
		discountExpirationDate: '2022-01-01',
		discountDescription: 'discount description 1',
		observations: 'observations 1',
		taxApplied: 'tax applied 1',
		status: 'active',
		totalInstallments: '1',
		installmentType: 'installment type 1',
		invoiceInstructions: 'invoice instructions 1',
		sampleMessage: 'sample message 1',
	},
	{
		id: '2',
		payer: 'Payer 2',
		description: 'Description 2',
		dueDate: '2022-01-01',
		account: 'account 2',
		paymentMethod: 'payment method 2',
		costCenter: 'cost center 2',
		category: 'category 2',
		value: '100',
		paidValue: '100',
		discountType: 'discount type 		2',
		discountPercentage: 10,
		discountExpirationDate: '2022-01-01',
		discountDescription: 'discount description 2',
		observations: 'observations 2',
		taxApplied: 'tax applied 2',
		status: 'active',
		totalInstallments: '1',
		installmentType: 'installment type 2',
		invoiceInstructions: 'invoice instructions 2',
		sampleMessage: 'sample message 2',
	}
]

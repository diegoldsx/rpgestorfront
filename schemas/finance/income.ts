import { z } from "zod";

export const IncomeSchema = z.object({
	payer: z.string(),
	description: z.string(),
	competenceDate: z.string().optional(),
	dueDate: z.string(),
	account: z.string(),
	paymentMethod: z.string(),
	costCenter: z.string(),
	category: z.string(),
	taxApplied: z.boolean(),
	value: z.number(),
	paidValue: z.number(),
	discountType: z.string().optional(),
	discountPercentage: z.number().optional(),
	discountExpirationDate: z.string().optional(),
	discountDescription: z.string().optional(),
	observations: z.string().optional(),
	status: z.string(),
	totalInstallments: z.number(),
	installmentType: z.string(),
	invoiceInstructions: z.string(),
	sampleMessage: z.string(),
});

export type Income = z.infer<typeof IncomeSchema>;

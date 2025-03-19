import { z } from "zod";

export const IncomeSchema = z.object({
	id: z.string().optional(),
	payer: z.string(),
	description: z.string(),
	competenceDate: z.string().optional(),
	dueDate: z.string(),
	account: z.string(),
	paymentMethod: z.string(),
	costCenter: z.string(),
	category: z.string(),
	taxApplied: z.boolean(),
	value: z.string(),
	paidValue: z.string(),
	discountType: z.string().optional(),
	discountPercentage: z.string().optional(),
	discountExpirationDate: z.string().optional(),
	discountDescription: z.string().optional(),
	observations: z.string().optional(),
	status: z.string(),
	totalInstallments: z.string(),
	installmentType: z.string(),
	invoiceInstructions: z.string(),
	sampleMessage: z.string(),
});

export type IncomeSchemaType = z.infer<typeof IncomeSchema>;

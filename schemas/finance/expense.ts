import { z } from "zod";

export const ExpenseSchema = z.object({
	payer: z.string(),
	competenceDate: z.string().optional(),
	dueDate: z.string(),
	costCenter: z.string(),
	category: z.string(),
	paymentMethod: z.string(),
	baseDocument: z.string().optional(),
	account: z.string(),
	tax: z.boolean(),
	amount: z.number(),
	description: z.string().optional(),
	observations: z.string().optional(),
	status: z.string(),

	paymentDate: z.string().optional(),
	paymentClearingDate: z.string().optional(),
	discounts: z.number().optional(),
	addition: z.number().optional(),
	totalPaid: z.number().optional(),
	totalClearing: z.number().optional(),

	installments: z.number().optional(),
	installmentType: z.string(),

	itemPayer: z.string().optional(),
	itemCategory: z.string().optional(),
	itemCostCenter: z.string().optional(),
	itemBaseDocument: z.string().optional(),
	itemDueDate: z.string().optional(),
	itemDescription: z.string().optional(),
	itemAmount: z.number().optional(),

	taxISS: z.number().optional(),
	taxCSSL: z.number().optional(),
	taxPIS: z.number().optional(),
	taxCONFINS: z.number().optional(),
});

export type Expense = z.infer<typeof ExpenseSchema>;

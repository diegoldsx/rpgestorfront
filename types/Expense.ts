

import { z } from "zod";
import { CostCenterEnum, PaymentMethodEnum, StatusEnum } from "./options";

export const ExpenseSchema = z.object({
	id: z.string().optional(),
	payer: z.string().min(1, "O pagador é obrigatório."),
	competenceDate: z.string().optional(),
	dueDate: z.string().min(1, "A data de vencimento é obrigatória."),
	costCenter: CostCenterEnum,
	category: z.string().min(1, "A categoria é obrigatória."),
	paymentMethod: PaymentMethodEnum,
	baseDocument: z.string().optional(),
	account: z.string().min(1, "A conta é obrigatória."),
	tax: z.string().min(1, "A taxa é obrigatória."),
	amount: z.string().min(1, "O valor é obrigatório."),
	description: z.string().optional(),
	observations: z.string().optional(),
	status: StatusEnum,
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

export type ExpenseType = z.infer<typeof ExpenseSchema>;

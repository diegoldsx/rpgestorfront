

import { z } from "zod";
import { GroupSchema } from "./Group";
import { PaymentMethodEnum, CostCenterEnum } from "./options";

export const InstallmentSchema = z.object({
	id: z.string(),
	chargeType: z.string().min(1, "O tipo de cobrança é obrigatório."),
	group: GroupSchema,
	dueDate: z.string().min(1, "A data de vencimento é obrigatória."),
	category: z.string().min(1, "A categoria é obrigatória."),
	paymentMethod: PaymentMethodEnum,
	account: z.string().min(1, "A conta é obrigatória."),
	costCenter: CostCenterEnum,
	description: z.string().min(1, "A descrição é obrigatória."),
	invoiceInstruction: z.string().min(1, "A instrução da fatura é obrigatória."),
});

export type InstallmentType = z.infer<typeof InstallmentSchema>;

export const fakeInstallments: InstallmentType[] = [
	{
		id: '1',
		chargeType: 'chargeType',
		group: {
			id: '1',
			name: 'Group 1',
			total: 1,
		},
		dueDate: 'dueDate',
		category: 'category',
		paymentMethod: 'pix',
		account: 'account',
		costCenter: 'administrativo',
		description: 'description',
		invoiceInstruction: 'invoiceInstruction',
	}]

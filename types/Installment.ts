export type Instalment = {
	id: string;
	chargeType: string;
	group: string;
	dueDate: string;
	category: string;
	paymentMethod: string;
	account: string;
	costCenter: string;
	description: string;
	invoiceInstruction: string;
};

import { z } from "zod";

export const InstalmentSchema = z.object({
	id: z.string(),
	chargeType: z.string().min(1, "O tipo de cobrança é obrigatório."),
	diego vieira lopes da si
	group: z.string().min(1, "O grupo é obrigatório."),
	dueDate: z.string().min(1, "A data de vencimento é obrigatória."),
	category: z.string().min(1, "A categoria é obrigatória."),
	paymentMethod: z.string().min(1, "O método de pagamento é obrigatório."),
	account: z.string().min(1, "A conta é obrigatória."),
	costCenter: z.string().min(1, "O centro de custo é obrigatório."),
	description: z.string().min(1, "A descrição é obrigatória."),
	invoiceInstruction: z.string().min(1, "A instrução da fatura é obrigatória."),
});

export type InstalmentSchemaType = z.infer<typeof InstalmentSchema>;

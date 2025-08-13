

import { z } from "zod";
import { CostCenterEnum, PaymentMethodEnum, StatusEnum } from "./options";

export const ExpenseSchema = z.object({
	id: z.string(),
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
	taxCOFINS: z.string().optional(),
});

export type ExpenseType = z.infer<typeof ExpenseSchema>;


export const fakeExpenses: ExpenseType[] = [
	{
		id: '1',
		payer: "Empresa Alpha",
		competenceDate: "2025-05-01",
		dueDate: "2025-05-10",
		costCenter: CostCenterEnum.Values.administrativo, // CostCenterEnum
		category: "Serviços",
		paymentMethod: PaymentMethodEnum.Values.pix, // PaymentMethodEnum
		baseDocument: "DOC123",
		account: "Banco do Brasil",
		tax: "5",
		amount: "1000.00",
		description: "Serviço de consultoria",
		observations: "Pagamento via PIX",
		status: StatusEnum.Values.pending, // StatusEnum
		paymentDate: "2025-05-08",
		paymentClearingDate: "2025-05-09",
		discounts: "50.00",
		addition: "0.00",
		totalPaid: "950.00",
		totalClearing: "950.00",
		installments: "1",
		installmentType: "única",
		itemPayer: "Empresa Alpha",
		itemCategory: "Consultoria",
		itemCostCenter: "administrativo",
		itemBaseDocument: "DOC123",
		itemDueDate: "2025-05-10",
		itemDescription: "Serviço prestado",
		itemAmount: "1000.00",
		taxISS: "30.00",
		taxCSSL: "10.00",
		taxPIS: "5.00",
		taxCOFINS: "15.00"
	}
];

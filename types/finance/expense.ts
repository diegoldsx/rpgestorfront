export type Expense = {
	id?: string;
	payer: string; // "Pagador"
	competenceDate?: string; // "Competência" (optional)
	dueDate: string; // "Vencimento"
	costCenter: string; // "Centro de Custo"
	category: string;
	paymentMethod: string;
	baseDocument?: string; // "Base Documento" (optional)
	account: string;
	tax: boolean;
	amount: number; // "Valor"
	description?: string; // "Descrição"
	observations?: string; // "Observações"
	status: string;

	paymentDate?: string; // "Data Pagamento" (optional)
	paymentClearingDate?: string; // Compensação de pagamento
	discounts?: number; // "Parcelas" (optional)
	addition?: number;
	totalPaid?: number; // "Total Pago" (optional)
	totalClearing?: number; // Valor compensado

	installments?: number;
	installmentType: string;

	itemPayer?: string;
	itemCategory?: string;
	itemCostCenter?: string;
	itemBaseDocument?: string;
	itemDueDate?: string;
	itemDescription?: string;
	itemAmount?: number;

	taxISS?: number;
	taxCSSL?: number;
	taxPIS?: number;
	taxCONFINS?: number;
};

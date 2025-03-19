export type Income = {
	id?: string;
	payer: string; // "Pagador"
	description: string;
	competenceDate?: string; // "Competência" (optional)
	dueDate: string; // "Vencimento"
	account: string;
	paymentMethod: string;
	costCenter: string;
	category: string;
	value: string; // "Valor"
	paidValue: string;
	discountType?: string;
	discountPercentage?: string; // "Percentual Desconto(%)" (if % is selected)
	discountExpirationDate?: string; // "Data limite desconto" (optional)
	discountDescription?: string; // "Descrição"
	observations?: string; // "Observações"
	status: string;
	totalInstallments: string;
	installmentType: string;
	invoiceInstructions: string;
	sampleMessage: string;
};

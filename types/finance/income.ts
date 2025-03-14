export type Income = {
	payer: string; // "Pagador"
	description: string;
	competenceDate?: string; // "Competência" (optional)
	dueDate: string; // "Vencimento"
	account: string;
	paymentMethod: string;
	costCenter: string;
	category: string;
	taxApplied: boolean; // "Imposto" (Sim/Não)
	value: number; // "Valor"
	paidValue: number;
	discountType?: string;
	discountPercentage?: number; // "Percentual Desconto(%)" (if % is selected)
	discountExpirationDate?: string; // "Data limite desconto" (optional)
	discountDescription?: string; // "Descrição"
	observations?: string; // "Observações"
	status: string;
	totalInstallments: number;
	installmentType: string;
	invoiceInstructions: string;
	sampleMessage: string;
};

export type Expense = {
	payer: string; // "Pagador"
	competenceDate?: string; // "Competência" (optional)
	dueDate: string; // "Vencimento"
	costCenter: "ADMINISTRATIVO" | "OUTROS"; // "Centro de Custo"
	category: "ENERGY" | "WATER" | "SYSTEM"; // "Categoria"
	paymentMethod: "DINHEIRO" | "BOLETO"; // "Forma Pagamento"
	baseDocument?: string; // "Base Documento" (optional)
	account: "CAIXA" | "BRADESCO"; // "Conta"
	tax: boolean;
	amount: number; // "Valor"
	description?: string; // "Descrição"
	observations?: string; // "Observações"
	status: "PENDING" | "PAID" | "CANCELLED"; // "Situação"

	paymentDate?: string; // "Data Pagamento" (optional)
	paymentClearingDate?: string; // Compensação de pagamento
	discounts?: number; // "Parcelas" (optional)
	addition?: number;
	totalPaid?: number; // "Total Pago" (optional)
	totalClearing?: number; // Valor compensado

	installments?: number;
	installmentType: "REPEAT" | "DIVIDE";

	itemPayer?: string;
	itemCategory?: "ENERGY" | "WATER";
	itemCostCenter?: "ADMINISTRATIVO" | "OUTROS";
	itemBaseDocument?: string;
	itemDueDate?: string;
	itemDescription?: string;
	itemAmount?: number;

	taxISS?: number;
	taxCSSL?: number;
	taxPIS?: number;
	taxCONFINS?: number;
};

type ExpenseKeyConfig = {
	id: keyof Expense;
	title: string;
	options?: string[]; // Opções para campos com valores pré-definidos
};

export const expenseTypeConfig: ExpenseKeyConfig[] = [
	{ id: "payer", title: "Pagador" },
	{ id: "competenceDate", title: "Competência" },
	{ id: "dueDate", title: "Vencimento" },
	{
		id: "costCenter",
		title: "Centro de Custo",
		options: ["ADMINISTRATIVO", "OUTROS"],
	},
	{
		id: "category",
		title: "Categoria",
		options: ["ENERGY", "WATER", "SYSTEM"],
	},
	{
		id: "paymentMethod",
		title: "Forma de Pagamento",
		options: ["DINHEIRO", "BOLETO"],
	},
	{ id: "baseDocument", title: "Base Documento" },
	{ id: "account", title: "Conta", options: ["CAIXA", "BRADESCO"] },
	{ id: "tax", title: "Taxa" },
	{ id: "amount", title: "Valor" },
	{ id: "description", title: "Descrição" },
	{ id: "observations", title: "Observações" },
	{
		id: "status",
		title: "Situação",
		options: ["PENDING", "PAID", "CANCELLED"],
	},
	{ id: "paymentDate", title: "Data de Pagamento" },
	{ id: "paymentClearingDate", title: "Compensação de Pagamento" },
	{ id: "discounts", title: "Descontos" },
	{ id: "addition", title: "Acréscimo" },
	{ id: "totalPaid", title: "Total Pago" },
	{ id: "totalClearing", title: "Valor Compensado" },
	{ id: "installments", title: "Parcelas" },
	{
		id: "installmentType",
		title: "Tipo de Parcela",
		options: ["REPEAT", "DIVIDE"],
	},
	{ id: "itemPayer", title: "Pagador do Item" },
	{
		id: "itemCategory",
		title: "Categoria do Item",
		options: ["ENERGY", "WATER"],
	},
	{
		id: "itemCostCenter",
		title: "Centro de Custo do Item",
		options: ["ADMINISTRATIVO", "OUTROS"],
	},
	{ id: "itemBaseDocument", title: "Base Documento do Item" },
	{ id: "itemDueDate", title: "Vencimento do Item" },
	{ id: "itemDescription", title: "Descrição do Item" },
	{ id: "itemAmount", title: "Valor do Item" },
	{ id: "taxISS", title: "Taxa ISS" },
	{ id: "taxCSSL", title: "Taxa CSSL" },
	{ id: "taxPIS", title: "Taxa PIS" },
	{ id: "taxCONFINS", title: "Taxa CONFINS" },
];

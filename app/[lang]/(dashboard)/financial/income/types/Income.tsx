export type Income = {
	payer: string; // "Pagador"
	description: string;
	competenceDate?: string; // "Competência" (optional)
	dueDate: string; // "Vencimento"
	account: "CAIXA" | "BRADESCO"; // "Conta"
	paymentMethod: "DINHEIRO" | "BOLETO"; // "Forma Pagamento"
	costCenter: "ADMINISTRATIVO" | "OUTROS"; // "Centro de Custo"
	category: "MENSALIDADE" | "ASSOCIADOS"; // "Categoria"
	taxApplied: boolean; // "Imposto" (Sim/Não)
	value: number; // "Valor"
	paidValue: number;
	discountType?: "%" | "R$"; // "Tipo Desconto" (% or Fixed amount)
	discountPercentage?: number; // "Percentual Desconto(%)" (if % is selected)
	discountExpirationDate?: string; // "Data limite desconto" (optional)
	discountDescription?: string; // "Descrição"
	observations?: string; // "Observações"
	status: "PENDING" | "PAID" | "CANCELLED"; // "Situação"
	totalInstallments: number;
	installmentType: "REPETE" | "DIVIDE";
	invoiceInstructions: string;
	sampleMessage: string;
};

// Generate all keys as an array of strings
export const IncomeKeys: (keyof Income)[] = [
	"payer",
	"competenceDate",
	"dueDate",
	"account",
	"paymentMethod",
	"costCenter",
	"category",
	"taxApplied",
	"value",
	"discountType",
	"discountPercentage",
	"discountExpirationDate",
	"discountDescription",
	"observations",
	"status",
	"totalInstallments",
	"installmentType",
	"invoiceInstructions",
	"sampleMessage",
];

export const IncomeSelectOptions = [
	{
		id: "account",
		title: "Conta",
		options: [
			{ value: "CAIXA", label: "Caixa" },
			{ value: "BRADESCO", label: "Bradesco" },
		],
	},
	{
		id: "paymentMethod",
		title: "Forma de Pagamento",
		options: [
			{ value: "DINHEIRO", label: "Dinheiro" },
			{ value: "BOLETO", label: "Boleto" },
		],
	},
	{
		id: "costCenter",
		title: "Centro de Custo",
		options: [
			{ value: "ADMINISTRATIVO", label: "Administrativo" },
			{ value: "OUTROS", label: "Outros" },
		],
	},
	{
		id: "category",
		title: "Categoria",
		options: [
			{ value: "MENSALIDADE", label: "Mensalidade" },
			{ value: "ASSOCIADOS", label: "Associados" },
		],
	},
	{
		id: "discountType",
		title: "Tipo de Desconto",
		options: [
			{ value: "%", label: "Porcentagem (%)" },
			{ value: "R$", label: "Valor Fixo (R$)" },
		],
	},
	{
		id: "status",
		title: "Situação",
		options: [
			{ value: "PENDING", label: "Pendente" },
			{ value: "PAID", label: "Pago" },
			{ value: "CANCELLED", label: "Cancelado" },
		],
	},
	{
		id: "installmentType",
		title: "Tipo de Parcelamento",
		options: [
			{ value: "REPETE", label: "Repete o Valor" },
			{ value: "DIVIDE", label: "Divide o Valor" },
		],
	},
];

export type Transfer = {
	id: number;
	origin: "CAIXA" | "BRADESCO"; // "Origen (a debitar)"
	destination: "CAIXA" | "BRADESCO"; // "Destino (a creditar)"
	date: string; // "Data"
	amount: number; // "Valor"
};

export const transferConfig: { id: string; title: string; options?: any }[] = [
	{
		id: "origin",
		title: "Origem (a debitar)",
		options: [
			{ value: "CAIXA", label: "Caixa" },
			{ value: "BRADESCO", label: "Bradesco" },
		],
	},
	{
		id: "destination",
		title: "Destino (a creditar)",
		options: [
			{ value: "CAIXA", label: "Caixa" },
			{ value: "BRADESCO", label: "Bradesco" },
		],
	},
	{
		id: "date",
		title: "Data",
	},
	{
		id: "amount",
		title: "Valor",
	},
];

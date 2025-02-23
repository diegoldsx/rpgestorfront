import { FieldConfig, Option } from "@/app/types/FieldConfig";

export type Remittance = {
	id: number;
	bank: "CAIXA" | "BRADESCO"; // "Origen (a debitar)"
	search: string;
	searchFor: "code" | "name" | "cpf" | "cnpj"; // "Data"
	amount: number; // "Valor"
	startDate: string;
	finalDate: string;
	dateCategory: "dueDate" | "paymentDate";
	limit: string;
	type: "adimplente" | "inadimplente";
};

export const config: FieldConfig[] = [
	{
		id: "id",
		title: "ID",
	},
	{
		id: "search",
		title: "Busca",
	},
	{
		id: "amount",
		title: "Valor",
	},
	{
		id: "startDate",
		title: "Data início",
	},
	{
		id: "finalDate",
		title: "Data fim",
	},
	{
		id: "limit",
		title: "Limite",
	},
	{
		id: "searchFor",
		title: "Busca Por",
		options: [
			{ value: "code", label: "Código" },
			{ value: "cpf", label: "CPF" },
			{ value: "cnpj", label: "CNPJ" },
			{ value: "name", label: "Nome" },
		],
	},
	{
		id: "type",
		title: "Tipo",
		options: [
			{ value: "adimplente", label: "Adimplente" },
			{ value: "inadimplente", label: "Inadimplente" },
		],
	},
	{
		id: "bank",
		title: "Banco",
		options: [
			{ value: "CAIXA", label: "Caixa" },
			{ value: "BRADESCO", label: "Bradesco" },
		],
	},

	{
		id: "dateCategory",
		title: "Categoria",
		options: [
			{ value: "dueDate", label: "Data de vencimento" },
			{ value: "paymentDate", label: "Data de pagamento" },
		],
	},
];

export const getSelectableFields = (): FieldConfig[] => {
	const items = config.filter((c) => c.options).map((item) => ({ ...item }));

	return items;
};

export const getLabelFromValue = (id: string, value: string): string => {
	const options = config.find((field) => field.id === id)?.options;

	const option = options?.find((op) => op.value === value);
	if (!option) return "";

	return option.label || "";
};

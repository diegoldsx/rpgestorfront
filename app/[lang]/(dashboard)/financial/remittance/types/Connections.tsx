import { FieldConfig } from "@/app/types/FieldConfig";

export type Connection = {
	id: number;
	file?: File;
	account: "CAIXA" | "BRADESCO";
};

export const remittanceConfig: FieldConfig[] = [
	{
		id: "id",
		title: "ID",
	},
	{
		id: "account",
		title: "Conta",
		options: [
			{ value: "CAIXA", label: "Caixa" },
			{ value: "BRADESCO", label: "Bradesco" },
		],
	},
];

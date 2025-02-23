import { FieldConfig } from "@/app/types/FieldConfig";

export type Return = {
	id: number;
	account: "CAIXA" | "BRADESCO";
	file: File;
};

export const returnConfig: FieldConfig[] = [
	{
		id: "id",
		title: "ID",
	},
	{
		id: "file",
		title: "Arquivo",
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

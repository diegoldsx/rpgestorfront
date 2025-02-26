import { FieldConfig, Option } from "@/app/types/FieldConfig";
import { VisibilityState } from "@tanstack/react-table";

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

export const options = {
	bank: [
		{ value: "CAIXA", label: "Caixa" },
		{ value: "BRADESCO", label: "Bradesco" },
	],
	searchFor: [
		{ value: "code", label: "Código" },
		{ value: "name", label: "Nome" },
		{ value: "cpf", label: "CPF" },
		{ value: "cnpj", label: "CNPJ" },
	],
	dateCategory: [
		{ value: "dueDate", label: "Data de vencimento" },
		{ value: "paymentDate", label: "Data de pagamento" },
	],
	type: [
		{ value: "adimplent", label: "Adimplente" },
		{ value: "inadimpent", label: "Inadimplate" },
	],
};

export const remittanceFields: FieldConfig<Remittance>[] = [
	{ id: "id", title: "ID" },
	{ id: "bank", title: "Situação", options: options.bank },
	{ id: "search", title: "Busca" },
	{ id: "searchFor", title: "Buscar por", options: options.searchFor },
	{ id: "amount", title: "Valor" },
	{ id: "startDate", title: "Data de início" },
	{ id: "finalDate", title: "Data final", options: options.dateCategory },
	{ id: "dateCategory", title: "Data categoria" },
	{ id: "limit", title: "Limite" },
	{ id: "type", title: "Tipo", options: options.type },
];

let hideColumns: string[] = ["id", "limit"];

export const visibilityState: VisibilityState = Object.fromEntries(remittanceFields.map((key) => [key.id, !hideColumns.includes(key.id)]));
export const facetedFilters: any[] = remittanceFields.filter((field: any) => field.options);

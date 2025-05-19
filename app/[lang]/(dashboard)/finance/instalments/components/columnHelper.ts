import { VisibilityState } from "@tanstack/react-table";
import { FieldConfig } from "@/app/types/FieldConfig";
import { InstalmentSchemaType } from "@/types/Installment";

const field = (
	id: keyof InstalmentSchemaType,
	title: string,
	options?: any
) => ({
	id,
	title,
	defaultValue: "",
	...(options && { options }),
});

export const columnConfig: FieldConfig<InstalmentSchemaType>[] = [
	field("id", "ID"),
	field("chargeType", "Tipo de cobrança"),
	field("group", "Grupo"),
	field("dueDate", "Data vencimento"),
	field("category", "Categoria", [
		{ value: "cat1", label: "Categoria 1" },
		{ value: "cat2", label: "Categoria 2" },
	]),
	field("paymentMethod", "Método de pagamento", [
		{
			value: "pix",
			label: "PIX",
		},
		{
			value: "invoice",
			label: "Boleto",
		},
	]),
	field("account", "Conta", [
		{
			value: "caixa",
			label: "Caixa",
		},
		{
			value: "bradesco",
			label: "Bradesco",
		},
	]),
	field("costCenter", "Centro de custo", [
		{
			value: "adm",
			label: "Administrativo",
		},
		{ value: "other", label: "Outros" },
	]),
	field("description", "Descrição"),
	field("invoiceInstruction", "Instruções Boleto"),
];

export const defaultValues = Object.fromEntries(
	columnConfig.map(({ id, defaultValue }) => [id, defaultValue])
) as Partial<InstalmentSchemaType>;

export const facetedFilters = columnConfig.filter((f) => !!f.options);

export const visibleColumns: ReadonlyArray<string> = ["*"];
export const visibilityState: VisibilityState = Object.fromEntries(
	columnConfig.map(({ id }) => [
		id,
		visibleColumns.includes(id) || visibleColumns[0] === "*",
	])
);

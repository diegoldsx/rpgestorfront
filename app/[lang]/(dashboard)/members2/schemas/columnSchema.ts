import { ColumnSchema } from "@/types/columns/ColumnsDefinition";
import { VisibilityState } from "@tanstack/react-table";
import { Member } from "./schema";
import { stateOptions } from "@/types/member/StateUF";

export const columnSchema: Array<ColumnSchema<Member>> = [
	{
		id: "id",
		title: "ID",
		type: "id",
		defaultValue: "",
		isVisible: true,
		size: 200,
	},
	{
		id: "email",
		title: "Email",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	},
	{
		id: "phone",
		title: "Telefone",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 250,
	},
	{
		id: "mobile",
		title: "Celular",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	},
	{
		id: "birthDate",
		title: "Data de Nascimento",
		type: "date",
		defaultValue: "",
		isVisible: true,
		size: 150,
	},
	{
		id: "corporateName",
		title: "Razão Social",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	},
	{
		id: "tradeName",
		title: "Nome Fantasia",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	},
	{
		id: "financialStatus",
		title: "Status Financeiro",
		type: "select",
		defaultValue: "",
		isVisible: true,
		size: 150,
		options: [
			{ value: "active", label: "Ativo" },
			{ value: "inactive", label: "Inativo" },
		],
	},
	{
		id: "billingCycle",
		title: "Ciclo de Faturamento",
		type: "select",
		defaultValue: "",
		isVisible: true,
		size: 150,
		options: [
			{ value: "monthly", label: "Mensal" },
			{ value: "quarterly", label: "Trimestral" },
			{ value: "yearly", label: "Anual" },
		],
	},
	{
		id: "paymentGroup",
		title: "Grupo de Pagamento",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	},
	{
		id: "paymentMethod",
		title: "Método de Pagamento",
		type: "select",
		options: [{value:"pix", label:"PIX"}, {value:"boleto", label:"Boleto"}],
		defaultValue: "",
		isVisible: true,
		size: 150,
	},
	{
		id: "type",
		title: "Tipo",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	},
	{
		id: "cep",
		title: "CEP",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 100,
	},
	{
		id: "street",
		title: "Rua",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	},
	{
		id: "number",
		title: "Número",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 100,
	},
	{
		id: "complement",
		title: "Complemento",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	},
	{
		id: "neighborhood",
		title: "Bairro",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	},
	{
		id: "city",
		title: "Cidade",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	},
	{
		id: "state",
		title: "Estado",
		type: "select",
		defaultValue: "",
		options: stateOptions,
		isVisible: true,
		size: 150,
	},
	{
		id: "document",
		title: "Document",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	},

];

export const defaultValues: Record<string, any> = columnSchema.reduce(
	(acc, { id, defaultValue, options }) => {
		acc[id] = options?.length ? options[0].value : (defaultValue ?? "");
		return acc;
	},
	{} as Record<string, any>
);

export function getVisibilityState(
	visibilityArray: string[] = ["*"]
): VisibilityState {
	return Object.fromEntries(
		columnSchema
			.filter(({ id }) => id !== undefined)
			.map(({ id }) => [
				id as string,
				visibilityArray.includes("*") || visibilityArray.includes(id as string),
			])
	);
}

export function getFieldsWithOptions() {
	return columnSchema.filter(({ options }) => !!options);
}

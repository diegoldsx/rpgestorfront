import { ColumnSchema } from "@/types/columns/ColumnsDefinition";
import { VisibilityState } from "@tanstack/react-table";
import { CustomerSchemaType } from "./schema";

export const columnSchema: Array<ColumnSchema<CustomerSchemaType>> = [
	{
		id: "id",
		title: "ID",
		type: "id",
		defaultValue: "",
		isVisible: true,
		size: 100,
	},
	{
		id: "name",
		title: "Nome",
		type: "text",
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
		size: 250,
	},
	{
		id: "customerType",
		title: "Tipo de Cliente",
		type: "select", //
		defaultValue: "",
		isVisible: true,
		size: 120,
		options: [
			{ value: "pf", label: "Pessoa Física" },
			{ value: "pj", label: "Pessoa Jurídica" },
		],
	},
	{
		id: "cpf",
		title: "CPF",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	},
	{
		id: "cnpj",
		title: "CNPJ",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 180,
	},
	{
		id: "phone",
		title: "Telefone",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
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
		id: "userPassword",
		title: "Senha",
		type: "text",
		defaultValue: "",
		isVisible: false,
		size: 150,
	},
	{
		id: "registrationDate",
		title: "Data de Registro",
		type: "date",
		defaultValue: "",
		isVisible: true,
		size: 150,
	},
	{
		id: "status",
		title: "Status",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 100,
	},
	{
		id: "code",
		title: "Código",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 100,
	},
	{
		id: "photo",
		title: "Foto",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	},
	{
		id: "zipCode",
		title: "CEP",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 120,
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
		size: 80,
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
		id: "state",
		title: "Estado",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 80,
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
		id: "corporateName",
		title: "Razão Social",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 250,
	},
	{
		id: "tradeName",
		title: "Nome Fantasia",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 250,
	},
	{
		id: "billingEmail",
		title: "Email de Cobrança",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 250,
	},
	{
		id: "billingName",
		title: "Nome de Cobrança",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	},
	{
		id: "billingPhone",
		title: "Telefone de Cobrança",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	},
	{
		id: "billingMobile",
		title: "Celular de Cobrança",
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

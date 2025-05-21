import { Column } from "@/types/columns/ColumnsDefinition";
import { VisibilityState } from "@tanstack/react-table";
import { PaymentMethodOptions, StatesUF, StateUF, StateUFEnum, Status } from "@/types/options";
import { MemberType } from "@/types/Member";

export const columnSchema: Array<Column<MemberType>> = [
	{
		id: "id",
		title: "ID",
		type: "id",
		defaultValue: "",
		isVisible: true,
		size: 100,
	},
	{
		id: "status",
		title: "Status Financeiro",
		type: "select",
		defaultValue: "",
		isVisible: true,
		size: 150,
		options: Status,
	},
	{
		id: "documentType",
		title: "Tipo de documento",
		type: "select",
		defaultValue: "",
		isVisible: true,
		size: 100,
	},
	{
		id: "documentNumber",
		title: "Documento",
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
		id: "name",
		title: "Nome",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 300,
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
		id: "corporateName",
		title: "Razão Social",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	},

	{
		id: "paymentGroup",
		title: "Grupo de Pagamento",
		type: "select",
		defaultValue: "",
		isVisible: true,
		size: 150,
	},
	{
		id: "paymentMethod",
		title: "Método de Pagamento",
		type: "select",
		defaultValue: "",
		isVisible: true,
		size: 150,
		options: PaymentMethodOptions,
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
		options: StatesUF,
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

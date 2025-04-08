import { ColumnSchema } from "@/types/columns/ColumnsDefinition";
import { Course } from "../types";
import { VisibilityState } from "@tanstack/react-table";

export const columnSchema: Array<ColumnSchema<Course>> = [
	{
		id: "category",
		title: "Categoria",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
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
		id: "startDate",
		title: "Data de Início",
		type: "date", // Ou "text", dependendo da sua implementação de datas
		defaultValue: "",
		isVisible: true,
		size: 120,
	},
	{
		id: "endDate",
		title: "Data de Término",
		type: "date", // Ou "text", dependendo da sua implementação de datas
		defaultValue: "",
		isVisible: true,
		size: 120,
	},
	{
		id: "registrationDeadline",
		title: "Prazo de Inscrição",
		type: "date", // Ou "text", dependendo da sua implementação de datas
		defaultValue: "",
		isVisible: true,
		size: 150,
	},
	{
		id: "participantLimit",
		title: "Limite de Participantes",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 120,
	},
	{
		id: "instructors",
		title: "Instrutores",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	},
	{
		id: "description",
		title: "Descrição",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 300,
	},
	{
		id: "permissions",
		title: "Permissões",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	},
	{
		id: "value",
		title: "Valor",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 100,
	},
	{
		id: "costCenter",
		title: "Centro de Custo",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	},
	{
		id: "billing",
		title: "Faturamento",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	},
	{
		id: "account",
		title: "Conta",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	},
	{
		id: "enrollment",
		title: "Inscrição",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	},
	{
		id: "paymentConfirmation",
		title: "Confirmação de Pagamento",
		type: "checkbox",
		defaultValue: "",
		isVisible: true,
		size: 150,
	},
	{
		id: "exemption",
		title: "Isenção",
		type: "checkbox",
		defaultValue: "",
		isVisible: true,
		size: 100,
	},
	{
		id: "cancellation",
		title: "Cancelamento",
		type: "checkbox",
		defaultValue: "",
		isVisible: true,
		size: 120,
	},
	{
		id: "inviteConfirmation",
		title: "Confirmação de Convite",
		type: "checkbox",
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

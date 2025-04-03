import { VisibilityState } from "@tanstack/react-table";
import { AssemblySchemaType } from "./schema";
import { ColumnSchema } from "@/types/columns/ColumnsDefinition";

export const columnSchema: Array<ColumnSchema<AssemblySchemaType>> = [
	{
		id: "id",
		title: "ID",
		type: "id",
		defaultValue: "",
		isVisible: true,
	},
	{
		id: "name",
		title: "Nome",
		type: "text",
		defaultValue: "",
		isVisible: true,
	},
	{
		id: "status",
		title: "Situação",
		type: "select",
		defaultValue: "active",
		isVisible: true,
		options: [
			{ value: "active", label: "Ativo" },
			{ value: "inactive", label: "Inativo" },
		],
	},
	{
		id: "startDate",
		title: "Data de início",
		type: "text",
		defaultValue: "",
		isVisible: true,
	},
	{
		id: "endDate",
		title: "Data fim",
		type: "text",
		defaultValue: "",
		isVisible: true,
	},
	{
		id: "resultDate",
		title: "Data resultado",
		type: "text",
		defaultValue: "",
		isVisible: true,
	},
	{
		id: "description",
		title: "Descrição",
		type: "text",
		defaultValue: "",
		isVisible: true,
	},
	{
		id: "type",
		title: "Tipo",
		type: "text",
		defaultValue: "",
		isVisible: true,
	},
	{
		id: "allowChangeVote",
		title: "Permite mudar voto",
		type: "checkbox",
		defaultValue: "",
		isVisible: true,
	},
	{
		id: "displayMode",
		title: "Modo exibição",
		type: "text",
		defaultValue: "",
		isVisible: true,
	},
	{
		id: "videoConference",
		title: "Conferência de vídeo",
		type: "text",
		defaultValue: "",
		isVisible: true,
	},
];

export const defaultValues: Record<string, any> = columnSchema.map(
	({ id, defaultValue, options }) => ({
		id,
		value: options && options.length > 0 ? options[0].value : defaultValue,
	})
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

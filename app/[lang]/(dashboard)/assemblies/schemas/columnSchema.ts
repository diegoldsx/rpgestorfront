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
		size: 100,
	},
	{
		id: "name",
		title: "Nome",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 600,
	},
	{
		id: "status",
		title: "Situação",
		type: "badge",
		defaultValue: "active",
		isVisible: true,
		size: 150,
		options: [
			{ value: "active", label: "Ativo" },
			{ value: "inactive", label: "Inativo" },
		],
	},
	{
		id: "startDate",
		title: "Data de início",
		type: "date",
		defaultValue: "",
		isVisible: true,
		size: 180,
	},
	{
		id: "endDate",
		title: "Data fim",
		type: "date",
		defaultValue: "",
		isVisible: true,
		size: 180,
	},
	{
		id: "resultDate",
		title: "Data resultado",
		type: "date",
		defaultValue: "",
		isVisible: true,
		size: 180,
	},
	{
		id: "description",
		title: "Descrição",
		type: "textarea",
		defaultValue: "",
		isVisible: true,
		size: 200,
	},
	{
		id: "type",
		title: "Tipo",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	},
	{
		id: "allowChangeVote",
		title: "Permite mudar voto",
		type: "checkbox",
		defaultValue: "",
		isVisible: true,
		size: 300,
	},
	{
		id: "displayMode",
		title: "Modo exibição",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	},
	{
		id: "videoConference",
		title: "Conferência de vídeo",
		type: "checkbox",
		defaultValue: "",
		isVisible: true,
		size: 220,
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

import { ColumnSchema } from "@/types/columns/ColumnsDefinition";
import { Submission } from "../types";
import { VisibilityState } from "@tanstack/react-table";

export const columnSchema: Array<ColumnSchema<Submission>> = [
	{
		id: "id",
		title: "ID",
		type: "id",
		defaultValue: "",
		isVisible: true,
		size: 100,
	},
	{
		id: "packagingName",
		title: "Nome da Embalagem",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	},
	{
		id: "strategicPartners",
		title: "Parceiros Estratégicos",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	},
	{
		id: "area",
		title: "Área",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	},
	{
		id: "authors",
		title: "Autores",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	},
	{
		id: "institution",
		title: "Instituição",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	},
	{
		id: "date",
		title: "Data",
		type: "date", // Ou "text", dependendo da sua implementação de datas
		defaultValue: "",
		isVisible: true,
		size: 120,
	},
	{
		id: "event",
		title: "Evento",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	},
	{
		id: "submitedBy",
		title: "Submetido Por",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	},
	{
		id: "packageReleaseDate",
		title: "Data de Lançamento da Embalagem",
		type: "date", // Ou "text", dependendo da sua implementação de datas
		defaultValue: "",
		isVisible: true,
		size: 150,
	},
	{
		id: "packageDesignAgency",
		title: "Agência de Design da Embalagem",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
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
		id: "presentationLink",
		title: "Link da Apresentação",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 250,
	},
	{
		id: "comments",
		title: "Comentários",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 250,
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
		id: "presentationDate",
		title: "Data da Apresentação",
		type: "date", // Ou "text", dependendo da sua implementação de datas
		defaultValue: "",
		isVisible: true,
		size: 120,
	},
	{
		id: "roomContent",
		title: "Conteúdo da Sala",
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

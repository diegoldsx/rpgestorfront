import { VisibilityState } from "@tanstack/react-table";
import { ContentSchema } from "./schema";
import { ColumnSchema } from "@/types/columns/ColumnsDefinition";

export const columnSchema: Array<ColumnSchema<typeof ContentSchema._type>> = [
	{
		id: "id",
		title: "ID",
		type: "id",
		defaultValue: "",
		isVisible: true,
		size: 100,
	},
	{
		id: "contentType",
		title: "Tipo de Conteúdo",
		type: "text",
		defaultValue: "content1",
		isVisible: true,
		size: 150,
		options: [
			{ value: "content1", label: "Conteúdo 1" },
			{ value: "content2", label: "Conteúdo 2" },
		],
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
		id: "expirationDate",
		title: "Data de Expiração",
		type: "date",
		defaultValue: "",
		isVisible: true,
		size: 180,
	},
	{
		id: "title",
		title: "Título",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	},
	{
		id: "description",
		title: "Descrição",
		type: "textarea",
		defaultValue: "",
		isVisible: true,
		size: 250,
	},
	{
		id: "responsible",
		title: "Responsável",
		type: "text",
		defaultValue: "user1",
		isVisible: true,
		size: 150,
		options: [
			{ value: "user1", label: "Usuário 1" },
			{ value: "user2", label: "Usuário 2" },
		],
	},
	{
		id: "videoConference",
		title: "Conferência de Vídeo",
		type: "checkbox",
		defaultValue: false,
		isVisible: true,
		size: 180,
	},
	{
		id: "customHtml",
		title: "HTML Personalizado",
		type: "textarea",
		defaultValue: "",
		isVisible: true,
		size: 300,
	},
	{
		id: "access",
		title: "Acesso",
		type: "text",
		defaultValue: "public",
		isVisible: true,
		size: 150,
		options: [
			{ value: "public", label: "Público" },
			{ value: "private", label: "Privado" },
		],
	},
];

export const defaultValues: Record<string, any> = columnSchema.reduce(
	(acc, { id, defaultValue, options }) => {
		acc[id] = options?.length ? options[0].value : defaultValue ?? "";
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

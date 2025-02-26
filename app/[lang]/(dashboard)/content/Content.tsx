import { FieldConfig as Field } from "@/app/types/FieldConfig";
import { VisibilityState } from "@tanstack/react-table";

export type Content = {
	id: number;
	contentType: "content1" | "content2";
	status: "active" | "inactive";
	expirationDate?: string;
	title?: string;
	description: string;
	responsible: "user1" | "user2";
	videoConference: boolean;
	customHtml: string;
	access: "public" | "private";
};

export const options = {
	contentType: [
		{ value: "content1", label: "Conteúdo 1" },
		{ value: "content2", label: "Conteúdo 2" },
	],
	status: [
		{ value: "active", label: "Ativo" },
		{ value: "inactive", label: "Inativo" },
	],
	responsible: [
		{ value: "user1", label: "John" },
		{ value: "user2", label: "Mary" },
	],
	access: [
		{ value: "public", label: "Público" },
		{ value: "private", label: "Restrito" },
	],
};

export const contentFields: Field<Content>[] = [
	{ id: "id", title: "ID" },
	{ id: "status", title: "Situação", options: options.status },
	{ id: "contentType", title: "Tipo", options: options.contentType },
	{ id: "expirationDate", title: "Data de vencimento" },
	{ id: "title", title: "Título" },
	{ id: "description", title: "Descrição" },
	{ id: "responsible", title: "Responsável", options: options.responsible },
	{ id: "videoConference", title: "Situação" },
	{ id: "customHtml", title: "HTML Customizado" },
	{ id: "access", title: "Acesso", options: options.access },
];

let hideColumns: string[] = ["expirationDate", "status", "responsible", "file", "contentType", "access", "videoConference"];

export const visibilityState: VisibilityState = Object.fromEntries(contentFields.map((key) => [key.id, !hideColumns.includes(key.id)]));
export const facetedFilters: any[] = contentFields.filter((field: any) => field.options);

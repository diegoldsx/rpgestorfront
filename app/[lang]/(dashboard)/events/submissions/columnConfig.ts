import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { Submission } from "@/types/event/submission";
import { FieldConfig } from "@/app/types/FieldConfig";
import { SubmissionSchemaType } from "@/schemas/events/submission";

export const options = {
	status: [
		{ value: "active", label: "Ativo" },
		{ value: "inactive", label: "Inativo" },
	],
};

const fieldTypes: Partial<
	Record<keyof Submission, "text" | "number" | "date" | "select">
> = {
	status: "select",
};

// Configuração dinâmica das colunas
export const columnConfig: FieldConfig<Submission>[] = (
	[
		{ id: "id", title: "ID", defaultValue: undefined },
		{
			id: "packagingName",
			title: "Nome da Embalagem",
			defaultValue: "",
			type: "id",
		},
		{
			id: "strategicPartners",
			title: "Parceiros Estratégicos",
			defaultValue: "",
			type: "text",
		},
		{ id: "area", title: "Área", defaultValue: "" },
		{ id: "authors", title: "Autores", defaultValue: "" },
		{ id: "institution", title: "Instituição", defaultValue: "" },
		{ id: "date", title: "Data", defaultValue: "" },
		{ id: "event", title: "Evento", defaultValue: "" },
		{
			id: "submitedBy",
			title: "Submetido Por",
			defaultValue: "",
			type: "text",
		},
		{
			id: "packageReleaseDate",
			title: "Data de Lançamento do Pacote",
			defaultValue: "",
			type: "text",
		},
		{
			id: "packageDesignAgency",
			title: "Agência de Design do Pacote",
			defaultValue: "",
			type: "text",
		},
		{ id: "status", title: "Status", options: [...options.status] },
		{
			id: "presentationLink",
			title: "Link da Apresentação",
			defaultValue: "",
			type: "text",
		},
		{ id: "comments", title: "Comentários", defaultValue: "" },
		{ id: "number", title: "Número", defaultValue: "" },
		{
			id: "presentationDate",
			title: "Data da Apresentação",
			defaultValue: "",
		},
		{
			id: "roomContent",
			title: "Conteúdo da Sala",
			defaultValue: "",
		},
	] as const
).map((field) => ({
	...field,
	type: fieldTypes[field.id] || "text",
})) as FieldConfig<Submission>[];

export const defaultValues: Partial<SubmissionSchemaType> = columnConfig.reduce(
	(acc, field) => {
		acc[field.id] =
			field.type === "number"
				? String(field.defaultValue) // Converte números para string
				: field.defaultValue;

		return acc;
	},
	{} as Partial<SubmissionSchemaType>
);

export const facetedFilters = columnConfig.filter(({ options }) => !!options);

export const visibleColumns: ReadonlyArray<string> = [
	"packagingName",
	"strategicPartners",
	"area",
	"authors",
	"institution",
	"date",
	"event",
	"submitedBy",
	"packageReleaseDate",
	"packageDesignAgency",
	"status",
	"presentationLink",
	"presentationDate",
];
export const visibilityState: VisibilityState = Object.fromEntries(
	columnConfig.map(({ id }) => [
		id,
		visibleColumns.includes(id) || visibleColumns[0] === "*",
	])
);

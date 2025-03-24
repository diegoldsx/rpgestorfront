import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { Submission } from "@/types/event/submission";
import { FieldConfig } from "@/app/types/FieldConfig";
import { SubmissionSchemaType } from "@/schemas/events/submission";
import { ProvisionSchemaType } from "@/schemas/finance/provision";
import { Provision } from "@/types/finance/provision";

export const options = {
	status: [
		{ value: "active", label: "Ativo" },
		{ value: "inactive", label: "Inativo" },
	],
};

const fieldTypes: Partial<
	Record<keyof Provision, "text" | "number" | "date" | "select">
> = {
	status: "select",
};

// Configuração dinâmica das colunas
export const columnConfig: FieldConfig<ProvisionSchemaType>[] = [
	{ id: "id", title: "ID", defaultValue: "" },
	{ id: "ammount", title: "Quantia", defaultValue: "" },
	{ id: "description", title: "Descrição", defaultValue: "" },
	{ id: "dueDate", title: "Data de vencimento", defaultValue: "" },
	{ id: "registeredBy", title: "Registrado por", defaultValue: "" },
	{
		id: "status",
		title: "Situação",
		defaultValue: "",
		options: [...options.status],
	},
	{ id: "documentDate", title: "Data documento", defaultValue: "" },
	{ id: "observations", title: "Observações", defaultValue: "" },
	{ id: "type", title: "Tipo", defaultValue: "" },
];

export const defaultValues: Partial<ProvisionSchemaType> = columnConfig.reduce(
	(acc, field) => {
		acc[field.id] =
			field.type === "number"
				? String(field.defaultValue) // Converte números para string
				: field.defaultValue;

		return acc;
	},
	{} as Partial<ProvisionSchemaType>
);

export const facetedFilters = columnConfig.filter(({ options }) => !!options);

export const visibleColumns: ReadonlyArray<string> = ["*"];
export const visibilityState: VisibilityState = Object.fromEntries(
	columnConfig.map(({ id }) => [
		id,
		visibleColumns.includes(id) || visibleColumns[0] === "*",
	])
);

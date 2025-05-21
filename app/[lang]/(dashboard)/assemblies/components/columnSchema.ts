import { VisibilityState } from "@tanstack/react-table";
import { AssemblyType } from "@/types/Assembly";
import { Column, createColumn } from "@/types/columns/ColumnsDefinition";
import { Status } from "@/types/options";

export const columnSchema: Array<Column<AssemblyType>> = [
	createColumn<AssemblyType>({
		id: "id",
		title: "ID",
		type: "id",
		size: 100,
	}),
	createColumn<AssemblyType>({
		id: "name",
		title: "Nome",
		type: "text",

		size: 600,
	}),
	createColumn<AssemblyType>({
		id: "status",
		title: "Situação",
		type: "badge",
		defaultValue: "active",
		size: 150,
		options: Status,
	}),
	createColumn<AssemblyType>({
		id: "startDate",
		title: "Data de início",
		type: "date",


		size: 180,
	}),
	createColumn<AssemblyType>({
		id: "endDate",
		title: "Data fim",
		type: "date",

		size: 180,
	}),
	createColumn<AssemblyType>({
		id: "resultDate",
		title: "Data resultado",
		type: "date",

		size: 180,
	}),
	createColumn<AssemblyType>({
		id: "description",
		title: "Descrição",
		type: "textarea",

		size: 200,
	}),
	createColumn<AssemblyType>({
		id: "type",
		title: "Tipo",
		type: "text",

		size: 200,
	}),
	createColumn<AssemblyType>({
		id: "allowChangeVote",
		title: "Permite mudar voto",
		type: "checkbox",

		size: 300,
	}),
	createColumn<AssemblyType>({
		id: "displayMode",
		title: "Modo exibição",
		type: "text",

		size: 200,
	}),
	createColumn<AssemblyType>({
		id: "videoConference",
		title: "Conferência de vídeo",
		type: "checkbox",

		size: 220,
	}),
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

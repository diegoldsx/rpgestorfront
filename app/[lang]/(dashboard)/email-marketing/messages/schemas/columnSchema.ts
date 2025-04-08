import { VisibilityState } from "@tanstack/react-table";
import { MessageSchemaType } from "./schema";
import { ColumnSchema } from "@/types/columns/ColumnsDefinition";

export const columnSchema: Array<ColumnSchema<MessageSchemaType>> = [
	{
		id: "id",
		title: "ID",
		type: "id",
		defaultValue: "",
		isVisible: true,
		size: 100,
	},
	{
		id: "subject",
		title: "Assunto",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 600,
	},
	{
		id: "message",
		title: "Mensagem",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 600,
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

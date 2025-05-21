import { Column } from "@/types/columns/ColumnsDefinition";
import { VisibilityState } from "@tanstack/react-table";
import { CategoryType } from "@/types/Category";
import { createColumn } from "@/types/columns/ColumnsDefinition";
import { Status } from "@/types/options";

export const columnSchema: Array<Column<CategoryType>> = [
	createColumn<CategoryType>({
		id: "id",
		title: "ID",
		type: "id",
		size: 100,
	}),
	createColumn<CategoryType>({
		id: "name",
		title: "Nome",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<CategoryType>({
		id: "status",
		title: "Status",
		type: "select",
		options: Status,
		size: 100,
	})
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

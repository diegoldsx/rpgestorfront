import { ColumnSchema } from "@/types/columns/ColumnsDefinition";
import { Category } from "./types";

export const columnsDefinition: ColumnSchema<Category>[] = [
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
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 600,
	},
] as const;

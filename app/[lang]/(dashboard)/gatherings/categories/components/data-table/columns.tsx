import { getOptionsById } from "@/app/types/FieldConfig";
import Cell from "./cell";
import { ColumnDef } from "@tanstack/react-table";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import { categoryConfig, Category } from "../../types/Category";

export const columns: ColumnDef<Category>[] = categoryConfig.map((field) => ({
	id: field.id,
	accessorKey: field.id,
	header: field.title,
	fnFilter: exactFilter,
	enableColumnFilter: true,
	cell: (info) => {
		if (field.type === "select") {
			const options = getOptionsById(categoryConfig, field.id);
			const label = options?.find(
				(option) => option.value === info.getValue()
			)?.label;
			return <Cell>{label}</Cell>;
		}

		return <Cell>{info.getValue() as string}</Cell>;
	},
}));

export const getVisibilityState = (visibleColumnIds: string[]) =>
	Object.fromEntries(
		categoryConfig.map((key) => [key.id, visibleColumnIds.includes(key.id)])
	);

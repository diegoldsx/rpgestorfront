import { getFieldsWithOptions, getOptionsById } from "@/app/types/FieldConfig";
import { config, Gathering } from "../../types/Gathering";
import Cell from "./cell";
import { ColumnDef } from "@tanstack/react-table";
import { exactFilter } from "@/components/common/data-table/columnUtils";

export const columns: ColumnDef<Gathering>[] = config.map((field) => ({
	id: field.id,
	accessorKey: field.id,
	header: field.title,
	fnFilter: exactFilter,
	enableColumnFilter: true,
	cell: (info) => {
		if (field.type === "select") {
			const options = getOptionsById(config, field.id);
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
		config.map((key) => [key.id, visibleColumnIds.includes(key.id)])
	);

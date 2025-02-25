import { getOptionsById } from "@/app/types/FieldConfig";
import { ColumnDef } from "@tanstack/react-table";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import Cell from "@/app/types/Cell";
import { Assembly, assemblyConfig } from "./Assembly";

export const columns: ColumnDef<Assembly>[] = assemblyConfig.map((field) => ({
	id: field.id,
	accessorKey: field.id,
	header: field.title,
	filterFn: exactFilter,
	enableColumnFilter: true,
	cell: (info) => {
		if (field.type === "select") {
			const options = getOptionsById(assemblyConfig, field.id);
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
		assemblyConfig.map((key) => [key.id, visibleColumnIds.includes(key.id)])
	);

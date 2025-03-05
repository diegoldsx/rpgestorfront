import { ColumnDef } from "@tanstack/react-table";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import Cell from "@/app/types/Cell";
import { Group } from "./types/group";
import { fields } from "./config/fields";

export const columns: ColumnDef<Group>[] = fields.map((field) => ({
	id: field.id,
	accessorKey: field.id,
	header: field.title,
	filterFn: exactFilter,
	cell: (info) => {
		const value = info.getValue() as string;
		if (field.options) {
			const option = field.options.find((option) => option.value === value);

			return (
				<Cell>
					<span>{option?.label}</span>
				</Cell>
			);
		}

		return <Cell>{value}</Cell>;
	},
}));

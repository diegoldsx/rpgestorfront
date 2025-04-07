import { ColumnDef } from "@tanstack/react-table";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import Cell from "@/app/types/Cell";
import { Content, contentFields } from "./Content";
export const columns: ColumnDef<Content>[] = contentFields.map((field) => ({
	id: field.id,
	accessorKey: field.id,
	header: field.title,
	filterFn: exactFilter,
	enableColumnFilter: true,
	cell: (info) => {
		const value = info.getValue() as string;
		if (field.options) {
			const option = field.options.find((option) => option.value === value);

			if (field.id === "status") {
				console.log(option?.label);
			}
			return (
				<Cell>
					<span>{option?.label}</span>
				</Cell>
			);
		}

		return <Cell>{value}</Cell>;
	},
}));

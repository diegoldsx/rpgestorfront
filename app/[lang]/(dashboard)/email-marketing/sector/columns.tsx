import { CellContext, ColumnDef, RowData } from "@tanstack/react-table";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import Cell from "@/app/types/Cell";
import { Sector } from "./types/sector";
import { fields } from "./config/fields";
import { SectorType } from "@/types/Sector";
import Link from "next/link";
import { DataTableRowActions } from "@/components/common/data-table/table-row-actions";

const cols: ColumnDef<Sector>[] = fields.map((field) => ({
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
const ActionsColumn: ColumnDef<any> = {
	id: "actions",
	header: "Actions",
	size: 150,
	cell: ({ row }): RowData => <DataTableRowActions href={`sector/details-page?id=`} row={row} />,
};

export const columns = [ActionsColumn, ...cols] as ColumnDef<Sector>[];

import { CellContext, ColumnDef, RowData } from "@tanstack/react-table";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import Cell from "@/app/types/Cell";
import { Message } from "./types/message";
import { fields } from "./config/fields";
import { EmailType } from "@/types/Email";
import Link from "next/link";
import { DataTableRowActions } from "@/components/common/data-table/table-row-actions";

const columns: ColumnDef<Message>[] = fields.map((field) => ({
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
	cell: ({ row }): RowData => <DataTableRowActions href={`emails/details-page?id=`} row={row} />,
};

export default [ActionsColumn, ...columns] as ColumnDef<Message>[];

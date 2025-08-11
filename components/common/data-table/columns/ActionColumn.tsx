import { ColumnDef } from "@tanstack/react-table";
import ActionsCell from "./ActionCell";

export const ActionColumn = <T extends { id: string | number }>(): ColumnDef<T> => ({
	id: "actions",
	header: "Actions",
	size: 150,
	enableSorting: false,
	enableColumnFilter: false,
	cell: ({ row, table }) => {
		const meta = table.options.meta as { editUrl?: string } | undefined;
		const base = meta?.editUrl ?? "/details-page";
		return <ActionsCell row={row} editUrl={base} label="Edit" />;
	},
});

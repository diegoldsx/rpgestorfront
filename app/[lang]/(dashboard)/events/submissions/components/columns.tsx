"use client";

import { CellContext, ColumnDef, RowData } from "@tanstack/react-table";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import { columnSchema } from "./columnSchema";
import Link from "next/link";
import DataCell from "@/components/common/data-table/columns/DataCell";
import ActionsCell from "@/components/common/data-table/columns/ActionCell";
import { SubmissionType } from "@/types/Submission";
import { moduleLabels } from "../page";
import { DataTableRowActions } from "@/components/common/data-table/table-row-actions";

const ActionsColumn: ColumnDef<any> = {
	id: "actions",
	header: "Actions",
	size: 150,
	cell: ({ row }): RowData => <DataTableRowActions href={`submissions/details-page?id=`} row={row} />,
};

export const columns: ColumnDef<SubmissionType>[] = [
	ActionsColumn,
	{
		id: "actions",
		header: "Actions",
		size: 150,
		cell: ({ row }: CellContext<SubmissionType, unknown>) => (
			<Link href={`submissions/details-page?id=${row.original.id}`}>Edit </Link>
		),
	},
	...columnSchema
		.filter((item) => item.isVisible !== false)
		.map(({ id, title, options, type, size = 0 }) => ({
			id,
			accessorKey: id,
			header: title,
			filterFn: exactFilter,
			size: size,
			cell: (props: { getValue: () => any }) => <DataCell getValue={props.getValue} type={type} options={options} />,
		})),
];

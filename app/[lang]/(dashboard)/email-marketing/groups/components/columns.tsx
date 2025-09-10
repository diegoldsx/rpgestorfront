"use client";

import { ColumnDef, RowData } from "@tanstack/react-table";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import { columnSchema } from "../schemas/columnSchema";
import Link from "next/link";
import { GroupSchemaType } from "../schemas/schema";
import DataCell from "@/components/common/data-table/columns/DataCell";
import ActionsCell from "@/components/common/data-table/columns/ActionCell";
import { Input } from "@/components/ui/input";
import { DataTableRowActions } from "@/components/common/data-table/table-row-actions";

const editUrl = "groups/details-page?id=";

export const columns: ColumnDef<GroupSchemaType>[] = [
	{
		id: "actions",
		header: "Actions",
		size: 150,
		cell: ({ row }): RowData => <DataTableRowActions href={`groups/details-page?id=`} row={row} />,
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

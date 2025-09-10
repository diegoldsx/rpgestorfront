"use client";

import { ColumnDef, RowData } from "@tanstack/react-table";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import { columnSchema } from "../schemas/columnSchema";
import Link from "next/link";
import { ContentTypeSchemaType } from "../schemas/schema";
import DataCell from "@/components/common/data-table/columns/DataCell";
import { DataTableRowActions } from "@/components/common/data-table/table-row-actions";

const editUrl = "content-type/details-page?id=";

const ActionsColumn: ColumnDef<any> = {
	id: "actions",
	header: "Actions",
	size: 150,
	cell: ({ row }): RowData => <DataTableRowActions href={`content-type/details-page?id=`} row={row} />,
};

export const columns: ColumnDef<ContentTypeSchemaType>[] = [
	ActionsColumn,
	{
		id: "actions",
		header: "Actions",
		size: 150,
		cell: ({ row }) => <Link href={`${editUrl}${row.original.id}`}>Editar</Link>,
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

"use client";

import { ColumnDef } from "@tanstack/react-table";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import { columnSchema } from "../schemas/columnSchema";
import Link from "next/link";
import { CategorySchemaType } from "../schemas/schema";
import DataCell from "@/components/common/data-table/columns/DataCell";
import ActionsCell from "@/components/common/data-table/columns/ActionCell";
import { Input } from "@/components/ui/input";

const editUrl = "categories/details-page";

export const columns: ColumnDef<CategorySchemaType>[] = [
	...columnSchema
		.filter((item) => item.isVisible !== false)
		.map(({ id, title, options, type, size = 0 }) => ({
			id,
			accessorKey: id,
			header: title,
			filterFn: exactFilter,
			size: size,
			cell: (props: { getValue: () => any }) => (
				<DataCell getValue={props.getValue} type={type} options={options} />
			),
		})),
	{
		id: "actions",
		header: "Actions",
		size: 150,
		cell: ({ row }) => (
			<Link href={editUrl}>
				<ActionsCell row={row} editUrl={editUrl} label="Edit" />
			</Link>
		),
	},
];

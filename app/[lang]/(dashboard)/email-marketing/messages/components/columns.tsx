"use client";

import { ColumnDef } from "@tanstack/react-table";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import { columnSchema } from "../schemas/columnSchema";
import Link from "next/link";
import { MessageSchemaType } from "../schemas/schema";
import DataCell from "@/components/common/data-table/columns/DataCell";
import ActionsCell from "@/components/common/data-table/columns/ActionCell";
import { Input } from "@/components/ui/input";

const editUrl = "messages/details?id=";

export const columns: ColumnDef<MessageSchemaType>[] = [
	{
		id: "actions",
		header: "Actions",
		accessorFn: () => {},
		size: 150,
		cell: ({ row }) => <Link href={editUrl + row.original.id}>Editar </Link>,
	} as ColumnDef<MessageSchemaType>,
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

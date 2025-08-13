"use client";

import { CellContext, ColumnDef } from "@tanstack/react-table";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import { columnSchema } from "./columnSchema";
import Link from "next/link";
import DataCell from "@/components/common/data-table/columns/DataCell";
import ActionsCell from "@/components/common/data-table/columns/ActionCell";
import { Input } from "@/components/ui/input";
import { CourseType } from "@/types/Course";

export const columns: ColumnDef<CourseType>[] = [
	{
		id: "actions",
		header: "Actions",
		size: 150,
		cell: ({ row }: CellContext<CourseType, unknown>) => (
			<Link href={`courses/details-page?id=${row.original.id}`}>Edit </Link>
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

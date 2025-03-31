"use client";
import Cell from "@/app/types/Cell";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import { fieldsMetadata } from "../types/fieldsMetadata";
import { ServiceDeskSchemaType } from "../types/schema";

const editUrl = "service-desk/details";

export const columns: ColumnDef<ServiceDeskSchemaType>[] = [
	...fieldsMetadata
		.filter((item) => item.isVisible !== false)
		.map(({ id, title, options }) => ({
			id,
			accessorKey: id,
			header: title,
			filterFn: exactFilter,
			cell: (info: any) => {
				const value = info.getValue() as string;

				if (options) {
					const option = options.find((opt) => opt.value === value);
					return (
						<Cell>
							<span>{option?.label ?? value}</span>
						</Cell>
					);
				}
				return <Cell>{value}</Cell>;
			},
		})),
	{
		id: "actions",
		header: "Actions",
		size: 150,
		cell: ({ row }) => (
			<Cell>
				<Link
					className="text-primary hover:text-primary/80"
					href={`${editUrl}?id=${row.original.id}`}
				>
					Edit
				</Link>
			</Cell>
		),
	},
];

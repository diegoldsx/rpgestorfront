"use client";
import { ColumnDef } from "@tanstack/react-table";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import Cell from "@/app/types/Cell";
import { columnConfig } from "./columnHelper";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useParams } from "next/navigation";

import { Transfer } from "@/types/finance/transfer";

const editUrl = "pt/finance/connection/remittances/details";

export const columns: ColumnDef<Transfer>[] = [
	...columnConfig.map((field) => ({
		id: field.id,
		accessorKey: field.id,
		header: field.title,
		filterFn: exactFilter,
		cell: (info: any) => {
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
	})),
	{
		id: "actions",
		header: "Ações",
		cell: ({ row }) => {
			const id = row.original.id;
			const params = useParams();
			return (
				<Cell className="flex gap-2">
					<Link href={`/${editUrl}?id=${id}`}>
						<Icon icon="heroicons:pencil-square" className="w-5 h-5" />
					</Link>
				</Cell>
			);
		},
		size: 150,
	},
];

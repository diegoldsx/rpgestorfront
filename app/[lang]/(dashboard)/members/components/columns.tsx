// Updated content with references to Member
// Original content from assemblies/components/columns.tsx

"use client";
import { ColumnDef } from "@tanstack/react-table";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import Cell from "@/app/types/Cell";
import { columnConfig } from "./columnHelper";
import { Badge } from "@/components/ui/badge";
import { BadgeStatus, getBadgeStatus } from "@/components/badge/badgeStatus";
import { Member } from "@/types/member";
import Link from "next/link";

const editUrl = "members/details";

export const columns: ColumnDef<Member>[] = [
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

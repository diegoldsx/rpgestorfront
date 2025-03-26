"use client";
import { ColumnDef } from "@tanstack/react-table";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import Cell from "@/app/types/Cell";
import { columnConfig } from "./columnHelper";
import { Badge } from "@/components/ui/badge";
import { BadgeStatus, getBadgeStatus } from "@/components/badge/badgeStatus";
import { Assembly } from "@/types/assembly/assembly";
import Link from "next/link";

const editUrl = "assemblies/details";

export const columns: ColumnDef<Assembly>[] = [
	...columnConfig.map((field) => ({
		id: field.id,
		accessorKey: field.id,
		header: field.title,
		filterFn: exactFilter,
		cell: (info: any) => {
			const value = info.getValue() as string;

			if (field.id === "status" && field.options) {
				const option = field.options.find((option) => option.value === value);
				const badgeStyle = getBadgeStatus(option?.value as BadgeStatus);

				return (
					<Cell>
						<Badge color={badgeStyle}>{option?.label}</Badge>
					</Cell>
				);
			}

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

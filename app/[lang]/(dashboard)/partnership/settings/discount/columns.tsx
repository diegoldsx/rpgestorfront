"use client";
import { ColumnDef } from "@tanstack/react-table";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import Cell from "@/app/types/Cell";
import { columnConfig } from "./columnConfig";
import { Badge } from "@/components/ui/badge";
import { BadgeStatus, getBadgeStatus } from "@/components/badge/badgeStatus";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useParams } from "next/navigation";
import { Discount } from "@/types/partnership/discount";

const editUrl = "partnership/settings/discount/form";

export const columns: ColumnDef<Discount>[] = [
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

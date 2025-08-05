"use client";

import { ColumnDef } from "@tanstack/react-table";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import { columnSchema } from "./columnSchema";
import DataCell from "@/components/common/data-table/columns/DataCell";
import ActionsCell from "@/components/common/data-table/columns/ActionCell";
import { MemberType } from "@/types/Member";

const editUrl = "members/details-page";

function getNestedValue(obj: unknown, path: string): unknown {
	return path.split(".").reduce((acc, key) => {
		if (typeof acc === "object" && acc !== null && key in acc) {
			return (acc as Record<string, unknown>)[key];
		}
		return undefined;
	}, obj);
}

export const columns: ColumnDef<MemberType>[] = [
	...columnSchema
		.filter((item) => item.isVisible !== false)
		.map(({ id, title, options, type, size = 0 }) => ({
			id,
			accessorFn: (row: MemberType) => getNestedValue(row, id as string),
			header: title,
			filterFn: exactFilter,
			size,
			cell: (props: any) => (
				<DataCell
					getValue={() => props.getValue() as string | number | boolean | undefined}
					type={type}
					options={options}
				/>
			),
		})),
	{
		id: "actions",
		header: "Actions",
		size: 150,
		cell: ({ row }) => <ActionsCell row={row} editUrl={editUrl} label="Edit" />,
	},
];

"use client";

import Link from "next/link";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import DataCell from "@/components/common/data-table/columns/DataCell";
import ActionsCell from "@/components/common/data-table/columns/ActionCell";
import { Category } from "./types";
import { columnsDefinition } from "./columns-definition";
import { exactFilter } from "@/components/common/data-table/columnUtils";

const editUrl = "categories/details-page";

export const columns: ColumnDef<Category>[] = [
	...columnsDefinition
		.filter((item) => item.isVisible !== false)
		.map(({ id, title, options, type, size = 0 }) => ({
			id,
			accessorKey: id,
			header: title,
			filterFn: exactFilter,
			size,
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

export function getVisibilityState(
	visibilityArray: string[] = ["*"]
): VisibilityState {
	return Object.fromEntries(
		columnsDefinition
			.filter(({ id }) => id !== undefined)
			.map(({ id }) => [
				id as string,
				visibilityArray.includes("*") || visibilityArray.includes(id as string),
			])
	);
}

export function getFieldsWithOptions() {
	return columnsDefinition.filter(({ options }) => !!options);
}
export const defaultValues: Record<string, any> = columnsDefinition.reduce(
	(acc, { id, defaultValue, options }) => {
		acc[id] = options?.length ? options[0].value : (defaultValue ?? "");
		return acc;
	},
	{} as Record<string, any>
);

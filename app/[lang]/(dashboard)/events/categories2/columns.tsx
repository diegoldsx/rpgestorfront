"use client";

import Link from "next/link";
import DataCell from "@/components/common/data-table/columns/DataCell";
import ActionsCell from "@/components/common/data-table/columns/ActionCell";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { Category } from "./types";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import { ColumnSchema } from "@/types/columns/ColumnsDefinition";
import { DefaultValues } from "react-hook-form";
import { pageStrings } from "./labels";


export const fieldsProps: ColumnSchema<Category>[] = [
	{
		id: "name",
		title: "Nome",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 600,
	},
	{
		id: "status",
		title: "Situação",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 600,
	},
] as const;


function renderTableColumns(cols: ColumnSchema<Category>[]) {

	return [...cols.filter((item) => item.isVisible !== false).map(({ id, title, options, type, size = 0 }) => ({
		id,
		accessorKey: id,
		header: title,
		filterFn: exactFilter,
		size,
		cell: (props: { getValue: () => any }) => (
			<DataCell getValue={props.getValue} type={type} options={options} />
		),
	})),]
}


export const dataTableColumns: ColumnDef<Category>[] = [
	{
		id: "id",
		header: "ID",
		size: 100,
		cell: (props: { getValue: () => any }) => (
			<DataCell getValue={props.getValue} type={"id"} />
		),
	},
	...renderTableColumns(fieldsProps),
	{
		id: "actions",
		header: "Actions",
		size: 150,
		cell: ({ row }: any) => (
			<Link href={pageStrings.href}>
				<ActionsCell row={row} editUrl={pageStrings.href} label="Edit" />
			</Link>
		),
	},
];

export const getDefaultValues = () => fieldsProps.map(prop => ({ id: prop.id, value: prop.defaultValue })) as DefaultValues<Category>
export const getFieldsWithOptions = () => fieldsProps.filter(({ options }) => !!options)
export const getVisibilityState = () => fieldsProps.reduce((acc, { id, isVisible }) => {
	acc[id] = isVisible ?? true
	return acc
}, {} as VisibilityState)



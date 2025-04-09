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

const fieldsProps: ColumnSchema<Category>[] = [
	{
		id: "id",
		title: "ID",
		type: "id",
		defaultValue: "",
		isVisible: true,
		size: 100,
	},
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

const useTableColumns = (cols: ColumnSchema<Category>[]) => {
	return cols.filter((item) => item.isVisible !== false).map(({ id, title, options, type, size = 0 }) => ({
		id,
		accessorKey: id,
		header: title,
		filterFn: exactFilter,
		size,
		cell: (props: { getValue: () => any }) => (
			<DataCell getValue={props.getValue} type={type} options={options} />
		),
	}));
};

const columns: ColumnDef<Category>[] = [

	...useTableColumns(fieldsProps),
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

const visibilityState = fieldsProps.reduce((acc, { id, isVisible }) => {
	acc[id] = isVisible ?? true;
	return acc;
}, {} as VisibilityState);
const defaultValues = fieldsProps.map(prop => ({ id: prop.id, value: prop.defaultValue })) as DefaultValues<Category>;
const fieldsWithOptions = fieldsProps.filter(({ options }) => !!options);


export {
	columns, fieldsProps, visibilityState, defaultValues, fieldsWithOptions
}

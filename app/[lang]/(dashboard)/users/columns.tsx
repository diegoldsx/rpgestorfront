"use client";

import Link from "next/link";
import DataCell from "@/components/common/data-table/columns/DataCell";
import ActionsCell from "@/components/common/data-table/columns/ActionCell";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { User } from "./types";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import { ColumnSchema } from "@/types/columns/ColumnsDefinition";
import { DefaultValues } from "react-hook-form";
import { pageStrings } from "./labels";

const fieldsProps: ColumnSchema<User>[] = [
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
	{
		id: "email",
		title: "Email",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 600,
	},
	{
		id: "password",
		title: "Senha",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 600,
	},
	{
		id: "username",
		title: "username",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 600,
	},
	{
		id: "resetToken",
		title: "token",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 600,
	},
	{
		id: "resetTokenExpiry",
		title: "token",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 600,
	},
	{
		id: "resetToken",
		title: "token",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 600,
	},
] as const;

// id: "1",
// 	name: "RPGestor",
// 	image: avatar3,
// 	password: "senha123",
// 	status: "active",
// 	username: "Gestor123",
// 	email: "admin@rpgestor.com.br",
// 	resetToken: null,
// 	resetTokenExpiry: null,
// 	profile: null,

const useTableColumns = (cols: ColumnSchema<User>[]) => {
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

const columns: ColumnDef<User>[] = [

	...useTableColumns(fieldsProps),
	{
		id: "actions",
		header: "Actions",
		size: 150,
		cell: ({ row }: any) => (

			<ActionsCell row={row} editUrl={pageStrings.details} label="Edit" />

		),
	},
];

const visibilityState = fieldsProps.reduce((acc, { id, isVisible }) => {
	acc[id] = isVisible ?? true;
	return acc;
}, {} as VisibilityState);
const defaultValues = fieldsProps.map(prop => ({ id: prop.id, value: prop.defaultValue })) as DefaultValues<User>;
const fieldsWithOptions = fieldsProps.filter(({ options }) => !!options);


export {
	columns, fieldsProps, visibilityState, defaultValues, fieldsWithOptions
}

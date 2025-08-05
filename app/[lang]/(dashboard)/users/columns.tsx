"use client";

import DataCell from "@/components/common/data-table/columns/DataCell";
import ActionsCell from "@/components/common/data-table/columns/ActionCell";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { User } from "./types";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import { Column, ColumnSchema } from "@/types/columns/ColumnsDefinition";
import { DefaultValues } from "react-hook-form";
import { pageStrings } from "./labels";

const fieldsProps: Column<User>[] = [
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

const columns: ColumnDef<User>[] = [
	{
		id: "actions",
		header: "Actions",
		size: 150,
		cell: ({ row }: any) => <ActionsCell row={row} editUrl={pageStrings.details} label="Edit" />,
	},
];

const defaultValues = fieldsProps.map((prop) => ({ id: prop.id, value: prop.defaultValue })) as DefaultValues<User>;
const fieldsWithOptions = fieldsProps.filter(({ options }) => !!options);

export { columns, fieldsProps, defaultValues, fieldsWithOptions };

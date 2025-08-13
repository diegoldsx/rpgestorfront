"use client";

import { ColumnDef } from "@tanstack/react-table";
import { User } from "./types";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import { Column, ColumnSchema } from "@/types/columns/ColumnsDefinition";
import { DefaultValues } from "react-hook-form";
import { Option } from "@/types/options/Option";
import { FacetedFilter } from "@/components/common/data-table/data-table";

// Definição das opções de status, de forma reutilizável.
export const userStatusOptions: Option[] = [
	{ value: "active", label: "Ativo" },
	{ value: "inactive", label: "Inativo" },
];

export const columnSchema: Column<User>[] = [
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
		options: userStatusOptions as Option[],
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
		id: "username",
		title: "Username",
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
		isVisible: false, // Alterado para 'false' por segurança
		size: 600,
	},
	{
		id: "resetToken",
		title: "Token de Reset",
		type: "text",
		defaultValue: "",
		isVisible: false, // Alterado para 'false' por segurança
		size: 600,
	},
	{
		id: "resetTokenExpiry",
		title: "Expiração do Token",
		type: "text",
		defaultValue: "",
		isVisible: false, // Alterado para 'false' por segurança
		size: 600,
	},
];

export const defaultValues = columnSchema.reduce((acc, column) => {
	acc[column.id as keyof User] = column.defaultValue;
	return acc;
}, {} as DefaultValues<User>);

export const facetedFilters = columnSchema.filter(({ options }) => !!options) as FacetedFilter[];

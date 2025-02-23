import Cell from "./cell";
import { ColumnDef } from "@tanstack/react-table";
import { Return } from "../../types/Return";

export const columns: ColumnDef<Return>[] = [
	{
		accessorKey: "id",
		header: "ID",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		accessorKey: "account",
		header: "Conta",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		accessorKey: "file",
		header: "Arquivo",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
];

import Cell from "./cell";
import { formatDate } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { Transfer } from "../../types/Transfer";

export const columns: ColumnDef<Transfer>[] = [
	{
		id: "id",
		accessorKey: "id",
		header: "ID",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "origin",
		accessorKey: "origin",
		header: "Origem (a debitar)",
		meta: { type: "select" },
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "destination",
		accessorKey: "destination",
		header: "Destino (a creditar)",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "amount",
		accessorKey: "amount",
		header: "Valor",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "date",
		accessorKey: "date",
		header: "Data",
		cell: (info) => <Cell>{formatDate(info.getValue() as string)}</Cell>,
	},
];

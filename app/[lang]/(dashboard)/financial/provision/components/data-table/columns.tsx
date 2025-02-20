import Cell from "./cell";
import { formatDate } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { Provision } from "../../types/Provision";

export const columns: ColumnDef<Provision>[] = [
	{
		id: "id",
		accessorKey: "id",
		header: "ID",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "documentDate",
		accessorKey: "documentDate",
		header: "Competência",
		cell: (info) => <Cell>{formatDate(info.getValue() as string)}</Cell>,
	},
	{
		id: "dueDate",
		accessorKey: "dueDate",
		header: "Data de vencimento",
		cell: (info) => <Cell>{formatDate(info.getValue() as string)}</Cell>,
	},
	{
		id: "type",
		accessorKey: "type",
		header: "Tipo",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "registeredBy",
		accessorKey: "registeredBy",
		header: "Data de vencimento",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "status",
		accessorKey: "status",
		header: "Situação",
		meta: { type: "select" },
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "description",
		accessorKey: "description",
		header: "Descrição",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "observations",
		accessorKey: "observations",
		header: "Observações",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
];

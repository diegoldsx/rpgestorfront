import Cell from "./cell";
import { ColumnDef } from "@tanstack/react-table";
import { Remittance } from "../../types/Connections";

export const columns: ColumnDef<Remittance>[] = [
	{
		accessorKey: "id",
		header: "ID",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		accessorKey: "bank",
		header: "Banco",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		accessorKey: "search",
		header: "Buscar",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		accessorKey: "searchFor",
		header: "Busca por",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		accessorKey: "amount",
		header: "Valor",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		accessorKey: "startDate",
		header: "Data Início",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		accessorKey: "finalDate",
		header: "Data Fim",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		accessorKey: "dateCategory",
		header: "Tipo de Data",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		accessorKey: "limit",
		header: "Limite",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		accessorKey: "type",
		header: "Tipo",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
];

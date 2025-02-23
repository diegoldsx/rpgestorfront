import Cell from "./cell";
import { ColumnDef } from "@tanstack/react-table";
import { getLabelFromValue, Remittance } from "../../types/Remittance";

export const columns: ColumnDef<Remittance>[] = [
	{
		accessorKey: "id",
		header: "ID",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		accessorKey: "bank",
		header: "Banco",
		cell: (info) => {
			const label = getLabelFromValue("bank", info.getValue() as string);
			return <Cell>{label}</Cell>;
		},
	},
	{
		accessorKey: "searchFor",
		header: "Buscar Por",
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
		cell: (info) => {
			const label = getLabelFromValue(
				"dateCategory",
				info.getValue() as string
			);

			return <Cell>{label}</Cell>;
		},
	},
	{
		accessorKey: "limit",
		header: "Limite",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		accessorKey: "type",
		header: "Tipo",
		cell: (info) => {
			const label = getLabelFromValue("type", info.getValue() as string);
			return <Cell>{label}</Cell>;
		},
	},
];

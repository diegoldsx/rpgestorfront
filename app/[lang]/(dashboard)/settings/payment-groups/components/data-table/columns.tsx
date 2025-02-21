import Cell from "./cell";
import { ColumnDef } from "@tanstack/react-table";
import { PaymentGroup, getOptions } from "../../types/PaymentGroup";
import { exactFilter } from "@/components/common/data-table/columnUtils";

export const columns: ColumnDef<PaymentGroup>[] = [
	{
		id: "id",
		accessorKey: "id",
		header: "ID",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "name",
		accessorKey: "name",
		header: "Nome",
		meta: { type: "text" },
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "defaultAmount",
		accessorKey: "defaultAmount",
		header: "Valor Padrão",
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "emailModel",
		accessorKey: "emailModel",
		header: "Modelo de Email",
		cell: (info) => {
			const options = getOptions("emailModel");

			const label = options?.find((op) => op.value === info.getValue())?.label;

			return <Cell>{label}</Cell>;
		},
	},
	{
		id: "cycle",
		accessorKey: "cycle",
		header: "Ciclo",
		cell: (info) => {
			const options = getOptions("emailModel");

			const label = options?.find((op) => op.value === info.getValue())?.label;

			return <Cell>{label}</Cell>;
		},
	},
	{
		id: "status",
		accessorKey: "status",
		header: "Situação",
		filterFn: (row, columnId, filterValue) =>
			exactFilter(row, columnId, filterValue),
		cell: (info) => {
			const options = getOptions("status");

			const label = options?.find((op) => op.value === info.getValue())?.label;

			return <Cell>{label}</Cell>;
		},
	},
];

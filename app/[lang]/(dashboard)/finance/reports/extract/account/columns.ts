import { ColumnDef } from "@tanstack/react-table";
import { AccountReportData } from "./page";
import { formatDate } from "@/lib/utils";

export const reportColumns = [
	{
		accessorKey: "account",
		header: "Conta",
	},
	{
		accessorKey: "paymentMethod",
		header: "Forma de Pagamento",
	},
	{
		accessorKey: "dateType",
		header: "Tipo",
	},
	{
		accessorKey: "status",
		header: "Status",
	},
	{
		accessorKey: "date",
		header: "Data",
		cell: ({ row }: any) => formatDate(row.getValue("date")),
	},
] as ColumnDef<AccountReportData>[];

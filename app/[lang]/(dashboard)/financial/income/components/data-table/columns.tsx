import { createColumnHelper } from "@tanstack/react-table";
import Cell from "./cell";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { Income } from "../../types/Income";

export const columns: ColumnDef<Income>[] = [
	{
		id: "payer",
		accessorKey: "payer",

		header: "Pagador",
		meta: { type: "text" },
		cell: (info) => (
			<Cell className="truncate min">{info.getValue() as string}</Cell>
		),
	},
	{
		id: "competenceDate",
		accessorKey: "competenceDate",
		header: "Competência",
		meta: { type: "date" },
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "dueDate",
		accessorKey: "dueDate",
		header: "Vencimento",
		meta: { type: "date" },
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "account",
		accessorKey: "account",
		header: "Conta",
		meta: { type: "select" },
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "paymentMethod",
		accessorKey: "paymentMethod",
		header: "Forma de Pagamento",
		meta: { type: "select" },
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "costCenter",
		accessorKey: "costCenter",
		header: "Centro de Custo",
		meta: { type: "select" },
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "category",
		accessorKey: "category",
		header: "Categoria",
		meta: { type: "select" },
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "taxApplied",
		accessorKey: "taxApplied",
		header: "Imposto",
		meta: { type: "boolean" },
		cell: (info) => <Cell>{(info.getValue() ? "Sim" : "Não") as string}</Cell>,
	},
	{
		id: "value",
		accessorKey: "value",
		header: "Valor",
		meta: { type: "select" },
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "discountType",
		accessorKey: "discountType",
		header: "Tipo Desconto",
		meta: { type: "select" },
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "discountPercentage",
		accessorKey: "discountPercentage",
		header: "Desconto",
		meta: { type: "number" },
		cell: (info) => <Cell>{info.getValue() + "%"}</Cell>,
	},
	{
		id: "discountExpirationDate",
		accessorKey: "discountExpirationDate",
		header: "Data Limite Desconto",
		meta: { type: "date" },
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "discountDescription",
		accessorKey: "discountDescription",
		header: "Descrição do Desconto",
		meta: { type: "text" },
		cell: (info) => (
			<Cell className="w-[250px] truncate whitespace-nowrap overflow-hidden">
				{info.getValue() as string}
			</Cell>
		),
	},
	{
		id: "observations",
		accessorKey: "observations",
		header: "Observações",
		meta: { type: "text" },
		cell: (info) => (
			<Cell className="w-[250px] truncate whitespace-nowrap overflow-hidden">
				{info.getValue() + ""}
			</Cell>
		),
	},
	{
		id: "status",
		accessorKey: "status",
		header: "Status",
		meta: { type: "select" },
		filterFn: (row, columnId, filterValue) => {
			if (!filterValue) return true;
			const cellValue = row.getValue(columnId);
			return filterValue.includes(cellValue);
		},
		cell: (info) => {
			const values = {
				PENDING: { color: "warning", label: "Pendente" },
				PAID: { color: "success", label: "Pago" },
				CANCELLED: { color: "destructive", label: "Cancelado" },
			} as const;

			const status = info.getValue() as keyof typeof values;

			return (
				<Cell>
					<Badge color={values[status].color}>{values[status].label}</Badge>
				</Cell>
			);
		},
	},
	{
		id: "totalInstallments",
		accessorKey: "totalInstallments",
		header: "Total de Parcelas",
		meta: { type: "number" },
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "installmentType",
		accessorKey: "installmentType",
		header: "Tipo de Parcelamento",
		meta: { type: "select" },
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "invoiceInstructions",
		accessorKey: "invoiceInstructions",
		header: "Instruções do Boleto",
		meta: { type: "text" },
		cell: (info) => (
			<Cell className="max-w-[250px] truncate whitespace-nowrap overflow-hidden">
				{info.getValue() as string}
			</Cell>
		),
	},
	{
		id: "sampleMessage",
		accessorKey: "sampleMessage",
		header: "Mensagem Demonstrativa",
		meta: { type: "text" },
		cell: (info) => (
			<Cell className=" max-w-[250px] truncate whitespace-nowrap overflow-hidden text-ellipsis">
				{info.getValue() + ""}
			</Cell>
		),
	},
];

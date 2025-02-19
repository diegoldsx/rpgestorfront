import { createColumnHelper } from "@tanstack/react-table";
import Cell from "./cell";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { Customer } from "../../types/customer";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<Customer>[] = [
	{
		id: "select",
		enableHiding: false,
		header: ({ table }) => (
			<Checkbox
				checked={table.getIsAllRowsSelected()}
				onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
			/>
		),
	},
	{
		id: "id",
		accessorKey: "id",
		header: "ID",
		meta: { type: "text" },
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
		id: "email",
		accessorKey: "email",
		header: "Email",
		meta: { type: "text" },
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
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
				ATIVO: { color: "success", label: "Ativo" },
				INATIVO: { color: "destructive", label: "Inativo" },
				PENDENTE: { color: "warning", label: "Pendente" },
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
		id: "customerType",
		accessorKey: "customerType",
		header: "Tipo de Conta",
		meta: { type: "select" },
		cell: (info) => (
			<Cell>
				{info.getValue() === "PJ" ? "Pessoa Jurídica" : "Pessoa Física"}
			</Cell>
		),
	},
	{
		id: "cpf",
		accessorKey: "cpf",
		header: "CPF",
		meta: { type: "text" },
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "billingEmail",
		accessorKey: "billingEmail",
		header: "Email de Cobrança",
		meta: { type: "text" },
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "phone",
		accessorKey: "phone",
		header: "Telefone",
		meta: { type: "text" },
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "mobile",
		accessorKey: "mobile",
		header: "Celular",
		meta: { type: "text" },
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},
	{
		id: "registrationDate",
		accessorKey: "registrationDate",
		header: "Data de Registro",
		meta: { type: "date" },
		cell: (info) => (
			<Cell>{new Date(info.getValue() as string).toLocaleDateString()}</Cell>
		),
	},

	{
		id: "code",
		accessorKey: "code",
		header: "Código",
		meta: { type: "text" },
		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
	},

	// Address Fields
	{
		id: "zipCode",
		accessorKey: "address.zipCode",
		header: "CEP",
		meta: { type: "text" },
		cell: (info) => {
			const value = info.getValue() ?? "N/A";
			return <Cell>{value as string}</Cell>;
		},
	},
	{
		id: "street",
		accessorKey: "address.street",
		header: "Rua",
		meta: { type: "text" },
		cell: (info) => {
			const value = info.getValue() ?? "N/A";
			return <Cell>{value as string}</Cell>;
		},
	},
	{
		id: "number",
		accessorKey: "address.number",
		header: "Número",
		meta: { type: "text" },
		cell: (info) => {
			const value = info.getValue() ?? "N/A";
			return <Cell>{value as string}</Cell>;
		},
	},
	{
		id: "neighborhood",
		accessorKey: "address.neighborhood",
		header: "Bairro",
		meta: { type: "text" },
		cell: (info) => {
			const value = info.getValue() ?? "N/A";
			return <Cell>{value as string}</Cell>;
		},
	},
	{
		id: "city",
		accessorKey: "address.city",
		header: "Cidade",
		meta: { type: "text" },
		cell: (info) => {
			const value = info.getValue() ?? "N/A";
			return <Cell>{value as string}</Cell>;
		},
	},
	{
		id: "state",
		accessorKey: "address.state",
		header: "Estado",
		meta: { type: "select" },
		cell: (info) => {
			const value = info.getValue() ?? "N/A";
			return <Cell>{value as string}</Cell>;
		},
	},

	// Company Data
	{
		id: "tradeName",
		accessorKey: "companyData.tradeName",
		header: "Nome Fantasia",
		meta: { type: "text" },
		cell: (info) => {
			const value = info.getValue() ?? "N/A";
			return <Cell>{value as string}</Cell>;
		},
	},
	{
		id: "cnpj",
		accessorKey: "companyData.cnpj",
		header: "CNPJ",
		meta: { type: "text" },
		cell: (info) => {
			const value = info.getValue() ?? "N/A";
			return <Cell>{value as string}</Cell>;
		},
	},

	// Billing Data
	{
		id: "billingName",
		accessorKey: "billingData.name",
		header: "Nome Cobrança",
		meta: { type: "text" },
		cell: (info) => {
			const value = info.getValue() ?? "N/A";
			return <Cell>{value as string}</Cell>;
		},
	},
	{
		id: "billingEmail",
		accessorKey: "billingData.email",
		header: "Email Cobrança",
		meta: { type: "text" },
		cell: (info) => {
			const value = info.getValue() ?? "N/A";
			return <Cell>{value as string}</Cell>;
		},
	},
];

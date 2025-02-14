import { ColumnDef, CellContext } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Member } from "../../types/Member";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icon } from "@iconify/react";

export const financialStatusOptions = [
	{ value: "ativo", label: "Ativo" },
	{ value: "inativo", label: "Inativo" },
	{ value: "pendente", label: "Pendente" },
];

export const paymentGroupOptions = [
	{ value: "Grupo Alfa", label: "Grupo Alfa" },
	{ value: "Grupo Beta", label: "Grupo Beta" },
];

export const billingCycleOptions = [
	{ value: "mensal", label: "Mensal" },
	{ value: "bimestral", label: "Bimestral" },
	{ value: "trimestral", label: "Trimestral" },
	{ value: "anual", label: "Anual" },
];

export const columns: ColumnDef<Member>[] = [
	{
		id: "select",
		enableSorting: false,
		enableColumnFilter: false,
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

		cell: ({ row }: CellContext<Member, any>) => (
			<div className="text-left px-2 py-1">{row.getValue("id")}</div>
		),
	},
	{
		id: "name",
		accessorKey: "name",
		header: "Nome",
		meta: { type: "text" },

		cell: ({ row }: CellContext<Member, any>) => (
			<div className="text-left px-2 py-1 ">{row.getValue("name")}</div>
		),
	},
	{
		id: "email",
		accessorKey: "email",
		header: "Email",
		meta: { type: "text" },

		cell: ({ row }: CellContext<Member, any>) => (
			<div className="text-left px-2 py-1 ">{row.getValue("email")}</div>
		),
	},
	{
		id: "type",
		accessorKey: "type",
		header: "Tipo",
		meta: { type: "select" },

		cell: ({ row }: CellContext<Member, any>) => {
			const type = row.getValue<string>("type");
			return (
				<div className="text-left font-semibold">
					{type === "cpf" ? "CPF" : "CNPJ"}
				</div>
			);
		},
	},
	{
		id: "financialStatus",
		accessorKey: "financialStatus",
		header: "Status Financeiro",
		meta: { type: "select" },

		enableColumnFilter: true,

		filterFn: (row, columnId, filterValue) => {
			if (!filterValue) return true;
			const cellValue = row.getValue(columnId);
			return filterValue.includes(cellValue);
		},
		cell: ({ row }: CellContext<Member, any>) => {
			const status = row.getValue<string>("financialStatus");
			const label = financialStatusOptions.find(
				(op) => op.value === status
			)?.label;
			const statusColors: any = {
				ativo: "success",
				inativo: "destructive",
				pendente: "warning",
			};
			return (
				<div className="flex ">
					<Badge
						color={statusColors[status]}
						className={"p-1 font-semibold text-center rounded-sm w-20 "}
					>
						<span className="w-full">{label}</span>
					</Badge>
				</div>
			);
		},
	},
	{
		id: "billingCycle",
		meta: { type: "select" },

		accessorKey: "billingCycle",
		header: "Ciclo de cobrança",
		enableColumnFilter: true,

		filterFn: (row, columnId, filterValue) => {
			if (!filterValue) return true;
			const cellValue = row.getValue(columnId);
			return filterValue.includes(cellValue);
		},
		cell: ({ row }: CellContext<Member, any>) => (
			<div className="text-left">{row.getValue("billingCycle")}</div>
		),
	},
	{
		id: "paymentGroup",
		meta: { type: "select" },

		accessorKey: "paymentGroup",
		header: "Grupo de Pagamento",
		filterFn: (row, columnId, filterValue) => {
			if (!filterValue) return true;
			const cellValue = row.getValue(columnId);
			return filterValue.includes(cellValue);
		},
		cell: ({ row }: CellContext<Member, any>) => {
			const group = row.getValue<string>("paymentGroup");
			const label = paymentGroupOptions.find((op) => op.value === group)?.label;
			return <div className="text-left">{label}</div>;
		},
	},

	{
		id: "birthDate",
		accessorKey: "birthDate",
		header: "Data de Nascimento",
		meta: { type: "date" },

		enableColumnFilter: false,

		cell: ({ row }: CellContext<Member, any>) => {
			const birthDate = row.getValue<string>("birthDate");
			if (!birthDate) return <div className="text-left">N/A</div>;
			const formattedDate = format(new Date(birthDate), "dd/MM/yyyy");
			return <div className="text-left">{formattedDate}</div>;
		},
	},
	{
		id: "cep",
		accessorKey: "cep",
		header: "CEP",
		meta: { type: "text" },

		enableColumnFilter: true,

		cell: ({ row }: CellContext<Member, any>) => (
			<div className="text-left">{row.getValue("cep")}</div>
		),
	},
	{
		id: "city",
		accessorKey: "city",
		header: "Cidade",
		meta: { type: "text" },

		enableColumnFilter: true,

		cell: ({ row }: CellContext<Member, any>) => (
			<div className="text-left">{row.getValue("city")}</div>
		),
	},
	{
		id: "state",
		accessorKey: "state",
		header: "Estado",
		meta: { type: "text" },

		enableColumnFilter: false,

		cell: ({ row }: CellContext<Member, any>) => (
			<div className="text-left">{row.getValue("state")}</div>
		),
	},
	{
		id: "document",
		accessorKey: "document",
		header: "Documento",
		meta: { type: "text" },

		enableColumnFilter: true,

		cell: ({ row }: CellContext<Member, any>) => (
			<div className="text-left">{row.getValue("document")}</div>
		),
	},

	{
		id: "actions",
		accessorKey: "actions",

		header: () => (
			<div className="sticky left-0 z-10 p-2 font-bold">Actions</div>
		),
		cell: ({ row }) => (
			<div className="sticky left-0  z-10 p-2">
				<div className="flex justify-between">
					<Button size="icon" variant="ghost">
						<Link href={`/members/${row.original.id}`}>
							<Icon icon="heroicons:eye" className="w-5 h-5" />
						</Link>
					</Button>
					<Button size="icon" variant="ghost">
						<Icon icon="heroicons:pencil-square" className="w-5 h-5" />
					</Button>
					<Button size="icon" variant="ghost">
						<Icon icon="heroicons:currency-dollar" className="w-5 h-5" />
					</Button>
				</div>
			</div>
		),
	},
];

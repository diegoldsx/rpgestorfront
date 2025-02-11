import { ColumnDef, CellContext } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Member } from "../../types/Member";

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

export const columns: ColumnDef<Member, any>[] = [
	{
		id: "id",
		accessorKey: "id",
		header: "Id",
		enableColumnFilter: true,
		cell: ({ row }: CellContext<Member, any>) => (
			<div className="text-left px-2 py-1">{row.getValue("id")}</div>
		),
	},
	{
		id: "name",
		accessorKey: "name",
		header: "Nome",
		enableColumnFilter: true,

		cell: ({ row }: CellContext<Member, any>) => (
			<div className="text-left px-2 py-1">{row.getValue("name")}</div>
		),
	},
	{
		id: "type",
		accessorKey: "type",
		header: "Tipo",
		enableColumnFilter: true,

		cell: ({ row }: CellContext<Member, any>) => {
			const type = row.getValue<string>("type");
			return <div className="text-left">{type === "cpf" ? "CPF" : "CNPJ"}</div>;
		},
	},
	{
		id: "financialStatus",
		accessorKey: "financialStatus",
		header: "Status Financeiro",
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
			const statusColors: Record<string, string> = {
				ativo: "bg-green-500 text-white",
				inativo: "bg-red-500 text-white",
				pendente: "bg-orange-500 text-white",
			};
			return (
				<div className="text-left">
					<Badge
						className={`px-2 py-1 rounded ${
							statusColors[status] || "bg-gray-500 text-white"
						}`}
					>
						{label}
					</Badge>
				</div>
			);
		},
	},
	{
		id: "corporateName",
		accessorKey: "corporateName",
		header: "Empresa",
		enableColumnFilter: true,

		cell: ({ row }: CellContext<Member, any>) => (
			<div className="text-left">{row.getValue("corporateName")}</div>
		),
	},
	{
		id: "billingCycle",
		accessorKey: "billingCycle",
		header: "Ciclo de Faturamento",

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
		id: "billingCycle",
		accessorKey: "billingCycle",
		header: "Ciclo de Faturamento",
		filterFn: (row, columnId, filterValue) => {
			if (!filterValue) return true;
			const cellValue = row.getValue(columnId);
			return filterValue.includes(cellValue);
		},
		cell: ({ row }: CellContext<Member, any>) => {
			const cycle = row.getValue<string>("billingCycle");
			const label = billingCycleOptions.find((op) => op.value === cycle)?.label;
			return <div className="text-left">{label}</div>;
		},
	},
	{
		id: "birthDate",
		accessorKey: "birthDate",
		header: "Data de Nascimento",
		enableColumnFilter: true,

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
		enableColumnFilter: true,

		cell: ({ row }: CellContext<Member, any>) => (
			<div className="text-left">{row.getValue("cep")}</div>
		),
	},
	{
		id: "city",
		accessorKey: "city",
		header: "Cidade",
		enableColumnFilter: true,

		cell: ({ row }: CellContext<Member, any>) => (
			<div className="text-left">{row.getValue("city")}</div>
		),
	},
	{
		id: "state",
		accessorKey: "state",
		header: "Estado",
		enableColumnFilter: true,

		cell: ({ row }: CellContext<Member, any>) => (
			<div className="text-left">{row.getValue("state")}</div>
		),
	},
	{
		id: "document",
		accessorKey: "document",
		header: "Documento",
		enableColumnFilter: true,

		cell: ({ row }: CellContext<Member, any>) => (
			<div className="text-left">{row.getValue("document")}</div>
		),
	},
];

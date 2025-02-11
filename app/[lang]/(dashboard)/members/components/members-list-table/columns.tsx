import { ColumnDef, CellContext } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Member } from "../../types/Member";

export const financialStatusOptions = [
	{ value: "ativo", label: "Ativo" },
	{ value: "inativo", label: "Inativo" },
	{ value: "pendente", label: "Pendente" },
];

export const columns: ColumnDef<Member, any>[] = [
	{
		id: "id",
		accessorKey: "id",
		header: "ID",
		cell: ({ row }: CellContext<Member, any>) => <p>{row.getValue("id")}</p>,
	},
	{
		id: "type",
		accessorKey: "type",
		header: "Tipo",
		cell: ({ row }: CellContext<Member, any>) => {
			const type = row.getValue<string>("type");
			return <span>{type === "cpf" ? "CPF" : "CNPJ"}</span>;
		},
	},
	{
		id: "financialStatus",
		accessorKey: "financialStatus",
		header: "Status Financeiro",
		cell: ({ row }: CellContext<Member, any>) => {
			const status = row.getValue<string>("financialStatus") as string;
			const label = financialStatusOptions.find(
				(op) => op.value === status
			)?.label;
			const statusColors: Record<string, string> = {
				ativo: "bg-green-500 text-white",
				inativo: "bg-red-500 text-white",
				pendente: "bg-orange-500 text-white",
			};
			return (
				<Badge
					className={`px-2 py-1 rounded ${
						statusColors[status] || "bg-gray-500 text-white"
					}`}
				>
					{label}
				</Badge>
			);
		},
	},
	{
		id: "billingCycle",
		accessorKey: "billingCycle",
		header: "Ciclo de Faturamento",
		cell: ({ row }: CellContext<Member, any>) => (
			<p>{row.getValue("billingCycle")}</p>
		),
	},
	{
		id: "paymentGroup",
		accessorKey: "paymentGroup",
		header: "Grupo de Pagamento",
		cell: ({ row }: CellContext<Member, any>) => (
			<p>{row.getValue("paymentGroup")}</p>
		),
	},
	{
		id: "birthDate",
		accessorKey: "birthDate",
		header: "Data de Nascimento",
		cell: ({ row }: CellContext<Member, any>) => {
			const birthDate = row.getValue<string>("birthDate");
			if (!birthDate) return <p>N/A</p>;
			const formattedDate = format(new Date(birthDate), "dd/MM/yyyy");
			return <p>{formattedDate}</p>;
		},
	},
	{
		id: "cep",
		accessorKey: "cep",
		header: "CEP",
		cell: ({ row }: CellContext<Member, any>) => <p>{row.getValue("cep")}</p>,
	},
	{
		id: "city",
		accessorKey: "city",
		header: "Cidade",
		cell: ({ row }: CellContext<Member, any>) => <p>{row.getValue("city")}</p>,
	},
	{
		id: "state",
		accessorKey: "state",
		header: "Estado",
		cell: ({ row }: CellContext<Member, any>) => <p>{row.getValue("state")}</p>,
	},
	{
		id: "document",
		accessorKey: "document",
		header: "Documento",
		cell: ({ row }: CellContext<Member, any>) => (
			<p>{row.getValue("document")}</p>
		),
	},
];

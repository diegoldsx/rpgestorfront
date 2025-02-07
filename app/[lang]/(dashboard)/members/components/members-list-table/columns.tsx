import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Member } from "../../types/Member";
import { Badge } from "@/components/ui/badge";

const columnConfig = [
	{ id: "id", accessorKey: "id", label: "ID" },
	{ id: "name", accessorKey: "name", label: "Nome", onlyFor: "CPF" },
	{ id: "type", accessorKey: "type", label: "Tipo" },
	{ id: "status", accessorKey: "status", label: "Status" },
	{ id: "code", accessorKey: "code", label: "Código" },
	{ id: "document", accessorKey: "document", label: "Documento" },
	{
		id: "corporateName",
		accessorKey: "corporateName",
		label: "Razão Social",
		onlyFor: "CNPJ",
	},
	{
		id: "tradeName",
		accessorKey: "tradeName",
		label: "Nome Fantasia",
		onlyFor: "CNPJ",
	},
	{
		id: "birthDate",
		accessorKey: "birthDate",
		label: "Nascimento",
		onlyFor: "CPF",
	},
	{ id: "email", accessorKey: "email", label: "E-mail" },
	{
		id: "paymentGroup",
		accessorKey: "paymentGroup",
		label: "Grupo de Pagamento",
	},
	{
		id: "billingCycle",
		accessorKey: "billingCycle",
		label: "Ciclo de Faturamento",
	},
	{
		id: "automaticBilling",
		accessorKey: "automaticBilling",
		label: "Faturamento Automático",
	},
	{ id: "phone", accessorKey: "phone", label: "Telefone" },
	{ id: "mobile", accessorKey: "mobile", label: "Celular" },
	{ id: "linkedTo", accessorKey: "linkedTo", label: "Vinculado a" },
	{
		id: "billingAmount",
		accessorKey: "billingAmount",
		label: "Valor de Cobrança",
	},
	{ id: "password", accessorKey: "password", label: "Senha" },
	{
		id: "stateRegistration",
		accessorKey: "stateRegistration",
		label: "Inscrição Estadual",
		onlyFor: "CNPJ",
	},
	{
		id: "municipalRegistration",
		accessorKey: "municipalRegistration",
		label: "Inscrição Municipal",
		onlyFor: "CNPJ",
	},
	{
		id: "billingEmail",
		accessorKey: "billingEmail",
		label: "E-mail de Cobrança",
		onlyFor: "CNPJ",
	},
	{ id: "website", accessorKey: "website", label: "Website", onlyFor: "CNPJ" },
];

const getStatusBadge = (status: string) => {
	const normalizedStatus = status.toLowerCase();

	const statusClasses: Record<string, string> = {
		ativo: "bg-green-400 text-white ",
		inativo: "bg-red-400 text-white   ",
		pendente: "bg-yellow-400 text-black  ",
	};

	return (
		<Badge
			className={`px-2 py-1 rounded ${
				statusClasses[normalizedStatus] || "bg-gray-500 text-white"
			}`}
		>
			{status}
		</Badge>
	);
};

const formatDate = (dateValue: any) => {
	const date = dateValue instanceof Date ? dateValue : new Date(dateValue);
	return !isNaN(date.getTime()) ? format(date, "dd/MM/yyyy") : "N/A";
};

export const columns: ColumnDef<Member>[] = columnConfig.map(
	({ id, accessorKey, label }) => ({
		id,
		accessorKey,
		enableSorting: false,
		enableColumnFilter: true,
		enableHiding: true,
		meta: label,
		header: () => (
			<span className="w-32 text-left">
				<p className="text-md font-semibold">{label}</p>
			</span>
		),

		cell: ({ row }) => {
			const value = row.getValue(id);

			if (id === "birthDate") {
				return (
					<p className="text-left">{formatDate(row.original.birthDate)}</p>
				);
			}

			if (id === "status") {
				return getStatusBadge(value as string);
			}

			return (
				<p className="text-left">
					{value != null
						? typeof value === "object"
							? JSON.stringify(value)
							: String(value)
						: ""}
				</p>
			);
		},
	})
);

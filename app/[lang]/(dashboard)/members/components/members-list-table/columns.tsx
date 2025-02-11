import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Member } from "../../types/Member";
import { Badge } from "@/components/ui/badge";

const columnConfig = [
	{ id: "id", accessorKey: "id", label: "ID" },
	{ id: "type", accessorKey: "type", label: "Tipo" },
	{ id: "name", accessorKey: "name", label: "Nome", onlyFor: "cpf" },
	{
		id: "corporateName",
		accessorKey: "corporateName",
		label: "Razão Social",
		onlyFor: "cnpj",
	},
	{ id: "email", accessorKey: "email", label: "E-mail" },
	{ id: "document", accessorKey: "document", label: "Documento" },
	{
		id: "tradeName",
		accessorKey: "tradeName",
		label: "Nome Fantasia",
		onlyFor: "cnpj",
	},
	{
		id: "birthDate",
		accessorKey: "birthDate",
		label: "Nascimento",
		onlyFor: "cpf",
	},
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
	{ id: "phone", accessorKey: "phone", label: "Telefone" },
	{ id: "mobile", accessorKey: "mobile", label: "Celular" },
	{ id: "cep", accessorKey: "cep", label: "CEP" },
	{ id: "street", accessorKey: "street", label: "Rua" },
	{ id: "number", accessorKey: "number", label: "Número" },
	{ id: "complement", accessorKey: "complement", label: "Complemento" },
	{ id: "neighborhood", accessorKey: "neighborhood", label: "Bairro" },
	{ id: "city", accessorKey: "city", label: "Cidade" },
	{ id: "state", accessorKey: "state", label: "Estado" },
];

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
				return <p>{formatDate(value)}</p>;
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

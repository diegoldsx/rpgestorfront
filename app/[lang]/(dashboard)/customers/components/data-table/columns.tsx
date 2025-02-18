import { createColumnHelper } from "@tanstack/react-table";
import Cell from "./cell";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { Customer } from "../../types/customer";

const columnHelper = createColumnHelper<Customer>();

export const columns = [
	columnHelper.accessor("id", {
		header: "ID",
		cell: (info) => <Cell>{info.getValue()}</Cell>,
	}),
	columnHelper.accessor("name", {
		header: "Nome",
		cell: (info) => <Cell>{info.getValue()}</Cell>,
	}),
	columnHelper.accessor("customerType", {
		header: "Tipo",
		cell: (info) => (
			<Cell>
				{info.getValue() === "PJ" ? "Pessoa Jurídica" : "Pessoa Física"}
			</Cell>
		),
	}),
	columnHelper.accessor("cpf", {
		header: "CPF",
		cell: (info) => <Cell>{info.getValue() ?? "N/A"}</Cell>,
	}),
	columnHelper.accessor("email", {
		header: "Email",
		cell: (info) => <Cell>{info.getValue()}</Cell>,
	}),
	columnHelper.accessor("billingEmail", {
		header: "Email de cobrança",
		cell: (info) => <Cell>{info.getValue() ?? "N/A"}</Cell>,
	}),
	columnHelper.accessor("phone", {
		header: "Telefone",
		cell: (info) => <Cell>{info.getValue() ?? "N/A"}</Cell>,
	}),
	columnHelper.accessor("mobile", {
		header: "Celular",
		cell: (info) => <Cell>{info.getValue() ?? "N/A"}</Cell>,
	}),
	columnHelper.accessor("registrationDate", {
		header: "Data de registro",
		cell: (info) => (
			<Cell>{formatDate(info.getValue() as string) ?? "N/A"}</Cell>
		),
	}),
	columnHelper.accessor("status", {
		header: "Status",
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
	}),
	columnHelper.accessor("code", {
		header: "Código",
		cell: (info) => <Cell>{info.getValue() ?? "N/A"}</Cell>,
	}),
	columnHelper.accessor((row) => row.address.zipCode, {
		header: "CEP",
		cell: (info) => <Cell>{info.getValue()}</Cell>,
	}),
	columnHelper.accessor((row) => row.address.street, {
		header: "Rua",
		cell: (info) => <Cell>{info.getValue()}</Cell>,
	}),
	columnHelper.accessor((row) => row.address.number, {
		header: "Número",
		cell: (info) => <Cell>{info.getValue()}</Cell>,
	}),
	columnHelper.accessor((row) => row.address.city, {
		header: "Cidade",
		cell: (info) => <Cell>{info.getValue()}</Cell>,
	}),
	columnHelper.accessor((row) => row.address.state, {
		header: "Estado",
		cell: (info) => <Cell>{info.getValue()}</Cell>,
	}),
	columnHelper.accessor((row) => row.companyData?.corporateName ?? "N/A", {
		header: "Nome Empresa",
		cell: (info) => <Cell>{info.getValue()}</Cell>,
	}),
	columnHelper.accessor((row) => row.companyData?.tradeName ?? "N/A", {
		header: "Nome Fantasia",
		cell: (info) => <Cell>{info.getValue()}</Cell>,
	}),
	columnHelper.accessor((row) => row.companyData?.cnpj ?? "N/A", {
		header: "CNPJ",
		cell: (info) => <Cell>{info.getValue()}</Cell>,
	}),
	columnHelper.accessor((row) => row.billingData?.name ?? "N/A", {
		header: "Nome Cobrança",
		cell: (info) => <Cell>{info.getValue()}</Cell>,
	}),
	columnHelper.accessor((row) => row.billingData?.email ?? "N/A", {
		header: "Email de Cobrança",
		cell: (info) => <Cell>{info.getValue()}</Cell>,
	}),
];

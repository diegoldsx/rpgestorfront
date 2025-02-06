import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Member } from "../../types/Member";
import { StatusBadge } from "../status-badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

// Definição das colunas da tabela Nome, CPF, E-mail, Grupo de Pagamento, Situação Cadastral, Situação Financeira,
export const columns: ColumnDef<Member>[] = [
	{
		accessorKey: "id",
		header: "ID",
		enableHiding: true,
		cell: ({ row }) => <span>{row.getValue("id")}</span>,
	},
	{
		accessorKey: "name",
		header: "Nome / Razão Social",
		enableHiding: true,
		cell: ({ row }) => (
			<span>
				{row.original.type === "CPF"
					? row.original.name
					: row.original.corporateName}
			</span>
		),
	},
	{
		accessorKey: "document",
		header: "CPF / CNPJ",
		enableHiding: true,
		cell: ({ row }) => <span>{row.original.document}</span>,
	},
	{
		accessorKey: "email",
		header: "E-mail",
		enableHiding: true,
		cell: ({ row }) => <span>{row.getValue("email")}</span>,
	},

	{
		accessorKey: "status",
		header: "Situação",
		enableHiding: true,
		cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
	},
	{
		accessorKey: "paymentGroup",
		header: "Grupo de pagamento",
		enableHiding: true,
		cell: ({ row }) => <span>{row.getValue("paymentGroup")}</span>,
	},
	{
		accessorKey: "code",
		header: "Código",
		enableHiding: true,
		cell: ({ row }) => <span>{row.getValue("code")}</span>,
	},
	{
		accessorKey: "type",
		header: "Tipo",
		enableHiding: true,
		cell: ({ row }) => (
			<span>
				{row.getValue("type") === "CPF" ? "Pessoa Física" : "Pessoa Jurídica"}
			</span>
		),
	},

	{
		accessorKey: "billingCycle",
		header: "Ciclo de Cobrança",
		enableHiding: true,
		cell: ({ row }) => <span>{row.getValue("billingCycle")}</span>,
	},
	{
		accessorKey: "automaticBilling",
		header: "Cobrança Automática",
		enableHiding: true,
		cell: ({ row }) => (
			<span>{row.getValue("automaticBilling") ? "Sim" : "Não"}</span>
		),
	},
	{
		accessorKey: "phone",
		header: "Telefone",
		enableHiding: true,
		cell: ({ row }) => <span>{row.getValue("phone")}</span>,
	},
	{
		accessorKey: "mobile",
		header: "Celular",
		enableHiding: true,
		cell: ({ row }) => <span>{row.getValue("mobile")}</span>,
	},
	{
		accessorKey: "city",
		header: "Cidade",
		enableHiding: true,
		cell: ({ row }) => <span>{row.original.address.city}</span>,
	},
	{
		accessorKey: "state",
		header: "UF",
		enableHiding: true,

		cell: ({ row }) => <span>{row.original.address.state}</span>,
	},
	{
		accessorKey: "registrationDate",
		header: "Data de Registro",
		enableHiding: true,
		cell: ({ row }) => {
			const dateValue = row.getValue("registrationDate");

			if (
				!dateValue ||
				(typeof dateValue !== "string" &&
					typeof dateValue !== "number" &&
					!(dateValue instanceof Date))
			) {
				return "-";
			}

			try {
				const parsedDate = new Date(dateValue);

				if (isNaN(parsedDate.getTime())) {
					return "-";
				}

				return format(parsedDate, "dd/MM/yyyy");
			} catch (error) {
				return "-";
			}
		},
	},
	{
		accessorKey: "instagram",
		header: "Instagram",
		enableHiding: true,
		cell: ({ row }) => {
			const instagram = row.original.socialMedia?.instagram;
			return instagram ? (
				<a href={instagram} target="_blank" rel="noopener noreferrer">
					reeee
				</a>
			) : (
				"-"
			);
		},
	},
	{
		accessorKey: "facebook",
		header: "Facebook",

		cell: ({ row }) => {
			const facebook = row.original.socialMedia?.facebook;
			return facebook ? (
				<a href={facebook} target="_blank" rel="noopener noreferrer">
					Facebook
				</a>
			) : (
				"-"
			);
		},
	},
	{
		accessorKey: "linkedIn",
		header: "LinkedIn",
		cell: ({ row }) => {
			const linkedIn = row.original.socialMedia?.linkedIn;
			return linkedIn ? (
				<a href={linkedIn} target="_blank" rel="noopener noreferrer">
					LinkedIn
				</a>
			) : (
				"-"
			);
		},
	},
	{
		id: "actions",
		header: "Ações",
		cell: ({ row }) => <ActionButtons row={row} />,
	},
];

const ActionButtons = ({ row }: any) => (
	<div className="flex gap-3 items-center justify-end">
		<Button
			asChild
			size="icon"
			className="h-9 w-9 rounded bg-default-100 dark:bg-default-200 text-default-500 hover:text-primary-foreground"
		>
			<Link href={`/members/${row.original.id}`}>
				<Icon icon="heroicons:eye" className="w-5 h-5" />
			</Link>
		</Button>
		<Button
			size="icon"
			className="h-9 w-9 rounded bg-default-100 dark:bg-default-200 text-default-500 hover:text-primary-foreground"
		>
			<Icon icon="heroicons:pencil-square" className="w-5 h-5" />
		</Button>
		<Button
			size="icon"
			className="h-9 w-9 rounded bg-default-100 dark:bg-default-200 text-default-500 hover:text-primary-foreground"
		>
			<RiMoneyDollarCircleLine className="w-5 h-5" />
		</Button>
	</div>
);

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Member } from "../../types/Member";
import { StatusBadge } from "../status-badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Input } from "@/components/ui/input";

// Definição das colunas da tabela Nome, CPF, E-mail, Grupo de Pagamento, Situação Cadastral, Situação Financeira,
export const columns: ColumnDef<Member>[] = [
	{
		id: "id",
		accessorKey: "id",
		enableColumnFilter: true,
		meta: "ID",
		header: ({ column }) => (
			<div className="flex flex-col  h-20 gap-2 p-1">
				<span>Nome</span>
				<div className="relative w-64">
					<Icon
						icon="heroicons-outline:search"
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
					/>
					<Input
						onChange={(e) => column.setFilterValue(e.target.value)}
						className="w-full text-sm border-gray-300 focus:border-gray-500 transition-all pl-10" // pl-10 adiciona espaço para o ícone
					/>
				</div>
			</div>
		),

		cell: ({ row }) => <span>{row.getValue("id")}</span>,
	},
	{
		id: "type",
		accessorKey: "type",
		enableColumnFilter: true,
		meta: "Tipo",

		header: ({ column }) => (
			<div className="flex flex-col  h-20 gap-2 p-1">
				<span>Tipo</span>
				<div className="relative w-64">
					<Icon
						icon="heroicons-outline:search"
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
					/>
					<Input
						onChange={(e) => column.setFilterValue(e.target.value)}
						className="w-full text-sm border-gray-300 focus:border-gray-500 transition-all pl-10" // pl-10 adiciona espaço para o ícone
					/>
				</div>
			</div>
		),
		enableHiding: true,

		cell: ({ row }) => (
			<span>
				{row.getValue("type") === "CPF" ? "Pessoa Física" : "Pessoa Jurídica"}
			</span>
		),
	},
	{
		id: "name",
		accessorKey: "name",
		meta: "Nome",
		enableColumnFilter: true,
		enableHiding: true,

		header: ({ column }) => (
			<div className="flex flex-col h-20 gap-2 p-1">
				<span>Nome</span>
				<div className="relative w-64">
					<Icon
						icon="heroicons-outline:search"
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
					/>
					<Input
						onChange={(e) => column.setFilterValue(e.target.value)}
						className="w-full text-sm border-gray-300 focus:border-gray-500 transition-all pl-10" // pl-10 adiciona espaço para o ícone
					/>
				</div>
			</div>
		),

		cell: ({ row }) => (
			<div>
				<span>{row.original.name}</span>
			</div>
		),
	},
	{
		id: "corporateName",
		meta: "Empresa",
		accessorKey: "corporateName",
		enableColumnFilter: true,

		header: ({ column }) => (
			<div className="flex flex-col  h-20 gap-2 p-1">
				<span>Nome da Empresa</span>
				<div className="relative w-64">
					<Icon
						icon="heroicons-outline:search"
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
					/>
					<Input
						onChange={(e) => column.setFilterValue(e.target.value)}
						className="w-full text-sm border-gray-300 focus:border-gray-500 transition-all pl-10" // pl-10 adiciona espaço para o ícone
					/>
				</div>
			</div>
		),

		cell: ({ row }) => (
			<div>
				<span>{row.original.corporateName}</span>
			</div>
		),
	},
	{
		id: "document",
		accessorKey: "document",
		meta: "Documento",

		enableColumnFilter: true,

		header: ({ column }) => (
			<div className="flex flex-col  h-20 gap-2 p-1">
				<span>Documento</span>
				<div className="relative w-64">
					<Icon
						icon="heroicons-outline:search"
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
					/>
					<Input
						onChange={(e) => column.setFilterValue(e.target.value)}
						className="w-full text-sm border-gray-300 focus:border-gray-500 transition-all pl-10" // pl-10 adiciona espaço para o ícone
					/>
				</div>
			</div>
		),
		enableHiding: true,

		cell: ({ row }) => <span>{row.original.document}</span>,
	},
	{
		id: "email",
		accessorKey: "email",
		meta: "Email",

		enableHiding: true,
		enableColumnFilter: true,

		header: ({ column }) => (
			<div className="flex flex-col  h-20 gap-2 p-1">
				<span>Email</span>
				<div className="relative w-64">
					<Icon
						icon="heroicons-outline:search"
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
					/>
					<Input
						onChange={(e) => column.setFilterValue(e.target.value)}
						className="w-full text-sm border-gray-300 focus:border-gray-500 transition-all pl-10" // pl-10 adiciona espaço para o ícone
					/>
				</div>
			</div>
		),

		cell: ({ row }) => <span>{row.getValue("email")}</span>,
	},

	{
		id: "status",
		accessorKey: "status",
		meta: "Status",

		enableColumnFilter: true,

		header: ({ column }) => (
			<div className="flex flex-col  h-20 gap-2 p-1">
				<span>Status</span>
				<div className="relative w-64">
					<Icon
						icon="heroicons-outline:search"
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
					/>
					<Input
						onChange={(e) => column.setFilterValue(e.target.value)}
						className="w-full text-sm border-gray-300 focus:border-gray-500 transition-all pl-10" // pl-10 adiciona espaço para o ícone
					/>
				</div>
			</div>
		),
		enableHiding: true,

		cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
	},
	{
		id: "paymentGroup",
		meta: "Grupo de pagamento",
		accessorKey: "paymentGroup",
		enableColumnFilter: true,

		header: ({ column }) => (
			<div className="flex flex-col  h-20 gap-2 p-1">
				<span>Grupo de pagamento</span>
				<div className="relative w-64">
					<Icon
						icon="heroicons-outline:search"
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
					/>
					<Input
						onChange={(e) => column.setFilterValue(e.target.value)}
						className="w-full text-sm border-gray-300 focus:border-gray-500 transition-all pl-10" // pl-10 adiciona espaço para o ícone
					/>
				</div>
			</div>
		),
		enableHiding: true,

		cell: ({ row }) => <span>{row.getValue("paymentGroup")}</span>,
	},
	{
		id: "code",
		accessorKey: "code",
		meta: "Código",
		enableColumnFilter: true,

		header: ({ column }) => (
			<div className="flex flex-col  h-20 gap-2 p-1">
				<span>Código</span>
				<div className="relative w-64">
					<Icon
						icon="heroicons-outline:search"
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
					/>
					<Input
						onChange={(e) => column.setFilterValue(e.target.value)}
						className="w-full text-sm border-gray-300 focus:border-gray-500 transition-all pl-10" // pl-10 adiciona espaço para o ícone
					/>
				</div>
			</div>
		),
		enableHiding: true,

		cell: ({ row }) => <span>{row.getValue("code")}</span>,
	},

	{
		id: "billingCycle",
		meta: "Ciclo de cobrança",
		accessorKey: "billingCycle",
		enableColumnFilter: true,

		header: ({ column }) => (
			<div className="flex flex-col  h-20 gap-2 p-1">
				<span>Ciclo de cobrança</span>
				<div className="relative w-64">
					<Icon
						icon="heroicons-outline:search"
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
					/>
					<Input
						onChange={(e) => column.setFilterValue(e.target.value)}
						className="w-full text-sm border-gray-300 focus:border-gray-500 transition-all pl-10" // pl-10 adiciona espaço para o ícone
					/>
				</div>
			</div>
		),
		enableHiding: true,

		cell: ({ row }) => <span>{row.getValue("billingCycle")}</span>,
	},
	{
		id: "automaticBilling",
		meta: "Cobrança automática",
		accessorKey: "automaticBilling",
		enableColumnFilter: true,

		header: ({ column }) => (
			<div className="flex flex-col  h-20 gap-2 p-1">
				<span>Cobrança automática</span>
				<div className="relative w-64">
					<Icon
						icon="heroicons-outline:search"
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
					/>
					<Input
						onChange={(e) => column.setFilterValue(e.target.value)}
						className="w-full text-sm border-gray-300 focus:border-gray-500 transition-all pl-10" // pl-10 adiciona espaço para o ícone
					/>
				</div>
			</div>
		),
		enableHiding: true,
		cell: ({ row }) => (
			<span>{row.getValue("automaticBilling") ? "Sim" : "Não"}</span>
		),
	},
	{
		id: "phone",
		accessorKey: "phone",
		meta: "Telefone",
		enableColumnFilter: true,

		header: ({ column }) => (
			<div className="flex flex-col  h-20 gap-2 p-1">
				<span>Telefone</span>
				<div className="relative w-64">
					<Icon
						icon="heroicons-outline:search"
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
					/>
					<Input
						onChange={(e) => column.setFilterValue(e.target.value)}
						className="w-full text-sm border-gray-300 focus:border-gray-500 transition-all pl-10" // pl-10 adiciona espaço para o ícone
					/>
				</div>
			</div>
		),
		enableHiding: true,

		cell: ({ row }) => <span>{row.getValue("phone")}</span>,
	},
	{
		id: "mobile",
		accessorKey: "mobile",
		meta: "Celular",
		enableColumnFilter: true,

		header: ({ column }) => (
			<div className="flex flex-col  h-20 gap-2 p-1">
				<span>Celular</span>
				<div className="relative w-64">
					<Icon
						icon="heroicons-outline:search"
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
					/>
					<Input
						onChange={(e) => column.setFilterValue(e.target.value)}
						className="w-full text-sm border-gray-300 focus:border-gray-500 transition-all pl-10" // pl-10 adiciona espaço para o ícone
					/>
				</div>
			</div>
		),
		enableHiding: true,

		cell: ({ row }) => <span>{row.getValue("mobile")}</span>,
	},
	{
		id: "city",
		accessorKey: "city",
		meta: "Cidade",
		header: ({ column }) => (
			<div className="flex flex-col  h-20 gap-2 p-1">
				<span>Cidade</span>
				<div className="relative w-64">
					<Icon
						icon="heroicons-outline:search"
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
					/>
					<Input
						onChange={(e) => column.setFilterValue(e.target.value)}
						className="w-full text-sm border-gray-300 focus:border-gray-500 transition-all pl-10" // pl-10 adiciona espaço para o ícone
					/>
				</div>
			</div>
		),
		enableHiding: true,

		cell: ({ row }) => <span>{row.original.address.city}</span>,
	},
	{
		id: "state",
		accessorKey: "state",
		meta: "Estado",
		header: ({ column }) => (
			<div className="flex flex-col  h-20 gap-2 p-1">
				<span>Estado</span>
				<div className="relative w-64">
					<Icon
						icon="heroicons-outline:search"
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
					/>
					<Input
						onChange={(e) => column.setFilterValue(e.target.value)}
						className="w-full text-sm border-gray-300 focus:border-gray-500 transition-all pl-10" // pl-10 adiciona espaço para o ícone
					/>
				</div>
			</div>
		),
		enableHiding: true,
		enableGlobalFilter: true,

		cell: ({ row }) => <span>{row.original.address.state}</span>,
	},
	{
		id: "registrationDate",
		accessorKey: "registrationDate",
		meta: "Data de regitro",
		enableColumnFilter: true,

		header: ({ column }) => (
			<div className="flex flex-col  h-20 gap-2 p-1">
				<span>Data de registro</span>
				<div className="relative w-64">
					<Icon
						icon="heroicons-outline:search"
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
					/>
					<Input
						onChange={(e) => column.setFilterValue(e.target.value)}
						className="w-full text-sm border-gray-300 focus:border-gray-500 transition-all pl-10" // pl-10 adiciona espaço para o ícone
					/>
				</div>
			</div>
		),

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
		id: "instagram",
		accessorKey: "instagram",
		meta: "Instagram",
		enableColumnFilter: true,
		enableHiding: true,
		header: ({ column }) => (
			<div className="flex flex-col  h-20 gap-2 p-1">
				<span>Instagram</span>
				<div className="relative w-64">
					<Icon
						icon="heroicons-outline:search"
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
					/>
					<Input
						onChange={(e) => column.setFilterValue(e.target.value)}
						className="w-full text-sm border-gray-300 focus:border-gray-500 transition-all pl-10" // pl-10 adiciona espaço para o ícone
					/>
				</div>
			</div>
		),
		cell: ({ row }) => {
			const instagram = row.original.socialMedia?.instagram;
			return instagram ? (
				<a href={instagram} target="_blank" rel="noopener noreferrer">
					{instagram}
				</a>
			) : (
				"-"
			);
		},
	},
	{
		id: "facebook",

		accessorKey: "facebook",
		meta: "Facebook",
		header: ({ column }) => (
			<div className="flex flex-col  h-20 gap-2 p-1">
				<span>Facebook</span>
				<div className="relative w-64">
					<Icon
						icon="heroicons-outline:search"
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
					/>
					<Input
						onChange={(e) => column.setFilterValue(e.target.value)}
						className="w-full text-sm border-gray-300 focus:border-gray-500 transition-all pl-10" // pl-10 adiciona espaço para o ícone
					/>
				</div>
			</div>
		),

		cell: ({ row }) => {
			const facebook = row.original.socialMedia?.facebook;
			return facebook ? (
				<a href={facebook} target="_blank" rel="noopener noreferrer">
					{facebook}
				</a>
			) : (
				"-"
			);
		},
	},
	{
		id: "linkedn",
		meta: "Linkedn",
		accessorKey: "linkedIn",
		header: ({ column }) => (
			<div className="flex flex-col  h-20 gap-2 p-1 ">
				<span>Linkedn</span>
				<div className="relative w-64">
					<Icon
						icon="heroicons-outline:search"
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
					/>
					<Input
						onChange={(e) => column.setFilterValue(e.target.value)}
						className="w-full text-sm border-gray-300 focus:border-gray-500 transition-all pl-10"
					/>
				</div>
			</div>
		),
		cell: ({ row }) => {
			const linkedIn = row.original.socialMedia?.linkedIn;
			return linkedIn ? (
				<a href={linkedIn} target="_blank" rel="noopener noreferrer">
					{linkedIn}
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

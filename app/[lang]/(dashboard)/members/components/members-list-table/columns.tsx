"use client";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/common/data-table/table-column-header";

// Tipo para os dados dos membros
export interface Member {
	id: number;
	name?: string;
	cnpj?: string;
	cpf?: string;
	paymentGroup?: string;
	financialStatus?: string;
	registrationStatus?: string;
	status: "ACTIVE" | "INACTIVE";
}

export const columns: ColumnDef<Member>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={table.getIsAllPageRowsSelected()}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
				className="translate-y-[2px]"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
				className="translate-y-[2px]"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "id",

		header: "ID",
		cell: ({ row }: any) => <span>{row.getValue("id")}</span>,
		enableHiding: true,
		enableSorting: true,
	},
	{
		accessorKey: "name",
		header: "Nome",
		cell: ({ row }: any) => (
			<div className="flex gap-2 items-center">
				<Avatar className=" border border-slate-300 rounded-full">
					<AvatarImage src="" />
					<AvatarFallback className="">
						{row.getValue("name").toString().substring(0, 2).toUpperCase()}
					</AvatarFallback>
				</Avatar>
				<div className="flex flex-col">
					<span className="text-sm font-medium text-default-600 whitespace-nowrap">
						{row.getValue("name")}
					</span>
				</div>
			</div>
		),
		enableHiding: true,
		enableSorting: true,
	},
	{
		accessorKey: "cnpj",
		header: "CNPJ",
		cell: ({ row }: any) => <span>{row.getValue("cnpj")}</span>,
		enableHiding: true,
		enableSorting: true,
	},
	{
		accessorKey: "cpf",
		header: "CPF",
		cell: ({ row }: any) => <span>{row.getValue("cpf")}</span>,
		enableHiding: true,
		enableSorting: true,
	},
	{
		accessorKey: "paymentGroup",
		header: "Grupo de Pagamento",
		cell: ({ row }: any) => <span>{row.getValue("paymentGroup")}</span>,
		enableHiding: true,
		enableSorting: true,
	},

	{
		accessorKey: "financialStatus",
		header: "Status Financeiro",
		cell: ({ row }: any) => <span>{row.getValue("financialStatus")}</span>,
		enableHiding: true,
		enableSorting: true,
	},
	{
		accessorKey: "registrationStatus",
		header: "Situação Cadastral",
		cell: ({ row }: any) => <span>{row.getValue("registrationStatus")}</span>,
		enableHiding: true,
		enableSorting: true,
	},

	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => (
			<Badge
				className="rounded capitalize whitespace-nowrap"
				variant="soft"
				color={row.getValue("status") === "ACTIVE" ? "success" : "warning"}
			>
				{row.getValue("status") === "ACTIVE" ? "Ativo" : "Inativo"}
			</Badge>
		),
		enableHiding: true,
		enableSorting: true,
	},
	{
		id: "actions",
		header: "Ações",
		cell: ({ row }) => (
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
		),
	},
];

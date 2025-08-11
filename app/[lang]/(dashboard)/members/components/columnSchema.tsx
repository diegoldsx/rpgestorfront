"use client";
import type { CellContext, ColumnDef, VisibilityState } from "@tanstack/react-table";
import { MemberType, MemberTypesOptions } from "@/types/Member";

export const memberCols: ColumnDef<MemberType>[] = [
	{ header: "ID", accessorKey: "id" },
	{ header: "Data de nascimento", accessorKey: "birthDate" },
	{ header: "Status", accessorKey: "status" },
	{ header: "CEP", accessorKey: "address.zipCode" },
	{ header: "Estado", accessorKey: "address.state" },
	{ header: "Cidade", accessorKey: "address.city" },
	{ header: "Bairro", accessorKey: "address.district" },
	{ header: "Rua", accessorKey: "address.street" },
	{ header: "Número", accessorKey: "address.number" },
	{ header: "Complemento", accessorKey: "address.complement" },
	{ header: "Nome completo", accessorKey: "fullName" },
	{ header: "Grupo de pagamento", accessorKey: "paymentGroup" },
	{ header: "Ciclo", accessorKey: "cycle" },
	{ header: "Razão social", accessorKey: "corporateName" },
	{ header: "CNPJ", accessorKey: "cnpj" },
	{ header: "Inscrição estadual", accessorKey: "stateRegistration" },
	{ header: "Inscrição municipal", accessorKey: "municipalRegistration" },
	{
		accessorKey: "type",
		header: "Tipo",
		enableHiding: true,
		cell: ({ row }: CellContext<MemberType, unknown>) => {
			MemberTypesOptions[row.original.type as keyof typeof MemberTypesOptions];
		},
	},
	{
		id: "contact.email",
		header: "Email",
		accessorFn: (row: any) => (row.type === "individual" ? row.contact?.email ?? "" : row.contacts?.[0]?.email ?? ""),
		cell: (info) => String(info.getValue() ?? ""),
	},
	{
		id: "contact.phone",
		header: "Telefone",
		accessorFn: (row: any) => (row.type === "individual" ? row.contact?.phone ?? "" : row.contacts?.[0]?.phone ?? ""),
		cell: (info) => String(info.getValue() ?? ""),
	},
];
export function hideColumnsFromTable(hiddenIds: string[]): Record<string, boolean> {
	const keys = memberCols.map((c) => String((c as any).id ?? (c as any).accessorKey ?? "")).filter(Boolean);

	if (hiddenIds.length === 0) return Object.fromEntries(keys.map((k) => [k, true])) as Record<string, boolean>;

	const set = new Set(hiddenIds);
	return Object.fromEntries(keys.map((k) => [k, !set.has(k)])) as Record<string, boolean>;
}

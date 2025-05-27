import { MemberType } from "@/types/Member";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<MemberType>[] = [
  {
    id: "name",
    header: "Nome",
    cell: ({ row }) => (
      row
    ),
  },
  {
    id: "active",
    header: "ATIVO",
    cell: ({ row }) => (
      row
    ),
  },
  {
    id: "inactive",
    header: "INATIVO",
    cell: ({ row }) => (
      row
    ),
  },
  {
    id: "pending",
    header: "PENDENTE",
    cell: ({ row }) => (
      row
    ),
  },
]

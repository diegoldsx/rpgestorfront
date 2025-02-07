import { Column, ColumnDef, Row } from "@tanstack/react-table";
import { Icon } from "@iconify/react";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronUp } from "lucide-react";

const columnConfig = [
	{ id: "id", accessorKey: "id", label: "ID" },
	{ id: "name", accessorKey: "name", label: "Name" },

	{
		id: "corporateName",
		accessorKey: "corporateName",
		label: "Nome da Empresa",
	},
	{
		id: "document",
		accessorKey: "document",
		label: "Documento",
	},
	{ id: "email", accessorKey: "email", label: "Email" },
];

const createColumnConfig = (id: string, label: string, sortable = false) => ({
	id,
	accessorKey: id,
	enableSorting: sortable,
	enableColumnFilter: true,
	sortable: false,
	meta: label,

	header: ({ column }: { column: Column<any> }) => (
		<div className="flex flex-col h-20 gap-2 p-1 ">
			<span
				className="flex items-center gap-2 cursor-pointer select-none"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				<p>{label}</p>
				{column.getIsSorted() === "asc" ? (
					<ChevronUp className="h-4 w-4" />
				) : (
					<ChevronDown className="h-4 w-4" />
				)}
			</span>

			<div className="relative w-64">
				<Icon
					icon="heroicons-outline:search"
					className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
				/>
				<Input
					value={(column.getFilterValue() as string) || ""}
					onChange={(e) => column.setFilterValue(e.target.value)}
					className="w-full text-sm border-gray-300 focus:border-gray-500 transition-all pl-10 focus:outline-none focus:ring-0"
				/>
			</div>
		</div>
	),
	cell: ({ row }: { row: Row<any> }) => <span>{row.getValue(id) || ""}</span>,
});

export const columns = columnConfig.map((item) =>
	createColumnConfig(item.id, item.label)
);

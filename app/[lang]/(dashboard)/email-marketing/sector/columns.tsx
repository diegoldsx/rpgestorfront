import { CellContext, ColumnDef } from "@tanstack/react-table";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import Cell from "@/app/types/Cell";
import { Sector } from "./types/sector";
import { fields } from "./config/fields";
import { SectorType } from "@/types/Sector";
import Link from "next/link";

const cols: ColumnDef<Sector>[] = fields.map((field) => ({
	id: field.id,
	accessorKey: field.id,
	header: field.title,
	filterFn: exactFilter,
	cell: (info) => {
		const value = info.getValue() as string;
		if (field.options) {
			const option = field.options.find((option) => option.value === value);

			return (
				<Cell>
					<span>{option?.label}</span>
				</Cell>
			);
		}

		return <Cell>{value}</Cell>;
	},
}));

export const columns = [
	{
		id: "actions",
		header: "Actions",
		size: 150,
		cell: ({ row }: CellContext<Sector, unknown>) => (
			<Link href={"sector/details-page?id=" + row.original.id}>Editar</Link>
		),
	},
	,
	...cols,
] as ColumnDef<Sector>[];

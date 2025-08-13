import { CellContext, ColumnDef } from "@tanstack/react-table";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import Cell from "@/app/types/Cell";
import { Message } from "./types/message";
import { fields } from "./config/fields";
import { EmailType } from "@/types/Email";
import Link from "next/link";

const columns: ColumnDef<Message>[] = fields.map((field) => ({
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

export default [
	{
		id: "actions",
		header: "Actions",
		size: 150,
		cell: ({ row }: CellContext<EmailType, unknown>) => (
			<Link href={"emails/details-page?id=" + row.original.id}>Editar</Link>
		),
	},
	,
	...columns,
] as ColumnDef<Message>[];

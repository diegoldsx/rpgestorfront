import { ColumnDef } from "@tanstack/react-table";
import Cell from "@/app/types/Cell";
import { Announcement } from "./types/announcements";
import { fields } from "./config/announcementFields";

export const columns: ColumnDef<Announcement>[] = fields.map((field) => ({
	id: field.id,
	accessorKey: field.id,
	header: field.title,
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

import { ColumnDef } from "@tanstack/react-table";
import { exactFilter } from "@/components/common/data-table/columnUtils";
import Cell from "@/app/types/Cell";
import { User } from "./types/user";
import { fields } from "./config/fields";
import { Badge } from "@/components/ui/badge";
import { BadgeStatus, getBadgeStatus } from "@/components/badge/badgeStatus";

export const columns: ColumnDef<User>[] = fields.map((field) => ({
	id: field.id,
	accessorKey: field.id,
	header: field.title,
	filterFn: exactFilter,
	cell: (info) => {
		const value = info.getValue() as string;

		if (field.id === "status" && field.options) {
			const option = field.options.find((option) => option.value === value);
			const badgeStyle = getBadgeStatus(option?.value as BadgeStatus);

			return (
				<Cell>
					<Badge color={badgeStyle}>{option?.label}</Badge>
				</Cell>
			);
		}

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

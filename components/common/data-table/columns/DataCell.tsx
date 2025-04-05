// components/common/data-table/DataCell.tsx
"use client";
import { Badge } from "@/components/badge/badge";
import { getBadgeStatus } from "@/components/badge/badgeStatus";
import Cell from "@/components/data-table/Cell";

type Option = {
	label: string;
	value: string;
};

type DataCellProps<T> = {
	getValue: () => T;
	options?: Option[];
	type?: string;
};

export default function DataCell<T>({
	getValue,
	options,
	type,
}: DataCellProps<T>) {
	const value = getValue();

	if (type === "checkbox") {
		return (
			<Cell>
				<p className="w-full text-center">{value ? "Sim" : "Não"}</p>
			</Cell>
		);
	}

	if (type === "date") {
		const formatted = new Date(String(value)).toLocaleDateString("pt-BR");
		return <Cell>{formatted}</Cell>;
	}

	if (type === "textarea") {
		return (
			<Cell
				title={String(value)}
				className="line-clamp-2 max-w-full overflow-hidden text-ellipsis whitespace-pre-wrap"
			>
				{String(value)}
			</Cell>
		);
	}

	if (options) {
		const option = options.find((opt) => opt.value === value);

		if (option && type === "badge") {
			return <Badge color={getBadgeStatus(option.value)}>{option.label}</Badge>;
		}
		if (option) {
			return <Cell>{option.label || ""}</Cell>;
		}
	}

	return <Cell>{String(value)}</Cell>;
}

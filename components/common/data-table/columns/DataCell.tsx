// components/common/data-table/DataCell.tsx
"use client";
import Cell from "@/app/types/Cell";
import { Badge } from "@/components/badge/badge";
import { getBadgeStatus } from "@/components/badge/badgeStatus";

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
	const value = String(getValue());

	if (type === "checkbox") {
		return <Cell>{value ? "Sim" : "Não"}</Cell>;
	}

	if (type === "date") {
		const formatted = new Date(value).toLocaleDateString("pt-BR");
		return <Cell>{formatted}</Cell>;
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

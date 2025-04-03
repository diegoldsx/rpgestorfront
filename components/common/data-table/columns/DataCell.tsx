// components/common/data-table/DataCell.tsx
"use client";
import Cell from "@/app/types/Cell";

type Option<T = string> = {
	label: string;
	value: T;
};

type DataCellProps<T> = {
	getValue: () => T;
	options?: Option<T>[];
	type?: string;
};

export default function DataCell<T>({
	getValue,
	options,
	type,
}: DataCellProps<T>) {
	const value = getValue();

	if (type === "checkbox") {
		return <Cell>{value ? "Sim" : "Não"}</Cell>;
	}

	if (options) {
		const option = options.find((opt) => opt.value === value);
		return <Cell>{String(option?.label ?? value)}</Cell>;
	}

	return <Cell>{String(value)}</Cell>;
}

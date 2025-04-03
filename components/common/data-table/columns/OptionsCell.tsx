// components/common/data-table/OptionsCell.tsx
"use client";
import Cell from "@/app/types/Cell";

type Option<T = string> = {
	label: string;
	value: T;
};

type OptionsCellProps<T = string> = {
	value: T;
	options: Option<T>[];
};

export default function OptionsCell<T>({
	value,
	options,
}: OptionsCellProps<T>) {
	const option = options.find((opt) => opt.value === value);
	return <Cell>{String(option?.label ?? value)}</Cell>;
}

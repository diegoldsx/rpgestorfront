"use client";
import Link from "next/link";
import Cell from "@/app/types/Cell";
import { Row } from "@tanstack/react-table";

type ActionsCellProps<T> = {
	row: Row<T>;
	editUrl: string;
	label?: string;
};

export default function ActionsCell<T>({
	row,
	editUrl,
	label = "Edit",
}: ActionsCellProps<T>) {
	const id = (row.original as any).id;
	return (
		<Cell>
			<Link
				className="text-primary hover:text-primary/80"
				href={`${editUrl}?id=${id}`}
			>
				{label}
			</Link>
		</Cell>
	);
}

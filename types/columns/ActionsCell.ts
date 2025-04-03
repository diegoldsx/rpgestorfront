import { Row } from "@tanstack/react-table";

export type ActionsCellProps<T> = {
	row: Row<T>;
	editUrl: string;
	label?: string;
};

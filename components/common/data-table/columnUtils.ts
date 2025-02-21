import { ColumnDef, Row } from "@tanstack/react-table";

export const exactFilter = (row: any, columnId: string, value: string) => {
	if (!value) return true;
	const cellValue = row.getValue(columnId);
	return value.includes(cellValue);
};

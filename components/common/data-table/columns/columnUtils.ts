import { ColumnDef } from "@tanstack/react-table";

export function schemaToColumns<T>(schema: ColumnDef<T>[]): ColumnDef<T>[] {
	return schema.map((col) => ({
		id: col.id as string,
		header: col.header,
		accessorKey: typeof col.id === "string" ? col.id : undefined,
		cell: col.cell,
		size: col.size,
	}));
}

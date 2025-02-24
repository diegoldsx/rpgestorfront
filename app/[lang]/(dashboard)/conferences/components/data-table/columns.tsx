import Cell from "./cell";
import { formatDate } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { config as configEvent, Conference } from "../../types/Conference";

export const columns: ColumnDef<Conference>[] = configEvent.map((field) => ({
	id: field.id,
	accessorKey: field.id,
	header: field.title,
	cell: (info: any) => <Cell>{info.getValue()}</Cell>,
}));

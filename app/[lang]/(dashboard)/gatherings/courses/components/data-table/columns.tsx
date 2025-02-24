import Cell from "./cell";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { Course, courseConfig } from "../../types/Course";

export const columns: ColumnDef<Course>[] = courseConfig.map((field) => ({
	id: field.id,
	accessorKey: field.id,
	header: field.title,
	cell: (info: any) => <Cell>{info.getValue()}</Cell>,
}));

export const getVisibilityState = (visibleColumnIds: string[]) =>
	Object.fromEntries(
		courseConfig.map((key) => [key.id, visibleColumnIds.includes(key.id)])
	);

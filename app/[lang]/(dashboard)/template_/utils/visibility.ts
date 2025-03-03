import { VisibilityState } from "@tanstack/react-table";
import { fields } from "../config/templateFields";

const visibleColumns: ReadonlyArray<string> = ["*"];

export const visibilityState: VisibilityState = Object.fromEntries(fields.map(({ id }) => [id, visibleColumns.includes(id) || visibleColumns[0] === "*"]));

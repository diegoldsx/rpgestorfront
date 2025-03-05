import { VisibilityState } from "@tanstack/react-table";
import { fields } from "./fields";

export const visibilityState: VisibilityState = Object.fromEntries(fields.map((key) => [key.id, !hideColumns.includes(key.id)]));

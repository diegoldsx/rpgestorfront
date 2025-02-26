import { FieldConfig as Field } from "@/app/types/FieldConfig";
import { VisibilityState } from "@tanstack/react-table";

export type Discount = {
	id: number;
	name: string;
	status: "active" | "inactive";
};

export const options = {
	status: [
		{ value: "active", label: "Ativo" },
		{ value: "inactive", label: "Inativo" },
	],
};

export const DiscountFields: Field<Discount>[] = [
	{ id: "id", title: "ID" },
	{ id: "name", title: "Nome" },
	{ id: "status", title: "Situação", options: options.status },
];

let visibleColumns: string[] = ["*"];

export const visibilityState: VisibilityState = Object.fromEntries(
	DiscountFields.map((key) => [key.id, visibleColumns.includes(key.id) || visibleColumns[0] === "*"])
);
export const facetedFilters: any[] = DiscountFields.filter((field: any) => field.options);

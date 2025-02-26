import { FieldConfig as Field } from "@/app/types/FieldConfig";
import { VisibilityState } from "@tanstack/react-table";

export type Payment = {
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

export const PaymentFields: Field<Payment>[] = [
	{ id: "id", title: "ID" },
	{ id: "name", title: "Nome" },
	{ id: "status", title: "Situação", options: options.status },
];

let visibleColumns: string[] = ["*"];

export const visibilityState: VisibilityState = Object.fromEntries(
	PaymentFields.map((key) => [key.id, visibleColumns.includes(key.id) || visibleColumns[0] === "*"])
);
export const facetedFilters: any[] = PaymentFields.filter((field: any) => field.options);

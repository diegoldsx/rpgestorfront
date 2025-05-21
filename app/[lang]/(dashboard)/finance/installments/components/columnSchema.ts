import { VisibilityState } from "@tanstack/react-table";

import { Column, createColumn } from "@/types/columns/ColumnsDefinition";
import { InstallmentType } from "@/types/Installment";
import { CostCenterOptions, PaymentMethodOptions } from "@/types/options";



export const columnSchema: Column<InstallmentType>[] = [
	createColumn({
		id: "id",
		title: "ID",
		type: "id",
		size: 100,
	})
	,
	createColumn({
		id: "chargeType",
		title: "Tipo de cobrança",
		type: "text",
		size: 200,
		options: PaymentMethodOptions,
	}),
	createColumn({
		id: "group",
		title: "Grupo",
		type: "text",
		size: 150,
	}),
	createColumn({
		id: "dueDate",
		title: "Data de vencimento",
		type: "date",
		size: 100,
	}),
	createColumn({
		id: "category",
		title: "Categoria",
		type: "text",
		size: 150,
	}),
	createColumn({
		id: "paymentMethod",
		title: "Forma de pagamento",
		type: "text",
		size: 150,
		options: PaymentMethodOptions,
	}),
	createColumn({
		id: "account",
		title: "Conta",
		type: "text",
		size: 150,
	}),
	createColumn({
		id: "costCenter",
		title: "Centro de custo",
		type: "text",
		size: 150,
		options: CostCenterOptions,
	}),
	createColumn({
		id: "description",
		title: "Descrição",
		type: "text",
		size: 200,
	}),
	createColumn({
		id: "invoiceInstruction",
		title: "Instrução da fatura",
		type: "text",
		size: 200,
	}),
];

export const defaultValues = Object.fromEntries(
	columnSchema.map(({ id, defaultValue }) => [id, defaultValue])
) as Partial<InstallmentType>;

export const facetedFilters = columnSchema.filter((f) => !!f.options);

export const visibleColumns: ReadonlyArray<string> = ["*"];
export const visibilityState: VisibilityState = Object.fromEntries(
	columnSchema.map(({ id }) => [
		id,
		visibleColumns.includes(id) || visibleColumns[0] === "*",
	])
);

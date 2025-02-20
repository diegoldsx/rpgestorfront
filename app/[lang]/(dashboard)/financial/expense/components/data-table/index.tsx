"use client";

import * as React from "react";
import { DataTable } from "@/components/common/data-table/data-table";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { Expense, expenseTypeConfig } from "../../types/Expense";

interface ExpensesDataTableProps {
	data: Expense[];
	columns: ColumnDef<Expense>[];
}

export function ExpensesDataTable<T>({
	data,
	columns,
}: ExpensesDataTableProps) {
	const visibleColumns = [
		"description",
		"payer",
		"costCenter",
		"category",
		"ammount",
		"dueDate",
		"paymentMethod",
		"status",
	];
	const visibilityState: VisibilityState = Object.fromEntries(
		expenseTypeConfig.map((key) => [key.id, visibleColumns.includes(key.id)])
	);

	const expenseOptions = expenseTypeConfig
		.filter((expense) => expense.options)
		.map((expense) => ({ ...expense }));
	return (
		<>
			<DataTable
				columns={columns}
				data={data}
				facetedFilters={expenseOptions}
				visibilityState={visibilityState}
			/>
		</>
	);
}

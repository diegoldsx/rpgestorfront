"use client";

import * as React from "react";
import { DataTable } from "@/components/common/data-table/data-table";
import { Income, IncomeKeys, IncomeSelectOptions } from "../../types/Income";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";

interface IncomesDataTableProps {
	data: Income[];
	columns: ColumnDef<Income>[];
}

export function IncomesDataTable<T>({ data, columns }: IncomesDataTableProps) {
	const visibleColumns = [
		"description",
		"costCenter",
		"category",
		"paidValue",
		"dueDate",
		"account",
		"paymentMethod",
		"status",
	];
	const visibilityState: VisibilityState = Object.fromEntries(
		IncomeKeys.map((key) => [key, visibleColumns.includes(key)])
	);

	return (
		<>
			<DataTable
				columns={columns}
				data={data}
				facetedFilters={[...IncomeSelectOptions]}
				visibilityState={visibilityState}
			/>
		</>
	);
}

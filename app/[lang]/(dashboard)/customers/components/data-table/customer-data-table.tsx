"use client";

import * as React from "react";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { DataTable } from "@/components/common/data-table/data-table";
import { columns } from "./columns";
import {
	Customer,
	customerColumnsConfig,
	customerTypeOptions,
	statusOptions,
} from "../../types/customer";

interface CustomersDataTableProps {
	data: Customer[];
}

export function CustomersDataTable<T>({ data }: CustomersDataTableProps) {
	const facetedFilters: any[] = [
		{
			id: "customerType",
			title: "Tipo",
			options: customerTypeOptions,
		},
		{
			id: "status",
			title: "Status",
			options: statusOptions,
		},
	];

	const visibilityState = Object.fromEntries(
		customerColumnsConfig.map((col) => [col.key, col.visibility])
	) as VisibilityState;

	return (
		<>
			<DataTable
				columns={columns}
				data={data}
				facetedFilters={facetedFilters}
				visibilityState={visibilityState}
			/>
		</>
	);
}

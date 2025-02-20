"use client";

import * as React from "react";
import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { DataTable } from "@/components/common/data-table/data-table";
import { columns } from "./columns";
import {
	Customer,
	customerColumnsConfig,
	CustomerKeys,
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

	const visibleColumns = ["name", "email", "cpf", "cnpj", "state", "status"];
	const visibilityState: VisibilityState = Object.fromEntries(
		CustomerKeys.map((key) => [key, visibleColumns.includes(key)])
	);

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

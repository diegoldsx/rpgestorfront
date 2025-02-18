"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/common/data-table/data-table";
import { columns } from "./columns";
import {
	Customer,
	customerTypeOptions,
	statusOptions,
} from "../../types/customer";
import { RowModel } from "@tanstack/react-table";

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

	return (
		<>
			<h1>Tabela de clientes</h1>

			<DataTable
				columns={columns}
				data={data}
				facetedFilters={facetedFilters}
			/>
		</>
	);
}

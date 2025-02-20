"use client";

import * as React from "react";
import { DataTable } from "@/components/common/data-table/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Transfer, transferConfig } from "../../types/Transfer";

interface TransferDataTableProps {
	data: Transfer[];
	columns: ColumnDef<Transfer>[];
}

export function TransferDataTable<T>({
	data,
	columns,
}: TransferDataTableProps) {
	const provisionFacetedFilters = transferConfig
		.filter((prov) => prov.options)
		.map((prov) => ({ ...prov }));

	return (
		<>
			<DataTable
				columns={columns}
				data={data}
				facetedFilters={provisionFacetedFilters}
			/>
		</>
	);
}

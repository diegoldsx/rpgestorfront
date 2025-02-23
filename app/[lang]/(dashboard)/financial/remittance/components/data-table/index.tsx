"use client";

import * as React from "react";
import { DataTable } from "@/components/common/data-table/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Remittance } from "../../types/Connections";

interface RemittanceDataTable {
	data: Remittance[];
	columns: ColumnDef<Remittance>[];
	filters: any;
}

export function RemittanceDataTable<T>({
	data,
	columns,
	filters,
}: RemittanceDataTable) {
	return (
		<>
			<DataTable columns={columns} data={data} facetedFilters={filters} />
		</>
	);
}

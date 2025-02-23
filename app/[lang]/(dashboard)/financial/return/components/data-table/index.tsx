"use client";

import * as React from "react";
import { DataTable as Table } from "@/components/common/data-table/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Return } from "../../types/Return";

interface DataTable {
	data: Return[];
	columns: ColumnDef<Return>[];
	filters: any;
}

export function DataTable<T>({ data, columns, filters }: DataTable) {
	return (
		<>
			<Table columns={columns} data={data} facetedFilters={filters} />
		</>
	);
}

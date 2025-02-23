"use client";

import * as React from "react";
import { DataTable } from "@/components/common/data-table/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Provision, provisionConfig } from "../../types/Provision";

interface ProvisionDataTableProps {
	data: Provision[];
	columns: ColumnDef<Provision>[];
}

export function ProvisionDataTable<T>({
	data,
	columns,
}: ProvisionDataTableProps) {
	return (
		<>
			<DataTable
				columns={columns}
				data={data}
				//facetedFilters={provisionFacetedFilters}
			/>
		</>
	);
}

"use client";

import * as React from "react";
import { DataTable } from "@/components/common/data-table/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { getOptions, PaymentGroup } from "../../types/PaymentGroup";

interface PaymentGroupDataTableProps {
	data: PaymentGroup[];
	columns: ColumnDef<PaymentGroup>[];
}

export function PaymentGroupDataTable<T>({
	data,
	columns,
}: PaymentGroupDataTableProps) {
	const optionsList = getOptions();
	return (
		<>
			<DataTable
				columns={columns}
				data={data}
				//facetedFilters={facetedFilters}
			/>
		</>
	);
}

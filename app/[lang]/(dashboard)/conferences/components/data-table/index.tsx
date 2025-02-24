"use client";

import * as React from "react";
import { DataTable } from "@/components/common/data-table/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Conference } from "../../types/Conference";

interface ConferenceDataTableProps {
	data: Conference[];
	columns: ColumnDef<Conference>[];
}

export function ConferenceTable<T>({
	data,
	columns,
}: ConferenceDataTableProps) {
	return (
		<>
			<DataTable columns={columns} data={data} />
		</>
	);
}

"use client";

import { Table } from "@tanstack/react-table";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { DataTableViewOptions } from "@/app/[lang]/(dash-components)/(apps)/projects/project-list/components/data-table-view-options";
import { Member } from "../../types/Member";

interface DataTableToolbarProps {
	table: Table<Member>;
}

export function DataTableToolbar({ table }: DataTableToolbarProps) {
	return (
		<div className="flex flex-col md:flex-row gap-4">
			<div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-3">
				<div className="flex items-center gap-3">
					<span className="text-base font-medium text-default-600">Exibir</span>
					<Select>
						<SelectTrigger className="w-20" size="md" radius="sm">
							<SelectValue placeholder="10" />
						</SelectTrigger>
						<SelectContent className="w-20 min-w-[80px]">
							{[10, 20, 30, 40, 50].map((pageSize) => (
								<SelectItem key={pageSize} value={`${pageSize}`}>
									{pageSize}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>
			<div className="flex-none flex flex-col sm:flex-row sm:items-center gap-4">
				<DataTableViewOptions table={table} />
			</div>
		</div>
	);
}

import { flexRender, HeaderGroup } from "@tanstack/react-table";
import { TableRow, TableHead } from "@/components/ui/table";
import { Icon } from "@iconify/react";

interface TableHeaderProps<TData> {
	headerGroups: HeaderGroup<TData>[];
}

export default function TableHeader<TData>({
	headerGroups,
}: TableHeaderProps<TData>) {
	return (
		<thead>
			{headerGroups.map((headerGroup) => (
				<TableRow key={headerGroup.id}>
					{headerGroup.headers.map((header) => (
						<TableHead
							key={header.id}
							colSpan={header.colSpan}
							className="  cursor-pointer select-none"
							onClick={header.column.getToggleSortingHandler()}
							style={{ width: header.getSize() }} // ← ESSENCIAL
						>
							{header.isPlaceholder ? null : (
								<div className="flex items-center gap-2">
									{flexRender(
										header.column.columnDef.header,
										header.getContext()
									)}
									{header.column.getIsSorted() === "asc" ? (
										<Icon
											icon="heroicons:arrow-up-solid"
											className="text-md text-gray-600"
										/>
									) : header.column.getIsSorted() === "desc" ? (
										<Icon
											icon="heroicons:arrow-down-solid"
											className="text-md text-gray-600"
										/>
									) : (
										<Icon
											icon="heroicons:arrows-up-down-solid"
											className="text-lg text-gray-400 opacity-50"
										/>
									)}
								</div>
							)}
						</TableHead>
					))}
				</TableRow>
			))}
		</thead>
	);
}

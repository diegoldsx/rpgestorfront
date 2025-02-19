"use client";

import React from "react";
import { saveAs } from "file-saver";
import { utils, write } from "xlsx";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { Table } from "@tanstack/react-table";
import { Icon } from "@iconify/react";

interface TableDataExporterProps<TData> {
	table: Table<TData>;
	notExport?: string[];
}

export const TableDataExporter: React.FC<TableDataExporterProps<any>> = ({
	table,
	notExport = ["actions", "select"],
}) => {
	const visibleColumns = table
		.getAllColumns()
		.filter((col) => col.getIsVisible() && !notExport.includes(col.id));

	const exportToExcel = () => {
		const data = table
			.getCoreRowModel()
			.rows.map((row) =>
				Object.fromEntries(
					visibleColumns.map((col) => [
						col.id ?? (col.columnDef.header as string),
						row.original[col.id as keyof typeof row.original] ?? "",
					])
				)
			);

		const worksheet = utils.json_to_sheet(data);
		const workbook = utils.book_new();
		utils.book_append_sheet(workbook, worksheet, "Data");

		const excelBuffer = write(workbook, { bookType: "xlsx", type: "array" });
		const blob = new Blob([excelBuffer], {
			type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
		});

		saveAs(blob, "table-data.xlsx");
	};

	const exportToPDF = () => {
		const doc = new jsPDF({
			orientation: "landscape",
			unit: "mm",
			format: "a4",
		});

		const headers = visibleColumns.map((col) =>
			String(col.columnDef.header ?? col.id)
		);

		const data = table
			.getCoreRowModel()
			.rows.map((row) =>
				visibleColumns.map((col) => String(row.getValue(col.id) ?? ""))
			);

		doc.setFontSize(10);
		doc.text("Table Data", 14, 10);

		autoTable(doc, {
			head: [headers],
			body: data,
			startY: 15,
			styles: { fontSize: 7, cellPadding: 2, overflow: "linebreak" },
			margin: { top: 15, left: 5, right: 5 },
		});

		doc.save("table-data.pdf");
	};

	return (
		<div className="flex gap-2">
			<button
				onClick={exportToExcel}
				title="Exportar para Excel"
				className="flex items-center cursor-pointer hover:opacity-80"
			>
				<Icon
					icon="mdi:file-excel-outline"
					className="h-6 w-6 text-green-500 opacity-70"
				/>
			</button>
			<button
				onClick={exportToPDF}
				title="Exportar para PDF"
				className="flex items-center cursor-pointer hover:opacity-80"
			>
				<Icon
					icon="mdi:file-pdf-outline"
					className="h-6 w-6 text-red-500 opacity-60"
				/>
			</button>
		</div>
	);
};

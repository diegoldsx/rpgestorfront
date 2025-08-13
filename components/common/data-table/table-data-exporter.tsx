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
	const visibleColumns = table.getAllColumns().filter((c) => c.getIsVisible() && !notExport.includes(c.id));
	const getLabel = (col: any) => {
		const h = col.columnDef.header;
		return typeof h === "string" ? h : col.columnDef.meta?.label ?? String(col.id);
	};

	const exportToExcel = () => {
		const headers = visibleColumns.map(getLabel);
		const rows = table.getCoreRowModel().rows.map((row) =>
			visibleColumns.map((col) => {
				const v = row.getValue(col.id);
				return v == null ? "" : v;
			})
		);
		const worksheet = utils.aoa_to_sheet([headers, ...rows]);
		const workbook = utils.book_new();
		utils.book_append_sheet(workbook, worksheet, "Data");
		const excelBuffer = write(workbook, { bookType: "xlsx", type: "array" });
		const blob = new Blob([excelBuffer], {
			type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
		});
		saveAs(blob, "table-data.xlsx");
	};

	const exportToPDF = () => {
		const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
		const headers = visibleColumns.map(getLabel);
		const data = table.getCoreRowModel().rows.map((row) =>
			visibleColumns.map((col) => {
				const v = row.getValue(col.id);
				return v == null ? "" : String(v);
			})
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
				<Icon icon="mdi:file-excel-outline" className="h-6 w-6" />
			</button>
			<button
				onClick={exportToPDF}
				title="Exportar para PDF"
				className="flex items-center cursor-pointer hover:opacity-80"
			>
				<Icon icon="mdi:file-pdf-outline" className="h-6 w-6" />
			</button>
		</div>
	);
};

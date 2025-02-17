"use client";

import React from "react";
import { saveAs } from "file-saver";
import { utils, write } from "xlsx";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { Table } from "@tanstack/react-table";
import { Icon } from "@iconify/react";
import { Member } from "../../types/Member";

interface DataExporterProps {
	table: Table<Member>;
}

export const DataExporter: React.FC<DataExporterProps> = ({ table }) => {
	const notExport = ["actions", "select"];

	const visibleColumns = table
		.getAllColumns()
		.filter((col) => col.getIsVisible() && !notExport.includes(col.id));

	const exportToExcel = () => {
		const data = table
			.getCoreRowModel()
			.rows.map((row) =>
				Object.fromEntries(
					visibleColumns.map((col) => [
						col.id ?? col.columnDef.header,
						row.original[col.id as keyof typeof row.original],
					])
				)
			);

		const worksheet = utils.json_to_sheet(data);
		const workbook = utils.book_new();
		utils.book_append_sheet(workbook, worksheet, "Data");

		const excelBuffer = write(workbook, {
			bookType: "xlsx",
			type: "array",
		});
		const blob = new Blob([excelBuffer], { type: "application/octet-stream" });

		saveAs(blob, "table-data.xlsx");
	};

	const exportToPDF = () => {
		const doc = new jsPDF({
			orientation: "landscape",
			unit: "mm",
			format: "a4",
		});

		const headers = visibleColumns.map((col) => String(col.columnDef.header));

		const data = table.getCoreRowModel().rows.map((row) =>
			row
				.getVisibleCells()
				.filter((cell) =>
					visibleColumns.some((col) => col.id === cell.column.id)
				)
				.map((cell) => String(cell.getValue() ?? ""))
		);

		doc.setFontSize(10);
		doc.text("Table Data", 14, 10);

		autoTable(doc, {
			head: [headers],
			body: data,
			startY: 15,
			styles: {
				fontSize: 7,
				cellPadding: 2,
				overflow: "linebreak",
			},
			columnStyles: {
				0: { cellWidth: 20 },
				1: { cellWidth: "auto" },
			},
			margin: { top: 15, left: 5, right: 5 },
		});

		doc.save("dados-associados.pdf");
	};

	return (
		<div className="flex gap-1">
			<span
				onClick={exportToExcel}
				className="flex border-0 items-center cursor-pointer"
			>
				<Icon icon="mdi:file-excel-outline" className="h-6 w-6 text-primary" />
			</span>
			<span
				onClick={exportToPDF}
				className="flex items-center border-0 cursor-pointer"
			>
				<Icon icon="mdi:file-pdf-outline" className="h-6 w-6 text-primary" />
			</span>
		</div>
	);
};

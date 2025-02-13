"use client";

import * as React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react"; // Importando Iconify

interface ExportTableProps {
	table: Table<any>;
}

export const ExportTable: React.FC<ExportTableProps> = ({ table }) => {
	const exportToExcel = () => {
		const data = table.getCoreRowModel().rows.map((row) => row.original);
		const worksheet = XLSX.utils.json_to_sheet(data);
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

		const excelBuffer = XLSX.write(workbook, {
			bookType: "xlsx",
			type: "array",
		});
		const blob = new Blob([excelBuffer], { type: "application/octet-stream" });

		saveAs(blob, "table-data.xlsx");
	};

	const exportToPDF = () => {
		const doc = new jsPDF();
		const headers = table
			.getAllColumns()
			.filter((col) => col.getIsVisible())
			.map((col) => String(col.columnDef.header)); // Convertendo para string

		const data = table
			.getCoreRowModel()
			.rows.map((row) =>
				row.getVisibleCells().map((cell) => String(cell.getValue() ?? ""))
			);

		doc.text("Table Data", 14, 10);
		autoTable(doc, {
			head: [headers],
			body: data,
			startY: 20,
		});

		doc.save("table-data.pdf");
	};

	return (
		<div className="flex gap-1">
			<span onClick={exportToExcel} className="flex border-0 items-center">
				<Icon icon="mdi:file-excel-outline" className="h-6 w-6 text-primary" />
			</span>
			<span onClick={exportToPDF} className="flex items-center border-0">
				<Icon icon="mdi:file-pdf-outline" className="h-6 w-6 text-primary" />
			</span>
		</div>
	);
};

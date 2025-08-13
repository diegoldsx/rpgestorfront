"use client";

import React from "react";
import { saveAs } from "file-saver";
import { utils, write } from "xlsx-js-style";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { Table } from "@tanstack/react-table";
import { Icon } from "@iconify/react";

interface TableDataExporterProps<TData> {
	table: Table<TData>;
	notExport?: string[];
	fileName?: string;
}

export const TableDataExporter = <TData,>({
	table,
	notExport = ["actions", "select"],
	fileName = "dados_tabela",
}: TableDataExporterProps<TData>) => {
	const visibleColumns = table.getAllColumns().filter((c) => c.getIsVisible() && !notExport.includes(c.id));

	const headers = visibleColumns
		.map((col) => (typeof col.columnDef.header === "string" ? col.columnDef.header : String(col.id)))
		.map((h) => h.normalize("NFC"));

	const tableData = table.getCoreRowModel().rows.map((row) =>
		visibleColumns.map((col) => {
			const v = row.getValue(col.id);
			return v == null ? "" : String(v);
		})
	);

	const exportToExcel = () => {
		const ws = utils.aoa_to_sheet([headers, ...tableData]);

		const range = utils.decode_range(ws["!ref"] || "A1:A1");
		for (let c = range.s.c; c <= range.e.c; c++) {
			const addr = utils.encode_cell({ r: 0, c });
			if (!ws[addr]) continue;
			ws[addr].s = { font: { bold: true } };
		}

		const MIN_COL_SIZE = 200;
		const PX_TO_CH = 8;
		ws["!cols"] = visibleColumns.map((col) => {
			const px = Math.max(col.getSize?.() ?? 0, MIN_COL_SIZE);
			return { wch: Math.ceil(px / PX_TO_CH) };
		});

		const wb = utils.book_new();
		utils.book_append_sheet(wb, ws, "Dados");
		const buf = write(wb, { bookType: "xlsx", type: "array" });
		saveAs(
			new Blob([buf], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }),
			`${fileName}.xlsx`
		);
	};

	const exportToPDF = () => {
		const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
		doc.setFontSize(10);
		doc.text("Relatório da Tabela", 10, 10);
		autoTable(doc, {
			head: [headers],
			body: tableData,
			startY: 15,
			styles: { fontSize: 7, cellPadding: 20, overflow: "linebreak" },
			headStyles: { fontStyle: "bold", fontSize: 8 },
			margin: { top: 15, left: 5, right: 5 },
		});
		doc.save(`${fileName}.pdf`);
	};

	return (
		<div className="flex gap-2">
			<button
				onClick={exportToExcel}
				title="Exportar para Excel"
				className="flex items-center p-2 text-green-700 rounded-md hover:bg-gray-100 transition-colors"
			>
				<Icon icon="mdi:file-excel-outline" className="h-6 w-6" />
			</button>
			<button
				onClick={exportToPDF}
				title="Exportar para PDF"
				className="flex items-center p-2 text-red-700 rounded-md hover:bg-gray-100 transition-colors"
			>
				<Icon icon="mdi:file-pdf-outline" className="h-6 w-6" />
			</button>
		</div>
	);
};

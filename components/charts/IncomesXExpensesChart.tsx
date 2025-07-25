"use client";

import dynamic from "next/dynamic";
import { DatePicker } from "../date-picker";
import { DatePickerRange } from "../date-picker-range";
import { DatePickerRangeByMonth } from "../date-picker-range-by-month";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export type IncomesXExpensesChartProps = {
	total: number;
	totalIncomes: number;
	totalExpenses: number;
	series: number[];
	categories: string[];
};

export function IncomesXExpensesChart({
	total,
	series,
	categories,
	totalExpenses,
	totalIncomes,
}: IncomesXExpensesChartProps) {
	const chartOptions = {
		chart: { type: "bar" as const, toolbar: { show: false } },
		xaxis: { categories },
		plotOptions: {
			bar: {
				borderRadius: 4,
				columnWidth: "50%",
			},
		},
		dataLabels: { enabled: false },
		colors: ["#06b6d4"],
		tooltip: {
			y: {
				formatter: (val: number) => val.toString(),
			},
		},
	};

	return (
		<div className="p-4 bg-white rounded-md shadow">
			<div className="flex justify-between items-center mb-2">
				<div className="flex gap-2">
					<DatePickerRangeByMonth />
				</div>
				<div>
					<h3 className="text-md font-semibold">Receitas x Despesas</h3>
				</div>
				<p className="text-2xl font-bold text-cyan-600">{total}</p>
			</div>

			<div className="mb-4">
				<p className="text-sm font-medium text-muted-foreground mb-1">Associados por Região</p>
				<ApexChart options={chartOptions} series={[{ name: "Associados", data: series }]} type="bar" height={200} />
			</div>

			<table className="w-full text-sm border-t">
				<thead>
					<tr className="text-left">
						<th className="py-2">Região</th>
						<th className="py-2 text-right">Total</th>
					</tr>
				</thead>
			</table>
		</div>
	);
}

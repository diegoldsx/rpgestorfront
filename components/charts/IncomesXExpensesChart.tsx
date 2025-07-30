"use client";

import dynamic from "next/dynamic";
import { useState, useTransition, useEffect } from "react";
import { DatePickerRangeByMonth } from "../date-picker-range-by-month";
import { getIncomeXExpensesChartData } from "@/app/action/charts/getIncomeXExpensesAction";
import { subMonths, endOfMonth, startOfMonth } from "date-fns";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export type IncomesXExpensesChartProps = {
	total: number;
	totalIncomes: number;
	totalExpenses: number;
	series: number[];
	categories: string[];
};

interface ApexSeries {
	name: string;
	data: number[];
}

export function IncomesXExpensesChart({
	total,
	series,
	categories,
	totalExpenses,
	totalIncomes,
}: IncomesXExpensesChartProps) {
	const [data, setData] = useState<{
		series: ApexSeries[];
		categories: string[];
		total: number;
		totalIncomes: number;
		totalExpenses: number;
	}>({
		series: [
			{ name: "Receitas", data: [] },
			{ name: "Despesas", data: [] },
		],
		categories: [],
		total: 0,
		totalIncomes: 0,
		totalExpenses: 0,
	});

	const [isPending, startTransition] = useTransition();

	useEffect(() => {
		const now = new Date();
		const from = startOfMonth(subMonths(now, 5)); // inclui o mês atual + últimos 5
		const to = endOfMonth(now);

		handleRangeChange({ from, to });
	}, []);

	const handleRangeChange = (range: { from: Date; to: Date }) => {
		startTransition(async () => {
			const response = await getIncomeXExpensesChartData(range);
			const totalIncomes = response.series[0]?.data.reduce((a: any, b: any) => a + b, 0) || 0;
			const totalExpenses = response.series[1]?.data.reduce((a: any, b: any) => a + b, 0) || 0;
			const total = totalIncomes - totalExpenses;

			setData({
				series: response.series,
				categories: response.categories,
				total,
				totalIncomes,
				totalExpenses,
			});
		});
	};

	const chartOptions = {
		chart: { type: "area" as const, toolbar: { show: false } },
		xaxis: { categories: data.categories },
		yaxis: {
			min: 0,
			max: Math.ceil(Math.max(...data.series.flatMap((s) => s.data)) / 2000) * 2000,
			tickAmount: Math.ceil(Math.ceil(Math.max(...data.series.flatMap((s) => s.data)) / 2000)),
			labels: {
				formatter: (val: number | string) => `${Number(val).toFixed(0)}$`,
			},
		},
		stroke: { curve: "smooth" as const, width: 2 },
		markers: { size: 4 },
		dataLabels: { enabled: false },
		colors: ["#86efac", "#fca5a5"],
		tooltip: {
			y: {
				formatter: (val: number) => val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
			},
		},
	};

	return (
		<div className="p-4 bg-white rounded-md shadow">
			<div className="flex justify-between items-center mb-2">
				<div className="flex gap-2">
					<DatePickerRangeByMonth onRangeSelect={handleRangeChange} />
				</div>
				<div>
					<h3 className="text-md font-semibold">Receitas x Despesas</h3>
				</div>
				<p className="text-2xl font-bold text-cyan-600">
					{data.total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
				</p>
			</div>

			<div className="mb-4">
				<p className="text-sm font-medium text-muted-foreground mb-1">Totais mensais</p>
				{isPending ? (
					<div className="flex justify-center items-center h-48">
						<div className="animate-spin rounded-full h-8 w-8 border-4 border-cyan-600 border-t-transparent"></div>
					</div>
				) : (
					<ApexChart options={chartOptions} series={data.series} type="area" height={400} />
				)}
			</div>

			<table className="w-full text-sm border-t">
				<thead>
					<tr className="text-left">
						<th className="py-2">Total Receitas</th>
						<th className="py-2 text-right">Total Despesas</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="py-1">
							{data.totalIncomes.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
						</td>
						<td className="py-1 text-right">
							{data.totalExpenses.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

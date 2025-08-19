import dynamic from "next/dynamic";
import { useState, useTransition, useEffect, useMemo } from "react";
import { startOfMonth, endOfMonth, subMonths, format } from "date-fns";
import { ptBR } from "date-fns/locale"; // Importa o locale para português
import { DatePickerRangeByMonth } from "../date-picker-range-by-month";

// Mock data
const mockTransactions = [
	{ date: new Date("2025-01-10"), type: "income", amount: 1200 },
	{ date: new Date("2025-01-14"), type: "expense", amount: 300 },
	{ date: new Date("2025-02-01"), type: "income", amount: 15000 },
	{ date: new Date("2025-02-20"), type: "expense", amount: 600 },
	{ date: new Date("2025-03-10"), type: "income", amount: 800 },
	{ date: new Date("2025-03-25"), type: "expense", amount: 2000 },
	{ date: new Date("2025-04-05"), type: "income", amount: 1300 },
	{ date: new Date("2025-04-18"), type: "expense", amount: 400 },
	{ date: new Date("2025-05-11"), type: "income", amount: 14000 },
	{ date: new Date("2025-05-28"), type: "expense", amount: 700 },
	{ date: new Date("2025-06-03"), type: "income", amount: 16000 },
	{ date: new Date("2025-06-21"), type: "expense", amount: 20000 },
	{ date: new Date("2025-07-15"), type: "income", amount: 1100 },
	{ date: new Date("2025-07-30"), type: "expense", amount: 350 },
	{ date: new Date("2025-08-08"), type: "income", amount: 1250 },
	{ date: new Date("2025-08-22"), type: "expense", amount: 600 },
	{ date: new Date("2025-09-09"), type: "income", amount: 17000 },
	{ date: new Date("2025-09-27"), type: "expense", amount: 450 },
	{ date: new Date("2025-10-06"), type: "income", amount: 1350 },
	{ date: new Date("2025-10-23"), type: "expense", amount: 23430 },
	{ date: new Date("2025-11-12"), type: "income", amount: 1450 },
	{ date: new Date("2025-11-29"), type: "expense", amount: 550 },
	{ date: new Date("2025-12-17"), type: "income", amount: 15050 },
	{ date: new Date("2025-12-30"), type: "expense", amount: 650 },
];

// Mock data fetch function
const getIncomeXExpensesChartData = async (range: { from: Date; to: Date }) => {
	const months: string[] = [];
	const incomes: number[] = [];
	const expenses: number[] = [];

	let current = new Date(range.from);
	while (current <= range.to) {
		// Usa o locale ptBR para formatar meses em português
		months.push(format(current, "MMM yyyy", { locale: ptBR }));
		const monthTransactions = mockTransactions.filter(
			(t) => t.date.getMonth() === current.getMonth() && t.date.getFullYear() === current.getFullYear()
		);
		incomes.push(monthTransactions.filter((t) => t.type === "income").reduce((sum, t) => sum + t.amount, 0));
		expenses.push(monthTransactions.filter((t) => t.type === "expense").reduce((sum, t) => sum + t.amount, 0));
		current = new Date(current.setMonth(current.getMonth() + 1));
	}

	return {
		series: [
			{ name: "Receitas", data: incomes },
			{ name: "Despesas", data: expenses },
		],
		categories: months,
	};
};

// Types
interface ApexSeries {
	name: string;
	data: number[];
}

interface ChartData {
	series: ApexSeries[];
	categories: string[];
	total: number;
	totalIncomes: number;
	totalExpenses: number;
}

interface DateRange {
	from: Date;
	to: Date;
}

// Dynamic import for ApexCharts
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

/**
 * IncomesXExpensesChart component displays a chart comparing incomes and expenses over time
 */
export function IncomesXExpensesChart() {
	const [data, setData] = useState<ChartData>({
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
	const [error, setError] = useState<string | null>(null);

	// Initialize date range
	useEffect(() => {
		const now = new Date();
		const from = startOfMonth(subMonths(now, 11));
		const to = endOfMonth(now);
		handleRangeChange({ from, to });
	}, []);

	// Handle date range change
	const handleRangeChange = async (range: DateRange) => {
		startTransition(async () => {
			try {
				const response = await getIncomeXExpensesChartData(range);
				const totalIncomes = response.series[0].data.reduce((sum, val) => sum + val, 0);
				const totalExpenses = response.series[1].data.reduce((sum, val) => sum + val, 0);
				setData({
					series: response.series,
					categories: response.categories,
					total: totalIncomes - totalExpenses,
					totalIncomes,
					totalExpenses,
				});
				setError(null);
			} catch (err) {
				setError("Falha ao carregar dados do gráfico");
				console.error(err);
			}
		});
	};

	// Memoize chart options to prevent unnecessary re-renders
	const chartOptions = useMemo(
		() => ({
			chart: {
				type: "area" as const,
				toolbar: { show: false },
			},
			xaxis: {
				categories: data.categories,
				labels: {
					style: {
						fontSize: "12px",
					},
				},
			},
			yaxis: {
				min: 0,
				max: data.series.length ? Math.ceil(Math.max(...data.series.flatMap((s) => s.data)) / 2000) * 2000 : 10000,
				tickAmount: data.series.length ? Math.ceil(Math.max(...data.series.flatMap((s) => s.data)) / 2000) : 5,
				labels: {
					formatter: (val: number) => `R$${val.toLocaleString("pt-BR")}`,
				},
			},
			stroke: {
				curve: "smooth" as const,
				width: 2,
			},
			markers: {
				size: 4,
			},
			dataLabels: {
				enabled: false,
			},
			colors: ["#86efac", "#fca5a5"],
			tooltip: {
				y: {
					formatter: (val: number) => val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
				},
			},
		}),
		[data]
	);

	return (
		<div className="p-4 bg-white rounded-md shadow-md">
			<div className="flex justify-between items-center mb-4">
				<DatePickerRangeByMonth onRangeSelect={handleRangeChange} />
				<div className="text-right">
					<h3 className="text-lg font-semibold text-gray-800">Receitas x Despesas</h3>
					<p className="text-2xl font-bold text-cyan-600">
						{data.total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
					</p>
				</div>
			</div>

			<div className="mb-4">
				<p className="text-sm font-medium text-gray-600 mb-2">Totais mensais</p>
				{error ? (
					<div className="text-red-500 text-center">{error}</div>
				) : isPending ? (
					<div className="flex justify-center items-center h-48">
						<div className="animate-spin rounded-full h-8 w-8 border-4 border-cyan-600 border-t-transparent"></div>
					</div>
				) : (
					<ApexChart options={chartOptions} series={data.series} type="area" height={400} />
				)}
			</div>

			<table className="w-full text-sm border-t border-gray-200">
				<thead>
					<tr className="text-left text-gray-700">
						<th className="py-2 font-medium">Total Receitas</th>
						<th className="py-2 font-medium text-right">Total Despesas</th>
					</tr>
				</thead>
				<tbody>
					<tr className="text-gray-600">
						<td className="py-2">
							{data.totalIncomes.toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL",
							})}
						</td>
						<td className="py-2 text-right">
							{data.totalExpenses.toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL",
							})}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

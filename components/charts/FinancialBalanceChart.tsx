"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import type { ApexOptions } from "apexcharts";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const GREEN_MAIN = "#22c55e";
const RED_MAIN = "#f43f5e";

const GREEN_SHADES = ["#166534", "#15803d", "#16a34a", "#22c55e", "#059669", "#047857", "#065f46", "#064e3b"];
const RED_SHADES = ["#9f1239", "#be123c", "#e11d48", "#f43f5e", "#b91c1c", "#991b1b", "#7f1d1d", "#450a0a"];

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

const balanceMock = {
	costCenter: [
		{ chart: { label: "Centro A", value: "a" }, income: 15000, expenses: 8500 },
		{ chart: { label: "Centro B", value: "b" }, income: 22000, expenses: 12000 },
		{ chart: { label: "Centro C", value: "c" }, income: 18000, expenses: 9500 },
	],
	category: [
		{ chart: { label: "Vendas", value: "sales" }, income: 35000, expenses: 5000 },
		{ chart: { label: "Serviços", value: "services" }, income: 25000, expenses: 15000 },
		{ chart: { label: "Produtos", value: "products" }, income: 18000, expenses: 9000 },
	],
};

type GroupBy = "category" | "costCenter";

const pickShades = (palette: string[], n: number) =>
	n <= palette.length ? palette.slice(0, n) : Array.from({ length: n }, (_, i) => palette[i % palette.length]);

function useBalanceDonuts(groupBy: GroupBy, data: typeof balanceMock) {
	const rows = data[groupBy];

	const labels = useMemo(() => rows.map((r) => r.chart.label), [rows]);
	const incomes = useMemo(() => rows.map((r) => r.income), [rows]);
	const expenses = useMemo(() => rows.map((r) => r.expenses), [rows]);

	const totals = useMemo(
		() => ({
			income: incomes.reduce((a, b) => a + b, 0),
			expenses: expenses.reduce((a, b) => a + b, 0),
		}),
		[incomes, expenses]
	);
	const balance = totals.income - totals.expenses;

	const makeOptions = (labelsArr: string[], colors: string[]): ApexOptions => ({
		chart: {
			type: "donut",
			background: "transparent",
			toolbar: { show: false },
			animations: { enabled: false },
		},
		labels: labelsArr,
		legend: { show: false },
		tooltip: { theme: "light", fillSeriesColor: false, y: { formatter: (val) => brl.format(Number(val || 0)) } },
		colors,
		dataLabels: { enabled: false },
		plotOptions: { pie: { donut: { size: "70%", labels: { show: false } } } },
		fill: { opacity: 1 },
		states: { hover: { filter: { type: "darken" } }, active: { filter: { type: "darken" } } },
		stroke: { width: 1, colors: ["#e5e7eb"] },
	});

	const incomeColors = useMemo(() => pickShades(GREEN_SHADES, labels.length), [labels]);
	const expenseColors = useMemo(() => pickShades(RED_SHADES, labels.length), [labels]);

	const incomeOptions = useMemo(() => makeOptions(labels, incomeColors), [labels, incomeColors]);
	const expensesOptions = useMemo(() => makeOptions(labels, expenseColors), [labels, expenseColors]);

	return {
		series: { incomes, expenses },
		options: { income: incomeOptions, expenses: expensesOptions },
		totals,
		balance,
	};
}

export function FinancialBalanceDonuts({ data = balanceMock }: { data?: typeof balanceMock }) {
	const [groupBy, setGroupBy] = useState<GroupBy>("category");
	const { series, options, totals, balance } = useBalanceDonuts(groupBy, data);

	return (
		<div className="flex h-full flex-col">
			{/* Header */}
			<header className="flex-shrink-0 border-b p-4">
				<RadioGroup value={groupBy} onValueChange={(v) => setGroupBy(v as GroupBy)} className="flex gap-4">
					<div className="flex items-center gap-2">
						<RadioGroupItem id="by-category" value="category" />
						<Label htmlFor="by-category" className="text-sm font-semibold text-gray-900">
							Categorias
						</Label>
					</div>
					<div className="flex items-center gap-2">
						<RadioGroupItem id="by-costcenter" value="costCenter" />
						<Label htmlFor="by-costcenter" className="text-sm font-semibold text-gray-900">
							Centro de Custo
						</Label>
					</div>
				</RadioGroup>
			</header>

			{/* Charts */}
			<div className="flex flex-1 flex-col items-center justify-center gap-2 p-2 md:flex-row">
				<div className="flex w-full flex-1 flex-col items-center">
					<div className="mb-2 text-sm text-gray-700">Receitas</div>
					<div className="h-full w-full max-w-[360px]">
						<Chart
							key={`income-${groupBy}`}
							options={options.income}
							series={series.incomes}
							type="donut"
							height="100%"
							width="100%"
						/>
					</div>
				</div>

				<div className="flex w-full flex-1 flex-col items-center">
					<div className="mb-2 text-sm text-gray-700">Despesas</div>
					<div className="h-full w-full max-w-[360px]">
						<Chart
							key={`expenses-${groupBy}`}
							options={options.expenses}
							series={series.expenses}
							type="donut"
							height="100%"
							width="100%"
						/>
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className="flex-shrink-0 border-t p-4">
				<div className="flex justify-between text-sm">
					<div>
						<div className="text-gray-700">Total Receitas</div>
						<div className="text-emerald-500">{brl.format(totals.income)}</div>
					</div>
					<div>
						<div className="text-gray-700">Total Despesas</div>
						<div className="text-rose-500">{brl.format(totals.expenses)}</div>
					</div>
					<div>
						<div className="text-gray-700">Saldo</div>
						<div className={balance < 0 ? "text-rose-600" : "text-emerald-700"}>{brl.format(balance)}</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

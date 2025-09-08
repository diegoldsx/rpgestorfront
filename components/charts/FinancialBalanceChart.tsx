"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import type { ApexOptions } from "apexcharts";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// Cores padronizadas
const GREEN_MAIN = "#22c55e";
const RED_MAIN = "#f43f5e";

const GREEN_SHADES = ["#166534", "#15803d", "#16a34a", "#22c55e", "#059669", "#047857", "#065f46", "#064e3b"];
const RED_SHADES = ["#9f1239", "#be123c", "#e11d48", "#f43f5e", "#b91c1c", "#991b1b", "#7f1d1d", "#450a0a"];

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

// MOCK — substitua pelos seus dados
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
			background: "transparent", // sem fundo preto
			toolbar: { show: false },
			animations: { enabled: false },
		},
		labels: labelsArr,
		legend: { show: false },
		theme: { mode: "light" }, // mantém tudo claro
		tooltip: {
			theme: "light", // tooltip claro
			fillSeriesColor: false,
			y: { formatter: (val) => brl.format(Number(val || 0)) },
		},
		colors,
		dataLabels: { enabled: false },
		plotOptions: { pie: { donut: { size: "70%", labels: { show: false } } } },
		fill: { opacity: 1 },
		states: {
			hover: { filter: { type: "darken" } }, // escurece no hover sem trocar o fundo
			active: { filter: { type: "darken" } },
		},
		stroke: { width: 1, colors: ["#e5e7eb"] }, // separação sutil (cinza claro)
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

function Legend() {
	return (
		<div className="flex items-center gap-4 text-sm">
			<span className="inline-flex items-center gap-1.5">
				<span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: GREEN_MAIN }} />
				<span className="font-medium">Receitas</span>
			</span>
			<span className="inline-flex items-center gap-1.5">
				<span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: RED_MAIN }} />
				<span className="font-medium">Despesas</span>
			</span>
		</div>
	);
}

export function FinancialBalanceDonuts({ data = balanceMock }: { data?: typeof balanceMock }) {
	const [groupBy, setGroupBy] = useState<GroupBy>("category");
	const { series, options, totals, balance } = useBalanceDonuts(groupBy, data);

	return (
		<Card className="flex flex-col justify-between h-full">
			<CardHeader className="pb-2">
				<div className="flex items-center justify-between gap-4">
					{/* Radio com label selecionada em negrito */}
					<RadioGroup value={groupBy} onValueChange={(v) => setGroupBy(v as GroupBy)} className="flex gap-4 mt-2">
						<div className="flex items-center gap-2">
							<RadioGroupItem id="by-category" value="category" />
							<Label
								htmlFor="by-category"
								className={`text-sm ${groupBy === "category" ? "font-semibold" : "font-normal"}`}
							>
								Categorias
							</Label>
						</div>
						<div className="flex items-center gap-2">
							<RadioGroupItem id="by-costcenter" value="costCenter" />
							<Label
								htmlFor="by-costcenter"
								className={`text-sm ${groupBy === "costCenter" ? "font-semibold" : "font-normal"}`}
							>
								Centro de Custo
							</Label>
						</div>
					</RadioGroup>
				</div>
			</CardHeader>

			<CardContent className="flex justify-center gap-8">
				<div className="flex flex-col items-center">
					<div id="receitas-label" className="text-sm mb-1">
						Receitas
					</div>
					<div role="img" aria-labelledby="receitas-label">
						<Chart
							key={`income-${groupBy}`}
							options={options.income}
							series={series.incomes}
							type="donut"
							height={200}
							width={200}
						/>
					</div>
				</div>
				<div className="flex flex-col items-center">
					<div id="despesas-label" className="text-sm  mb-1">
						Despesas
					</div>
					<div role="img" aria-labelledby="despesas-label">
						<Chart
							key={`expenses-${groupBy}`}
							options={options.expenses}
							series={series.expenses}
							type="donut"
							height={200}
							width={200}
						/>
					</div>
				</div>
			</CardContent>

			<CardFooter className="pt-2 border-t">
				<div className="w-full">
					<div className="flex justify-between text-sm">
						<div>
							<div>Total Receitas</div>
							<div style={{ color: GREEN_MAIN }}>{brl.format(totals.income)}</div>
						</div>
						<div>
							<div>Total Despesas</div>
							<div style={{ color: RED_MAIN }}>{brl.format(totals.expenses)}</div>
						</div>
						<div>
							<div>Saldo</div>
							<div className={balance < 0 ? "text-red-600" : "text-emerald-700"}>{brl.format(balance)}</div>
						</div>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
}

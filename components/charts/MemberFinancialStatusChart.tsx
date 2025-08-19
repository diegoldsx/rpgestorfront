"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import type { ApexOptions } from "apexcharts";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type ChartKey = { label: string; value: string };
type Item = { chart: ChartKey; income: number; expenses: number };
type FinancialBalanceData = { costCenter: Item[]; category: Item[] };

const defaultData: FinancialBalanceData = {
	costCenter: [
		{ chart: { label: "Centro de custo A", value: "cost_center_a" }, income: 1000, expenses: 354 },
		{ chart: { label: "Centro de custo B", value: "cost_center_b" }, income: 2987, expenses: 67 },
		{ chart: { label: "Centro de custo C", value: "cost_center_c" }, income: 2345, expenses: 345 },
		{ chart: { label: "Centro de custo D", value: "cost_center_d" }, income: 543, expenses: 423 },
		{ chart: { label: "Centro de custo E", value: "cost_center_e" }, income: 456, expenses: 345 },
		{ chart: { label: "Centro de custo F", value: "cost_center_f" }, income: 456, expenses: 312 },
	],
	category: [
		{ chart: { label: "Categoria A", value: "category_A" }, income: 432, expenses: 32 },
		{ chart: { label: "Categoria B", value: "category_b" }, income: 4354, expenses: 123 },
		{ chart: { label: "Categoria C", value: "category_c" }, income: 2334, expenses: 321 },
		{ chart: { label: "Categoria D", value: "category_d" }, income: 432, expenses: 12 },
		{ chart: { label: "Categoria E", value: "category_e" }, income: 234, expenses: 2334 },
	],
};

export const bluePalette = ["#b0d9dd", "#89cbd1", "#60bec7", "#51a8b1", "#3c919a", "#2d7980"];
export const redPalette = ["#e0b3ae", "#d88b83", "#d06358", "#c34c3f", "#a14036", "#82332b"];

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export function MemberFinancialStatusChart({
	data = defaultData,
	title = "Receitas x Despesas",
}: {
	data?: FinancialBalanceData;
	title?: string;
}) {
	const [groupBy, setGroupBy] = useState<"category" | "costCenter">("category");

	const items = useMemo(() => data[groupBy] ?? [], [data, groupBy]);

	const totals = useMemo(
		() =>
			items.reduce(
				(acc, i) => {
					acc.income += i.income || 0;
					acc.expenses += i.expenses || 0;
					return acc;
				},
				{ income: 0, expenses: 0 }
			),
		[items]
	);
	const balance = totals.income - totals.expenses;

	const { labels, incomeSeries, expensesSeries } = useMemo(
		() => ({
			labels: items.map((i) => i.chart.label),
			incomeSeries: items.map((i) => i.income),
			expensesSeries: items.map((i) => i.expenses),
		}),
		[items]
	);

	const makeOptions = (labelsArr: string[], colors: string[]): ApexOptions => ({
		chart: { type: "donut", toolbar: { show: false } },
		labels: labelsArr,
		legend: { show: false },
		colors,
		dataLabels: { enabled: false },
		tooltip: { y: { formatter: (v) => brl.format(v as number) } },
		plotOptions: { pie: { donut: { size: "65%", labels: { show: false } } } },
		stroke: { width: 0 },
	});

	const incomeOptions = useMemo(() => makeOptions(labels, bluePalette), [labels, incomeSeries]);
	const expensesOptions = useMemo(() => makeOptions(labels, redPalette), [labels, expensesSeries]);

	return (
		<Card className=" flex flex-col   h-full  gap-4">
			<CardHeader className="flex  ">
				<RadioGroup
					value={groupBy}
					onValueChange={(v) => setGroupBy(v as "category" | "costCenter")}
					className="flex gap-4"
				>
					<div className="flex items-center gap-2">
						<RadioGroupItem id="by-category" value="category" />
						<Label htmlFor="by-category">Categorias</Label>
					</div>
					<div className="flex items-center gap-2">
						<RadioGroupItem id="by-costcenter" value="costCenter" />
						<Label htmlFor="by-costcenter">Centro de Custo</Label>
					</div>
				</RadioGroup>
			</CardHeader>

			<CardContent className="flex-1 flex flex-col md:flex-row gap-4">
				<div className="flex-1 flex flex-col">
					<div className="text-sm font-medium mb-1">Receitas</div>
					<div className="relative w-full aspect-square md:aspect-[4/3]">
						<Chart
							key={`income-${groupBy}`}
							options={incomeOptions}
							series={incomeSeries}
							type="donut"
							height="100%"
							width="100%"
						/>
					</div>
				</div>
				<div className="flex-1 flex flex-col">
					<div className="text-sm font-medium mb-1">Despesas</div>
					<div className="relative w-full aspect-square md:aspect-[4/3]">
						<Chart
							key={`expenses-${groupBy}`}
							options={expensesOptions}
							series={expensesSeries}
							type="donut"
							height="100%"
							width="100%"
						/>
					</div>
				</div>
			</CardContent>
			<CardFooter>
				<div className="flex-1">
					<div className="mt-auto w-full flex flex-col gap-1 border-t pt-2 text-sm">
						<div className="flex">
							<div className="flex-1 text-muted-foreground">Total Receitas</div>
							<div className="flex-1 text-center text-muted-foreground">Total Despesas</div>
							<div className="flex-1 text-right text-muted-foreground">Saldo</div>
						</div>
						<div className="flex">
							<div className="flex-1 font-semibold">{brl.format(totals.income)}</div>
							<div className="flex-1 font-semibold text-center">{brl.format(totals.expenses)}</div>
							<div className={`flex-1 font-semibold text-right ${balance < 0 ? "text-red-700" : "text-emerald-700"}`}>
								{brl.format(balance)}
							</div>
						</div>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
}

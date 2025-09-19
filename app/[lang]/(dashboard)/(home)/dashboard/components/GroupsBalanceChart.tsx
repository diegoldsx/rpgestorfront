// app/components/FinancialBalanceBars.tsx
"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import type { ApexOptions } from "apexcharts";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const GREEN = "#22c55e";
const RED = "#f43f5e";

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

const balanceMock = {
	costCenter: [
		{ chart: { label: "Centro A", value: "a" }, income: 15000, expenses: 8500 },
		{ chart: { label: "Centro B", value: "b" }, income: 22000, expenses: 12000 },
		{ chart: { label: "Centro C", value: "c" }, income: 18000, expenses: 9500 },
		{ chart: { label: "Centro A", value: "a" }, income: 15000, expenses: 8500 },
		{ chart: { label: "Centro B", value: "b" }, income: 22000, expenses: 12000 },
		{ chart: { label: "Centro C", value: "c" }, income: 18000, expenses: 9500 },
		{ chart: { label: "Centro A", value: "a" }, income: 15000, expenses: 8500 },
		{ chart: { label: "Centro B", value: "b" }, income: 22000, expenses: 12000 },
		{ chart: { label: "Centro C", value: "c" }, income: 18000, expenses: 9500 },
	],
	category: [
		{ chart: { label: "Vendas", value: "sales" }, income: 35000, expenses: 5000 },
		{ chart: { label: "Serviços", value: "services" }, income: 25000, expenses: 15000 },
		{ chart: { label: "Produtos", value: "products" }, income: 18000, expenses: 9000 },
		{ chart: { label: "Vendas", value: "sales" }, income: 35000, expenses: 5000 },
		{ chart: { label: "Serviços", value: "services" }, income: 25000, expenses: 15000 },
		{ chart: { label: "Produtos", value: "products" }, income: 18000, expenses: 9000 },
		{ chart: { label: "Vendas", value: "sales" }, income: 35000, expenses: 5000 },
		{ chart: { label: "Serviços", value: "services" }, income: 25000, expenses: 15000 },
		{ chart: { label: "Produtos", value: "products" }, income: 18000, expenses: 9000 },
	],
};

type GroupBy = "category" | "costCenter";

function useBalanceBars(groupBy: GroupBy, data: typeof balanceMock) {
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

	const formatBRL = (val?: number) => brl.format(Number(val ?? 0));

	// Importante: manter apenas chaves compatíveis com ApexOptions da sua versão.
	const options: ApexOptions = useMemo(
		() => ({
			chart: {
				type: "bar",
				background: "transparent",
				toolbar: { show: false },
				animations: { enabled: true, easing: "easeOut" },
			},
			colors: [GREEN, RED],
			legend: { show: false },
			plotOptions: {
				bar: {
					dataLabels: {
						position: "top",
					},
					horizontal: false,
					columnWidth: "20%",
				},
			},
			dataLabels: {
				offsetY: -20,
				enabled: false,
				distributed: true,
				style: {
					fontSize: "11px",
					colors: ["#fff", "#fff"],
					fontWeight: 400,
				},
				background: {
					enabled: true,
					padding: 2,
					opacity: 0.15,
				},
			},

			xaxis: {
				categories: labels,
				axisBorder: { show: false },
				axisTicks: { show: false },
				dataLabels: {
					formatter: (val?: number) => formatBRL(val),
					offsetY: -100,
				},
			},
			yaxis: {
				show: false,
			},
			tooltip: {
				y: { formatter: (val?: number) => formatBRL(val) },
			},
			grid: { strokeDashArray: 3 }, // removido grid.yaxis.lines para evitar conflito de tipos
		}),
		[labels]
	);

	const series = useMemo(
		() => [
			{ name: "Receitas", data: incomes },
			{ name: "Despesas", data: expenses },
		],
		[incomes, expenses]
	);

	return { series, options, totals, balance };
}

export function GroupsBalanceChart({ data = balanceMock }: { data?: typeof balanceMock }) {
	const [groupBy, setGroupBy] = useState<GroupBy>("category");
	const { series, options, totals, balance } = useBalanceBars(groupBy, data);

	return (
		<div className="flex h-full flex-col">
			<header className="border-b border-b-gray-200 p-4 ">
				<div className="text-lg font-bold ">
					<p>Balanço por Grupos</p>
				</div>
			</header>

			<div className="mt-4">
				<RadioGroup value={groupBy} onValueChange={(v) => setGroupBy(v as GroupBy)} className="flex">
					<div className="flex flex-0 items-center  gap-x-1">
						<RadioGroupItem id="by-category" value="category" />
						<Label htmlFor="by-category" className=" text-gray-900 pt-1">
							Categorias
						</Label>
					</div>
					<div className="flex flex-0 items-center  gap-x-1">
						<RadioGroupItem id="by-costcenter" value="costCenter" />
						<Label htmlFor="by-costcenter" className=" font-medium text-gray-900 pt-1">
							Centro de Custo
						</Label>
					</div>
				</RadioGroup>
			</div>

			<div className="flex-1 p-3">
				<ApexChart type="bar" options={options} series={series} height={320} />
			</div>

			<footer className="flex-shrink-0 border-t p-4">
				<div className="grid grid-cols-3 gap-4 text-sm">
					<div>
						<div className="text-gray-700">Receitas</div>
						<div className=" text-emerald-600">{brl.format(totals.income)}</div>
					</div>
					<div>
						<div className="text-gray-700">Despesas</div>
						<div className=" text-rose-600">{brl.format(totals.expenses)}</div>
					</div>
					<div>
						<div className="text-gray-700">Saldo</div>
						<div className={` ${balance < 0 ? "text-rose-600" : "text-emerald-700"}`}>{brl.format(balance)}</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

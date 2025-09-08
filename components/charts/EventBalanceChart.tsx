"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState, useTransition } from "react";
import { startOfMonth, endOfMonth, subMonths, addMonths, isSameMonth, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { DatePickerRangeByMonth } from "../date-picker-range-by-month";
import type { Range } from "../date-picker-range-by-month";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const mockTransactions = [
	{ event: "Evento A", date: new Date("2025-01-01"), balance: { income: 1000, expense: 100 } },
	{ event: "Evento B", date: new Date("2025-01-15"), balance: { income: 2000, expense: 200 } },
	{ event: "Evento C", date: new Date("2025-01-30"), balance: { income: 3000, expense: 300 } },
	{ event: "Evento D", date: new Date("2025-02-01"), balance: { income: 4000, expense: 400 } },
	{ event: "Evento E", date: new Date("2025-03-01"), balance: { income: 5000, expense: 500 } },
	{ event: "Evento F", date: new Date("2025-03-15"), balance: { income: 6000, expense: 600 } },
	{ event: "Evento G", date: new Date("2025-04-01"), balance: { income: 7000, expense: 700 } },
	{ event: "Evento H", date: new Date("2025-06-01"), balance: { income: 8000, expense: 800 } },
	{ event: "Evento I", date: new Date("2025-09-01"), balance: { income: 9000, expense: 900 } },
	{ event: "Evento J", date: new Date("2025-10-01"), balance: { income: 10000, expense: 1000 } },
	{ event: "Evento L", date: new Date("2025-11-01"), balance: { income: 11000, expense: 1100 } },
	{ event: "Evento M", date: new Date("2025-12-01"), balance: { income: 12000, expense: 1200 } },
];

const brl = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export function EventsBalanceChart() {
	const [range, setRange] = useState<Range | null>(null);
	const [isPending, startTransition] = useTransition();

	useEffect(() => {
		const now = new Date();
		const from = startOfMonth(subMonths(now, 11));
		const to = endOfMonth(now);
		setRange({ from, to });
	}, []);

	const monthsTicks = useMemo(() => {
		if (!range) return [];
		const out: number[] = [];
		let cur = startOfMonth(range.from);
		const last = startOfMonth(range.to);
		while (cur <= last) {
			out.push(startOfMonth(cur).getTime());
			cur = addMonths(cur, 1);
		}
		return out;
	}, [range]);

	const monthlyAggregation = useMemo(() => {
		return monthsTicks.map((ms) => {
			const monthDate = new Date(ms);
			const rows = mockTransactions.filter((r) => isSameMonth(r.date, monthDate));
			const events = rows.map((r) => ({
				event: r.event,
				income: r.balance.income ?? 0,
				expense: r.balance.expense ?? 0,
				net: (r.balance.income ?? 0) - (r.balance.expense ?? 0),
			}));
			const income = events.reduce((s, e) => s + e.income, 0);
			const expense = events.reduce((s, e) => s + e.expense, 0);
			return { x: ms, income, expense, events };
		});
	}, [monthsTicks]);

	const series = useMemo(
		() => [
			{ name: "Receitas", data: monthlyAggregation.map((m) => m.income) },
			{ name: "Despesas", data: monthlyAggregation.map((m) => m.expense) },
		],
		[monthlyAggregation]
	);

	const categories = useMemo(
		() => monthlyAggregation.map((m) => format(new Date(m.x), "MMM yyyy", { locale: ptBR })),
		[monthlyAggregation]
	);

	const totals = useMemo(() => {
		const totalIncomes = monthlyAggregation.reduce((s, m) => s + m.income, 0);
		const totalExpenses = monthlyAggregation.reduce((s, m) => s + m.expense, 0);
		return { totalIncomes, totalExpenses };
	}, [monthlyAggregation]);

	const chartOptions = useMemo(
		() =>
			({
				chart: {
					type: "area",
					stacked: false,
					toolbar: { show: false },
					zoom: { enabled: false },
				},
				stroke: { curve: "smooth", width: 2 },
				markers: { size: 4 },
				xaxis: {
					type: "category",
					categories,
					labels: {
						style: { fontSize: "12px" },
						rotate: -35,
						trim: false,
						hideOverlappingLabels: false,
					},
					tickPlacement: "on",
				},
				yaxis: {
					labels: { formatter: (v: number) => `R$${Number(v).toLocaleString("pt-BR")}` },
				},
				colors: ["#22c55e", "#f43f5e"],
				fill: { type: "gradient", gradient: { shadeIntensity: 0.4, opacityFrom: 0.35, opacityTo: 0.05 } },
				dataLabels: { enabled: false },
				download: false, // desativa o ícone de download

				tooltip: {
					shared: false,
					intersect: true,
					custom: function ({ seriesIndex, dataPointIndex, w }: any) {
						const idx = dataPointIndex ?? 0;
						const month = monthlyAggregation[idx];
						const monthLabel = format(new Date(month.x), "MMMM yyyy", { locale: ptBR });
						const totalIncome = month.income.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
						const totalExpense = month.expense.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
						const events: any[] = month.events ?? [];
						const eventsHtml =
							events.length === 0
								? `<div style="color:#6b7280;font-size:12px">Nenhum evento</div>`
								: events
										.map(
											(e) =>
												`<div style="margin-bottom:8px;">
                          <div style="font-weight:700">${e.event}</div>
                          <div style="font-size:12px;color:#374151">Receita: ${brl(e.income)} · Despesa: ${brl(
													e.expense
												)} · Saldo: ${brl(e.net)}</div>
                        </div>`
										)
										.join("");
						const serieName = w.config.series[seriesIndex].name;
						const value = w.config.series[seriesIndex].data[idx];
						const valueFormatted = (value ?? 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
						return `<div style="padding:10px;min-width:260px">
                      <div style="font-weight:800;margin-bottom:8px">${monthLabel}</div>
                      <div style="font-size:13px;margin-bottom:8px">${serieName}: <strong>${valueFormatted}</strong></div>
                      <div style="font-size:13px;margin-bottom:6px">Totais — Receitas: <strong>${totalIncome}</strong> · Despesas: <strong>${totalExpense}</strong></div>
                      <div style="max-height:260px;overflow:auto">${eventsHtml} fdff</div>
                    </div>`;
					},
					y: { formatter: (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) },
				},
				legend: { show: true, position: "top" },
				grid: { borderColor: "#e6e6e6" },
				responsive: [{ breakpoint: 800, options: { xaxis: { labels: { rotate: -45 } } } }],
			} as any),
		[categories, monthlyAggregation]
	);

	const handleRangeChange = (r: Range) => {
		startTransition(() => setRange({ from: startOfMonth(r.from), to: endOfMonth(r.to) }));
	};

	return (
		<div className="p-4 bg-white rounded-md shadow-md">
			<div className="flex justify-between items-center mb-4">
				<DatePickerRangeByMonth onRangeSelect={handleRangeChange} initialRange={range ?? undefined} />
				<div className="text-right">
					<h3 className="text-lg font-semibold text-gray-800">Eventos - Saldo total:</h3>
					<p className="text-2xl font-bold text-cyan-600">{brl(totals.totalIncomes - totals.totalExpenses)}</p>
				</div>
			</div>

			<div className="mb-4">
				{categories.length === 0 ? (
					<div className="text-center text-sm text-gray-500">Nenhum mês selecionado</div>
				) : (
					<ApexChart options={chartOptions} series={series} type="area" height={420} />
				)}
			</div>

			<div className="mt-4 w-full text-sm grid grid-cols-2 gap-2">
				<div>
					<div className="text-xs text-gray-500">Total Receitas</div>
					<div className="font-semibold text-green-600">{brl(totals.totalIncomes)}</div>
				</div>
				<div className="text-right">
					<div className="text-xs text-gray-500">Total Despesas</div>
					<div className="font-semibold text-red-600">{brl(totals.totalExpenses)}</div>
				</div>
			</div>
		</div>
	);
}

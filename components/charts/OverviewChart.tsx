"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Card, CardContent } from "@/components/ui/card";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
type MetricKey = "incomes" | "expenses" | "events" | "members";

export type OverviewChartProps = {
	incomes: number;
	expenses: number;
	events: number;
	members: number;
	series: {
		incomes: number[];
		expenses: number[];
		events: number[];
		members: number[];
	};
	categories: string[];
};

const metricLabels = {
	incomes: "Receitas",
	expenses: "Despesas",
	events: "Eventos",
	members: "Associados",
};

export function OverviewChart({
	incomes,
	expenses,
	events,
	members,
	series,
	categories,
}: OverviewChartProps) {
	const [activeMetric, setActiveMetric] = useState<MetricKey>("incomes");
	const metricColors: Record<MetricKey, string> = {
		incomes: "#22c55e",
		expenses: "#ef4444",
		events: "#f97316",
		members: "#06b6d4",
	};
	const chartOptions = {
		chart: {
			type: "area" as const,
			toolbar: { show: false },
			zoom: { enabled: false },
		},
		dataLabels: { enabled: false },
		stroke: { curve: "smooth" as const },
		xaxis: { categories },
		tooltip: {
			y: {
				formatter: (val: number) =>
					activeMetric === "incomes" || activeMetric === "expenses"
						? `R$ ${val.toLocaleString()}`
						: val.toString(),
			},
		},
		colors: [metricColors[activeMetric]],
		fill: {
			type: "gradient",
			gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.1 },
		},
	};

	return (
		<Card className="p-6">
			<div className="mb-4">
				<h2 className="text-lg font-semibold">Panorama Geral</h2>
				<p className="text-sm text-muted-foreground">
					Principais indicadores da associação
				</p>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
				<StatBox
					title="Receitas"
					value={`R$ ${incomes.toLocaleString()}`}
					color="text-green-600"
					onClick={() => setActiveMetric("incomes")}
					active={activeMetric === "incomes"}
				/>
				<StatBox
					title="Despesas"
					value={`R$ ${expenses.toLocaleString()}`}
					color="text-red-500"
					onClick={() => setActiveMetric("expenses")}
					active={activeMetric === "expenses"}
				/>
				<StatBox
					title="Eventos"
					value={events.toString()}
					color="text-orange-500"
					onClick={() => setActiveMetric("events")}
					active={activeMetric === "events"}
				/>
				<StatBox
					title="Associados"
					value={members.toString()}
					color="text-cyan-600"
					onClick={() => setActiveMetric("members")}
					active={activeMetric === "members"}
				/>
			</div>

			<CardContent className="p-0">
				<ApexChart
					options={chartOptions}
					series={[
						{ name: metricLabels[activeMetric], data: series[activeMetric] },
					]}
					type="area"
					height={300}
				/>
			</CardContent>
		</Card>
	);
}

function StatBox({
	title,
	value,
	color,
	onClick,
	active,
}: {
	title: string;
	value: string;
	color: string;
	onClick: () => void;
	active: boolean;
}) {
	return (
		<div
			className={`p-4 rounded-md cursor-pointer transition border ${
				active ? "border-primary bg-muted" : "bg-muted/50"
			}`}
			onClick={onClick}
		>
			<p className="text-sm text-muted-foreground">{title}</p>
			<p className={`text-lg font-semibold ${color}`}>{value}</p>
		</div>
	);
}

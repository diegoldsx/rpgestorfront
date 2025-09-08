"use client";

import dynamic from "next/dynamic";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { getGridConfig, getXAxisConfig, getYAxisConfig } from "@/lib/appex-chart-options";
import { DatePickerRangeByMonth } from "../date-picker-range-by-month";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useMemo, useState } from "react";
import { subMonths, startOfMonth, endOfMonth } from "date-fns";
import { line } from "@unovis/ts/components/crosshair/style";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface AreaChartData {
	series: number[];
	categories: string[];
}

interface AreaChartProps {
	title: string;
	data?: AreaChartData;
	height?: number;
	className?: string;
	onDateRangeChange?: (range: { from: Date; to: Date }) => void;
}

export const AreaChart = ({ title, data, height = 320, className, onDateRangeChange }: AreaChartProps) => {
	const { theme: config } = useThemeStore();
	const { theme: mode } = useTheme();
	const theme = themes.find((t) => t.name === config);

	// inicializa range padrão: últimos 12 meses
	const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>(() => {
		const now = new Date();
		return { from: startOfMonth(subMonths(now, 12)), to: endOfMonth(now) };
	});

	// fallback data (pode ser substituído via props)
	const defaultData: AreaChartData = {
		series: [2, 12500, 11000, 14000, 13500, 15000, 14500, 16000, 15500, 17000, 16500, 17500],
		categories: [
			"Jan 2025",
			"Fev 2025",
			"Mar 2025",
			"Abr 2025",
			"Mai 2025",
			"Jun 2025",
			"Jul 2025",
			"Ago 2025",
			"Set 2025",
			"Out 2025",
			"Nov 2025",
			"Dez 2025",
		],
	};

	const chartData = data ?? defaultData;

	const totals = useMemo(() => {
		const total = chartData.series.reduce((s, v) => s + v, 0);
		const last = chartData.series.length ? chartData.series[chartData.series.length - 1] : 0;
		return { total, last };
	}, [chartData]);

	// cores padronizadas (igual eventos)
	const revenueGreen = "#22c55e";
	const expenseRed = "#f43f5e"; // deixei disponível caso queira adicionar 2ª série depois
	const chartLabelColor = `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`;
	const gridColor = `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`;

	const options: any = {
		chart: {
			toolbar: { show: false },
			background: "transparent",
			animations: { enabled: true },
		},
		dataLabels: { enabled: false },
		stroke: { curve: "straight", width: 3 },
		// usa o verde do events como cor principal
		markers: {
			size: 4,
			strokeWidth: 2,
			strokeColors: "#ffffff",
			hover: { size: 6 }, // aumenta ponto no hover
		},

		tooltip: {
			theme: mode === "dark" ? "dark" : "light",
			x: { show: true },
			y: {
				formatter: (val: number) => val,
			},
			shared: false,
			intersect: true,
		},
		grid: getGridConfig(gridColor),
		fill: {
			type: "gradient",
			gradient: {
				shade: "light",
				type: "vertical",
				shadeIntensity: 0.6,
				inverseColors: false,
				opacityFrom: 0.36,
				opacityTo: 0.06,
				stops: [0, 60, 100],
			},
		},
		yaxis: getYAxisConfig(chartLabelColor),
		xaxis: {
			...getXAxisConfig(chartLabelColor),
			type: "category",
			categories: chartData.categories,
			labels: {
				style: { colors: chartLabelColor, fontSize: "12px" },
				rotate: -35,
				trim: false,
				hideOverlappingLabels: false,
			},
			tickPlacement: "on",
		},
		legend: { show: false },
		responsive: [
			{
				breakpoint: 800,
				options: {
					xaxis: { labels: { rotate: -45, style: { fontSize: "11px" } } },
					chart: { height: Math.max(240, height - 80) },
				},
			},
		],
	};

	const series = [
		{
			name: title,
			data: chartData.series,
		},
	];
	// handler do DatePicker
	const handleDateRangeSelect = (range: { from: Date; to: Date }) => {
		setDateRange({ from: startOfMonth(range.from), to: endOfMonth(range.to) });
		onDateRangeChange?.(range);
	};

	return (
		<Card className={className}>
			<CardHeader className="pb-2">
				<div className="flex justify-between">
					<CardTitle className="text-lg font-medium">{title}</CardTitle>

					<DatePickerRangeByMonth onRangeSelect={handleDateRangeSelect} initialRange={dateRange} />
				</div>
			</CardHeader>

			<CardContent>
				<div className="bg-white rounded-lg p-4">
					<Chart options={options} series={series} type="area" height={height} width="100%" />
				</div>
			</CardContent>
		</Card>
	);
};

export default AreaChart;

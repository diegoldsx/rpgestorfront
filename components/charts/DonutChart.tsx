// components/DonutChart.tsx
"use client";
import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import type { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false }) as unknown as React.ComponentType<any>;

type DonutChartProps = {
	series: number[]; // valores do donut
	labels?: string[]; // rótulos correspondentes
	height?: number | string;
	width?: number | string;
	colors?: string[]; // paleta opcional
	showLegend?: boolean;
	innerSizePercent?: number; // 0-100 (ex: 60)
	// formatações opcionais
	valueFormatter?: (value: number, total: number) => string;
	tooltipFormatter?: (value: number, opts?: any) => string;
	// merge com opções do Apex caso precise customizar além do padrão
	options?: Partial<ApexOptions>;
};

const DEFAULT_COLORS = ["#10b981", "#06b6d4", "#f59e0b", "#ef4444", "#7c3aed", "#3b82f6"];

export default function DonutChart({
	series,
	labels = [],
	height = 320,
	width = "100%",
	colors = DEFAULT_COLORS,
	showLegend = true,
	innerSizePercent = 65,
	valueFormatter,
	tooltipFormatter,
	options: extraOptions,
}: DonutChartProps) {
	const total = useMemo(() => series.reduce((s, v) => s + (Number(v) || 0), 0), [series]);

	const options = useMemo<ApexOptions>(() => {
		const base: ApexOptions = {
			chart: {
				type: "donut",
				toolbar: { show: false },
				animations: { enabled: true },
			},
			labels: labels,
			colors: colors.slice(0, Math.max(series.length, 1)),
			legend: {
				position: "bottom",
				horizontalAlign: "center",
				fontSize: "12px",
				markers: { size: 10 },
			},
			tooltip: {
				y: {
					formatter: (val: number) => {
						if (tooltipFormatter) return tooltipFormatter(val, { total });
						if (typeof val === "number") return `${val}`;
						return String(val);
					},
				},
			},
			plotOptions: {
				pie: {
					donut: {
						size: `${innerSizePercent}%`,
						labels: {
							show: true,
							name: {
								show: true,
								fontSize: "14px",
								formatter: (name: string) => name,
							},
							value: {
								show: true,
								fontSize: "18px",
							},
							total: {
								show: true,
								label: "Total",
								formatter: () => {
									if (valueFormatter) return valueFormatter(total, total);
									return String(total);
								},
							},
						},
					},
				},
			},
			dataLabels: { enabled: false },
			stroke: { show: false },
			responsive: [
				{
					//	breakpoint: 480,
					options: {
						chart: { height: 260 },
						legend: { position: "bottom" },
					},
				},
			],
		};

		return { ...base, ...extraOptions };
	}, [labels, colors, showLegend, innerSizePercent, valueFormatter, tooltipFormatter, extraOptions, series, total]);

	return (
		<div style={{ width, height }}>
			<Chart options={options} series={series} height={height} type="donut" />
		</div>
	);
}

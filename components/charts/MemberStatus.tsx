"use client";

import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

type UserStatusPieChartProps = {
	active: number;
	inactive: number;
	pending: number;
};

export function MemberStatusPieChart({ active, inactive, pending }: UserStatusPieChartProps) {
	const series = [active, inactive, pending];
	const options = {
		chart: {
			type: "donut" as const,
		},
		labels: ["Ativos", "Inativos", "Pendente"],
		colors: ["#22c55e", "#f43f5e", "#FFD700"],
		legend: {
			position: "bottom" as const,
		},
		dataLabels: {
			enabled: true,
			formatter: (_: number, opts: any) => `${opts.w.config.series[opts.seriesIndex]}`,
		},
		tooltip: {
			y: {
				formatter: (val: number) => `${val} usuários`,
			},
		},
		plotOptions: {
			pie: {
				donut: {
					labels: {
						show: true,
						total: {
							show: true,
							label: "Total",
							formatter: () => `${active + inactive + pending}`,
						},
					},
				},
			},
		},
	};
	console.log(series);
	return (
		<div className="h-auto">
			<ApexChart options={options} series={series} type="donut" />
		</div>
	);
}

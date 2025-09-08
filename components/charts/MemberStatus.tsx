"use client";

import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

type UserStatusPieChartProps = {
	active: number;
	inactive: number;
};

export function MemberStatusPieChart({ active, inactive }: UserStatusPieChartProps) {
	const series = [active, inactive];
	const options = {
		chart: {
			type: "donut" as const,
		},
		labels: ["Ativos", "Inativos"],
		colors: ["#22c55e", "#f43f5e"],
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
							formatter: () => `${active + inactive}`,
						},
					},
				},
			},
		},
	};

	return (
		<div className="w-full flex flex-col min-h-full justify-center">
			<ApexChart options={options} series={series} type="donut" height={300} />
		</div>
	);
}

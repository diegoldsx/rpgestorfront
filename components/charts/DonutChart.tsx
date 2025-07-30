import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";

type DonutChartProps = {
	labels: string[];
	series: number[];
	width?: number | string;
	title: string;
};
const DonutChart: React.FC<DonutChartProps> = ({ title, labels, series, width = 380 }) => {
	const options: ApexOptions = {
		chart: {
			type: "pie",
		},
		labels,
		title: title
			? {
					text: title,
					align: "center" as const,
					style: {
						fontSize: "18px",
						fontWeight: "bold",
					},
			  }
			: undefined,
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: { width: 300 },
					legend: { position: "bottom" },
				},
			},
		],
	};
	return <Chart options={options} series={series} type="donut" width={width} />;
};

export default DonutChart;

"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { StatsColor } from "./stats-card";

interface StatsChartProps {
	series: ApexAxisChartSeries;
	color: StatsColor;
	height?: number;
	width?: number;
}

const StatsChart = ({
	series,
	color,
	height = 40,
	width = 74,
}: StatsChartProps) => {
	const { theme: config } = useThemeStore();
	const { theme: mode } = useTheme();
	const theme = themes.find((theme) => theme.name === config);

	// Define color based on prop and theme
	const getColor = (color: StatsColor) => {
		const colors = {
			primary: `hsl(${
				theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
			})`,
			success: `hsl(${
				theme?.cssVars[mode === "dark" ? "dark" : "light"].success
			})`,
			warning: `hsl(${
				theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
			})`,
			info: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].info})`,
			destructive: `hsl(${
				theme?.cssVars[mode === "dark" ? "dark" : "light"].destructive
			})`,
		};

		return null;
	};

	const chartColor = getColor(color);

	const options: ApexCharts.ApexOptions = {
		chart: {
			type: "area",
			toolbar: {
				show: false,
			},
			sparkline: {
				enabled: true,
			},
			animations: {
				enabled: true,
				speed: 800,
			},
		},
		stroke: {
			curve: "smooth",
			width: 2,
		},
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 0.6,
				opacityFrom: 0.5,
				opacityTo: 0.2,
				stops: [0, 90, 100],
			},
		},
		colors: [chartColor],
		tooltip: {
			theme: mode === "dark" ? "dark" : "light",
			x: { show: false },
			y: {
				title: {
					formatter: () => "",
				},
			},
			marker: { show: false },
		},
		grid: {
			show: false,
			padding: {
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
			},
		},
		xaxis: {
			labels: { show: false },
			axisBorder: { show: false },
			axisTicks: { show: false },
		},
		yaxis: {
			min: 0,
			labels: { show: false },
		},
		dataLabels: {
			enabled: false,
		},
	};

	return (
		<Chart
			options={options}
			series={series}
			type="area"
			height={height}
			width={width}
		/>
	);
};

export default StatsChart;

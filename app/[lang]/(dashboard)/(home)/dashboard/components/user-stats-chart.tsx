'use client';

import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { useThemeStore } from '@/store';
import { useTheme } from 'next-themes';
import { themes } from '@/config/thems';

const UserStats = ({ height = 250 }) => {
	const { theme: config, setTheme: setConfig, isRtl } = useThemeStore();
	const { theme: mode } = useTheme();
	const theme = themes.find((theme) => theme.name === config);
	const series = [80, 15, 5]; // Ativos, Pendentes, Inadimplentes

	const options: any = {
		chart: {
			toolbar: {
				show: false,
			},
		},
		labels: ['Ativos', 'Pendentes', 'Inadimplentes'],
		dataLabels: {
			enabled: false,
		},
		colors: [
			`hsl(${theme?.cssVars[mode === 'dark' ? 'dark' : 'light'].success})`, // Verde para ativos
			`hsl(${theme?.cssVars[mode === 'dark' ? 'dark' : 'light'].warning})`, // Laranja para pendentes
			`hsl(${theme?.cssVars[mode === 'dark' ? 'dark' : 'light'].destructive})`, // Vermelho para inadimplentes
		],
		tooltip: {
			theme: mode === 'dark' ? 'dark' : 'light',
			y: {
				formatter: function (value) {
					return value + ' associados';
				},
			},
		},
		stroke: {
			width: 0,
		},
		plotOptions: {
			pie: {
				donut: {
					labels: {
						show: true,
						name: {
							show: true,
							fontSize: '14px',
							fontWeight: 600,
							color: `hsl(${
								theme?.cssVars[
									mode === 'dark' || mode === 'system' ? 'dark' : 'light'
								].chartLabel
							})`,
						},
						value: {
							show: true,
							label: 'Associados',
							fontSize: '14px',
							fontWeight: 600,
							color: `hsl(${
								theme?.cssVars[
									mode === 'dark' || mode === 'system' ? 'dark' : 'light'
								].chartLabel
							})`,
						},
						total: {
							show: true,
							label: 'Total Geral',
							fontSize: '16px',
							fontWeight: 600,
							color: `hsl(${
								theme?.cssVars[
									mode === 'dark' || mode === 'system' ? 'dark' : 'light'
								].chartLabel
							})`,
							formatter: function (w) {
								return (
									w.globals.seriesTotals.reduce((a, b) => a + b, 0) +
									' associados'
								);
							},
						},
					},
				},
			},
		},
		legend: {
			position: 'bottom',
			labels: {
				colors: `hsl(${
					theme?.cssVars[
						mode === 'dark' || mode === 'system' ? 'dark' : 'light'
					].chartLabel
				})`,
			},
			itemMargin: {
				horizontal: 10,
				vertical: 8,
			},
			markers: {
				width: 10,
				height: 10,
				radius: 10,
				offsetX: isRtl ? 5 : -5,
			},
			formatter: function (seriesName, opts) {
				return [seriesName, ' - ', opts.w.globals.series[opts.seriesIndex]];
			},
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						height: 200,
					},
					legend: {
						position: 'bottom',
						offsetY: 0,
					},
				},
			},
		],
		padding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
		},
	};

	return (
		<Chart
			options={options}
			series={series}
			type='donut'
			height={height}
			width={'100%'}
		/>
	);
};

export default UserStats;

'use client'

import dynamic from 'next/dynamic'

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

export type MembersStatsChartProps = {
	total: number
	series: number[]
	categories: string[]
	regionData: { region: string; total: number }[]

}

export function MembersStatsChart({ total, series, categories, regionData }: MembersStatsChartProps) {
	const chartOptions = {
		chart: { type: 'bar' as const, toolbar: { show: false } },
		xaxis: { categories },
		plotOptions: {
			bar: {
				borderRadius: 4,
				columnWidth: '50%',
			},
		},
		dataLabels: { enabled: false },
		colors: ['#06b6d4'],
		tooltip: {
			y: {
				formatter: (val: number) => val.toString(),
			},
		},
	}

	return (
		<div className="p-4 bg-white rounded-md shadow">
			<div className="flex justify-between items-center mb-2">
				<div>
					<h3 className="text-md font-semibold">Associados</h3>
					<p className="text-sm text-muted-foreground">Últimos 30 dias</p>
				</div>
				<p className="text-2xl font-bold text-cyan-600">{total}</p>
			</div>

			<div className="mb-4">
				<p className="text-sm font-medium text-muted-foreground mb-1">Associados por Região</p>
				<ApexChart options={chartOptions} series={[{ name: 'Associados', data: series }]} type="bar" height={200} />
			</div>

			<table className="w-full text-sm border-t">
				<thead>
					<tr className="text-left">
						<th className="py-2">Região</th>
						<th className="py-2 text-right">Total</th>
					</tr>
				</thead>
				<tbody>
					{regionData.map((item) => (
						<tr key={item.region} className="border-t">
							<td className="py-1">{item.region}</td>
							<td className="py-1 text-right">{item.total}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

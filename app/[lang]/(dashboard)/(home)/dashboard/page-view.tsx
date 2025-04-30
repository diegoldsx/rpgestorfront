"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
	OverviewChart,
	OverviewChartProps,
} from "@/components/charts/OverviewChart";
import { MembersStatsChart, MembersStatsChartProps } from "@/components/charts/MemberStatsChart";
import { ReportsArea, ReportServerItem } from "@/components/charts/ReportsArea";
import { AccountBalance } from "@/components/charts/AccountBalance";
import { MemberStatusPieChart } from "@/components/charts/MemberStatus";

interface DashboardPageViewProps {
	trans: {
		[key: string]: string;
	};
	overview: OverviewChartProps;
	memberStats: MembersStatsChartProps;
	reports: ReportServerItem[];
	accountBalance: AccountBalance[];
	membersSituation: { active: number; inactive: number };
}

const DashboardPageView = ({ trans, overview, memberStats, reports, accountBalance, membersSituation }: DashboardPageViewProps) => {
	return (
		<div className="space-y-6">
			{/* Área de métricas principais */}
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 lg:col-span-8">
					<OverviewChart {...overview} />
				</div>
				<div className="col-span-12 lg:col-span-4">
					<MembersStatsChart {...memberStats} />
				</div>
			</div>

			{/* Métricas secundárias */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<ReportsArea reports={reports} /> {/* Indicadores financeiros */}
				</div>

				<div className="grid grid-cols-1">
					<AccountBalance accountBalance={accountBalance} />
				</div>

				<Card>
					<CardHeader className="border-none p-6 pt-5 mb-0">
						<CardTitle className="text-lg font-semibold text-default-900 p-0">
							Associados por Situação
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="dashtail-legend">
							<MemberStatusPieChart active={membersSituation.active} inactive={membersSituation.inactive} />
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Mapa de associados */}
			{/* <div className='col-span-2'>
				<Card>
					<CardHeader className='border-none pb-0'>
						<div className='flex flex-wrap items-center gap-2'>
							<div className='flex-1 text-xl font-semibold text-default-900 whitespace-nowrap'>
								Associados por Região
							</div>
							<div className='flex-none'>
								<DashboardSelect />
							</div>
						</div>
					</CardHeader>
					<CardContent className='px-5 pb-0'>
						<CountryMap />
					</CardContent>
				</Card>
			</div> */}


		</div>
	);
};

export default DashboardPageView;

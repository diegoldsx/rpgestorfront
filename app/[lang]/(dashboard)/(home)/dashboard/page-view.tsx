"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { OverviewChart, OverviewChartProps } from "@/components/charts/OverviewChart";
import { MembersStatsChart, MembersStatsChartProps } from "@/components/charts/MemberStatsChart";
import { ReportsArea, ReportServerItem } from "@/components/charts/ReportsArea";
import { AccountBalance } from "@/components/charts/AccountBalance";
import { MemberStatusPieChart } from "@/components/charts/MemberStatus";
import { IncomesXExpensesChart } from "@/components/charts/IncomesXExpensesChart";
import DonutChart from "@/components/charts/DonutChart";
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

const DashboardPageView = ({ reports, accountBalance, membersSituation }: DashboardPageViewProps) => {
	return (
		<>
			<DonutChart
				title="Members"
				labels={["Ativos", "Inativos"]}
				series={[membersSituation.active, membersSituation.inactive]}
				width={380}
			/>
		</>
	);

	return (
		<div className="space-y-6">
			{/* Área de métricas principais */}
			<div className="grid grid-cols-12">
				<div className="col-span-12">
					<IncomesXExpensesChart total={0} totalExpenses={0} totalIncomes={0} categories={["Jul"]} series={[0]} />
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
						<CardTitle className="text-lg font-semibold text-default-900 p-0">Receitas x Despesas</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="dashtail-legend">
							<MemberStatusPieChart active={membersSituation.active} inactive={membersSituation.inactive} />
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default DashboardPageView;

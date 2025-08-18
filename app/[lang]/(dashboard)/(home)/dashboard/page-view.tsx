"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReportsArea, ReportServerItem } from "@/components/charts/ReportsArea";
import { AccountBalance } from "@/components/charts/AccountBalance";
import { MemberStatusPieChart } from "@/components/charts/MemberStatus";
import { IncomesXExpensesChart } from "@/components/charts/IncomesXExpensesChart";
import { FinancialBalanceDonuts } from "@/components/charts/FinancialBalanceChart";

interface DashboardPageViewProps {
	trans: { [key: string]: string };
	overview: any;
	memberStats: any;
	reports: ReportServerItem[];
	accountBalance: AccountBalance[];
	membersSituation: { active: number; inactive: number };
	financialBalanceChartData: any;
}

const DashboardPageView = ({
	reports,
	accountBalance,
	membersSituation,
	financialBalanceChartData,
}: DashboardPageViewProps) => {
	return (
		<div className="space-y-6">
			<div className="flex w-full gap-6 items-stretch">
				<Card className="flex-1 flex flex-col">
					<CardHeader>
						<CardTitle className="text-lg">Receitas x Despesas</CardTitle>
					</CardHeader>
					<CardContent className="flex-1 min-h-0 p-0">
						<div className="h-full">
							<IncomesXExpensesChart total={0} totalExpenses={0} totalIncomes={0} categories={["Jul"]} series={[0]} />
						</div>
					</CardContent>
				</Card>

				<Card className="flex-1 flex flex-col">
					<CardHeader>
						<CardTitle className="text-lg">Balanço por grupo</CardTitle>
					</CardHeader>
					<CardContent className="flex-1 min-h-0 p-0">
						<div className="h-full">
							<FinancialBalanceDonuts data={financialBalanceChartData} />
						</div>
					</CardContent>
				</Card>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
				<Card className="flex flex-col">
					<CardHeader>
						<CardTitle className="text-lg">Indicadores Financeiros</CardTitle>
					</CardHeader>
					<CardContent className="flex-1 min-h-0">
						<ReportsArea reports={reports} />
					</CardContent>
				</Card>

				<Card className="flex flex-col">
					<CardHeader>
						<CardTitle className="text-lg">Saldo por Conta</CardTitle>
					</CardHeader>
					<CardContent className="flex-1 min-h-0">
						<AccountBalance accountBalance={accountBalance} />
					</CardContent>
				</Card>

				<Card className="flex flex-col">
					<CardHeader>
						<CardTitle className="text-lg">Situação de Membros</CardTitle>
					</CardHeader>
					<CardContent className="flex-1 min-h-0">
						<MemberStatusPieChart active={membersSituation.active} inactive={membersSituation.inactive} />
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default DashboardPageView;

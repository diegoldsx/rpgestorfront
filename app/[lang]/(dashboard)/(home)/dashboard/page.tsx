interface DashboardProps {
	params: {
		lang: any;
	};
}

async function getData() {
	const overview: OverviewChartProps = await getOverviewData();
	const memberStats: MembersStatsChartProps = await getMembersStatsData();
	const { reports } = await getReportSummary();
	const { accounts } = await getAccountBalance();
	const balance = await getBalancePieChartSeries();

	const lastYear = subYears(new Date(), 1);
	const dataRange = { from: new Date(), to: lastYear };

	const incomeXExpensesData = await getIncomeXExpensesChartData(dataRange);
	return {
		overview,
		memberStats,
		reports,
		balance,
		incomeXExpensesData,
		accounts,
	};
}

const Dashboard = async ({ params: { lang } }: DashboardProps) => {
	const trans = await getDictionary(lang);
	const { overview, memberStats, reports, balance, incomeXExpensesData, accounts } = await getData();

	const membersSituation = { active: 32, inactive: 3, pending: 8 };
	const userSituation = { active: 32, inactive: 3 };

	return (
		<DashboardPageView
			trans={trans}
			overview={overview}
			memberStats={memberStats}
			reports={reports}
			accountBalance={accounts}
			incomeXExpenses={incomeXExpensesData}
			financialBalanceChartData={balance as any}
			membersSituation={membersSituation}
		/>
	);
};

import {
	getAccountBalance,
	getBalancePieChartSeries,
	getIncomesXExpensesData,
	getMembersStatsData,
	getOverviewData,
	getReportSummary,
} from "@/app/action/charts";

import DashboardPageView from "./page-view";
import { getDictionary } from "@/app/dictionaries";

import { OverviewChartProps } from "@/components/charts/OverviewChart";
import { MembersStatsChartProps } from "@/components/charts/MemberStatsChart";
import { getIncomeXExpensesChartData } from "@/app/action/charts/getIncomeXExpensesAction";
import { subYears } from "date-fns";

export default Dashboard;

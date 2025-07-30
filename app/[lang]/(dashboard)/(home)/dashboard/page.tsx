import {
	getAccountBalance,
	getIncomesXExpensesData,
	getMembersStatsData,
	getOverviewData,
	getReportSummary,
} from "@/app/action/charts";
import DashboardPageView from "./page-view";
import { getDictionary } from "@/app/dictionaries";
import { Calendar, TrendingDown, TrendingUp, User } from "lucide-react";
import { Over } from "@dnd-kit/core";
import { OverviewChartProps } from "@/components/charts/OverviewChart";
import { MembersStatsChartProps } from "@/components/charts/MemberStatsChart";
import { ReportServerItem } from "@/components/charts/ReportsArea";
import { AccountBalance } from "@/components/charts/AccountBalance";

interface DashboardProps {
	params: {
		lang: any;
	};
}
const Dashboard = async ({ params: { lang } }: DashboardProps) => {
	const trans = await getDictionary(lang);
	const overview: OverviewChartProps = await getOverviewData();
	const memberStats: MembersStatsChartProps = await getMembersStatsData();
	const { reports } = await getReportSummary();
	const { accounts } = await getAccountBalance();

	const membersSituation = { active: 32, inactive: 3 };

	return (
		<DashboardPageView
			trans={trans}
			overview={overview}
			memberStats={memberStats}
			reports={reports}
			accountBalance={accounts}
			membersSituation={membersSituation}
		/>
	);
};

export default Dashboard;

import { getOverviewData, getOverviewSeriesData } from "@/app/actions/charts";
import DashboardPageView from "./page-view";
import { getDictionary } from "@/app/dictionaries";

interface DashboardProps {
	params: {
		lang: any;
	};
}
const Dashboard = async ({ params: { lang } }: DashboardProps) => {
	const trans = await getDictionary(lang);
	const data = await getOverviewData();

	return <DashboardPageView trans={trans} data={data} />;
};

export default Dashboard;

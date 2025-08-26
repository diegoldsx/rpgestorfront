import dynamic from "next/dynamic";
import { events } from "./mock";
import { PeriodSelector } from "../custom/PeriodSelector";

// Dynamic import for ApexCharts
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function EventsBalanceChart() {
	return (
		<div className="p-4 bg-white rounded-md shadow-md">
			<PeriodSelector />
		</div>
	);
}

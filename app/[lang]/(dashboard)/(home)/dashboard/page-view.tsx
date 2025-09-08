"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AccountBalance } from "@/components/charts/AccountBalance";
import { MemberStatusPieChart } from "@/components/charts/MemberStatus";
import { IncomesXExpensesChart } from "@/components/charts/IncomesXExpensesChart";
import { FinancialBalanceDonuts } from "@/components/charts/FinancialBalanceChart";
import { EventsBalanceChart } from "@/components/charts/EventBalanceChart";
import LastEvents from "./components/lastEvents";
import AreaChart from "@/components/charts/AreaChart";
import { LastMembers } from "./components/lastMembers";
import { LastInactiveMembers } from "./components/lastInactiveMembers";

interface DashboardPageViewProps {
	trans?: { [key: string]: string };
	overview?: any;
	memberStats?: any;
	reports?: any[];
	accountBalance?: any[];
	membersSituation?: { active: number; inactive: number };
	financialBalanceChartData?: any;
	incomeXExpenses?: any;
}

const associatesData = {
	series: [20, 12, 5, 10, 33, 13, 18, 14, 15, 18, 32, 67],
	categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
};

const DashboardPageView: React.FC<DashboardPageViewProps> = ({
	accountBalance = [],
	membersSituation = { active: 0, inactive: 0 },
}) => {
	return (
		<main className="space-y-6">
			<section>
				<Card>
					<CardHeader>
						<CardTitle className="text-lg">Receitas x Despesas</CardTitle>
					</CardHeader>
					<CardContent className="p-4 min-h-[260px]">
						<div className="h-full">
							<IncomesXExpensesChart />
						</div>
					</CardContent>
				</Card>
			</section>

			<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<Card>
					<CardHeader>
						<CardTitle className="text-lg">Balanço por grupo</CardTitle>
					</CardHeader>
					<CardContent className="p-4 min-h-[220px] flex items-center justify-center">
						<FinancialBalanceDonuts />
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="text-lg">Saldo por Conta</CardTitle>
					</CardHeader>
					<CardContent className="p-4 min-h-[220px]">
						<AccountBalance accountBalance={accountBalance} />
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="text-lg">Situação de Membros</CardTitle>
					</CardHeader>
					<CardContent className="p-4  flex items-center justify-between">
						<MemberStatusPieChart active={membersSituation.active} inactive={membersSituation.inactive} />
					</CardContent>
				</Card>
			</section>

			<section className="grid grid-cols-1 md:grid-cols-1 gap-6">
				<Card className="col-span-2">
					<CardContent className="p-4 min-h-[260px]">
						<AreaChart title="Associados - Panorama" data={associatesData} height={260} />
					</CardContent>
				</Card>
			</section>

			<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<Card>
					<CardContent className="p-4 min-h-[260px]">
						<LastEvents />
					</CardContent>
				</Card>
				<Card>
					<CardContent className="p-4 min-h-[260px]">
						<LastMembers />
					</CardContent>
				</Card>
				<Card>
					<CardContent className="p-4">
						<LastInactiveMembers />
					</CardContent>
				</Card>
			</section>

			<section>
				<Card className="">
					<CardHeader>
						<CardTitle className="text-lg">Eventos</CardTitle>
					</CardHeader>
					<CardContent className="p-4 min-h-[300px]">
						<EventsBalanceChart />
					</CardContent>
				</Card>
			</section>
		</main>
	);
};

export default DashboardPageView;

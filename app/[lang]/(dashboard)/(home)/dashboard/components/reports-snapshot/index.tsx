import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReportsChart from "./reports-chart";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import DashboardSelect from "@/components/dasboard-select";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

import { getIncomesSeries } from "@/app/actions/incomes";
import { Income } from "@/types/finance/income";

const receitasSeries = [
	{
		data: [9000, 8500, 11000, 9500, 10000, 9800, 11200, 10500, 9800, 11500],
	},
];

const despesasSeries = [
	{
		data: [7000, 7200, 8500, 7800, 8200, 7900, 8800, 8200, 7900, 9100],
	},
];

const eventosSeries = [
	{
		data: [4, 3, 5, 4, 6, 5, 7, 6, 5, 8],
	},
];

const associadosSeries = [
	{
		data: [120, 125, 130, 128, 135, 140, 138, 145, 150, 148],
	},
];

const ReportsSnapshot = () => {
	const [incomesSeries, setIncomeSeries] = useState<number[]>([]);

	useEffect(() => {
		async function fetchData() {
			const data = await getIncomesSeries();
			setIncomeSeries(data as number[]);
		}
		fetchData();
	}, []);

	const { theme: config } = useThemeStore();
	const { theme: mode } = useTheme();
	const theme = themes.find((theme) => theme.name === config);

	const primary = `hsl(${
		theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
	})`;
	const warning = `hsl(${
		theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
	})`;
	const success = `hsl(${
		theme?.cssVars[mode === "dark" ? "dark" : "light"].success
	})`;
	const info = `hsl(${
		theme?.cssVars[mode === "dark" ? "dark" : "light"].info
	})`;

	const tabsTrigger = [
		{
			value: "receitas",
			text: "Receitas",
			total: "R$ 102.450",
			color: "success",
		},
		{
			value: "despesas",
			text: "Despesas",
			total: "R$ 81.600",
			color: "destructive",
		},
		{
			value: "eventos",
			text: "Eventos",
			total: "53",
			color: "warning",
		},
		{
			value: "associados",
			text: "Associados",
			total: "148",
			color: "info",
		},
	];

	const tabsContentData = [
		{
			value: "receitas",
			series: receitasSeries,
			color: success,
		},
		{
			value: "despesas",
			series: incomesSeries,
			color: primary,
		},
		{
			value: "eventos",
			series: eventosSeries,
			color: warning,
		},
		{
			value: "associados",
			series: associadosSeries,
			color: info,
		},
	];

	return (
		<Card>
			<CardHeader className="border-none pb-0">
				<div className="flex items-center gap-2 flex-wrap ">
					<div className="flex-1">
						<div className="text-xl font-semibold text-default-900 whitespace-nowrap">
							Panorama Geral
						</div>
						<span className="text-xs text-default-600">
							Principais indicadores da associação
						</span>
					</div>
					<div className="flex-none">
						<DashboardSelect />
					</div>
				</div>
			</CardHeader>
			<CardContent className="p-1 md:p-5">
				<Tabs defaultValue="receitas">
					<TabsList className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 justify-start w-full bg-transparent h-full">
						{tabsTrigger.map((item, index) => (
							<TabsTrigger
								key={`report-trigger-${index}`}
								value={item.value}
								className={cn(
									"flex flex-col gap-1.5 p-4 overflow-hidden items-start relative before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-1 before:h-[2px] before:w-9 before:bg-primary/50 dark:before:bg-primary-foreground before:hidden data-[state=active]:shadow-none data-[state=active]:before:block",
									{
										"bg-emerald-50 data-[state=active]:bg-emerald-50 dark:bg-emerald-500":
											item.color === "success",
										"bg-red-50 data-[state=active]:bg-red-50 dark:bg-red-500":
											item.color === "destructive",
										"bg-orange-50 data-[state=active]:bg-orange-50 dark:bg-orange-500":
											item.color === "warning",
										"bg-cyan-50 data-[state=active]:bg-cyan-50 dark:bg-cyan-500":
											item.color === "info",
									}
								)}
							>
								<span className="text-sm text-default-800 dark:text-primary-foreground font-semibold capitalize relative z-10">
									{item.text}
								</span>
								<span
									className={`text-lg font-semibold text-${item.color}/80 dark:text-primary-foreground`}
								>
									{item.total}
								</span>
							</TabsTrigger>
						))}
					</TabsList>

					{tabsContentData.map((item, index) => (
						<TabsContent key={`report-tab-${index}`} value={item.value}>
							<ReportsChart series={item.series} chartColor={item.color} />
						</TabsContent>
					))}
				</Tabs>
			</CardContent>
		</Card>
	);
};

export default ReportsSnapshot;

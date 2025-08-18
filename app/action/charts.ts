"use server";

import { ReportsAreaProps, ReportServerItem } from "@/components/charts/ReportsArea";

export async function getOverviewData() {
	return {
		incomes: 102450,
		expenses: 81600,
		events: 53,
		members: 148,
		series: {
			incomes: [8700, 8500, 11200, 9800, 9900, 10400, 10100, 9600, 9800, 11300],
			expenses: [7200, 6900, 8900, 8200, 8600, 9100, 8800, 8500, 8700, 9000],
			events: [2, 3, 6, 4, 7, 5, 4, 6, 3, 8],
			members: [120, 123, 125, 128, 130, 134, 138, 140, 145, 148],
		},
		categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
	};
}

export async function getMembersStatsData() {
	return {
		total: 148,
		series: [25, 8, 26, 5, 30, 31, 36],
		categories: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
		regionData: [
			{ region: "São Paulo", total: 45 },
			{ region: "Rio de Janeiro", total: 32 },
			{ region: "Minas Gerais", total: 28 },
			{ region: "Paraná", total: 22 },
			{ region: "Outros", total: 21 },
		],
	};
}

export async function getReportSummary(): Promise<ReportsAreaProps> {
	const reports: ReportServerItem[] = [
		{
			id: 1,
			name: "Receitas Mês",
			count: "R$ 12.451",
			rate: "12",
			isUp: true,
			iconKey: "receitas",
			color: "success",
		},
		{
			id: 2,
			name: "Despesas Mês",
			count: "R$ 8.236",
			rate: "5",
			isUp: false,
			iconKey: "despesas",
			color: "destructive",
		},
		{
			id: 3,
			name: "Total Associados",
			count: "148",
			rate: "8",
			isUp: true,
			iconKey: "associados",
			color: "info",
		},
		{
			id: 4,
			name: "Eventos Ativos",
			count: "6",
			rate: "15",
			isUp: true,
			iconKey: "eventos",
			color: "warning",
		},
	];

	return { reports };
}

export async function getAccountBalance() {
	const accounts = [
		{ bank: "BRADESCO", balance: -804651 },
		{ bank: "CAIXA", balance: -552902 },
		{ bank: "ITAÚ", balance: 654653 },
		{ bank: "SANTANDER", balance: -10004 },
		{ bank: "BANCO DO BRASIL", balance: 12345 },
		{ bank: "NUBANK", balance: -123 },
	];

	return { accounts };
}

export async function getBalancePieChartSeries() {
	const balance = {
		incomes_categories: [
			{ name: "Vendas", value: 128000 },
			{ name: "Serviços", value: 8200 },
		],
		expenses_categories: [
			{ name: "Operacional", value: 64000 },
			{ name: "Impostos", value: 22000 },
		],
		incomes_cost_center: [
			{ name: "Loja A", value: 74000 },
			{ name: "Loja B", value: 66000 },
		],
		expenses_cost_center: [
			{ name: "Loja A", value: 43000 },
			{ name: "Loja B", value: 28000 },
		],
	};

	return balance;
}

export async function getIncomesXExpensesData(startDate: string, endDate: string) {
	const data = FAKE_INCOMES_X_EXPENSES_DATA.filter((item) => item.date >= startDate && item.date <= endDate);

	const totalIncome = data.reduce((sum, item) => sum + item.income, 0);
	const totalExpense = data.reduce((sum, item) => sum + item.expense, 0);

	const series = data.map((item) => item.income - item.expense);
	const categories = data.map((item) => item.date);

	return {
		total: totalIncome - totalExpense,
		series,
		categories,
	};
}

const FAKE_INCOMES_X_EXPENSES_DATA = [
	{
		date: "2025-01",
		income: 1000,
		expense: 800,
	},
	{
		date: "2025-02",
		income: 1200,
		expense: 900,
	},
	{
		date: "2025-03",
		income: 1500,
		expense: 1100,
	},
	{
		date: "2025-04",
		income: 1300,
		expense: 1000,
	},
	{
		date: "2025-05",
		income: 1600,
		expense: 1200,
	},
	{ date: "2025-06", income: 1700, expense: 1300 },
	{ date: "2025-07", income: 1800, expense: 1400 },
	{ date: "2025-08", income: 1900, expense: 1500 },
	{ date: "2025-09", income: 2000, expense: 1600 },
	{ date: "2025-10", income: 2100, expense: 1700 },
	{ date: "2025-11", income: 2200, expense: 1800 },
	{ date: "2025-12", income: 2300, expense: 1900 },
];

"use server";

import { format, isWithinInterval, endOfMonth } from "date-fns";

type Transaction = {
	date: Date;
	type: "income" | "expense";
	amount: number;
};

type MonthData = {
	month: string;
	income: number;
	expense: number;
};

const mockTransactions: Transaction[] = [
	{ date: new Date("2025-01-10"), type: "income", amount: 1200 },
	{ date: new Date("2025-01-14"), type: "expense", amount: 300 },
	{ date: new Date("2025-02-01"), type: "income", amount: 15000 },
	{ date: new Date("2025-02-20"), type: "expense", amount: 600 },
	{ date: new Date("2025-03-10"), type: "income", amount: 800 },
	{ date: new Date("2025-03-25"), type: "expense", amount: 2000 },
	{ date: new Date("2025-04-05"), type: "income", amount: 1300 },
	{ date: new Date("2025-04-18"), type: "expense", amount: 400 },
	{ date: new Date("2025-05-11"), type: "income", amount: 14000 },
	{ date: new Date("2025-05-28"), type: "expense", amount: 700 },
	{ date: new Date("2025-06-03"), type: "income", amount: 16000 },
	{ date: new Date("2025-06-21"), type: "expense", amount: 20000 },
	{ date: new Date("2025-07-15"), type: "income", amount: 1100 },
	{ date: new Date("2025-07-30"), type: "expense", amount: 350 },
	{ date: new Date("2025-08-08"), type: "income", amount: 1250 },
	{ date: new Date("2025-08-22"), type: "expense", amount: 600 },
	{ date: new Date("2025-09-09"), type: "income", amount: 17000 },
	{ date: new Date("2025-09-27"), type: "expense", amount: 450 },
	{ date: new Date("2025-10-06"), type: "income", amount: 1350 },
	{ date: new Date("2025-10-23"), type: "expense", amount: 23430 },
	{ date: new Date("2025-11-12"), type: "income", amount: 1450 },
	{ date: new Date("2025-11-29"), type: "expense", amount: 550 },
	{ date: new Date("2025-12-17"), type: "income", amount: 15050 },
	{ date: new Date("2025-12-30"), type: "expense", amount: 650 },
];

function groupByMonth(data: Transaction[], from: Date, to: Date): MonthData[] {
	const months = new Map<string, MonthData>();
	const expandedTo = endOfMonth(to);

	for (const tx of data) {
		if (!isWithinInterval(tx.date, { start: from, end: expandedTo })) continue;

		const key = format(tx.date, "yyyy-MM");
		const entry = months.get(key) || { month: key, income: 0, expense: 0 };

		if (tx.type === "income") entry.income += tx.amount;
		if (tx.type === "expense") entry.expense += tx.amount;

		months.set(key, entry);
	}

	return Array.from(months.values()).sort((a, b) => a.month.localeCompare(b.month));
}

export async function getIncomeXExpensesChartData({ from, to }: { from: Date; to: Date }) {
	const grouped = groupByMonth(mockTransactions, from, to);

	return {
		categories: grouped.map((g) => g.month),
		series: [
			{
				name: "Receitas",
				data: grouped.map((g) => g.income),
			},
			{
				name: "Despesas",
				data: grouped.map((g) => g.expense),
			},
		],
	};
}

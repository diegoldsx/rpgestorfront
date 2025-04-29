"use server";

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
		categories: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
		],
	};
}

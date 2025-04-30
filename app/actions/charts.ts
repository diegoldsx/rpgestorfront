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


export async function getMembersStatsData() {
	return {
		total: 148,
		series: [25, 8, 26, 5, 30, 31, 36],
		categories: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
		regionData: [
			{ region: 'São Paulo', total: 45 },
			{ region: 'Rio de Janeiro', total: 32 },
			{ region: 'Minas Gerais', total: 28 },
			{ region: 'Paraná', total: 22 },
			{ region: 'Outros', total: 21 },
		],
	}
}


export async function getReportSummary(): Promise<ReportsAreaProps> {

const reports: ReportServerItem[] = [
    {
      id: 1,
      name: 'Receitas Mês',
      count: 'R$ 12.451',
      rate: '12',
      isUp: true,
      iconKey: 'receitas',
      color: 'success',
    },
    {
      id: 2,
      name: 'Despesas Mês',
      count: 'R$ 8.236',
      rate: '5',
      isUp: false,
      iconKey: 'despesas',
      color: 'destructive',
    },
    {
      id: 3,
      name: 'Total Associados',
      count: '148',
      rate: '8',
      isUp: true,
      iconKey: 'associados',
      color: 'info',
    },
    {
      id: 4,
      name: 'Eventos Ativos',
      count: '6',
      rate: '15',
      isUp: true,
      iconKey: 'eventos',
      color: 'warning',
    },
  ]

return {reports}
}


export async function getAccountBalance() {
  const accounts = [
    { bank: 'BRADESCO', balance: -804651 },
    { bank: 'CAIXA', balance: -552902 },
    { bank: 'ITAÚ', balance: 654653 },
    { bank: 'SANTANDER', balance: -10004 },
    { bank: 'BANCO DO BRASIL', balance: 12345 },
    { bank: 'NUBANK', balance: -123 },
  ]

  return {accounts}
}




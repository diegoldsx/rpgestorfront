'use client';

import { StatsCard } from '@/components/common/stats/stats-card';
import { CircleDollarSign, Receipt, AlertTriangle, Ban } from 'lucide-react';

const ExpenseStats = () => {
	const data = [
		{
			id: 1,
			title: 'Total Pago',
			amount: '127.980,00',
			percentage: '3.25',
			icon: <CircleDollarSign className='w-4 h-4 text-primary-foreground' />,
			isUp: true,
			color: 'primary',
			series: [
				{
					data: [20, 70, 85, 90, 50, 90],
				},
			],
		},
		{
			id: 2,
			title: 'A Pagar',
			amount: '65.210,00',
			percentage: '8.2',
			icon: <Receipt className='w-4 h-4 text-success-foreground' />,
			isUp: true,
			color: 'success',
			series: [
				{
					data: [10, 70, 95, 90, 40, 70],
				},
			],
		},
		{
			id: 3,
			title: 'Vencidos',
			amount: '12.000,00',
			percentage: '8.2',
			icon: <AlertTriangle className='w-4 h-4 text-warning-foreground' />,
			isUp: false,
			color: 'warning',
			series: [
				{
					data: [10, 50, 35, 50, 40, 90],
				},
			],
		},
		{
			id: 4,
			title: 'Cancelados',
			amount: '8.003,00',
			percentage: '8.2',
			icon: <Ban className='w-4 h-4 text-destructive-foreground' />,
			isUp: false,
			color: 'destructive',
			series: [
				{
					data: [20, 30, 85, 90, 50, 100],
				},
			],
		},
	];

	return data.map((item) => (
		<StatsCard
			key={item.id}
			title={item.title}
			value={`R$ ${item.amount}`}
			trend={{
				value: parseFloat(item.percentage),
				isPositive: item.isUp,
				label: 'vs mês anterior',
			}}
			icon={item.icon}
			color={item.color}
			chart={item.series && { data: item.series[0].data }}
		/>
	));
};

export default ExpenseStats;

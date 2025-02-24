import { StatsCard } from '@/components/common/stats/stats-card';
import { DollarSign, CreditCard, AlertTriangle, Ban } from 'lucide-react';

const IncomeStats = () => {
	const data = [
		{
			id: 1,
			title: 'Total Recebido',
			amount: '427.980,00',
			percentage: '3.25',
			icon: <DollarSign className='w-4 h-4 text-primary-foreground' />,
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
			title: 'A Receber',
			amount: '165.210,00',
			percentage: '8.2',
			icon: <CreditCard className='w-4 h-4 text-success-foreground' />,
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
			amount: '42.000,00',
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
			amount: '28.003,00',
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

export default IncomeStats;

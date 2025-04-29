'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { TrendingUp, TrendingDown, Users, Calendar } from 'lucide-react';

const ReportsArea = () => {
	const reports = [
		{
			id: 1,
			name: 'Receitas Mês',
			count: 'R$ 12.450',
			rate: '12',
			isUp: true,
			icon: <TrendingUp className='h-4 w-4' />,
			color: 'success',
		},
		{
			id: 2,
			name: 'Despesas Mês',
			count: 'R$ 8.236',
			rate: '5',
			isUp: false,
			icon: <TrendingDown className='h-4 w-4' />,
			color: 'destructive',
		},
		{
			id: 3,
			name: 'Total Associados',
			count: '148',
			rate: '8',
			isUp: true,
			icon: <Users className='h-4 w-4' />,
			color: 'info',
		},
		{
			id: 4,
			name: 'Eventos Ativos',
			count: '6',
			rate: '15',
			isUp: true,
			icon: <Calendar className='h-4 w-4' />,
			color: 'warning',
		},
	];
	return (
		<>
			{reports.map((item, index) => (
				<Card key={`report-card-${index}`}>
					<CardHeader className='flex-col-reverse sm:flex-row flex-wrap gap-2 border-none mb-0 pb-0'>
						<span className='text-sm font-medium text-default-900 flex-1'>
							{item.name}
						</span>
						<span
							className={cn(
								'flex-none h-9 w-9 flex justify-center items-center rounded-full',
								{
									'bg-emerald-100 text-emerald-600': item.color === 'success',
									'bg-red-100 text-red-600': item.color === 'destructive',
									'bg-blue-100 text-blue-600': item.color === 'info',
									'bg-orange-100 text-orange-600': item.color === 'warning',
								}
							)}
						>
							{item.icon}
						</span>
					</CardHeader>
					<CardContent className='pb-4 px-4'>
						<div className='text-2xl font-semibold text-default-900 mb-2.5'>
							{item.count}
						</div>
						<div className='flex items-center font-semibold gap-1'>
							{item.isUp ? (
								<>
									<span className='text-emerald-600'>{item.rate}%</span>
									<Icon
										icon='heroicons:arrow-trending-up-16-solid'
										className='text-emerald-600 text-xl'
									/>
								</>
							) : (
								<>
									<span className='text-red-600'>{item.rate}%</span>
									<Icon
										icon='heroicons:arrow-trending-down-16-solid'
										className='text-red-600 text-xl'
									/>
								</>
							)}
							<div className='ml-1 text-xs text-default-600'>
								vs mês anterior
							</div>
						</div>
					</CardContent>
				</Card>
			))}
		</>
	);
};

export default ReportsArea;

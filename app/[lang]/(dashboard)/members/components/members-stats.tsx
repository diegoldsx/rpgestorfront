'use client';

import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';

import { IoPeople } from 'react-icons/io5';
import { UserCheck, UserPlus } from 'lucide-react';
import { SiGoogledocs } from 'react-icons/si';
import StatsChart from './stats-chart';

const MembersStats = () => {
	const data = [
		{
			id: 1,
			title: 'Total de Associados',
			amount: '3188',
			percentage: '3.25',
			icon: <IoPeople className='w-4 h-4 text-primary-foreground' />,
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
			title: 'Associados Ativos',
			amount: '2945',
			percentage: '8.2',
			icon: <UserCheck className='w-4 h-4 text-primary-foreground' />,
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
			title: 'Associados Inativos',
			amount: '243',
			percentage: '8.2',
			icon: <SiGoogledocs className='w-4 h-4 text-white' />,
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
			title: 'Novos Associados',
			amount: '54',
			percentage: '12.5',
			icon: <UserPlus className='w-4 h-4 text-white' />,
			isUp: true,
			color: 'info',
			series: [
				{
					data: [20, 30, 85, 90, 50, 100],
				},
			],
		},
		{
			id: 5,
			title: 'Associados Inadimplentes',
			amount: '128',
			percentage: '5.6',
			icon: <SiGoogledocs className='w-4 h-4 text-white' />,
			isUp: false,
			color: 'destructive',
			series: [
				{
					data: [15, 45, 60, 70, 30, 50],
				},
			],
		},
	];

	return (
		<>
			{data.map((item, index) => (
				<div
					key={`members-stats-${index}`}
					className={cn('rounded-sm p-4 w-full', {
						'bg-primary-50': item.color === 'primary',
						'bg-green-50': item.color === 'success',
						'bg-orange-50': item.color === 'warning',
						'bg-blue-50': item.color === 'info',
						'bg-red-50': item.color === 'destructive',
					})}
				>
					<div className='flex gap-2'>
						<div className='flex-1 text-sm font-medium text-default-800'>
							{item.title}
						</div>
						<div
							className={cn(
								'flex-none h-7 w-7 rounded-sm flex justify-center items-center',
								{
									'bg-primary': item.color === 'primary',
									'bg-success': item.color === 'success',
									'bg-warning': item.color === 'warning',
									'bg-info': item.color === 'info',
									'bg-destructive': item.color === 'destructive',
								}
							)}
						>
							{item.icon}
						</div>
					</div>
					<div className='flex gap-3'>
						<div className='flex-1'>
							<div className='mt-2'>
								<div className='text-2xl font-semibold text-default-900'>
									{item.amount}
								</div>
							</div>
							<div className='mt-1.5'>
								<div className='flex items-center flex-wrap gap-1.5'>
									<span className='text-sm font-medium flex items-center text-default-600'>
										{item.isUp ? '+' : '-'}
										{item.percentage}%
										{item.isUp ? (
											<Icon
												icon='heroicons:arrow-trending-up-16-solid'
												className='text-success text-xl'
											/>
										) : (
											<Icon
												icon='heroicons:arrow-trending-down-16-solid'
												className='text-destructive text-xl'
											/>
										)}
									</span>
									<span className='text-xs text-default-600'>
										vs mês passado
									</span>
								</div>
							</div>
						</div>
						<div className='self-end flex-none w-[70px]'>
							<StatsChart series={item.series} color={item.color} />
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default MembersStats;

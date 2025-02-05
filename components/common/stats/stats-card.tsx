'use client';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import StatsChart from './stats-chart';

export type StatsColor =
	| 'primary'
	| 'success'
	| 'warning'
	| 'info'
	| 'destructive'
	| 'purple'
	| 'teal'
	| 'amber';

interface StatsCardProps {
	title: string;
	value: string | number;
	trend?: {
		value: number;
		isPositive: boolean;
		label?: string;
	};
	icon?: React.ReactNode;
	color?: StatsColor;
	chart?: {
		data: number[];
	};
}

export const StatsCard = ({
	title,
	value,
	trend,
	icon,
	color = 'primary',
	chart,
}: StatsCardProps) => {
	const series = chart
		? [
				{
					data: chart.data,
				},
		  ]
		: undefined;

	const getColorClasses = (color: StatsColor) => {
		const classes = {
			bg: {
				primary: 'bg-primary-50 dark:bg-primary/10',
				success: 'bg-green-50 dark:bg-green-500/10',
				warning: 'bg-orange-50 dark:bg-orange-500/10',
				info: 'bg-blue-50 dark:bg-blue-500/10',
				destructive: 'bg-red-50 dark:bg-red-500/10',
				purple: 'bg-purple-50 dark:bg-purple-500/10',
				teal: 'bg-teal-50 dark:bg-teal-500/10',
				amber: 'bg-amber-50 dark:bg-amber-500/10',
			},
			icon: {
				primary: 'bg-primary text-primary-foreground',
				success: 'bg-success text-success-foreground',
				warning: 'bg-warning text-warning-foreground',
				info: 'bg-info text-info-foreground',
				destructive: 'bg-destructive text-destructive-foreground',
				purple: 'bg-purple text-purple-foreground',
				teal: 'bg-teal text-teal-foreground',
				amber: 'bg-amber text-amber-foreground',
			},
			text: {
				primary: 'text-primary-600 dark:text-primary-400',
				success: 'text-success-600 dark:text-success-400',
				warning: 'text-warning-600 dark:text-warning-400',
				info: 'text-info-600 dark:text-info-400',
				destructive: 'text-destructive-600 dark:text-destructive-400',
				purple: 'text-purple-600 dark:text-purple-400',
				teal: 'text-teal-600 dark:text-teal-400',
				amber: 'text-amber-600 dark:text-amber-400',
			},
		};

		return {
			bg: classes.bg[color],
			icon: classes.icon[color],
			text: classes.text[color],
		};
	};

	const colorClasses = getColorClasses(color);

	return (
		<div className={cn('rounded-sm p-4 w-full', colorClasses.bg)}>
			<div className='flex gap-2'>
				<div className='flex-1 text-sm font-medium text-default-800 dark:text-default-100'>
					{title}
				</div>
				{icon && (
					<div
						className={cn(
							'flex-none h-7 w-7 rounded-sm flex justify-center items-center',
							colorClasses.icon
						)}
					>
						{icon}
					</div>
				)}
			</div>

			<div className='flex gap-3'>
				<div className='flex-1'>
					<div className='mt-2'>
						<div className={cn('text-2xl font-semibold', colorClasses.text)}>
							{value}
						</div>
					</div>
					{trend && (
						<div className='mt-1.5'>
							<div className='flex items-center flex-wrap gap-1.5'>
								<span
									className={cn(
										'text-sm font-medium flex items-center',
										trend.isPositive
											? 'text-success-600'
											: 'text-destructive-600'
									)}
								>
									{trend.isPositive ? '+' : '-'}
									{trend.value}%
									<Icon
										icon={
											trend.isPositive
												? 'heroicons:arrow-trending-up'
												: 'heroicons:arrow-trending-down'
										}
										className='w-3.5 h-3.5 ml-1'
									/>
								</span>
								{trend.label && (
									<span className='text-xs text-default-600 dark:text-default-400'>
										{trend.label}
									</span>
								)}
							</div>
						</div>
					)}
				</div>

				{chart && series && (
					<div className='self-end flex-none w-[70px]'>
						<StatsChart series={series} color={color} />
					</div>
				)}
			</div>
		</div>
	);
};

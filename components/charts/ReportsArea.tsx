'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/react'
import { Calendar, TrendingDown, TrendingUp, User } from 'lucide-react'
import React from 'react'
export type IconKey = 'receitas' | 'despesas' | 'associados' | 'eventos'
type Icon = {
	[key in IconKey]: React.ReactNode }

const iconMap: Icon = {
	receitas: <TrendingUp className="h-4 w-4" />,
	despesas: <TrendingDown className="h-4 w-4" />,
	associados: <User className="h-4 w-4" />,
	eventos: <Calendar className="h-4 w-4" />,
}

export type ReportServerItem = {
	id: number
	name: string
	count: string
	rate: string
	isUp: boolean
	iconKey: string
	color: 'success' | 'destructive' | 'info' | 'warning'
}

export type ReportsAreaProps = {
	reports: ReportServerItem[]
}

export function ReportsArea({ reports }: ReportsAreaProps) {

	return (
		<>
			{reports.map((item) => (
				<Card key={item.id}>
					<CardHeader className='flex-col-reverse sm:flex-row flex-wrap gap-2 border-none mb-0 pb-0'>
						<span className='text-sm font-medium text-default-900 flex-1'>{item.name}</span>
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
							{iconMap[item.iconKey as IconKey]}
						</span>
					</CardHeader>
					<CardContent className='pb-4 px-4'>
						<div className='text-2xl font-semibold text-default-900 mb-2.5'>{item.count}</div>
						<div className='flex items-center font-semibold gap-1'>
							{item.isUp ? (
								<>
									<span className='text-emerald-600'>{item.rate}%</span>
									<Icon icon='heroicons:arrow-trending-up-16-solid' className='text-emerald-600 text-xl' />
								</>
							) : (
								<>
									<span className='text-red-600'>{item.rate}%</span>
									<Icon icon='heroicons:arrow-trending-down-16-solid' className='text-red-600 text-xl' />
								</>
							)}
							<div className='ml-1 text-xs text-default-600'>vs mês anterior</div>
						</div>
					</CardContent>
				</Card>
			))}
		</>
	)
}

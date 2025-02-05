'use client';

import { Fragment } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Calendar, FolderOpen, ClipboardList } from 'lucide-react';
import { StatsCard } from '@/components/common/stats/stats-card';
import { HeadingPages } from '@/components/common/heading/heading-pages';
import { BaseTable } from '@/components/common/data-table/base-table';
import { BasePagination } from '@/components/common/data-table/table-pagination';
import { BaseToolbar } from '@/components/common/data-table/table-toolbar';

// Mock data para assembleias
const assembleiaData = [
	{
		id: '1',
		title: 'Assembleia Geral Ordinária',
		date: '2024-01-15',
		status: 'Concluída',
		participants: 150,
	},
	{
		id: '2',
		title: 'Assembleia Extraordinária',
		date: '2024-02-20',
		status: 'Agendada',
		participants: 200,
	},
	{
		id: '3',
		title: 'Reunião do Conselho',
		date: '2024-03-10',
		status: 'Cancelada',
		participants: 80,
	},
];

const columns = [
	{ accessorKey: 'id', header: 'ID' },
	{ accessorKey: 'title', header: 'Título' },
	{ accessorKey: 'date', header: 'Data' },
	{ accessorKey: 'status', header: 'Status' },
	{ accessorKey: 'participants', header: 'Participantes' },
];

const statsData = [
	{
		title: 'Total de Assembleias',
		value: '3',
		trend: { value: 10, isPositive: true, label: 'vs mês anterior' },
		icon: <FolderOpen className='w-4 h-4 text-primary-foreground' />,
		chart: { data: [10, 20, 15, 25, 20, 30, 10] },
		color: 'success',
	},
	{
		title: 'Concluídas',
		value: '1',
		trend: { value: 5, isPositive: true, label: 'este mês' },
		icon: <ClipboardList className='w-4 h-4 text-success-foreground' />,
		chart: { data: [5, 10, 8, 12, 10, 15, 5] },
		color: 'primary',
	},
	{
		title: 'Agendadas',
		value: '1',
		trend: { value: 3, isPositive: true, label: 'próximo mês' },
		icon: <Calendar className='w-4 h-4 text-info-foreground' />,
		chart: { data: [8, 15, 10, 18, 12, 20, 8] },
		color: 'warning',
	},
	{
		title: 'Participantes Totais',
		value: '430',
		trend: { value: 15, isPositive: true, label: 'vs mês anterior' },
		icon: <Users className='w-4 h-4 text-warning-foreground' />,
		chart: { data: [50, 100, 80, 150, 120, 200, 50] },
		color: 'warning',
	},
];

const AssembliesPage = () => {
	return (
		<Fragment>
			<HeadingPages
				title='Assembleias'
				breadcrumbs={{ title: 'Assembleias', href: '/assembleias' }}
				actions={{
					secondary: { text: 'Nova Assembleia', href: '/assembleias/create' },
				}}
			/>

			<div className='mt-3 space-y-6'>
				{/* Cards de Estatísticas */}
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
					{statsData.map((stat, index) => (
						<StatsCard
							key={index}
							title={stat.title}
							value={stat.value}
							trend={stat.trend}
							icon={stat.icon}
							color={stat.color}
							chart={stat.chart}
						/>
					))}
				</div>

				{/* Tabela de Assembleias */}
				<Card>
					<CardContent className='p-0'>
						<BaseTable
							columns={columns}
							data={assembleiaData}
							emptyMessage='Nenhuma assembleia encontrada.'
						/>
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};

export default AssembliesPage;

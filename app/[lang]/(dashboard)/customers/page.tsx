'use client';

import { Fragment } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Breadcrumbs, BreadcrumbItem } from '@/components/ui/breadcrumbs';
import { Building2, Users, UserPlus, UserCheck } from 'lucide-react';
import { StatsCard } from '@/components/common/stats/stats-card';
import { ActionCard } from '@/components/common/promotional/action-card';
import ClientsListTable from './components/clients-list-table';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import { HeadingPages } from '@/components/common/heading/heading-pages';

const ClientsPage = () => {
	// Estatísticas mockadas
	const statsData = [
		{
			title: 'Total de Clientes',
			value: '5',
			trend: { value: 12, isPositive: true, label: 'vs mês anterior' },
			icon: <Building2 className='w-4 h-4 text-primary-foreground' />,
			chart: { data: [35, 60, 25, 65, 45, 75, 35] },
			color: 'primary',
		},
		{
			title: 'Clientes Ativos',
			value: '5',
			trend: { value: 8, isPositive: true, label: 'vs mês anterior' },
			icon: <UserCheck className='w-4 h-4 text-success-foreground' />,
			chart: { data: [45, 70, 35, 75, 55, 85, 45] },
			color: 'success',
		},
		{
			title: 'Novos Clientes',
			value: '2',
			trend: { value: 24, isPositive: true, label: 'este mês' },
			icon: <UserPlus className='w-4 h-4 text-info-foreground' />,
			chart: { data: [25, 50, 15, 55, 35, 65, 25] },
			color: 'info',
		},
		{
			title: 'Contratos Ativos',
			value: '8',
			trend: { value: 5, isPositive: true, label: 'vs mês anterior' },
			icon: <Users className='w-4 h-4 text-warning-foreground' />,
			chart: { data: [30, 55, 20, 60, 40, 70, 30] },
			color: 'warning',
		},
	];

	return (
		<Fragment>
			<HeadingPages
				title='Clientes'
				breadcrumbs={{ title: 'Clientes', href: '/customers' }}
				actions={{
					primary: { text: 'Importar', href: '/customers/import' },
					secondary: { text: 'Cadastrar cliente', href: '/customers/create' },
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

				{/* Tabela de Clientes */}
				<Card>
					<CardContent className='p-0'>
						<ClientsListTable />
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};

export default ClientsPage;

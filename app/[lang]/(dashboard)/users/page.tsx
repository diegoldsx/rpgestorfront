'use client';

import { Fragment } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, UserPlus, UserCheck } from 'lucide-react';
import { StatsCard } from '@/components/common/stats/stats-card';
import { HeadingPages } from '@/components/common/heading/heading-pages';
import { BaseTable } from '@/components/common/data-table/base-table';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const usersData = [
	{
		id: '1',
		name: 'João Silva',
		email: 'joao.silva@email.com',
		role: 'Admin',
		status: 'ACTIVE',
	},
	{
		id: '2',
		name: 'Maria Oliveira',
		email: 'maria.oliveira@email.com',
		role: 'Usuário',
		status: 'INACTIVE',
	},
	{
		id: '3',
		name: 'Carlos Santos',
		email: 'carlos.santos@email.com',
		role: 'Usuário',
		status: 'ACTIVE',
	},
	{
		id: '4',
		name: 'Ana Lima',
		email: 'ana.lima@email.com',
		role: 'Admin',
		status: 'PENDING',
	},
	{
		id: '5',
		name: 'Paulo Almeida',
		email: 'paulo.almeida@email.com',
		role: 'Usuário',
		status: 'ACTIVE',
	},
	{
		id: '6',
		name: 'Fernanda Costa',
		email: 'fernanda.costa@email.com',
		role: 'Usuário',
		status: 'ACTIVE',
	},
	{
		id: '7',
		name: 'Rafael Pereira',
		email: 'rafael.pereira@email.com',
		role: 'Usuário',
		status: 'INACTIVE',
	},
	{
		id: '8',
		name: 'Juliana Rocha',
		email: 'juliana.rocha@email.com',
		role: 'Admin',
		status: 'ACTIVE',
	},
	{
		id: '9',
		name: 'Ricardo Nunes',
		email: 'ricardo.nunes@email.com',
		role: 'Usuário',
		status: 'PENDING',
	},
	{
		id: '10',
		name: 'Carla Mendes',
		email: 'carla.mendes@email.com',
		role: 'Usuário',
		status: 'ACTIVE',
	},
];

const columns = [
	{
		accessorKey: 'id',
		header: 'ID',
	},
	{
		accessorKey: 'name',
		header: 'Nome',
	},
	{
		accessorKey: 'email',
		header: 'Email',
	},
	{
		accessorKey: 'role',
		header: 'Função',
	},
	{
		accessorKey: 'status',
		header: 'Status',
		cell: ({ row }) => {
			const status = row.getValue('status');
			const statusMap = {
				ACTIVE: { label: 'Ativo', color: 'success' },
				INACTIVE: { label: 'Inativo', color: 'warning' },
				PENDING: { label: 'Pendente', color: 'info' },
			};
			return (
				<Badge variant='soft' color={statusMap[status].color}>
					{statusMap[status].label}
				</Badge>
			);
		},
	},
	{
		id: 'actions',
		header: 'Ações',
		cell: ({ row }) => (
			<div className='flex gap-2 justify-end'>
				<Button asChild size='icon' variant='ghost' className='h-8 w-8'>
					<Link href={`/users/${row.original.id}`}>
						<Icon icon='heroicons:eye' className='w-4 h-4' />
					</Link>
				</Button>
				<Button size='icon' variant='ghost' className='h-8 w-8'>
					<Icon icon='heroicons:pencil-square' className='w-4 h-4' />
				</Button>
				<Button size='icon' variant='ghost' className='h-8 w-8'>
					<Icon icon='heroicons:trash' className='w-4 h-4' />
				</Button>
			</div>
		),
	},
];

const UsersPage = () => {
	const statsData = [
		{
			title: 'Total de Usuários',
			value: '10',
			trend: { value: 15, isPositive: true, label: 'vs mês anterior' },
			icon: <Users className='w-4 h-4 text-primary-foreground' />,
			color: 'primary',
		},
		{
			title: 'Ativos',
			value: '7',
			trend: { value: 10, isPositive: true, label: 'este mês' },
			icon: <UserCheck className='w-4 h-4 text-success-foreground' />,
			color: 'success',
		},
		{
			title: 'Novos Usuários',
			value: '3',
			trend: { value: 20, isPositive: true, label: 'este mês' },
			icon: <UserPlus className='w-4 h-4 text-info-foreground' />,
			color: 'amber',
		},
	];

	return (
		<Fragment>
			<HeadingPages
				title='Usuários'
				breadcrumbs={{ title: 'Usuários', href: '/users' }}
				actions={{
					primary: { text: 'Importar', href: '/users/import' },
					secondary: { text: 'Novo Usuário', href: '/users/create' },
				}}
			/>
			<div className='mt-3 space-y-6'>
				<Card>
					<CardContent className='p-0'>
						<BaseTable
							columns={columns}
							data={usersData}
							emptyMessage='Nenhum usuário encontrado.'
						/>
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};

export default UsersPage;

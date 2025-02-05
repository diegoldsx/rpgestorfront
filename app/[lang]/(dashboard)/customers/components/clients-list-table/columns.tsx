'use client';

import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from '@/components/common/data-table/table-column-header';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { ColumnDef } from '@tanstack/react-table';

// Tipo para os dados dos clientes
export interface Client {
	id: string;
	name: string;
	email: string;
	document: string; // CPF/CNPJ
	type: 'PF' | 'PJ'; // Pessoa Física ou Jurídica
	state: string;
	status: 'ACTIVE' | 'INACTIVE' | 'PENDING';
	contracts: number;
	lastInteraction: string;
}

export const columns: ColumnDef<Client>[] = [
	{
		id: 'select',
		header: ({ table }) => (
			<Checkbox
				checked={table.getIsAllPageRowsSelected()}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label='Selecionar todos'
				className='translate-y-[2px]'
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label='Selecionar linha'
				className='translate-y-[2px]'
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: 'id',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='ID' />
		),
		cell: ({ row }) => <div className='w-[80px]'>{row.getValue('id')}</div>,
		enableSorting: true,
		enableHiding: false,
	},
	{
		accessorKey: 'name',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Nome/Razão Social' />
		),
		cell: ({ row }) => {
			return (
				<div className='flex flex-col'>
					<span className='text-sm font-medium text-default-900'>
						{row.getValue('name')}
					</span>
					<span className='text-xs text-default-500'>
						{row.getValue('email')}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: 'document',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='CPF/CNPJ' />
		),
		cell: ({ row }) => (
			<div className='flex items-center gap-2'>
				<Badge variant='soft' color='default' className='text-xs'>
					{row.getValue('type') === 'PF' ? 'CPF' : 'CNPJ'}
				</Badge>
				<span>{row.getValue('document')}</span>
			</div>
		),
	},
	{
		accessorKey: 'state',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Estado' />
		),
		cell: ({ row }) => <span className='text-sm'>{row.getValue('state')}</span>,
	},
	{
		accessorKey: 'contracts',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Contratos' />
		),
		cell: ({ row }) => (
			<Badge variant='outline' className='font-mono'>
				{row.getValue('contracts')}
			</Badge>
		),
	},
	{
		accessorKey: 'lastInteraction',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Última Interação' />
		),
		cell: ({ row }) => (
			<span className='text-sm text-default-600'>
				{row.getValue('lastInteraction')}
			</span>
		),
	},
	{
		accessorKey: 'status',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Situação' />
		),
		cell: ({ row }) => {
			const status = row.getValue('status') as string;
			const statusMap = {
				ACTIVE: { label: 'Ativo', color: 'success' },
				INACTIVE: { label: 'Inativo', color: 'warning' },
				PENDING: { label: 'Pendente', color: 'info' },
			};

			return (
				<Badge
					className='capitalize'
					variant='soft'
					color={statusMap[status].color}
				>
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
					<Link href={`/clients/${row.original.id}`}>
						<Icon icon='heroicons:eye' className='w-4 h-4' />
					</Link>
				</Button>
				<Button size='icon' variant='ghost' className='h-8 w-8'>
					<Icon icon='heroicons:pencil-square' className='w-4 h-4' />
				</Button>
				<Button size='icon' variant='ghost' className='h-8 w-8'>
					<Icon icon='heroicons:document-text' className='w-4 h-4' />
				</Button>
				<Button
					size='icon'
					variant='ghost'
					className='h-8 w-8 text-destructive hover:text-destructive'
				>
					<Icon icon='heroicons:trash' className='w-4 h-4' />
				</Button>
			</div>
		),
	},
];

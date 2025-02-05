'use client';
import { Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Icon } from '@iconify/react';
import { Table } from '@tanstack/react-table';
import { Member } from './columns';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import Link from 'next/link';
import { DataTableFacetedFilter } from '@/app/[lang]/(dash-components)/(apps)/projects/project-list/components/data-table-faceted-filter';
import { DataTableViewOptions } from '@/app/[lang]/(dash-components)/(apps)/projects/project-list/components/data-table-view-options';

// Status options for filter
const statuses = [
	{
		label: 'Ativo',
		value: 'ACTIVE',
		icon: 'heroicons:check-circle',
	},
	{
		label: 'Inativo',
		value: 'INACTIVE',
		icon: 'heroicons:x-circle',
	},
];

const columnName = [
	{
		label: 'Ativo',
		value: 'ACTIVE',
	},
	{
		label: 'Inativo',
		value: 'INACTIVE',
		icon: 'heroicons:x-circle',
	},
];

interface DataTableToolbarProps {
	table: Table<Member>;
}

export function DataTableToolbar({ table }: DataTableToolbarProps) {
	const isFiltered = table.getState().columnFilters.length > 0;
	return (
		<div className='flex flex-col md:flex-row gap-4'>
			<div className='flex-1 flex flex-col sm:flex-row sm:items-center gap-3'>
				<div className='flex items-center gap-3'>
					<span className='text-base font-medium text-default-600'>Exibir</span>
					<Select>
						<SelectTrigger className='w-20' size='md' radius='sm'>
							<SelectValue placeholder='10' />
						</SelectTrigger>
						<SelectContent className='w-20 min-w-[80px]'>
							{[10, 20, 30, 40, 50].map((pageSize) => (
								<SelectItem key={pageSize} value={`${pageSize}`}>
									{pageSize}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<div className='relative'>
					<Input
						placeholder='Buscar associado...'
						value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
						onChange={(event) =>
							table.getColumn('name')?.setFilterValue(event.target.value)
						}
						className='min-w-[300px] sm:max-w-[248px] ltr:pl-7 rtl:pr-7 rounded'
					/>
					<Icon
						icon='heroicons:magnifying-glass'
						className='w-3.5 h-3.5 absolute top-1/2 -translate-y-1/2 ltr:left-3 rtl:right-3 text-default-500'
					/>
				</div>
			</div>
			<div className='flex-none flex flex-col sm:flex-row sm:items-center gap-4'>
				<DataTableViewOptions table={table} />
				{table.getColumn('status') && (
					<DataTableFacetedFilter
						column={table.getColumn('status')}
						title='Situação'
						options={statuses}
					/>
				)}

				{isFiltered && (
					<Button
						variant='outline'
						onClick={() => table.resetColumnFilters()}
						className='border-default-300 text-default-600 px-2 lg:px-3'
					>
						Limpar
						<X className='ltr:ml-2 rtl:mr-2 h-4 w-4' />
					</Button>
				)}

				<Button variant='outline' size='sm' className='w-full'>
					{' '}
					<Icon
						icon='heroicons:funnel'
						className='w-3.5 h-3.5 ltr:mr-0.5 rtl:ml-0.5'
					/>
					Filtrar
				</Button>
			</div>
		</div>
	);
}

import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from '@/components/common/data-table/table-column-header';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { ColumnDef } from '@tanstack/react-table';

// Interface para os dados de Despesa
export interface Expense {
	id: string;
	description: string;
	category: string;
	value: number;
	supplier: string;
	paymentMethod: string;
	dueDate: string;
	paymentDate: string;
	status: 'PAID' | 'PENDING' | 'OVERDUE' | 'CANCELED';
	competency: string;
}

export const columns: ColumnDef<Expense>[] = [
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
		accessorKey: 'description',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Descrição' />
		),
		cell: ({ row }) => {
			return (
				<div className='flex flex-col'>
					<span className='text-sm font-medium text-default-900'>
						{row.getValue('description')}
					</span>
					<span className='text-xs text-default-500'>
						{row.getValue('category')}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: 'value',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Valor' />
		),
		cell: ({ row }) => {
			const value = parseFloat(row.getValue('value'));
			const formatted = new Intl.NumberFormat('pt-BR', {
				style: 'currency',
				currency: 'BRL',
			}).format(value);

			return <div className='font-mono'>{formatted}</div>;
		},
	},
	{
		accessorKey: 'supplier',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Fornecedor' />
		),
		cell: ({ row }) => <span>{row.getValue('supplier')}</span>,
	},
	{
		accessorKey: 'competency',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Competência' />
		),
		cell: ({ row }) => <span>{row.getValue('competency')}</span>,
	},
	{
		accessorKey: 'dueDate',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Vencimento' />
		),
		cell: ({ row }) => <span>{row.getValue('dueDate')}</span>,
	},
	{
		accessorKey: 'paymentDate',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Data Pagamento' />
		),
		cell: ({ row }) => <span>{row.getValue('paymentDate')}</span>,
	},
	{
		accessorKey: 'status',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title='Situação' />
		),
		cell: ({ row }) => {
			const status = row.getValue('status') as string;
			const statusMap = {
				PAID: { label: 'Pago', color: 'success' },
				PENDING: { label: 'Pendente', color: 'warning' },
				OVERDUE: { label: 'Vencido', color: 'destructive' },
				CANCELED: { label: 'Cancelado', color: 'default' },
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
					<Link href={`/financial/expenses/${row.original.id}`}>
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

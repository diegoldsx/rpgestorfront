import { Fragment } from 'react';

import { BaseTable } from '@/components/common/data-table/base-table';
import { columns } from './columns';

// Dados mockados
const data = [
	{
		id: '1',
		description: 'Mensalidade Janeiro',
		category: 'Mensalidade',
		value: 1500.0,
		member: 'Empresa ABC',
		paymentMethod: 'Boleto',
		dueDate: '2024-01-10',
		receiptDate: '2024-01-08',
		status: 'PAID',
	},
	{
		id: '2',
		description: 'Mensalidade Janeiro',
		category: 'Mensalidade',
		value: 2500.0,
		member: 'Empresa XYZ',
		paymentMethod: 'Cartão',
		dueDate: '2024-01-10',
		receiptDate: null,
		status: 'PENDING',
	},
	{
		id: '3',
		description: 'Taxa Extra',
		category: 'Taxa',
		value: 500.0,
		member: 'Empresa 123',
		paymentMethod: 'PIX',
		dueDate: '2023-12-15',
		receiptDate: null,
		status: 'OVERDUE',
	},
	{
		id: '4',
		description: 'Mensalidade Janeiro',
		category: 'Mensalidade',
		value: 1800.0,
		member: 'Empresa QWE',
		paymentMethod: 'Boleto',
		dueDate: '2024-01-10',
		receiptDate: '2024-01-05',
		status: 'PAID',
	},
	{
		id: '5',
		description: 'Mensalidade Janeiro',
		category: 'Mensalidade',
		value: 1200.0,
		member: 'Empresa ZXC',
		paymentMethod: 'Boleto',
		dueDate: '2024-01-10',
		receiptDate: null,
		status: 'CANCELED',
	},
];

export default function IncomeListTable() {
	return (
		<Fragment>
			<BaseTable
				data={data}
				columns={columns}
				addNewButton={{
					label: 'Nova Receita',
					href: '/financial/income/new',
				}}
				searchPlaceholder='Buscar receitas...'
				emptyMessage='Nenhuma receita encontrada.'
			/>
		</Fragment>
	);
}

import { Fragment } from 'react';
import { columns } from './columns';
import { BaseTable } from '@/components/common/data-table/base-table';

// Dados mockados
const data = [
	{
		id: '1',
		description: 'Aluguel Sede',
		category: 'Despesas Fixas',
		value: 5000.0,
		supplier: 'Imobiliária XYZ',
		paymentMethod: 'Boleto',
		dueDate: '2024-01-10',
		paymentDate: '2024-01-08',
		status: 'PAID',
		competency: '01/2024',
	},
	{
		id: '2',
		description: 'Energia Elétrica',
		category: 'Utilidades',
		value: 1500.0,
		supplier: 'Energisa',
		paymentMethod: 'Débito',
		dueDate: '2024-01-15',
		paymentDate: null,
		status: 'PENDING',
		competency: '01/2024',
	},
	{
		id: '3',
		description: 'Material de Escritório',
		category: 'Materiais',
		value: 800.0,
		supplier: 'Papelaria ABC',
		paymentMethod: 'Cartão',
		dueDate: '2023-12-20',
		paymentDate: null,
		status: 'OVERDUE',
		competency: '12/2023',
	},
	{
		id: '4',
		description: 'Manutenção AC',
		category: 'Manutenção',
		value: 450.0,
		supplier: 'Refrigeração 123',
		paymentMethod: 'PIX',
		dueDate: '2024-01-05',
		paymentDate: '2024-01-05',
		status: 'PAID',
		competency: '01/2024',
	},
	{
		id: '5',
		description: 'Serviço de Limpeza',
		category: 'Serviços',
		value: 2200.0,
		supplier: 'Limpeza & Cia',
		paymentMethod: 'Transferência',
		dueDate: '2024-01-10',
		paymentDate: null,
		status: 'CANCELED',
		competency: '01/2024',
	},
];

export default function ExpenseListTable() {
	return (
		<Fragment>
			<BaseTable
				data={data}
				columns={columns}
				addNewButton={{
					label: 'Nova Despesa',
					href: '/financial/expenses/new',
				}}
				searchPlaceholder='Buscar despesas...'
				emptyMessage='Nenhuma despesa encontrada.'
			/>
		</Fragment>
	);
}

'use client';

import { Fragment } from 'react';
import { columns } from './columns';
import { BaseTable } from '@/components/common/data-table/base-table';

// Dados mockados
const data = [
	{
		id: '1',
		name: 'Empresa 1',
		email: 'contato@empresa1.com.br',
		document: '18.159.301/0001-28',
		type: 'PJ',
		state: 'SP',
		status: 'ACTIVE',
		contracts: 3,
		lastInteraction: '2024-03-15',
	},
	{
		id: '2',
		name: 'Empresa 2',
		email: 'contato@empresa2.com.br',
		document: '02.522.603/0001-89',
		type: 'PJ',
		state: 'RJ',
		status: 'ACTIVE',
		contracts: 2,
		lastInteraction: '2024-03-10',
	},
	{
		id: '3',
		name: 'Empresa 3',
		email: 'contato@empresa3.com.br',
		document: '37.818.128/0001-77',
		type: 'PJ',
		state: 'MG',
		status: 'PENDING',
		contracts: 1,
		lastInteraction: '2024-03-01',
	},
	{
		id: '4',
		name: 'Empresa 4',
		email: 'contato@empresa4.com.br',
		document: '51.456.568/0001-52',
		type: 'PJ',
		state: 'RS',
		status: 'ACTIVE',
		contracts: 1,
		lastInteraction: '2024-02-28',
	},
	{
		id: '5',
		name: 'Empresa 5',
		email: 'contato@empresa5.com.br',
		document: '32.450.966/0001-17',
		type: 'PJ',
		state: 'PR',
		status: 'INACTIVE',
		contracts: 1,
		lastInteraction: '2024-02-15',
	},
];

export default function ClientsListTable() {
	return (
		<Fragment>
			<BaseTable
				data={data}
				columns={columns}
				addNewButton={{
					label: 'Novo Cliente',
					href: '/clients/new',
				}}
				searchPlaceholder='Buscar clientes...'
				emptyMessage='Nenhum cliente encontrado.'
			/>
		</Fragment>
	);
}

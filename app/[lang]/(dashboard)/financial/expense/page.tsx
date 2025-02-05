'use client';

import { Fragment } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { HeadingPages } from '@/components/common/heading/heading-pages';
import { ActionCard } from '@/components/common/promotional/action-card';
import ExpenseStats from './components/expenses-stats';
import ExpenseListTable from './components/expenses-list-table';

const ExpensePage = () => {
	return (
		<Fragment>
			<HeadingPages
				title='Despesas'
				breadcrumbs={{
					title: 'Financeiro',
					href: '/financial',
				}}
				actions={{
					primary: {
						text: 'Importar Despesas',
						href: '/financial/expenses/import',
					},
					secondary: {
						text: 'Nova Despesa',
						href: '/financial/expenses/new',
					},
				}}
			/>

			<div className='mt-3 space-y-6'>
				{/* Cards de Estatísticas */}
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
					<ExpenseStats />
				</div>

				{/* Tabela de Despesas */}
				<Card>
					<CardContent className='p-0'>
						<ExpenseListTable />
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};

export default ExpensePage;

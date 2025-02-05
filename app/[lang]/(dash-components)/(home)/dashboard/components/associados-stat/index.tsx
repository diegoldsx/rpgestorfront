'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Icon } from '@iconify/react';
import AssociadosDataChart from './associados-data-chart';
import AssociadosDataTable from './associados-data-table';

interface Associado {
	id: number;
	regiao: string;
	total: string;
}

const AssociadosStat = () => {
	const associadosData: Associado[] = [
		{
			id: 1,
			regiao: 'São Paulo',
			total: '45',
		},
		{
			id: 2,
			regiao: 'Rio de Janeiro',
			total: '32',
		},
		{
			id: 3,
			regiao: 'Minas Gerais',
			total: '28',
		},
		{
			id: 4,
			regiao: 'Paraná',
			total: '22',
		},
		{
			id: 5,
			regiao: 'Outros',
			total: '21',
		},
	];

	return (
		<Card>
			<CardHeader className='border-none pb-0 mb-5'>
				<div className='flex items-center gap-1'>
					<div className='flex-1'>
						<div className='text-xl font-semibold text-default-900'>
							Associados
						</div>
						<span className='text-xs text-default-600 ml-1'>
							Últimos 30 dias
						</span>
					</div>
					<div className='flex-none flex items-center gap-1'>
						<span className='text-4xl font-semibold text-primary'>148</span>
						<span className='text-2xl text-success'>
							<Icon icon='heroicons:arrow-trending-up-16-solid' />
						</span>
					</div>
				</div>
			</CardHeader>
			<CardContent className='px-5 pb-0'>
				<p className='text-xs font-medium text-default-800'>
					Associados por Região
				</p>
				<AssociadosDataChart />
				<AssociadosDataTable associados={associadosData} />
			</CardContent>
		</Card>
	);
};

export default AssociadosStat;

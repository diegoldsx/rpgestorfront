'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardDropdown from '@/components/dashboard-dropdown';
import { Calendar, Users, DollarSign } from 'lucide-react';

const eventos = [
	{
		id: 1,
		nome: 'Curso Neurociência',
		data: '26/12/2024',
		participantes: 45,
		receita: 4500,
	},
	{
		id: 2,
		nome: 'ABRE',
		data: '15/01/2025',
		participantes: 120,
		receita: 12000,
	},
	{
		id: 3,
		nome: 'Prêmio Embalagem',
		data: '28/02/2025',
		participantes: 200,
		receita: 20000,
	},
	{
		id: 4,
		nome: 'Workshop Design',
		data: '10/03/2025',
		participantes: 30,
		receita: 3000,
	},
	{
		id: 5,
		nome: 'Congresso Anual',
		data: '15/04/2025',
		participantes: 500,
		receita: 50000,
	},
];

const UltimosEventos = () => {
	return (
		<Card>
			<CardHeader className='flex-row items-center justify-between border-none pb-0'>
				<CardTitle>Próximos Eventos</CardTitle>
				<DashboardDropdown />
			</CardHeader>
			<CardContent className='px-0'>
				<div>
					{eventos.map((item, index) => (
						<div
							className='flex flex-wrap gap-2 hover:bg-default-50 py-[11px] px-4'
							key={`evento-item-${index}`}
						>
							<div className='flex-1 flex items-center gap-3'>
								<div className='w-8 h-8 md:h-10 md:w-10 bg-primary/10 rounded-full flex items-center justify-center'>
									<Calendar className='w-5 h-5 text-primary' />
								</div>
								<div>
									<div className='text-sm font-medium text-default-600'>
										{item.nome}
									</div>
									<div className='text-xs text-default-500'>{item.data}</div>
								</div>
							</div>
							<div className='flex items-center gap-4'>
								<div className='flex items-center gap-1.5'>
									<Users className='w-4 h-4 text-default-500' />
									<span className='text-sm text-default-600'>
										{item.participantes}
									</span>
								</div>
								<div className='flex items-center gap-1.5'>
									<DollarSign className='w-4 h-4 text-success' />
									<span className='text-sm font-medium text-success'>
										{new Intl.NumberFormat('pt-BR', {
											style: 'currency',
											currency: 'BRL',
										}).format(item.receita)}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};

export default UltimosEventos;

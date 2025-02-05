'use client';

import { VectorMap } from '@south-paw/react-vector-maps';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// Mapa do Brasil em formato SVG com estados
const brasilMap = {
	viewBox: '0 0 800 800',
	locations: [
		{ id: 'SP', title: 'São Paulo', value: 45 },
		{ id: 'RJ', title: 'Rio de Janeiro', value: 32 },
		{ id: 'MG', title: 'Minas Gerais', value: 28 },
		{ id: 'PR', title: 'Paraná', value: 22 },
		{ id: 'RS', title: 'Rio Grande do Sul', value: 12 },
		{ id: 'SC', title: 'Santa Catarina', value: 9 },
		{ id: 'BA', title: 'Bahia', value: 8 },
		{ id: 'ES', title: 'Espírito Santo', value: 7 },
		{ id: 'PE', title: 'Pernambuco', value: 6 },
		{ id: 'CE', title: 'Ceará', value: 5 },
	],
};

const AssociadosMap = () => {
	// Top 5 estados com mais associados
	const topEstados = [
		{ nome: 'São Paulo', valor: 45, percent: '+15%' },
		{ nome: 'Rio de Janeiro', valor: 32, percent: '+8%' },
		{ nome: 'Minas Gerais', valor: 28, percent: '+12%' },
		{ nome: 'Paraná', valor: 22, percent: '+5%' },
		{ nome: 'Rio Grande do Sul', valor: 12, percent: '+3%' },
	];

	return (
		<div className='grid grid-cols-12 sm:gap-6 gap-4'>
			{/* Mapa do Brasil */}
			<div className='col-span-12 md:col-span-8'>
				<div className='w-full h-[329px]'>
					<VectorMap
						{...brasilMap}
						className='h-full w-full object-fill RPGestor-codeVmapWhite'
						checkedLayers={['BR-SP', 'BR-RJ', 'BR-MG', 'BR-PR', 'BR-RS']}
						layerProps={{
							onClick: (event) => console.log('clicked: ', event),
							onMouseEnter: (event) => console.log('mouseenter: ', event),
							onMouseLeave: (event) => console.log('mouseleave: ', event),
							className: cn(
								'transition-colors duration-300',
								'fill-primary/20 hover:fill-primary/40 cursor-pointer'
							),
						}}
					/>
				</div>
			</div>

			{/* Lista de estados */}
			<div className='col-span-12 md:col-span-4 mt-9 md:mt-0'>
				<div className='flex justify-between items-center border-b pb-2'>
					<div className='text-base font-semibold text-default-900'>
						Principais Estados
					</div>
					<Link
						href='/associados'
						className='text-xs font-medium text-primary hover:underline'
					>
						Ver Todos
					</Link>
				</div>
				<div className='py-5'>
					{topEstados.map((estado, i) => (
						<div
							key={i}
							className='flex justify-between items-center flex-wrap pb-3.5'
						>
							<div className='flex items-center gap-3'>
								<div className='rounded-full overflow-hidden w-9 h-9 inline-block bg-primary/10 flex items-center justify-center'>
									<span className='text-xs font-medium text-primary'>
										{estado.nome.substring(0, 2)}
									</span>
								</div>
								<span className='inline-block text-default-600 text-sm font-medium'>
									{estado.nome}
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<span className='text-sm text-default-600 bg-default-100 dark:bg-default-50 py-1.5 px-1.5 rounded'>
									{estado.valor}
								</span>
								<span className='text-xs text-success'>{estado.percent}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AssociadosMap;

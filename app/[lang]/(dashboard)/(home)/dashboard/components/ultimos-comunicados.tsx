'use client';

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Mail, CheckCircle, XCircle } from 'lucide-react';

const comunicados = [
	{
		id: '01',
		assunto: 'Convocação Assembleia Geral',
		data: '26/12/2024',
		status: 'enviado',
		destinatarios: '148',
		link: '/',
	},
	{
		id: '02',
		assunto: 'Inscrições Curso Neurociência',
		data: '20/12/2024',
		status: 'enviado',
		destinatarios: '125',
		link: '/',
	},
	{
		id: '03',
		assunto: 'Resultado Prêmio Embalagem',
		data: '15/12/2024',
		status: 'falhou',
		destinatarios: '12',
		link: '/',
	},
	{
		id: '04',
		assunto: 'Newsletter Mensal',
		data: '01/12/2024',
		status: 'enviado',
		destinatarios: '148',
		link: '/',
	},
];

const UltimosComunicados = () => {
	return (
		<>
			<div className='overflow-x-auto'>
				<Table>
					<TableHeader className='bg-default-300'>
						<TableRow>
							<TableHead className='text-sm font-semibold text-default-600 bg-default-200 h-12'>
								Assunto
							</TableHead>
							<TableHead className='text-sm font-semibold text-default-600 bg-default-200 h-12'>
								Data
							</TableHead>
							<TableHead className='text-sm font-semibold text-default-600 bg-default-200 h-12'>
								Status
							</TableHead>
							<TableHead className='text-sm font-semibold text-default-600 bg-default-200 h-12'>
								Destinatários
							</TableHead>
							<TableHead className='text-sm font-semibold text-default-600 bg-default-200 h-12 text-end pr-7'>
								Ação
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody className='[&_tr:last-child]:border-1'>
						{comunicados.map((item, index) => (
							<TableRow
								key={`comunicado-${index}`}
								className='hover:bg-default-50'
							>
								<TableCell className='text-sm text-default-700 border-b border-default-100 dark:border-default-200'>
									<div className='flex gap-4 items-center'>
										<Mail className='h-4 w-4 text-primary' />
										<span>{item.assunto}</span>
									</div>
								</TableCell>
								<TableCell className='text-sm text-default-700 border-b border-default-100 dark:border-default-200'>
									{item.data}
								</TableCell>
								<TableCell className='text-sm text-default-700 border-b border-default-100 dark:border-default-200'>
									<div className='flex items-center gap-1'>
										{item.status === 'enviado' ? (
											<>
												<CheckCircle className='h-4 w-4 text-success' />
												<span className='text-success'>Enviado</span>
											</>
										) : (
											<>
												<XCircle className='h-4 w-4 text-destructive' />
												<span className='text-destructive'>Falhou</span>
											</>
										)}
									</div>
								</TableCell>
								<TableCell className='text-sm text-default-700 border-b border-default-100 dark:border-default-200'>
									{item.destinatarios}
								</TableCell>
								<TableCell className='text-sm text-default-700 border-b border-default-100 dark:border-default-200 text-end pr-6'>
									<Link
										href={item.link}
										className='text-primary hover:underline'
									>
										Detalhes
									</Link>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>

			<div className='flex flex-wrap gap-2 justify-center mt-4'>
				<Button
					size='icon'
					className='h-7 w-7 bg-default-100 text-default-600 hover:text-primary-foreground'
					title='Anterior'
				>
					<Icon
						icon='heroicons:chevron-left'
						className='w-3.5 h-3.5 rtl:rotate-180'
					/>
				</Button>
				<ul className='flex space-x-3 rtl:space-x-reverse items-center'>
					{[1, 2, 3].map((page) => (
						<li key={page}>
							<Button
								className={cn(
									'h-7 w-7 bg-default-100 text-default-600 p-0 hover:bg-opacity-70 hover:text-primary-foreground',
									{
										'bg-primary text-primary-foreground': page === 1,
									}
								)}
							>
								{page}
							</Button>
						</li>
					))}
				</ul>
				<Button
					size='icon'
					className='h-7 w-7 bg-default-100 text-default-600 hover:text-primary-foreground'
					title='Próximo'
				>
					<Icon
						icon='heroicons:chevron-right'
						className='w-3.5 h-3.5 rtl:rotate-180'
					/>
				</Button>
			</div>
		</>
	);
};

export default UltimosComunicados;

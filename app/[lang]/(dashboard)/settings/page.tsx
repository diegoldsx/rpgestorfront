'use client';

import { Fragment } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { HeadingPages } from '@/components/common/heading/heading-pages';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const settingsOptions = [
	{
		icon: 'heroicons:cog-6-tooth',
		title: 'Campos Dinâmicos',
		description:
			'Gerencie campos personalizados para diferentes configurações.',
		href: '/settings/dynamic-fields',
	},
	{
		icon: 'heroicons:adjustments-horizontal',
		title: 'Campos Fixos',
		description: 'Configure campos fixos que serão usados em toda a aplicação.',
		href: '/settings/fixed-fields',
	},
	{
		icon: 'heroicons:currency-dollar',
		title: 'Grupo Pagamento',
		description: 'Defina grupos e métodos de pagamento disponíveis.',
		href: '/settings/payment-group',
	},
	{
		icon: 'heroicons:bell',
		title: 'Notificações',
		description: 'Gerencie notificações e alertas para usuários.',
		href: '/settings/notifications',
	},
	{
		icon: 'heroicons:document-text',
		title: 'Relatórios',
		description: 'Acesse e configure relatórios detalhados do sistema.',
		href: '/settings/reports',
	},
];

const SettingsPage = () => {
	return (
		<Fragment>
			<HeadingPages
				title='Configurações'
				breadcrumbs={{ title: 'Configurações', href: '/settings' }}
			/>

			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6'>
				{settingsOptions.map((option, index) => (
					<Card key={index} className='hover:shadow-lg transition-shadow'>
						<CardContent className='p-6'>
							<div className='flex items-center gap-4'>
								<div className='p-3 rounded-md bg-primary-100 dark:bg-primary-900'>
									<Icon icon={option.icon} className='w-8 h-8 text-primary' />
								</div>
								<div className='flex-1'>
									<h3 className='text-lg font-semibold text-default-900 dark:text-default-100'>
										{option.title}
									</h3>
									<p className='text-sm text-default-600 dark:text-default-400'>
										{option.description}
									</p>
								</div>
							</div>
							<div className='mt-4 flex justify-end'>
								<Button variant={'outline'} asChild>
									<Link href={option.href}>Configurar</Link>
								</Button>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</Fragment>
	);
};

export default SettingsPage;

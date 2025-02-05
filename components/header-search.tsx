import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const HeaderSearch = ({ open, setOpen }: { open: boolean; setOpen: any }) => {
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent size='xl' className='p-0' hiddenCloseIcon>
				<Command>
					<div className='flex items-center border-b border-default-200'>
						<CommandInput
							placeholder='Buscar...'
							className='h-14'
							inputWrapper='px-5 flex-1 border-none'
						/>
						<div className='flex-none flex items-center justify-center gap-1 pr-4'>
							<span className='text-sm text-default-500 font-normal select-none'>
								[esc]
							</span>
							<Button
								variant='ghost'
								size='sm'
								className='hover:bg-transparent text-xs hover:text-default-800 px-1'
								onClick={() => setOpen(false)}
							>
								<X className='w-5 h-5 text-default-500' />
							</Button>
						</div>
					</div>
					<CommandList className='py-5 px-7 max-h-[500px]'>
						<CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
							<CommandGroup
								heading='Acesso Rápido'
								className='[&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:font-normal [&_[cmdk-group-heading]]:text-default-400 [&_[cmdk-group-heading]]:mb-2.5
                [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest'
							>
								<CommandItem className='aria-selected:bg-transparent p-0 mb-2.5'>
									<Link
										href='/dashboard'
										className='flex gap-1 items-center px-2 text-default-500 hover:text-primary'
									>
										<Icon icon='heroicons:presentation-chart-line' />
										<span>Dashboard</span>
									</Link>
								</CommandItem>
								<CommandItem className='aria-selected:bg-transparent p-0 mb-2.5'>
									<Link
										href='/associados'
										className='flex gap-1 items-center px-2 text-default-500 hover:text-primary'
									>
										<Icon icon='heroicons:users' />
										<span>Associados</span>
									</Link>
								</CommandItem>
								<CommandItem className='aria-selected:bg-transparent p-0 mb-2.5'>
									<Link
										href='/mensalidades'
										className='flex gap-1 items-center px-2 text-default-500 hover:text-primary'
									>
										<Icon icon='heroicons:banknotes' />
										<span>Mensalidades</span>
									</Link>
								</CommandItem>
								<CommandItem className='aria-selected:bg-transparent p-0'>
									<Link
										href='/eventos'
										className='flex gap-1 items-center px-2 text-default-500 hover:text-primary'
									>
										<Icon icon='heroicons:calendar' />
										<span>Eventos</span>
									</Link>
								</CommandItem>
							</CommandGroup>

							<CommandGroup
								heading='Gestão'
								className='[&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:font-normal [&_[cmdk-group-heading]]:text-default-400 [&_[cmdk-group-heading]]:mb-2.5
                [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest'
							>
								<CommandItem className='aria-selected:bg-transparent p-0 mb-2.5'>
									<Link
										href='/cursos'
										className='flex gap-1 items-center px-2 text-default-500 hover:text-primary'
									>
										<Icon icon='heroicons:academic-cap' />
										<span>Cursos e Treinamentos</span>
									</Link>
								</CommandItem>
								<CommandItem className='aria-selected:bg-transparent p-0 mb-2.5'>
									<Link
										href='/comunicacoes'
										className='flex gap-1 items-center px-2 text-default-500 hover:text-primary'
									>
										<Icon icon='heroicons:envelope' />
										<span>Comunicações</span>
									</Link>
								</CommandItem>
								<CommandItem className='aria-selected:bg-transparent p-0 mb-2.5'>
									<Link
										href='/documentos'
										className='flex gap-1 items-center px-2 text-default-500 hover:text-primary'
									>
										<Icon icon='heroicons:document' />
										<span>Documentos</span>
									</Link>
								</CommandItem>
								<CommandItem className='aria-selected:bg-transparent p-0'>
									<Link
										href='/certificados'
										className='flex gap-1 items-center px-2 text-default-500 hover:text-primary'
									>
										<Icon icon='heroicons:document-check' />
										<span>Certificados</span>
									</Link>
								</CommandItem>
							</CommandGroup>

							<CommandGroup
								heading='Financeiro'
								className='[&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:font-normal [&_[cmdk-group-heading]]:text-default-400 [&_[cmdk-group-heading]]:mb-2.5
                [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest'
							>
								<CommandItem className='aria-selected:bg-transparent p-0 mb-2.5'>
									<Link
										href='/financeiro/receitas'
										className='flex gap-1 items-center px-2 text-default-500 hover:text-primary'
									>
										<Icon icon='heroicons:arrow-trending-up' />
										<span>Receitas</span>
									</Link>
								</CommandItem>
								<CommandItem className='aria-selected:bg-transparent p-0 mb-2.5'>
									<Link
										href='/financeiro/despesas'
										className='flex gap-1 items-center px-2 text-default-500 hover:text-primary'
									>
										<Icon icon='heroicons:arrow-trending-down' />
										<span>Despesas</span>
									</Link>
								</CommandItem>
								<CommandItem className='aria-selected:bg-transparent p-0 mb-2.5'>
									<Link
										href='/financeiro/relatorios'
										className='flex gap-1 items-center px-2 text-default-500 hover:text-primary'
									>
										<Icon icon='heroicons:chart-bar' />
										<span>Relatórios Financeiros</span>
									</Link>
								</CommandItem>
							</CommandGroup>

							<CommandGroup
								heading='Sistema'
								className='[&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:font-normal [&_[cmdk-group-heading]]:text-default-400 [&_[cmdk-group-heading]]:mb-2.5
                [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest'
							>
								<CommandItem className='aria-selected:bg-transparent p-0 mb-2.5'>
									<Link
										href='/configuracoes'
										className='flex gap-1 items-center px-2 text-default-500 hover:text-primary'
									>
										<Icon icon='heroicons:cog-6-tooth' />
										<span>Configurações</span>
									</Link>
								</CommandItem>
								<CommandItem className='aria-selected:bg-transparent p-0 mb-2.5'>
									<Link
										href='/usuarios'
										className='flex gap-1 items-center px-2 text-default-500 hover:text-primary'
									>
										<Icon icon='heroicons:users' />
										<span>Usuários</span>
									</Link>
								</CommandItem>
								<CommandItem className='aria-selected:bg-transparent p-0 mb-2.5'>
									<Link
										href='/logs'
										className='flex gap-1 items-center px-2 text-default-500 hover:text-primary'
									>
										<Icon icon='heroicons:clipboard-document-list' />
										<span>Logs do Sistema</span>
									</Link>
								</CommandItem>
							</CommandGroup>
						</div>
					</CommandList>
				</Command>
			</DialogContent>
		</Dialog>
	);
};

export default HeaderSearch;

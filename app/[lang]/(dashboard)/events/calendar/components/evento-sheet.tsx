// app/dashboard/agenda/components/evento-sheet.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon, Loader2 } from 'lucide-react';
import { formatDate, cn } from '@/lib/utils';
import { CalendarEvent, CalendarCategory } from '@/lib/types';
import {
	createEvent,
	updateEvent,
	deleteEvent,
} from '@/config/calendar.config';
import { toast } from 'sonner';

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet';

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

import { ScrollArea } from '@/components/ui/scroll-area';
import DeleteConfirmationDialog from '@/components/delete-confirmation-dialog';

// Schema de validação
const schema = z.object({
	title: z.string().min(3, { message: 'Título é obrigatório' }),
	description: z.string().optional(),
	category: z.string(),
	startDate: z.date(),
	endDate: z.date(),
	allDay: z.boolean().optional(),
});

interface EventoSheetProps {
	open: boolean;
	onClose: () => void;
	categories: CalendarCategory[];
	event?: CalendarEvent | null;
	selectedDate?: Date | null;
}

const EventoSheet = ({
	open,
	onClose,
	categories,
	event,
	selectedDate,
}: EventoSheetProps) => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

	const {
		register,
		control,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
		defaultValues: {
			title: '',
			description: '',
			category: categories[0]?.value,
			startDate: new Date(),
			endDate: new Date(),
			allDay: false,
		},
	});

	// Atualiza o formulário quando o evento muda
	useEffect(() => {
		if (event) {
			reset({
				title: event.title,
				description: event.description || '',
				category: event.extendedProps.calendar,
				startDate: new Date(event.start),
				endDate: new Date(event.end || event.start),
				allDay: event.allDay,
			});
		} else if (selectedDate) {
			reset({
				startDate: selectedDate,
				endDate: selectedDate,
			});
		}
	}, [event, selectedDate, reset]);

	// Manipuladores de eventos
	const onSubmit = async (data: any) => {
		try {
			setIsSubmitting(true);

			const eventData = {
				...data,
				start: data.startDate,
				end: data.endDate,
				extendedProps: {
					calendar: data.category,
				},
			};

			if (event) {
				await updateEvent(event.id, eventData);
				toast.success('Evento atualizado com sucesso');
			} else {
				await createEvent(eventData);
				toast.success('Evento criado com sucesso');
			}

			onClose();
			reset();
		} catch (error) {
			toast.error('Erro ao salvar evento');
			console.error(error);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleDelete = async () => {
		try {
			if (!event?.id) return;

			await deleteEvent(event.id);
			toast.success('Evento excluído com sucesso');
			onClose();
			reset();
		} catch (error) {
			toast.error('Erro ao excluir evento');
			console.error(error);
		}
	};

	return (
		<>
			<DeleteConfirmationDialog
				open={deleteDialogOpen}
				onClose={() => setDeleteDialogOpen(false)}
				onConfirm={handleDelete}
				title='Excluir Evento'
				description='Tem certeza que deseja excluir este evento? Esta ação não pode ser desfeita.'
			/>

			<Sheet open={open}>
				<SheetContent className='sm:max-w-[500px] p-0'>
					<SheetHeader className='px-6 py-4 border-b'>
						<SheetTitle>{event ? 'Editar Evento' : 'Novo Evento'}</SheetTitle>
					</SheetHeader>

					<form onSubmit={handleSubmit(onSubmit)}>
						<ScrollArea className='h-[calc(100vh-180px)] px-6 py-4'>
							<div className='space-y-4'>
								{/* Título */}
								<div className='space-y-2'>
									<Label htmlFor='title'>Título</Label>
									<Input
										id='title'
										placeholder='Digite o título do evento'
										{...register('title')}
									/>
									{errors.title?.message && (
										<p className='text-sm text-destructive'>
											{errors.title.message as string}
										</p>
									)}
								</div>

								{/* Descrição */}
								<div className='space-y-2'>
									<Label htmlFor='description'>Descrição</Label>
									<Input
										id='description'
										placeholder='Digite uma descrição'
										{...register('description')}
									/>
								</div>

								{/* Data Início */}
								<div className='space-y-2'>
									<Label>Data Início</Label>
									<Controller
										name='startDate'
										control={control}
										render={({ field }) => (
											<Popover>
												<PopoverTrigger asChild>
													<Button
														variant='outline'
														className={cn(
															'w-full justify-start text-left font-normal',
															!field.value && 'text-muted-foreground'
														)}
													>
														<CalendarIcon className='mr-2 h-4 w-4' />
														{field.value ? (
															formatDate(field.value)
														) : (
															<span>Selecione uma data</span>
														)}
													</Button>
												</PopoverTrigger>
												<PopoverContent className='w-auto p-0'>
													<Calendar
														mode='single'
														selected={field.value}
														onSelect={field.onChange}
														initialFocus
													/>
												</PopoverContent>
											</Popover>
										)}
									/>
								</div>

								{/* Data Fim */}
								<div className='space-y-2'>
									<Label>Data Fim</Label>
									<Controller
										name='endDate'
										control={control}
										render={({ field }) => (
											<Popover>
												<PopoverTrigger asChild>
													<Button
														variant='outline'
														className={cn(
															'w-full justify-start text-left font-normal',
															!field.value && 'text-muted-foreground'
														)}
													>
														<CalendarIcon className='mr-2 h-4 w-4' />
														{field.value ? (
															formatDate(field.value)
														) : (
															<span>Selecione uma data</span>
														)}
													</Button>
												</PopoverTrigger>
												<PopoverContent className='w-auto p-0'>
													<Calendar
														mode='single'
														selected={field.value}
														onSelect={field.onChange}
														initialFocus
													/>
												</PopoverContent>
											</Popover>
										)}
									/>
								</div>

								{/* Categoria */}
								<div className='space-y-2'>
									<Label>Categoria</Label>
									<Controller
										name='category'
										control={control}
										render={({ field }) => (
											<Select
												value={field.value}
												onValueChange={field.onChange}
											>
												<SelectTrigger>
													<SelectValue placeholder='Selecione uma categoria' />
												</SelectTrigger>
												<SelectContent>
													{categories.map((category) => (
														<SelectItem
															key={category.value}
															value={category.value}
															className={category.className}
														>
															{category.label}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
										)}
									/>
								</div>
							</div>
						</ScrollArea>

						{/* Ações */}
						<div className='flex gap-2 p-6 border-t'>
							<Button type='submit' disabled={isSubmitting} className='flex-1'>
								{isSubmitting ? (
									<>
										<Loader2 className='mr-2 h-4 w-4 animate-spin' />
										{event ? 'Salvando...' : 'Criando...'}
									</>
								) : event ? (
									'Salvar'
								) : (
									'Criar'
								)}
							</Button>

							{event && (
								<Button
									type='button'
									variant='destructive'
									onClick={() => setDeleteDialogOpen(true)}
									className='flex-1'
								>
									Excluir
								</Button>
							)}
						</div>
					</form>
				</SheetContent>
			</Sheet>
		</>
	);
};

export default EventoSheet;

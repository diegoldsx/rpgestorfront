// app/dashboard/agenda/components/calendar-view.tsx
'use client';

import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

import ptBrLocale from '@fullcalendar/core/locales/pt-br';

import listPlugin from '@fullcalendar/list';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { CalendarCategory, CalendarEvent } from '@/lib/interface';
import EventoSheet from './evento-sheet';
import DraggableEvento from './draggable-evento';

interface CalendarViewProps {
	events: CalendarEvent[];
	categories: CalendarCategory[];
}

const CalendarView = ({ events, categories }: CalendarViewProps) => {
	const [selectedCategory, setSelectedCategory] = useState<string[] | null>(
		null
	);
	const [selectedEventDate, setSelectedEventDate] = useState<Date | null>(null);
	const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
		null
	);
	const [sheetOpen, setSheetOpen] = useState<boolean>(false);
	const [date, setDate] = React.useState<Date>(new Date());

	const [draggableInitialized, setDraggableInitialized] =
		useState<boolean>(false);

	// Eventos arrastáveis pré-definidos
	const [dragEvents] = useState([
		{ title: 'Nova Reunião', id: '101', tag: 'reuniao' },
		{ title: 'Novo Evento', id: '102', tag: 'evento' },
		{ title: 'Nova Atividade', id: '103', tag: 'atividade' },
		{ title: 'Novo Compromisso', id: '104', tag: 'compromisso' },
	]);

	// Implementação do drag and drop
	useEffect(() => {
		const draggableEl = document.getElementById('external-events');
		if (draggableEl && !draggableInitialized) {
			new Draggable(draggableEl, {
				itemSelector: '.fc-event',
				eventData: function (eventEl) {
					const title = eventEl.getAttribute('title');
					const id = eventEl.getAttribute('data');
					const event = dragEvents.find((e) => e.id === id);
					const tag = event ? event.tag : '';
					return {
						title,
						id,
						extendedProps: {
							calendar: tag,
						},
					};
				},
			});
			setDraggableInitialized(true);
		}
	}, [dragEvents]);

	// Manipuladores de eventos
	const handleEventClick = (info: any) => {
		setSelectedEventDate(null);
		setSheetOpen(true);
		setSelectedEvent(info);
	};

	const handleDateClick = (info: any) => {
		setSheetOpen(true);
		setSelectedEventDate(info);
		setSelectedEvent(null);
	};

	const handleCloseModal = () => {
		setSheetOpen(false);
		setSelectedEvent(null);
		setSelectedEventDate(null);
	};

	const handleCategorySelection = (category: string) => {
		setSelectedCategory((prev) => {
			if (prev?.includes(category)) {
				return prev.filter((c) => c !== category);
			}
			return [...(prev || []), category];
		});
	};

	// Filtragem de eventos por categoria
	const filteredEvents = events?.filter((event) =>
		selectedCategory?.includes(event.extendedProps.calendar)
	);

	return (
		<div className='grid grid-cols-12 gap-6 divide-x divide-border'>
			{/* Barra lateral */}
			<Card className='col-span-12 lg:col-span-4 2xl:col-span-3 pb-5'>
				<CardContent className='p-0'>
					<CardHeader className='border-none mb-2 pt-5'>
						<Button onClick={() => handleDateClick(new Date())}>
							<Plus className='w-4 h-4 text-primary-foreground ltr:mr-1 rtl:ml-1' />
							Adicionar Evento
						</Button>
					</CardHeader>

					<div className='px-3'>
						<Calendar
							mode='single'
							selected={date}
							onSelect={setDate}
							className='rounded-md border w-full p-0 border-none'
						/>
					</div>

					{/* Eventos arrastáveis */}
					<div id='external-events' className='space-y-1.5 mt-6 px-4'>
						<p className='text-sm font-medium text-default-700 pb-2'>
							Arraste e solte seus eventos ou clique no calendário
						</p>
						{dragEvents.map((event) => (
							<DraggableEvento key={event.id} event={event} />
						))}
					</div>

					{/* Filtros */}
					<div className='py-4 text-default-800 font-semibold text-xs uppercase mt-4 px-4'>
						FILTROS
					</div>
					<ul className='space-y-2 px-4'>
						<li className='flex gap-3'>
							<Checkbox
								checked={selectedCategory?.length === categories?.length}
								onCheckedChange={() => {
									if (selectedCategory?.length === categories?.length) {
										setSelectedCategory([]);
									} else {
										setSelectedCategory(categories.map((c) => c.value));
									}
								}}
							/>
							<Label>Todos</Label>
						</li>
						{categories?.map((category) => (
							<li key={category.value} className='flex gap-3'>
								<Checkbox
									className={category.className}
									checked={selectedCategory?.includes(category.value)}
									onCheckedChange={() =>
										handleCategorySelection(category.value)
									}
								/>
								<Label>{category.label}</Label>
							</li>
						))}
					</ul>
				</CardContent>
			</Card>

			{/* Calendário */}
			<Card className='col-span-12 lg:col-span-8 2xl:col-span-9 pt-5'>
				<CardContent className='app-calendar'>
					<FullCalendar
						plugins={[
							dayGridPlugin,
							timeGridPlugin,
							interactionPlugin,
							listPlugin,
						]}
						headerToolbar={{
							left: 'prev,next today',
							center: 'title',
							right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
						}}
						locale={ptBrLocale}
						events={filteredEvents}
						editable={true}
						droppable={true}
						selectable={true}
						selectMirror={true}
						dayMaxEvents={2}
						weekends={true}
						eventClick={handleEventClick}
						dateClick={handleDateClick}
						initialView='dayGridMonth'
					/>
				</CardContent>
			</Card>

			{/* Modal de Evento */}
			<EventoSheet
				open={sheetOpen}
				onClose={handleCloseModal}
				categories={categories}
				event={selectedEvent}
				selectedDate={selectedEventDate}
			/>
		</div>
	);
};

export default CalendarView;

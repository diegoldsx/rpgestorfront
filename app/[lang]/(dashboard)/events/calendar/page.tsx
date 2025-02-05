// app/dashboard/agenda/page.tsx

import { getCategories, getEvents } from '@/config/calendar.config';
import CalendarView from './components/calendar-view';
import { HeadingPages } from '@/components/common/heading/heading-pages';

const CalendarPage = async () => {
	const events = await getEvents();
	const categories = await getCategories();
	return (
		<div>
			<HeadingPages
				title='Calendário de Eventos'
				breadcrumbs={{
					title: 'Calendário de Eventos',
					href: '/events/calendar',
				}}
				actions={{
					secondary: { text: 'Criar evento', href: '#' },
				}}
			/>
			<CalendarView events={events?.data} categories={categories?.data} />
		</div>
	);
};

export default CalendarPage;

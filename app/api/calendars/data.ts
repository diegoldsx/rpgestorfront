import { faker } from '@faker-js/faker';

const date = new Date();
const prevDay = new Date().getDate() - 1;
const nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

// prettier-ignore
const nextMonth = date.getMonth() === 11 ? new Date(date.getFullYear() + 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() + 1, 1)
// prettier-ignore
const prevMonth = date.getMonth() === 11 ? new Date(date.getFullYear() - 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() - 1, 1)
export const calendarEvents = [
	{
		id: faker.string.uuid(),
		title: 'Evento de Dia Inteiro',
		start: date,
		end: nextDay,
		allDay: false,
		//className: "warning",
		extendedProps: {
			calendar: 'negocios',
		},
	},
	{
		id: faker.string.uuid(),
		title: 'Reunião com Cliente',
		start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
		end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
		allDay: true,
		//className: "success",
		extendedProps: {
			calendar: 'pessoal',
		},
	},
	{
		id: faker.string.uuid(),
		title: 'Almoço',
		allDay: true,
		start: new Date(date.getFullYear(), date.getMonth() + 1, -9),
		end: new Date(date.getFullYear(), date.getMonth() + 1, -7),
		// className: "info",
		extendedProps: {
			calendar: 'familia',
		},
	},
	{
		id: faker.string.uuid(),
		title: 'Festa de Aniversário',
		start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
		end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
		allDay: true,
		//className: "primary",
		extendedProps: {
			calendar: 'reuniao',
		},
	},
	{
		id: faker.string.uuid(),
		title: 'Feriado',
		start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
		end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
		allDay: true,
		// className: "danger",
		extendedProps: {
			calendar: 'feriado',
		},
	},
	{
		id: faker.string.uuid(),
		title: 'Reunião Mensal',
		start: nextMonth,
		end: nextMonth,
		allDay: true,
		//className: "primary",
		extendedProps: {
			calendar: 'negocios',
		},
	},
];

export const calendarCategories = [
	{
		label: 'Negócios',
		value: 'negocios',
		activeClass: 'ring-primary-500 bg-primary-500',
		className: ' group-hover:border-blue-500',
	},
	{
		label: 'Pessoal',
		value: 'pessoal',

		activeClass: 'ring-success-500 bg-success-500',
		className: ' group-hover:border-green-500',
	},
	{
		label: 'Feriado',
		value: 'feriado',
		activeClass: 'ring-danger-500 bg-danger-500',
		className: ' group-hover:border-red-500',
	},
	{
		label: 'Família',
		value: 'familia',
		activeClass: 'ring-info-500 bg-info-500',
		className: ' group-hover:border-cyan-500',
	},
	{
		label: 'Reunião',
		value: 'reuniao',
		activeClass: 'ring-warning-500 bg-warning-500',
		className: ' group-hover:border-yellow-500',
	},
	{
		label: 'Outros',
		value: 'etc',
		activeClass: 'ring-info-500 bg-info-500',
		className: ' group-hover:border-cyan-500',
	},
];

export const categories = [
	{
		label: 'Negócios',
		value: 'negocios',
		className: 'data-[state=checked]:bg-primary border-primary',
	},
	{
		label: 'Pessoal',
		value: 'pessoal',

		className: 'data-[state=checked]:bg-success border-success',
	},
	{
		label: 'Feriado',
		value: 'feriado',
		className: 'data-[state=checked]:bg-destructive  border-destructive',
	},
	{
		label: 'Família',
		value: 'familia',
		className: 'data-[state=checked]:bg-info border-info',
	},
	{
		label: 'Reunião',
		value: 'reuniao',
		className: 'data-[state=checked]:bg-warning border-warning',
	},
	{
		label: 'Outros',
		value: 'etc',
		className: 'data-[state=checked]:bg-info border-info',
	},
];

export type CalendarEvent = (typeof calendarEvents)[number];
export type CalendarCategory = (typeof calendarCategories)[number];
export type Category = (typeof categories)[number];

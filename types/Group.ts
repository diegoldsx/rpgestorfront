import { z } from 'zod';

export const GroupSchema = z.object({
	id: z.string(),
	name: z.string(),
	total: z.number(),
});

export type GroupType = z.infer<typeof GroupSchema>;

export const fakeGroups: GroupType[] = [
	{
		id: '1',
		name: 'Grupo 1',
		total: 1,
	},

	{
		id: '2',
		name: 'Grupo 2',
		total: 2,
	},

	{
		id: '3',
		name: 'Grupo 3',
		total: 3,
	},
]


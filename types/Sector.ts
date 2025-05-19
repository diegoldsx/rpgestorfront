import { z } from 'zod';

export const SectorSchema = z.object({
	id: z.string().optional(),
	name: z.string(),
});

export type SectorType = z.infer<typeof SectorSchema>;

export const fakeSectors: SectorType[] = [
	{
		id: '1',
		name: 'name1',
	},
	{
		id: '2',
		name: 'name2',
	},
	{
		id: '3',
		name: 'name3',
	},
]

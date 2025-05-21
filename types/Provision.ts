

import { z } from "zod";

export const ProvisionSchema = z.object({
	id: z.string(),
	ammount: z.string().min(1, "O valor é obrigatório."),
	documentDate: z.string().optional(),
	description: z.string().min(1, "A descrição é obrigatória."),
	observations: z.string().optional(),
});

export type ProvisionType = z.infer<typeof ProvisionSchema>;


export const fakeProvisions: ProvisionType[] = [
	{
		id: '1',
		ammount: '100',
		documentDate: '2022-01-01',
		description: 'Description 1',
		observations: 'Observations 1',
	},
	{
		id: '2',
		ammount: '200',
		documentDate: '2022-02-01',
		description: 'Description 2',
		observations: 'Observations 2',
	},
	{
		id: '3',
		ammount: '300',
		documentDate: '2022-03-01',
		description: 'Description 3',
		observations: 'Observations 3',
	},
];

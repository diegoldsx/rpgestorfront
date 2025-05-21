
import { z } from "zod";

export const TransferSchema = z.object({
	id: z.string(),
	origin: z.string().min(1, "A conta de origem é obrigatória."),
	destination: z.string().min(1, "A conta de destino é obrigatória."),
	date: z.string().min(1, "A data é obrigatória."),
	amount: z.string().min(1, "O valor é obrigatório."),
});

export type TransferType = z.infer<typeof TransferSchema>;

export const fakeTransfers: TransferType[] = [
	{
		id: '1',
		origin: 'origin 1',
		destination: 'destination 1',
		date: 'date 1',
		amount: 'amount 1',
	},
	{
		id: '2',
		origin: 'origin 2',
		destination: 'destination 2',
		date: 'date 2',
		amount: 'amount 2',
	}
]


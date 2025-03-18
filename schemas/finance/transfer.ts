import { z } from "zod";

export const TransferSchema = z.object({
	id: z.number(),
	origin: z.string(),
	destination: z.string(),
	date: z.string(),
	amount: z.number(),
});

export type Transfer = z.infer<typeof TransferSchema>;

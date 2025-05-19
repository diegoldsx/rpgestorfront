
import { z } from "zod";

export const TransferSchema = z.object({
	id: z.string(),
	origin: z.string().min(1, "A conta de origem é obrigatória."),
	destination: z.string().min(1, "A conta de destino é obrigatória."),
	date: z.string().min(1, "A data é obrigatória."),
	amount: z.string().min(1, "O valor é obrigatório."),
});

export type TransferType = z.infer<typeof TransferSchema>;

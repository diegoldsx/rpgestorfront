import { z } from "zod";

export const TransferSchema = z.object({
	id: z.string().optional(),
	origin: z.string().min(1, "A origem é obrigatória."),
	destination: z.string().min(1, "O destino é obrigatório."),
	date: z.string().min(1, "A data é obrigatória."),
	amount: z.string().min(1, "O valor é obrigatório."),
});

export type TransferSchemaType = z.infer<typeof TransferSchema>;

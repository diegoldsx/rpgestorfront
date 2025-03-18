import { z } from "zod";

export const RemittanceSchema = z.object({
	id: z.number(),
	bank: z.string(),
	search: z.string(),
	searchFor: z.string(),
	amount: z.number(),
	startDate: z.string(),
	finalDate: z.string(),
	dateCategory: z.string(),
	limit: z.string(),
	type: z.string(),
});

export type Remittance = z.infer<typeof RemittanceSchema>;

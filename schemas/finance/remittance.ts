import { z } from "zod";

export const RemittanceSchema = z.object({
	id: z.string().optional(),
	bank: z.string(),
	search: z.string(),
	searchFor: z.string(),
	amount: z.string(),
	startDate: z.string(),
	finalDate: z.string(),
	dateCategory: z.string(),
	limit: z.string(),
	type: z.string(),
});

export type RemittanceSchemaType = z.infer<typeof RemittanceSchema>;

import { z } from "zod";

export const ProvisionSchema = z.object({
	id: z.number(),
	ammount: z.number(),
	description: z.string(),
	documentDate: z.string().optional(),
	dueDate: z.string(),
	observations: z.string().optional(),
	type: z.string().optional(),
	registeredBy: z.string(),
	status: z.string(),
});

export type Provision = z.infer<typeof ProvisionSchema>;

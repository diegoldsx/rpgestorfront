export type Provision = {
	id: string;
	ammount: string;
	documentDate?: string;
	description: string;
	observations?: string;
};

import { z } from "zod";

export const ProvisionSchema = z.object({
	id: z.string(),
	ammount: z.string().min(1, "O valor é obrigatório."),
	documentDate: z.string().optional(),
	description: z.string().min(1, "A descrição é obrigatória."),
	observations: z.string().optional(),
});

export type ProvisionSchemaType = z.infer<typeof ProvisionSchema>;

import { z } from "zod";

export const ProvisionSchema = z.object({
	id: z.string().optional(),
	ammount: z.string().min(1, "O valor é obrigatório."),
	description: z.string().min(1, "A descrição é obrigatória."),
	documentDate: z.string().optional(),
	dueDate: z.string().min(1, "A data de vencimento é obrigatória."),
	observations: z.string().optional(),
	type: z.string().optional(),
	registeredBy: z.string().min(1, "O campo 'Registrado por' é obrigatório."),
	status: z.string().min(1, "O status é obrigatório."),
});

export type ProvisionSchemaType = z.infer<typeof ProvisionSchema>;

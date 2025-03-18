import { z } from "zod";

export const groupSchema = z
	.object({
		id: z.string().optional(),
		name: z.string().min(3, "O nome do grupo é obrigatório"),
		total: z.string().email("3"),
	})
	.partial();

export type GroupSchemaType = z.infer<typeof groupSchema>;

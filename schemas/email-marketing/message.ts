import { z } from "zod";

export const messageSchema = z
	.object({
		id: z.string().optional(),
		name: z.string().min(3, "O nome do  é obrigatório"),
	})
	.partial();

export type MessageSchemaType = z.infer<typeof messageSchema>;

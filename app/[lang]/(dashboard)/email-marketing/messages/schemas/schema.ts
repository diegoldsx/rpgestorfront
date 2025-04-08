import { z } from "zod";

export const MessageSchema = z
	.object({
		id: z.string().optional(),
		subject: z.string().min(3, "Assunto obrigatório"),
		message: z.string().min(3, "Mensagem obrigatória"),
	})
	.partial();

export type MessageSchemaType = z.infer<typeof MessageSchema>;

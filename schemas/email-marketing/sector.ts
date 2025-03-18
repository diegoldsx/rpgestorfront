import { z } from "zod";

export const noticeSchema = z
	.object({
		id: z.string().optional(),
		subject: z.string().min(3, "O nome do assunto é obrigatório"),
		message: z.string().email("A mensagem é obrigatória"),
	})
	.partial();

export type NoticeSchemaType = z.infer<typeof noticeSchema>;

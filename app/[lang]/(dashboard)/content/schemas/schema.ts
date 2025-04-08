import * as z from "zod";

export const ContentSchema = z.object({
	id: z.string().optional(),
	contentType: z.enum(["content1", "content2"]),
	status: z.enum(["active", "inactive"]),
	expirationDate: z.string().optional().refine(value => {
		if (!value) return true; // Permite valores opcionais
		return /^\d{4}-\d{2}-\d{2}$/.test(value); // Valida o formato YYYY-MM-DD
	}, {
		message: "Formato de data inválido (YYYY-MM-DD)",
	}),
	title: z.string().max(100).optional(),
	description: z.string().min(1, { message: "A descrição não pode estar vazia" }),
	responsible: z.enum(["user1", "user2"]),
	videoConference: z.boolean(),
	customHtml: z.string().min(1, { message: "O HTML não pode estar vazio" }),
	access: z.enum(["public", "private"]),
});

export type ContentSchemaType = z.infer<typeof ContentSchema>;

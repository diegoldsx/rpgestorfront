import { z } from "zod";

export const EmailSchema = z
	.object({
		id: z.string().optional(),
		email: z.string().email("O email é obrigatório"),
		status: z.enum(["active", "inactive"]),
		group: z.string().min(3, "O grupo é obrigatório"),
	})
	.partial();

export type EmailSchemaType = z.infer<typeof EmailSchema>;

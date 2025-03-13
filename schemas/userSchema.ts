import { z } from "zod";

export const userSchema = z
	.object({
		id: z.string().optional(),
		name: z.string().min(3, "O nome é obrigatório"),
		email: z.string().email("O email é obrigatório"),
		status: z.enum(["active", "inactive"], { required_error: "Selecione um status" }),
		redirectUrl: z.string().url("A URL fornecida é inválida").optional(),
		username: z
			.string()
			.min(6, "O nome de usuário deve ter pelo menos 6 caracteres")
			.regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, "O nome de usuário deve conter letras e números"),
	})
	.partial();

export type UserSchemaType = z.infer<typeof userSchema>;

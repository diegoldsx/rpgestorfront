import { z } from "zod";

export const UserSchema = z.object({
	id: z.string(),
	name: z.string().min(3, "O nome é obrigatório"),
	email: z.string().email("O email é obrigatório"),
	status: z.enum(["active", "inactive"], { required_error: "Selecione um status" }),
	redirectUrl: z
		.string()
		.url("A URL fornecida é inválida")
		.refine((url) => url.startsWith("https://"), {
			message: "A URL deve começar com 'https://'",
		}),
	username: z
		.string()
		.min(6, "O nome de usuário deve ter pelo menos 6 caracteres")
		.regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, "O nome de usuário deve conter letras e números"),
});

export type UserSchemaType = z.infer<typeof UserSchema>;

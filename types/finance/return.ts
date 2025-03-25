import { z } from "zod";

export type Return = {
	id: string;
	account: "caixa" | "bradesco";

	filePath: string;
};

export const ReturnSchema = z.object({
	id: z.string(),
	account: z.enum(["cx", "br"], {
		required_error: "A conta é obrigatória.",
	}),
	filePath: z.string().min(1, "Arquivo obrigatório."),
});

export type ReturnSchemaType = z.infer<typeof ReturnSchema>;

export const RETURNS_DATA = [
	{
		id: "1",
		account: "cx",
		filePath: "/uploads/returns/caixa_2024_12_01.txt",
	},
	{
		id: "2",
		account: "br",
		filePath: "/uploads/returns/bradesco_2024_12_02.txt",
	},
	{
		id: "3",
		account: "br",
		filePath: "/uploads/returns/caixa_2025_01_10.txt",
	},
];

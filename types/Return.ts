import { z } from "zod";
import { BankEnum } from "./options";


export const ReturnSchema = z.object({
	id: z.string(),
	account: BankEnum,
	filePath: z.string().min(1, "Arquivo obrigatório."),
});

export type ReturnType = z.infer<typeof ReturnSchema>;

export const fakeReturns = [
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

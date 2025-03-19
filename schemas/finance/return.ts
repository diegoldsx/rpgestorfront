import { z } from "zod";

export const ReturnSchema = z.object({
	id: z.string().optional(),
	account: z.string(),
	file: z.string(),
});

export type ReturnSchemaType = z.infer<typeof ReturnSchema>;

import { z } from "zod";

export const ReturnSchema = z.object({
	id: z.number(),
	account: z.string(),
	file: z.instanceof(File),
});

export type Return = z.infer<typeof ReturnSchema>;

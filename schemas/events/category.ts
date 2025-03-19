import { z } from "zod";

export const CategorySchema = z.object({
	id: z.number(),
	name: z.string(),
	status: z.string(),
});

export type CategorySchemaType = z.infer<typeof CategorySchema>;

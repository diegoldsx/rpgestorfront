
import * as z from "zod";

export const ContentTypeSchema = z.object({
	id: z.string().optional(),
	name: z.string().max(100).optional(),

});

export type ContentTypeType = z.infer<typeof ContentTypeSchema>;

import * as z from "zod";

export const ContentTypeSchema = z.object({
	id: z.string(),
	name: z.string().max(100).optional(),

});

export type ContentTypeSchemaType = z.infer<typeof ContentTypeSchema>;

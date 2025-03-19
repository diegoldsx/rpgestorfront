import { z } from "zod";

export const EventSchema = z.object({
	id: z.number(),
	name: z.string(),
	status: z.string(),
});

export type EventSchemaType = z.infer<typeof EventSchema>;

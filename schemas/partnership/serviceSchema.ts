import { z } from "zod";

export const ServiceSchema = z.object({
	id: z.number(),
	name: z.string(),
	status: z.enum(["active", "inactive"]),
});

export type ServiceSchemaType = z.infer<typeof ServiceSchema>;

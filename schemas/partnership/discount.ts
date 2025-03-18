import { z } from "zod";

export const DiscountSchema = z.object({
	id: z.number(),
	name: z.string(),
	status: z.enum(["active", "inactive"]),
});

export type DiscountSchemaType = z.infer<typeof DiscountSchema>;

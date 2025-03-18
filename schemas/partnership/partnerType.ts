import { z } from "zod";

export const PartnershipTypeSchema = z.object({
	id: z.number(),
	name: z.string(),
	status: z.enum(["active", "inactive"]),
});

export type PartnershipSchemaType = z.infer<typeof PartnershipTypeSchema>;

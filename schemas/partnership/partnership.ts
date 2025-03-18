import { z } from "zod";

export const PartnershipSchema = z.object({
	id: z.number(),
	name: z.string(),
	benefits: z.string(),
	contact: z.string(),
	email: z.string().email(),
	mobile: z.string(),
	type: z.enum(["user1", "user2"]),
	phone: z.string(),
	local: z.string(),
	status: z.enum(["active", "inactive"]),
});

export type Partnership = z.infer<typeof PartnershipSchema>;

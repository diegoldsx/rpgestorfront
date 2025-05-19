
import { z } from "zod";
import { StatusEnum } from "./options";
import { AffiliationTypeSchema } from "./AffiliationType";

export const AffiliationSchema = z.object({
	id: z.number(),
	name: z.string(),
	benefits: z.string(),
	contact: z.string(),
	email: z.string().email(),
	mobile: z.string(),
	type: AffiliationTypeSchema,
	phone: z.string(),
	local: z.string(),
	status: StatusEnum,
});

export type AffiliationType = z.infer<typeof AffiliationSchema>;

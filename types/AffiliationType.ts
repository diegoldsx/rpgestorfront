import { StatusEnum } from "./options";
import { z } from "zod";

export const AffiliationTypeSchema = z.object({
	id: z.string(),
	name: z.string(),
	status: StatusEnum,
});

export type AffiliationTypeType = z.infer<typeof AffiliationTypeSchema>;

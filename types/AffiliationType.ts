import { StatusEnum } from "./options";
import { z } from "zod";

export const AffiliationTypeSchema = z.object({
	id: z.string(),
	name: z.string(),
	status: StatusEnum,
});

export type AffiliationTypeType = z.infer<typeof AffiliationTypeSchema>;

export const fakeAffilitionTypes: AffiliationTypeType[] = [
	{ id: '1', name: "Affiliation 1", status: "active" },
	{ id: '2', name: "Affiliation 2", status: "active" },
	{ id: '3', name: "Affiliation 3", status: "inactive" },
]

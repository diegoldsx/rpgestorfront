import { StatusEnum } from "./options";
import { z } from "zod";

export const AffiliationServiceSchema = z.object({
	id: z.string(),
	name: z.string(),
	status: StatusEnum,
});

export type AffiliationServiceType = z.infer<typeof AffiliationServiceSchema>;


export const fakeAffilitionServices: AffiliationServiceType[] = [
	{ id: '1', name: "Affiliation Service 1", status: "active" },
	{ id: '2', name: "Affiliation Service 2", status: "active" },
	{ id: '3', name: "Affiliation Service 3", status: "inactive" },
]

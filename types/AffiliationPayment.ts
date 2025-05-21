import { StatusEnum } from "./options";
import { z } from "zod";

export const AffiliationPaymentSchema = z.object({
	id: z.string(),
	name: z.string(),
	status: StatusEnum,
});

export type AffiliationPaymentType = z.infer<typeof AffiliationPaymentSchema>;

export const fakeAffilitionPayments: AffiliationPaymentType[] = [
	{ id: '1', name: "Affiliation Payment 1", status: "active" },
	{ id: '2', name: "Affiliation Payment 2", status: "active" },
	{ id: '3', name: "Affiliation Payment 3", status: "inactive" },
]

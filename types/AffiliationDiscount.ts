import { StatusEnum } from "./options";
import { z } from "zod";

export const AffiliationDiscountSchema = z.object({
	id: z.string(),
	name: z.string(),
	status: StatusEnum,
});

export type AffiliationDiscountType = z.infer<typeof AffiliationDiscountSchema>;


export const fakeAffilitionDiscounts: AffiliationDiscountType[] = [
	{ id: '1', name: "Affiliation Discount 1", status: "active" },
	{ id: '2', name: "Affiliation Discount 2", status: "active" },
	{ id: '3', name: "Affiliation Discount 3", status: "inactive" },
]

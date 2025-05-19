import { z } from "zod";
import { BillingCycles, EmailModels, Status } from "./options";
import { createEnumFromOptions } from "@/utils/createEnumFromOptions";

export type PaymentGroup = {
	id: string;
	name: string;
	defaultAmount: number;
	emailModel:typeof EmailModels;
	cycle: typeof BillingCycles;
	status: typeof Status;
};

export const PaymentGroupSchema = z.object({
	id: z.string(),
	name: z.string(),
	defaultAmount: z.number(),
	emailModel: createEnumFromOptions(EmailModels),
	cycle: createEnumFromOptions(BillingCycles),
	status:  createEnumFromOptions(Status),
});

export type PaymentGroupSchemaType = z.infer<typeof PaymentGroupSchema>;


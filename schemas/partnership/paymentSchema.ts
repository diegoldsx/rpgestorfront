import { z } from "zod";

export const PaymentSchema = z.object({
	id: z.number(),
	name: z.string(),
	status: z.enum(["active", "inactive"]),
});

export type PaymentSchemaType = z.infer<typeof PaymentSchema>;

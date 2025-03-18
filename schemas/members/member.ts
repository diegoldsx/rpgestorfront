import { z } from "zod";
import { StateUFSchema } from "../StateUF";

export const MemberSchema = z.object({
	id: z.string(),
	email: z.string().email(),
	phone: z.string().optional(),
	mobile: z.string().optional(),
	name: z.string().optional(),
	birthDate: z.string().optional(),
	corporateName: z.string().optional(),
	tradeName: z.string().optional(),
	financialStatus: z.string(),
	billingCycle: z.string(),
	paymentGroup: z.string(),
	paymentMethod: z.string(),
	type: z.string(),
	password: z.string().optional(),
	cep: z.string(),
	street: z.string(),
	number: z.string(),
	complement: z.string().optional(),
	neighborhood: z.string(),
	state: z.nativeEnum(StateUFSchema.Values),
	city: z.string(),
	document: z.string(),
});

export type MemberSchemaType = z.infer<typeof MemberSchema>;

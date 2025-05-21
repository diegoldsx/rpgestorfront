import { z } from "zod";
import { BillingCycleEnum, EmailModelEnum, StatusEnum } from "./options";


export const PaymentGroupSchema = z.object({
	id: z.string(),
	name: z.string(),
	defaultAmount: z.number(),
	emailModel: EmailModelEnum,
	cycle: BillingCycleEnum,
	status: StatusEnum,
});

export type PaymentGroupType = z.infer<typeof PaymentGroupSchema>;

export const fakePaymentGroups: PaymentGroupType[] = [
	{
		id: '1',
		name: 'Payment Group 1',
		defaultAmount: 100,
		emailModel: 'mobile',
		cycle: 'monthly',
		status: 'active',
	},
	{
		id: '2',
		name: 'Payment Group 2',
		defaultAmount: 200,
		emailModel: 'card',
		cycle: 'bimonthly',
		status: 'inactive',
	},
	{
		id: '3',
		name: 'Payment Group 3',
		defaultAmount: 300,
		emailModel: 'associateCard',
		cycle: 'quarterly',
		status: 'pending',
	},
];

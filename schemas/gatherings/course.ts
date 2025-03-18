import { z } from "zod";

export const CourseSchema = z.object({
	category: z.string(),
	name: z.string(),
	startDate: z.string(),
	endDate: z.string(),
	registrationDeadline: z.string(),
	participantLimit: z.number(),
	instructors: z.string(),
	description: z.string(),
	permissions: z.string(),
	value: z.number(),
	costCenter: z.string(),
	billing: z.string(),
	account: z.string(),
	enrollment: z.string(),
	paymentConfirmation: z.boolean(),
	exemption: z.boolean(),
	cancellation: z.boolean(),
	inviteConfirmation: z.boolean(),
	status: z.string(),
});

export type Course = z.infer<typeof CourseSchema>;

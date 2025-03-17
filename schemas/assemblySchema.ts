import { z } from "zod";

export const AssemblySchema = z.object({
	id: z.number().optional(),
	name: z.string(),
	status: z.string(),
	startDate: z.string().optional(),
	endDate: z.string().optional(),
	resultDate: z.string().optional(),
	description: z.string(),
	type: z.string(),
	allowChangeVote: z.string(),
	displayMode: z.string(),
	videoConference: z.string(),
});

export type AssemblySchemaType = z.infer<typeof AssemblySchema>;
